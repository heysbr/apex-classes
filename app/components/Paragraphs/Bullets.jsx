import React from "react";
import tick from "../../components/Assests/images/WelcomeSection/tick.svg"
import Image from "next/image";

export default function Bullets({ BulletData }) {
  return (
    <ul className="text-gray-500 font-bold ">
      {BulletData.map((item, i) => (
        <li className="flex mb-4" key={item.id}>
          <Image src={tick} className="mr-1"  alt=" "/>
          <span>{item.para}</span>
        </li>
      ))}
    </ul>
  );
}
