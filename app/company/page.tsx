import type { Metadata } from "next";
import Container from "../../components/Container";
import SectionHeading from "../../components/SectionHeading";

export const metadata: Metadata = {
  title: "Company",
  description:
    "About NEXTGEN TELCOM LTD and our compliance-led telecom delivery model.",
};

export default function CompanyPage() {
  return (
    <main className="py-16">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          label="Company"
          title="Dedicated B2B telecom delivery with clear accountability."
          description="NEXTGEN TELCOM LTD delivers next-generation telecom services with a compliance-first operating model and structured onboarding."
        />
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6">
            <h2 className="text-lg font-semibold text-white">Our approach</h2>
            <p className="mt-2 text-sm text-slate-300">
              We provide a single accountable delivery team responsible for
              registration, porting, migration, and configuration across the
              lifecycle of service.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6">
            <h2 className="text-lg font-semibold text-white">
              Governance & compliance
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              Governance policies align with regulated telecom obligations and
              are enforced in onboarding and platform configuration.
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
}
