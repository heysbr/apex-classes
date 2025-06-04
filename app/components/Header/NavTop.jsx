import Image from "next/image";
import Link from "next/link";

import fb from "..//Assests/images/social/facebook.svg"
import twitter from "../Assests/images/social/twitter.svg"
import linkedin from "../Assests/images/social/linkedin.svg"

export default function NavTop() {
  
  const socialLinks = [
    {
      link : "https://www.facebook.com/", imgLink: fb
    }
    ,{
      link : "https://www.instagram.com/", imgLink: twitter
    },
    {
      link : "https://www.linkedin.com/in/", imgLink: linkedin
    }
  ]

  return (
    <div className=" flex justify-between bg-red-400 px-[60px] h-[40px] text-white">
      <div className="flex items-center gap-3.5">
         {socialLinks.map(({link, imgLink},i)=>(
          <Link href={link} key={i}>
          <Image src={imgLink} alt="Logo" width={30} height={30}  />
          </Link>
          
         ))}
        <div className=" hidden md:flex items-center gap-3 font-medium">
        <Link href={"mailto:random@gmail.com?subject=Hello&body=This is a test email."}>random.priyanshu@gmail.com</Link>
        <Link href={"tel:+917895561007"}>7895561007</Link>
        <Link href={"tel:+917060292022"}>7060292022</Link>
        </div>
      </div>
      <a className="mr-[60px] my-auto font-bold hidden lg:flex ">Admin</a>
    </div>
  );
}
