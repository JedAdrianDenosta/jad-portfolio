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
              <h1 className="text-5xl font-bold tracking-tight text-blue-500">
                Traack
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
                    The COVID-19 pandemic had a significant impact on all
                    aspects of life, especially the corporate sector. To explore
                    how Filipino workers can maintain safety and security in
                    their daily routines, I conducted research that revealed a
                    heightened caution among employees regarding their
                    environment and the objects they interact with. Workers feel
                    safer when they can manage their tasks independently,
                    without relying on shared items.
                  </p>
                </div>
                <div className=" text-zinc-800 xl:space-y-2">
                  <h1 className=" text-xl xl:text-2xl font-medium">Problem</h1>
                  <p className=" leading-7 text-base">
                    Navigating the challenges of the COVID-19 pandemic in 2020
                    brought about numerous uncertainties, especially regarding
                    virus exposure risks. People became increasingly aware of
                    the dangers associated with surface contact, particularly in
                    crowded environments like offices and workplaces.
                    Traditional attendance tracking methods, such as manual
                    sign-in sheets and fingerprint scanners, emerged as
                    significant concerns, as they involved shared surfaces that
                    could potentially facilitate virus transmission.
                  </p>
                </div>
                <div className=" text-zinc-800 xl:space-y-2">
                  <h1 className=" text-xl xl:text-2xl font-medium">Goals</h1>
                  <p className=" leading-7 text-base">
                    I am designing a mobile app that enables employees to
                    conveniently clock in and out using their personal devices
                    from anywhere in the workplace. My goals are to enhance
                    safety by eliminating shared surfaces, boost efficiency,
                    improve the user experience, ensure data security, increase
                    flexibility, build employee confidence, and facilitate
                    seamless attendance data collection.
                  </p>
                </div>
                <div className=" text-zinc-800 xl:space-y-2">
                  <h1 className=" text-xl xl:text-2xl font-medium">
                    My Impact
                  </h1>
                  <p>
                    Through this project, I identified the need for a mobile app
                    that allows employees to safely clock in and out using their
                    own devices, directly addressing COVID-19 concerns. Drawing
                    on my research into Filipino workers&apos; safety and
                    security preferences, I developed a comprehensive solution
                    as a solo designer. This app minimizes the risk of virus
                    transmission by eliminating shared surfaces and offers a
                    secure, touchless attendance system for the workplace.
                  </p>
                </div>
              </div>
              {/* image */}
              <div className=" xl:w-2/5 h-fit">
                <Image
                  layout="responsive"
                  src="/tk-asset-1.svg"
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
                        The pain points users experience in their workplace
                        during COVID-19.
                      </li>
                      <li>
                        Their preference for physical attendance versus
                        alternative methods during the pandemic.
                      </li>
                      <li>
                        Innovative solutions for improving the work attendance
                        system in the Philippines during COVID-19.
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
                      In my current project, I’m conducting secondary research
                      to gather preliminary insights and assumptions about
                      employee check-in and check-out system across various
                      companies. To validate these initial findings, I&apos;m
                      also engaging in primary research through interviews,
                      questionnaires, and surveys targeting the end
                      users—specifically, employees within these organizations.
                      This multi-method approach will help me better understand
                      and validate the existing attendance systems used by
                      companies in the Philippines.
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
                      In this phase, I focused on uncovering the concerns and
                      pain points of employees regarding attendance processes,
                      particularly during the COVID-19 pandemic. My research
                      revealed that companies required employees to interact
                      with shared objects like pens, paper, and biometric
                      devices to record their attendance. This traditional
                      method, which necessitated physical presence at the
                      workplace, heightened employee anxiety due to the risk of
                      virus transmission during that period.
                    </p>
                  </div>
                  {/* left para */}
                  <div className=" space-y-2 xl:w-1/2">
                    <p className=" text-base xl:text-lg leading-7">
                      There was also no platform that allowed employees to
                      complete the attendance process without physical contact.
                      To mitigate the uncertainty surrounding virus
                      transmission, I recognized the need to design a product
                      that addresses the limitations of traditional attendance
                      methods. This solution will empower users to work with
                      greater confidence and assurance regarding their health.
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
                          Causing anxiety and lack of confidence to go to the
                          physical workplace because of the Corona Virus.
                        </p>
                      </div>
                      <div className=" flex items-center justify-center xl:w-72 h-40 bg-cyan-50 border border-slate-200 px-6 py-3 text-sm rounded-2xl">
                        <p className="text-center">
                          Tends to resign because of health and safety reasons.
                        </p>
                      </div>
                      <div className=" flex items-center justify-center xl:w-72 h-40 bg-cyan-50 border border-slate-200 px-6 py-3 text-sm rounded-2xl">
                        <p className="text-center">
                          Employees and other target users requires to have an
                          attendance through manual way such as pen, paper, and
                          biometrics.
                        </p>
                      </div>
                    </div>
                    {/* row two */}
                    <div className=" flex flex-col xl:flex-row xl:space-y-0 justify-center space-y-4 xl:space-x-6 xl:py-4">
                      <div className=" flex items-center justify-center xl:w-72 h-40 bg-cyan-50 border border-slate-200 px-6 py-3 text-sm rounded-2xl">
                        <p className="text-center">
                          Hoping that there would be alternatives of signing in
                          and out their attendance without interaction with
                          physical objects.
                        </p>
                      </div>
                    </div>
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
                        The primary goal of this study was to understand and
                        empathize with my target users, specifically employees
                        in the Philippines. To achieve this, I employed various
                        research methods, including questionnaires, surveys, and
                        interviews. I conducted interviews with 10 employees
                        from diverse sectors such as healthcare, education, and
                        private companies. One of the key findings that stood
                        out was the significant concern employees had about
                        their health and safety due to the unpredictability of
                        the COVID-19 virus. Many expressed a strong inclination
                        to resign because of the risks associated with using
                        shared physical objects at their workplaces. This
                        concern led some to seek safer job opportunities that
                        minimized physical interaction. <br /> <br /> These
                        insights underscored the urgent need for a design
                        solution that eliminates the necessity for employees to
                        interact with shared objects, particularly in the
                        attendance process. By addressing these pain points, the
                        proposed solution aims to provide a long-term,
                        user-centered approach that enhances both safety and job
                        satisfaction.
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
                        The insights and key points gathered from users provided
                        valuable clarity on the project’s goals and highlighted
                        the needs that can be addressed through a tailored
                        product. The lack of alternative options for signing in
                        and out at their respective companies underscores a
                        significant gap in the market and the daily needs of
                        target users in the corporate environment. Additionally,
                        user feedback revealed a strong desire for attendance
                        solutions that prioritize their health and safety.
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
                      src="/up-beth.svg"
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
                          After developing my user persona, I envisioned a
                          specific scenario where Beth could benefit from the
                          product. This use case was informed by a combination
                          of primary and secondary research, user feedback
                          insights, a competitive analysis that revealed a
                          market gap, and a persona I could deeply connect with.
                        </p>
                        <p className=" leading-7 text-base xl:text-lg">
                          The MVP enables users to virtually sign in and out
                          through a mobile application, accessible only within
                          their respective companies. This solution modernizes
                          the traditional attendance process, offering a
                          technological alternative that provides users with the
                          security and confidence they need.
                        </p>
                      </div>
                      <Image
                        layout="responsive"
                        src="/us-tk.svg"
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
                  src="/mp-tk.svg"
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
                        <b>User Flow:</b> As an employee, I want to check-in and
                        check-out for my attendance using the Near Field
                        Communication (NFC) system using my personal cellphone
                        device.
                      </p>
                      <Image
                        layout="responsive"
                        src="/uf-tk-1.svg"
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
                        src="/uf-tk-2.svg"
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
                        src="/uf-tk-3.svg"
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
                <div className="px-5 py-3 bg-blue-50 text-zinc-800 text-sm font-medium rounded-lg hover:opacity-75 cursor-pointer w-fit">
                  <a href="https://bit.ly/4erL08k">See full protype</a>
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
