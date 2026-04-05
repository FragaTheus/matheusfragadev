import { AppHeaderProps } from "../type/app-header.type";
import AppButton from "./app-button";
import AppLogo from "./app-logo";
import { NavbarWrapper } from "@/shared/wrappers/navbar-wrapper";

const AppHeader = () => {
  return <div className="w-full h-12 border-b top-0" />;
};

const AppHeaderContainer = ({ headerBtnText, isScrolled }: AppHeaderProps) => {
  return (
    <header
      className={`fixed w-full max-w-7xl  h-12 left-1/2 -translate-x-1/2 transition-all duration-300 z-50
        ${isScrolled ? "px-1 mt-1" : ""}`}
    >
      <div
        className={`flex items-center justify-between transition-all duration-300 w-full h-full 
          ${isScrolled ? "bg-surface/50 backdrop-blur-sm  shadow-md rounded-sm px-3 md:px-5" : "bg-transparent border-x px-4 md:px-6"}`}
      >
        <AppLogo />
        <NavbarWrapper />
        <AppButton btnText={headerBtnText} />
      </div>
    </header>
  );
};

export { AppHeader, AppHeaderContainer };
