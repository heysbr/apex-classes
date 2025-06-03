"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import MenuBar from "../../../components/Header/MenuBar";
import logo from "../../../components/Assests/images/apexlogo.svg";
import Button from "../../../components/Button/Button";
import Link from "next/link";

export default function MobMenu({ Menus }) {
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState(null);
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    setClicked(null);
  };

  const subMenuDrawer = {
    enter: {
      height: "auto",
      overflow: "hidden",
    },
    exit: {
      height: 0,
      overflow: "hidden",
    },
  };

  return (
    <>
      <div className=" lg:flex-row flex justify-between items-center bg-white">
        <div>
          <Link href="/">
            <Image
              className=" rounded block mx-4 my-3"
              src={logo}
              alt="Logo"
              width={250}
            />
          </Link>
        </div>
        <MenuBar />
        <div className="hidden lg:flex">
          <Button link={"/student/faqs"}>Help Desk</Button>
        </div>
        {isOpen ? (
          <X className="m-4 lg:hidden " onClick={toggleDrawer} />
        ) : (
          <Menu className="m-4 lg:hidden" onClick={toggleDrawer} />
        )}
      </div>

      <div className="">
        <motion.div
          className="lg:hidden absolute z-10 left-0 right-0 overflow-y-auto h-fit bg-[#18181A] backdrop-blur text-white p-6 pb-20"
          initial={{ x: "-100%" }}
          animate={{ x: isOpen ? "0%" : "-100%" }}
        >
          <ul>
            {Menus.map(({ name, subMenu }, i) => {
              const isClicked = clicked === i;
              const hasSubMenu = subMenu?.length;
              return (
                <li key={name} className="">
                  <span
                    className="flex-center-between p-4 hover:bg-white/5 rounded-md cursor-pointer relative"
                    onClick={() => setClicked(isClicked ? null : i)}
                  >
                    {name}
                    {(hasSubMenu>0) && (
                      <ChevronDown
                        className={`ml-auto ${isClicked && "rotate-180"} `}
                      />
                    )}
                  </span>
                  {(hasSubMenu>0) && (
                    <motion.ul
                      initial="exit"
                      animate={isClicked ? "enter" : "exit"}
                      variants={subMenuDrawer}
                      className="ml-5"
                    >
                      {subMenu.map(({ name, icon: Icon, desc }) => (
                        <li
                          key={name}
                          className="p-2 flex flex-row  hover:bg-white/5 rounded-md gap-x-2 cursor-pointer"
                        >
                          <Link href={desc} className="flex flex-row items-center gap-x-2.5">
                          <Icon size={17} />
                          
                          {name}
                          </Link>
                          
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </li>
              );
            })}
          </ul>
        </motion.div>
      </div>
    </>
  );
}
