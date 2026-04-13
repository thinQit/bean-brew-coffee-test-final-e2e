"use client";

import { motion } from "framer-motion";
import HeroMinimal from "@/components/blocks/HeroMinimal";
import BentoGrid from "@/components/blocks/BentoGrid";
import PricingTable from "@/components/blocks/PricingTable";
import CTASplit from "@/components/blocks/CTASplit";

const sectionAnim = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" },
  viewport: { once: true, amount: 0.25 }
};

export default function MenuPage() {
  return (
    <div className="surface">
      <div className="relative">
        <div className="absolute inset-0 hero-overlay pointer-events-none" />
        <HeroMinimal
          title="Menu"
          subtitle="A focused lineup of espresso, slow coffee, and seasonal pairings—built like a tasting flight."
          primaryCta={{ label: "Highlights", href: "#highlights" }}
          secondaryCta={{ label: "Visit", href: "/contact#visit" }}
          image={{ src: "/images/hero.png", alt: "Coffee menu and cup" }}
          theme="dark"
          className="text-white"
        />
      </div>

      <motion.section {...sectionAnim} className="surface-low py-28" id="highlights">
        <div className="container-page">
          <BentoGrid
            eyebrow="Menu Highlights"
            title="Seasonal favorites"
            description="Ask the bar for today’s rotation and recommended pairings."
            items={[
              {
                title: "Espresso Tonic",
                description: "Citrus lift, crisp finish, summer-ready.",
                image: "/images/product-3.png"
              },
              {
                title: "House Cappuccino",
                description: "Sweet espresso, silky milk, cocoa dust.",
                image: "/images/product-2.png"
              },
              {
                title: "Single-Origin Pour-Over",
                description: "Rotating lots brewed for clarity and aroma.",
                image: "/images/product-2.png"
              },
              {
                title: "Seasonal Pastry",
                description: "Buttery, warm, and designed to complement roast notes.",
                image: "/images/product-3.png"
              }
            ]}
          />
        </div>
      </motion.section>

      <motion.section {...sectionAnim} className="surface py-28">
        <div className="container-page">
          <PricingTable
            eyebrow="Café Pricing"
            title="Simple, transparent"
            description="Prices may vary slightly by seasonal origin and availability."
            plans={[
              {
                name: "Espresso",
                price: "$4",
                interval: "",
                description: "Sweet, balanced, dialed daily.",
                features: ["Single or double", "Rotating espresso"],
                cta: { label: "Visit Us", href: "/contact#visit" },
                highlighted: false
              },
              {
                name: "Milk Drinks",
                price: "$5–$7",
                interval: "",
                description: "Cappuccino, latte, seasonal specials.",
                features: ["Oat/almond available", "Recipe-tuned ratios"],
                cta: { label: "Explore", href: "/services" },
                highlighted: true
              },
              {
                name: "Pour-Over",
                price: "$7–$9",
                interval: "",
                description: "Single-origin brewed to order.",
                features: ["Rotating origins", "Brew notes included"],
                cta: { label: "See Origins", href: "/about" },
                highlighted: false
              }
            ]}
          />
        </div>
      </motion.section>

      <motion.section {...sectionAnim} className="surface-low py-28">
        <div className="container-page">
          <CTASplit
            eyebrow="Take it home"
            title="Beans roasted weekly"
            description="Grab a bag in-store or ask about subscriptions for seasonal rotations."
            primaryCta={{ label: "Subscriptions", href: "/pricing" }}
            secondaryCta={{ label: "Contact", href: "/contact" }}
            image={{ src: "/images/product-1.png", alt: "Bag of coffee beans" }}
          />
        </div>
      </motion.section>
    </div>
  );
}
