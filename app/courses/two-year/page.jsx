import React from "react";
import TimeTable from "./TimeTable";
import List from "../one-year/List";

const Session1Data = [
  {
    description:
      "During the first academic session in class XI, the entire PCM/B syllabus of X1 and in depth conceptual understanding for IIT-JEE/NEET is taught to the aspirants.",},
  {
    description:
      "The syllabus will be completed by end of January, and the students are given a break of 4-6 weeks to appear for their Class XI school exams.",
  },
];

const Session2Data = [
  {
    description:
      "During the second academic session in class XII, the entire PCM/B syllabus of XII is completed with regular tests, topic discussions and doubt clearing classes, to induce grater focus on accuracy and speed in problem solving.",},
  {
    description:
      "The Class XI competitive syllabus is simultaneously revised to keep the students updated for the entrance exam the following year.",
  },
  {
    description:
      "Tests and discussions are regularly held for practice andsharpening the student's understanding and knowledge",
  },
];

export default function page() {
  return (
    <section className="container mx-auto" >
      <div className="m-2 lg:mb-18">
      <h2 className="text-3xl lg:text-4xl text-red-500 font-bold font-heading text-center mx-auto mt-10 mb-5">Two Year Course</h2>
          <div className="overflow-hidden rounded-xl shadow-2xl bg-white p-10 border border-gray-200">
            <h3 className="text-2xl leading-8 font-extrabold text-gray-900 sm:text-3xl sm:leading-9 mb-2">
              Program Focus and Objective
            </h3>
            <p className="text-base leading-6 mb-4">
              This is the most popular and ideal course for students who understand the need of an early start to succeed in school and competitive exams. The program extensively covers both IIT-J EE and school preparation; and teachers take great care to initiate the child with basic concepts in Physics, Chemistry and Maths; thereafter smoothly transiting to a higher and complex level of problem solving; a must have for competing in 11T-JEE and exams alike. The program equips the student with a very solid foundation of conceptual knowledge, analytical thinking, logical development for success.
            </p>
            <TimeTable/>
            <div className=" mb-4">
              <div className="flex items-center mb-2">
                <div className="flex-1 border-t-2 border-indigo-600 "></div>
                <h4 className="flex-shrink-0 px-4 text-sm leading-5 tracking-wider font-semibold uppercase text-indigo-600">Course Structure</h4>
                <div className="flex-1 border-t-2 border-indigo-600"></div>
              </div>
              <p className="text-base leading-6">
                The course is divided into two academic session
              </p>              
            </div>
              <List data={Session1Data}>Session 1 </List>
              <List data={Session2Data}>Session 2 </List>
          </div>
      </div>
    </section>
  );
}
