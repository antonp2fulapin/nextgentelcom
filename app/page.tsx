import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col gap-8 px-6 py-16">
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
          NEXTGEN TELCOM LTD
        </p>
        <h1 className="text-3xl font-semibold leading-tight text-white md:text-5xl">
          Next-generation telecom, delivered for regulated businesses.
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
          We provide compliant telecom services for business customers only.
          Submit a brief application to begin the onboarding process.
        </p>
      </div>
      <div>
        <Link
          href="/contact"
          className="inline-flex items-center rounded-full border border-slate-600 px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:border-slate-400"
        >
          Apply for service
        </Link>
      </div>
    </main>
  );
}
