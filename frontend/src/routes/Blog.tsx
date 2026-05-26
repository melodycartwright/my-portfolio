import { motion } from "framer-motion";

export default function Blog() {
  return (
    <div className="min-h-screen bg-softwhite dark:bg-charcoal flex items-center justify-center px-6">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-5xl font-serif text-charcoal dark:text-white mb-4">
          Blog
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 font-sans">
          Coming soon — thoughts, write-ups, and lessons learned.
        </p>
      </motion.div>
    </div>
  );
}
