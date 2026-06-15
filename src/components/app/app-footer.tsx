"use client";

import Link from "next/link";
import { ContainerLayout } from "../layout/section-layout";
import { TextAnimate } from "../ui/text-animate";
import AppLogo from "./app-logo";
import { Button } from "../ui/button";
import { BsGithub } from "react-icons/bs";
import { ElementType } from "react";
import { LiaLinkedin, LiaLinkedinIn } from "react-icons/lia";
import { CgMail } from "react-icons/cg";

interface ItemProps {
  href: string;
  Icon: ElementType;
  label: string;
}

const Item = ({ href, Icon, label }: ItemProps) => {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <Button variant={"outline"}>
        <Icon className="text-xl" />
        <span className="hidden md:inline ml-2">{label}</span>
      </Button>
    </Link>
  );
};

export default function AppFooter() {
  return (
    <footer className="w-full bg-card border-t-2 p-12">
      <ContainerLayout className="flex items-center justify-between gap-12 flex-wrap text-center md:text-start">
        <div>
          <AppLogo />
          <TextAnimate
            startOnView
            once
            className="text-xs opacity-90 font-light mt-2"
          >
            @2026 Desenvolvido por Matheus Fraga.
          </TextAnimate>
        </div>
        <div className="flex items-center gap-2 justify-evenly w-full max-w-sm">
          {items.map((item) => (
            <Item key={item.href} {...item} />
          ))}
        </div>
      </ContainerLayout>
    </footer>
  );
}

const items = [
  {
    href: "https://github.com/FragaTheus/FragaTheus",
    Icon: BsGithub,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/matheusfragadev/",
    Icon: LiaLinkedinIn,
    label: "LinkedIn",
  },
  {
    href: "mailto:matheusfragadev@gmail.com",
    Icon: CgMail,
    label: "Email",
  },
] satisfies ItemProps[];
