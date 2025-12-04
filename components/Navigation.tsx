"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  {
    href: "/services",
    label: "Services",
    children: [
      { href: "/services/software-development", label: "Software Development" },
      { href: "/services/product-design", label: "Product Design" },
      { href: "/services/branding", label: "Branding" },
      { href: "/services/enterprise-solutions", label: "Enterprise Solutions" },
      { href: "/services/cloud-devops", label: "Cloud & DevOps" },
    ],
  },
  { href: "/work", label: "Work" },
  { href: "/insights", label: "Insights" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`sticky top-0 z-30 backdrop-blur bg-white/80 border-b border-slate-200 ${
        scrolled ? "shadow-md/10" : "shadow-none"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
        <Link href="/" className="text-lg font-semibold text-slate-900">
          HoooM Technologies
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-800">
          {navItems.map((item) => (
            <div key={item.href} className="relative group">
              <Link
                href={item.href}
                className="hover:text-brand-orange transition-colors"
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="absolute left-0 mt-2 hidden group-hover:block">
                  <div className="card-surface shadow-lg p-4 space-y-2 min-w-[220px]">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block text-sm text-slate-700 hover:text-brand-orange"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>
        <Link
          href="/contact"
          className="hidden sm:inline-flex items-center gap-2 rounded-full bg-cyan-400 text-gray-950 px-4 py-2 text-sm font-semibold shadow-glow hover:bg-slate-800"
        >
          Book a Strategy Call
        </Link>
      </div>
    </motion.header>
  );
}
