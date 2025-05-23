import React from "react";
import Image from "next/image";

import fb from "../../../public/images/facebook.svg"
import twitter from "../../../public/images/twitter.svg"
import linkedin from "../../../public/images/linkedin.svg"


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
        {/* <Image src="./images/Teachers/fb.svg" alt="Logo" width={20} height={20} /> */}
         {socialLinks.map((item,i)=>(
          <Image src={item.link} alt="Logo" width={20} key={i} height={20} />
         ))}
        <div className=" hidden md:flex items-center gap-3">
        <a>hallo@gmail.com</a>
        <a>7895561007</a>
        <a>7060292022</a>
        </div>
      </div>
      <a className="mr-[60px] my-auto font-bold">Admin</a>
    </div>
  );
}
