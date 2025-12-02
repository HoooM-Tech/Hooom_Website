import { ReactNode } from "react";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  actions?: ReactNode;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  actions,
}: SectionHeaderProps) {
  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
      <div>
        {eyebrow && (
          <p className="text-sm uppercase tracking-[0.2em] text-brand-orange font-semibold">
            {eyebrow}
          </p>
        )}
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
          {title}
        </h2>
        {description && (
          <p className="mt-2 text-slate-600 max-w-2xl">{description}</p>
        )}
      </div>
      {actions && <div className="flex-shrink-0">{actions}</div>}
    </div>
  );
}
