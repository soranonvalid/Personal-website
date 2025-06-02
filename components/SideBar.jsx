"use client";

import React from "react";
import { useState } from "react";
import Link from "next/link";

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="fixed max-h-screen h-full">
      <header
        className={`fixed h-full sm:w-[368px] bg-[#262628] ${
          isOpen ? "translate-x-[-100%]" : ""
        } transition-transform duration-300 ease-in-out relative text-white space-mono`}
      >
        <nav className="px-10 py-5 justify-between h-full">
          {/* sidebar part */}
          <div
            className="absolute top-[50%] translate-y-[-50%] right-[-60] bg-[#262628] p-3 transition-ease hover:p-4 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <img src="/sidebar.svg" alt="" />
          </div>
          {/* content part */}
          <div className="flex flex-col justify-between h-full">
            <div className="flex flex-col gap-[25px]">
              <div className="w-full flex items-center justify-between">
                <a href="#hero">
                  <img src="/logosidebar.svg" alt="" />
                </a>
                <h1 className="work-sans font-bold hidden sm:block">
                  <a href="#hero">SORA</a>
                </h1>
                <img
                  className="block sm:hidden"
                  onClick={() => setIsOpen(!isOpen)}
                  src="/cancel.svg"
                  alt=""
                />
              </div>
              <a href="#hero">
                <p>
                  Fullstack Developer & UI/UX Designer based in Indonesia. I
                  build fast, functional, and user-focused digital products from
                  pixel-perfect designs to scalable backend systems.
                </p>
              </a>
              <div className="w-full h-[2px] bg-white"></div>
              <ul className="work-sans flex flex-col gap-5">
                <li className="flex gap-[11px]">
                  <img
                    className="w-[24px] h-[25px]"
                    src="/programming.svg"
                    alt=""
                  />
                  <a href="#webdev">Web Development</a>
                </li>
                <li className="flex gap-[11px]">
                  <img
                    className="w-[24px] h-[25px]"
                    src="/multimedia.svg"
                    alt=""
                  />
                  <a href="#multimedia">Multimedia</a>
                </li>
                <li className="flex gap-[11px]">
                  <img className="w-[24px] h-[25px]" src="/blog.svg" alt="" />
                  <a href="#blog">Blogs</a>
                </li>
              </ul>
              <div className="w-full h-[2px] bg-white"></div>
              <ul className="work-sans flex flex-col gap-5">
                <li className="flex gap-[11px]">
                  <img
                    className="w-[24px] h-[25px]"
                    src="/instagram.svg"
                    alt=""
                  />
                  <Link href={"https://www.instagram.com/sora.smh/"}>
                    Sora.smh
                  </Link>
                </li>
                <li className="flex gap-[11px]">
                  <img
                    className="w-[24px] h-[25px]"
                    src="/linkedin.svg"
                    alt=""
                  />
                  <Link
                    href={
                      "https://id.linkedin.com/in/sora-yudhistira-santosa-54966b340"
                    }
                  >
                    Sora Yudhistira Santosa
                  </Link>
                </li>
              </ul>
            </div>
            <p className="text-xs">S0RA | W8 LOVE</p>
          </div>
        </nav>
      </header>
    </div>
  );
}
