import { BiHome, BiUser } from "react-icons/bi";
import { AppNavbarGridProps } from "../components/type/app-navbar.type";
import { FiFile } from "react-icons/fi";
import { MdDeveloperMode } from "react-icons/md";
import navbarContent from "@/shared/constants/navbarTextContent.json";

export const navBarBase: Omit<AppNavbarGridProps, "isActive">[] = [
  {
    link: navbarContent.navbarContent[0].link,
    Icon: BiHome,
    label: navbarContent.navbarContent[0].label,
  },
  {
    link: navbarContent.navbarContent[1].link,
    Icon: FiFile,
    label: navbarContent.navbarContent[1].label,
  },
  {
    link: navbarContent.navbarContent[2].link,
    Icon: BiUser,
    label: navbarContent.navbarContent[2].label,
  },
  {
    link: navbarContent.navbarContent[3].link,
    Icon: MdDeveloperMode,
    label: navbarContent.navbarContent[3].label,
  },
];
