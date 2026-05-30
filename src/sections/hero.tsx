"use client";

import {
  ContainerLayout,
  SectionLayout,
} from "@/components/layout/section-layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Terminal, TypingAnimation } from "@/components/ui/terminal";
import { TextAnimate } from "@/components/ui/text-animate";
import { motion } from "framer-motion";

const HeroContent = () => {
  const Cta = () => {
    return (
      <div className="flex items-center gap-2 flex-wrap mt-8 font-heading">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.3 }}
        >
          <Button className="px-8 py-4 text-lg">Contato</Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.4 }}
        >
          <Button className="px-8 py-4 text-lg" variant={"outline"}>
            Ver projetos
          </Button>
        </motion.div>
      </div>
    );
  };

  return (
    <div className="flex flex-col w-full font-sans">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <Badge variant={"secondary"}>Label</Badge>
      </motion.div>
      <TextAnimate
        delay={1.1}
        once
        className="text-4xl mt-8 font-bold tracking-tighter md:text-5xl lg:text-6xl"
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </TextAnimate>
      <TextAnimate
        once
        delay={1.2}
        startOnView
        className="mt-6 font-light opacity-90 font-mono -z-10"
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt eaque
        quidem earum vel rem est in sequi necessitatibus edita a laboriosam
        dolore illum maiores alias dolorum nisi odio, culpa dolorem?
      </TextAnimate>
      <Cta />
    </div>
  );
};

const HeroTerminal = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 1.2 }}
      className="h-full w-full flex items-center justify-center"
    >
      <Terminal className="bg-card shadow-primary/10 hover:shadow-primary/40 transition-all shadow-lg">
        <TypingAnimation delay={10}>
          pnpm dlx shadcn@latest init
        </TypingAnimation>
        <TypingAnimation delay={10}>
          pnpm dlx shadcn@latest init
        </TypingAnimation>
        <TypingAnimation delay={10}>
          pnpm dlx shadcn@latest init
        </TypingAnimation>
        <TypingAnimation delay={10}>
          pnpm dlx shadcn@latest init
        </TypingAnimation>
      </Terminal>
    </motion.div>
  );
};

export default function Hero() {
  return (
    <SectionLayout id="home-hero" className="flex flex-col items-center">
      <ContainerLayout>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-items-center gap-8">
          <HeroContent />
          <HeroTerminal />
        </div>
      </ContainerLayout>
    </SectionLayout>
  );
}
