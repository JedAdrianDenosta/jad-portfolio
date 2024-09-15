"use client";

import React from "react";
import Image from "next/image";
import { AiFillLinkedin, AiFillGithub, AiFillFacebook } from "react-icons/ai";

const Hero = () => {
  return (
    <section className="max-w-5xl mx-auto w-full pt-20 pb-24 text-zinc-800 flex justify-center">
      <div className="flex flex-row justify-center gap-x-10 max-w-5xl">
        <div className="w-full space-y-10">
          <div className="space-y-6">
            <header>
              <p>👋 Hello mate! I am,</p>
              <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-sky-600 tracking-tighter text-7xl font-bold">
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
            <p className="text-base font-light max-w-lg">
              I specialize in crafting UI/UX designs, focusing on understanding
              user requirements and delivering captivating experiences. With a
              keen eye for detail and a passion for creating intuitive
              interfaces, I strive to merge aesthetics and functionality
              seamlessly in every project.
            </p>
          </div>
          <div className="space-x-4">
            <button className="px-5 py-3 bg-indigo-500 text-white text-sm rounded-lg hover:opacity-75">
              Get to know me
            </button>
            <button className="px-5 py-3 bg-indigo-50 text-zinc-800 text-sm rounded-lg hover:opacity-75">
              My resume
            </button>
          </div>
        </div>
        <div className="w-full">
          <Image
            layout="responsive"
            src="/hero-img.png"
            alt="Jed's hero image"
            width={1000}
            height={100}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
