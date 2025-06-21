import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import profileImage from "../../assets/melody.jpg";

export default function Hero() {
  return (
    <section className="relative bg-softwhite dark:bg-charcoal text-charcoal dark:text-white py-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">
        {/* LEFT TEXT BLOCK */}
        <motion.div
          className="md:w-1/2 text-center md:text-left space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
            Hi, I’m Melody.
          </h1>

          <p className="text-lg font-sans max-w-md mx-auto md:mx-0">
            A frontend developer focused on security, beautiful design, and
            responsive web experiences.
          </p>

          <div className="flex justify-center md:justify-start gap-4">
            <Link
              to="/about"
              className="px-6 py-2 rounded-full font-medium bg-blush text-charcoal border border-blush hover:bg-[#e9cfcf] transition-all duration-200"
            >
              Learn More
            </Link>

            <Link
              to="/projects"
              className="px-6 py-2 rounded-full font-medium bg-sage text-charcoal border border-sage hover:bg-[#cde0d8] transition-all duration-200"
            >
              View Projects
            </Link>
          </div>
        </motion.div>

        {/* RIGHT IMAGE BLOCK */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <img
            src={profileImage}
            alt="Melody Cartwright"
            className="rounded-2xl shadow-lg w-full max-w-xs object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
