"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <div className=" right-0 left-0 w-full bg-white text-zinc-800">
      <div className="max-w-5xl mx-auto w-full py-[120px]">
        {/* main-container */}
        <div className=" space-y-16">
          {/* title */}
          <h1 className=" text-4xl font-bold text-indigo-700">Projects</h1>
          {/* card-container */}
          <div className=" space-y-12">
            {/* hospilink */}
            <div className=" border-zinc-200 border bg-white px-20 py-14 h-96 rounded-3xl flex items-center ">
              {/* container */}
              <div className=" flex gap-x-14">
                {/* texts and button */}
                <div className="space-y-4 w-7/12">
                  <h1 className=" text-5xl font-bold text-zinc-800">
                    Hospilink
                  </h1>
                  <p className="text-base font-light text-zinc-600 ">
                    HospiLink is a comprehensive and dynamic platform that
                    serves as the vital bridge connecting hospitals and
                    Emergency Medical Technicians (EMTs), ensuring the provision
                    of unparalleled, high-quality, and swift services to
                    patients in need.
                  </p>
                  <div className=" pt-4">
                    <Link
                      href="/hospilink"
                      className="px-7 py-4 bg-indigo-500 text-white border rounded-lg hover:opacity-75"
                    >
                      {" "}
                      View case study
                    </Link>
                  </div>
                </div>
                {/* image */}
                <div className="w-8/12 h-full bg-zinc-500 bg-center hover:transition duration-150 ease-in-out">
                  {" "}
                  <Image
                    layout="rsponsive"
                    src="/p-hospilink.png"
                    alt="Jed's hero image"
                    width={1000}
                    height={100}
                  />
                </div>
              </div>
            </div>
            {/* traack */}
            <div className=" border-zinc-200 border bg-white px-20 py-14 h-96 rounded-3xl flex items-center">
              {/* container */}
              <div className=" flex gap-x-14">
                {/* texts and button */}
                <div className="space-y-4 w-7/12">
                  <h1 className=" text-5xl font-bold text-zinc-800">Traack</h1>
                  <p className="text-base font-light text-zinc-600 ">
                    Traack is a time and attendance management system that
                    enables companies to record, monitor, and organize data
                    pertaining to their employees' clock-in and clock-out times.
                  </p>
                  <button className="px-7 py-4 bg-indigo-500 text-white border rounded-lg hover:opacity-75">
                    View case study
                  </button>
                </div>
                {/* image */}
                <div className="w-8/12 h-full bg-center hover:transition duration-150 ease-in-out">
                  {" "}
                  <Image
                    layout="rsponsive"
                    src="/p-track.svg"
                    alt="Jed's hero image"
                    width={1000}
                    height={100}
                  />
                </div>
              </div>
            </div>
            {/* Coaching Gig */}
            <div className=" border-zinc-200 border bg-white px-20 py-14 h-96 rounded-3xl flex items-center">
              {/* container */}
              <div className=" flex gap-x-14">
                {/* texts and button */}
                <div className="space-y-4 w-7/12">
                  <h1 className=" text-5xl font-bold text-zinc-800">
                    Coaching Gig
                  </h1>
                  <p className="text-base font-light text-zinc-600 ">
                    Coaching Gig is a sports video platform that allows New
                    Zealand coaches and teachers to efficiently teach and train
                    their student in the respective aspects of sports
                    specifically Rugby.
                  </p>
                  <button className="px-7 py-4 bg-indigo-500 text-white border rounded-lg hover:opacity-75">
                    View case study
                  </button>
                </div>
                {/* image */}
                <div className="w-8/12 h-full bg-center hover:transition duration-150 ease-in-out">
                  {" "}
                  <Image
                    layout="rsponsive"
                    src="/p-coach.svg"
                    alt="Jed's hero image"
                    width={1000}
                    height={100}
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
