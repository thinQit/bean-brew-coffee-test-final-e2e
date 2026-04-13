import * as React from "react";

export type HeroMinimalProps = {
  title?: string;
  subtitle?: string;
  eyebrow?: string;
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
};

export default function HeroMinimal({
  title = "About",
  subtitle = "Learn more about our team and what we do.",
  eyebrow,
  ctaLabel,
  ctaHref = "#",
  className,
}: HeroMinimalProps) {
  return (
    <section className={className ?? ""}>
      <div className="mx-auto max-w-5xl px-6 py-16">
        {eyebrow ? (
          <p className="text-sm font-medium text-muted-foreground">{eyebrow}</p>
        ) : null}
        <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h1>
        {subtitle ? (
          <p className="mt-4 max-w-2xl text-base text-muted-foreground">{subtitle}</p>
        ) : null}
        {ctaLabel ? (
          <div className="mt-8">
            <a
              href={ctaHref}
              className="inline-flex items-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-black/90"
            >
              {ctaLabel}
            </a>
          </div>
        ) : null}
      </div>
    </section>
  );
}
