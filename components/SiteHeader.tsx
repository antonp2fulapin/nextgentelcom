import Link from "next/link";
import Container from "./Container";

const navigation = [
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
  { label: "Compliance", href: "/compliance" },
  { label: "Network", href: "/network" },
  { label: "Company", href: "/company" },
  { label: "Contact", href: "/contact" },
];

export default function SiteHeader() {
  return (
    <header className="border-b border-slate-900/80 bg-slate-950/80 backdrop-blur">
      <Container className="flex items-center justify-between py-6">
        <Link
          href="/"
          className="text-sm font-semibold uppercase tracking-[0.28em] text-white"
        >
          NEXTGEN TELCOM LTD
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="inline-flex items-center rounded-full border border-slate-700 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:border-slate-400"
        >
          Apply
        </Link>
      </Container>
    </header>
  );
}
