import { motion } from "framer-motion";
import portrait from "../../assets/images/about-portrait.jpg";

export default function AboutStory() {
  return (
    <section className="bg-offwhite dark:bg-charcoal text-charcoal dark:text-white py-20 px-6">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-serif mb-8 text-left ml-11">
          My Story
        </h2>

        <div className="text-lg leading-relaxed font-sans">
          {/* Float Image Left */}
          <img
            src={portrait}
            alt="Melody portrait"
            className="w-56 h-49 object-cover rounded-xl shadow-md-sage md:float-left mr-6 mb-4 border-2 border-white shadow-md"
          />

          <p className="mb-4">
            I’m a frontend developer with a journey shaped by resilience,
            creativity, and transformation.
          </p>
          <p className="mb-4">
            Originally from California, I moved to Sweden to support my
            grandmother and start a new chapter in life. Along the way, I built
            a family here and navigated challenges that tested me deeply — from
            personal loss to major life changes, and the responsibility of
            raising two amazing children with special needs.
          </p>
          <p className="mb-4">
            Through it all, I found my turning point in technology. Coding
            became more than a career path — it became my outlet, my way to
            create, and my anchor during some of the most turbulent times of my
            life. It allowed me to channel my strong point of problem-solving,
            giving me the perfect balance of logic and creativity.
          </p>
          <p className="mb-4">
            What drives me today is building digital experiences that feel
            meaningful — interfaces that look good, work seamlessly, and
            actually make life better for the people using them. Whether it’s a
            journaling tool, a mental health platform, or helping a business
            bring its vision online, I’m passionate about creating projects that
            uplift and empower.
          </p>
          <p className="font-semibold italic text-center mt-8">
            If there’s one thing my journey has proven, it’s this: no matter how
            chaotic life gets, I don’t stop. I build, I learn, I adapt — and I’m
            just getting started.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
