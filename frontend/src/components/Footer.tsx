import { Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-offwhite dark:bg-charcoal text-charcoal dark:text-white py-6 text-center text-sm font-inter border-t border-slate/10 dark:border-white/10">
      <p className="text-slate/80 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Melody Cartwright. All rights
        reserved.
      </p>

      <div className="flex justify-center gap-4 my-2">
        <a
          href="https://github.com/melodycartwright"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <Github className="w-5 h-5 text-slate/80 dark:text-white hover:text-accent dark:hover:text-sage transition" />
        </a>
        <a
          href="https://www.linkedin.com/in/melody-cartwright-5ab18a1b6"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-5 h-5 text-slate/80 dark:text-white hover:text-accent dark:hover:text-sage transition" />
        </a>
        {/* Add more icons here in future if needed */}
      </div>

      <div className="flex justify-center items-center gap-4 text-slate/80 dark:text-gray-300">
        <a
          href="/Melody-Cartwright-CV-English.pdf"
          download
          className="hover:text-accent dark:hover:text-sage transition"
        >
          CV (English)
        </a>
      </div>
      <div className="mt-4">
        <Link
          to="/contact"
          className="inline-block px-5 py-2 text-sm font-medium bg-accent text-softwhite rounded-full border border-accent hover:bg-accentHover transition"
        >
          Contact Me
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
