"use client";

import { SectionWrapper } from "@/components/layout/section-layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TextAnimate } from "@/components/ui/text-animate";
import { motion } from "framer-motion";
import { BsQrCode } from "react-icons/bs";
import { FcFactory } from "react-icons/fc";
import { GiFactory } from "react-icons/gi";

interface ProjectCardProps {
  index: number;
  Icon: React.ElementType;
  title: string;
  description: string;
  badges: string[];
}

const ProjectCard = ({
  index,
  Icon,
  title,
  description,
  badges,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="hover:border-primary border-2 transition-all group duration-300">
        <CardHeader>
          <Icon className="text-primary size-8" />
          <CardTitle className="group-hover:text-primary mt-8 text-lg transition-colors duration-300">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-foreground opacity-90 font-light text-sm">
            {description}
          </CardDescription>
          <div className="w-full flex items-center gap-2 mt-8 flex-wrap">
            {badges.map((badge, index) => (
              <Badge key={index} variant={"outline"}>
                {badge}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <CardAction>
            <Button variant={"outline"} className="text-xs">
              Ver mais
            </Button>
          </CardAction>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default function Projects({}) {
  return (
    <SectionWrapper>
      <TextAnimate startOnView once className="font-bold text-3xl">
        Principais projetos
      </TextAnimate>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "5rem" }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="h-1 max-w-20 bg-primary mt-2"
      />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 mt-8 gap-4">
        {cards.map((card, index) => (
          <ProjectCard
            key={index}
            index={index}
            title={card.title}
            description={card.description}
            badges={card.badges}
            Icon={card.Icon}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}

const cards = [
  {
    index: 0,
    Icon: BsQrCode,
    title: "LaLouise Consultoria",
    description:
      "O LaLouise automatiza o controle de validade dos alimentos, substituindo processos manuais por uma operação mais rápida, segura e rastreável. A plataforma reduz desperdícios, fortalece os controles de qualidade e oferece maior confiança na gestão alimentar dos restaurantes.",
    badges: ["Multi-tenant", "Microsserviços", "Mensageria", "Cloud"],
  },
  {
    index: 1,
    Icon: GiFactory,
    title: "Caldeiraria Realiza",
    description:
      "A Realiza fortaleceu sua presença digital por meio de um site institucional otimizado para mecanismos de busca. A solução simplifica a solicitação de orçamentos com envio de projetos e apoia o processo comercial de uma operação enxuta, reduzindo etapas manuais no contato com potenciais clientes.",
    badges: ["SEO", "SMTP", "UX/UI", "Google Analytics"],
  },
] satisfies ProjectCardProps[];
