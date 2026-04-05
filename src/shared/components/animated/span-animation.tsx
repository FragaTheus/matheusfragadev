"use client";

import { motion } from "framer-motion";
import { SpanAnimationProps } from "@/shared/components/data/spanAnimation.types";

const SpanAnimation = ({
  spanText,
  delay = 0,
  className,
}: SpanAnimationProps) => {
  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ delay, duration: 0.01 }}
    >
      <span>{spanText}</span>
    </motion.span>
  );
};

export default SpanAnimation;
