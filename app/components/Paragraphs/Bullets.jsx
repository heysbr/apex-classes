import React from "react";

const tick = "./images/WelcomeSection/tick.svg";

export default function Bullets({BulletData}) {
  return (
    <ul className="text-gray-500 font-bold ">

        {BulletData.map((item,i)=>(
            <li className="flex mb-4" key={i}>
        <img src={tick} className="mr-1" />
        <span>{item.para}</span>
      </li>
        ))}
    </ul>
  );
}

