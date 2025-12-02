"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { BlogPost } from "../data/blogPosts";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="card-surface p-6 soft-shadow flex flex-col h-full"
      transition={{ duration: 0.25, ease: "easeInOut" }}
    >
      <p className="text-xs uppercase tracking-[0.2em] text-brand-orange">
        {post.category}
      </p>
      <h3 className="mt-3 text-xl font-semibold text-slate-900">
        {post.title}
      </h3>
      <p className="mt-2 text-slate-600 flex-1">{post.metaDescription}</p>
      <div className="mt-4 text-sm text-slate-500 flex items-center gap-3">
        <span>{post.readingTimeMinutes} min read</span>
        <span>•</span>
        <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
      </div>
      <Link
        href={`/insights/${post.slug}`}
        className="mt-4 inline-flex items-center text-sm font-semibold text-brand-teal hover:text-brand-orange"
      >
        Read insight →
      </Link>
    </motion.div>
  );
}
