import { useEffect, useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects() {
  const [isStacked, setIsStacked] = useState(false);

  // Load layout preference from localStorage
  useEffect(() => {
    const savedLayout = localStorage.getItem("projectLayout");
    if (savedLayout === "stacked") {
      setIsStacked(true);
    } else {
      setIsStacked(false);
    }
  }, []);

  // Save layout to localStorage
  const handleToggleLayout = () => {
    const newLayout = !isStacked;
    setIsStacked(newLayout);
    localStorage.setItem("projectLayout", newLayout ? "stacked" : "grid");
  };

  return (
    <motion.section
      className="bg-softwhite text-charcoal py-20 px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
    >
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <motion.h2
          className="text-4xl md:text-5xl font-serif font-bold text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          All Projects
        </motion.h2>

        {/* Toggle button for layout */}
        <div className="flex justify-center">
          <button
            onClick={handleToggleLayout}
            className="px-4 py-2 rounded-full bg-blush text-charcoal font-medium hover:bg-sage transition duration-300"
          >
            Switch to {isStacked ? "Grid" : "Stacked"} View
          </button>
        </div>

        {/* Project Cards */}
        <div
          className={
            isStacked ? "space-y-20" : "grid grid-cols-1 md:grid-cols-2 gap-12"
          }
        >
          <AnimatePresence mode="wait">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{
                  opacity: 0,
                  x: isStacked ? -40 : 0,
                  y: isStacked ? 0 : 40,
                }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                exit={{
                  opacity: 0,
                  x: isStacked ? 40 : 0,
                  y: isStacked ? 0 : -40,
                }}
                transition={{ duration: 0.5 }}
              >
                <ProjectCard {...project} variant="full" index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
}
