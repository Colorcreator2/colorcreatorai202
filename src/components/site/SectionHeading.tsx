interface Props {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: Props) {
  return (
    <div
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""} animate-fade-up`}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs uppercase tracking-[0.2em] text-muted-foreground mb-5">
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ background: "var(--gradient-cinematic)" }}
          />
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
