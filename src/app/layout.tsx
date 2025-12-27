import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Header from "@/components/Header";
import ContactFAB from "@/components/ContactFAB";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "PAGUN CREATIVE | Optimize Your Social Media & Brand",
    template: "%s | PAGUN CREATIVE"
  },
  description: "Full service Social Media & Creative Agency based in Tarakan, North Kalimantan. Specializing in Content Strategy, Visual Branding, and Media Production.",
  keywords: ["Social Media Agency", "Creative Agency", "Tarakan", "Kalimantan Utara", "Branding", "Video Production", "Pagun Creative"],
  authors: [{ name: "Pagun Creative Team" }],
  creator: "Pagun Creative",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://paguncreative.com",
    title: "PAGUN CREATIVE | Optimize Your Social Media & Brand",
    description: "Full service Social Media & Creative Agency based in Tarakan, North Kalimantan.",
    siteName: "Pagun Creative",
  },
  twitter: {
    card: "summary_large_image",
    title: "PAGUN CREATIVE",
    description: "Optimize Your Social Media & Brand",
    creator: "@paguncreative",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased bg-obsidian text-mist">
        <SmoothScroll>
          <Header />
          <ContactFAB />
          <CustomCursor />
          <div className="noise-overlay" />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}