import React from "react";
import Navbar from "@/components/Navbar";

import Icon from "@mdi/react";
import { mdiArrowLeft } from "@mdi/js";
import Link from "next/link";
import Image from "next/image";

const page = () => {
  return (
    <>
      <Navbar />
      <Link
        href="/"
        className=" flex justify-start items-center space-x-2 tezt-zinc-700 hover:text-zinc-900 mx-auto max-w-5xl xl:py-10 px-6"
      >
        <Icon path={mdiArrowLeft} size={1} />
        <p>Go back to main page</p>
      </Link>
      {/* intro */}
      <section className=" pt-6 pb-8 px-6 text-zinc-800 flex justify-start xl:pb-20 xl:pt-10">
        <div className="flex flex-col justify-center gap-y-10 max-w-5xl mx-auto w-full bg-white">
          <div className=" max-w-5xl mx-auto w-full space-y-8 xl:space-y-20">
            {/* header */}
            <div className=" space-y-3 xl:space-y-6">
              <h1 className="text-5xl font-bold tracking-tight text-teal-500">
                HospiLink
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
                    Healthcare in the Philippines has been a problem in meeting
                    patients' needs. I wanted to look into the situation in
                    Iloilo City and find ways to help both Emergency technicians
                    (ET) and hospitals, especially in emergencies. My research
                    revealed that the main issue is poor communication due to a
                    lack of technology between the sectors, and each hospital
                    has its own way of handling patients' needs.
                  </p>
                </div>
                <div className=" text-zinc-800 xl:space-y-2">
                  <h1 className=" text-xl xl:text-2xl font-medium">Problem</h1>
                  <p className=" leading-7 text-base">
                    Dealing with emergencies can be tough, and it can lead to
                    bad decisions that result in poor care for the patient and
                    unnecessary expenses. Emergency technicians (ET) need to
                    quickly decide where to take the patient. One problem is the
                    lack of communication between ET and hospitals, which means
                    nurses in the Emergency Room don't have the necessary tools
                    ready for incoming patients.
                  </p>
                </div>
                <div className=" text-zinc-800 xl:space-y-2">
                  <h1 className=" text-xl xl:text-2xl font-medium">Goals</h1>
                  <p className=" leading-7 text-base">
                    Creating a responsive web-based application that allows ET’s
                    and hospitals to have an information dissemenation of the
                    patients condition and recommends the best suitable hospital
                    for the patient.
                  </p>
                </div>
                <div className=" text-zinc-800 xl:space-y-2">
                  <h1 className=" text-xl xl:text-2xl font-medium">
                    My Impact
                  </h1>
                  <p>
                    For this project I validated the need for the product I had
                    in mind and leveraged data from the research to create an
                    end-to-end product as a solo designer.
                  </p>
                </div>
              </div>
              {/* image */}
              <div className=" xl:w-2/5 h-fit">
                <Image
                  layout="responsive"
                  src="/hs-asset-1.png"
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
          <div className=" space-y-8 px-6 py-8 xl:px-0 xl:py-0 xl:pb-20 xl:pt-20 max-w-5xl mx-auto w-full">
            {/* header */}
            <h1 className=" text-3xl xl:text-4xl font-semibold text-cyan-700">
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
                        What are the user’s pain points in emergency
                        transportation of a patient
                      </li>
                      <li>
                        The context in which the users seek for finding the most
                        suitable hospital for the patient
                      </li>
                      <li>
                        The process when admitting a particular patient to the
                        hospital
                      </li>
                      <li>
                        What are the hindrance in terms of communication between
                        patient, emergency technicians, and hospital
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
                      I'm conducting a secondary research to identify gaps in
                      the market and community concerning emergency cases. I'm
                      examining existing systems and interviewing patients,
                      doctors, nurses, and emergency technicians who have
                      experienced issues with hospital processes and patient
                      transportation. This will help me validate my assumptions
                      about emergency complications in the hospital.
                    </p>
                  </div>
                </div>
              </div>
              {/* competitive research */}
              <div className=" space-y-6 xl:space-y-4">
                {/* header */}
                <h1 className=" text-2xl xl:text-3xl font-semibold text-cyan-600">
                  Competitive Research
                </h1>
                <div className=" flex flex-col space-y-4 xl:space-y-0 xl:flex-row xl:gap-x-24">
                  {/* left para */}
                  <div className=" space-y-2 xl:w-1/2">
                    <p className=" text-base xl:text-lg leading-7">
                      In this phase of the project, I chose to investigate the
                      existing systems that address hospital emergency cases and
                      evaluate the features they implement. What I found was
                      that there are no related systems in the Philippines that
                      specifically cater to this problem. Some of the systems
                      only consist of geosystems that trigger alarms for
                      specific locations in case of emergencies.
                    </p>
                  </div>
                  {/* left para */}
                  <div className=" space-y-2 xl:w-1/2">
                    <p className=" text-base xl:text-lg leading-7">
                      No existing systems cater to transporting patients to
                      specific hospitals; instead, the traditional process
                      relies on users assumptions which hospital is best for the
                      patient's needs. To ensure long-term success for my users,
                      I've realized that designing and developing a product that
                      addresses the problems in finding and recommending the
                      most suitable hospital according to the patient's needs,
                      as identified by Emergency Technicians, is essential.
                    </p>
                  </div>
                </div>
              </div>
              {/* user interviews */}
              <div className=" space-y-8 xl:space-y-10">
                <div className=" space-y-10">
                  {" "}
                  {/* header */}
                  <h1 className=" text-3xl font-semibold text-cyan-600">
                    User Interviews
                  </h1>
                  {/* interview inputs */}
                  <div className="flex flex-col">
                    {/* row one */}
                    <div className=" flex flex-col justify-center space-y-4 xl:space-x-6 xl:py-4">
                      <div className=" flex items-center xl:w-72 h-40 bg-cyan-50 border border-slate-200 px-6 py-3 text-sm rounded-2xl">
                        <p>
                          Emergency cases process are not structured where users
                          starts to frustrate and disappointed because of the
                          different process/es and requirements from diverse
                          hospitals.
                        </p>
                      </div>
                      <div className=" flex items-center xl:w-72 h-40 bg-cyan-50 border border-slate-200 px-6 py-3 text-sm rounded-2xl">
                        <p>
                          Patients appreciates Emergency Technician if they have
                          an assurance and suggestion regarding hospitals and
                          doctor best treatment for the patient.
                        </p>
                      </div>
                      <div className=" flex items-center xl:w-72 h-40 bg-cyan-50 border border-slate-200 px-6 py-3 text-sm rounded-2xl">
                        <p>
                          Emergency Technician looks for a way where they could
                          contact the hospital easily to know the status that if
                          they could still transport the patient or not.
                        </p>
                      </div>
                    </div>
                    {/* row two */}
                    <div className=" flex flex-col justify-center space-y-4 pt-4 xl:space-x-6 xl:py-4">
                      <div className=" flex items-center xl:w-72 h-40 bg-cyan-50 border border-slate-200 px-6 py-3 text-sm rounded-2xl">
                        <p>
                          Guardians wants best for their patient to get well and
                          have a proper care and attention by a specialized
                          physician and also the facilities and equipments.
                        </p>
                      </div>
                      <div className=" flex items-center xl:w-72 h-40 bg-cyan-50 border border-slate-200 px-6 py-3 text-sm rounded-2xl">
                        <p>
                          Patient are frustrated once they will be diverted to
                          another hospital due to the capacity of the hospital
                          is maximized.
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
                        To gain a comprehensive understanding of the experiences
                        of Guardians/Patients, Emergency Technicians, and
                        Hospital Staff, I conducted interviews with five
                        individuals who have been involved in the process of
                        admitting/transporting a patient. I was surprised to
                        find that most Guardians/Patients faced significant
                        struggles in such scenarios, leading to frustration and
                        stress while caring for their loved ones. The same was
                        true for Emergency Technicians, especially those from
                        Iloilo City Emergency Responder (ICER), who faced
                        confusion and communication gaps with hospitals when
                        determining the best hospital for the patient's needs.
                        These discoveries motivated me to develop a solution
                        that would bridge these gaps, ensuring long-term success
                        for the users and enabling them to make informed
                        decisions before transporting patients to any hospitals
                        within the city.
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
                        The valuable feedback from the user interviews provided
                        clarity on the project's direction and highlighted a
                        crucial need that can be addressed through a main
                        product feature. The communication breakdown between
                        hospitals and emergency technicians emerged as a
                        significant problem, emphasizing the importance of
                        transparent data exchange between them. Additionally,
                        the insights revealed that the product can assist
                        guardians/patients in choosing the most suitable
                        hospitals for patient transportation and proper care.
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
      <section className=" text-zinc-800 flex justify-start px-6 py-8">
        <div className="flex flex-col justify-center gap-y-10 max-w-5x mx-auto w-full bg-white">
          <div className=" space-y-8 bg-whit xl:pb-20 xl:pt-20 max-w-5xl mx-auto w-full">
            {/* header */}
            <h1 className=" text-3xl xl:text-4xl font-semibold text-cyan-700">
              Define
            </h1>
            {/* body */}
            <div className=" space-y-10">
              {/* competitive research */}
              <div className=" space-y-10 xl:space-y-20">
                {/* user persona */}
                <div className=" space-y-4">
                  {/* header */}
                  <h1 className=" text-2xl xl:text-3xl font-semibold text-cyan-600">
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
                      src="/up-nick.svg"
                      alt="Jed's hero image"
                      width={1000}
                      height={100}
                    />
                    <Image
                      layout="responsive"
                      src="/up-linda.svg"
                      alt="Jed's hero image"
                      width={1000}
                      height={100}
                    />
                  </div>
                </div>
                {/* user scenario */}
                <div>
                  <div className=" space-y-4">
                    {/* header */}
                    <h1 className=" text-2xl xl:text-3xl font-semibold text-cyan-600">
                      User Scenario
                    </h1>
                    <div className="space-y-8">
                      <div className=" flex flex-col gap-x-14 space-y-4">
                        <p className=" leading-7 text-base xl:text-lg">
                          After developing my user persona, I chose to envision
                          a specific scenario where Nick could utilize the
                          product. This use case was inspired by a combination
                          of synthesized research from user interviews, a
                          competitive analysis that revealed a market niche, and
                          a persona I could deeply empathize with.
                        </p>
                        <p className=" leading-7 text-base xl:text-lg">
                          The MVP enables recommending the most suitable
                          hospital for the patient, facilitating interaction and
                          status updates between hospitals and Emergency
                          Technicians. It also allows hospitals to accept or
                          reject requests from Emergency Technicians.
                        </p>
                      </div>
                      <Image
                        layout="responsive"
                        src="/user-scenario.svg"
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
        <div className="flex flex-col justify-center gap-y-10 max-w-5x mx-auto w-full bg-zinc-50">
          <div className=" space-y-8 px-6 py-8 xl:pb-20 xl:pt-20 max-w-5xl mx-auto w-full">
            {/* header */}
            <h1 className=" text-3xl xl:text-4xl font-semibold text-cyan-700">
              Ideation
            </h1>
            {/* body */}
            <div className=" space-y-20">
              {/* feature prioritization */}
              <div className=" space-y-8">
                <div className=" space-y-2">
                  {/* header */}
                  <h1 className=" text-2xl xl:text-3xl font-semibold text-cyan-600">
                    Feature Prioritization
                  </h1>
                  <p className=" text-base xl:text-lg leading-7">
                    Upon recognizing the solution that would offer the greatest
                    benefit to my users, I chose to delve deeper by generating
                    ideas for the concrete features. I aim for the application
                    to be user-friendly while on the move, featuring a
                    straightforward interface, simplified onboarding process,
                    and direct access to the main functionality. The research
                    phase equipped me with adequate information to distinguish
                    between features that will provide minimal versus
                    substantial value to the user.
                  </p>
                </div>
                <Image
                  layout="responsive"
                  src="/moscow-prio.svg"
                  alt="Jed's hero image"
                  width={1000}
                  height={100}
                />
              </div>
              {/* initial task flows */}
              <div className=" space-y-8">
                <div className=" space-y-4">
                  {/* header */}
                  <h1 className=" text-2xl xl:text-3xl font-semibold text-cyan-600">
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
                        <b>User Flow:</b> As a Emergency Technician, I want to
                        fill a form that will enter the data of the patient
                        during emergency cases so that I can deliver him/her to
                        the appropriate and best hospital care.
                      </p>
                      <Image
                        layout="responsive"
                        src="/user-flow.svg"
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
                        src="/refusal-form.svg"
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
                        src="/check-avail.svg"
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
      <section className=" text-zinc-800 flex justify-start px-6 py-8">
        <div className="flex flex-col justify-center gap-y-6 max-w-5x mx-auto w-full bg-white">
          <div className=" space-y-20 bg-white xl:pb-20 xl:pt-20 max-w-5xl mx-auto w-full">
            {/* hifi-prototype */}
            <div className=" space-y-8">
              {/* header */}
              <h1 className=" text-3xl xl:text-4xl font-semibold text-cyan-700">
                Prototype and Test
              </h1>
              <div className=" space-y-4">
                <h2 className=" text-2xl xl:text-3xl font-semibold text-cyan-600">
                  Hi-fi Prototype
                </h2>
                <p className=" max-w-3xl">
                  After I compiled the outtakes from the research into the
                  affinity map, I was able to create a persona that represents
                  the main user group.
                </p>
                <button className="px-5 py-3 bg-teal-50 text-zinc-800 text-sm rounded-lg hover:opacity-75">
                  See full prototype
                </button>
              </div>

              <div className=" bg-zinc-50 py-10 xl:py-20 flex justify-center rounded-lg">
                <Image
                  layout="rsponsive"
                  src="/hifi-hospilink.svg"
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
                <h1 className=" text-3xl font-semibold text-cyan-600">
                  Usability Testing
                </h1>
                <p className=" max-w-3xl">
                  I tested the first version of the prototype with 5 users to
                  determine the necessary revisions to make the overall
                  experience more intuitive and pleasant. Here are some
                  outtakes.
                </p>
              </div>
              <div className=" flex flex-row space-x-4 min-w-full bg-red-400">
                <Image
                  layout="responsive"
                  src="/item-1.svg"
                  alt="Jed's hero image"
                  width={10}
                  height={10}
                />
                <Image
                  layout="responsive"
                  src="/item-2.svg"
                  alt="Jed's hero image"
                  width={100}
                  height={10}
                />
                <Image
                  layout="responsive"
                  src="/item-3.svg"
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
                    Users had problems filling-up the form in the Patient are
                    Report Page <br />
                    <b>Fix:</b> add a call-to-action button for a simple or
                    shorter form
                  </li>
                  <li>
                    Users may have issues locating the record they had submitted
                    to the hospital <br />
                    <b>Fix:</b> added a history page to allow see the
                    details/history of the report
                  </li>
                  <li>
                    Users (hospital) may have issues accepting the request from
                    the emergency technician <br />
                    <b>Fix:</b> added a sound notification to the dashboard of
                    the hospital
                  </li>
                </ul>
              </div>

              {/* <div className=" bg-zinc-50 py-20 flex justify-center rounded-lg">
                <Image
                  layout="rsponsive"
                  src="/hifi-hospilink.svg"
                  alt="Jed's hero image"
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
        <div className="flex flex-col justify-center gap-y-10 max-w-5x mx-auto w-full bg-zinc-50">
          <div className=" space-y-8 px-6 py-8 xl:pb-20 xl:pt-20 max-w-5xl mx-auto w-full">
            {/* header */}
            <h1 className=" text-3xl xl:text-4xl font-semibold text-cyan-700">
              Conclusion
            </h1>
            {/* body */}
            <div className=" space-y-20">
              <div>text here</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
