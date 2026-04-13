import * as React from "react";

export type TeamMember = {
  name: string;
  role?: string;
};

export type TeamGridProps = {
  members?: TeamMember[];
  className?: string;
};

export default function TeamGrid({
  members = [
    { name: "Alex", role: "Engineering" },
    { name: "Sam", role: "Design" },
    { name: "Jordan", role: "Product" },
    { name: "Taylor", role: "Operations" },
  ],
  className,
}: TeamGridProps) {
  return (
    <section className={className ?? ""}>
      <div className="mx-auto max-w-5xl px-6 py-12">
        <h2 className="text-xl font-semibold">Team</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((m, idx) => (
            <div key={idx} className="rounded-lg border p-5">
              <div className="text-base font-medium">{m.name}</div>
              {m.role ? <div className="mt-1 text-sm text-muted-foreground">{m.role}</div> : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
