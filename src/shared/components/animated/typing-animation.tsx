"use client";

import { motion } from "framer-motion";
import { TypingAnimationProps } from "@/shared/components/data/typingAnimation.types";

const TypingAnimation = ({
  text,
  className,
  staggerDelay = 0.05,
  duration = 0.01,
}: TypingAnimationProps) => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration } },
  };

  return (
    <motion.span
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
      aria-label={text}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={`char-${index}`}
          variants={letterVariants}
          aria-hidden="true"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default TypingAnimation;
