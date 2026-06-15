"use client";

import {
  ContainerLayout,
  SectionLayout,
} from "@/components/layout/section-layout";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { TextAnimate } from "@/components/ui/text-animate";
import { RiJavaFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { ElementType } from "react";
import {
  SiDocker,
  SiGithubactions,
  SiNextdotjs,
  SiNginx,
  SiPostgresql,
  SiRabbitmq,
  SiSpringboot,
  SiTailwindcss,
} from "react-icons/si";
import { cn } from "@/lib/utils";
import { BiCloud } from "react-icons/bi";
import { Button } from "@/components/ui/button";
import { BsTypescript } from "react-icons/bs";
import { DiLinux, DiRedis } from "react-icons/di";

interface ItemProps {
  index: number;
  Icon: ElementType;
  className: string;
  label: string;
}

const Item = ({ index, Icon, className, label }: ItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="border-2 hover:border-secondary transition-all group">
        <CardContent className="flex flex-col items-center justify-center">
          <Icon className={cn(`size-12 text-muted`, className)} />
          <CardTitle className="mt-4 text-sm font-bold">{label}</CardTitle>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default function Stackts() {
  return (
    <SectionLayout className="w-full border-y bg-card transition-all">
      <ContainerLayout className="py-12">
        <div className="w-full flex flex-col items-center justify-center">
          <TextAnimate startOnView once className="text-3xl font-bold">
            Stacks
          </TextAnimate>
          <TextAnimate
            startOnView
            once
            className="opacity-90 font-light text-sm text-center mt-4"
          >
            As tecnologias que uso para colocar soluções em produção
          </TextAnimate>
        </div>
        <div className="w-full mt-8 gap-4 grid grid-cols-2 lg:grid-cols-6">
          {stacks.map((stack, index) => (
            <Item
              key={index}
              index={index}
              Icon={stack.Icon}
              className={stack.className}
              label={stack.label}
            />
          ))}
        </div>
        <Button className="mt-8">Ver curriculo completo</Button>
      </ContainerLayout>
    </SectionLayout>
  );
}

const stacks = [
  {
    index: 0,
    Icon: RiJavaFill,
    label: "Java",
    className: "text-red-500",
  },
  {
    index: 1,
    Icon: SiSpringboot,
    label: "Spring Boot",
    className: "text-green-500",
  },
  {
    index: 2,
    Icon: SiPostgresql,
    label: "PostgreSQL",
    className: "text-blue-500",
  },
  {
    index: 3,
    Icon: SiRabbitmq,
    label: "RabbitMQ",
    className: "text-orange-500",
  },
  {
    index: 4,
    Icon: SiDocker,
    label: "Docker",
    className: "text-blue-600",
  },
  {
    index: 5,
    Icon: BiCloud,
    label: "Cloud",
    className: "text-sky-500",
  },
  {
    index: 6,
    Icon: SiGithubactions,
    label: "CI/CD",
    className: "text-purple-500",
  },
  {
    index: 7,
    Icon: DiRedis,
    label: "Redis",
    className: "text-red-700",
  },
  {
    index: 8,
    Icon: BsTypescript,
    label: "TypeScript",
    className: "text-blue-500",
  },
  {
    index: 9,
    Icon: SiNextdotjs,
    label: "Next.js",
    className: "text-white",
  },
  {
    index: 10,
    Icon: SiTailwindcss,
    label: "Tailwind",
    className: "text-teal-500",
  },
  {
    index: 11,
    Icon: SiNginx,
    label: "Nginx",
    className: "text-green-500",
  },
] satisfies ItemProps[];
