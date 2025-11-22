import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata for the website
/**
 * Website metadata for SEO and browser display
 */

//  SEO optimization
// Example SEO meta tags
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const robots = {
  index: true,
  follow: true,
  nocache: false,
  googleBot: {
    index: true,
    follow: true,
    noimageindex: false,
  },
};

// Icon for browser tab
export const icons = {
  icon: "/bg.jpg",
};

// Provides title and description for the site
export const metadata: Metadata = {
  title: "Gen-X Nirman | Construction & Renovation Experts",
  description: "Transforming visions into reality with expert construction and renovation services.",
};

// Root layout component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
