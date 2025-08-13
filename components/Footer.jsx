import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="work-sans font-light py-3 gap-4 bg-[#262628] w-full text-white">
      <Link
        target="_blank"
        href={"https://www.kodein.sch.id/"}
        className="flex items-center justify-center gap-4"
      >
        <h1 className="text-[0.6em] sm::text-1xl">
          2025 © SORA YUDHISTIRA SANTOSA | KODEIN | W8 LOVE
        </h1>
        <img className="h-4" src="/kodein.png" />
      </Link>
    </footer>
  );
}
