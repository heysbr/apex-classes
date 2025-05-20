import Image from "next/image";
import React from "react";
import MenuBar from "./MenuBar";

export default function NavBar() {
  return (
    <div className="flex justify-between items-center h-[70px] px-[30px] bg-white">
      <div>
        <img
          className="h-12 my-auto rounded-xs block shrink-0"
          src="./images/apexlogo.svg"
          alt="Logo"
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
