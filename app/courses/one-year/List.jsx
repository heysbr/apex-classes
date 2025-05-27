import React from "react";
import tick from "../../components/Assests/images/WelcomeSection/tick.svg";
import Image from "next/image";

 function JeeMainsBullets({ data }) {
  return (
    <ul className="mt-8 lg:grid lg:col-gap-8 lg:row-gap-5">
      {data.map((item, i) => (
        <li className="flex items-start lg:col-span-1" key={i}>
          <div className="flex-shrink-0">
            <Image src={tick} height={30} alt="tick"></Image>
          </div>
          <p className=" ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
            {item.description}
          </p>
        </li>
      ))}
    </ul>
  );
}

export default function List({data, children}) {
  return (
    <div class="mt-8">
      <div class="flex items-center">
        <h4 class="flex-shrink-0 pr-4 bg-white dark:bg-gray-800 text-sm leading-5 tracking-wider font-semibold uppercase text-indigo-600">
          {children}
        </h4>
        <div class="flex-1 border-t-2 border-gray-200"></div>
      </div>
      <JeeMainsBullets data={data} />
    </div>
  );
}
