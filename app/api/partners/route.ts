import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/auth";

export async function GET() {
  await requireUser();
  const partners = await prisma.partner.findMany({ orderBy: [{ status: "asc" }, { name: "asc" }] });
  return NextResponse.json({ partners });
}
