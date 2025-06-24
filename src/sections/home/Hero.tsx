// src/sections/home/Hero.tsx

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import profileImg from "../../assets/melody.png";

export default function Hero() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-softWhite dark:bg-charcoal px-4 sm:px-8 relative overflow-hidden">
      <div className="max-w-7xl w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-12 py-20">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl font-playfair text-charcoal dark:text-white font-bold">
            Melody Cartwright
          </h1>
          <h2 className="text-xl sm:text-2xl font-inter text-muted">
            Web Developer
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
            <Link
              to="https://github.com/melodycartwright"
              className="px-5 py-2 rounded bg-blush text-white font-medium hover:bg-blush/80 transition"
            >
              GitHub
            </Link>
            <Link
              to="/contact"
              className="px-5 py-2 rounded border-2 border-blush text-blush font-medium hover:bg-blush hover:text-white transition"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex-1 flex justify-center relative">
          <img
            src={profileImg}
            alt="Melody Cartwright"
            className="w-64 h-64 rounded-full object-cover shadow-lg border-4 border-blush"
          />
        </div>
      </div>
    </section>
  );
}
