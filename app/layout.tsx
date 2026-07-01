import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AgeGate from "./components/AgeGate";
import CookieBanner from "./components/CookieBanner";
import StickyDownloadCTA from "./components/StickyDownloadCTA";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GEM7 Game Download - Official App & Earn Rewards",
  description:
    "Download the official GEM7 Game app. Get the latest GEM7 APK, play exciting games, claim your sign-up bonus and earn real rewards. 100% verified.",
  keywords:
    "gem7aap, gem7aap.com, GEM7 AAP, GEM7, GEM7 Game, GEM7 App, GEM7 Download, GEM7 APK, GEM7 Official, GEM7 Login, Play GEM7, GEM7 Earning App, GEM7 Sign Up Bonus, GEM7 Official Website, GEM7 Real Cash Game, GEM7 App Link, GEM7 Register, GEM7 Bonus, GEM7 Hack, GEM7 Mod APK, GEM7 Real or Fake, GEM7 Customer Care, GEM7 Tricks",
  alternates: {
    canonical: "https://gem7aap.com",
  },
  openGraph: {
    title: "GEM7 Game Download - Official App & Earn Daily Rewards",
    description:
      "Download the official GEM7 Game app. Get the latest GEM7 APK, play exciting games, claim your sign-up bonus and earn real rewards.",
    url: "https://gem7aap.com",
    siteName: "GEM7 AAP",
    images: [
      {
        url: "https://ddhp34p0t73zc.cloudfront.net/sys7/p2/uploadfile/20260609/922919822197526528.png?v=20260609155311",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GEM7 Game Download - Official App",
    description:
      "Download the official GEM7 Game app. Get the latest GEM7 APK and earn real rewards.",
    images: [
      "https://ddhp34p0t73zc.cloudfront.net/sys7/p2/uploadfile/20260609/922919822197526528.png?v=20260609155311",
    ],
  },
  icons: {
    icon: "https://ddhp34p0t73zc.cloudfront.net/sys7/p2/uploadfile/20260609/922919822197526528.png?v=20260609155311",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white text-gray-800 relative">
        <AgeGate />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <CookieBanner />
        <StickyDownloadCTA />
        <Analytics />
      </body>
    </html>
  );
}
