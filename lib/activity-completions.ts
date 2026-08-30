import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { getLevelForXp } from "@/lib/levels";

export type ActivityType =
  | "CHECKIN"
  | "MISSION"
  | "EXERCISE"
  | "EXERCISE_INSTRUCTION"
  | "YOGA"
  | "WORKOUT"
  | "WALKING";

type DomainRecord = { id: string };

export type CompleteActivityInput<T extends DomainRecord> = {
  userId: string;
  activityType: ActivityType;
  source: string;
  targetId: string;
  checkinId?: string | null;
  completionToken: string;
  domainRecordType: string;
  xpAwarded: number | ((tx: Prisma.TransactionClient, domain: T) => Promise<number> | number);
  createDomain: (tx: Prisma.TransactionClient) => Promise<T>;
};

export type CompleteActivityResult<T extends DomainRecord> = {
  alreadyCompleted: boolean;
  xpAwarded: number;
  originalXpAwarded: number;
  sessionId: string | null;
  leveledUp: boolean;
  previousLevel: number;
  level: number;
  userXp: number;
  domain: T | null;
};

export function buildActivityDedupeKey(input: {
  userId: string;
  activityType: ActivityType;
  targetId: string;
  checkinId?: string | null;
  completionToken: string;
}) {
  const scope = input.checkinId ? `checkin:${input.checkinId}` : `token:${input.completionToken}`;
  return ["v1", input.userId, input.activityType, input.targetId, scope].join("|");
}

async function duplicateResult<T extends DomainRecord>(dedupeKey: string): Promise<CompleteActivityResult<T> | null> {
  const receipt = await prisma.activityCompletion.findUnique({ where: { dedupeKey } });
  if (!receipt) return null;
  const user = await prisma.user.findUnique({ where: { id: receipt.userId } });
  if (!user) throw new Error("Usuario da conclusao nao foi encontrado.");
  return {
    alreadyCompleted: true,
    xpAwarded: 0,
    originalXpAwarded: receipt.xpAwarded,
    sessionId: receipt.domainRecordId,
    leveledUp: false,
    previousLevel: user.level,
    level: user.level,
    userXp: user.xp,
    domain: null
  };
}

function isRetryableTransactionError(error: unknown) {
  return error instanceof Prisma.PrismaClientKnownRequestError && ["P2002", "P2034"].includes(error.code);
}

export async function completeActivity<T extends DomainRecord>(
  input: CompleteActivityInput<T>
): Promise<CompleteActivityResult<T>> {
  const dedupeKey = buildActivityDedupeKey(input);

  for (let attempt = 0; attempt < 3; attempt += 1) {
    try {
      return await prisma.$transaction(async (tx) => {
        const existing = await tx.activityCompletion.findUnique({ where: { dedupeKey } });
        if (existing) {
          const currentUser = await tx.user.findUnique({ where: { id: input.userId } });
          if (!currentUser) throw new Error("Usuario da conclusao nao foi encontrado.");
          return {
            alreadyCompleted: true,
            xpAwarded: 0,
            originalXpAwarded: existing.xpAwarded,
            sessionId: existing.domainRecordId,
            leveledUp: false,
            previousLevel: currentUser.level,
            level: currentUser.level,
            userXp: currentUser.xp,
            domain: null
          };
        }

        const userBefore = await tx.user.findUnique({ where: { id: input.userId } });
        if (!userBefore) throw new Error("Usuario da conclusao nao foi encontrado.");

        await tx.activityCompletion.create({
          data: {
            dedupeKey,
            userId: input.userId,
            activityType: input.activityType,
            source: input.source,
            targetId: input.targetId,
            checkinId: input.checkinId || null,
            completionToken: input.completionToken,
            domainRecordType: input.domainRecordType,
            xpAwarded: 0
          }
        });

        const domain = await input.createDomain(tx);
        const rawXp = typeof input.xpAwarded === "function" ? await input.xpAwarded(tx, domain) : input.xpAwarded;
        const xpAwarded = Math.max(0, Math.trunc(rawXp));
        let currentUser = userBefore;

        if (xpAwarded > 0) {
          const incremented = await tx.user.update({
            where: { id: input.userId },
            data: { xp: { increment: xpAwarded } }
          });
          const nextLevel = getLevelForXp(incremented.xp);
          currentUser = nextLevel === incremented.level
            ? incremented
            : await tx.user.update({
                where: { id: input.userId },
                data: {
                  level: nextLevel,
                  lastLevelUpAt: nextLevel > userBefore.level ? new Date() : incremented.lastLevelUpAt
                }
              });
        }

        await tx.activityCompletion.update({
          where: { dedupeKey },
          data: { domainRecordId: domain.id, xpAwarded }
        });

        return {
          alreadyCompleted: false,
          xpAwarded,
          originalXpAwarded: xpAwarded,
          sessionId: domain.id,
          leveledUp: currentUser.level > userBefore.level,
          previousLevel: userBefore.level,
          level: currentUser.level,
          userXp: currentUser.xp,
          domain
        };
      }, {
        isolationLevel: Prisma.TransactionIsolationLevel.Serializable,
        maxWait: 5_000,
        timeout: 15_000
      });
    } catch (error) {
      if (!isRetryableTransactionError(error)) throw error;
      const duplicate = await duplicateResult<T>(dedupeKey);
      if (duplicate) return duplicate;
      if (attempt === 2) throw error;
    }
  }

  throw new Error("Nao foi possivel concluir a atividade de forma idempotente.");
}
