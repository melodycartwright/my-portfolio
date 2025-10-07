import { motion } from "framer-motion";
import aboutHero from '../../assets/videos/about-hero1.mp4'

export default function AboutHero() {
  return (
    <section className="relative w-full h-[80vh] overflow-hidden bg-black text-white">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-60"
        src={aboutHero}
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

      {/* Text */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-serif mb-4">About Me</h1>
        <p className="text-lg md:text-xl max-w-2xl font-light">
          Turning challenges into code: a frontend developer dedicated to
          building meaningful digital experiences that uplift and inspire
        </p>
      </motion.div>
    </section>
  );
}
