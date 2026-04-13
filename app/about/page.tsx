"use client";

import { motion } from "framer-motion";
import HeroMinimal from "@/components/blocks/HeroMinimal";
import BentoGrid from "@/components/blocks/BentoGrid";
import TeamGrid from "@/components/blocks/TeamGrid";
import CTASplit from "@/components/blocks/CTASplit";

const sectionAnim = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" },
  viewport: { once: true, amount: 0.25 }
};

export default function AboutPage() {
  return (
    <div className="surface">
      <div className="relative">
        <div className="absolute inset-0 hero-overlay pointer-events-none" />
        <HeroMinimal
          title="A Roastery Built on Patience"
          subtitle="Bean & Brew is where craft meets calm—an editorial café experience rooted in sourcing, roasting, and hospitality."
          primaryCta={{ label: "Meet the Team", href: "#team" }}
          secondaryCta={{ label: "Visit Us", href: "/contact#visit" }}
          image={{ src: "/images/product-2.png", alt: "Roasted coffee beans and warm light" }}
          theme="dark"
          className="text-white"
        />
      </div>

      <motion.section {...sectionAnim} className="surface-low py-28">
        <div className="container-page">
          <BentoGrid
            eyebrow="Our Approach"
            title="Sourcing, roasting, and serving—done with intention"
            description="We keep the menu focused so every cup can be exceptional."
            items={[
              {
                title: "Traceable Lots",
                description:
                  "We prioritize transparent sourcing and seasonal freshness.",
                image: "/images/product-3.png"
              },
              {
                title: "Small-Batch Roasting",
                description:
                  "Profiles built for sweetness and clarity—never burnt, never flat.",
                image: "/images/product-1.png"
              },
              {
                title: "Hospitality First",
                description:
                  "A calm space, thoughtful service, and guidance when you want it.",
                image: "/images/product-1.png"
              },
              {
                title: "Brew Education",
                description:
                  "Recipes and tips to help you brew better at home.",
                image: "/images/product-3.png"
              }
            ]}
          />
        </div>
      </motion.section>

      <motion.section
        {...sectionAnim}
        className="surface py-28"
        id="team"
      >
        <div className="container-page">
          <TeamGrid
            eyebrow="Team"
            title="The people behind the pour"
            description="A small crew of roasters and baristas obsessed with flavor and flow."
            members={[
              {
                name: "Mara",
                role: "Head Roaster",
                bio: "Builds profiles for sweetness and clean finish.",
                image: "/images/product-1.png"
              },
              {
                name: "Eli",
                role: "Café Lead",
                bio: "Dial-ins, training, and hospitality details.",
                image: "/images/product-2.png"
              },
              {
                name: "Noah",
                role: "Barista",
                bio: "Pour-over precision and origin storytelling.",
                image: "/images/product-1.png"
              },
              {
                name: "Sienna",
                role: "Pastry Partner",
                bio: "Seasonal pairings designed for coffee’s flavor arc.",
                image: "/images/product-2.png"
              }
            ]}
          />
        </div>
      </motion.section>

      <motion.section {...sectionAnim} className="surface-low py-28">
        <div className="container-page">
          <CTASplit
            eyebrow="Come Say Hello"
            title="Taste the rotation this week"
            description="Drop in for espresso and slow coffee, or reach out for catering and office coffee."
            primaryCta={{ label: "Contact", href: "/contact" }}
            secondaryCta={{ label: "Services", href: "/services" }}
            image={{ src: "/images/hero.png", alt: "Coffee being poured into a cup" }}
          />
        </div>
      </motion.section>
    </div>
  );
}
