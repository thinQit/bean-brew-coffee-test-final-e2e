"use client";

import { motion } from "framer-motion";
import HeroMinimal from "@/components/blocks/HeroMinimal";
import FeaturesGrid from "@/components/blocks/FeaturesGrid";
import PricingTable from "@/components/blocks/PricingTable";
import CTASplit from "@/components/blocks/CTASplit";
import HoverEffect from "@/components/blocks/HoverEffect";

const sectionAnim = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" },
  viewport: { once: true, amount: 0.25 }
};

export default function ServicesPage() {
  return (
    <div className="surface">
      <div className="relative">
        <div className="absolute inset-0 hero-overlay pointer-events-none" />
        <HeroMinimal
          title="Menu & Services"
          subtitle="Espresso, slow coffee, pastries, and premium coffee service for events and offices."
          primaryCta={{ label: "Catering", href: "#catering" }}
          secondaryCta={{ label: "Contact", href: "/contact" }}
          image={{ src: "/images/product-3.png", alt: "Espresso and latte art" }}
          theme="dark"
          className="text-white"
        />
      </div>

      <motion.section {...sectionAnim} className="surface-low py-28">
        <div className="container-page">
          <FeaturesGrid
            eyebrow="In the Café"
            title="A focused menu, executed beautifully"
            description="We keep the lineup tight so every drink is dialed and consistent."
            features={[
              {
                title: "Espresso & Milk Drinks",
                description:
                  "Balanced, sweet espresso with carefully textured milk.",
                icon: "cup"
              },
              {
                title: "Pour-Over Bar",
                description:
                  "Single-origin rotations brewed to highlight clarity and aroma.",
                icon: "droplet"
              },
              {
                title: "Batch Brew",
                description:
                  "Fresh, clean, and fast—without sacrificing nuance.",
                icon: "clock"
              },
              {
                title: "Seasonal Pastries",
                description:
                  "Pairings designed for roast notes: cocoa, citrus, spice.",
                icon: "cookie"
              }
            ]}
          />
        </div>
      </motion.section>

      <motion.section {...sectionAnim} className="surface py-28" id="catering">
        <div className="container-page">
          <HoverEffect
            eyebrow="Catering & Office Coffee"
            title="Coffee service that feels premium"
            description="From meetings to weddings, we bring the brew bar calm wherever you are."
            items={[
              {
                title: "Event Brew Bar",
                description:
                  "On-site espresso + pour-over service with a curated menu.",
                image: "/images/product-2.png",
                href: "/contact"
              },
              {
                title: "Office Drop-Off",
                description:
                  "Recurring batch brew + pastries for teams and studios.",
                image: "/images/product-2.png",
                href: "/contact"
              },
              {
                title: "Bean Subscriptions",
                description:
                  "Weekly or bi-weekly single-origin rotations for home brewers.",
                image: "/images/product-1.png",
                href: "/pricing"
              }
            ]}
          />
        </div>
      </motion.section>

      <motion.section {...sectionAnim} className="surface-low py-28">
        <div className="container-page">
          <PricingTable
            eyebrow="Popular Bundles"
            title="Simple options for teams and events"
            description="Transparent packages—customize with add-ons after you reach out."
            plans={[
              {
                name: "Studio Starter",
                price: "$85",
                interval: "per drop-off",
                description: "Perfect for small teams.",
                features: ["2L batch brew", "12 pastries", "Cups + napkins"],
                cta: { label: "Book", href: "/contact" },
                highlighted: false
              },
              {
                name: "Office Ritual",
                price: "$220",
                interval: "per week",
                description: "Our most popular recurring setup.",
                features: [
                  "2x weekly drop-offs",
                  "4L batch brew total",
                  "24 pastries",
                  "Seasonal rotation"
                ],
                cta: { label: "Start", href: "/contact" },
                highlighted: true
              },
              {
                name: "Event Brew Bar",
                price: "$650",
                interval: "starting",
                description: "On-site espresso + pour-over.",
                features: [
                  "2-hour service",
                  "Barista team",
                  "Curated menu",
                  "Add-ons available"
                ],
                cta: { label: "Get a Quote", href: "/contact" },
                highlighted: false
              }
            ]}
          />
        </div>
      </motion.section>

      <motion.section {...sectionAnim} className="surface py-28">
        <div className="container-page">
          <CTASplit
            eyebrow="Ready to plan?"
            title="Tell us your date, guest count, and vibe"
            description="We’ll recommend a menu and service style that fits your event or office."
            primaryCta={{ label: "Contact", href: "/contact" }}
            secondaryCta={{ label: "Pricing", href: "/pricing" }}
            image={{ src: "/images/product-1.png", alt: "Coffee setup on a counter" }}
          />
        </div>
      </motion.section>
    </div>
  );
}
