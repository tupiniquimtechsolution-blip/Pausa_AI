export const FOCUS_DURATIONS = [25, 45, 60] as const;
export type FocusStatus = "IDLE" | "RUNNING" | "PAUSED" | "COMPLETED" | "CANCELLED";

export type FocusTimerState = {
  version: 1;
  completionToken: string;
  durationMinutes: number;
  secondsLeft: number;
  status: FocusStatus;
  startedAt: string | null;
  lastTickAt: string | null;
};

export type FocusTimerEvent =
  | { type: "HYDRATE"; state: FocusTimerState }
  | { type: "SELECT_DURATION"; durationMinutes: number }
  | { type: "START"; now: string }
  | { type: "TICK"; now: string }
  | { type: "PAUSE"; now: string }
  | { type: "RESUME"; now: string }
  | { type: "RESTART"; now: string }
  | { type: "CANCEL"; now: string };

export function createFocusTimerState(
  durationMinutes = 25,
  completionToken = crypto.randomUUID()
): FocusTimerState {
  const safeDuration = Math.min(120, Math.max(1, Math.round(durationMinutes)));
  return {
    version: 1,
    completionToken,
    durationMinutes: safeDuration,
    secondsLeft: safeDuration * 60,
    status: "IDLE",
    startedAt: null,
    lastTickAt: null
  };
}

export function focusTimerReducer(state: FocusTimerState, event: FocusTimerEvent): FocusTimerState {
  if (event.type === "HYDRATE") return event.state;
  if (event.type === "SELECT_DURATION") {
    return createFocusTimerState(event.durationMinutes);
  }
  if (event.type === "START") {
    if (state.status === "RUNNING") return state;
    return {
      ...state,
      status: "RUNNING",
      startedAt: state.startedAt || event.now,
      lastTickAt: event.now
    };
  }
  if (event.type === "TICK") {
    if (state.status !== "RUNNING" || !state.lastTickAt) return state;
    const elapsed = Math.max(
      0,
      Math.floor((new Date(event.now).getTime() - new Date(state.lastTickAt).getTime()) / 1000)
    );
    if (elapsed < 1) return state;
    const secondsLeft = Math.max(0, state.secondsLeft - elapsed);
    return {
      ...state,
      secondsLeft,
      lastTickAt: event.now,
      status: secondsLeft === 0 ? "COMPLETED" : "RUNNING"
    };
  }
  if (event.type === "PAUSE") {
    const ticked = focusTimerReducer(state, { type: "TICK", now: event.now });
    return ticked.status === "COMPLETED"
      ? ticked
      : { ...ticked, status: "PAUSED", lastTickAt: null };
  }
  if (event.type === "RESUME") {
    return state.status === "PAUSED"
      ? { ...state, status: "RUNNING", lastTickAt: event.now }
      : state;
  }
  if (event.type === "RESTART") {
    return {
      ...createFocusTimerState(state.durationMinutes, state.completionToken),
      status: "IDLE"
    };
  }
  if (event.type === "CANCEL") {
    return { ...state, status: "CANCELLED", lastTickAt: null };
  }
  return state;
}

export function hydrateFocusTimer(value: unknown, now = new Date().toISOString()) {
  if (!value || typeof value !== "object") return null;
  const candidate = value as Partial<FocusTimerState>;
  if (
    candidate.version !== 1
    || typeof candidate.completionToken !== "string"
    || typeof candidate.durationMinutes !== "number"
    || typeof candidate.secondsLeft !== "number"
    || !["IDLE", "RUNNING", "PAUSED", "COMPLETED", "CANCELLED"].includes(candidate.status || "")
  ) return null;
  const state = candidate as FocusTimerState;
  return state.status === "RUNNING"
    ? focusTimerReducer(state, { type: "TICK", now })
    : state;
}

export function completedSeconds(state: FocusTimerState) {
  return Math.max(0, state.durationMinutes * 60 - state.secondsLeft);
}
