import type { Metadata } from "next";
import LegalPage from "../../../components/LegalPage";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description: "Accessibility statement for NEXTGEN TELCOM LTD.",
};

export default function AccessibilityPage() {
  return (
    <LegalPage
      label="Legal"
      title="Accessibility Statement"
      description="Effective date: [Insert Date]"
    >
      <p>
        NEXTGEN TELCOM LTD is committed to providing a website that is
        accessible and usable for all visitors. We aim to align with WCAG 2.1
        AA standards where feasible.
      </p>
      <h2>Feedback</h2>
      <p>
        If you experience accessibility issues, please contact us at [Accessibility
        Contact Placeholder]. We will respond promptly and work to resolve the
        issue.
      </p>
    </LegalPage>
  );
}
