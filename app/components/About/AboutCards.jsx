import React from "react";



export default function AboutCards({features}) {
  return (
    <div className="w-full lg:w-1/2 flex flex-wrap mx-auto px-6 mt-10 lg:mt-0 ">
      {features.map((feature, index) => (
        <div
          key={feature.id}
          className={`mb-4 lg:mb-0 w-full  ${
            index % 2 === 0 ? "md:w-1/2" : "lg:mt-6 md:w-1/2"
          } px-4`}
        >
          <div className= {`mb-8 flex flex-col py-6 px-6 shadow-lg hover:shadow-2xl rounded-2xl bg-white transform transition duration-500 hover:scale-105`}>
           {feature.imgSrc && <span className="mb-4 inline-block p-3 rounded-lg flex-3">
              <img
                src={feature.imgSrc}
                alt={feature.title}
                className="rounded-xl"
              />
            </span>}
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
  );
}
