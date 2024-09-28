"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { AiFillGithub as GitHub } from "react-icons/ai";
import { AiFillLinkedin as LinkedIn } from "react-icons/ai";
import { AiFillFacebook as Facebook } from "react-icons/ai";

const About = () => {
  return (
    <div id="#about" className="w-full bg-zinc-50 text-zinc-800">
      <div className="max-w-5xl mx-auto w-full py-8 px-6 sm:py-20 sm:px-10 md:px-14 md:py-20 lg:px-16 lg:py-32 xl:px-0 xl:py-[120px]">
        {/* container */}
        <div className=" space-y-8 sm:space-y-10 lg:space-y-16">
          {/* title */}
          <h1 className=" text-2xl font-bold text-indigo-700 sm:text-3xl lg:text-4xl">
            About
          </h1>
          <div className="max-w-5xl mx-auto w-full">
            <div className="flex flex-col lg:flex-row justify-center gap-10">
              {/* left container */}
              <div className="bg-white rounded-lg hover:shadow-2xl hover:shadow-indigo-500/10 xl:max-w-sm h-full space-y-5 p-8 sm:px-28 sm:py-20 lg:px-10 lg:py-12">
                <span className="flex justify-center">
                  <Image
                    className="rounded"
                    alt="Jed's profile image"
                    src={"/jed.jpg"}
                    width={350}
                    height={350}
                  />
                </span>

                <h1 className="text-lg font-bold text-indigo-400">
                  Jed Adrian Denosta
                </h1>
                <p className="text-sm text-gray-500">UI/UX Designer</p>
                <p className="text-sm font-normal text-gray-600">
                  In Jed&apos;s view, a design must address a concern, encourage
                  users, and illuminate in a pleasant, trustworthy, and
                  human-centered way.
                </p>
                <p className="text-base font-medium text-gray-700">
                  Make contact with him! Below, you&apos;ll find his contact
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
              <div className="bg-white rounded-md hover:shadow-2xl hover:shadow-indigo-500/10 w-full h-full space-y-8 p-8 sm:px-28 sm:py-20 lg:col-span-2 lg:px-10 lg:py-12">
                <h1 className="text-indigo-500 text-xl font-bold">My Story</h1>
                <div className="text-gray-600 space-y-6">
                  <p>
                    🖋️ I graduated Magna Cum Laude from{" "}
                    <b>West Visayas State University</b> with a degree in
                    Computer Science, majoring in Artificial Intelligence. As a
                    UI/UX Designer by profession and passion, I focus on
                    transforming problems into effective design solutions.
                  </p>
                  <p>
                    🎨 For me, design is essential to any successful project and
                    plays a critical role in shaping companies. Designers serve
                    as a bridge between business goals and technical execution,
                    fostering collaboration through thoughtful and strategic
                    thinking.
                  </p>
                  <p>
                    🔥 My passion for UI/UX design began during my first
                    hackathon, where I was inspired by industry leaders who
                    emphasized the importance of design. This led to the
                    creation of my case study, HospiLink, which allowed me to
                    apply design thinking to real-world problems.
                  </p>
                  {/* <p>
                    🏥 HospiLink became my most successful project, recognized
                    as the Best Thesis for Computer Science by WVSU’s Computer
                    Science Department. It was also presented to university
                    leadership and earned a spot in the Top 10 of the Philippine
                    Startup Challenge-7.
                  </p> */}
                  <p>
                    ✨ Beyond work, I’m passionate about badminton and
                    photography. I also dabble in front-end development,
                    primarily static sites, using Next.js and TailwindCSS.
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
