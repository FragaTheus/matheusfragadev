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
import { BiLabel } from "react-icons/bi";
import { motion } from "framer-motion";

interface ProjectCardProps {
  index: number;
}

const ProjectCard = ({ index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="hover:border-primary border-2 transition-all group duration-300">
        <CardHeader>
          <BiLabel className="text-primary size-8" />
          <CardTitle className="group-hover:text-primary mt-8 text-lg transition-colors duration-300">
            Project Title
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-foreground opacity-90 font-light text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
            veniam laudantium odio sapiente iure consectetur nam, velit eius
            deserunt nemo, autem non soluta illum provident minima inventore
            molestiae eum hic.
          </CardDescription>
          <div className="w-full flex items-center gap-2 mt-8">
            <Badge variant={"outline"}>Badge Text</Badge>
            <Badge variant={"outline"}>Badge Text</Badge>
            <Badge variant={"outline"}>Badge Text</Badge>
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

export default function Projects() {
  return (
    <SectionWrapper>
      <TextAnimate startOnView once className="font-bold text-3xl">
        Title
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
          <ProjectCard key={index} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
}

const cards = [1, 2];
