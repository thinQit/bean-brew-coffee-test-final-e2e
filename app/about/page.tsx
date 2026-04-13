import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <header className="space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight">About</h1>
        <p className="text-base text-neutral-600">
          This page is under construction.
        </p>
      </header>

      <section className="mt-10 grid gap-6 md:grid-cols-3">
        <div className="rounded-lg border border-neutral-200 p-6">
          <div className="text-sm text-neutral-500">Founded</div>
          <div className="mt-2 text-2xl font-semibold">2024</div>
        </div>
        <div className="rounded-lg border border-neutral-200 p-6">
          <div className="text-sm text-neutral-500">Customers</div>
          <div className="mt-2 text-2xl font-semibold">1,000+</div>
        </div>
        <div className="rounded-lg border border-neutral-200 p-6">
          <div className="text-sm text-neutral-500">Uptime</div>
          <div className="mt-2 text-2xl font-semibold">99.9%</div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold">Team</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { name: "Alex", role: "Engineering" },
            { name: "Sam", role: "Product" },
            { name: "Jordan", role: "Design" },
          ].map((m) => (
            <div
              key={m.name}
              className="rounded-lg border border-neutral-200 p-5"
            >
              <div className="font-medium">{m.name}</div>
              <div className="text-sm text-neutral-600">{m.role}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
