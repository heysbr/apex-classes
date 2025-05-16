import React from "react";
import Image from "next/image";

export default function NavTop() {
  return (
    <div className=" flex justify-between bg-red-400 px-[60px] h-[40px] ">
      <div className="flex items-center gap-3.5">
        <Image src="./images/Teachers/fb.svg" alt="Logo" width={20} height={20} />
        <Image src="./images/Teachers/twitter.svg" alt="Logo" width={20} height={20} />
       <Image src="./images/Teachers/instagram.svg" alt="Logo" width={20} height={20} />
        <Image src="./images/Teachers/linkedin.svg" alt="Logo" width={20} height={20} />
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
