"use client";

import Link from "next/link";
import { ContainerLayout } from "../layout/section-layout";
import { TextAnimate } from "../ui/text-animate";
import AppLogo from "./app-logo";
import { Button } from "../ui/button";
import { BsGithub } from "react-icons/bs";

const Item = () => {
  return (
    <Link href="#">
      <Button variant={"outline"}>
        <BsGithub className="text-xl" />
        <span className="hidden md:inline ml-2">GitHub</span>
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
          {Array(3)
            .fill(0)
            .map((_, i) => (
              <Item key={i} />
            ))}
        </div>
      </ContainerLayout>
    </footer>
  );
}
