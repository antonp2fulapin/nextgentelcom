import type { Metadata } from "next";
import LegalPage from "../../../components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for NEXTGEN TELCOM LTD covering GDPR and UK GDPR requirements.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      label="Legal"
      title="Privacy Policy"
      description="Effective date: [Insert Date]"
    >
      <h2>1. Overview</h2>
      <p>
        This Privacy Policy explains how NEXTGEN TELCOM LTD processes personal
        data in connection with our B2B telecom services, website, and
        onboarding activities. We comply with GDPR and UK GDPR.
      </p>

      <h2>2. Data Controller</h2>
      <p>
        NEXTGEN TELCOM LTD<br />
        Registered Address: [Company Address Placeholder]
        <br />
        Email: [Data Protection Contact Placeholder]
      </p>

      <h2>3. Categories of Personal Data</h2>
      <ul>
        <li>Business contact details (name, business email, phone, job role).</li>
        <li>Company information and service requirements.</li>
        <li>KYC documentation data required by telecom regulation.</li>
        <li>Service configuration and usage data necessary for delivery.</li>
      </ul>

      <h2>4. Lawful Bases</h2>
      <ul>
        <li>Contractual necessity for onboarding and service delivery.</li>
        <li>Legal obligation for KYC and regulatory compliance.</li>
        <li>Legitimate interests for security and service operations.</li>
        <li>Consent where required for optional communications.</li>
      </ul>

      <h2>5. Data Sharing</h2>
      <p>
        We may share data with regulators, trusted KYC providers, and telecom
        partners as required to deliver services. All processors are bound by
        contractual obligations to protect data.
      </p>

      <h2>6. International Transfers</h2>
      <p>
        Where transfers outside the UK or EEA are required, we apply appropriate
        safeguards such as Standard Contractual Clauses.
      </p>

      <h2>7. Data Retention</h2>
      <p>
        Personal data is retained only as long as necessary to meet legal,
        regulatory, and contractual obligations.
      </p>

      <h2>8. Your Rights</h2>
      <p>
        You may request access, correction, deletion, restriction, or
        portability of your data. Contact us at [Data Protection Contact
        Placeholder].
      </p>

      <h2>9. Security</h2>
      <p>
        We implement technical and organisational measures to protect data,
        including access controls and audit-ready processes.
      </p>
    </LegalPage>
  );
}
