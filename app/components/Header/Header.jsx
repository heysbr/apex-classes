"use client";
import React from "react";
import NavTop from "./NavTop";
import Logo from "../../components/Assests/images/apexlogo.svg";

import DesktopMenu from "./New/DesktopMenu";
import { Menus } from "./New/utils";
import MobMenu from "./New/MobMenu";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button/Button";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <div>
      <NavTop/>
      <NavBar/>
    </div>
  );
}
