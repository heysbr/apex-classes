"use client";
import NavTop from "./NavTop";
import { Menus } from "./utils";
import Menu from "./Menu";

export default function Header() {
  return (
    <div>
      <NavTop/>
      <Menu Menus={Menus}/>
    </div>
  );
}
