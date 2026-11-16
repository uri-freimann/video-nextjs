import { Metadata } from "next";
import { ThemeProvider } from "@wrksz/themes/next";

import "./globals.css";
import { AppBar } from "./AppBar";

const siteUrl = "https://freimann.lv";
const siteName = "Iurii Korotkov";
const siteDescription =
  "Embedded bare-metal Rust project with ESP32-S3 + OV5640 streaming FullHD video over WebRTC, a Next.js benchmark and Expo app for OTA over BLE.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} - EmbRust Engineer`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    title: `${siteName} - EmbRust Engineer`,
    description: siteDescription,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: siteName }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} - EmbRust Engineer`,
    description: siteDescription,
    images: ["/og.png"],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  sameAs: [
    "https://github.com/uri-freimann",
    "https://linkedin.com/in/iurii-korotkov-aa661b359",
  ],
  name: "Iurii Korotkov",
  alternateName: ["Uri Freimann", "uri-freimann", "Юрий Коротков"],
  jobTitle: "EmbRust Engineer",
  url: siteUrl,

  knowsAbout: [
    {
      "@type": "Thing",
      name: "Bluetooth Low Energy",
      sameAs: "https://www.wikidata.org/wiki/Q1638779",
    },
    {
      "@type": "Thing",
      name: "C++",
      sameAs: "https://www.wikidata.org/wiki/Q2407",
    },
    {
      "@type": "Thing",
      name: "embedded system",
      sameAs: "https://www.wikidata.org/wiki/Q193040",
    },
    {
      "@type": "Thing",
      name: "ESP32",
      sameAs: "https://www.wikidata.org/wiki/Q27921668",
    },
    {
      "@type": "Thing",
      name: "JLCPCB",
      sameAs: "https://www.wikidata.org/wiki/Q124808320",
    },
    {
      "@type": "Thing",
      name: "Next.js",
      sameAs: "https://www.wikidata.org/wiki/Q56062435",
    },
    {
      "@type": "Thing",
      name: "React Native",
      sameAs: "https://www.wikidata.org/wiki/Q55774523",
    },
    {
      "@type": "Thing",
      name: "Rust",
      sameAs: "https://www.wikidata.org/wiki/Q575650",
    },
    {
      "@type": "Thing",
      name: "search engine optimization",
      sameAs: "https://www.wikidata.org/wiki/Q180711",
    },
    {
      "@type": "Thing",
      name: "STM32",
      sameAs: "https://www.wikidata.org/wiki/Q7394773",
    },
    {
      "@type": "Thing",
      name: "Tomsk State University of Control Systems and Radio-electronics",
      sameAs: "https://www.wikidata.org/wiki/Q4460386",
    },
    {
      "@type": "Thing",
      name: "WebRTC",
      sameAs: "https://www.wikidata.org/wiki/Q1089715",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>

      <body className="antialiased overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* <header className="flex h-16 items-center bg-secondary px-4 justify-between">
            <Nav />
            <ThemeToggle />
          </header>
          <main className="w-screen">{children}</main> */}

          <AppBar />
          <main className="w-screen pt-14 md:pl-30 md:pt-0">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
