import Image from "next/image";
import React, { useState } from "react";
import MenuBar from "./MenuBar";
import logo from "../Assests/images/apexlogo.svg"
import Button from "../../components/Button/Button";
import Link from "next/link";
import { Menu, X } from "lucide-react";




export default function NavBar() {



  const [menuActive, setMenuActive] = useState(true)

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
      {menuActive?
      <X className="m-4 lg:hidden " onClick={()=>setMenuActive(!menuActive)} />:
      <Menu className="m-4 lg:hidden" onClick={()=>setMenuActive(!menuActive)}/>
      }
      <div className="hidden lg:flex">
        <Button link={"/student/faqs"}>
          Help Desk
        </Button>
      </div>

    </div>
  );
}
