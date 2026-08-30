import { NextResponse } from "next/server";
import { requireUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { average } from "@/lib/metrics";
import { isFeatureEnabled } from "@/lib/feature-flags/server";

function periodDays(value: string | null) {
  if (value === "90d") return 90;
  if (value === "30d") return 30;
  return 7;
}

export async function GET(request: Request) {
  const user = await requireUser();
  if (!(await isFeatureEnabled("B2B_REAL_DASHBOARD_ENABLED", { roles: user.roles }))) {
    return NextResponse.json({ enabled: false, message: "Dashboard real B2B esta atras de feature flag. A demo continua como experiencia principal." });
  }

  const url = new URL(request.url);
  const companyId = url.searchParams.get("companyId") || user.companyId;
  const department = url.searchParams.get("department") || "";
  const days = periodDays(url.searchParams.get("period"));
  if (!companyId) return NextResponse.json({ error: "Empresa nao informada." }, { status: 400 });
  if (!user.roles.some((role) => role === "MASTER" || role === "ADMIN") && (user.companyRole !== "COMPANY_ADMIN" || user.companyId !== companyId)) {
    return NextResponse.json({ error: "Acesso negado." }, { status: 403 });
  }

  const employees = await prisma.user.findMany({
    where: { companyId, ...(department ? { department } : {}) },
    select: { id: true, department: true }
  });
  if (employees.length < 5) {
    return NextResponse.json({ enabled: true, insufficientData: true, minimumUsers: 5, userCount: employees.length });
  }

  const since = new Date(Date.now() - days * 24 * 60 * 60 * 1000);
  const userIds = employees.map((employee) => employee.id);
  const checkins = await prisma.checkin.findMany({ where: { userId: { in: userIds }, createdAt: { gte: since }, riskDetected: false } });
  const completions = await prisma.missionCompletion.findMany({
    where: { userId: { in: userIds }, completedAt: { gte: since } },
    include: { mission: true }
  });
  const activeUsers = new Set(checkins.map((checkin) => checkin.userId)).size;
  const missionCounts = completions.reduce<Record<string, number>>((acc, item) => {
    const title = item.mission?.title || "Missao de check-in";
    acc[title] = (acc[title] || 0) + 1;
    return acc;
  }, {});

  return NextResponse.json({
    enabled: true,
    companyId,
    periodDays: days,
    userCount: employees.length,
    metrics: {
      avgMood: average(checkins.map((item) => item.moodScore)),
      avgStress: average(checkins.map((item) => item.stressScore)),
      avgSleep: average(checkins.map((item) => item.sleepScore)),
      avgEnergy: average(checkins.map((item) => item.energyScore)),
      engagementRate: employees.length ? Math.round((activeUsers / employees.length) * 100) : 0
    },
    topMissions: Object.entries(missionCounts).sort((a, b) => b[1] - a[1]).slice(0, 5).map(([title, count]) => ({ title, count }))
  });
}
