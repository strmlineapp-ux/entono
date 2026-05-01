import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ENTONO — Autumn Wear",
  description:
    "Entono is a high fashion autumn wear brand. Depth of hue, rhythm of form — crafted for the season that defines all others.",
  metadataBase: new URL("https://entono.com"),
  robots: "index, follow",
  openGraph: {
    title: "ENTONO — Autumn Wear",
    description:
      "Entono is a high fashion autumn wear brand. Depth of hue, rhythm of form — crafted for the season that defines all others.",
    type: "website",
    locale: "en_US",
    url: "https://entono.com",
    siteName: "ENTONO",
    images: [
      {
        url: "/images/hero_v3.png",
        width: 1344,
        height: 1080,
        alt: "ENTONO — The depth of hue",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ENTONO — Autumn Wear",
    description:
      "Depth of hue. Rhythm of form. High fashion autumn wear.",
    images: ["/images/hero_v3.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Brand",
            name: "ENTONO",
            description:
              "Entono is a high fashion autumn wear brand. Depth of hue, rhythm of form.",
            url: "https://entono.com",
            logo: "https://entono.com",
            sameAs: [],
            brand: {
              "@type": "Brand",
              name: "ENTONO",
            },
          }),
        }}
      />
      <body className="min-h-screen flex flex-col bg-oat text-charcoal">
        {children}
      </body>
    </html>
  );
}
