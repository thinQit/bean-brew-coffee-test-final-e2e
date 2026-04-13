"use client";

import { motion } from "framer-motion";

import HeroMinimal from "@/components/blocks/HeroMinimal";
import FeaturesGrid from "@/components/blocks/FeaturesGrid";
import BentoGrid from "@/components/blocks/BentoGrid";
import StatsCounter from "@/components/blocks/StatsCounter";
import TestimonialsGrid from "@/components/blocks/TestimonialsGrid";
import CTASplit from "@/components/blocks/CTASplit";
import InfiniteMovingCards from "@/components/blocks/InfiniteMovingCards";
import FAQAccordion from "@/components/blocks/FAQAccordion";

const sectionAnim = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" },
  viewport: { once: true, amount: 0.25 }
};

export default function HomePage() {
  return (
    <div className="surface">
      {/* HERO */}
      <div className="relative">
        <div className="absolute inset-0 hero-overlay pointer-events-none" />
        <HeroMinimal
          title="Awaken Your Sensory Soul"
          subtitle="Bean & Brew is a premium roastery and café—single-origin lots, meticulous roast profiles, and a warm editorial experience in every cup."
          primaryCta={{ label: "Explore the Menu", href: "/services" }}
          secondaryCta={{ label: "Visit Us", href: "/contact#visit" }}
          image={{
            src: "/images/hero.png",
            alt: "Pour-over coffee in warm light"
          }}
          theme="dark"
          className="text-white"
        />
      </div>

      {/* Features */}
      <motion.section
        {...sectionAnim}
        className="surface-low py-28"
        aria-label="Signature selections"
      >
        <div className="container-page">
          <FeaturesGrid
            eyebrow="Signature Selections"
            title="A curated menu built like a tasting flight"
            description="From espresso to slow coffee, every recipe is designed to highlight origin character—floral, cocoa, citrus, and spice."
            features={[
              {
                title: "Single-Origin Rotations",
                description:
                  "Seasonal lots roasted weekly for clarity and sweetness.",
                icon: "sparkles"
              },
              {
                title: "Milk Crafted, Not Masked",
                description:
                  "Textured milk and balanced ratios that keep the coffee in the lead.",
                icon: "cup"
              },
              {
                title: "House Pastry Pairings",
                description:
                  "Warm, buttery pairings designed to complement roast notes.",
                icon: "cookie"
              },
              {
                title: "Brew Bar Guidance",
                description:
                  "Dial-in tips and brew recipes you can take home.",
                icon: "book"
              }
            ]}
          />
        </div>
      </motion.section>

      {/* Bento editorial */}
      <motion.section
        {...sectionAnim}
        className="surface py-28"
        aria-label="Editorial highlights"
      >
        <div className="container-page">
          <BentoGrid
            eyebrow="The Art of the Roast"
            title="Intentional craft, from green to cup"
            description="We roast to preserve origin integrity—developing sweetness without flattening nuance."
            items={[
              {
                title: "Roast Profiles",
                description:
                  "Balanced development for sweetness, clarity, and a clean finish.",
                image: "/images/product-2.png"
              },
              {
                title: "Origin Stories",
                description:
                  "Traceable sourcing and transparent relationships with producers.",
                image: "/images/product-3.png"
              },
              {
                title: "Brew Methods",
                description:
                  "Espresso, batch, pour-over—each tuned to highlight character.",
                image: "/images/product-1.png"
              },
              {
                title: "Seasonal Pairings",
                description:
                  "Pastries and small bites designed for coffee’s flavor arc.",
                image: "/images/product-3.png"
              }
            ]}
          />
        </div>
      </motion.section>

      {/* Social proof / logos */}
      <motion.section
        {...sectionAnim}
        className="surface-low py-28"
        aria-label="As seen in"
      >
        <div className="container-page">
          <InfiniteMovingCards
            title="Loved by locals, praised by travelers"
            subtitle="A few places our guests say they discovered us."
            items={[
              { name: "The Weekend Edit", quote: "A roastery with magazine-level calm." },
              { name: "City Bites", quote: "Espresso that tastes like chocolate and citrus." },
              { name: "Roast Journal", quote: "A thoughtful menu with real origin clarity." },
              { name: "Neighborhood Notes", quote: "Warm service, beautiful pours." },
              { name: "The Daily Cup", quote: "A premium café experience without pretense." }
            ]}
          />
        </div>
      </motion.section>

      {/* Stats */}
      <motion.section
        {...sectionAnim}
        className="surface py-28"
        aria-label="Roastery stats"
      >
        <div className="container-page">
          <StatsCounter
            eyebrow="By the Numbers"
            title="Small-batch precision, daily hospitality"
            description="We keep it focused: fewer items, better execution, fresher coffee."
            stats={[
              { label: "Roast batches per week", value: 18 },
              { label: "Seasonal origins per year", value: 24 },
              { label: "Dial-ins per day", value: 30 },
              { label: "Guest satisfaction", value: 98, suffix: "%" }
            ]}
          />
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        {...sectionAnim}
        className="surface-low py-28"
        aria-label="Guest stories"
      >
        <div className="container-page">
          <TestimonialsGrid
            eyebrow="Guest Stories"
            title="A café that feels like a ritual"
            description="A few words from people who made Bean & Brew part of their morning."
            testimonials={[
              {
                name: "Ava M.",
                title: "Regular",
                quote:
                  "The pour-over is consistently bright and sweet. It’s the first café where I can taste the origin notes clearly.",
                image: "/images/product-1.png"
              },
              {
                name: "Jordan K.",
                title: "Traveler",
                quote:
                  "Beautiful space, calm energy, and the espresso is dialed. I came back twice in one weekend.",
                image: "/images/product-3.png"
              },
              {
                name: "Sam R.",
                title: "Home Brewer",
                quote:
                  "They explained grind and ratio without being pushy. My home brews improved immediately.",
                image: "/images/product-1.png"
              }
            ]}
          />
        </div>
      </motion.section>

      {/* FAQ */}
      <motion.section
        {...sectionAnim}
        className="surface py-28"
        aria-label="FAQ"
      >
        <div className="container-page">
          <FAQAccordion
            eyebrow="FAQ"
            title="Everything you need to know"
            description="Quick answers about beans, brewing, and visiting."
            items={[
              {
                question: "Do you roast on-site?",
                answer:
                  "We roast in small batches and release weekly rotations. Ask the bar for what’s freshest today."
              },
              {
                question: "Can you grind beans for my brewer?",
                answer:
                  "Yes—tell us your brew method (V60, Chemex, French press, espresso) and we’ll match the grind."
              },
              {
                question: "Do you offer dairy alternatives?",
                answer:
                  "Yes. We offer oat and almond options, and we tune recipes so the coffee still shines."
              },
              {
                question: "Do you do catering or office coffee?",
                answer:
                  "We do. See Services for catering and recurring office drop-offs."
              }
            ]}
          />
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        {...sectionAnim}
        className="surface-low py-28"
        aria-label="Call to action"
      >
        <div className="container-page">
          <CTASplit
            eyebrow="Visit Bean & Brew"
            title="Your next favorite cup is waiting"
            description="Stop by for espresso, slow coffee, and seasonal pastries—or reach out for catering and office coffee."
            primaryCta={{ label: "Get Directions", href: "/contact#visit" }}
            secondaryCta={{ label: "Contact Us", href: "/contact" }}
            image={{ src: "/images/product-1.png", alt: "Coffee and pastry on a table" }}
          />
        </div>
      </motion.section>
    </div>
  );
}
