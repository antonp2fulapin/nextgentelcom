import type { Metadata } from "next";
import Container from "../../components/Container";
import SectionHeading from "../../components/SectionHeading";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Apply for regulated telecom services with NEXTGEN TELCOM LTD. Business customers only.",
};

export default function ContactPage() {
  return (
    <main className="py-16">
      <Container className="flex flex-col gap-10">
        <SectionHeading
          label="Contact & Application"
          title="Apply for regulated telecom services."
          description="NEXTGEN TELCOM LTD serves verified business customers only. All applications require a valid business email and completion of KYC checks before services can be activated."
        />

        <ContactForm />

        <section className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6 text-sm text-slate-300">
          <h2 className="text-base font-semibold text-white">
            What happens next
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>
              We review your submission and confirm compliance requirements.
            </li>
            <li>Our team schedules KYC and number registration steps.</li>
            <li>Porting and migration timelines are confirmed in writing.</li>
          </ul>
        </section>

        <section
          id="faqs"
          className="grid gap-6 rounded-3xl border border-slate-800 bg-slate-900/40 p-6 md:grid-cols-2"
        >
          <div className="space-y-2">
            <p className="text-sm font-semibold text-white">
              Do you support private individuals?
            </p>
            <p className="text-sm text-slate-300">
              No. We provide services exclusively to verified business
              customers.
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-semibold text-white">
              When are services activated?
            </p>
            <p className="text-sm text-slate-300">
              Activation occurs only after KYC checks and number registration
              requirements are completed.
            </p>
          </div>
        </section>
      </Container>
    </main>
  );
}
