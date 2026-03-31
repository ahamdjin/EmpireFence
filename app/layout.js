import "./globals.css";

import { Cormorant_Garamond, Inter } from "next/font/google";

import { ChatWidget } from "@/components/chat-widget";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { business } from "@/lib/site";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  metadataBase: new URL("https://empirefenceca.com"),
  title: {
    default: `${business.shortName} | Fence and outdoor services in Jurupa Valley`,
    template: `%s | ${business.shortName}`,
  },
  description:
    "Fence installation, gates, block walls, patios, turf, and outdoor upgrades across Jurupa Valley and nearby Inland Empire cities.",
  openGraph: {
    title: `${business.shortName} | Fence and outdoor services in Jurupa Valley`,
    description:
      "Fence installation, gates, block walls, patios, turf, and outdoor upgrades across Jurupa Valley and nearby Inland Empire cities.",
    images: ["/client/hero-western.webp"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${sans.variable}`}>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <ChatWidget />
      </body>
    </html>
  );
}
