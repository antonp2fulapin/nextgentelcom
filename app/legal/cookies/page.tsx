import type { Metadata } from "next";
import LegalPage from "../../../components/LegalPage";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Cookie policy for NEXTGEN TELCOM LTD.",
};

export default function CookiePolicyPage() {
  return (
    <LegalPage
      label="Legal"
      title="Cookie Policy"
      description="Effective date: [Insert Date]"
    >
      <h2>1. Overview</h2>
      <p>
        We use cookies and similar technologies to operate our website, maintain
        security, and understand usage. We do not use cookies for advertising.
      </p>

      <h2>2. Types of Cookies</h2>
      <ul>
        <li>Essential cookies required for site functionality.</li>
        <li>Analytics cookies to understand site performance.</li>
      </ul>

      <h2>3. Managing Preferences</h2>
      <p>
        You can manage cookie preferences in your browser settings. Where
        required, we will request consent before deploying non-essential
        cookies.
      </p>
    </LegalPage>
  );
}
