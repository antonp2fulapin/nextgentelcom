import type { Metadata } from "next";
import LegalPage from "../../../components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of use for the NEXTGEN TELCOM LTD website and services.",
};

export default function TermsPage() {
  return (
    <LegalPage
      label="Legal"
      title="Terms of Use"
      description="Effective date: [Insert Date]"
    >
      <h2>1. Scope</h2>
      <p>
        These Terms of Use apply to the NEXTGEN TELCOM LTD website and all B2B
        services provided to business customers only.
      </p>

      <h2>2. Eligibility</h2>
      <p>
        Services are available exclusively to registered businesses. Private
        individuals are not eligible.
      </p>

      <h2>3. Service Provision</h2>
      <p>
        Service activation is subject to successful completion of KYC checks and
        regulatory requirements, including number registration.
      </p>

      <h2>4. Customer Responsibilities</h2>
      <ul>
        <li>Provide accurate company information and documentation.</li>
        <li>Use services in compliance with applicable laws.</li>
        <li>Maintain secure access to accounts and devices.</li>
      </ul>

      <h2>5. Limitation of Liability</h2>
      <p>
        We are not liable for indirect or consequential losses arising from use
        of the website or services, to the extent permitted by law.
      </p>

      <h2>6. Suspension or Termination</h2>
      <p>
        We may suspend or terminate services for non-compliance, regulatory
        breaches, or failure to complete required checks.
      </p>
    </LegalPage>
  );
}
