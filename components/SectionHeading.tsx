type SectionHeadingProps = {
  label: string;
  title: string;
  description?: string;
};

export default function SectionHeading({
  label,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="space-y-3">
      <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
        {label}
      </p>
      <h1 className="text-3xl font-semibold leading-tight text-white md:text-5xl">
        {title}
      </h1>
      {description ? (
        <p className="max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
