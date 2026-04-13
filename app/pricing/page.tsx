"use client";

import { motion } from "framer-motion";
import HeroMinimal from "@/components/blocks/HeroMinimal";
import PricingTable from "@/components/blocks/PricingTable";
import FAQAccordion from "@/components/blocks/FAQAccordion";
import CTASplit from "@/components/blocks/CTASplit";

const sectionAnim = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" },
  viewport: { once: true, amount: 0.25 }
};

export default function PricingPage() {
  return (
    <div className="surface">
      <div className="relative">
        <div className="absolute inset-0 hero-overlay pointer-events-none" />
        <HeroMinimal
          title="Subscriptions & Packages"
          subtitle="Fresh rotations for home brewers, plus simple packages for offices and events."
          primaryCta={{ label: "Choose a Plan", href: "#plans" }}
          secondaryCta={{ label: "Contact", href: "/contact" }}
          image={{ src: "/images/product-3.png", alt: "Coffee bag and cup" }}
          theme="dark"
          className="text-white"
        />
      </div>

      <motion.section {...sectionAnim} className="surface-low py-28" id="plans">
        <div className="container-page">
          <PricingTable
            eyebrow="Bean Subscriptions"
            title="Roaster’s picks, delivered"
            description="Choose your cadence. We’ll send the freshest seasonal lots with brew notes."
            plans={[
              {
                name: "Weekly Rotation",
                price: "$18",
                interval: "per week",
                description: "For daily brewers who love variety.",
                features: ["250g bag", "Seasonal single-origin", "Brew notes"],
                cta: { label: "Start", href: "/contact" },
                highlighted: true
              },
              {
                name: "Bi-Weekly",
                price: "$20",
                interval: "every 2 weeks",
                description: "A steady ritual with room to explore.",
                features: ["300g bag", "Seasonal single-origin", "Brew notes"],
                cta: { label: "Start", href: "/contact" },
                highlighted: false
              },
              {
                name: "Monthly",
                price: "$22",
                interval: "per month",
                description: "A gentle cadence for casual brewers.",
                features: ["350g bag", "Seasonal single-origin", "Brew notes"],
                cta: { label: "Start", href: "/contact" },
                highlighted: false
              }
            ]}
          />
        </div>
      </motion.section>

      <motion.section {...sectionAnim} className="surface py-28">
        <div className="container-page">
          <FAQAccordion
            eyebrow="FAQ"
            title="Subscription questions"
            description="Shipping, grind, and swaps."
            items={[
              {
                question: "Can I choose whole bean or ground?",
                answer:
                  "Yes. Tell us your brew method and we’ll grind accordingly—or keep it whole bean for maximum freshness."
              },
              {
                question: "Can I pause or skip a delivery?",
                answer:
                  "Absolutely. Reach out any time and we’ll adjust your schedule."
              },
              {
                question: "Do you offer decaf?",
                answer:
                  "Seasonally. When available, we’ll list it as an optional swap."
              }
            ]}
          />
        </div>
      </motion.section>

      <motion.section {...sectionAnim} className="surface-low py-28">
        <div className="container-page">
          <CTASplit
            eyebrow="Need a custom quote?"
            title="Events and offices are flexible"
            description="Tell us your headcount, timing, and service style—we’ll tailor a package."
            primaryCta={{ label: "Contact", href: "/contact" }}
            secondaryCta={{ label: "Services", href: "/services" }}
            image={{ src: "/images/product-2.png", alt: "Coffee being prepared" }}
          />
        </div>
      </motion.section>
    </div>
  );
}
