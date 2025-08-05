import type { Metadata } from "next";
import { Montserrat, Montserrat_Alternates } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";
import React from "react";
import HeaderMobile from "@/components/header-mobile";

const montserrat = Montserrat({
  subsets: ["latin"],
});

const montserratAlt = Montserrat_Alternates({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Joystick Labs",
  description: "The most Intriguing SPACE for Web3 Gaming and Entertainment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-[#CECECF]`}>
        <Header />
        <HeaderMobile />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
