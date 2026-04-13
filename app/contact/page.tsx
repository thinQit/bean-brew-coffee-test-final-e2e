"use client";

import { motion } from "framer-motion";
import HeroMinimal from "@/components/blocks/HeroMinimal";
import ContactForm from "@/components/blocks/ContactForm";
import FeaturesGrid from "@/components/blocks/FeaturesGrid";
import CTASplit from "@/components/blocks/CTASplit";

const sectionAnim = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" },
  viewport: { once: true, amount: 0.25 }
};

export default function ContactPage() {
  return (
    <div className="surface">
      <div className="relative">
        <div className="absolute inset-0 hero-overlay pointer-events-none" />
        <HeroMinimal
          title="Visit & Contact"
          subtitle="Come for espresso, stay for the calm. Reach out for catering, office coffee, or subscription questions."
          primaryCta={{ label: "Send a Message", href: "#form" }}
          secondaryCta={{ label: "Services", href: "/services" }}
          image={{ src: "/images/product-2.png", alt: "Coffee shop interior" }}
          theme="dark"
          className="text-white"
        />
      </div>

      <motion.section {...sectionAnim} className="surface-low py-28" id="visit">
        <div className="container-page">
          <FeaturesGrid
            eyebrow="Visit"
            title="Hours, location, and what to expect"
            description="A warm, editorial space with plenty of breathing room—perfect for a slow morning."
            features={[
              {
                title: "Hours",
                description: "Mon–Fri 7:00–4:00 • Sat–Sun 8:00–4:00",
                icon: "clock"
              },
              {
                title: "Location",
                description: "123 Roast Lane, Your City",
                icon: "map"
              },
              {
                title: "Parking",
                description: "Street parking + nearby garage options.",
                icon: "car"
              },
              {
                title: "Accessibility",
                description: "Step-free entry and accessible seating.",
                icon: "accessibility"
              }
            ]}
          />
        </div>
      </motion.section>

      <motion.section {...sectionAnim} className="surface py-28" id="form">
        <div className="container-page">
          <ContactForm
            eyebrow="Contact"
            title="Send us a note"
            description="Tell us what you’re planning—subscriptions, catering, or just a question about today’s rotation."
            image={{ src: "/images/product-1.png", alt: "Coffee cup close-up" }}
            fields={{
              name: { label: "Name", placeholder: "Your name" },
              email: { label: "Email", placeholder: "you@domain.com" },
              subject: { label: "Subject", placeholder: "Catering, subscription, or question" },
              message: { label: "Message", placeholder: "Share details (date, guest count, brew preferences)..." }
            }}
            submitLabel="Send Message"
          />
        </div>
      </motion.section>

      <motion.section {...sectionAnim} className="surface-low py-28" id="social">
        <div className="container-page">
          <CTASplit
            eyebrow="Stay in the loop"
            title="Seasonal drops and café notes"
            description="Follow along for new origins, pastry pairings, and event brew bars."
            primaryCta={{ label: "Newsletter", href: "#newsletter" }}
            secondaryCta={{ label: "Portfolio", href: "/portfolio" }}
            image={{ src: "/images/hero.png", alt: "Coffee being poured" }}
          />
        </div>
      </motion.section>

      <motion.section {...sectionAnim} className="surface py-28" id="newsletter">
        <div className="container-page">
          <div className="surface-card rounded-2xl p-10 md:p-14">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <h2 className="font-heading text-3xl md:text-4xl tracking-tight">
                  Newsletter
                </h2>
                <p className="mt-3 text-base md:text-lg leading-relaxed text-black/80">
                  Monthly notes on new origins, brew recipes, and café events.
                </p>
                <p className="mt-3 text-sm text-black/70" id="privacy">
                  Privacy: we only email when we have something worth tasting.
                </p>
                <p className="mt-1 text-sm text-black/70" id="terms">
                  Terms: unsubscribe anytime.
                </p>
              </div>
              <form className="grid gap-3">
                <input
                  className="w-full rounded-xl bg-background px-4 py-3 text-black placeholder:text-black/50 outline-none ring-1 ring-black/10 focus:ring-2 focus:ring-[color:var(--ring)]"
                  placeholder="you@domain.com"
                  type="email"
                />
                <button
                  type="button"
                  className="rounded-xl px-5 py-3 text-white font-medium"
                  style={{
                    background:
                      "radial-gradient(120% 120% at 20% 20%, #561922 0%, #722F37 55%, #722F37 100%)"
                  }}
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
