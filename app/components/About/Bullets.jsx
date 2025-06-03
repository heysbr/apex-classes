import React from "react";
import tick from "../../components/Assests/images/WelcomeSection/tick.svg"
import Image from "next/image";
import { Check } from "lucide-react";

export default function Bullets({ BulletData }) {
  return (
    <ul className="text-gray-500 font-bold ">
      {BulletData.map((item, i) => (
        <li className="flex mb-4 gap-1" key={item.id}>
          <Check className="mr-1"/>
          <span>{item.para}</span>
        </li>
      ))}
    </ul>
  );
}
