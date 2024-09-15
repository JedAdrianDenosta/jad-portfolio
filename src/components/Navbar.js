"use client";

import React from "react";

const Navbar = () => {
  return (
    <>
      {/* Nav Bar */}
      <nav className="max-w-5xl mx-auto w-full py-6">
        <div className="flex flex-row justify-between items-center">
          <a href="/" className="p-2" aria-label="Home">
            <h1 className="text-sky-500 text-2xl font-bold">JAD</h1>
          </a>
          <ul className="flex flex-row text-zinc-800">
            <li className="py-2 px-4 font-medium hover:text-indigo-500">
              <a href="#home">Home</a>
            </li>
            <li className="py-2 px-4 font-medium hover:text-indigo-500">
              <a href="#skills">Skills</a>
            </li>
            <li className="py-2 px-4 font-medium hover:text-indigo-500">
              <a href="#projects">Projects</a>
            </li>
            <li className="py-2 px-4 font-medium hover:text-indigo-500">
              <a href="#about">About</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
