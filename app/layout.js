"use client"
import { Work_Sans, Space_Mono } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/SideBar";
import { useState } from "react";

const WorkSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const SpaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400","700"],
});


export default function RootLayout({ children }) {
  const [IsFreezed, SetIsFreezed] = useState(false);
  return (
    <html lang="en">
      <title>SORA | Portfolio</title>
      <body
        className={`${WorkSans.variable} ${SpaceMono.variable} antialiased bg-[#FDF4E5]`}
      >
        <SideBar />
        {children}
      </body>
    </html>
  );
}
