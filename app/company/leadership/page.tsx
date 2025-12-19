import type { Metadata } from "next";
import Container from "../../../components/Container";
import SectionHeading from "../../../components/SectionHeading";

export const metadata: Metadata = {
  title: "Leadership & Governance",
  description:
    "Governance principles guiding regulated telecom delivery at NEXTGEN TELCOM LTD.",
};

export default function LeadershipPage() {
  return (
    <main className="py-16">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          label="Leadership & Governance"
          title="Governance designed for regulated telecom delivery."
          description="We align operational policies with telecom compliance obligations and provide audit-ready oversight for enterprise customers."
        />
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6">
            <h2 className="text-lg font-semibold text-white">
              Accountable leadership
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              Leadership oversight ensures regulatory compliance, risk
              management, and customer alignment at every stage.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6">
            <h2 className="text-lg font-semibold text-white">
              Compliance governance
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              Governance frameworks are designed to support mandatory KYC,
              registration, and service integrity across jurisdictions.
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
}
