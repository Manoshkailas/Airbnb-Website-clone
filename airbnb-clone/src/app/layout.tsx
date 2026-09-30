import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const font = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Airbnb Clone",
  description: "A pixel-perfect clone of Airbnb listing page",
};

import ModalProvider from "@/providers/ModalProvider";
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={font.variable}>
      <body className="antialiased min-h-screen text-foreground selection:bg-brand selection:text-white pb-24">
        <ModalProvider />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
