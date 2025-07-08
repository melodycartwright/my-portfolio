import { motion } from "framer-motion";

export default function DividerReveal() {
  return (
    <motion.div
      initial={{ clipPath: "polygon(0 100%, 0 100%, 0 100%, 0 100%)" }}
      animate={{ clipPath: "polygon(0 100%, 100% 0, 100% 0, 0 100%)" }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      className="absolute inset-0 bg-blush bg-gradient-to-tr from-blush to-softwhite z-0"
    />
  );
}
