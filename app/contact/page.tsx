"use client";

import { motion } from "framer-motion";
import HeroSpotlight from "@/components/blocks/HeroSpotlight";
import ContactForm from "@/components/blocks/ContactForm";
import BentoGrid from "@/components/blocks/BentoGrid";

const section = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 }
};

export default function ContactPage() {
  return (
    <main className="bg-[#FEFAE0]">
      <HeroSpotlight
        title="Contact & Hours"
        subtitle="Questions, wholesale, subscriptions, or event coffee—send a note and we’ll respond quickly."
        image={{ src: "/images/portfolio-5.png", alt: "Warm café interior" }}
        primaryCta={{ label: "Send a Message", href: "#form" }}
        secondaryCta={{ label: "View Services", href: "/services" }}
      />

      <motion.section
        className="bg-[#F8F4DB]"
        variants={section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="text-xs tracking-[0.18em] uppercase text-[#462800] font-body">
                Visit
              </p>
              <h2 className="mt-3 text-3xl md:text-4xl font-heading text-[#1D1C0D]">
                Come in for a pour-over flight
              </h2>
              <p className="mt-4 text-[#462800]">
                <span className="font-semibold text-[#1D1C0D]">Hours:</span> Daily 7:00–6:00
                <br />
                <span className="font-semibold text-[#1D1C0D]">Location:</span> 123 Roastery Lane,
                Your City
              </p>

              <div className="mt-8 rounded-2xl bg-background p-4">
                <img
                  src="/images/product-1.png"
                  alt="Coffee cups and counter"
                  className="h-56 w-full rounded-xl object-cover"
                />
              </div>
            </div>

            <div id="form" className="rounded-2xl bg-background p-6">
              <ContactForm
                title="Send a message"
                description="Tell us what you’re looking for—menu questions, wholesale, subscriptions, or event coffee."
                fields={[
                  { name: "name", label: "Name", type: "text", required: true },
                  { name: "email", label: "Email", type: "email", required: true },
                  { name: "topic", label: "Topic", type: "text", required: false },
                  { name: "message", label: "Message", type: "textarea", required: true }
                ]}
                submitLabel="Send"
              />
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="bg-[#FEFAE0]"
        variants={section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-10">
            <p className="text-xs tracking-[0.18em] uppercase text-[#462800] font-body">
              What to order
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-heading text-[#1D1C0D]">
              First-visit favorites
            </h2>
          </div>

          <BentoGrid
            items={[
              {
                title: "Cappuccino",
                description: "Sweet espresso, velvety foam, balanced finish.",
                image: "/images/product-1.png"
              },
              {
                title: "V60 Pour-Over",
                description: "Clean, aromatic, and origin-forward.",
                image: "/images/product-3.png"
              },
              {
                title: "Cold Brew Reserve",
                description: "Smooth, low bitterness, toasted sugar notes.",
                image: "/images/product-1.png"
              },
              {
                title: "Croissant Pairing",
                description: "Buttery layers that love espresso.",
                image: "/images/product-3.png"
              }
            ]}
          />
        </div>
      </motion.section>
    </main>
  );
}
