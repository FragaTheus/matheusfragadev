"use client";

import { motion } from "framer-motion";
import { Terminal } from "../ui/terminal";

export default function AppTerminal({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 1.2 }}
      className="h-full w-full flex items-center justify-center"
    >
      <Terminal className="bg-card shadow-primary/10 hover:shadow-primary/40 transition-all shadow-lg max-w-sm max-h-min">
        {children}
      </Terminal>
    </motion.div>
  );
}
