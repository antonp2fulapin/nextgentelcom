import type { Metadata } from "next";
import Container from "../../components/Container";
import SectionHeading from "../../components/SectionHeading";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Business-only telecom services for regulated and multi-site industries.",
};

const industries = [
  {
    title: "Regulated professional services",
    description:
      "Telecom infrastructure aligned with governance and audit requirements.",
  },
  {
    title: "Healthcare networks",
    description:
      "Secure internal calling, call routing, and compliance-first onboarding.",
  },
  {
    title: "Financial services",
    description:
      "Resilient voice services with documented provisioning and oversight.",
  },
  {
    title: "Public sector and government-adjacent",
    description:
      "Structured delivery with clear accountability and regulatory alignment.",
  },
  {
    title: "Multi-site enterprises",
    description:
      "Unified telecom operations across locations with shared governance.",
  },
];

export default function IndustriesPage() {
  return (
    <main className="py-16">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          label="Industries"
          title="Trusted telecom delivery for regulated sectors."
          description="We support organisations that require compliance-first telecom services and coordinated onboarding."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {industries.map((industry) => (
            <div
              key={industry.title}
              className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6"
            >
              <h2 className="text-lg font-semibold text-white">
                {industry.title}
              </h2>
              <p className="mt-2 text-sm text-slate-300">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </main>
  );
}
