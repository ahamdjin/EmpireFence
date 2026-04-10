import "./globals.css";
import "./ui-pass-5.css";
import "./ui-pass-6.css";

import { Instrument_Serif, Manrope } from "next/font/google";

import { ChatWidget } from "@/components/chat-widget";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { buildLocalBusinessSchema } from "@/lib/seo";
import { business } from "@/lib/site";

const accent = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-accent",
  weight: ["400"],
  style: ["normal", "italic"],
});

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#17110d",
};

export const metadata = {
  metadataBase: new URL("https://empirefenceca.com"),
  title: {
    default: `Fence Company in Jurupa Valley, CA | ${business.shortName}`,
    template: `%s | ${business.shortName}`,
  },
  description:
    "Empire Fence installs fences, gates, and block walls across Jurupa Valley and nearby Inland Empire cities.",
  keywords: [
    "fence company Jurupa Valley",
    "fence contractor Jurupa Valley",
    "vinyl fence Jurupa Valley",
    "wrought iron fence Jurupa Valley",
    "chain link fence Inland Empire",
  ],
  openGraph: {
    title: `Fence Company in Jurupa Valley, CA | ${business.shortName}`,
    description:
      "Empire Fence installs fences, gates, and block walls across Jurupa Valley and nearby Inland Empire cities.",
    images: ["/client/hero-western.webp"],
  },
};

export default function RootLayout({ children }) {
  const localBusinessSchema = buildLocalBusinessSchema();

  return (
    <html lang="en">
      <body className={`${accent.variable} ${sans.variable}`}>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <ChatWidget />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </body>
    </html>
  );
}
