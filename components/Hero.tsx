"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-16 bg-green-700">
      <div className="mesh-bg" aria-hidden />
      <div className="section-shell relative grid gap-10 lg:grid-cols-[1.2fr,0.8fr] items-center">
        <div className="space-y-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-800"
          >
            Code. Create. Innovate.
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-800 leading-tight"
          >
            Build Better. Build Faster. Build With HoooM.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-800 max-w-2xl"
          >
            We design and engineer digital products, brands, and enterprise
            systems that help teams scale with confidence.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-3"
          >
            <Link
              href="/contact"
              className="rounded-full bg-cyan-400 text-gray-900 px-6 py-3 text-sm font-semibold shadow-glow hover:bg-slate-800"
            >
              Book a Strategy Call
            </Link>
            <Link
              href="/work"
              className="rounded-full border border-slate-900 text-gray-600 px-6 py-3 text-sm font-semibold hover:bg-slate-900 hover:text-white"
            >
              View Work
            </Link>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="card-surface soft-shadow p-6 lg:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { label: "Projects Delivered", value: "120+" },
              { label: "Industries Served", value: "12" },
              { label: "Avg. ROI", value: "4.5x" },
              { label: "Client NPS", value: "72" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm text-slate-600">{stat.label}</p>
                <p className="text-2xl font-semibold text-slate-900">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-gray-500">
            Engineered for ambitious teams: software development, UX/UI design,
            branding, enterprise systems, and cloud operations.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
