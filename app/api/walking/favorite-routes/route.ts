import { NextResponse } from "next/server";
import { requireUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { walkingFavoriteRouteSchema } from "@/lib/validators";
import { calculateRouteDistanceMeters, cleanRoutePoints, maskRouteEdges } from "@/lib/walking";

export async function GET() {
  const user = await requireUser();
  const routes = await prisma.walkingFavoriteRoute.findMany({
    where: { userId: user.id },
    orderBy: [{ lastUsedAt: "desc" }, { createdAt: "desc" }]
  });
  return NextResponse.json({
    routes: routes.map((route) => ({
      ...route,
      routePoints: maskRouteEdges(parseRoutePoints(route.routePoints), route.hideRouteEdges)
    }))
  });
}

export async function POST(request: Request) {
  const user = await requireUser();
  const body = await request.json().catch(() => null);
  const parsed = walkingFavoriteRouteSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Rota favorita invalida." }, { status: 400 });

  const routePoints = cleanRoutePoints(parsed.data.routePoints);
  const distanceMeters = parsed.data.distanceMeters || calculateRouteDistanceMeters(routePoints);
  const favorite = await prisma.walkingFavoriteRoute.create({
    data: {
      userId: user.id,
      title: parsed.data.title,
      walkingMode: parsed.data.walkingMode,
      distanceMeters,
      routePoints: JSON.stringify(routePoints),
      privacy: parsed.data.privacy,
      hideRouteEdges: parsed.data.hideRouteEdges,
      lastUsedAt: new Date()
    }
  });

  return NextResponse.json({
    ok: true,
    favorite: {
      ...favorite,
      routePoints: maskRouteEdges(routePoints, favorite.hideRouteEdges)
    },
    message: "Rota favorita salva com privacidade."
  });
}

function parseRoutePoints(value: string) {
  try {
    const parsed = JSON.parse(value || "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}
