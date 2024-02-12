import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const spaceMono = Space_Mono({ subsets: ["latin"], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: "SpaceX Landing Page",
  description: "Alternative SpaceX Landing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={spaceMono.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
