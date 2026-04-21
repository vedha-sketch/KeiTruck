import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const interBody = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NORMAL ROBOTICS — Solar Electric Kei Trucks",
  description:
    "Boutique restoration and electrification of vintage Kei trucks. Handcrafted in Hawaii. Mobile power. Zero exhaust. Infinite capability.",
};

export const viewport: Viewport = {
  themeColor: "#f8f8f8",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${interBody.variable} ${mono.variable}`}
    >
      <body className="bg-paper text-ink font-body antialiased">
        {children}
      </body>
    </html>
  );
}
