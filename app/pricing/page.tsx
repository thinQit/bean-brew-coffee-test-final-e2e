"use client";

import { motion } from "framer-motion";
import HeroSpotlight from "@/components/blocks/HeroSpotlight";
import PricingTable from "@/components/blocks/PricingTable";
import FAQAccordion from "@/components/blocks/FAQAccordion";
import CTAGlass from "@/components/blocks/CTAGlass";

const section = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 }
};

export default function PricingPage() {
  return (
    <main className="bg-[#FEFAE0]">
      <HeroSpotlight
        title="Pricing"
        subtitle="Subscriptions for home, wholesale for teams, and event coffee that feels like a boutique service."
        image={{ src: "/images/product-2.png", alt: "Coffee cups on a bar" }}
        primaryCta={{ label: "Start a Subscription", href: "/contact" }}
        secondaryCta={{ label: "Wholesale Inquiry", href: "/contact" }}
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
              Plans
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-heading text-[#1D1C0D]">
              Choose your ritual
            </h2>
          </div>

          <PricingTable
            plans={[
              {
                name: "Home",
                price: "$18",
                period: "/bag",
                description: "One 12oz bag. Fresh roast drops weekly.",
                features: ["Choose filter or espresso", "Tasting notes card", "Roast-date transparency"],
                cta: { label: "Get Home Plan", href: "/contact" },
                highlighted: false
              },
              {
                name: "Subscriber",
                price: "$34",
                period: "/month",
                description: "Two bags monthly—curated and consistent.",
                features: ["Priority seasonal releases", "Brew recipe suggestions", "Flexible schedule"],
                cta: { label: "Subscribe", href: "/contact" },
                highlighted: true
              },
              {
                name: "Wholesale",
                price: "Custom",
                period: "",
                description: "For offices, cafés, and hospitality partners.",
                features: ["Training & recipes", "Consistent roast profiles", "Volume pricing"],
                cta: { label: "Request Wholesale", href: "/contact" },
                highlighted: false
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
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div className="rounded-2xl bg-background p-4">
              <img
                src="/images/product-2.png"
                alt="Coffee bag and cup"
                className="h-72 w-full rounded-xl object-cover"
              />
            </div>

            <div>
              <p className="text-xs tracking-[0.18em] uppercase text-[#462800] font-body">
                FAQs
              </p>
              <h2 className="mt-3 text-3xl md:text-4xl font-heading text-[#1D1C0D]">
                Subscription & wholesale details
              </h2>

              <div className="mt-6">
                <FAQAccordion
                  items={[
                    {
                      question: "Can I pause or change my subscription?",
                      answer:
                        "Yes—pause, skip, or switch between filter and espresso at any time by messaging us."
                    },
                    {
                      question: "Do you offer grind options?",
                      answer:
                        "Yes. Whole bean is recommended, but we can grind for common brew methods."
                    },
                    {
                      question: "What does wholesale include?",
                      answer:
                        "We provide onboarding, brew recipes, and ongoing support to keep quality consistent."
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
            eyebrow="Not sure what to pick?"
            title="We’ll recommend the right plan"
            description="Tell us how you brew and what flavors you love—we’ll match you to a roast and schedule."
            primaryCta={{ label: "Contact", href: "/contact" }}
            secondaryCta={{ label: "View Services", href: "/services" }}
            image={{ src: "/images/product-2.png", alt: "Roasted beans close-up" }}
          />
        </div>
      </motion.section>
    </main>
  );
}
