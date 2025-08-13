"use client";
import React from "react";
import Link from "next/link";
import { useEffect } from "react";
import { motion } from "framer-motion";

import WebDev from "@/data/Webdev";
import MultMed from "@/data/multmed";
import Blogs from "@/data/blogs";

export default function page() {
  useEffect(() => {
    console.log(WebDev);
    const letters = "SORA04";
    const targetText = document.getElementById("hero");
    const originalText = targetText.textContent;
    let iteration = 0;

    const interval = setInterval(() => {
      const displayedText = originalText
        .split("")
        .map((char, index) => {
          if (index < iteration) return originalText[index];
          return letters[Math.floor(Math.random() * letters.length)];
        })
        .join("");

      targetText.textContent = displayedText;

      iteration += 1;
      if (iteration > originalText.length) clearInterval(interval);
    }, 50);
  }, []);

  return (
    <main className="flex flex-col items-center bg-[#FDF4E5]">
      <section className="px-2 lg:px-0 text-[#034267] max-w-[1200px] w-full work-sans">
        <div className="text-[5rem] text-sm/15 lg:text-[9rem] sm:text-[6rem] min-h-[240px] sm:text-sm/20 lg:text-sm/30 mt-35">
          <h1 id="hero" className="font-black text">
            Sora Yudhistira Santosa.
          </h1>
        </div>
        <div className="w-full flex justify-between mt-20">
          <p className="space-mono">(Jakarta, Indonesia)</p>
          <img src="/sprite1.svg" />
        </div>
      </section>
      <div class="w-full lg:h-[500px] h-[400px] mt-5 bg-[url('/pattern1.png')] bg-contain bg-repeat"></div>

      <section className="px-2 lg:px-0 text-[#FDF4E5] bg-[#034267] flex justify-center w-full work-sans">
        <div className="max-w-[1200px] flex flex-col-reverse lg:flex-row gap-10 lg:gap-5 w-full py-30">
          <div className="flex-1 flex flex-col gap-10">
            <p className="space-mono text-[1.5rem]">
              craft seamless digital experiences by combining clean code,
              thoughtful design, and a strong focus on user interaction.
            </p>
            <div className="flex flex-col lg:flex-row gap-5 lg:gap-20">
              <ul>
                <li className="flex gap-5 space-mono">
                  <img src="/email.svg" />
                  <p>soraunordinary@gmail.com</p>
                </li>
              </ul>
              <ul>
                <li className="flex gap-5 space-mono">
                  <img src="/call.svg" />
                  <p>+62 0851 6114 7205</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="h-[115px] w-[2px] hidden lg:block bg-[#FDF4E5]"></div>
          <motion.div
            initial={{ translateY: 70 }}
            transition={{ delay: 0.1, duration: 1 }}
            whileInView={{ translateY: 0 }}
            className="lg:flex gap-5 hidden"
          >
            <h1 className="lg:text-3xl text-5xl font-bold">About me</h1>
            <img className="h-fit" src="/arrow1.svg" />
          </motion.div>
          <div className="flex gap-5 lg:hidden">
            <h1 className="lg:text-3xl text-5xl font-bold">About me</h1>
            <img className="h-fit" src="/arrow1.svg" />
          </div>
        </div>
      </section>
      <section className="w-full flex flex-col py-10 text-[#034267] items-center">
        <div className="px-2 lg:px-0 py-10 max-w-[1200px] w-full items-center gap-5 flex">
          <h1 id="webdev" className="text-4xl w-fit font-bold">
            Web Development
          </h1>
          <div className="flex-1 hidden md:flex h-full items-center">
            <motion.div
              initial={{ width: 1 }}
              whileInView={{ width: "100%" }}
              className="w-full h-[5px] bg-[#034267]"
            ></motion.div>
          </div>
        </div>
        <div className="w-full flex justify-center border-3 border-y-[#034267] my-10">
          <div className="max-w-[1200px] w-full flex">
            <motion.ul
              initial={{ translateX: 300 }}
              transition={{ delay: 0.1, duration: 1 }}
              whileInView={{ translateX: 0 }}
              className="md:flex hidden flex-col md:flex-row gap-5 w-full index-low justify-between"
            >
              {WebDev.map((item, index) => (
                <li
                  key={index}
                  className="border-3 flex-1 flex flex-col gap-5 p-4 border-white/0 md:border-y-white/0 md:border-x-[#034267] border-y-[#034267]"
                >
                  <img
                    src={item.img}
                    className={`w-full object-cover object-center h-[328px]`}
                  />
                  <div className="flex gap-2">
                    {item.tag.map((tag, tagIndex) => (
                      <h2
                        key={tagIndex}
                        className={`text-black px-4 py-1 rounded-full w-fit ${tag.alt === "pp" ? "bg-[#E8E8E8]" : tag.alt === "sch" ? "bg-[#BCE3FF]" : tag.alt === "ssd" ? "bg-[#FFC1BC]" : "bg-[#FDF4E5]"}`}
                      >
                        {tag.name}
                      </h2>
                    ))}
                  </div>
                  <h1 className="text-2xl">{item.title}</h1>
                  <Link className="space-mono underline" href={item.Link}>
                    Preview
                  </Link>
                </li>
              ))}
            </motion.ul>
            <ul className="flex md:hidden flex-col md:flex-row gap-5 w-full justify-between">
              {WebDev.map((item, index) => (
                <li
                  key={index}
                  className="border-3 flex-1 flex flex-col gap-5 p-4 border-white/0 md:border-y-white/0 md:border-x-[#034267] border-y-[#034267]"
                >
                  <img
                    src={item.img}
                    className={`w-full object-cover object-center h-[328px]`}
                  />
                  <div className="flex gap-2">
                    {item.tag.map((tag, tagIndex) => (
                      <h2
                        key={tagIndex}
                        className={`text-black px-4 py-1 rounded-full w-fit ${tag.alt === "pp" ? "bg-[#E8E8E8]" : tag.alt === "sch" ? "bg-[#BCE3FF]" : tag.alt === "ssd" ? "bg-[#FFC1BC]" : "bg-[#FDF4E5]"}`}
                      >
                        {tag.name}
                      </h2>
                    ))}
                  </div>
                  <h1 className="text-2xl">{item.title}</h1>
                  <Link className="space-mono underline" href={item.Link}>
                    Preview
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="w-full flex flex-col py-10 text-[#034267] items-center">
        <div className="px-2 lg:px-0 py-10 max-w-[1200px] w-full items-center gap-5 flex my-10 md:flex-row-reverse">
          <h1 id="multimedia" className="text-4xl w-fit font-bold">
            Multimedia
          </h1>
          <div className="flex-1 hidden md:flex h-full items-center">
            <motion.div
              initial={{ width: 1 }}
              whileInView={{ width: "100%" }}
              className="w-full h-[5px] bg-[#034267]"
            ></motion.div>
          </div>
        </div>
        <div className="w-full flex justify-center border-3 border-y-[#034267] mb-10">
          <div className="max-w-[1200px] w-full flex">
            <motion.ul
              initial={{ translateX: -300 }}
              transition={{ delay: 0.1, duration: 1 }}
              whileInView={{ translateX: 0 }}
              className="md:flex hidden flex-col md:flex-row gap-5 w-full justify-between"
            >
              {MultMed.map((item, index) => (
                <li
                  key={index}
                  className="border-3 flex-1 flex flex-col gap-5 p-4 border-white/0 md:border-y-white/0 md:border-x-[#034267] border-y-[#034267]"
                >
                  <img
                    src={item.img}
                    className={`w-full object-cover object-center h-[328px]`}
                  />
                  <div className="flex gap-2">
                    {item.tag.map((tag, tagIndex) => (
                      <h2
                        key={tagIndex}
                        className={`text-black px-4 py-1 rounded-full w-fit ${tag.alt === "pp" ? "bg-[#E8E8E8]" : tag.alt === "sch" ? "bg-[#BCE3FF]" : tag.alt === "ssd" ? "bg-[#FFC1BC]" : "bg-[#FDF4E5]"}`}
                      >
                        {tag.name}
                      </h2>
                    ))}
                  </div>
                  <h1 className="text-2xl">{item.title}</h1>
                  <Link className="space-mono underline" href={item.Link}>
                    Preview
                  </Link>
                </li>
              ))}
            </motion.ul>
            <ul className="flex md:hidden flex-col md:flex-row gap-5 w-full justify-between">
              {MultMed.map((item, index) => (
                <li
                  key={index}
                  className="border-3 flex-1 flex flex-col gap-5 p-4 border-white/0 md:border-y-white/0 md:border-x-[#034267] border-y-[#034267]"
                >
                  <img
                    src={item.img}
                    className={`w-full object-cover object-center h-[328px]`}
                  />
                  <div className="flex gap-2">
                    {item.tag.map((tag, tagIndex) => (
                      <h2
                        key={tagIndex}
                        className={`text-black px-4 py-1 rounded-full w-fit ${tag.alt === "pp" ? "bg-[#E8E8E8]" : tag.alt === "sch" ? "bg-[#BCE3FF]" : tag.alt === "ssd" ? "bg-[#FFC1BC]" : "bg-[#FDF4E5]"}`}
                      >
                        {tag.name}
                      </h2>
                    ))}
                  </div>
                  <h1 className="text-2xl">{item.title}</h1>
                  <Link className="space-mono underline" href={item.Link}>
                    Preview
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="px-2 lg:px-0 w-full bg-[#034267] text-[#FDF4E5] work-sans flex justify-center py-20">
        <div className="max-w-[1200px] w-full flex flex-col lg:flex-row gap-20">
          <h1 id="blog" className="text-4xl font-bold pr-20">
            Blog
          </h1>
          <motion.div
            initial={{ height: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            whileInView={{ height: "100%" }}
            className="h-full w-[5px] bg-[#FDF4E5] hidden lg:block"
          ></motion.div>
          <ul className="w-full flex flex-col gap-10">
            {Blogs.map((item, index) => (
              <li
                key={index}
                className="w-full flex flex-col md:flex-row gap-10"
              >
                <img
                  src={item.img}
                  className="flex-1 object-cover object-center max-h-[243px] cursor-pointer"
                ></img>
                <div className="flex-1 flex flex-col gap-2">
                  <div className="flex gap-2">
                    {item.tag.map((tag, tagIndex) => (
                      <p
                        key={tagIndex}
                        className={`text-black px-4 py-1 rounded-full text-sm w-fit h-fit ${tag.alt === "pp" ? "bg-[#E8E8E8]" : tag.alt === "sch" ? "bg-[#BCE3FF]" : tag.alt === "ssd" ? "bg-[#FFC1BC]" : "bg-[#FDF4E5]"}`}
                      >
                        {tag.name}
                      </p>
                    ))}
                  </div>
                  <h1 className="text-2xl">{item.title}</h1>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
