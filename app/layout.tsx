import type { Metadata } from "next";
import "./globals.css";
import { Noto_Serif, Manrope } from "next/font/google";

import NavbarGlass from "@/components/blocks/NavbarGlass";
import FooterMultiColumn from "@/components/blocks/FooterMultiColumn";

const heading = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap"
});

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Bean & Brew Coffee",
  description:
    "Premium coffee roastery and café. Seasonal single-origin beans, signature espresso, and a warm editorial experience."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body className="surface">
        {/* Navbar must be full width */}
        <div className="fixed top-0 left-0 right-0 w-full z-50">
          <NavbarGlass
            brand={{
              name: "Bean & Brew",
              tagline: "Premium Roastery",
              href: "/"
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

        {/* Page content offset for fixed nav */}
        <main className="pt-24">{children}</main>

        <FooterMultiColumn
          brand={{
            name: "Bean & Brew Coffee",
            description:
              "A premium coffee roastery and café—crafted with patience, sourced with care, served with warmth.",
            image: "/images/product-1.png"
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
                { label: "Hours & Location", href: "/contact#visit" },
                { label: "Catering", href: "/services#catering" }
              ]
            },
            {
              title: "Social",
              links: [
                { label: "Instagram", href: "/contact#social" },
                { label: "Newsletter", href: "/contact#newsletter" }
              ]
            }
          ]}
          bottom={{
            copyright: `© ${new Date().getFullYear()} Bean & Brew Coffee. All rights reserved.`,
            links: [
              { label: "Privacy", href: "/contact#privacy" },
              { label: "Terms", href: "/contact#terms" }
            ]
          }}
        />
      </body>
    </html>
  );
}
