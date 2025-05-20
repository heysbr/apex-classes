import React from "react";

const features = [
  {
    id: 1,
    imgSrc: "https://images.pexels.com/photos/6981006/pexels-photo-6981006.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Expert Teachers",
    description: "Teaching by excelled academicians for better results.",
  },
  {
    id: 2,
    imgSrc: "https://images.pexels.com/photos/2740956/pexels-photo-2740956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Regular Motivation",
    description: "Providing Regular Motivation Sessions for students.",
  },
  {
    id: 3,
    imgSrc: "https://images.pexels.com/photos/5428830/pexels-photo-5428830.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Doubt Clearing",
    description: "Daily providing Doubt Clearing Sessions for our students.",
  },
  {
    id: 4,
    imgSrc: "https://images.pexels.com/photos/6517287/pexels-photo-6517287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "PTM",
    description: "Regular Parents Teacher Meeting for better understanding.",
  },
];

export default function WelcomeSection() {
  return (
    <section>
      <div className="bg-red-50">
        <div className="container mx-auto py-10">
          <div className="container max-h-max w-full text-black flex flex-wrap mx-auto">
            <div className="w-full lg:w-1/2 mb-10  mt-10 md:my-auto">
              <div className="max-w-md mx-auto">
                <h2 className="my-2 text-4xl lg:text-5xl font-bold font-heading">
                  Welcome to <span className="text-red-600">APEX</span>
                </h2>
                <p className="mb-6 text-gray-500 leading-loose ">
                  We focus more on grooming mental level of the students along
                  with developing their knowledge, confidence,speed,accuracy and
                  right temperament to face the exam.
                </p>
                <ul className="text-gray-500 font-bold ">
                  <li className="flex mb-4">
                    <img src="./images/WelcomeSection/tick.svg" className="mr-1"  />
                    <span>
                      Teaching by excelled academicians for better results
                    </span>
                  </li>
                  <li className="flex mb-4">
                    <img src="./images/WelcomeSection/tick.svg" className="mr-1" />
                    <span>Regular Motivation Sessions for students</span>
                  </li>
                  <li className="flex mb-4">
                    <img src="./images/WelcomeSection/tick.svg" className="mr-1" />
                    <span>Daily Doubt Clearing Sessions</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-wrap mx-auto px-6 ">
              {features.map((feature, index) => (
                <div
                  key={feature.id}
                  className={`mb-4 lg:mb-0 w-full ${
                    index % 2 === 0 ? "md:w-1/2" : "lg:mt-6 md:w-1/2"
                  } px-4`}
                >
                  <div className="mb-8 flex flex-col py-6 px-6 shadow-lg rounded-lg bg-white transform transition duration-500 hover:scale-105">
                    <span className="mb-4 inline-block p-3 rounded-lg flex-3">
                      <img src={feature.imgSrc} alt={feature.title} className="rounded-xl" height="" />
                    </span>
                    <h4 className="mb-2 flex-1 text-2xl font-bold font-heading">
                      {feature.title}
                    </h4>
                    <p className="text-gray-500 leading-loose flex-1">
                      {feature.description}
                    </p>
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
