import { randomUUID } from "node:crypto";
import { Prisma, type AgendaEvent } from "@prisma/client";
import { prisma } from "@/lib/prisma";

export type ReservationInput = {
  userId: string;
  entityType: string;
  entityId?: string;
  title: string;
  startDateTime: Date;
  endDateTime: Date;
  timezone: string;
  recurrenceRule?: string | null;
  excludeEntityId?: string;
};

export type ScheduleConflictDetails = {
  id: string;
  title: string;
  startDateTime: string;
  endDateTime: string;
  entityType: string;
};

export class ScheduleConflictError extends Error {
  constructor(public readonly conflict: ScheduleConflictDetails) {
    super(`Conflito com "${conflict.title}" entre ${conflict.startDateTime} e ${conflict.endDateTime}.`);
    this.name = "ScheduleConflictError";
  }
}

export class ScheduleValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ScheduleValidationError";
  }
}

function bucketsFor(start: Date, end: Date) {
  const buckets: string[] = [];
  const cursor = new Date(start);
  cursor.setUTCHours(0, 0, 0, 0);
  const last = new Date(end);
  last.setUTCHours(0, 0, 0, 0);
  while (cursor <= last && buckets.length < 32) {
    buckets.push(cursor.toISOString().slice(0, 10));
    cursor.setUTCDate(cursor.getUTCDate() + 1);
  }
  if (!buckets.length) buckets.push(start.toISOString().slice(0, 10));
  return buckets;
}

async function acquireScheduleMutex(
  tx: Prisma.TransactionClient,
  userId: string,
  start: Date,
  end: Date
) {
  for (const bucketKey of bucketsFor(start, end)) {
    await tx.scheduleMutex.upsert({
      where: { userId_bucketKey: { userId, bucketKey } },
      update: { updatedAt: new Date() },
      create: { userId, bucketKey }
    });
  }
}

async function findConflict(tx: Prisma.TransactionClient, input: ReservationInput) {
  const reservation = await tx.scheduleReservation.findFirst({
    where: {
      userId: input.userId,
      status: "ACTIVE",
      entityId: input.excludeEntityId ? { not: input.excludeEntityId } : undefined,
      startDateTime: { lt: input.endDateTime },
      endDateTime: { gt: input.startDateTime }
    },
    orderBy: { startDateTime: "asc" }
  });
  if (reservation) {
    return {
      id: reservation.entityId,
      title: reservation.title,
      startDateTime: reservation.startDateTime.toISOString(),
      endDateTime: reservation.endDateTime.toISOString(),
      entityType: reservation.entityType
    };
  }

  // Compatibility during the expand/migrate cycle: legacy events may not have a reservation yet.
  const event = await tx.agendaEvent.findFirst({
    where: {
      userId: input.userId,
      id: input.excludeEntityId ? { not: input.excludeEntityId } : undefined,
      deletedAt: null,
      status: { not: "CANCELLED" },
      startDateTime: { lt: input.endDateTime },
      endDateTime: { gt: input.startDateTime }
    },
    orderBy: { startDateTime: "asc" }
  });
  return event ? {
    id: event.id,
    title: event.title,
    startDateTime: event.startDateTime.toISOString(),
    endDateTime: event.endDateTime.toISOString(),
    entityType: "AGENDA_EVENT"
  } : null;
}

function validateInterval(input: ReservationInput) {
  if (!Number.isFinite(input.startDateTime.getTime()) || !Number.isFinite(input.endDateTime.getTime())) {
    throw new ScheduleValidationError("Data ou horário inválido.");
  }
  if (input.endDateTime <= input.startDateTime) {
    throw new ScheduleValidationError("O término precisa ocorrer depois do início.");
  }
  if (input.endDateTime.getTime() - input.startDateTime.getTime() > 1000 * 60 * 60 * 24 * 31) {
    throw new ScheduleValidationError("O período reservado excede 31 dias.");
  }
}

export async function reserveIntervalInTransaction(
  tx: Prisma.TransactionClient,
  input: ReservationInput
) {
  validateInterval(input);
  await acquireScheduleMutex(tx, input.userId, input.startDateTime, input.endDateTime);
  const conflict = await findConflict(tx, input);
  if (conflict) throw new ScheduleConflictError(conflict);

  const entityId = input.entityId || randomUUID();
  return tx.scheduleReservation.upsert({
    where: { entityType_entityId: { entityType: input.entityType, entityId } },
    update: {
      title: input.title,
      startDateTime: input.startDateTime,
      endDateTime: input.endDateTime,
      timezone: input.timezone,
      recurrenceRule: input.recurrenceRule || null,
      status: "ACTIVE",
      version: { increment: 1 }
    },
    create: {
      userId: input.userId,
      entityType: input.entityType,
      entityId,
      title: input.title,
      startDateTime: input.startDateTime,
      endDateTime: input.endDateTime,
      timezone: input.timezone,
      recurrenceRule: input.recurrenceRule || null,
      dedupeKey: `${input.entityType}:${input.userId}:${entityId}`
    }
  });
}

type AgendaEventPayload = Omit<
  Prisma.AgendaEventUncheckedCreateInput,
  "id" | "userId" | "createdAt" | "updatedAt" | "deletedAt" | "startDateTime" | "endDateTime"
> & {
  startDateTime: Date;
  endDateTime: Date;
};

export async function saveAgendaEventWithReservation(input: {
  userId: string;
  eventId?: string;
  data: AgendaEventPayload;
}) {
  return prisma.$transaction(async (tx) => {
    const eventId = input.eventId || randomUUID();
    await reserveIntervalInTransaction(tx, {
      userId: input.userId,
      entityType: "AGENDA_EVENT",
      entityId: eventId,
      excludeEntityId: input.eventId,
      title: input.data.title,
      startDateTime: input.data.startDateTime,
      endDateTime: input.data.endDateTime,
      timezone: input.data.timezone || "America/Sao_Paulo",
      recurrenceRule: input.data.recurrenceRule
    });
    let event: AgendaEvent;
    if (input.eventId) {
      event = await tx.agendaEvent.update({
        where: { id: input.eventId, userId: input.userId, deletedAt: null },
        data: input.data
      });
    } else {
      event = await tx.agendaEvent.create({
        data: { id: eventId, userId: input.userId, ...input.data }
      });
    }
    await tx.syncQueue.create({
      data: {
        userId: input.userId,
        action: input.eventId ? "UPDATE" : "CREATE",
        entityType: "AgendaEvent",
        entityId: event.id,
        provider: event.source
      }
    });
    return event;
  }, { timeout: 10_000 });
}

export async function cancelAgendaEventWithReservation(userId: string, eventId: string) {
  return prisma.$transaction(async (tx) => {
    const result = await tx.agendaEvent.updateMany({
      where: { id: eventId, userId, deletedAt: null },
      data: { deletedAt: new Date(), status: "CANCELLED" }
    });
    if (result.count === 0) return false;
    await tx.scheduleReservation.updateMany({
      where: { entityType: "AGENDA_EVENT", entityId: eventId, userId },
      data: { status: "CANCELLED" }
    });
    await tx.syncQueue.create({
      data: {
        userId,
        action: "DELETE",
        entityType: "AgendaEvent",
        entityId: eventId,
        provider: "LOCAL"
      }
    });
    return true;
  });
}
