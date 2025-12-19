import type { Metadata } from "next";
import "./globals.css";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

export const metadata: Metadata = {
  title: {
    default: "NEXTGEN TELCOM LTD",
    template: "%s | NEXTGEN TELCOM LTD",
  },
  description:
    "NEXTGEN TELCOM LTD provides next-generation telecom solutions exclusively for business customers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
