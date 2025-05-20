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
      <div className=" -py-10 md:py-10  bg-white bg-[url('https://images.pexels.com/photos/733856/pexels-photo-733856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] ">
        <div className="container  mx-auto backdrop-brightness-50 bg-white/10 backdrop-blur-xs shadow-lg rounded-lg p-6 ">
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
                with developing their knowledge, confidence,speed,accuracy and
                right temperament to face the exam.
              </p>
            </div>
            <div className="flex flex-wrap gap-4  m-4 pb-4 pt-10 " >
              {FeaturesData.map((items, i) => (
                <div
                  className="flex content-center w-full lg:w-1/5 rounded-xl mb-2 lg:mb-0 bg-white/80 mx-auto  group hover:scale-105 duration-700 hover: translate-y-2 transform  hover:bg-white/60"
                  key={i}
                >
                  <div className="flex flex-col flex-wrap items-center text-center py-10  px-4 w-full center">
                    {/* <Image className="-translate-y-[50%] group-hover:rotate-y-180 duration-1000" src={items.imgSrc} alt={items.imgSrc} width={200} height={10}/> */}
                    <h3 className="text-2xl text-black font-semibold  duration-700">{items.heading}</h3>
                    <p className="text-lg font-normal text-black/50 mt-2">{items.subheading}</p>
                    <a className="text-black">Learn More..</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> 
    </section>
  );
}
