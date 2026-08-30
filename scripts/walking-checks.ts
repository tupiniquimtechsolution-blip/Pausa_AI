import assert from "node:assert/strict";
import { randomUUID } from "node:crypto";
import {
  averageSpeedKmh,
  calculateRouteDistanceMeters,
  estimateWalkingCalories,
  haversineDistanceMeters,
  paceString,
  shouldAutoPause,
  walkingRecommendationFromCheckin,
  type RoutePoint
} from "../lib/walking";
import { walkingSessionSchema } from "../lib/validators";

const a: RoutePoint = { lat: -23.561414, lng: -46.655881, timestamp: new Date().toISOString() };
const b: RoutePoint = { lat: -23.562414, lng: -46.655881, timestamp: new Date(Date.now() + 60_000).toISOString() };

const singleDistance = haversineDistanceMeters(a, b);
assert(singleDistance > 100 && singleDistance < 120, `distancia inesperada: ${singleDistance}`);
assert.equal(Math.round(calculateRouteDistanceMeters([a, b])), Math.round(singleDistance));
assert.equal(averageSpeedKmh(1000, 600), 6);
assert.equal(paceString(600, 1000), "10:00/km");
assert(estimateWalkingCalories({ durationSeconds: 1800, speedKmh: 5, intensity: "Moderada" }) > 100);
assert.equal(shouldAutoPause({ speedKmh: 0.2, lowSpeedSeconds: 20 }), true);
assert.equal(shouldAutoPause({ speedKmh: 0.8, lowSpeedSeconds: 30 }), false);

assert.equal(walkingRecommendationFromCheckin({ stressScore: 5, manualTags: ["Muito estresse"] }).mode, "stress_relief");
assert.equal(walkingRecommendationFromCheckin({ stressScore: 5, energyScore: 5, manualTags: ["Ansiedade"] }).mode, "anxiety");
assert.equal(walkingRecommendationFromCheckin({ energyScore: 2, manualTags: ["Pouca energia"] }).mode, "light");
assert.equal(walkingRecommendationFromCheckin({ manualTags: ["Dor lombar"] }).mode, "light");
assert.equal(walkingRecommendationFromCheckin({ manualTags: ["Pernas pesadas"] }).mode, "chair");

const parsed = walkingSessionSchema.safeParse({
  completionToken: randomUUID(),
  walkingMode: "light",
  goal: "recovery",
  startedAt: new Date().toISOString(),
  endedAt: new Date(Date.now() + 600_000).toISOString(),
  durationSeconds: 600,
  movingTimeSeconds: 580,
  routePoints: [a, b],
  gpsEnabled: true,
  timerOnly: false,
  privacy: "private",
  hideRouteEdges: true,
  moodBefore: 3,
  moodAfter: 4,
  stressBefore: 4,
  stressAfter: 2,
  anxietyBefore: 4,
  anxietyAfter: 2
});
assert.equal(parsed.success, true);

console.log("Walking checks passaram: calculos, recomendacoes, validacao e pausa automatica.");
