import type { Metadata } from "next";
import LegalPage from "../../../components/LegalPage";

export const metadata: Metadata = {
  title: "Data Processing Agreement",
  description: "Data processing agreement for NEXTGEN TELCOM LTD.",
};

export default function DpaPage() {
  return (
    <LegalPage
      label="Legal"
      title="Data Processing Agreement"
      description="Effective date: [Insert Date]"
    >
      <h2>1. Scope</h2>
      <p>
        This Data Processing Agreement (DPA) applies to personal data processed
        by NEXTGEN TELCOM LTD on behalf of business customers.
      </p>

      <h2>2. Processing Details</h2>
      <ul>
        <li>Purpose: Delivery of regulated telecom services.</li>
        <li>Categories: Business contact and KYC documentation data.</li>
        <li>Retention: As required by law and contractual obligations.</li>
      </ul>

      <h2>3. Subprocessors</h2>
      <p>
        We use vetted subprocessors for KYC and telecom delivery. A current list
        is available upon request.
      </p>

      <h2>4. Security Measures</h2>
      <p>
        We apply technical and organisational measures to protect data,
        including access controls and audit-ready logging.
      </p>
    </LegalPage>
  );
}
