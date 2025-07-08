import { motion } from "framer-motion";
import profileImg from "../../assets/profile.png";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center">
  
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
        className="w-full md:w-1/2 h-full bg-softwhite flex flex-col justify-center px-6 md:px-16 z-10 clip-left-diagonal text-charcoal"
      >
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
          Melody Cartwright
        </h1>
        <h2 className="text-xl md:text-2xl font-sans mb-6">
          Frontend Developer & React Enthusiast
        </h2>
        <div className="flex gap-4">
          <Link to="/projects">
            <button className="px-5 py-2 rounded-2xl border border-charcoal bg-softwhite hover:bg-charcoal hover:text-softwhite transition-all">
              View Projects
            </button>
          </Link>
          <Link to="/about">
            <button className="px-5 py-2 rounded-2xl border border-charcoal bg-softwhite hover:bg-charcoal hover:text-softwhite transition-all">
              About Me
            </button>
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial={{
          clipPath: "polygon(100% 100%, 100% 0%, 100% 0%, 100% 100%)",
        }}
        animate={{
          clipPath: "polygon(0 100%, 45% 0, 100% 0, 100% 100%)",
        }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-blush z-0 overflow-hidden"
      >
        <img
          src={profileImg}
          alt="Melody Cartwright"
          className="w-full h-full object-cover mix-blend-multiply"
        />
      </motion.div>
    </section>
  );
}
