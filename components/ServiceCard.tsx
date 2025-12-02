"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Service } from "../data/services";

interface Props {
  service: Service;
  compact?: boolean;
}

export function ServiceCard({ service, compact }: Props) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="card-surface p-6 soft-shadow h-full flex flex-col"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-slate-900">{service.name}</h3>
        <span className="text-xs uppercase tracking-[0.2em] text-brand-orange">
          {service.slug}
        </span>
      </div>
      <p className="mt-3 text-slate-600 flex-1">{service.shortDescription}</p>
      {!compact && (
        <ul className="mt-4 space-y-2 text-sm text-slate-600 list-disc list-inside">
          {service.bullets.slice(0, 3).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
      <Link
        href={`/services/${service.slug}`}
        className="mt-5 inline-flex items-center text-sm font-semibold text-brand-teal hover:text-brand-orange"
      >
        Learn more →
      </Link>
    </motion.div>
  );
}
