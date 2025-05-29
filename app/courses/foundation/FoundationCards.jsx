import { title } from "process";
import React from "react";

export default function FoundationCards({ data }) {
  return (
    <div className="flex flex-wrap mt-16 mx-4 -mb-8">
      {data.map((item, i) => (
        <Cards data={item} key={i}/>
      ))}
    </div>
  );
}

function Cards({ data }) {
  return (
    <div className="w-full lg:w-1/5 px-2">
      <div className="h-full p-8 bg-white border rounded shadow-lg transform transition duration-500 hover:scale-105">
        <div className="mb-6 flex items-start">
          <h3 className="text-xl font-bold text-center text-red-600">
            {data.title}
          </h3>
        </div>{" "}
        <p> {data.desc}</p>
      </div>
    </div>
  );
}
