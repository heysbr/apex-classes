import Image from "next/image";
import React from "react";
import MenuBar from "./MenuBar";
import logo from "../Assests/images/apexlogo.svg"
import Button from "../../components/Button/Button";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className=" flex-col lg:flex-row flex justify-between items-center bg-white">
      
      <div>
        <Link href="/">
        <Image
          className=" my-auto rounded-md block "
          src={logo}
          alt="Logo"
          width={250}
          // height={500}
          />
          </Link>
      </div>

      <div className=" text-black z-50 bg-white w-full">
        <MenuBar />
      </div>

      <div>
        <Button link={"/student/faqs"}>
          Help Desk
        </Button>
      </div>

    </div>
  );
}
