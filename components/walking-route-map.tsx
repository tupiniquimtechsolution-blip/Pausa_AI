import { MapPinned } from "lucide-react";
import { maskRouteEdges, type RoutePoint } from "@/lib/walking";

export function WalkingRouteMap({ points, hideRouteEdges = false, className = "" }: { points: RoutePoint[]; hideRouteEdges?: boolean; className?: string }) {
  const route = maskRouteEdges(points, hideRouteEdges);
  const path = route.length > 1 ? svgPath(route) : "";

  return (
    <div className={`relative overflow-hidden rounded-3xl border border-line bg-ice dark:border-slate-800 dark:bg-slate-950 ${className}`}>
      <div className="absolute inset-0 opacity-70" style={{ backgroundImage: "linear-gradient(#dbeafe 1px, transparent 1px), linear-gradient(90deg, #dbeafe 1px, transparent 1px)", backgroundSize: "26px 26px" }} />
      {path ? (
        <svg className="relative h-full min-h-[220px] w-full" viewBox="0 0 100 100" preserveAspectRatio="none" role="img" aria-label="Mapa simplificado da rota">
          <path d={path} fill="none" stroke="#10B981" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
          <circle cx={pointToSvg(route[0], bounds(route)).x} cy={pointToSvg(route[0], bounds(route)).y} r="2.6" fill="#172554" vectorEffect="non-scaling-stroke" />
          <circle cx={pointToSvg(route[route.length - 1], bounds(route)).x} cy={pointToSvg(route[route.length - 1], bounds(route)).y} r="2.6" fill="#F59E0B" vectorEffect="non-scaling-stroke" />
        </svg>
      ) : (
        <div className="relative grid min-h-[220px] place-items-center p-6 text-center">
          <div>
            <MapPinned className="mx-auto h-8 w-8 text-positive" />
            <p className="mt-3 font-black text-navy">Mapa aparece quando houver GPS</p>
            <p className="mt-1 text-sm text-text">No modo temporizador, a caminhada continua salva por tempo e sensacao.</p>
          </div>
        </div>
      )}
    </div>
  );
}

function svgPath(points: RoutePoint[]) {
  const box = bounds(points);
  return points.map((point, index) => {
    const { x, y } = pointToSvg(point, box);
    return `${index === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)}`;
  }).join(" ");
}

function bounds(points: RoutePoint[]) {
  const lats = points.map((point) => point.lat);
  const lngs = points.map((point) => point.lng);
  return {
    minLat: Math.min(...lats),
    maxLat: Math.max(...lats),
    minLng: Math.min(...lngs),
    maxLng: Math.max(...lngs)
  };
}

function pointToSvg(point: RoutePoint, box: ReturnType<typeof bounds>) {
  const latSpan = Math.max(0.00001, box.maxLat - box.minLat);
  const lngSpan = Math.max(0.00001, box.maxLng - box.minLng);
  return {
    x: 8 + ((point.lng - box.minLng) / lngSpan) * 84,
    y: 92 - ((point.lat - box.minLat) / latSpan) * 84
  };
}
