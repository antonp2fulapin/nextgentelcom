import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NEXTGEN TELCOM LTD",
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
        {children}
      </body>
    </html>
  );
}
