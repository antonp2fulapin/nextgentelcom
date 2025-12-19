import ContactForm from "./ContactForm";

export default function ContactPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col gap-10 px-6 py-16">
      <header className="space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
          Contact & Application
        </p>
        <h1 className="text-3xl font-semibold leading-tight text-white md:text-5xl">
          Apply for regulated telecom services.
        </h1>
        <p className="max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg">
          NEXTGEN TELCOM LTD serves verified business customers only. All
          applications require a valid business email and completion of KYC
          checks before services can be activated.
        </p>
      </header>

      <ContactForm />

      <section className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6 text-sm text-slate-300">
        <h2 className="text-base font-semibold text-white">What happens next</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>We review your submission and confirm compliance requirements.</li>
          <li>Our team schedules KYC and number registration steps.</li>
          <li>Porting and migration timelines are confirmed in writing.</li>
        </ul>
      </section>
    </main>
  );
}
