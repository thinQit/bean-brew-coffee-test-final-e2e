import type { Metadata } from "next";
import { Noto_Serif, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

import NavbarGlass from "@/components/blocks/NavbarGlass";
import FooterMultiColumn from "@/components/blocks/FooterMultiColumn";

const heading = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "600", "700"]
});

const body = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "Bean & Brew Coffee — Premium Small-Batch Roastery",
  description:
    "Bean & Brew Coffee is a premium coffee roastery crafting small-batch beans, seasonal espresso, and a curated ritual in every cup."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body>
        {/* Navbar must be full width and fixed */}
        <div className="fixed top-0 left-0 right-0 w-full z-50">
          <NavbarGlass
            brand={{
              name: "Bean & Brew",
              tagline: "Premium Roastery"
            }}
            links={[
              { label: "About", href: "/about" },
              { label: "Services", href: "/services" },
              { label: "Pricing", href: "/pricing" },
              { label: "Portfolio", href: "/portfolio" },
              { label: "Contact", href: "/contact" }
            ]}
            cta={{
              label: "View Menu",
              href: "/services"
            }}
          />
        </div>

        {/* Offset for fixed nav */}
        <div className="pt-20">{children}</div>

        <FooterMultiColumn
          brand={{
            name: "Bean & Brew Coffee",
            description:
              "A premium small-batch roastery and café experience—crafted for the intentional ritual."
          }}
          columns={[
            {
              title: "Explore",
              links: [
                { label: "About", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Pricing", href: "/pricing" },
                { label: "Portfolio", href: "/portfolio" }
              ]
            },
            {
              title: "Visit",
              links: [
                { label: "Contact", href: "/contact" },
                { label: "Hours & Location", href: "/contact" },
                { label: "Catering", href: "/services" }
              ]
            },
            {
              title: "Roastery",
              links: [
                { label: "Subscriptions", href: "/pricing" },
                { label: "Wholesale", href: "/services" },
                { label: "Seasonal Releases", href: "/portfolio" }
              ]
            }
          ]}
          bottomLinks={[
            { label: "Privacy", href: "/contact" },
            { label: "Terms", href: "/contact" }
          ]}
        />
      </body>
    </html>
  );
}
