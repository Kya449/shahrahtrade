import { Vazirmatn } from "next/font/google";
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

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  variable: "--font-vazirmatn",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shahrah Trade | Vehicle Import & Customs Clearance",

  description:
    "Shahrah Trade Bashmaq provides vehicle import, customs clearance, international logistics and commercial trading services.",
  
    metadataBase: new URL("https://shahrahtrade.com"),

  applicationName: "Shahrah Trade",
  icons: {
  icon: "/images/favicon.ico",
},

  creator: "Shahrah Trade",

  keywords: [
    "Shahrah Trade",
    "Bashmaq",
    "Vehicle Import",
    "Customs Clearance",
    "Logistics",
    "Import Export",
  ],

  authors: [
    {
      name: "Shahrah Trade",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fa" dir="rtl"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white font-[var(--font-vazirmatn)] text-slate-900">
        {children}
      </body>
    </html>
  );
}