import Image from "next/image";
import React from "react";
import MenuBar from "./MenuBar";
import logo from "../../../public/images/apexlogo.svg"

export default function NavBar() {
  return (
    <div className="flex justify-between items-center h-[70px] px-[30px] bg-white">
      <div>
        <Image
          className="h-12 my-auto rounded-xs block shrink-0"
          src={logo}
          alt="Logo"
           width={250}
        />
      </div>
      <div className=" text-black">
        <MenuBar />
      </div>
      <div>
        <button className="hidden md:block bg-red-600  rounded-t-xl rounded-bl-xl px-6 py-1.5 font-bold">
          Help Desk
        </button>
      </div>
    </div>
  );
}
