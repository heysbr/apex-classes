import VisionCard from "../../about/mission-vision/VisionCard";
import React from "react";
const data = [
  {
    id: "1",
    title: "Distance Learning Programme",
    desc: "Apex Education Classes Distance Learning Programme is a process, a process which is proficient enough to generate and provide access to learning when the source of information and the learners are separated by time and distance or both. And to make it simpler we provide with the most consistent, Systematic, Target Oriented & Exhaustive Programme to transform your competitive examination proficiency, before you really appear in.",
  },
  {
    id: "2",
    title: "Achievers comprehensive course for Neet UG & IIT – JEE { Main and Advance",
    desc: "This correspondence course is Ideal for the students preparing for the prestigious competitive examination IITJEE | BITSAT | AIPMT | AFMC | AIIMS and other Engineering & Pre Medical entrance examinations. JEE Mains ( AIEEE ) , JEE Advanced ( IITJEE ) Engineering & Pre Medical entrance examinations.",
  },
  {
    id: "3",
    title: "Correspondence Courses (ACC) on i-Tab",
    desc: "This course is Ideal for the students preparing for the prestigious competitive examination JEE and other engineering examinations. Salient features of this course are given below. Flipped Learning helps you to quickly review what has been taught in the class with recorded lectures, discussion of concepts and questions in order to make it more lively and simultaneously keep the file sizes small. Imagine 700 hours of recorded lectures by experts in the subject all delivered in a 7″ tablet PC, i-Tab. JEE Mains , JEE Advanced & for all Engineering entrance examinations.",
  },
];

export default function page() {
  return (
    <>
      <section class="py-20 text-black">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto">
            <h2 class="mb-16 text-3xl lg:text-4xl font-bold font-heading text-center text-red-500 border-b-4  ">
              Distance Learning Program (DLP)
            </h2>
            <VisionCard data={data} />
          </div>
        </div>
      </section>
    </>
  );
}
