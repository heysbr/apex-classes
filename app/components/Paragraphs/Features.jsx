import React from 'react'

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

export default function Features() {
  return (
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
                      <img src={feature.imgSrc} alt={feature.title} className="rounded-xl"/>
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
  )
}
