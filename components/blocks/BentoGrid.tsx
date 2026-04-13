import * as React from "react";

type BentoGridItem = {
  title: string;
  description?: string;
};

type BentoGridProps = {
  items?: BentoGridItem[];
  className?: string;
};

export default function BentoGrid({
  items = [
    { title: "Email", description: "hello@example.com" },
    { title: "Phone", description: "+1 (555) 000-0000" },
    { title: "Hours", description: "Mon–Fri, 9am–5pm" },
  ],
  className,
}: BentoGridProps) {
  return (
    <section className={className}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "0.75rem",
          maxWidth: 960,
          margin: "0 auto",
          padding: "1rem",
        }}
      >
        {items.map((item) => (
          <div
            key={item.title}
            style={{
              border: "1px solid rgba(0,0,0,0.1)",
              borderRadius: 12,
              padding: "1rem",
            }}
          >
            <div style={{ fontWeight: 700 }}>{item.title}</div>
            {item.description ? <div style={{ marginTop: 6, opacity: 0.85 }}>{item.description}</div> : null}
          </div>
        ))}
      </div>
    </section>
  );
}
