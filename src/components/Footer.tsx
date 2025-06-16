import React from "react";
import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 text-center text-sm py-4 mt-auto">
      <p className="text-gray-600">
        {" "}
        copy; {new Date().getFullYear()} Melody Cartwright. All rights reserved.{" "}
      </p>
      <div className="flex justify-center gap-4 ,b-2">
        <a
          href=""
          target="_blank"
          rel="noopener norefferer"
          aria-label="GitHub"
        >
          <Github className="w-5 h-5 text-gray-600 hover:text-black transition" />
        </a>
        <a
          href=""
          target="_blank"
          rel="noopener norefferer"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-5 h-5 text-gray-600 hover:text-blue-600 transition" />
        </a>
      </div>
    </footer>
  );
};
export default Footer;
