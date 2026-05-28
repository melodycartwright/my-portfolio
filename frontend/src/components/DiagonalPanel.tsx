import { motion } from "framer-motion";

export default function DiagonalPanel() {
  return (
    <motion.div
      initial={{ x: "-40%" }}
      animate={{ x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="absolute inset-0 w-full h-full bg-blush z-10"
      style={{
        clipPath: "polygon(0 0, 100% 0, 0 100%)",
      }}
    />
  );
}
