"use client";
import React from "react";
import NavTop from "./NavTop";
import NavBar from "./NavBar";
import MobileNav from "./New/MobileNav";

export default function Header() {
  return (
    <div>
      <NavTop/>
      <NavBar/>
      {/* <MobileNav active={true}/> */}
    </div>
  );
}
