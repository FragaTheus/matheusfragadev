import Link from "next/link";
import { AppNavbarGridProps, AppNavbarProps } from "../type/app-navbar.type";

const NavbarGrid = ({ link, label, Icon, isActive }: AppNavbarGridProps) => {
  return (
    <Link
      href={link}
      className={`bg-transparent  hover:bg-muted/50 active:bg-muted transition-colors duration-300
                       w-full h-full max-w-xs flex flex-col items-center justify-center rounded-sm p-2 gap-2
                      ${isActive ? "text-primary" : "text-foreground"}`}
    >
      <Icon className="text-xl md:hidden" />
      <span className="text-xs md:text-sm font-mono md:font-body font-semibold">
        {label}
      </span>
    </Link>
  );
};

const NavBar = ({ gridItems }: AppNavbarProps) => {
  return (
    <nav className="w-full  items-center justify-evenly max-w-1/2 hidden md:flex gap-2">
      {gridItems.map((item, index) => (
        <NavbarGrid key={index} {...item} />
      ))}
    </nav>
  );
};

const MobileNavbar = ({ gridItems }: AppNavbarProps) => {
  return (
    <nav className="fixed bottom-0 h-20 bg-surface/50 backdrop-blur-sm w-full border-t flex items-center justify-evenly p-2 gap-2 md:hidden">
      {gridItems.map((item, index) => (
        <NavbarGrid key={index} {...item} />
      ))}
    </nav>
  );
};

export { NavBar, MobileNavbar };
