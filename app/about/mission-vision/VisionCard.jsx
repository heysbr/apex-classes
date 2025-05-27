import React from "react";

export default function VisionCard({ data }) {
  return (
    <>
      {data.map((item) => (
        <div className="mb-8 flex justify-center items-start" key={item.id}>
          <div className="mb-4 mr-6 py-4 px-6 rounded text-red-500 bg-red-50 font-bold">
            {item.id}
          </div>
          <div>
            <h3 className="mb-4 text-xl lg:text-2xl font-bold">{item.title}</h3>
            <p className="text-gray-500 leading-loose text-justify">
              {item.desc}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}
