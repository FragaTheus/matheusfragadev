"use client";

import { useHeaderScroll } from "@/hooks/use-scroll";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import AppLogo from "./app-logo";
import { FaFileAlt } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { motion } from "framer-motion";

const HeaderActions = () => {
  const CurriculumMenu = () => {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <Button>
              <FaFileAlt />
              <span className="hidden md:inline">Curriculo</span>
            </Button>
          </motion.div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>FullStack</DropdownMenuItem>
          <DropdownMenuItem>Frontend</DropdownMenuItem>
          <DropdownMenuItem>Backend</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  };

  const ContactButton = () => {
    return (
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      >
        <Button variant={"outline"}>
          <BsWhatsapp />
          <span className="hidden md:inline">Entrar em contato</span>
        </Button>
      </motion.div>
    );
  };

  return (
    <div className="flex items-center gap-2 h-full">
      <ContactButton />
      <CurriculumMenu />
    </div>
  );
};

export default function AppHeader() {
  const isHeaderVisible = useHeaderScroll();
  return (
    <motion.header
      initial={{ opacity: 0, y: -100 }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      className={`w-full h-16 bg-popover border-b-2 fixed transition-transform duration-300 z-1000 ${
        isHeaderVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="h-full w-full max-w-7xl m-auto flex items-center justify-between px-4">
        <AppLogo />
        <div className="hidden lg:block">Nav</div>
        <HeaderActions />
      </div>
    </motion.header>
  );
}
