import React from "react";
import Image from "next/image";

export default function NavTop() {
  return (
    <div className=" flex justify-between bg-red-800 px-[60px] h-[40px] ">
      <div className="flex items-center gap-3.5">
        <Image src="./images/facebook.svg" alt="Logo" width={30} height={30} />
        <Image src="./images/twitter.svg" alt="Logo" width={30} height={30} />
        <Image src="./images/instagram.svg" alt="Logo" width={30} height={30} />
        <Image src="./images/linkedin.svg" alt="Logo" width={30} height={30} />
        <a>hallo@gmail.com</a>
        <a>7895561007</a>
        <a>7060292022</a>
      </div>
      <a className="mr-[60px] my-auto font-bold">Admin</a>
    </div>
  );
}
