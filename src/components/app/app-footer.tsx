"use client";

import Link from "next/link";
import { ContainerLayout } from "../layout/section-layout";
import { TextAnimate } from "../ui/text-animate";
import AppLogo from "./app-logo";
import { Button } from "../ui/button";

export default function AppFooter() {
  return (
    <footer className="w-full bg-card border-t-2 p-12">
      <ContainerLayout className="flex items-center justify-between">
        <div>
          <AppLogo />
          <TextAnimate
            startOnView
            once
            className="text-xs opacity-90 font-light"
          >
            @2024 Matheus Fraga Java Backend Developer. Built with Spring
            mindset.
          </TextAnimate>
        </div>
        <div className="flex items-center gap-2">
          <Link href="#">
            <Button variant={"link"}>LinkedIn</Button>
          </Link>
          <Link href="#">
            <Button variant={"link"}>GitHub</Button>
          </Link>
          <Link href="#">
            <Button variant={"link"}>Instagram</Button>
          </Link>
        </div>
      </ContainerLayout>
    </footer>
  );
}
