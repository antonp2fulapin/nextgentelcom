import type { Metadata } from "next";
import LegalPage from "../../../components/LegalPage";

export const metadata: Metadata = {
  title: "Acceptable Use Policy",
  description: "Acceptable use policy for NEXTGEN TELCOM LTD services.",
};

export default function AcceptableUsePage() {
  return (
    <LegalPage
      label="Legal"
      title="Acceptable Use Policy"
      description="Effective date: [Insert Date]"
    >
      <h2>1. Purpose</h2>
      <p>
        This policy defines prohibited activities and required standards for
        using NEXTGEN TELCOM LTD services.
      </p>

      <h2>2. Prohibited Use</h2>
      <ul>
        <li>Unlawful, fraudulent, or misleading activity.</li>
        <li>Mass unsolicited calling or spam practices.</li>
        <li>Caller ID misrepresentation or unregistered number usage.</li>
        <li>Bypassing compliance or KYC requirements.</li>
        <li>Interfering with network security or service integrity.</li>
      </ul>

      <h2>3. Compliance</h2>
      <p>
        All use must comply with telecom regulations in the jurisdictions where
        services are provisioned.
      </p>

      <h2>4. Enforcement</h2>
      <p>
        We may suspend or terminate services and report activity to authorities
        when required by law.
      </p>
    </LegalPage>
  );
}
