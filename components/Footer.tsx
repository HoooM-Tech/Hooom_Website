import Link from "next/link";

const footerNav = {
  quick: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Work", href: "/work" },
    { label: "Insights", href: "/insights" },
  ],
  services: [
    { label: "Software Development", href: "/services/software-development" },
    { label: "Product Design", href: "/services/product-design" },
    { label: "Branding", href: "/services/branding" },
    { label: "Enterprise Solutions", href: "/services/enterprise-solutions" },
    { label: "Cloud & DevOps", href: "/services/cloud-devops" },
  ],
};

export function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-slate-50/70">
      <div className="section-shell grid gap-10 md:grid-cols-[2fr,1fr,1fr]">
        <div>
          <p className="text-xl font-semibold text-gray-800">
            HoooM Technologies
          </p>
          <p className="mt-3 text-slate-800">Code. Create. Innovate.</p>
          <div className="mt-4 space-y-1 text-sm text-slate-800">
            <p>
              Email:{" "}
              <a href="mailto:hello@hooom.org" className="font-medium">
                hello@hooom.org
              </a>
            </p>
            <p>
              Email:{" "}
              <a href="mailto:peter@hooom.org" className="font-medium">
                peter@hooom.org
              </a>
            </p>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wide">
            Quick links
          </h4>
          <ul className="mt-3 space-y-2 text-slate-700">
            {footerNav.quick.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-brand-orange">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wide">
            Services
          </h4>
          <ul className="mt-3 space-y-2 text-slate-700">
            {footerNav.services.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-brand-orange">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200 py-6 text-center text-sm text-slate-500">
        <p className="font-medium text-slate-700">Code. Create. Innovate.</p>
        <p className="mt-1">
          © {new Date().getFullYear()} HoooM Technologies. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
