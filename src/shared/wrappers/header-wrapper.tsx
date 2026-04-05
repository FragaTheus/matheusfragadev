"use client";

import { AppHeader, AppHeaderContainer } from "../components/ui/app-header";
import useScroll from "../hooks/use-scroll";
import headerTextContent from "@/shared/constants/headerTextContent.json";

const HeaderWrapper = () => {
  const isScrolled = useScroll();
  return (
    <>
      <AppHeader />
      <AppHeaderContainer
        isScrolled={isScrolled}
        headerBtnText={headerTextContent.headerBtnText}
      />
    </>
  );
};

export default HeaderWrapper;
