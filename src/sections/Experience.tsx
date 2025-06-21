import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import reactLogo from "../assets/logo/reactLogo.png";
import tsLogo from "../assets/logo/typescriptLogo.png";
import tailwindLogo from "../assets/logo/tailwindLogo.png";
import viteLogo from "../assets/logo/viteLogo.png";
import gitLogo from "../assets/logo/gitLogo.png";

export default function Experience() {
  return (
    <motion.section
    className="bg-white dark:bg-charcoal text-charcoal dark:text-white py-16 px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }} // animate again if re-entered
      transition={{ staggerChildren: 0.2 }}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2 className="text-3xl md:text-4xl font-serif font-bold">
            Experience & Goals
          </motion.h2>

          <motion.p className="text-lg font-sans leading-relaxed">
            I'm a frontend developer with a passion for security, clean design,
            and creating inclusive, accessible web experiences. I’m currently
            studying full-time and building real-world projects using React,
            TypeScript, and Tailwind CSS. My goal is to work with teams that
            value thoughtful interfaces, accessibility, and user trust.
          </motion.p>

          <motion.blockquote className="italic text-gray-700 border-l-4 border-sage pl-4 font-serif hover:text-slate-700 hover:translate-x-1 transition-all duration-300">
            “Design isn’t just what it looks like and feels like — design is how
            it works.”
            <span className="block mt-2 text-sm text-gray-500">
              – Steve Jobs
            </span>
          </motion.blockquote>

          <motion.div
            className="pt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, backgroundColor: "#eacfcf" }}
              className="inline-block px-6 py-2 rounded-full font-medium bg-blush text-charcoal cursor-pointer transition-all duration-200"
            >
              <Link to="/about">Learn More About Me</Link>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-6 md:justify-start"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {[reactLogo, tsLogo, tailwindLogo, viteLogo, gitLogo].map(
            (logo, idx) => (
              <motion.img
                key={idx}
                src={logo}
                alt={`Tech logo ${idx + 1}`}
                className="w-16 h-16 object-contain"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            )
          )}
        </motion.div>
      </div>
    </motion.section>
  );
}
