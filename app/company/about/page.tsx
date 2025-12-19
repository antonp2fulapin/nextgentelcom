import type { Metadata } from "next";
import Container from "../../../components/Container";
import SectionHeading from "../../../components/SectionHeading";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about NEXTGEN TELCOM LTD and our regulated telecom focus.",
};

export default function AboutPage() {
  return (
    <main className="py-16">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          label="About"
          title="NEXTGEN TELCOM LTD is built for regulated business telecom."
          description="We deliver compliant telecom services with full accountability across registration, porting, migration, and configuration."
        />
        <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6 text-sm text-slate-300">
          <p>
            Our teams focus on providing predictable service delivery and clear
            governance across every engagement. We do not provide services to
            private individuals and require mandatory KYC before activation.
          </p>
        </div>
      </Container>
    </main>
  );
}
