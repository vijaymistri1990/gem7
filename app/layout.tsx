import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GEM7 Game Download - Official App & Earn Daily Rewards (2026)",
  description: "Download the official GEM7 Game app. Get the latest GEM7 APK, play exciting games, claim your sign-up bonus and earn real rewards. Safe, secure, and 100% verified.",
  keywords: "GEM7, GEM7 Game, GEM7 App, GEM7 Download, GEM7 APK, GEM7 Official, GEM7 Login, GEM7 Register, GEM7 Bonus, GEM7 Hack, GEM7 Mod APK, GEM7 Real or Fake, GEM7 Customer Care, GEM7 Tricks, GEM7 Earning App",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-gray-800">{children}</body>
    </html>
  );
}
