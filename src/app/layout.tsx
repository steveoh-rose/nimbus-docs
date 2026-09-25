import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

import { TooltipProvider } from "@/components/ui/tooltip";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/nav-config";

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  display: "swap",
});

// Docs chrome font (nav, sidebar, page copy) — HeroUI's own docs use Inter.
// Nimbus's Open Sans / Montserrat tokens stay reserved for the product itself, below.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} Design System`,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${robotoMono.variable} ${inter.variable} h-full antialiased`}>
      <head>
        {/* Nimbus typography tokens: Open Sans (body) and Montserrat (accent) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/*
          Only the weights the token system actually ships (400/600 for both families — see
          src/nimbus/tokens/build/css/_variables.css) instead of the full default weight range.
          That's 4 font files instead of 10, with no visual difference: nothing in the tokens
          or this site ever renders Open Sans at 300/700, Open Sans italic, or Montserrat at 500/700.
        */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Montserrat:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <TooltipProvider delayDuration={200}>
          <SiteHeader />
          <div className="flex flex-1 flex-col">{children}</div>
        </TooltipProvider>
      </body>
    </html>
  );
}
