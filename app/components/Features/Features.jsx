"use client";

import React from "react";
import FeatureCard from "./FeatureCard";

const FeaturesData = [
  {
    imgSrc: "./images/WelcomeSection/svg1.svg",
    heading: "Expert Teachers",
    subheading: "Our experienced educators simplify learning with innovative methods, clear explanations, and practical examples, ensuring every student.s",
  },
  {
    imgSrc: "./images/WelcomeSection/svg1.svg",
    heading: "Doubt Clearing",
    subheading: "We promptly address every question with detailed answers and examples, ensuring students overcome their difficulties, clarify concepts.",
  },
  {
    imgSrc: "./images/WelcomeSection/svg1.svg",
    heading: "Motivation",
    subheading: "Our mentors provide regular guidance, inspiring students to stay focused, overcome challenges, and achieve their goals with confidence.",
  },
  {
    imgSrc: "./images/WelcomeSection/svg1.svg",
    heading: "PTM",
    subheading: "Parent-teacher meetings foster collaboration by discussing student progress, identifying strengths, addressing challenges, and ensuring.",
  },
];


export default function Features() {
  return (
    <section>
      <div className="py-1 bg-[url('https://images.pexels.com/photos/733856/pexels-photo-733856.jpeg?')]">
        <div className="  backdrop-brightness-50 bg-white/10 backdrop-blur-xs shadow-lg rounded-lg p-6 m-10 ">
          <div>
            <div className="text-center text-white/80 text-shadow-white ">
              <p className=" text-lg font-normal mb-3 uppercase">
                Welcome to APEX
              </p>
              <h2 className="text-3xl lg:text-5xl font-semibold  w-full mx-auto mb-6 ">
                Features
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
