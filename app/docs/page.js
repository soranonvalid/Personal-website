"use client";

import React from "react";

export default function page() {
  // bg-[#034267]
  return (
    <main className="flex flex-col items-center bg-[#FDF4E5] work-sans">
      <section className="w-full flex flex-col items-center justify-center my-0 lg:my-10 px-0 lg:px-10">
        <div className="bg-[#034267] max-w-[1200px] p-10 w-full">
          <img className="" src="/sprite2.svg" />
        </div>
      </section>
      <section className="max-w-[1200px] w-full mb-10 mt-10 lg:mt-0 gap-55 text-justify items-center flex px-10">
        <div className="flex flex-1 gap-10 items-center justify-between">
          <img className="h-fit hidden sm:block" src="/arrow2.svg" />
          <div className="w-[4px] h-[120px] bg-[#034267]"></div>
          <div className="text-[#034267]">
            <h1 className="text-[32px] font-bold">Documentation</h1>
            <p className="space-mono">
              The portfolio serves as a digital identity presenting an overview
              of work across development and design on this site..
            </p>
          </div>
        </div>
        <img className="h-fit hidden lg:block" src="/logoDoc.svg" />
      </section>
      <section className="bg-[#034267] w-full flex flex-col items-center justify-center py-10 px-10 text-[#FDF4E5]">
        <div className="max-w-[1200px] w-full flex flex-col gap-10 px-10">
          <div className="flex flex-col md:flex-row gap-10 lg:gap-50 mb-10 justify-between">
            <div className="flex flex-1 gap-5 flex-col lg:flex-row">
              <img
                className="h-fit w-full md:h-fit md:w-fit"
                src="/logoDoc1.svg"
              />
              <img
                className="h-fit w-full md:h-fit md:w-fit"
                src="/logoDoc2.svg"
              />
            </div>
            <div className="flex-1">
              <div className="flex flex-col gap-1 mb-3">
                <h1 className="text-[32px] font-bold">Colors</h1>
                <div className="w-full h-[2px] bg-[#FDF4E5]"></div>
              </div>
              <div className="flex flex-col gap-5 justify-between">
                <div>
                  <h2 className="font-bold text-4xl mb-3 lg:text-1xl lg:mb-0">
                    Navy Blue
                  </h2>
                  <p className="space-mono text-[15px]">
                    commonly associated with authority, professionalism,
                    reliability, and convey trust.
                  </p>
                </div>
                <div>
                  <h2 className="font-bold text-4xl mb-3 lg:text-1xl lg:mb-0">
                    Cream
                  </h2>
                  <p className="space-mono text-[15px]">
                    softens the layout, giving it a welcoming tone that avoids
                    the starkness of white.
                  </p>
                </div>
                <div className="flex flex-col lg:hidden gap-5">
                  <div className="flex gap-3">
                    <h1 className="text-4xl font-bold">Logo</h1>
                  </div>
                  <p className="space-mono">
                    stylized{" "}
                    <strong>
                      interpretation of the Japanese hiragana character "そ"
                      (so)
                    </strong>
                    . It combines cultural identity with a modern design
                    aesthetic, resulting in a symbol that feels minimalist and a
                    star symbolize optimism.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex flex-col gap-5">
            <div className="flex gap-3">
              <div className="h-[40px] w-[12px] bg-[#FDF4E5]"></div>
              <h1 className="text-4xl font-bold">Logo</h1>
            </div>
            <p className="space-mono">
              stylized{" "}
              <strong>
                interpretation of the Japanese hiragana character "そ" (so)
              </strong>
              . It combines cultural identity with a modern design aesthetic,
              resulting in a symbol that feels minimalist and a star symbolize
              optimism.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full flex flex-col items-center justify-center px-10">
        <div className="max-w-[1200px] w-full py-10 text-[#034267]">
          <div className="flex flex-col md:flex-row gap-5 text-4xl items-start md:items-center pb-10">
            <div className="flex gap-5">
              <h1 className="font-bold">Font</h1>
              <div className="w-[5px] h-[40px] bg-[#034267]"></div>
            </div>
            <div className="flex items-center gap-10">
              <p>Work Sans</p>
              <p className="space-mono">Space Mono</p>
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row gap-3">
            <h1 className="flex-1 font-semibold text-3xl">Sora Yudhistira</h1>
            <p className="flex-2 space-mono text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>
          <div className="flex gap-5 text-4xl items-center mt-10 py-10">
            <h1 className="font-bold">Dependencies</h1>
            <div className="w-[5px] h-[40px] bg-[#034267]"></div>
          </div>
          <ul className="flex items-center gap-5">
            <li>
              <a href="https://nextjs.org/">
                <img src="nextdep.svg" />
              </a>
            </li>
            <li>
              <a href="https://motion.dev/">
                <img src="motion.svg" />
              </a>
            </li>
            <li>
              <a href="https://tailwindcss.com/">
                <img src="tailwind.svg" />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
