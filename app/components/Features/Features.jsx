"use client";
import Image from "next/image";
import Link from "next/link";
// import { FeaturesData } from '@/app/api/data';
// import { Icon } from "@iconify/react";

import React from "react";
import FeatureCard from "./FeatureCard";

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
    heading: "Motivation",
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
    <section>
      <div className="py-1 bg-[url('https://images.pexels.com/photos/733856/pexels-photo-733856.jpeg?')]">
        <div className="  backdrop-brightness-50 bg-white/10 backdrop-blur-xs shadow-lg rounded-lg p-6 m-10 ">
          <div>
            <div className="text-center text-white/80 text-shadow-white ">
              <p className=" text-lg font-normal mb-3 uppercase">
                Features
              </p>
              <h2 className="text-3xl lg:text-5xl font-semibold  w-full mx-auto mb-6 ">
                Welcome to APEX
              </h2>
              <p className="leading-loose lg:w-1/2 mx-6 text-center lg:mx-auto">
                We focus more on grooming mental level of the students along
                with developing their knowledge, confidence, speed, accuracy and
                right temperament to face the exam.
              </p>
            </div>
            <FeatureCard FeaturesData={FeaturesData}/>
          </div>
        </div>
      </div> 
    </section>
  );
}
