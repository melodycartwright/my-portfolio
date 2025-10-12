import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import { motion } from "framer-motion";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id.toString() === id);

  if (!project) {
    return (
      <div className="text-center py-20 text-charcoal">
        <p>Project not found.</p>
        <Link to="/projects" className="underline text-sage">
          ← Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <motion.section
      className="bg-softwhite text-charcoal py-20 px-6 relative min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-4xl mx-auto space-y-8">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover rounded-md shadow"
        />
        <h2 className="text-3xl font-serif font-bold">{project.title}</h2>

        <p className="text-lg leading-relaxed font-sans">
          {project.description}
        </p>
        {project.tech && (
          <ul className="flex flex-wrap gap-2 pt-2">
            {project.tech.map((item, index) => (
              <li
                key={index}
                className="text-xs px-2 py-1 bg-softwhite border border-gray-300 rounded-full text-gray-600"
              >
                {item}
              </li>
            ))}
          </ul>
        )}

        {project.url && (
          <div className="pt-6 text-center">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-sage border border-sage rounded-full hover:bg-sage hover:text-white transition-all duration-300"
            >
              Live Site ↗
            </a>
          </div>
        )}
      </div>

      {/* Back to Projects link positioned at bottom left */}
      <div className="absolute bottom-6 left-6">
        <Link
          to="/projects"
          className="text-sm text-sage hover:underline transition"
        >
          ← Back to Projects
        </Link>
      </div>
    </motion.section>
  );
}
