import Link from "next/link";
import { Hero } from "../../components/Hero";
import { SectionHeader } from "../../components/SectionHeader";
import { ServiceCard } from "../../components/ServiceCard";
import { ProjectCard } from "../../components/ProjectCard";
import { BlogCard } from "../../components/BlogCard";
import { ProcessSteps } from "../../components/ProcessSteps";
import { ValuesGrid } from "../../components/ValuesGrid";
import { CallToAction } from "../../components/CallToAction";
import { services } from "../../data/services";
import { projects } from "../../data/work";
import { blogPosts } from "../../data/blogPosts";

export default function HomePage() {
  const featuredProjects = projects
    .filter((project) => project.featured)
    .slice(0, 4);
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <div>
      <Hero />

      <section className="section-shell">
        <SectionHeader
          eyebrow="Who we are"
          title="We are HoooM Technologies"
          description="A Lagos-built, globally-minded team of designers and engineers crafting software, brands, and systems for high-growth teams."
        />
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {["Product studios", "Enterprises", "Scale-ups", "Nonprofits"].map(
            (item) => (
              <div
                key={item}
                className="card-surface p-4 soft-shadow text-center"
              >
                <p className="text-sm uppercase tracking-[0.2em] text-brand-orange font-semibold">
                  Partners
                </p>
                <p className="mt-2 text-lg font-semibold text-gray-500">
                  {item}
                </p>
              </div>
            )
          )}
        </div>
      </section>

      <section className="section-shell">
        <SectionHeader
          eyebrow="Services"
          title="Build across the product lifecycle"
          description="Strategy, design, engineering, and cloud operations for ambitious teams."
          actions={
            <Link
              href="/services"
              className="rounded-full border border-slate-900 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-900 hover:text-white"
            >
              Explore Services
            </Link>
          }
        />
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      <section className="section-shell">
        <SectionHeader
          eyebrow="Why HoooM"
          title="Outcomes first, aesthetics always"
          description="We blend product strategy, design craft, and robust engineering to ship experiences users love."
        />
        <div className="mt-8">
          <ValuesGrid />
        </div>
      </section>

      <section className="section-shell">
        <SectionHeader
          eyebrow="Featured work"
          title="Proof in the products"
          description="A sample of the platforms, brands, and systems we have shipped with clients."
          actions={
            <Link
              href="/work"
              className="rounded-full border border-slate-900 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-900 hover:text-white"
            >
              View all work
            </Link>
          }
        />
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="section-shell">
        <SectionHeader
          eyebrow="Process"
          title="A clear path from idea to launch"
          description="A disciplined approach keeps stakeholders aligned and delivery predictable."
        />
        <div className="mt-8">
          <ProcessSteps />
        </div>
      </section>

      <section className="section-shell">
        <SectionHeader
          eyebrow="Insights"
          title="Thinking from our team"
          description="Signals on product, engineering, design, and branding from the HoooM team."
          actions={
            <Link
              href="/insights"
              className="rounded-full border border-slate-900 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-900 hover:text-white"
            >
              Read all insights
            </Link>
          }
        />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {latestPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      <section className="section-shell">
        <CallToAction
          title="Ready to build your next product?"
          description="Tell us about your roadmap and we will design a delivery squad around your goals."
          primaryHref="/contact"
          secondaryHref="/work"
          secondaryLabel="See our work"
        />
      </section>
    </div>
  );
}
