"use client";

import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <>
      {/* Nav Bar */}
      <nav className="max-w-5xl mx-auto w-full py-6 hidden sm:block sm:px-10 md:px-14 lg:px-16 xl:px-0 absolute right-0 top-0 left-0 z-[999]">
        <div className="flex flex-row justify-between items-center">
          <Link
            to="#home"
            className="p-2"
            aria-label="Home"
            smooth={true}
            offset={5}
            duration={700}
          >
            <h1 className="text-sky-500 text-2xl font-bold">JAD</h1>
          </Link>
          <ul className="flex flex-row text-zinc-800">
            <li className="py-2 px-4 font-medium hover:text-indigo-500 cursor-pointer">
              <Link to="#home" smooth={true} offset={5} duration={700}>
                Home
              </Link>
            </li>
            <li className="py-2 px-4 font-medium hover:text-indigo-500 cursor-pointer">
              <Link to="#skills" smooth={true} offset={5} duration={700}>
                Skills
              </Link>
            </li>
            <li className="py-2 px-4 font-medium hover:text-indigo-500 cursor-pointer">
              <Link to="#projects" smooth={true} offset={5} duration={700}>
                Projects
              </Link>
            </li>
            <li className="py-2 px-4 font-medium hover:text-indigo-500 cursor-pointer">
              <Link to="#about" smooth={true} offset={5} duration={700}>
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
