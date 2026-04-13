import * as React from "react";

export type BentoItem = {
  title: string;
  description?: string;
};

export type BentoGridProps = {
  items?: BentoItem[];
  className?: string;
};

export default function BentoGrid({
  items = [
    { title: "Quality", description: "We focus on craftsmanship and reliability." },
    { title: "Speed", description: "We ship improvements continuously." },
    { title: "Support", description: "We help customers succeed." },
    { title: "Security", description: "We build with safety in mind." },
  ],
  className,
}: BentoGridProps) {
  return (
    <section className={className ?? ""}>
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="grid gap-4 sm:grid-cols-2">
          {items.map((item, idx) => (
            <div key={idx} className="rounded-lg border p-6">
              <h3 className="text-base font-semibold">{item.title}</h3>
              {item.description ? (
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
