"use client";
import Link from "next/link";
import { motion } from "framer-motion";

interface Props {
  title: string;
  description: string;
  primaryHref: string;
  secondaryHref?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
}

export function CallToAction({
  title,
  description,
  primaryHref,
  secondaryHref,
  primaryLabel = "Book a Strategy Call",
  secondaryLabel = "View Work",
}: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className="card-surface soft-shadow px-6 py-10 overflow-hidden relative"
    >
      <div className="mesh-bg" aria-hidden />
      <div className="relative flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-brand-orange font-semibold">
            Lets build
          </p>
          <h3 className="text-2xl md:text-3xl font-semibold text-slate-900">
            {title}
          </h3>
          <p className="mt-2 text-slate-600 max-w-2xl">{description}</p>
        </div>
        <div className="flex gap-3 flex-wrap">
          <Link
            href={primaryHref}
            className="rounded-full bg-cyan-400 text-gray-900 px-5 py-3 text-sm font-semibold shadow-glow hover:bg-slate-800"
          >
            {primaryLabel}
          </Link>
          {secondaryHref && (
            <Link
              href={secondaryHref}
              className="rounded-full border border-slate-900 text-slate-900 px-5 py-3 text-sm font-semibold hover:bg-slate-900 hover:text-white"
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}
