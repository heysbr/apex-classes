import React from "react";
import Image from "next/image";

import fb from "..//Assests/images/social/facebook.svg"
import twitter from "../Assests/images/social/twitter.svg"
import linkedin from "../Assests/images/social/linkedin.svg"
import Link from "next/link";
import { title } from "process";



export default function NavTop() {
  const socialLinks = [
    {
      link : "https://www.facebook.com/heysbr", imgLink: fb
    }
    ,{
      link : "https://www.instagram.com/code.prynsh/", imgLink: twitter
    },
    {
      link : "https://www.linkedin.com/in/priyanshu-sabaar/", imgLink: linkedin
    }
  ]
  return (
    <div className=" flex justify-between bg-red-400 px-[60px] h-[40px] text-white">
      <div className="flex items-center gap-3.5">
         {socialLinks.map((item,i)=>(
          <Link href={item.link} key={i}>
          <Image src={item.imgLink} alt="Logo" width={30} height={30}  />
          </Link>
         ))}
        <div className=" hidden md:flex items-center gap-3 font-medium">
        <Link href={"mailto:random@gmail.com?subject=Hello&body=This is a test email."}>random.priyanshu@gmail.com</Link>
        <Link href={"tel:+917895561007"}>7895561007</Link>
        <Link href={"tel:+917060292022"}>7060292022</Link>
        </div>
      </div>
      <a className="mr-[60px] my-auto font-bold">Admin</a>
    </div>
  );
}
