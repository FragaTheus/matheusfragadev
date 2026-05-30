"use client";

import {
  ContainerLayout,
  SectionLayout,
} from "@/components/layout/section-layout";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { TextAnimate } from "@/components/ui/text-animate";
import { RiJavaFill } from "react-icons/ri";
import { motion } from "framer-motion";

const Item = ({ index }: { index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="border-2 hover:border-secondary transition-all group">
        <CardContent className="flex flex-col items-center justify-center">
          <RiJavaFill className="text-secondary size-12" />
          <CardTitle className="mt-4">Stack</CardTitle>
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
            Core ecossistem
          </TextAnimate>
          <TextAnimate
            startOnView
            once
            className="opacity-90 font-light text-sm text-center mt-4"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </TextAnimate>
        </div>
        <div className="w-full mt-8 gap-4 grid grid-cols-2 lg:grid-cols-6">
          {[...Array(6)].map((_, index) => (
            <Item key={index} index={index} />
          ))}
        </div>
      </ContainerLayout>
    </SectionLayout>
  );
}
