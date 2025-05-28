import React from "react";
import tick from "../../components/Assests/images/WelcomeSection/tick.svg";
import Image from "next/image";

 function JeeMainsBullets({ data }) {
  return (
    <ul className="mt-8 col-gap-8 lg:row-gap-5">
      {data.map((item, i) => (
        <li className="flex items-start lg:col-span-1" key={i}>
          <div className="flex-shrink-0">
            <Image src={tick} height={30} alt="tick"></Image>
          </div>
          <p className=" ml-3 text-sm leading-5 ">
            {item.description}
          </p>
        </li>
      ))}
    </ul>
  );
}

export default function List({data, children}) {
  return (
    <div className="mt-8">
      <div className="flex items-center">
        <h4 className="flex-shrink-0 pr-4 text-lg leading-5 tracking-wider font-semibold uppercase text-indigo-600">
          {children}
        </h4>
        <div className="flex-1 border-t-2 border-indigo-600"></div>
      </div>
      <JeeMainsBullets data={data} />
    </div>
  );
}
