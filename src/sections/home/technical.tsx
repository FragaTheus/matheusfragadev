"use client";

import AppTerminal from "@/components/app/app-terminal";
import { SectionWrapper } from "@/components/layout/section-layout";
import { TextAnimate } from "@/components/ui/text-animate";
import { ElementType } from "react";
import { IoBusiness } from "react-icons/io5";
import { MdReportProblem } from "react-icons/md";
import { SiFreelancer } from "react-icons/si";
import { motion } from "framer-motion";

interface TechnicalItemProps {
  Icon: ElementType;
  label: string;
  description: string;
}

const TechnicalItem = ({ Icon, label, description }: TechnicalItemProps) => {
  return (
    <div className="flex items-center gap-4">
      <Icon className="size-6 text-secondary" />
      <div>
        <TextAnimate
          once
          startOnView
          className="font-semibold text-sm uppercase tracking-tighter font-heading"
        >
          {label}
        </TextAnimate>
        <TextAnimate once startOnView className="text-xs">
          {description}
        </TextAnimate>
      </div>
    </div>
  );
};

const TechnicalContent = () => {
  return (
    <div className="flex flex-col items-start">
      <TextAnimate once startOnView className="text-3xl font-bold">
        Sobre
      </TextAnimate>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "5rem" }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="h-1 max-w-20 bg-primary mt-2"
      />
      <TextAnimate once startOnView className="mt-8 text-sm opacity-90">
        Antes de ingressar na área de tecnologia, atuei em funções ligadas ao
        atendimento e às operações. Essas experiências me tornaram capaz de
        compreender os desafios enfrentados por empresas e seus clientes. Hoje,
        como desenvolvedor, mantenho essa mesma abordagem, mas uso a tecnologia
        como meio para simplificar processos e entregar soluções.
      </TextAnimate>
      <div className="mt-8 flex flex-col gap-6">
        {technicalItems.map((item, index) => (
          <TechnicalItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

const TerminalContent = () => {
  return (
    <AppTerminal>
      <span className="text-yellow-300 text-sm">@Entity</span>
      <span className="text-orange-400 text-sm">
        public class
        <span className=" text-zinc-100">{" Sobre {"}</span>
      </span>

      <span className="text-sm  text-zinc-100 mt-4">
        <span className=" text-purple-400">nome</span> =
        <span className="text-green-400"> "Matheus Fraga"</span>;
      </span>

      <span className="text-zinc-100 text-sm">
        <span className="text-purple-400">idade</span> =
        <span className="text-sky-400"> 26</span>;
      </span>

      <span className="text-sm text-zinc-100">
        <span className="text-purple-400">formacao</span> =
        <span className="text-green-400"> "ADS | Cursando"</span>;
      </span>

      <span className="text-sm text-zinc-100">
        <span className="text-purple-400">atuacao</span> =
        <span className="text-green-400"> "Backend/Fullstack"</span>;
      </span>

      <span className="text-sm text-zinc-100">
        <span className="text-purple-400">localizacao</span> =
        <span className="text-green-400"> "Brasil/SP"</span>;
      </span>

      <span className="text-sm text-zinc-100 mt-4">{`}`}</span>
    </AppTerminal>
  );
};

export default function Technical() {
  return (
    <SectionWrapper>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12">
        <TechnicalContent />
        <TerminalContent />
      </div>
    </SectionWrapper>
  );
}

const technicalItems = [
  {
    Icon: IoBusiness,
    label: "Visão de Negócio",
    description: "Tecnologia alinhada ao contexto",
  },
  {
    Icon: MdReportProblem,
    label: "Resolução de Problemas",
    description: "Entender antes de desenvolver",
  },
  {
    Icon: SiFreelancer,
    label: "Projetos Autônomos",
    description: "Iniciativa para construir",
  },
] satisfies TechnicalItemProps[];
