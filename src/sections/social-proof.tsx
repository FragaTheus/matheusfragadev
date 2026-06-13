"use client";

import { SectionLayout } from "@/components/layout/section-layout";
import { HyperText } from "@/components/ui/hyper-text";
import Link from "next/link";
import { motion } from "framer-motion";

interface Item {
  href: string;
  inverted?: boolean;
  title: string;
  description: string;
}

const SocialProofItem = ({ href, title, description, inverted }: Item) => {
  return (
    <div className="w-full h-full border-y md:border-x md:border-y-0 p-8">
      <Link href={href}>
        <div>
          <HyperText
            startOnView
            delay={1.5}
            className={`text-3xl lg:text-4xl  font-bold ${inverted ? "text-primary" : ""}`}
          >
            {title}
          </HyperText>
          <HyperText startOnView delay={1.5} className="text-sm">
            {description}
          </HyperText>
        </div>
      </Link>
    </div>
  );
};

export default function SocialProof() {
  return (
    <SectionLayout className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="bg-card border-y"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 w-full max-w-7xl m-auto md:px-4">
          {items.map((item, index) => (
            <SocialProofItem key={index} {...item} />
          ))}
        </div>
      </motion.div>
    </SectionLayout>
  );
}

const items: Item[] = [
  {
    href: "#",
    title: "3+",
    description: "Anos de experiência",
  },
  {
    inverted: true,
    href: "#",
    title: "+4",
    description: "Projetos em produção",
  },
  {
    href: "#",
    title: "+5",
    description: "Empresas digitalizadas",
  },
];
