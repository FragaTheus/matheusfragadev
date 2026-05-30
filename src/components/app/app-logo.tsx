import Link from "next/link";
import { motion } from "framer-motion";

export default function AppLogo() {
  return (
    <Link href={"/"}>
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        viewport={{ once: true }}
        className="tracking-tighter font-bold font-heading text-primary"
      >
        matheusfragadev
      </motion.h2>
    </Link>
  );
}
