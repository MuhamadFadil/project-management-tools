'use client';

import {
  Bar,
  BarChart,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const pieData = [
  { name: 'Not Yet', value: 12, color: '#94a3b8' },
  { name: 'On Progress', value: 8, color: '#3b82f6' },
  { name: 'Complete', value: 20, color: '#22c55e' },
];

const barData = [
  { day: 'Mon', value: 6 },
  { day: 'Tue', value: 10 },
  { day: 'Wed', value: 8 },
  { day: 'Thu', value: 12 },
  { day: 'Fri', value: 9 },
];

export function TaskChart() {
  return (
    <section className="grid gap-6 lg:grid-cols-2">
      <div className="card p-5">
        <h2 className="mb-4 text-xl font-semibold text-slate-900">Task Overview</h2>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={pieData} dataKey="value" nameKey="name" innerRadius={38} outerRadius={86} paddingAngle={3}>
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="card p-5">
        <h2 className="mb-4 text-xl font-semibold text-slate-900">Weekly Activity</h2>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barData}>
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" radius={[8, 8, 0, 0]} fill="#0f172a" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}
