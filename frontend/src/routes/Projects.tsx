import { useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../components/Button";
import { LayoutGrid, AlignJustify } from "lucide-react";

export default function Projects() {
  const [isStacked, setIsStacked] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("projectLayout") === "stacked";
    }
    return false; // fallback during SSR or first render
  });

  const handleToggleLayout = () => {
    const newLayout = !isStacked;
    setIsStacked(newLayout);
    localStorage.setItem("projectLayout", newLayout ? "stacked" : "grid");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.section
      className="bg-softwhite dark:bg-charcoal text-charcoal dark:text-white px-4 py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
    >
      <div className="max-w-6xl mx-auto space-y-12">
        <motion.h2
          className="text-4xl md:text-5xl font-serif font-bold text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          All Projects
        </motion.h2>

        <div className="flex justify-center">
          <Button
            onClick={handleToggleLayout}
            className="flex items-center gap-2 px-5 py-2 rounded-full font-medium bg-white dark:bg-[#1f1f1f] border-gray-300 dark:border-gray-600 text-charcoal dark:text-softwhite hover:bg-sage dark:hover:bg-sage transition-all duration-300"
          >
            {isStacked ? <LayoutGrid size={18} /> : <AlignJustify size={18} />}
            {isStacked ? "Grid View" : "Stacked View"}
          </Button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={isStacked ? "stacked" : "grid"}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`${
              isStacked
                ? "space-y-20"
                : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            }`}
          >
            {projects.map((project, index) => (
              <motion.div
                key={`${isStacked ? "stacked" : "grid"}-${project.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <ProjectCard {...project} variant="full" index={index} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  );
}
