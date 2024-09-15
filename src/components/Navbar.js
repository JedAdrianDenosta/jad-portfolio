"use client";

import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      {/* Nav Bar */}
      <nav className="max-w-5xl mx-auto w-full py-6">
        <div className="flex flex-row justify-between items-center">
          <Link href="/" className="p-2" aria-label="Home">
            <h1 className="text-sky-500 text-2xl font-bold">JAD</h1>
          </Link>
          <ul className="flex flex-row text-zinc-800">
            <li className="py-2 px-4 font-medium hover:text-indigo-500">
              <Link href="#home">Home</Link>
            </li>
            <li className="py-2 px-4 font-medium hover:text-indigo-500">
              <Link href="#skills">Skills</Link>
            </li>
            <li className="py-2 px-4 font-medium hover:text-indigo-500">
              <Link href="#projects">Projects</Link>
            </li>
            <li className="py-2 px-4 font-medium hover:text-indigo-500">
              <Link href="#about">About</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
