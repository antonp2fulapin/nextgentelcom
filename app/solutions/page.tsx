import type { Metadata } from "next";
import Container from "../../components/Container";
import SectionHeading from "../../components/SectionHeading";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Regulated telecom solutions for business customers, including DID acquisition, porting, IVR, and integrations.",
};

const solutions = [
  {
    title: "DID acquisition",
    description:
      "Local, national, and international DIDs delivered with jurisdiction-specific registration guidance.",
  },
  {
    title: "Number registration & regulatory compliance",
    description:
      "We handle documentation, verification, and regulatory checks required before activation.",
  },
  {
    title: "Number porting from legacy providers",
    description:
      "Structured porting timelines with clear cutover planning and minimal disruption.",
  },
  {
    title: "Call routing & advanced call flows",
    description:
      "Routing based on business logic, operational hours, and team availability.",
  },
  {
    title: "Internal business calls & conferencing",
    description:
      "Secure internal calling and conferencing across distributed teams.",
  },
  {
    title: "Full migration from legacy telephony to VoIP",
    description:
      "End-to-end planning, hardware checks, and configuration managed by our team.",
  },
  {
    title: "SIP & VoIP phone integration",
    description:
      "Integration with existing devices, softphones, and SIP trunking workflows.",
  },
  {
    title: "Business system integrations",
    description:
      "Native workflows for HubSpot and similar platforms, plus custom API integrations.",
  },
  {
    title: "IVR creation and management",
    description:
      "Design and manage compliant IVR menus aligned with operational requirements.",
  },
  {
    title: "AI-powered inbound call center bots",
    description:
      "Support appointment booking, information delivery, basic support, and call pre-qualification.",
  },
];

export default function SolutionsPage() {
  return (
    <main className="py-16">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          label="Solutions"
          title="Regulated telecom services built for business operations."
          description="NEXTGEN TELCOM LTD delivers a complete, compliant telecom stack with full-service onboarding and guided migration."
        />

        <div
          id="managed-telecom"
          className="grid gap-6 rounded-3xl border border-slate-800 bg-slate-900/40 p-6 md:grid-cols-2"
        >
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-white">
              Managed telecom delivery
            </h2>
            <p className="text-sm text-slate-300">
              We handle registration, porting, migration, setup, and ongoing
              configuration so your teams can focus on operations.
            </p>
          </div>
          <ul className="list-disc space-y-2 pl-5 text-sm text-slate-300">
            <li>Dedicated onboarding and compliance tracking.</li>
            <li>Operational change management for migrations.</li>
            <li>Single accountable delivery team.</li>
          </ul>
        </div>

        <div
          id="connectivity"
          className="grid gap-6 rounded-3xl border border-slate-800 bg-slate-900/40 p-6 md:grid-cols-2"
        >
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-white">
              Connectivity services
            </h2>
            <p className="text-sm text-slate-300">
              Voice connectivity aligned with regulatory requirements, network
              resilience, and controlled access.
            </p>
          </div>
          <ul className="list-disc space-y-2 pl-5 text-sm text-slate-300">
            <li>Jurisdiction-aware number management.</li>
            <li>Compliance-first call flow design.</li>
            <li>Enterprise-grade routing and monitoring.</li>
          </ul>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {solutions.map((solution) => (
            <div
              key={solution.title}
              className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6"
            >
              <h3 className="text-lg font-semibold text-white">
                {solution.title}
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </main>
  );
}
