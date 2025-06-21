import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import '../components/ProjectCard.css'

export default function ProjectsPreview() {
  const previewProjects = projects.slice(0, 3); 

  return (
    <motion.section
      className="bg-softwhite dark:bg-charcoal dark:text-softwhite text-charcoal py-20 px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
    >
      <div className="max-w-6xl mx-auto text-center space-y-12">
        <motion.h2
          className="text-3xl md:text-4xl font-serif font-bold"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {previewProjects.map((project) => (
            <ProjectCard key={project.id} {...project} variant="preview" />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <motion.div
            whileHover={{ scale: 1.05, backgroundColor: "#eacfcf" }}
            className="inline-block px-6 py-2 rounded-full font-medium bg-blush text-charcoal cursor-pointer transition-all duration-200"
          >
            <Link to="/projects">See More Projects</Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}