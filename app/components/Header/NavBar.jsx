import Image from "next/image";
import React from "react";
import MenuBar from "./MenuBar";
import logo from "../../../public/images/apexlogo.svg"
import Button from "../../../app/components/Button/Button";

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
        <Button >
          Help Desk
        </Button>
      </div>
    </div>
  );
}
