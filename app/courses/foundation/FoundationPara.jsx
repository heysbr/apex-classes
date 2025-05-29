import React from "react";

export default function FoundationPara({ data, children }) {
  return (
    <>
      <div className="max-w-4xl mx-auto mb-16">
        <h2 className="mb-8 text-red-500 text-2xl lg:text-3xl font-bold font-heading text-center ">
          {children}
        </h2>
        {data.map((item) => (
          <Para data={item} key={item.title}/>
        ))}
      </div>
    </>
  );
}

function Para({ data }) {
  return (
    <>
      <h3 className=" text-2xl leading-8 font-extrabold sm:text-3xl sm:leading-9 ">
        {data.title}
      </h3>
      <p className="mt-3 text-base leading-6 text-justify mb-10">{data.desc}</p>
    </>
  );
}
