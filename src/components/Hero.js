"use client";

import React from "react";
import Image from "next/image";
import { AiFillLinkedin, AiFillGithub, AiFillFacebook } from "react-icons/ai";
import { motion } from "framer-motion";
import { AuroraBackground } from "./ui/aurora-background";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="relative flex flex-col gap-4 items-center justify-center pt-6 lg:pt-40"
    >
      <section
        id="#home"
        className="mx-auto w-full text-zinc-800 max-w-5xl pb-16 pt-24 sm:pt-28 md:pt-32 sm:p-10 md:px-14 md:pb-24 lg:px-16 lg:pt-6 xl:px-0 xl:pt-10 xl:pb-24 px-6"
      >
        <div className="flex flex-col items-center justify-center space-y-16 lg:flex-row lg:space-y-0 lg:space-x-16">
          <div className="w-full space-y-10">
            <div className="space-y-8">
              <div className=" space-y-6">
                <header>
                  <p>👋 Hello mate! I am,</p>
                  <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-sky-600 tracking-tighter text-6xl font-bold sm:text-7xl">
                    Jed Adrian
                  </h1>
                </header>
                <nav aria-label="Social media profiles">
                  <ul className="flex space-x-4 text-zinc-700">
                    <li className="text-2xl hover:text-zinc-400">
                      <a
                        href="https://www.linkedin.com"
                        aria-label="LinkedIn"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <AiFillLinkedin />
                      </a>
                    </li>
                    <li className="text-2xl hover:text-zinc-400">
                      <a
                        href="https://github.com"
                        aria-label="GitHub"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <AiFillGithub />
                      </a>
                    </li>
                    <li className="text-2xl hover:text-zinc-400">
                      <a
                        href="https://www.facebook.com"
                        aria-label="Facebook"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <AiFillFacebook />
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

              <p className=" text-sm font-light max-w-lg sm:text-base">
                I specialize in crafting UI/UX designs, focusing on
                understanding user requirements and delivering captivating
                experiences. With a keen eye for detail and a passion for
                creating intuitive interfaces, I strive to merge aesthetics and
                functionality seamlessly in every project.
              </p>
            </div>
            <div className=" flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <button className="px-5 py-3 bg-indigo-50 text-zinc-800 text-sm rounded-lg hover:opacity-75">
                Get to know me
              </button>
              <a
                href="/Jed Adrian Resume.pdf"
                className="px-5 py-3 bg-indigo-500 text-white text-sm rounded-lg hover:opacity-75 flex flex-row justify-center"
              >
                Resume
              </a>
            </div>
          </div>
          <div className="w-full">
            <Image
              layout="responsive"
              src="/hero-img.png"
              alt="Jed's hero image"
              width={100}
              height={100}
            />
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Hero;
