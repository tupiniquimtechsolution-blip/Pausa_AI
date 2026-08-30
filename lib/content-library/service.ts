import { prisma } from "@/lib/prisma";

export async function getPublishedContentLibrary(pillar: "BODY" | "MIND") {
  return prisma.contentCategory.findMany({
    where: {
      pillar,
      status: "APPROVED",
      approvedAt: { not: null },
      circuits: {
        some: {
          status: "APPROVED",
          approvedAt: { not: null },
          movements: { some: { status: "APPROVED", approvedAt: { not: null } } }
        }
      }
    },
    include: {
      circuits: {
        where: {
          status: "APPROVED",
          approvedAt: { not: null },
          movements: { some: { status: "APPROVED", approvedAt: { not: null } } }
        },
        include: {
          movements: {
            where: { status: "APPROVED", approvedAt: { not: null } },
            orderBy: [{ sortOrder: "asc" }, { title: "asc" }]
          }
        },
        orderBy: [{ sortOrder: "asc" }, { title: "asc" }]
      }
    },
    orderBy: [{ sortOrder: "asc" }, { title: "asc" }]
  });
}

export async function getPublishedEditorialCards(category?: "HEALTH" | "NUTRITION") {
  return prisma.editorialCard.findMany({
    where: {
      ...(category ? { category } : {}),
      status: "APPROVED",
      approvedAt: { not: null }
    },
    orderBy: [{ category: "asc" }, { title: "asc" }]
  });
}
