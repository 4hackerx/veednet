import "@/library/styles/globals.css";
import { cn } from "@/library/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VeedNet",
  description: "Your video compression network",
  openGraph: {
    images: [
      {
        url: "opengraph-image.jpg",
        alt: "VeedNet landing page",
        width: 1200,
        height: 627,
      },
    ],
    type: "website",
    url: "https://veednet.vercel.app/",
    title: "VeedNet",
    description: "Your video compression network",
  },
};

import { Inter, Outfit } from "next/font/google";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"], preload: true });
const outfit = Outfit({
  subsets: ["latin"],
  preload: true,
  weight: "600",
  variable: "--font-outfit",
  display: "swap",
});
const atyp = localFont({
  src: [
    {
      path: "../public/fonts/AtypDisplay-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-atyp",
  preload: true,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, outfit.variable, atyp.variable)}>
        {children}
      </body>
    </html>
  );
}
