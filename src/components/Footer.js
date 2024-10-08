"use client";
import React from "react";
import { Link } from "react-scroll";
import { AiFillGithub as GitHub } from "react-icons/ai";
import { AiFillLinkedin as LinkedIn } from "react-icons/ai";
import { AiFillFacebook as Facebook } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <footer className="bg-indigo-500 mx-auto w-full">
        <div className="max-w-7xl mx-auto w-full py-20 space-y-10 text-white">
          <div className="text-xl font-bold tracking-wide flex justify-center cursor-pointer">
            <Link to="#home" smooth={true} offset={5} duration={700}>
              JAD
            </Link>
          </div>

          <div className="text-2xl flex justify-center gap-x-5">
            <a href="https://www.facebook.com/jedadrian.denosta">
              <Facebook />
            </a>
            <a href="https://github.com/JedAdrianDenosta">
              <GitHub />
            </a>
            <a href="https://www.linkedin.com/in/jed-adrian-denosta-6b409720a/">
              <LinkedIn />
            </a>
          </div>
          <span className="flex justify-center">
            &#169; 2024 Jed Adrian Denosta. All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
