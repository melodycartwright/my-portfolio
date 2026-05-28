import { motion } from "framer-motion";
import profileImg from "../../assets/profile.png";
import { Link } from "react-router-dom";
import Button from "../../components/Button";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#ebe2dc] dark:bg-[#2f2a29]">

      {/* Desktop and up: true diagonal zones */}
      <div className="hidden lg:block relative h-[88vh] min-h-[560px] max-h-[760px]">
        <div className="absolute inset-0 z-10 pointer-events-none bg-[#ebe2dc]" />
        <motion.div
          initial={{ x: "-35%", opacity: 0.9 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0 z-20 bg-[#d9b8af] dark:bg-[#6f5a52]"
          style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
        />

        <div
          className="absolute inset-0 z-30"
          style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="h-full flex flex-col justify-start pt-16 lg:pt-20 pl-12 lg:pl-16 xl:pl-20 pr-10"
          >
            <h1 className="text-5xl lg:text-6xl xl:text-7xl leading-[0.95] font-serif font-bold mb-4 text-slate dark:text-white max-w-[560px]">
              Melody Cartwright
            </h1>
            <h2 className="text-2xl lg:text-[1.6rem] font-sans mb-3 text-slate dark:text-white max-w-[560px] leading-tight">
              Problem-first Frontend Developer with a MERN & Web Security foundation
            </h2>
            <p className="text-base lg:text-lg font-sans mb-7 text-slate/90 dark:text-white/90 tracking-[0.02em]">
              React • Next.js • TypeScript
            </p>
            <div className="flex gap-4">
              <Link to="/projects">
                <Button
                  variant="primary"
                  className="border-accent bg-accent text-softwhite shadow-[0_4px_14px_rgba(122,62,86,0.25)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-accentHover hover:shadow-[0_8px_20px_rgba(100,51,71,0.30)] active:translate-y-0 active:shadow-sm dark:border-accent/80 dark:bg-accent dark:text-softwhite dark:shadow-[0_4px_14px_rgba(0,0,0,0.35)] dark:hover:bg-accentHover dark:hover:shadow-[0_8px_22px_rgba(0,0,0,0.45)]"
                >
                  View My Work
                </Button>
              </Link>
              <Link to="/about">
                <Button
                  variant="secondary"
                  className="border-blush/80 bg-offwhite text-accent shadow-[0_3px_10px_rgba(80,52,63,0.12)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-accent/40 hover:bg-blushHover/45 hover:text-accent hover:shadow-[0_8px_18px_rgba(80,52,63,0.18)] active:translate-y-0 active:shadow-sm dark:border-softwhite/35 dark:bg-softwhite/12 dark:text-softwhite dark:shadow-[0_3px_10px_rgba(0,0,0,0.3)] dark:hover:border-accentSoft/70 dark:hover:bg-softwhite/18 dark:hover:text-softwhite dark:hover:shadow-[0_8px_18px_rgba(0,0,0,0.42)]"
                >
                  About Me
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        <div
          className="absolute inset-0 z-30"
          style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="h-full flex items-end justify-end pr-8 lg:pr-12 pb-12 lg:pb-16"
          >
            <img
              src={profileImg}
              alt="Melody Cartwright"
              className="w-[28vw] max-w-[360px] min-w-[240px] aspect-square object-cover rounded-full shadow-xl"
            />
          </motion.div>
        </div>
      </div>

      {/* Mobile: stacked fallback */}
      <div className="lg:hidden w-full">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="bg-[#d9b8af]/92 dark:bg-[#6f5a52] px-6 py-14 text-center"
        >
          <h1 className="text-4xl leading-[0.95] font-serif font-bold mb-4 text-slate dark:text-white">
            Melody Cartwright
          </h1>
          <h2 className="text-xl font-sans mb-2 text-slate dark:text-white leading-snug">
            Problem-first Frontend Developer with a MERN & Web Security foundation
          </h2>
          <p className="text-sm sm:text-base font-sans mb-6 text-slate/90 dark:text-white/90 tracking-[0.02em]">
            React • Next.js • TypeScript
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/projects">
              <Button
                variant="primary"
                className="border-accent bg-accent text-softwhite shadow-[0_4px_14px_rgba(122,62,86,0.25)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-accentHover hover:shadow-[0_8px_20px_rgba(100,51,71,0.30)] active:translate-y-0 active:shadow-sm dark:border-accent/80 dark:bg-accent dark:text-softwhite dark:shadow-[0_4px_14px_rgba(0,0,0,0.35)] dark:hover:bg-accentHover dark:hover:shadow-[0_8px_22px_rgba(0,0,0,0.45)]"
              >
                View My Work
              </Button>
            </Link>
            <Link to="/about">
              <Button
                variant="secondary"
                className="border-blush/80 bg-offwhite text-accent shadow-[0_3px_10px_rgba(80,52,63,0.12)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-accent/40 hover:bg-blushHover/45 hover:text-accent hover:shadow-[0_8px_18px_rgba(80,52,63,0.18)] active:translate-y-0 active:shadow-sm dark:border-softwhite/35 dark:bg-softwhite/12 dark:text-softwhite dark:shadow-[0_3px_10px_rgba(0,0,0,0.3)] dark:hover:border-accentSoft/70 dark:hover:bg-softwhite/18 dark:hover:text-softwhite dark:hover:shadow-[0_8px_18px_rgba(0,0,0,0.42)]"
              >
                About Me
              </Button>
            </Link>
          </div>
        </motion.div>
        <div className="bg-[#ebe2dc] dark:bg-[#2f2a29] flex items-center justify-center px-6 py-12">
          <img
            src={profileImg}
            alt="Melody Cartwright"
            className="w-64 h-64 aspect-square object-cover rounded-full shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
