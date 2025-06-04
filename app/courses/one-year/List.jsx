import React from "react";
import { CircleCheckBig } from "lucide-react";


 function JeeMainsBullets({ data }) {
  return (
    <ul className="">
      {data.map((item, i) => (
        <li className="flex items-start lg:col-span-1 mb-4" key={i}>
          <div className="flex-shrink-0">
            <CircleCheckBig/>
          </div>
          <p className=" ml-3 text-sm leading-5 my-auto">
            {item.description}
          </p>
        </li>
      ))}
    </ul>
  );
}

export default function List({data, children}) {
  return (
    <div className="mb-5">
      <div className="flex items-center mb-4">
        <h4 className="flex-shrink-0 pr-3 text-lg leading-5 tracking-wider font-semibold uppercase text-indigo-600">
          {children}
        </h4>
        <div className="flex-1 border-t-2 border-indigo-600"></div>
      </div>
      <JeeMainsBullets data={data} />
    </div>
  );
}
