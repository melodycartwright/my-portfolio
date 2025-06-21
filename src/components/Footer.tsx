
import { Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="bg-sage dark:bg-charcoal text-charcoal dark:text-white py-6 text-center text-sm font-inter">
      <p className="text-gray-600 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Melody Cartwright. All rights
        reserved.
      </p>

      <div className="flex justify-center gap-4 my-2">
        <a
          href="https://github.com/your-username"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <Github className="w-5 h-5 text-gray-600 dark:text-white hover:text-black dark:hover:text-sage transition" />
        </a>
        <a
          href="https://linkedin.com/in/your-linkedin"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-5 h-5 text-gray-600 dark:text-white hover:text-blue-600 dark:hover:text-sage transition" />
        </a>
        {/* Add more icons here in future if needed */}
      </div>

      <div className="flex justify-center items-center gap-4 text-gray-500 hover:text-gray dark:text-gray-300">
        <a
          href="/Melody-Cartwright-CV-English.pdf"
          download
          className="hover:text-white dark:hover:text-white transition"
        >
          CV (English)
        </a>
        <span>|</span>
        <a
          href="/Melody-Cartwright-CV-Svenska.pdf"
          download
          className="hover:text-white dark:hover:text-white transition"
        >
          CV (Svenska)
        </a>
      </div>
      <div className="mt-4">
        <Link
          to="/contact"
          className="inline-block px-5 py-2 text-sm font-medium bg-sage text-charcoal rounded-full border border-sage hover:bg-[#cde0d8] transition"
        >
          Contact Me
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
