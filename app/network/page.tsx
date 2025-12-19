import type { Metadata } from "next";
import Container from "../../components/Container";
import SectionHeading from "../../components/SectionHeading";

export const metadata: Metadata = {
  title: "Network & Coverage",
  description:
    "Reliable business connectivity aligned with regulatory requirements and service availability.",
};

export default function NetworkPage() {
  return (
    <main className="py-16">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          label="Network & Coverage"
          title="Reliable business connectivity with compliance-led delivery."
          description="Coverage and service availability are confirmed during onboarding based on regulatory requirements and jurisdiction feasibility."
        />
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6">
            <h2 className="text-lg font-semibold text-white">
              Service availability
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              We provide clear confirmation of availability and registration
              steps for each jurisdiction before activation.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6">
            <h2 className="text-lg font-semibold text-white">
              Resilient routing
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              Call routing is configured with operational continuity in mind,
              including failover options and defined escalation flows.
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
}
