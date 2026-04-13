"use client";

import { motion } from "framer-motion";

import HeroSpotlight from "@/components/blocks/HeroSpotlight";
import FeaturesGrid from "@/components/blocks/FeaturesGrid";
import BentoGrid from "@/components/blocks/BentoGrid";
import ParallaxScroll from "@/components/blocks/ParallaxScroll";
import TestimonialsGrid from "@/components/blocks/TestimonialsGrid";
import FAQAccordion from "@/components/blocks/FAQAccordion";
import CTAGlass from "@/components/blocks/CTAGlass";

const section = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 }
};

export default function HomePage() {
  return (
    <main className="bg-[#FEFAE0]">
      <HeroSpotlight
        title="Crafted for the Intentional Ritual"
        subtitle="Small-batch roasts, seasonal espresso, and tasting notes that read like an editorial—because your morning deserves a little ceremony."
        image={{
          src: "/images/hero.png",
          alt: "Bean & Brew Coffee hero — espresso and beans"
        }}
        primaryCta={{ label: "Explore the Menu", href: "/services" }}
        secondaryCta={{ label: "Our Story", href: "/about" }}
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
              Small-batch standards
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-heading text-[#1D1C0D]">
              A premium roastery experience—without the pretense
            </h2>
          </div>

          <FeaturesGrid
            items={[
              {
                title: "Seasonal Espresso",
                description:
                  "Rotating single-origin and blend espresso designed for sweetness, clarity, and crema.",
                icon: "Coffee"
              },
              {
                title: "Tasting Notes, Not Buzzwords",
                description:
                  "Every bag ships with a concise flavor map—fruit, florals, chocolate, and finish.",
                icon: "Sparkles"
              },
              {
                title: "Brew Bar Guidance",
                description:
                  "Dial-in help for V60, AeroPress, espresso, and batch brew—tailored to your gear.",
                icon: "Wand2"
              },
              {
                title: "Ethical Sourcing",
                description:
                  "Relationship-forward sourcing with transparent lots and traceable processing.",
                icon: "Leaf"
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
          <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
            <div>
              <p className="text-xs tracking-[0.18em] uppercase text-[#462800] font-body">
                Signature menu
              </p>
              <h2 className="mt-3 text-3xl md:text-4xl font-heading text-[#1D1C0D]">
                Espresso, pour-over, and pastry pairings
              </h2>
              <p className="mt-4 text-[#462800]">
                From bright, fruit-forward filter to syrupy chocolate espresso—our menu is built
                around origin character and roast precision.
              </p>
            </div>
            <div className="relative">
              <div className="rounded-2xl bg-background p-4">
                <img
                  src="/images/product-1.png"
                  alt="Featured latte art"
                  className="h-64 w-full rounded-xl object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mt-10">
            <BentoGrid
              items={[
                {
                  title: "The House Espresso",
                  description: "Caramel sweetness, cocoa finish, silky body.",
                  image: "/images/product-2.png"
                },
                {
                  title: "Single-Origin Pour-Over",
                  description: "Clean cup, sparkling acidity, floral aromatics.",
                  image: "/images/product-3.png"
                },
                {
                  title: "Cold Brew Reserve",
                  description: "Slow-steeped, low bitterness, toasted sugar notes.",
                  image: "/images/product-2.png"
                },
                {
                  title: "Butter Croissant",
                  description: "Laminated, golden, and made for espresso.",
                  image: "/images/product-2.png"
                }
              ]}
            />
          </div>
        </div>
      </motion.section>

      <motion.section
        className="bg-[#F8F4DB]"
        variants={section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-10">
            <p className="text-xs tracking-[0.18em] uppercase text-[#462800] font-body">
              The ritual, in frames
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-heading text-[#1D1C0D]">
              A space designed for aroma, light, and conversation
            </h2>
          </div>

          <ParallaxScroll
            images={[
              "/images/portfolio-1.png",
              "/images/portfolio-2.png",
              "/images/portfolio-3.png",
              "/images/portfolio-4.png",
              "/images/portfolio-5.png",
              "/images/portfolio-6.png"
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
          <div className="mb-10">
            <p className="text-xs tracking-[0.18em] uppercase text-[#462800] font-body">
              Loved by regulars
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-heading text-[#1D1C0D]">
              The kind of coffee you remember
            </h2>
          </div>

          <TestimonialsGrid
            items={[
              {
                name: "Ava M.",
                role: "Pour-over devotee",
                quote:
                  "The tasting notes are spot-on. I can actually taste the peach and jasmine they describe.",
                avatar: "/images/avatar-1.png"
              },
              {
                name: "Jordan K.",
                role: "Espresso daily",
                quote:
                  "Perfect balance—sweet, rich, and never burnt. The baristas helped me dial in my home setup too.",
                avatar: "/images/avatar-2.png"
              },
              {
                name: "Sam R.",
                role: "Weekend regular",
                quote:
                  "It feels like a boutique hotel lobby but for coffee. Calm, warm, and intentional.",
                avatar: "/images/avatar-3.png"
              }
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
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="text-xs tracking-[0.18em] uppercase text-[#462800] font-body">
                Quick answers
              </p>
              <h2 className="mt-3 text-3xl md:text-4xl font-heading text-[#1D1C0D]">
                FAQs for first-time visitors
              </h2>
              <p className="mt-4 text-[#462800]">
                Want a recommendation? Tell us what you like (chocolatey, fruity, floral) and we’ll
                guide you.
              </p>

              <div className="mt-8 rounded-2xl bg-background p-4">
                <img
                  src="/images/product-2.png"
                  alt="Coffee bag and tasting notes card"
                  className="h-56 w-full rounded-xl object-cover"
                />
              </div>
            </div>

            <FAQAccordion
              items={[
                {
                  question: "Do you roast on-site?",
                  answer:
                    "We roast in small batches and feature fresh drops weekly. Ask for the roast date and we’ll help you choose based on brew method."
                },
                {
                  question: "Can you grind beans for my brewer?",
                  answer:
                    "Yes—tell us your setup (V60, Chemex, AeroPress, espresso, drip) and we’ll grind accordingly."
                },
                {
                  question: "Do you offer dairy-free options?",
                  answer:
                    "Absolutely. Oat and almond are always available, and we can recommend drinks that shine with alternative milks."
                },
                {
                  question: "Do you do subscriptions or wholesale?",
                  answer:
                    "Yes. Subscriptions and wholesale programs are listed on the Pricing page, and we can tailor volume to your needs."
                }
              ]}
            />
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
          <CTAGlass
            eyebrow="Ready to taste the difference?"
            title="Visit Bean & Brew or start a subscription"
            description="Drop in for seasonal espresso, take home a fresh roast, or set your week on autopilot with curated deliveries."
            primaryCta={{ label: "Contact & Hours", href: "/contact" }}
            secondaryCta={{ label: "See Pricing", href: "/pricing" }}
            image={{ src: "/images/product-3.png", alt: "Coffee bar and cups" }}
          />
        </div>
      </motion.section>
    </main>
  );
}
