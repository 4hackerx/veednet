import "@/library/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VeedNet",
  description: "Your video compression network",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <html lang="en">{children}</html>;
}
