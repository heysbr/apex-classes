"use client";
import Image from "next/image";
import Link from "next/link";
// import { FeaturesData } from '@/app/api/data';
// import { Icon } from "@iconify/react";

import React from "react";

const FeaturesData = [
  {
    imgSrc: "./images/WelcomeSection/svg1.svg",
    heading: "Expert Teachers",
    subheading: "Teaching by excelled academicians for better results.",
  },
  {
    imgSrc: "./images/WelcomeSection/svg1.svg",
    heading: "Doubt Clearing",
    subheading: "Daily providing Doubt Clearing Sessions for our students.",
  },
  {
    imgSrc: "./images/WelcomeSection/svg1.svg",
    heading: "Regular Motivation",
    subheading: "Providing Regular Motivation Sessions for students.",
  },
  {
    imgSrc: "./images/WelcomeSection/svg1.svg",
    heading: "PTM",
    subheading: "Regular Parents Teacher Meeting for better understanding.",
  },
];

export default function About() {
  return (
<section >
      <div className="py-20 bg-white radius-for-skewed">
        <div className="container mx-auto px-4">
          
          
          
          <div className="container mx-auto p-18 w-full  bg-white">
        <div className="text-center mb-14">
          <p className="text-black text-lg font-normal mb-3 uppercase">
            Features
          </p>
          <h2 className="text-3xl lg:text-5xl font-semibold text-black w-full mx-auto mb-6 bg-white">
            Welcome to APEX
          </h2>
          <p className="text-2xl lg:text-5xl text-black w-full mx-auto">We focus more on grooming mental level of the students along with developing their knowledge, confidence,speed,accuracy and right temperament to face the exam.</p>
        </div>
        <div className="flex gap-x-4 px-4 pb-4 w-full pt-35 bg-white ">
          {FeaturesData.map((items, i) => (
            <div
              className="flex flex-col  justify-items-center relative rounded-3xl bg-red-300"
              key={i}
            >
              <div className="flex flex-col items-center text-center p-0 px-5 pb-30 ">
                <Image className="-translate-y-[50%]" src={items.imgSrc} alt={items.imgSrc} width={200} height={10} />
                <h3 className="text-2xl text-black font-semibold "> {items.heading} </h3>
                <p className="text-lg font-normal text-black/50 mt-2"> {items.subheading} </p>
                <a className="text-black">Learn More..</a>
              </div>
            </div>
          ))}
        </div>
      </div></div></div>
      </section>
       );
}