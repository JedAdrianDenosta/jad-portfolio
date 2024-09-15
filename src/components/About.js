"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { AiFillGithub as GitHub } from "react-icons/ai";
import { AiFillLinkedin as LinkedIn } from "react-icons/ai";
import { AiFillFacebook as Facebook } from "react-icons/ai";

const About = () => {
  return (
    <div className="w-full bg-zinc-50 text-zinc-800">
      <div className="max-w-5xl mx-auto w-full py-[120px]">
        {/* container */}
        <div className=" space-y-16">
          {/* title */}
          <h1 className=" text-3xl font-bold text-indigo-700">About</h1>
          <div className="max-w-5xl mx-auto w-full">
            <div className="flex flex-col lg:flex-row justify-center gap-10">
              {/* left container */}
              <div className="bg-white rounded-lg shadow-2xl max-w-sm h-full space-y-5 p-10">
                <span className="flex justify-center">
                  <Image
                    className="rounded"
                    alt="Jed's profile image"
                    src={"/jed.jpg"}
                    width={350}
                    height={350}
                  />
                </span>

                <h1 className="text-lg font-extrabold text-indigo-400">
                  Jed Adrian Denosta
                </h1>
                <p className="text-sm text-gray-500">
                  UI/UX Designer | Frontend Developer
                </p>
                <p className="text-sm font-normal text-gray-600">
                  In Jed{"'"}s view, a design must address a concern, encourage
                  users, and illuminate in a pleasant, trustworthy, and
                  human-centered way.
                </p>
                <p className="text-base font-medium text-gray-700">
                  Make contact with him! Below, you{"'"}ll find his contact
                  information.
                </p>
                <p className="text-sm font-normal text-gray-600">
                  Email: denostajedadrian@gmail.com
                </p>
                <div className="text-2xl flex gap-x-5">
                  <Link href="https://www.facebook.com/jedadrian.denosta">
                    <Facebook />
                  </Link>
                  <Link href="https://github.com/JedAdrianDenosta">
                    <GitHub />
                  </Link>
                  <Link href="https://www.linkedin.com/in/jed-adrian-denosta-6b409720a/">
                    <LinkedIn />
                  </Link>
                </div>
              </div>
              {/* right container */}
              <div className="bg-white rounded-md shadow-2xl shadow-indigo-500/10 w-full h-full space-y-8 p-10 lg:col-span-2">
                <h1 className="text-indigo-500 text-2xl font-extrabold">
                  My Story
                </h1>
                <div className="text-gray-600 space-y-6">
                  <p>
                    Mabuhay! ✨ I am Jed Adrian Denosta, 23 years of age, and I
                    reside in Capiz, Philippines.
                  </p>
                  <p>
                    I am a 🧑‍💻 senior student at West Visayas State University
                    pursuing a Bachelor of Science in Computer Science
                    specializing in Artificial Intelligence. My hobbies are ✏️
                    UX and UI Design, 📷 Photography, and 🏸 Badminton.
                  </p>
                  <p>
                    Technology has been a massive part of my life; it is where
                    my interest thrives, mainly in 🏥 medical care, and I aim to
                    assist as it benefits individuals even with the slight help
                    by saving lives. Artificial Intelligence makes society
                    evolve as it seeks to solve concerns much faster and more
                    accurately.
                  </p>
                  <p>
                    Poor health services in my country really push me to work in
                    healthcare technology to help Filipinos and people
                    worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
