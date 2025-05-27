import React from "react";
import Image from "next/image";

import fb from "..//Assests/images/social/facebook.svg"
import twitter from "../Assests/images/social/twitter.svg"
import linkedin from "../Assests/images/social/linkedin.svg"



export default function NavTop() {
  const socialLinks = [
    {
      link : fb,
    }
    ,{
      link : twitter,
    },
    {
      link : linkedin,
    }
  ]
  return (
    <div className=" flex justify-between bg-red-400 px-[60px] h-[40px] text-white">
      <div className="flex items-center gap-3.5">
         {socialLinks.map((item,i)=>(
          <Image src={item.link} alt="Logo" width={30} height={30} key={i} />
         ))}
        <div className=" hidden md:flex items-center gap-3 font-medium">
        <a>hallo@gmail.com</a>
        <a>7895561007</a>
        <a>7060292022</a>
        </div>
      </div>
      <a className="mr-[60px] my-auto font-bold">Admin</a>
    </div>
  );
}
