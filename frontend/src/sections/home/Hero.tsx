import { motion } from "framer-motion";
import profileImg from "../../assets/profile.png";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import DiagonalPanel from "../../components/DiagonalPanel";

export default function Hero() {
  return (
    <section className="relative w-full h-[100vh] md:h-[90vh] overflow-hidden flex flex-col md:flex-row items-center bg-blush bg-opacity-10 dark:slate/80">
      {/* Dark mode overlay for softer effect */}
      <div className="hidden dark:block absolute inset-0 dark:bg-[#2f2f2f] bg-opacity-10 pointer-events-none z-0" />

      {/* Diagonal Panel Animation - only on desktop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.8 }}
        className="hidden md:block"
      >
        <DiagonalPanel />
      </motion.div>

      {/* TEXT SIDE - appears first */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full md:w-1/2 h-1/2 md:h-full bg-white/90 dark:bg-charcoal/90 md:bg-transparent md:dark:bg-transparent backdrop-blur-sm md:backdrop-blur-none flex flex-col justify-center items-center md:items-start px-6 md:px-16 py-8 md:py-0 z-30 text-charcoal text-center md:text-left order-2 md:order-1 md:relative"
      >
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-4xl md:text-5xl font-serif font-bold mb-4 text-slate dark:text-white"
        >
          Melody Cartwright
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-xl md:text-2xl font-sans mb-6 text-slate dark:text-white"
        >
          Frontend Developer & React Enthusiast
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex gap-4 justify-center md:justify-start"
        >
          <Link to="/projects">
            <Button
              variant="primary"
              className="dark:bg-slate hover:dark:bg-blush hover:dark:text-black dark:text-white"
            >
              View Projects
            </Button>
          </Link>
          <Link to="/about">
            <Button
              variant="primary"
              className="dark:bg-slate hover:dark:bg-blush hover:dark:text-black dark:text-white"
            >
              About Me
            </Button>
          </Link>
        </motion.div>
      </motion.div>

      {/* IMAGE SIDE - appears after text */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="w-full md:w-2/5 h-1/2 md:h-full z-20 flex items-center justify-center overflow-hidden order-1 md:order-2 md:absolute md:top-0 md:right-0"
      >
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          src={profileImg}
          alt="Melody Cartwright"
          className="w-64 h-64 md:w-3/4 md:h-3/4 object-cover rounded-full shadow-lg mt-4 md:mt-[27%]"
        />
      </motion.div>
    </section>
  );
}
