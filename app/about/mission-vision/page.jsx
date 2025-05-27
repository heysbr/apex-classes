import React from "react";
import VisionCard from "./VisionCard";

const vision = [
  {
    id: "1",
    title: "Mission",
    desc: "At Apex, our mission is to provide 'Quality Education' to Engineering and Medical aspirants with fortified strategies and comprehensive  to help achieve their goal of getting into best institutions of India, thereby offering infinite dignity on both personal and professional fronts.",
  },
  {
    id: "2",
    title: "Vision",
    desc: "To emerge as a distinguished coaching institute for Engineering and Medical aspirants aiming to work for the development of society at. We strive to provide a versatile &amp; competent learning system and henceforth converting the dreams of thousands of students into reality.",
  },
  {
    id: "3",
    title: "Value",
    desc: "Apex Classes is built on the vision that education serves as a keystone in improving society and building better futures for all. We believe in Integrity, Transparency and openness in all our actions, Innovation and pursuit of excellence in career education and address the needs of students through career oriented initiatives and strive to continuously improve the processes and quality of education.",
  },
];

export default function page() {
  return (
    <>
      <section class="py-20 text-black">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto">
            <h2 class="mb-16 text-3xl lg:text-4xl font-bold font-heading text-center text-red-500 border-b-4  ">
              Mission &amp; Vision
            </h2>
              <VisionCard data={vision} />
          </div>
        </div>
      </section>
    </>
  );
}
