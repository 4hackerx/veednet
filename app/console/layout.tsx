import Navbar from "@/library/components/organisms/Navbar";
import { cn } from "@/library/utils";
import "@/library/styles/globals.css";

import { Inter, Outfit } from "next/font/google";
import localFont from "next/font/local";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex w-full flex-col items-center gap-8 pt-8 h-screen ">
      <img src="logo-vertical.svg" alt="logo" />
      {children}
    </div>
  );
}
