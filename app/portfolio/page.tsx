"use client";

import { motion } from "framer-motion";
import HeroMinimal from "@/components/blocks/HeroMinimal";
import HoverEffect from "@/components/blocks/HoverEffect";
import BentoGrid from "@/components/blocks/BentoGrid";
import CTASplit from "@/components/blocks/CTASplit";

const sectionAnim = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" },
  viewport: { once: true, amount: 0.25 }
};

export default function PortfolioPage() {
  return (
    <div className="surface">
      <div className="relative">
        <div className="absolute inset-0 hero-overlay pointer-events-none" />
        <HeroMinimal
          title="Projects & Collaborations"
          subtitle="A selection of seasonal releases, event brew bars, and brand collaborations."
          primaryCta={{ label: "Plan an Event", href: "/contact" }}
          secondaryCta={{ label: "See Services", href: "/services" }}
          image={{ src: "/images/product-3.png", alt: "Coffee bar setup" }}
          theme="dark"
          className="text-white"
        />
      </div>

      <motion.section {...sectionAnim} className="surface-low py-28">
        <div className="container-page">
          <HoverEffect
            eyebrow="Highlights"
            title="A few recent favorites"
            description="Premium coffee moments—designed, dialed, and served with calm."
            items={[
              {
                title: "Autumn Espresso Release",
                description: "Chocolate-forward blend with citrus lift.",
                image: "/images/product-1.png",
                href: "/services"
              },
              {
                title: "Studio Opening Brew Bar",
                description: "On-site espresso + pour-over for 120 guests.",
                image: "/images/product-2.png",
                href: "/contact"
              },
              {
                title: "Pastry Pairing Week",
                description: "Seasonal pairings built around origin notes.",
                image: "/images/product-1.png",
                href: "/services"
              }
            ]}
          />
        </div>
      </motion.section>

      <motion.section {...sectionAnim} className="surface py-28">
        <div className="container-page">
          <BentoGrid
            eyebrow="Behind the Scenes"
            title="From roast curve to service flow"
            description="We treat each release like an editorial story—taste, texture, and timing."
            items={[
              {
                title: "Dial-In Notes",
                description: "Recipe testing for sweetness and clarity.",
                image: "/images/product-2.png"
              },
              {
                title: "Service Design",
                description: "Menus that keep lines moving without losing craft.",
                image: "/images/product-3.png"
              },
              {
                title: "Seasonal Visuals",
                description: "Warm, earthy compositions that match the cup.",
                image: "/images/hero.png"
              },
              {
                title: "Collaboration Kits",
                description: "Co-branded bags and tasting cards for partners.",
                image: "/images/product-3.png"
              }
            ]}
          />
        </div>
      </motion.section>

      <motion.section {...sectionAnim} className="surface-low py-28">
        <div className="container-page">
          <CTASplit
            eyebrow="Collaborate"
            title="Let’s build a coffee moment together"
            description="Events, office programs, and brand collaborations—tell us what you’re planning."
            primaryCta={{ label: "Contact", href: "/contact" }}
            secondaryCta={{ label: "Pricing", href: "/pricing" }}
            image={{ src: "/images/product-1.png", alt: "Coffee cups on a counter" }}
          />
        </div>
      </motion.section>
    </div>
  );
}
