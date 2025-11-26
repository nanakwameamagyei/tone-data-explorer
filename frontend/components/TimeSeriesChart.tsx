"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

export default function TimeSeriesChart({ data }) {
  if (!data) return null;

  return (
    <div className="border p-4 rounded-lg shadow bg-white">
      <h3 className="font-semibold mb-3">Tidsserie — Dyreobservasjoner</h3>

      <LineChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis label={{ value: "Observasjoner", angle: -90, position: "insideLeft" }} />
        <Tooltip />
        <Line type="monotone" dataKey="count" stroke="#2563eb" strokeWidth={2} />
      </LineChart>
    </div>
  );
}
