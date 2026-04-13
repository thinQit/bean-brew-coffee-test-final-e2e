"use client";

import { motion } from "framer-motion";
import HeroSpotlight from "@/components/blocks/HeroSpotlight";
import HoverEffect from "@/components/blocks/HoverEffect";
import MovingBorder from "@/components/blocks/MovingBorder";
import CTAGlass from "@/components/blocks/CTAGlass";

const section = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 }
};

export default function ServicesPage() {
  return (
    <main className="bg-[#FEFAE0]">
      <HeroSpotlight
        title="Menu & Services"
        subtitle="Seasonal espresso, single-origin pour-over, pastries, and programs for teams and events."
        image={{ src: "/images/product-1.png", alt: "Latte art close-up" }}
        primaryCta={{ label: "See Pricing", href: "/pricing" }}
        secondaryCta={{ label: "Contact", href: "/contact" }}
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
          <div className="mb-10">
            <p className="text-xs tracking-[0.18em] uppercase text-[#462800] font-body">
              Café menu
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-heading text-[#1D1C0D]">
              Built around origin character
            </h2>
          </div>

          <HoverEffect
            items={[
              {
                title: "Espresso & Milk Drinks",
                description:
                  "House espresso, cappuccino, latte, cortado—dialed for sweetness and balance.",
                link: "/contact"
              },
              {
                title: "Pour-Over Bar",
                description:
                  "Single-origin V60 with curated recipes—clean, aromatic, and expressive.",
                link: "/contact"
              },
              {
                title: "Cold Coffee",
                description: "Cold brew reserve, iced latte, seasonal specials.",
                link: "/contact"
              },
              {
                title: "Pastry Pairings",
                description: "Croissants, buns, and rotating local bakes—made for coffee.",
                link: "/contact"
              }
            ]}
          />
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
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="rounded-2xl bg-background p-4">
              <img
                src="/images/product-2.png"
                alt="Coffee bags on a shelf"
                className="h-72 w-full rounded-xl object-cover"
              />
            </div>

            <div>
              <p className="text-xs tracking-[0.18em] uppercase text-[#462800] font-body">
                Roastery programs
              </p>
              <h2 className="mt-3 text-3xl md:text-4xl font-heading text-[#1D1C0D]">
                Subscriptions, wholesale, and events
              </h2>
              <p className="mt-4 text-[#462800]">
                Keep your team stocked, elevate your café program, or bring a premium brew bar to
                your next event.
              </p>

              <div className="mt-6">
                <MovingBorder
                  items={[
                    {
                      title: "Bean Subscription",
                      description: "Fresh drops delivered on your schedule—filter or espresso.",
                      icon: "Package"
                    },
                    {
                      title: "Wholesale Supply",
                      description: "Training, recipes, and consistent roast profiles for partners.",
                      icon: "Store"
                    },
                    {
                      title: "Catering & Pop-Ups",
                      description: "Mobile espresso bar for launches, weddings, and team days.",
                      icon: "Calendar"
                    }
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="bg-[#F8F4DB]"
        variants={section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="mx-auto max-w-6xl px-6 py-16">
          <CTAGlass
            eyebrow="Need a recommendation?"
            title="Tell us what you like—we’ll match a roast"
            description="Chocolatey and classic? Bright and fruity? We’ll guide you to the right bag and brew method."
            primaryCta={{ label: "Contact Us", href: "/contact" }}
            secondaryCta={{ label: "View Pricing", href: "/pricing" }}
            image={{ src: "/images/product-1.png", alt: "Pastry and coffee pairing" }}
          />
        </div>
      </motion.section>
    </main>
  );
}
