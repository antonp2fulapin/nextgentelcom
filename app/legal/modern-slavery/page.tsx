import type { Metadata } from "next";
import LegalPage from "../../../components/LegalPage";

export const metadata: Metadata = {
  title: "Modern Slavery Statement",
  description: "Modern slavery statement for NEXTGEN TELCOM LTD.",
};

export default function ModernSlaveryPage() {
  return (
    <LegalPage
      label="Legal"
      title="Modern Slavery Statement"
      description="Effective date: [Insert Date]"
    >
      <p>
        NEXTGEN TELCOM LTD is committed to preventing modern slavery and human
        trafficking in our operations and supply chain. We maintain policies and
        due diligence processes appropriate to our business size and regulatory
        obligations.
      </p>
      <h2>Our commitment</h2>
      <ul>
        <li>Supplier due diligence aligned with risk assessment.</li>
        <li>Compliance monitoring for relevant partners.</li>
        <li>Internal reporting channels for concerns.</li>
      </ul>
    </LegalPage>
  );
}
