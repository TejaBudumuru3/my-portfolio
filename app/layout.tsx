import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 1. THIS IS THE ONLY PLACE you should define your metadata.
// I have moved all your information here.
export const metadata: Metadata = {
  title: "Srinivas Sai Saran Teja | Full-Stack & AI Developer",
  description: "The portfolio of Srinivas Sai Saran Teja, a full-stack developer specializing in building modern web applications with AI integration.",
  icons: {
    icon: "/logo.svg", // This is the correct way to add your favicon
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* 2. DO NOT add a <head> tag here. 
           Next.js automatically creates it from the 'metadata' object above.
      */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
