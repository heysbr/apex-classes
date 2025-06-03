"use client";
import React from "react";
import NavTop from "./NavTop";
import { Menus } from "../../components/Header/New/utils";
import MobMenu from "./New/MobMenu";

export default function Header() {
  return (
    <div>
      <NavTop/>
      <MobMenu Menus={Menus}/>
    </div>
  );
}
