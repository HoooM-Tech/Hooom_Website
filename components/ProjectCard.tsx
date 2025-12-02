"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Project } from "../data/work";

interface Props {
  project: Project;
}

export function ProjectCard({ project }: Props) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="card-surface p-6 soft-shadow flex flex-col h-full"
      transition={{ type: "spring", stiffness: 240, damping: 18 }}
    >
      <div className="flex items-center justify-between gap-2">
        <p className="text-xs uppercase tracking-[0.2em] text-brand-orange">
          {project.industry}
        </p>
        <span className="text-xs text-slate-500">
          {project.tags.join(" • ")}
        </span>
      </div>
      <h3 className="mt-3 text-xl font-semibold text-slate-900">
        {project.name}
      </h3>
      <p className="mt-2 text-slate-600 flex-1">{project.shortDescription}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.servicesProvided.map((service) => (
          <span
            key={service}
            className="rounded-full bg-slate-100 text-slate-700 px-3 py-1 text-xs font-semibold"
          >
            {service}
          </span>
        ))}
      </div>
      <Link
        href={`/work/${project.slug}`}
        className="mt-4 inline-flex items-center text-sm font-semibold text-brand-teal hover:text-brand-orange"
      >
        View case study →
      </Link>
    </motion.div>
  );
}
