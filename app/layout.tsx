import Navbar from "@/library/components/organisms/Navbar";
import { cn } from "@/library/utils";
import "@/library/styles/globals.css";
// import type { Metadata } from "next";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "VeedNet",
//   description: "Your video compression network",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body>
//         <Navbar />
//         {children}
//       </body>
//     </html>
//   );
// }

import { Inter, Outfit } from "next/font/google";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"], preload: true });
const outfit = Outfit({
  subsets: ["latin"],
  preload: true,
  weight: "600",
  variable: "--font-outfit",
  display: 'swap'
});
// const bebas = Bebas_Neue({ subsets: ['latin'], weight: ['400'], variable: '--font-bebas', display: 'swap' })
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
        <Navbar />
        {children}
      </body>
    </html>
  );
}
