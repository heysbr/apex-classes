import Image from "next/image";
import React from "react";
import MenuBar from "./MenuBar";
import logo from "../Assests/images/apexlogo.svg"
import Button from "../../components/Button/Button";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="flex justify-between items-center h-[70px] px-[30px] bg-white">
      <div>
        <Link href="/">
        <Image
          className="h-12 my-auto rounded-xs block shrink-0"
          src={logo}
          alt="Logo"
          width={250}
          height={500}
          />
          </Link>
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
