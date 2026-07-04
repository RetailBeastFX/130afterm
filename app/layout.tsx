import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import CommandPalette from "@/components/layout/CommandPalette";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["200", "300", "400", "500"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "130AfterM",
  description:
    "Trader. Builder. Documenting the process. SPY 0DTE · XAUUSD · Technical Analysis.",
  keywords: ["trading", "SPY", "XAUUSD", "technical analysis", "ICT", "SMC", "RetailBeastFX"],
  authors: [{ name: "130AfterM" }],
  openGraph: {
    title: "130AfterM",
    description: "Trader. Builder. Documenting the process.",
    type: "website",
    url: "https://130afterm.netlify.app",
  },
  twitter: {
    card: "summary",
    title: "130AfterM",
    description: "Trader. Builder. Documenting the process.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-void text-primary font-sans antialiased">
        <CommandPalette />
        <Nav />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
