import React from "react";
import Footer from "@/components/Footer";

import Icon from "@mdi/react";
import { mdiArrowLeft } from "@mdi/js";
import Link from "next/link";
import Image from "next/image";

const page = () => {
  return (
    <>
      <div className=" p-6 pb-0 sm:px-10 lg:px-20 xl:px-0 max-w-5xl mx-auto">
        <a href="/">
          <h1 className="text-sky-500 text-2xl font-bold">JAD</h1>
        </a>
      </div>

      <Link
        href="/"
        className=" sm:px-10 lg:px-20 xl:px-0 flex justify-start items-center space-x-2 tezt-zinc-700 hover:text-zinc-500 mx-auto max-w-5xl xl:py-10 p-6 pt-10"
      >
        <Icon path={mdiArrowLeft} size={1} />
        <p>Go back to main page</p>
      </Link>
      {/* intro */}
      <section className=" pt-6 pb-8 px-6 sm:px-10 lg:px-20 text-zinc-800 flex justify-start xl:pb-20 xl:pt-10">
        <div className="flex flex-col justify-center gap-y-10 max-w-5xl mx-auto w-full bg-white">
          <div className=" max-w-5xl mx-auto w-full space-y-8 xl:space-y-20">
            {/* header */}
            <div className=" space-y-3 xl:space-y-6">
              <h1 className="text-5xl font-bold tracking-tight text-sky-600">
                Coaching Gig
              </h1>
              <div className=" text-zinc-700">
                <h3 className=" text-xl xl:text-2xl font-medium">
                  UI/UX Design / Research / Branding / Wireframing / Prototyping
                </h3>
                <p className=" text-base xl:text-2xl">2023</p>
              </div>
            </div>
            {/* content */}
            <div className="flex flex-col space-y-10 xl:flex-row xl:gap-x-20">
              {/* list-col */}
              <div className=" space-y-6 xl:space-y-10 xl:w-3/5">
                <div className=" text-zinc-800 xl:space-y-2">
                  <h1 className=" text-xl xl:text-2xl font-medium">
                    Background
                  </h1>
                  <p className=" leading-7 text-base">
                    In recent years, video learning applications have gained
                    popularity, providing users with access to videos, community
                    interactions, and instant learning experiences, particularly
                    in the realm of physical education activities. My focus was
                    on evaluating the user experience of Intasport, now
                    rebranded as Coaching Gig, as many users have encountered
                    challenges with the onboarding process and the app&apos;s
                    functionalities. Through this case study, I aimed to analyze
                    and address these issues to enhance the overall user
                    experience.
                  </p>
                </div>
                <div className=" text-zinc-800 xl:space-y-2">
                  <h1 className=" text-xl xl:text-2xl font-medium">Problem</h1>
                  <p className=" leading-7 text-base">
                    Video applications employ various approaches to help users
                    quickly grasp their features and content. However, there are
                    cases where users may feel discouraged due to an unappealing
                    interface or a poor user experience. This can lead them to
                    seek out alternative applications that are more intuitive
                    and user-friendly.
                  </p>
                </div>
                <div className=" text-zinc-800 xl:space-y-2">
                  <h1 className=" text-xl xl:text-2xl font-medium">Goals</h1>
                  <p className=" leading-7 text-base">
                    Redesigning a mobile application for coaches and teachers
                    focuses on creating a seamless and efficient user
                    experience. The goal is to provide a better overall
                    experience by streamlining the app&apos;s interface, making
                    it intuitive and easy to navigate. Additionally, integrating
                    a comprehensive review system ensures that users can provide
                    valuable feedback, contributing to continuous improvement
                    and a more refined application.
                  </p>
                </div>
                <div className=" text-zinc-800 xl:space-y-2">
                  <h1 className=" text-xl xl:text-2xl font-medium">
                    My Impact
                  </h1>
                  <p>
                    For this project, I first validated the need for the product
                    I envisioned and then leveraged data from my research to
                    design an end-to-end solution.
                  </p>
                </div>
              </div>
              {/* image */}
              <div className=" xl:w-2/5 h-fit">
                <Image
                  layout="responsive"
                  src="/cg-hero.svg"
                  alt="Jed's hero image"
                  width={1000}
                  height={100}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* research */}
      <section className=" text-zinc-800 flex justify-start">
        <div className="flex flex-col justify-center gap-y-10 mx-auto w-full bg-zinc-50">
          <div className=" space-y-8 px-6 sm:px-10 lg:px-20 sm:py-12 py-8 xl:px-0 xl:py-0 xl:pb-20 xl:pt-20 max-w-5xl mx-auto w-full">
            {/* header */}
            <h1 className=" text-3xl xl:text-4xl font-semibold text-blue-600">
              Research
            </h1>
            {/* body */}
            <div className=" space-y-10 xl:space-x-0 xl:space-y-20">
              {/* goals and methodologies */}
              <div className=" flex flex-col xl:gap-x-24 space-y-8 xl:space-y-0 xl:flex-row">
                {/* goals */}
                <div className=" space-y-2 xl:w-1/2">
                  <h1 className=" text-xl xl:text-2xl font-medium">Goals</h1>
                  <div className=" space-y-4">
                    <p className=" text-base xl:text-lg leading-7">
                      Below are the areas I’d like to explore during the user
                      research. I want to understand:
                    </p>
                    <ul className=" list-disc list-outside pl-4 leading-7">
                      <li>
                        What are the user’s pain points in the onboarding
                        process
                      </li>
                      <li>
                        What could be the improvements concerning the user flow
                        that allows users to have easy acccess
                      </li>
                      <li>
                        Creating a community based functionality allow users to
                        share their thoughts of the video
                      </li>
                    </ul>
                  </div>
                </div>
                {/* methods */}
                <div className=" space-y-2 xl:w-1/2">
                  <h1 className=" text-xl xl:text-2xl font-medium">
                    Methodologies
                  </h1>
                  <div className=" space-y-4">
                    <p className=" text-base xl:text-lg leading-7">
                      For my current project, I&apos;m doing secondary research
                      to improve the user interface and experience of a learning
                      and community-based app. I&apos;m examining similar
                      systems and interviewing key users, especially coaches
                      from New Zealand, who want to increase the app&apos;s
                      impact. By talking to these users, I&apos;m validating my
                      assumptions about their pain points and frustrations,
                      making sure the app&apos;s design meets their needs and
                      enhances their experience.
                    </p>
                  </div>
                </div>
              </div>
              {/* competitive research */}
              <div className=" space-y-6 xl:space-y-4">
                {/* header */}
                <h1 className=" text-2xl xl:text-3xl font-semibold text-blue-500">
                  Competitive Research
                </h1>
                <div className=" flex flex-col space-y-4 xl:space-y-0 xl:flex-row xl:gap-x-24">
                  {/* left para */}
                  <div className=" space-y-2 xl:w-1/2">
                    <p className=" text-base xl:text-lg leading-7">
                      In this phase, I looked into existing systems like Udemy
                      and vocabulary apps that focus on the learning process and
                      user experience. These apps are known for their smooth UX,
                      guiding users through step-by-step learning. I found that
                      gamification is a key feature that sets them apart in the
                      market. They also use simple color schemes and clear text,
                      making the interface easy to read and user-friendly.
                    </p>
                  </div>
                  {/* left para */}
                  <div className=" space-y-2 xl:w-1/2">
                    <p className=" text-base xl:text-lg leading-7">
                      To achieve long-term success for my users, I realized that
                      redesigning the product to address current UI and UX
                      issues is crucial. By concentrating on these improvements,
                      the application can greatly enhance the learning
                      experience and foster stronger user loyalty.
                    </p>
                  </div>
                </div>
              </div>
              {/* user interviews */}
              <div className=" space-y-8 xl:space-y-10">
                <div className=" space-y-10">
                  {" "}
                  {/* header */}
                  <h1 className=" text-2xl xl:text-3xl font-semibold text-blue-500">
                    User Interviews
                  </h1>
                  {/* interview inputs */}
                  <div className="flex flex-col space-y-4 xl:space-y-0">
                    {/* row one */}
                    <div className=" flex flex-col xl:flex-row xl:space-y-0 justify-center space-y-4 xl:space-x-6 xl:py-4">
                      <div className=" flex items-center justify-center xl:w-72 h-40 bg-cyan-50 border border-slate-200 px-6 py-3 text-sm rounded-2xl">
                        <p className="text-center">
                          User interface is not well executed that confuses and
                          giving hesitations to use the app.
                        </p>
                      </div>
                      <div className=" flex items-center justify-center xl:w-72 h-40 bg-cyan-50 border border-slate-200 px-6 py-3 text-sm rounded-2xl">
                        <p className="text-center">
                          No access to a page where users can see their shared
                          videos, where other users can see it
                        </p>
                      </div>
                      <div className=" flex items-center justify-center xl:w-72 h-40 bg-cyan-50 border border-slate-200 px-6 py-3 text-sm rounded-2xl">
                        <p className="text-center">
                          Design is quite oudated and does not competes to
                          current existing applications
                        </p>
                      </div>
                    </div>
                    {/* row two */}
                    {/* <div className=" flex flex-col xl:flex-row xl:space-y-0 justify-center space-y-4 xl:space-x-6 xl:py-4">
                      <div className=" flex items-center xl:w-72 h-40 bg-cyan-50 border border-slate-200 px-6 py-3 text-sm rounded-2xl">
                        <p>
                          Hoping that there would be alternatives of signing in
                          and out their attendance without interaction with
                          physical objects.
                        </p>
                      </div>
                    </div> */}
                  </div>
                </div>

                {/* research synopsis and background */}
                <div className=" space-y-8">
                  {/* synopsis */}
                  <div className=" space-y-2 w-full">
                    <h1 className=" text-xl xl:text-2xl font-medium">
                      Research Synopsis
                    </h1>
                    <div className=" space-y-4">
                      <p className=" text-base xl:text-lg leading-7">
                        To thoroughly understand the experiences of coaches,
                        teachers, and students from New Zealand, I interviewed
                        one of the coaches who had been using the app. I was
                        surprised to learn that they struggled with using and
                        navigating the application, often leading them to switch
                        to more straightforward alternatives. These findings
                        motivated me to develop a solution that addresses these
                        issues, ensuring long-term success for the users.
                      </p>
                    </div>
                  </div>
                  {/* background */}
                  <div className=" space-y-2 w-full">
                    <h1 className=" text-xl xl:text-2xl font-medium">
                      Background
                    </h1>
                    <div className=" space-y-4">
                      <p className=" text-base xl:text-lg leading-7">
                        The insights gained from user interviews clarified the
                        project&apos;s direction and emphasized a key
                        requirement that could be met with a primary product
                        feature. One major issue was the outdated user
                        interface, which hindered usability. Additionally, there
                        was a noticeable absence of features like a feed for
                        users to share their thoughts on specific videos. This
                        kind of community-based functionality would greatly
                        benefit coaches and teachers in New Zealand schools,
                        fostering a more connected and interactive experience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* define */}
      <section className=" text-zinc-800 flex justify-start px-6 py-8 sm:px-10 sm:py-12 lg:px-20">
        <div className="flex flex-col justify-center gap-y-10 max-w-5x mx-auto w-full bg-white">
          <div className=" space-y-8 bg-white xl:pb-20 xl:pt-20 max-w-5xl mx-auto w-full">
            {/* header */}
            <h1 className=" text-3xl xl:text-4xl font-semibold text-blue-600">
              Define
            </h1>
            {/* body */}
            <div className=" space-y-10">
              {/* competitive research */}
              <div className=" space-y-10 xl:space-y-20">
                {/* user persona */}
                <div className=" space-y-4">
                  {/* header */}
                  <h1 className=" text-2xl xl:text-3xl font-semibold text-blue-500">
                    User Persona
                  </h1>
                  <p className=" max-w-3xl">
                    After I compiled the outtakes from the research into the
                    affinity map, I was able to create a persona that represents
                    the main users group.
                  </p>
                  {/* user persona chart */}
                  <div className=" space-y-4">
                    <Image
                      layout="responsive"
                      src="/up-brandon.svg"
                      alt="Jed's hero image"
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
                {/* user scenario */}
                <div>
                  <div className=" space-y-4">
                    {/* header */}
                    <h1 className=" text-2xl xl:text-3xl font-semibold text-blue-500">
                      User Scenario
                    </h1>
                    <div className="space-y-8">
                      <div className=" flex flex-col gap-x-14 space-y-4">
                        <p className=" leading-7 text-base xl:text-lg">
                          After creating my user persona, I decided to envision
                          a specific scenario in which Brandon could benefit
                          from the product. This use case emerged from a blend
                          of insights gathered from user interviews, a
                          competitive analysis that uncovered a market gap, and
                          a persona with whom I felt a strong connection. These
                          elements together helped me craft a scenario that
                          accurately represents Brandon&apos;s potential
                          interaction with the product.
                        </p>
                        <p className=" leading-7 text-base xl:text-lg">
                          The MVP includes an updated user interface based on
                          thorough research of video user flows. It also
                          introduces a community-based feed feature, allowing
                          coaches and teachers to view and share videos with one
                          another.
                        </p>
                      </div>
                      <Image
                        layout="responsive"
                        src="/us-cg.svg"
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
      </section>
      {/* ideation */}
      <section className=" text-zinc-800 flex justify-start ">
        <div className="flex flex-col justify-center gap-y-10 w-full bg-zinc-50">
          <div className=" space-y-8 px-6 sm:px-10 lg:px-20 sm:py-12 py-8 xl:px-0 xl:py-0 xl:pb-20 xl:pt-20 max-w-5xl mx-auto w-full">
            {/* header */}
            <h1 className=" text-3xl xl:text-4xl font-semibold text-blue-600">
              Ideation
            </h1>
            {/* body */}
            <div className=" space-y-20">
              {/* feature prioritization */}
              <div className=" space-y-8">
                <div className=" space-y-2">
                  {/* header */}
                  <h1 className=" text-2xl xl:text-3xl font-semibold text-blue-500">
                    Feature Prioritization
                  </h1>
                  <p className=" text-base xl:text-lg leading-7">
                    After identifying the best solution for my users, I focused
                    on developing specific features. I aim to create a
                    user-friendly app that&apos;s easy to use on the go, with a
                    simple interface, streamlined onboarding, and quick access
                    to key functions. My research helped me distinguish between
                    features with minimal and substantial value, ensuring I
                    focus on what matters most.
                  </p>
                </div>
                <Image
                  layout="responsive"
                  src="/mp-cg.svg"
                  alt="Jed's hero image"
                  width={100}
                  height={100}
                />
              </div>
              {/* initial task flows */}
              <div className=" space-y-8">
                <div className=" space-y-4">
                  {/* header */}
                  <h1 className=" text-2xl xl:text-3xl font-semibold text-blue-500">
                    Initial Task Flows
                  </h1>
                  <div className=" space-y-14">
                    {/* instructions */}
                    <div className=" flex flex-col xl:flex-row space-y-4 xl:space-x-10">
                      <p className=" text-base xl:text-lg leading-7 w-full">
                        After having defined the features of the app, I created
                        flows for the main tasks.
                      </p>
                      <Image
                        layout="responsive"
                        src="/flow-legend.svg"
                        alt="Jed's hero image"
                        width={1000}
                        height={100}
                      />
                    </div>
                    {/* user flows */}
                    <div className=" text-base xl:text-lg space-y-6">
                      <p>
                        <b>User Flow:</b> As a Coach/Teacher, I want to explore
                        the different type of video categories and be able to
                        share my expertise to my students.
                      </p>
                      <Image
                        layout="responsive"
                        src="/uf-cg-1.svg"
                        alt="Jed's hero image"
                        width={1000}
                        height={100}
                      />
                    </div>
                    {/* refusal form */}
                    <div className=" text-base xl:text-lg space-y-6">
                      <p>
                        <b>Task:</b> File a refusal form to not get care by
                        Emergency Technicians
                      </p>
                      <Image
                        layout="responsive"
                        src="/uf-cg-2.svg"
                        alt="Jed's hero image"
                        width={1000}
                        height={100}
                      />
                    </div>
                    {/* availability */}
                    <div className=" text-base xl:text-lg space-y-6">
                      <p>
                        <b>Task:</b> File a refusal form to not get care by
                        Emergency Technicians
                      </p>
                      <Image
                        layout="responsive"
                        src="/uf-cg-3.svg"
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
      </section>
      {/* prototype and test */}
      <section className=" text-zinc-800 flex justify-start px-6 py-8 sm:px-10 sm:py-12 lg:px-20">
        <div className="flex flex-col justify-center gap-y-10 max-w-5x mx-auto w-full bg-white">
          <div className=" space-y-8 bg-white xl:pb-20 xl:pt-20 max-w-5xl mx-auto w-full">
            {/* hifi-prototype */}
            <div className=" space-y-8">
              {/* header */}
              <h1 className=" text-3xl xl:text-4xl font-semibold text-blue-600">
                Prototype and Test
              </h1>
              <div className=" space-y-4">
                <h2 className=" text-2xl xl:text-3xl font-semibold text-blue-500">
                  Hi-fi Prototype
                </h2>
                <p className=" max-w-3xl">
                  After I created the user flows for the users, I was able to
                  create a wireframe that represents the main user group.
                </p>
                <div className="px-5 py-3 bg-sky-50 text-zinc-800 text-sm font-medium rounded-lg hover:opacity-75 cursor-pointer w-fit">
                  <a href="https://bit.ly/4gLW15F">See full protype</a>
                </div>
              </div>

              <div className=" bg-zinc-50 py-10 xl:py-20 flex justify-center rounded-lg">
                <Image
                  layout="rsponsive"
                  src="/hi-fi-tk.svg"
                  alt="Jed's hero image"
                  width={800}
                  height={100}
                />
              </div>
            </div>
            {/* usability testing */}
            <div className=" space-y-8">
              {/* usability testing */}
              <div className=" space-y-4">
                <h1 className=" text-3xl font-semibold text-blue-500">
                  Usability Testing
                </h1>
                <p className=" max-w-3xl">
                  I tested the first version of the prototype with 5 users to
                  determine the necessary revisions to make the overall
                  experience more intuitive and pleasant. Here are some
                  outtakes.
                </p>
              </div>
              <div className=" flex flex-row space-x-4 w-full justify-center px-4 xl:px-32 xl:py-10">
                <Image
                  layout="responsive"
                  src="/ut-tk.svg"
                  alt="Jed's hero image"
                  width={100}
                  height={100}
                />
              </div>
              <div className=" space-y-4">
                <p className=" text-base xl:text-lg leading-7">
                  Main pain points that were discovered during the tests and
                  addressed in the iteration:
                </p>
                <ul className=" list-disc list-outside pl-4 leading-7">
                  <li>
                    Users had problems in the Attendance Page where it does not
                    indicate how to use the NFC feature especially for new users{" "}
                    <br />
                    <b>Fix:</b> added a check-in and check-out button that once
                    device is activated, button is active
                  </li>
                  <li>
                    Users may have issues regarding the attendance notifications
                    where a silent device may not notify users <br />
                    <b>Fix:</b> extending a default vibrate feature to notify
                    users
                  </li>
                </ul>
              </div>

              {/* <div className=" bg-zinc-50 py-20 flex justify-center rounded-lg">
                <Image
                  layout="rsponsive"
                  src="/hifi-hospilink.svg"
                  alt="Jed&apos;s hero image"
                  width={800}
                  height={100}
                />
              </div> */}
            </div>
          </div>
        </div>
      </section>
      {/* conclusion */}
      <section className=" text-zinc-800 flex justify-start ">
        <div className="flex flex-col justify-center gap-y-10 w-full bg-zinc-50">
          <div className=" space-y-8 px-6 sm:px-10 lg:px-20 sm:py-12 py-8 xl:px-0 xl:py-0 xl:pb-20 xl:pt-20 max-w-5xl mx-auto w-full">
            {/* header */}
            <h1 className=" text-3xl xl:text-4xl font-semibold text-blue-600">
              Conclusion
            </h1>
            {/* body */}
            <div className=" space-y-20">
              <div>text here</div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default page;
