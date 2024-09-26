"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <div
      id="#projects"
      className="right-0 left-0 w-full bg-white text-zinc-800 relative overflow-clip"
    >
      {/* Indigo Blur */}
      <div className="absolute left-[90px] bottom-[159px]">
        <div className="w-[400px] h-[400px] bg-indigo-500 blur-[800px]"></div>
      </div>
      <div className="absolute right-[90px] top-[90px]">
        <div className="w-[240px] h-[240px] bg-indigo-500 blur-[400px]"></div>
      </div>
      <div className="max-w-5xl mx-auto w-full py-8 px-6 relative sm:py-20 sm:px-10 md:px-14 md:py-20 lg:px-16 lg:py-32 xl:px-0 xl:py-[120px] ">
        {/* main-container */}
        <div className=" space-y-10 lg:space-y-16">
          {/* title */}
          <h1 className=" text-3xl font-bold text-indigo-700 lg:text-4xl">
            Projects
          </h1>
          {/* card-container */}
          <div className=" space-y-8 lg:space-y-12">
            {/* hospilink */}
            <div className=" border-zinc-200 border bg-white px-6 py-8 rounded-lg flex flex-col sm:px-16 sm:py-10 lg:px-16 lg:py-14 xl:items-center xl:px-20 xl:py-14 lg:rounded-3xl ">
              {/* container */}
              <div className=" flex flex-col gap-y-7 lg:flex-row lg:gap-x-14">
                {/* texts and button */}
                <div className=" space-y-6 xl:space-y-4 xl:w-7/12">
                  <div className=" space-y-4">
                    <h1 className=" text-2xl font-bold text-zinc-800 sm:text-3xl lg:text-4xl xl:text-5xl">
                      Hospilink
                    </h1>
                    <p className=" text-sm xl:text-base font-light text-zinc-600 ">
                      HospiLink is a comprehensive and dynamic platform that
                      serves as the vital bridge connecting hospitals and
                      Emergency Medical Technicians (EMTs), ensuring the
                      provision of unparalleled, high-quality, and swift
                      services to patients in need.
                    </p>
                  </div>

                  <div className=" xl:pt-4 w-full">
                    <Link
                      href="/hospilink"
                      className=" text-sm flex justify-center gap-8 px-4 py-2 w-full bg-indigo-500 text-white border rounded-lg hover:opacity-75 lg:w-fit lg:px-7 lg:py-4"
                    >
                      {" "}
                      View case study
                    </Link>
                  </div>
                </div>
                {/* image */}
                <div className="xl:w-8/12 flex justify-center items-center hover:transition duration-150 ease-in-out">
                  {" "}
                  <Image
                    layout="rsponsive"
                    src="/p-hospilink.png"
                    alt="Jeds hero image"
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>
            </div>
            {/* traack */}
            <div className=" border-zinc-200 border bg-white px-6 py-8 rounded-lg flex flex-col sm:px-16 sm:py-10 lg:px-16 lg:py-14 xl:items-center xl:px-20 xl:py-14 xl:h-96 lg:rounded-3xl ">
              {/* container */}
              <div className=" flex flex-col gap-y-7 lg:flex-row lg:gap-x-14">
                {/* texts and button */}
                <div className=" space-y-6 xl:space-y-4 xl:w-7/12">
                  <div className=" space-y-4">
                    <h1 className=" text-2xl xl:text-5xl font-bold text-zinc-800 sm:text-3xl">
                      Traack
                    </h1>
                    <p className=" text-sm xl:text-base font-light text-zinc-600 ">
                      Traack is a time and attendance management system that
                      enables companies to record, monitor, and organize data
                      pertaining to their employees clock-in and clock-out
                      times.
                    </p>
                  </div>

                  <div className=" xl:pt-4 w-full">
                    <Link
                      href="/traack"
                      className=" text-sm flex justify-center gap-8 px-4 py-2 w-full xl:px-7 xl:py-4 bg-indigo-500 text-white border rounded-lg hover:opacity-75 lg:w-fit lg:px-7 lg:py-4"
                    >
                      {" "}
                      View case study
                    </Link>
                  </div>
                </div>
                {/* image */}
                <div className="xl:w-8/12 flex justify-center items-center hover:transition duration-150 ease-in-out">
                  {" "}
                  <Image
                    layout="rsponsive"
                    src="/p-traack.png"
                    alt="Jeds hero image"
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>
            </div>
            {/* Coaching Gig */}
            <div className=" border-zinc-200 border bg-white px-6 py-8 rounded-lg flex flex-col sm:px-16 sm:py-10 lg:px-16 lg:py-14 xl:items-center xl:px-20 xl:py-14 xl:h-96 lg:rounded-3xl ">
              {/* container */}
              <div className=" flex flex-col gap-y-7 lg:flex-row lg:gap-x-14">
                {/* texts and button */}
                <div className=" space-y-6 xl:space-y-4 xl:w-7/12">
                  <div className=" space-y-4">
                    <h1 className=" text-2xl xl:text-5xl font-bold text-zinc-800 sm:text-3xl">
                      Coaching Gig
                    </h1>
                    <p className=" text-sm xl:text-base font-light text-zinc-600 ">
                      Coaching Gig is a sports video platform that allows New
                      Zealand coaches and teachers to efficiently teach and
                      train their student in the respective aspects of sports
                      specifically Rugby.
                    </p>
                  </div>

                  <div className=" xl:pt-4 w-full">
                    <Link
                      href="/coaching-gig"
                      className=" text-sm flex justify-center gap-8 px-4 py-2 w-full xl:px-7 xl:py-4 bg-indigo-500 text-white border rounded-lg hover:opacity-75 lg:w-fit lg:px-7 lg:py-4"
                    >
                      {" "}
                      View case study
                    </Link>
                  </div>
                </div>
                {/* image */}
                <div className="xl:w-8/12 flex justify-center items-center hover:transition duration-150 ease-in-out">
                  {" "}
                  <Image
                    layout="rsponsive"
                    src="/p-coach.svg"
                    alt="Jeds hero image"
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
