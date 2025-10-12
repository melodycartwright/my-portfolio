import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import type { Project } from "../types/Project";
import "./ProjectCard.css";

interface ProjectCardProps extends Omit<Project, "url"> {
  /** Optional external live URL for the project */
  url?: string;
  variant?: "preview" | "full";
  index?: number;
}

// Helper function to truncate description to a specific word count
const truncateDescription = (text: string, wordLimit: number = 20): string => {
  const words = text.split(" ");
  if (words.length <= wordLimit) {
    return text;
  }
  return words.slice(0, wordLimit).join(" ") + "...";
};

export default function ProjectCard({
  id,
  title,
  description,
  image,
  url, // <-- keep and use
  tech,
  variant = "preview",
  index = 0,
}: ProjectCardProps) {
  const isPreview = variant === "preview";
  const isEven = index % 2 === 0;
  const hasUrl = Boolean(url); // marks url as read + used for UI

  const layoutClass =
    !isPreview && isEven
      ? "md:flex md:flex-row"
      : !isPreview
      ? "md:flex md:flex-row-reverse"
      : "";

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`bg-white dark:bg-[#2f2f2f] dark:text-white shadow-md rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg ${layoutClass}`}
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

              <p className="text-sm text-gray-700 dark:text-white font-sans line-clamp-4">
                {truncateDescription(description, 20)}
              </p>

              {tech && (
                <ul className="flex flex-wrap gap-2 pt-1">
                  {tech.map((item, i) => (
                    <li
                      key={i}
                      className="text-xs px-2 py-1 bg-softwhite dark:bg-[#2f2f2f] dark:text-softwhite border border-gray-300 rounded-full text-gray-600"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {hasUrl && (
              <div className="flex justify-end mt-4">
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-sage border border-sage rounded-full hover:bg-sage hover:text-white transition-all duration-300"
                  onClick={(e) => e.stopPropagation()}
                >
                  Live Site ↗
                </a>
              </div>
            )}
          </div>
        </Link>
      ) : (
        <>
          <div className="w-full md:w-1/2">
            <img src={image} alt={title} className="w-full h-64 object-cover" />
          </div>
          <div className="w-full md:w-1/2 p-6 flex flex-col justify-between space-y-4">
            <div className="space-y-4 flex-grow">
              <Link
                to={`/projects/${id}`}
                className="group text-2xl font-serif font-semibold relative inline-block w-fit"
              >
                {title}
                <span className="block h-[2px] w-0 bg-sage group-hover:w-full transition-all duration-300"></span>
              </Link>

              <p className="text-sm text-gray-700 dark:text-softwhite font-sans line-clamp-6 leading-relaxed">
                {truncateDescription(description, 20)}
              </p>

              {tech && (
                <ul className="flex flex-wrap gap-2 pt-1">
                  {tech.map((item, i) => (
                    <li
                      key={i}
                      className="text-xs px-2 py-1 bg-softwhite dark:bg-charcoal dark:text-softwhite border border-gray-300 rounded-full text-gray-600"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {hasUrl && (
              <div className="flex justify-end pt-2">
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-sage border border-sage rounded-full hover:bg-sage hover:text-white transition-all duration-300"
                >
                  Live Site ↗
                </a>
              </div>
            )}
          </div>
        </>
      )}
    </motion.div>
  );
}
