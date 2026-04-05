"use client";

import { usePathname } from "next/navigation";
import { MobileNavbar, NavBar } from "../components/ui/app-navbar";
import { navBarBase } from "../constants/navbarLinksImpl";

const MobileNavbarWrapper = ({}) => {
  const pathname = usePathname();
  const navBarImpl = navBarBase.map((item) => ({
    ...item,
    isActive: pathname === item.link,
  }));
  return <MobileNavbar gridItems={navBarImpl} />;
};

const NavbarWrapper = () => {
  const pathname = usePathname();
  const navBarImpl = navBarBase.map((item) => ({
    ...item,
    isActive: pathname === item.link,
  }));
  return <NavBar gridItems={navBarImpl} />;
};

export { NavbarWrapper, MobileNavbarWrapper };
