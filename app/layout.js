"use client";
import { Work_Sans, Space_Mono } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/SideBar";
import Footer from "@/components/Footer";
import { useState } from "react";

const WorkSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const SpaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({ children }) {
  const [IsFreezed, SetIsFreezed] = useState(false);
  return (
    <html lang="en">
      <head>
        <title>S0RA | PORTFOLIO</title>
        <meta name="description" content="SORA ≻ Personal Website" />
        <meta name="author" content="Sora Yudhistira Santosa" />

        <link rel="icon" href="/fav-icon.ico" type="image/x-icon" />

        <link rel="stylesheet" href="css/style.css" />

        <meta property="og:title" content="SORA ≻ Fullstack Web Developer" />
        <meta
          property="og:description"
          content="specializing in building seamless, high-performance digital experiences, It is Sora Yudhistira Santosa."
        />
        <meta
          property="og:image"
          content="http://sorayudhistira.kodein.sch.id/banner/banner.jpg"
        />
        <meta
          property="og:url"
          content="http://sorayudhistira.kodein.sch.id/"
        />
        <meta property="og:type" content="website" />
      </head>

      <body
        className={`${WorkSans.variable} ${SpaceMono.variable} antialiased bg-[#FDF4E5]`}
      >
        <SideBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
