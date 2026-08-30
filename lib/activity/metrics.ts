export const ACTIVITY_METRICS_VERSION = "pausa-metrics-2026.07.25-v1";

export type ActivityGpsPoint = {
  latitude: number;
  longitude: number;
  capturedAt: Date;
  accuracyMeters?: number | null;
  altitudeMeters?: number | null;
};

export type PointAssessment = {
  accepted: boolean;
  rejectionReason: string | null;
};

function radians(value: number) {
  return value * Math.PI / 180;
}

export function distanceMeters(a: ActivityGpsPoint, b: ActivityGpsPoint) {
  const radius = 6_371_000;
  const dLat = radians(b.latitude - a.latitude);
  const dLng = radians(b.longitude - a.longitude);
  const lat1 = radians(a.latitude);
  const lat2 = radians(b.latitude);
  const value = Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
  return radius * 2 * Math.atan2(Math.sqrt(value), Math.sqrt(1 - value));
}

export function assessPoint(point: ActivityGpsPoint, previous?: ActivityGpsPoint | null): PointAssessment {
  if (
    !Number.isFinite(point.latitude) ||
    !Number.isFinite(point.longitude) ||
    Math.abs(point.latitude) > 90 ||
    Math.abs(point.longitude) > 180
  ) return { accepted: false, rejectionReason: "INVALID_COORDINATES" };
  if ((point.accuracyMeters || 0) > 100) return { accepted: false, rejectionReason: "LOW_ACCURACY" };
  if (!previous) return { accepted: true, rejectionReason: null };
  const elapsedSeconds = (point.capturedAt.getTime() - previous.capturedAt.getTime()) / 1000;
  if (elapsedSeconds <= 0) return { accepted: false, rejectionReason: "NON_MONOTONIC_TIME" };
  const speedMetersSecond = distanceMeters(previous, point) / elapsedSeconds;
  if (speedMetersSecond > 15) return { accepted: false, rejectionReason: "IMPLAUSIBLE_SPEED" };
  return { accepted: true, rejectionReason: null };
}

export function calculateActivityMetrics(points: ActivityGpsPoint[], movingTimeSeconds: number) {
  let distance = 0;
  let elevationGain = 0;
  for (let index = 1; index < points.length; index += 1) {
    distance += distanceMeters(points[index - 1], points[index]);
    const previousAltitude = points[index - 1].altitudeMeters;
    const altitude = points[index].altitudeMeters;
    if (typeof previousAltitude === "number" && typeof altitude === "number" && altitude > previousAltitude) {
      elevationGain += altitude - previousAltitude;
    }
  }
  const averageSpeedKmh = movingTimeSeconds > 0 ? (distance / 1000) / (movingTimeSeconds / 3600) : 0;
  const averagePaceSecondsKm = distance >= 10 ? movingTimeSeconds / (distance / 1000) : null;
  return {
    distanceMeters: Number(distance.toFixed(2)),
    elevationGainMeters: Number(elevationGain.toFixed(2)),
    averageSpeedKmh: Number(averageSpeedKmh.toFixed(2)),
    averagePaceSecondsKm: averagePaceSecondsKm ? Number(averagePaceSecondsKm.toFixed(2)) : null
  };
}

export function isValidActivityTransition(status: string, action: "PAUSE" | "RESUME" | "FINISH" | "CANCEL") {
  if (action === "PAUSE") return status === "ACTIVE";
  if (action === "RESUME") return status === "PAUSED";
  if (action === "FINISH") return status === "ACTIVE" || status === "PAUSED";
  return status === "ACTIVE" || status === "PAUSED";
}

export const DATA_SOURCE_KINDS = [
  "MANUAL",
  "PHONE_SENSOR",
  "PAUSA_SESSION",
  "BLUETOOTH_DEVICE",
  "IMPORTED_FILE",
  "EXTERNAL_CONNECTOR",
  "ESTIMATED"
] as const;
