import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import type { Project } from "../types/Project";
import "./ProjectCard.css";

interface ProjectCardProps extends Project {
  variant?: "preview" | "full";
}

export default function ProjectCard({
  id,
  title,
  description,
  image,
  url,
  tech,
  variant = "preview",
}: ProjectCardProps) {
  const isPreview = variant === "preview";

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white shadow-md rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {isPreview ? (
        <Link to={`/projects/${id}`} className="block h-full group">
          <img src={image} alt={title} className="w-full h-48 object-cover" />
          <div className="p-6 flex flex-col h-full justify-between space-y-4">
            <div className="space-y-4 flex-grow">
              <h3 className="text-xl font-serif font-semibold relative inline-block group-hover:text-slate-800">
                {title}
                <span className="block h-[2px] w-0 bg-sage group-hover:w-full transition-all duration-300"></span>
              </h3>

              <p className="text-sm text-gray-700 font-sans">{description}</p>

              {tech && (
                <ul className="flex flex-wrap gap-2 pt-1">
                  {tech.map((item, index) => (
                    <li
                      key={index}
                      className="text-xs px-2 py-1 bg-softwhite border border-gray-300 rounded-full text-gray-600"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <span className="relative inline-block text-sm font-medium text-slate-700 mt-4">
              View Project →
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-sage transition-all duration-300 group-hover:w-full"></span>
            </span>
          </div>
        </Link>
      ) : (
        <div className="h-full">
          <img src={image} alt={title} className="w-full h-48 object-cover" />
          <div className="p-6 flex flex-col h-full justify-between space-y-4">
            <div className="space-y-4 flex-grow">
              <h3 className="text-xl font-serif font-semibold">{title}</h3>
              <p className="text-sm text-gray-700 font-sans">{description}</p>

              {tech && (
                <ul className="flex flex-wrap gap-2 pt-1">
                  {tech.map((item, index) => (
                    <li
                      key={index}
                      className="text-xs px-2 py-1 bg-softwhite border border-gray-300 rounded-full text-gray-600"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}
