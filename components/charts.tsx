"use client";

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, BarChart, Bar } from "recharts";
import { Card } from "@/components/ui";

export function WellnessChart({ data }: { data: Array<Record<string, string | number>> }) {
  return (
    <Card className="h-80">
      <div className="mb-4">
        <h3 className="text-lg font-black text-navy">Últimos 7 dias</h3>
        <p className="text-sm text-slate-500">Humor, sono, estresse e energia.</p>
      </div>
      <ResponsiveContainer width="100%" height="78%">
        <LineChart data={data}>
          <XAxis dataKey="date" />
          <YAxis domain={[1, 5]} />
          <Tooltip />
          <Line type="monotone" dataKey="humor" stroke="#10B981" strokeWidth={3} />
          <Line type="monotone" dataKey="sono" stroke="#6366F1" strokeWidth={3} />
          <Line type="monotone" dataKey="estresse" stroke="#F59E0B" strokeWidth={3} />
          <Line type="monotone" dataKey="energia" stroke="#0F766E" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}

export function CompanyChart({ data }: { data: Array<Record<string, string | number>> }) {
  return (
    <Card className="h-80">
      <h3 className="mb-4 text-lg font-black text-navy">Tendência consolidada</h3>
      <ResponsiveContainer width="100%" height="82%">
        <BarChart data={data}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="humor" fill="#10B981" radius={8} />
          <Bar dataKey="estresse" fill="#F59E0B" radius={8} />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
}

export function WalkingProgressChart({ data }: { data: Array<Record<string, string | number>> }) {
  return (
    <Card className="h-80">
      <div className="mb-4">
        <h3 className="text-lg font-black text-navy">Evolucao de caminhada</h3>
        <p className="text-sm text-slate-500">Distancia, minutos e frequencia sem comparacao social.</p>
      </div>
      <ResponsiveContainer width="100%" height="78%">
        <BarChart data={data}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="km" fill="#10B981" radius={8} />
          <Bar dataKey="minutos" fill="#172554" radius={8} />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
}
