import { motion } from "framer-motion";
import aboutHero from '../../assets/videos/about-hero1.mp4'

export default function AboutHero() {
  return (
    <section className="relative w-full h-[68vh] md:h-[72vh] overflow-hidden bg-black text-white">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-48"
        src={aboutHero}
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#2f2a29]/58 dark:bg-[#1f1d21]/62 backdrop-blur-sm"></div>

      {/* Text */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-serif mb-4">About Me</h1>
        <p className="text-lg md:text-xl max-w-2xl font-light">
          Problem-first frontend developer with a MERN and web security
          foundation, focused on thoughtful and reliable user experiences.
        </p>
      </motion.div>
    </section>
  );
}
