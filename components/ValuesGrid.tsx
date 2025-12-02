const values = [
  {
    title: "Human-centered",
    description:
      "Every engagement starts with understanding people, context, and measurable success.",
  },
  {
    title: "Outcome-driven",
    description:
      "We align delivery to business metrics, not just features shipped.",
  },
  {
    title: "Engineering excellence",
    description:
      "Quality codebases, scalable architectures, and DevOps by default.",
  },
  {
    title: "Co-creation",
    description:
      "We collaborate closely with founders, product leaders, and enterprise teams.",
  },
  {
    title: "Africa-first",
    description:
      "Built in Lagos, operating globally with insight into African markets.",
  },
];

export function ValuesGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {values.map((value) => (
        <div key={value.title} className="card-surface p-6 soft-shadow h-full">
          <p className="text-sm uppercase tracking-[0.2em] text-brand-orange font-semibold">
            {value.title}
          </p>
          <p className="mt-3 text-slate-700">{value.description}</p>
        </div>
      ))}
    </div>
  );
}
