import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineDocumentDownload } from "react-icons/hi";

const links = [
    
  {
    label: "GitHub",
    url: "https://github.com/melodycartwright",
    icon: <FaGithub />,
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/melody-cartwright-5ab18a1b6",
    icon: <FaLinkedin />,
  },
  {
    label: "Download CV (English)",
    url: "/cv-english.pdf",
    icon: <HiOutlineDocumentDownload />,
    download: true,
  },
  {
    label: "Download CV (Swedish)",
    url: "/cv-swedish.pdf",
    icon: <HiOutlineDocumentDownload />,
    download: true,
  },
];

export default function AboutLinks() {
  return (
    <section className="py-16 px-6 text-center bg-offwhite dark:bg-charcoal text-charcoal dark:text-white">
      <motion.div
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-serif mb-10">
          Connect & Download
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          {links.map((link, idx) => (
            <motion.a
              key={idx}
              href={link.url}
              download={link.download}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="flex items-center gap-2 px-5 py-3 border border-charcoal dark:border-white rounded-full text-base font-medium transition hover:scale-105 hover:bg-charcoal hover:text-white dark:hover:bg-white dark:hover:text-charcoal"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {link.icon}
              <span className="hidden sm:inline">{link.label}</span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
