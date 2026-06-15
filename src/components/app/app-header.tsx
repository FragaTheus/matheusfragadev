"use client";

import { useHeaderScroll } from "@/hooks/use-scroll";
import { Button } from "../ui/button";
import AppLogo from "./app-logo";
import { BsWhatsapp } from "react-icons/bs";
import { motion } from "framer-motion";
import Link from "next/link";

const HeaderActions = () => {
  const ContactButton = () => {
    return (
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      >
        <Link href="https://wa.me/5511974479570" target="_blank">
          <Button title="Entrar em contato">
            <BsWhatsapp />
          </Button>
        </Link>
      </motion.div>
    );
  };

  const CurriculumButton = () => {
    return (
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <Link href="/curriculo.pdf" target="_blank" download>
          <Button variant={"outline"} title="Baixar currículo">
            Currículo
          </Button>
        </Link>
      </motion.div>
    );
  };

  return (
    <div className="flex items-center gap-2 h-full">
      <CurriculumButton />
      <ContactButton />
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
      className={`w-full max-w-svw h-16 bg-popover border-b-2 fixed transition-transform duration-300 z-1000 ${
        isHeaderVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="h-full w-full max-w-7xl m-auto flex items-center justify-between px-4">
        <AppLogo />
        <HeaderActions />
      </div>
    </motion.header>
  );
}
