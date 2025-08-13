"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(true);
  const [isOpenedMobile, setIsOpenMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [delayedClass, setDelayedClass] = useState("");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 800) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  useEffect(() => {
    let timeout;

    if (!isOpen) {
      // remove class immediately
      setDelayedClass("index-finite");
      clearTimeout(timeout);
      console.log("isOpen", isOpen);
    } else {
      // delay adding the class
      timeout = setTimeout(() => {
        setDelayedClass("");
        console.log("isOpen", isOpen);
      }, 600);
    }

    return () => clearTimeout(timeout);
  }, [isOpen]);
  return (
    <div className={`fixed h-fit lg:h-screen ${delayedClass}`}>
      <nav
        id="mobileNav"
        className={`bg-[#262628] w-screen flex px-5 py-5 lg:hidden  ${isScrolled ? "translate-y-[0]" : "translate-y-[-100%]"} transition-ease`}
      >
        <div className="flex items-center justify-between w-full index-finite">
          <img src="/logosidebar.svg" alt="" />
          <div
            className="w-[40px] h-[40px] gap-3 flex flex-col justify-between"
            onClick={() => setIsOpenMobile(!isOpenedMobile)}
          >
            <div className="bg-white flex-1"></div>
            <div className="bg-white flex-1"></div>
            <div className="bg-white flex-1"></div>
          </div>
        </div>
      </nav>
      <section className="h-full relative hidden lg:block">
        <header
          className={`absolute h-full sm:w-[368px] bg-[#262628] ${
            isOpen ? "right-[100%]" : "right-0"
          } transition-ease relative text-white space-mono `}
        >
          <nav className="px-10 py-5 justify-between h-full">
            {/* sidebar part */}
            <div
              className="absolute top-[50%] translate-y-[-50%] right-[-60] bg-[#262628] p-3 transition-ease hover:p-4 cursor-pointer index-finite"
              onClick={() => setIsOpen(!isOpen)}
            >
              <img src="/sidebar.svg" alt="" />
            </div>
            {/* content part */}
            <div className="flex flex-col justify-between h-full">
              <div className="flex flex-col gap-[25px]">
                <div className="w-full flex items-center justify-between">
                  <a href="/#hero">
                    <img src="/logosidebar.svg" alt="" />
                  </a>
                  <h1 className="work-sans font-bold hidden sm:block">
                    <a href="/#hero">SORA</a>
                  </h1>
                  <img
                    className="block sm:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                    src="/cancel.svg"
                    alt=""
                  />
                </div>
                <a href="/#hero">
                  <p>
                    Fullstack Developer & UI/UX Designer based in Indonesia. I
                    build fast, functional, and user-focused digital products
                    from pixel-perfect designs to scalable backend systems.
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
                    <a href="/#webdev">Web Development</a>
                  </li>
                  <li className="flex gap-[11px]">
                    <img
                      className="w-[24px] h-[25px]"
                      src="/multimedia.svg"
                      alt=""
                    />
                    <a href="/#multimedia">Multimedia</a>
                  </li>
                  <li className="flex gap-[11px]">
                    <img className="w-[24px] h-[25px]" src="/blog.svg" alt="" />
                    <a href="#blog">Blogs</a>
                  </li>
                  <li className="flex gap-[11px]">
                    <img
                      className="w-[24px] h-[25px]"
                      src="/folder.svg"
                      alt=""
                    />
                    <Link href="/docs">Documentation</Link>
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
      </section>
    </div>
  );
}
