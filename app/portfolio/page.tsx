"use client";

import { motion } from "framer-motion";
import HeroSpotlight from "@/components/blocks/HeroSpotlight";
import InfiniteMovingCards from "@/components/blocks/InfiniteMovingCards";
import ParallaxScroll from "@/components/blocks/ParallaxScroll";
import CTAGlass from "@/components/blocks/CTAGlass";

const section = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 }
};

export default function PortfolioPage() {
  return (
    <main className="bg-[#FEFAE0]">
      <HeroSpotlight
        title="Portfolio"
        subtitle="Seasonal releases, café moments, and the craft behind the cup."
        image={{ src: "/images/portfolio-1.png", alt: "Coffee bar scene" }}
        primaryCta={{ label: "Wholesale Inquiry", href: "/contact" }}
        secondaryCta={{ label: "See Pricing", href: "/pricing" }}
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
              Seasonal highlights
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-heading text-[#1D1C0D]">
              Recent drops & collaborations
            </h2>
          </div>

          <InfiniteMovingCards
            items={[
              {
                title: "Ethiopia — Washed Heirloom",
                description: "Jasmine, peach, bergamot. Clean and luminous.",
                image: "/images/product-3.png"
              },
              {
                title: "Colombia — Honey Process",
                description: "Red fruit, panela, cocoa. Plush sweetness.",
                image: "/images/product-2.png"
              },
              {
                title: "Guatemala — Espresso Blend",
                description: "Chocolate, toasted sugar, silky crema.",
                image: "/images/product-1.png"
              },
              {
                title: "Café Pop-Up Bar",
                description: "Mobile espresso for launches and private events.",
                image: "/images/portfolio-4.png"
              }
            ]}
            speed="normal"
          />
        </div>
      </motion.section>

      <motion.section
        className="bg-[#FEFAE0]"
        variants={section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-10">
            <p className="text-xs tracking-[0.18em] uppercase text-[#462800] font-body">
              Gallery
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-heading text-[#1D1C0D]">
              The ritual, photographed
            </h2>
          </div>

          <ParallaxScroll
            images={[
              "/images/portfolio-2.png",
              "/images/portfolio-3.png",
              "/images/portfolio-4.png",
              "/images/portfolio-5.png",
              "/images/portfolio-6.png",
              "/images/portfolio-1.png"
            ]}
          />
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
            eyebrow="Bring Bean & Brew to your space"
            title="Events & pop-ups with a premium brew bar"
            description="From brand launches to weddings—our mobile setup delivers café-quality espresso anywhere."
            primaryCta={{ label: "Book an Event", href: "/contact" }}
            secondaryCta={{ label: "View Services", href: "/services" }}
            image={{ src: "/images/portfolio-6.png", alt: "Coffee bar at an event" }}
          />
        </div>
      </motion.section>
    </main>
  );
}
