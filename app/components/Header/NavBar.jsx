import Image from "next/image";
import React from "react";
import MenuBar from "./MenuBar";
import logo from "../Assests/images/apexlogo.svg"
import Button from "../../components/Button/Button";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className=" lg:flex-row flex justify-between items-center bg-white">
      
      <div>
        <Link href="/" >
        <Image
          className=" rounded block mx-4 my-3"
          src={logo}
          alt="Logo"
          width={250}
          />
          </Link>
      </div>

      <div className=" text-black  bg-white ">
        <MenuBar />
      </div>

      <div className="hidden lg:flex">
        <Button link={"/student/faqs"}>
          Help Desk
        </Button>
      </div>

    </div>
  );
}
