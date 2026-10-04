type StatCardProps = {
  title: string;
  value: string;
  change?: string;
  tone?: 'default' | 'green' | 'red' | 'blue';
};

const tones: Record<NonNullable<StatCardProps['tone']>, string> = {
  default: 'bg-slate-900 text-white',
  green: 'bg-emerald-500 text-white',
  red: 'bg-rose-500 text-white',
  blue: 'bg-sky-500 text-white',
};

export function StatCard({ title, value, change, tone = 'default' }: StatCardProps) {
  return (
    <div className={`rounded-2xl p-5 shadow-sm ${tones[tone]}`}>
      <p className="text-sm opacity-80">{title}</p>
      <div className="mt-3 flex items-end justify-between">
        <h3 className="text-3xl font-bold">{value}</h3>
        {change ? <span className="text-xs opacity-80">{change}</span> : null}
      </div>
    </div>
  );
}
