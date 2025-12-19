import type { Metadata } from "next";
import LegalPage from "../../../components/LegalPage";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Company information for NEXTGEN TELCOM LTD.",
};

export default function ImpressumPage() {
  return (
    <LegalPage label="Legal" title="Impressum / Company Information">
      <p>
        <strong>NEXTGEN TELCOM LTD</strong>
        <br />
        Registered Address: [Company Address Placeholder]
        <br />
        Company Number: [Registration Number Placeholder]
        <br />
        VAT Number: [VAT Number Placeholder]
        <br />
        Regulatory Authority: [Regulator Placeholder]
        <br />
        Contact Email: [Compliance Contact Placeholder]
        <br />
        Contact Phone: [Company Phone Placeholder]
      </p>
    </LegalPage>
  );
}
