import React from "react";

export default function WelcomeSection() {
  return (
    <div className="max-h-max w-full text-black flex flex-wrap py-20 radius-for-skewed">
      <div className="w-full lg:w-1/2 mb-12 lg:mb-0 mt-7">
        <div className="max-w-md mx-auto">
          <h2 className="my-2 text-4xl lg:text-5xl font-bold font-heading">
            Welcome to <span className="text-red-600">APEX</span>
          </h2>
          <p className="mb-6 text-gray-500 leading-loose ">
            We focus more on grooming mental level of the students along with
            developing their knowledge, confidence,speed,accuracy and right
            temperament to face the exam.
          </p>
          <ul className="text-gray-500 font-bold ">
            <li className="flex mb-4">
              <img src="./images/WelcomeSection/tick.svg" />
              <span>Teaching by excelled academicians for better results</span>
            </li>
            <li className="flex mb-4">
              <img src="./images/WelcomeSection/tick.svg" />
              <span>Regular Motivation Sessions for students</span>
            </li>
            <li className="flex mb-4">
              <img src="./images/WelcomeSection/tick.svg" />
              <span>Daily Doubt Clearing Sessions</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex flex-wrap mx-auto px-6">
        <div className="mb-8 lg:mb-0 w-full md:w-1/2 px-4">
          <div className="mb-8 py-6 pl-6 pr-4 shadow-lg rounded-lg bg-white transform transition duration-500 hover:scale-110">
            <span className="mb-4 inline-block p-3 rounded-lg bg-red-100">
              <img src="./images/WelcomeSection/svg1.svg" />
            </span>
            <h4 className="mb-2 text-2xl font-bold font-heading">
              Expert Teachers
            </h4>
            <p className="text-gray-500 leading-loose">
              Teaching by excelled academicians for better results.
            </p>
          </div>
          <div className="py-6 pl-6 pr-4 shadow-lg rounded-lg bg-white transform transition duration-500 hover:scale-110">
            <span className="mb-4 inline-block p-3 rounded-lg bg-red-100">
              <img src="./images/WelcomeSection/svg2.svg" />
            </span>
            <h4 className="mb-2 text-2xl font-bold font-heading">
              Regular Motivation
            </h4>
            <p className="text-gray-500 leading-loose">
              Providing Regular Motivation Sessions for students.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:mt-20 px-4">
          <div className="mb-8 py-6 pl-6 pr-4 shadow-lg rounded-lg bg-white transform transition duration-500 hover:scale-110">
            <span className="mb-4 inline-block p-3 rounded bg-red-100">
              <img src="./images/WelcomeSection/svg3.svg" />
            </span>
            <h4 className="mb-2 text-2xl font-bold font-heading">
              Doubt Clearing
            </h4>
            <p className="text-gray-500 leading-loose">
              Daily providing Doubt Clearing Sessions for our students.
            </p>
          </div>
          <div className="py-6 pl-6 pr-4 shadow-lg rounded-lg bg-white transform transition duration-500 hover:scale-110">
            <span className="mb-4 inline-block p-3 rounded bg-red-100">
              <img src="./images/WelcomeSection/svg4.svg" />
            </span>
            <h4 className="mb-2 text-2xl font-bold font-heading">PTM</h4>{" "}
            <p className="text-gray-500 leading-loose">
              Regular Parents Teacher Meeting for better understanding.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
