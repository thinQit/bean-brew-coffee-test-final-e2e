import * as React from "react";

type HeroSpotlightProps = {
  title?: string;
  subtitle?: string;
  className?: string;
};

export default function HeroSpotlight({
  title = "Contact",
  subtitle = "We'd love to hear from you.",
  className,
}: HeroSpotlightProps) {
  return (
    <section className={className}>
      <div style={{ padding: "3rem 1rem", maxWidth: 960, margin: "0 auto" }}>
        <h1 style={{ fontSize: "2.25rem", fontWeight: 700, lineHeight: 1.1, margin: 0 }}>
          {title}
        </h1>
        <p style={{ marginTop: "0.75rem", fontSize: "1.125rem", opacity: 0.85 }}>{subtitle}</p>
      </div>
    </section>
  );
}
