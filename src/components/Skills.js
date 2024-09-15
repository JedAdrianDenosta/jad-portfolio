"use client";

import React from "react";
import Icon from "@mdi/react";
import {
  mdiFountainPenTip,
  mdiPencilRuler,
  mdiRulerSquare,
  mdiPlayBoxOutline,
  mdiCardSearchOutline,
  mdiTextAccount,
} from "@mdi/js";

const Skills = () => {
  return (
    <div className="w-full bg-zinc-50 text-zinc-800">
      <div className="max-w-5xl mx-auto w-full py-[120px]">
        {/* container */}
        <div className=" space-y-16">
          {/* title */}
          <h1 className=" text-3xl font-bold text-indigo-700">
            Skills and Tools
          </h1>
          {/* card-container */}
          <div className="space-y-8">
            {/* first */}
            <div className="flex flex-row w-full space-x-8">
              {/* card */}
              <div className="bg-white border border-zinc-200 rounded-2xl px-8 py-6 drop-shadow-sm w-full flex items-center space-x-10">
                <div className="flex flex-col items-center justify-center space-y-3 w-48">
                  <div className="text-3xl text-sky-600">
                    <Icon
                      path={mdiFountainPenTip}
                      size={1.75}
                      className="text-3xl"
                    />
                  </div>
                  <div className="text-2xl font-medium">UI Design</div>
                </div>
                <p className="text-zinc-800 w-full text-base">
                  Experienced in crafting intuitive and visually engaging UI
                  designs to enhance user experiences.
                </p>
              </div>
              {/* card */}
              <div className="bg-white border border-zinc-200 rounded-2xl px-8 py-6 drop-shadow-sm w-full flex items-center space-x-10">
                <div className="flex flex-col items-center justify-center space-y-3 w-48">
                  <Icon
                    path={mdiPencilRuler}
                    size={1.75}
                    className="text-sky-600"
                  />

                  <div className="text-2xl font-medium">UX Design</div>
                </div>
                <p className="text-zinc-800 w-full text-base">
                  Passionate about creating intuitive and user-centric
                  experiences through UX design.
                </p>
              </div>
            </div>
            {/* second */}
            <div className="flex flex-row w-full space-x-8">
              {/* card */}
              <div className="bg-white border border-zinc-200 rounded-2xl px-8 py-6 drop-shadow-sm w-full flex items-center space-x-10">
                <div className="flex flex-col items-center justify-center space-y-3 w-48">
                  <div className="text-3xl text-sky-600">
                    <Icon
                      path={mdiRulerSquare}
                      size={1.75}
                      className="text-3xl"
                    />
                  </div>
                  <div className="text-2xl font-medium">Wireframe</div>
                </div>
                <p className="text-zinc-800 w-full text-base">
                  Proficient in translating ideas into clear and effective
                  wireframes to drive seamless user interactions.
                </p>
              </div>
              {/* card */}
              <div className="bg-white border border-zinc-200 rounded-2xl px-8 py-6 drop-shadow-sm w-full flex items-center space-x-10">
                <div className="flex flex-col items-center justify-center space-y-3 w-48">
                  <Icon
                    path={mdiPlayBoxOutline}
                    size={1.75}
                    className="text-sky-600"
                  />

                  <div className="text-2xl font-medium">Prototype</div>
                </div>
                <p className="text-zinc-800 w-full text-base">
                  Proficient in rapid prototyping to bring ideas to life and
                  validate designs and products.
                </p>
              </div>
            </div>
            {/* third */}
            <div className="flex flex-row w-full space-x-8">
              {/* card */}
              <div className="bg-white border border-zinc-200 rounded-2xl px-8 py-6 drop-shadow-sm w-full flex items-center space-x-10">
                <div className="flex flex-col items-center justify-center space-y-3 w-48">
                  <div className="text-3xl text-sky-600">
                    <Icon
                      path={mdiCardSearchOutline}
                      size={1.75}
                      className="text-3xl"
                    />
                  </div>
                  <div className="text-2xl font-medium">UXR</div>
                </div>
                <p className="text-zinc-800 w-full text-base">
                  Conducting thorough User Research to understand user needs and
                  preferences.
                </p>
              </div>
              {/* card */}
              <div className="bg-white border border-zinc-200 rounded-2xl px-8 py-6 drop-shadow-sm w-full flex items-center space-x-10">
                <div className="flex flex-col items-center justify-center space-y-3 w-48">
                  <Icon
                    path={mdiTextAccount}
                    size={1.75}
                    className="text-sky-600"
                  />

                  <div className="text-2xl font-medium">IA</div>
                </div>
                <p className="text-zinc-800 w-full text-base">
                  Proficient in crafting effective information architectures for
                  seamless navigation and content organization.
                </p>
              </div>
            </div>
            {/* fourth */}
            <div className="flex flex-row w-full space-x-8">
              {/* card */}
              <div className="bg-white border border-zinc-200 rounded-2xl px-8 py-6 drop-shadow-sm w-full flex items-center space-x-10">
                <div className="flex flex-col items-center justify-center space-y-3 w-48">
                  <div className="text-3xl text-sky-600">
                    <Icon
                      path={mdiCardSearchOutline}
                      size={1.75}
                      className="text-3xl"
                    />
                  </div>
                  <div className="text-2xl font-medium">Figma</div>
                </div>
                <p className="text-zinc-800 w-full text-base">
                  Proficient in using Figma to design and prototype captivating
                  user interfaces.
                </p>
              </div>
              {/* card */}
              <div className="bg-white border border-zinc-200 rounded-2xl px-8 py-6 drop-shadow-sm w-full flex items-center space-x-10">
                <div className="flex flex-col items-center justify-center space-y-3 w-48">
                  <Icon
                    path={mdiTextAccount}
                    size={1.75}
                    className="text-sky-600"
                  />

                  <div className="text-2xl font-medium">Adobe Xd</div>
                </div>
                <p className="text-zinc-800 w-full text-base">
                  Experienced in Adobe XD for crafting seamless and visually
                  appealing user experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
