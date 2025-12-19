import Link from "next/link";
import Container from "./Container";

const footerSections = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/company/about" },
      { label: "Leadership & Governance", href: "/company/leadership" },
      { label: "Compliance & Trust", href: "/compliance" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Overview", href: "/solutions" },
      { label: "Managed Telecom", href: "/solutions#managed-telecom" },
      { label: "Connectivity Services", href: "/solutions#connectivity" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "FAQs", href: "/contact#faqs" },
      { label: "Service Availability", href: "/network" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/legal/privacy" },
      { label: "Cookie Policy", href: "/legal/cookies" },
      { label: "Terms of Use", href: "/legal/terms" },
      { label: "Acceptable Use Policy", href: "/legal/acceptable-use" },
      { label: "Data Processing Agreement", href: "/legal/dpa" },
      { label: "Modern Slavery Statement", href: "/legal/modern-slavery" },
      { label: "Accessibility Statement", href: "/legal/accessibility" },
      { label: "Impressum", href: "/legal/impressum" },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-900/80 bg-slate-950">
      <Container className="grid gap-10 py-12 md:grid-cols-5">
        <div className="space-y-4 md:col-span-2">
          <p className="text-sm uppercase tracking-[0.26em] text-white">
            NEXTGEN TELCOM LTD
          </p>
          <p className="text-sm leading-relaxed text-slate-400">
            Regulated telecom services for business customers only. Compliance,
            reliability, and guided onboarding are at the core of every
            engagement.
          </p>
        </div>
        {footerSections.map((section) => (
          <div key={section.title} className="space-y-3 text-sm">
            <p className="font-semibold text-white">{section.title}</p>
            <ul className="space-y-2 text-slate-400">
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>
      <div className="border-t border-slate-900/80 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} NEXTGEN TELCOM LTD. All rights reserved.
      </div>
    </footer>
  );
}
