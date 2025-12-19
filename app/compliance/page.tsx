import type { Metadata } from "next";
import Container from "../../components/Container";
import SectionHeading from "../../components/SectionHeading";

export const metadata: Metadata = {
  title: "Compliance & Trust",
  description:
    "Compliance-first telecom services with mandatory KYC and regulatory controls.",
};

const compliancePoints = [
  "Mandatory KYC checks for all customers.",
  "Jurisdiction-specific number registration and validation.",
  "Documented onboarding with audit-ready provisioning.",
  "Controlled access to routing and IVR configuration.",
  "Ongoing compliance monitoring aligned to telecom obligations.",
];

export default function CompliancePage() {
  return (
    <main className="py-16">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          label="Compliance & Trust"
          title="Compliance-first operations for regulated telecom services."
          description="We do not activate services without completed KYC and regulatory checks. Our processes are designed for auditability and controlled delivery."
        />
        <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6">
          <h2 className="text-lg font-semibold text-white">
            Compliance controls
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-300">
            {compliancePoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6">
            <h3 className="text-lg font-semibold text-white">
              Business-only onboarding
            </h3>
            <p className="mt-2 text-sm text-slate-300">
              We serve verified business customers only. Private individuals are
              not eligible for service activation.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6">
            <h3 className="text-lg font-semibold text-white">
              Compliance communication
            </h3>
            <p className="mt-2 text-sm text-slate-300">
              We provide documented onboarding steps, clear timelines, and
              written confirmation of registration and porting milestones.
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
}
