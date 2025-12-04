interface StatBlockProps {
  label: string;
  value: string;
  detail?: string;
}

export function StatBlock({ label, value, detail }: StatBlockProps) {
  return (
    <div className="card-surface p-4 flex flex-col gap-1 soft-shadow">
      <span className="text-sm uppercase tracking-[0.2em] text-brand-orange font-semibold">
        {label}
      </span>
      <p className="text-2xl font-semibold text-slate-900">{value}</p>
      {detail && <p className="text-sm text-slate-800">{detail}</p>}
    </div>
  );
}
