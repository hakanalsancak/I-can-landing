import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "I Can — Your AI Performance Coach",
  description:
    "Build discipline, track your progress, and receive AI insights that help you improve your athletic performance every day.",
  keywords: [
    "athlete",
    "performance",
    "AI coach",
    "training",
    "discipline",
    "sports",
  ],
  openGraph: {
    title: "I Can — Your AI Performance Coach",
    description:
      "Build discipline, track your progress, and receive AI insights that help you improve your athletic performance every day.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
