import Link from "next/link";
import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";

export const metadata = {
  title: "Home",
  description:
    "NEXTGEN TELCOM LTD provides next-generation telecom solutions exclusively for business customers.",
};

export default function HomePage() {
  return (
    <main>
      <section className="border-b border-slate-900/80 py-16">
        <Container className="flex flex-col gap-8">
          <SectionHeading
            label="NEXTGEN TELCOM LTD"
            title="Next-generation telecom, delivered for regulated businesses."
            description="We provide compliant telecom services for business customers only. Every engagement follows mandatory KYC and number registration requirements."
          />
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-slate-900 transition hover:bg-slate-200"
            >
              Apply for service
            </Link>
            <Link
              href="/solutions"
              className="inline-flex items-center rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:border-slate-400"
            >
              View solutions
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container className="grid gap-10 md:grid-cols-2">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
              Full-service delivery
            </p>
            <h2 className="text-2xl font-semibold text-white md:text-3xl">
              We manage registration, porting, migration, and configuration end
              to end.
            </h2>
            <p className="text-base leading-relaxed text-slate-300">
              Our teams coordinate all regulatory and operational steps so your
              organisation can move away from legacy systems with minimal
              disruption.
            </p>
          </div>
          <div className="grid gap-4">
            {[
              "DID acquisition (local, national, international)",
              "Number registration & regulatory compliance",
              "Number porting from legacy providers",
              "Call routing & advanced call flows",
              "Internal business calls & conferencing",
              "Migration from legacy telephony to VoIP",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-800 bg-slate-900/40 px-5 py-4 text-sm text-slate-200"
              >
                {item}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-slate-900/80 py-16">
        <Container className="grid gap-10 md:grid-cols-2">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
              Platform access
            </p>
            <h2 className="text-2xl font-semibold text-white md:text-3xl">
              A single platform for regulated telecom operations.
            </h2>
            <p className="text-base leading-relaxed text-slate-300">
              The Nextgen Web App is live for business users. iOS and Android
              applications are in development and will follow a regulated
              release process.
            </p>
          </div>
          <div className="space-y-4 rounded-3xl border border-slate-800 bg-slate-900/40 p-6 text-sm text-slate-300">
            <p className="font-semibold text-white">Included capabilities</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>IVR creation and management aligned to compliance.</li>
              <li>AI-powered inbound call bots for triage and routing.</li>
              <li>Integration with HubSpot and custom API workflows.</li>
              <li>Secure internal calling and conferencing.</li>
            </ul>
          </div>
        </Container>
      </section>
    </main>
  );
}
