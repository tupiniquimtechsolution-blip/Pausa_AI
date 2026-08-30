import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { redirect } from "next/navigation";
import { requireUser } from "@/lib/auth";
import { walkingModes, type WalkingGoal, type WalkingMode, type WalkingPrivacy } from "@/lib/walking";
import { WalkingSessionRunner, type WalkingStartConfig } from "@/components/walking-session-runner";

const goals = ["stress", "anxiety", "weight_loss", "conditioning", "recovery", "sleep", "energy", "free"];
const privacies = ["private", "friends", "public"];

export default async function WalkingInProgressPage({
  searchParams
}: {
  searchParams: Promise<Record<string, string | undefined>>;
}) {
  const user = await requireUser();
  if (!user.onboardingCompleted) redirect("/app/onboarding");
  const params = await searchParams;
  const config = parseConfig(params);

  return (
    <div className="mx-auto grid max-w-6xl gap-5">
      <Link href={`/app/corpo/caminhada/configurar?tipo=${config.walkingMode}`} className="inline-flex items-center gap-2 text-sm font-bold text-navy">
        <ArrowLeft className="h-4 w-4" /> Ajustar configuracao
      </Link>
      <WalkingSessionRunner config={config} />
    </div>
  );
}

function parseConfig(params: Record<string, string | undefined>): WalkingStartConfig {
  const walkingMode = walkingModes.some((item) => item.id === params.walkingMode) ? params.walkingMode as WalkingMode : "light";
  const mode = walkingModes.find((item) => item.id === walkingMode) || walkingModes[0];
  const goal = goals.includes(params.goal || "") ? params.goal as WalkingGoal : mode.defaultGoal;
  const privacy = privacies.includes(params.privacy || "") ? params.privacy as WalkingPrivacy : "private";
  return {
    walkingMode,
    goal,
    durationMinutes: clampInt(params.durationMinutes, mode.suggestedDurationMinutes, 1, 180),
    targetDistanceMeters: clampNumber(params.targetDistanceMeters, 0, 0, 100000),
    gpsEnabled: params.gpsEnabled === "true",
    timerOnly: params.timerOnly === "true",
    audioAlerts: params.audioAlerts === "true",
    hydrationReminder: params.hydrationReminder !== "false",
    autoPauseEnabled: params.autoPauseEnabled !== "false",
    privacy,
    hideRouteEdges: params.hideRouteEdges === "true",
    moodBefore: clampInt(params.moodBefore, 3, 1, 5),
    stressBefore: clampInt(params.stressBefore, 3, 1, 5),
    anxietyBefore: clampInt(params.anxietyBefore, 3, 1, 5)
  };
}

function clampInt(value: string | undefined, fallback: number, min: number, max: number) {
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) return fallback;
  return Math.min(max, Math.max(min, Math.round(parsed)));
}

function clampNumber(value: string | undefined, fallback: number, min: number, max: number) {
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) return fallback;
  return Math.min(max, Math.max(min, parsed));
}
