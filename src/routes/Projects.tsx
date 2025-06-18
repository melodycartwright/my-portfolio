import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";

export default function Projects() {
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

        <div className="space-y-20">
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
