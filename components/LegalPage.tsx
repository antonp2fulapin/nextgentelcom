import type { ReactNode } from "react";
import Container from "./Container";
import SectionHeading from "./SectionHeading";

type LegalPageProps = {
  label: string;
  title: string;
  description?: string;
  children: ReactNode;
};

export default function LegalPage({
  label,
  title,
  description,
  children,
}: LegalPageProps) {
  return (
    <main className="py-16">
      <Container className="flex flex-col gap-10">
        <SectionHeading label={label} title={title} description={description} />
        <div className="legal-content space-y-6 text-sm text-slate-300">
          {children}
        </div>
      </Container>
    </main>
  );
}
