import { motion } from "framer-motion";

export default function DividerReveal() {
  return (
    <motion.div
      initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" }}
      animate={{ clipPath: "polygon(0 0, 60% 0, 100% 100%, 0 100%)" }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      className="absolute inset-0 z-0 bg-gradient-to-tr from-blush/80 to-transparent dark:from-blush/80 dark:to-transparent backdrop-blur-sm shadow-inner"
    />
  );
}
