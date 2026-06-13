"use client";

import AppTerminal from "@/components/app/app-terminal";
import {
  ContainerLayout,
  SectionLayout,
} from "@/components/layout/section-layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimatedSpan, TypingAnimation } from "@/components/ui/terminal";
import { TextAnimate } from "@/components/ui/text-animate";
import { motion } from "framer-motion";

const HeroContent = () => {
  const Cta = () => {
    return (
      <div className="flex items-center gap-2 flex-wrap mt-8 font-heading text-lg font-bold">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.3 }}
        >
          <Button className="px-8 py-4">Ver projetos</Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.4 }}
        >
          <Button className="px-8 py-4" variant={"outline"}>
            Entrar em contato
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
        <Badge variant={"secondary"} className="text-xs">
          Desenvolvedor backend || fullstack
        </Badge>
      </motion.div>
      <TextAnimate
        delay={1.1}
        once
        className="mt-8 font-bold tracking-tighter text-4xl lg:text-5xl xl:text-6xl"
      >
        Transoformando problemas em domínios.
      </TextAnimate>
      <TextAnimate
        once
        delay={1.2}
        startOnView
        className="mt-6 font-light opacity-90 font-mono -z-10 text-sm lg:text-base"
      >
        Desenvolvedor do LaLouise, atuo na construção de sistemas do início ao
        fim — da modelagem do domínio até o deploy em produção.
      </TextAnimate>
      <Cta />
    </div>
  );
};

const HeroTerminal = () => {
  return (
    <AppTerminal>
      <TypingAnimation startOnView>./gradlew clean build</TypingAnimation>

      <AnimatedSpan startOnView className="mt-4">
        {"> Modelando o domínio..."}
      </AnimatedSpan>

      <AnimatedSpan startOnView>{"> Implementando..."}</AnimatedSpan>

      <AnimatedSpan startOnView>
        {"> Integrando frontend e backend..."}
      </AnimatedSpan>

      <AnimatedSpan startOnView>{"> Executando testes..."}</AnimatedSpan>

      <AnimatedSpan startOnView>{"> Publicando em produção..."}</AnimatedSpan>

      <AnimatedSpan startOnView className="mt-4 text-secondary font-semibold">
        BUILD SUCCESSFUL
      </AnimatedSpan>

      <AnimatedSpan startOnView>✓ Projeto publicado com sucesso</AnimatedSpan>
    </AppTerminal>
  );
};

export default function Hero() {
  return (
    <SectionLayout id="home-hero" className="flex flex-col items-center">
      <ContainerLayout>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-items-center gap-8">
          <HeroContent />
          <HeroTerminal />
        </div>
      </ContainerLayout>
    </SectionLayout>
  );
}
