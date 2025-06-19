import { useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";

export default function Projects() {
  const [isStacked, setIsStacked] = useState(false); // default to grid view

  return (
    <motion.section
      className="bg-softwhite text-charcoal py-20 px-6"
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

        {/* Toggle Buttons */}
        <div className="flex justify-end gap-2">
          <button
            onClick={() => setIsStacked(false)}
            className={`px-4 py-1 border rounded-full transition ${
              !isStacked
                ? "bg-sage text-white border-sage"
                : "bg-white text-sage border-gray-300"
            }`}
          >
            Grid View
          </button>
          <button
            onClick={() => setIsStacked(true)}
            className={`px-4 py-1 border rounded-full transition ${
              isStacked
                ? "bg-sage text-white border-sage"
                : "bg-white text-sage border-gray-300"
            }`}
          >
            Stacked View
          </button>
        </div>

        <div
          className={`${
            isStacked
              ? "space-y-20" // stacked = vertical list
              : "grid md:grid-cols-2 gap-12" // grid = 2 columns
          }`}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              {...project}
              variant="full"
              index={index}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
