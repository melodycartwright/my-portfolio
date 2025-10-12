import { motion } from "framer-motion";
import profileImg from "../../assets/profile.png";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import DiagonalPanel from "../../components/DiagonalPanel";

export default function Hero() {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden flex items-center bg-blush bg-opacity-10 dark:slate/80">
      {/* Dark mode overlay for softer effect */}
      <div className="hidden dark:block absolute inset-0 dark:bg-[#2f2f2f] bg-opacity-10 pointer-events-none z-0" />
      {/* Diagonal Panel Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <DiagonalPanel />
      </motion.div>

      {/* IMAGE SIDE (fills right/larger space) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1.2 }}
        className="absolute top-0 right-0 w-full md:w-2/5 h-2/3 md:h-full z-20 flex items-center justify-center overflow-hidden"
      >
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.6 }}
          src={profileImg}
          alt="Melody Cartwright"
          className="w-3/4 h-3/4 md:w-3/4 md:h-3/4 object-cover rounded-full shadow-lg mt-[10%] md:mt-[27%]"
        />
      </motion.div>

      {/* TEXT SIDE (fade in after panel) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 2 }}
        className="absolute top-3/4 left-4 right-4 md:relative md:top-auto md:left-auto md:right-auto md:transform-none md:w-1/2 md:h-full bg-white/90 dark:bg-charcoal/90 md:bg-transparent md:dark:bg-transparent backdrop-blur-sm md:backdrop-blur-none flex flex-col justify-center items-center md:items-start px-6 md:px-16 py-8 md:py-0 z-30 text-charcoal text-center md:text-left rounded-xl md:rounded-none"
        style={{ position: "absolute" }}
      >
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-slate dark:text-white">
          Melody Cartwright
        </h1>
        <h2 className="text-xl md:text-2xl font-sans mb-6 text-slate dark:text-white">
          Frontend Developer & React Enthusiast
        </h2>
        <div className="flex gap-4 justify-center md:justify-start">
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
        </div>
      </motion.div>
    </section>
  );
}
