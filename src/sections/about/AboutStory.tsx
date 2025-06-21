import { motion } from "framer-motion";

export default function AboutStory() {
  return (
    <section className="bg-offwhite dark:bg-charcoal text-charcoal dark:text-white py-16 px-6">
      <motion.div
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-serif mb-8 text-center">
          My Story
        </h2>

        <div className="space-y-6 text-lg leading-relaxed font-sans">
          <p>
            I’m a frontend developer with a story rooted in resilience,
            creativity, and transformation.
          </p>
          <p>
            Originally from California, I moved to Sweden to support my
            grandmother and explore a life in a new environment that was apart of my heritage. Over time,
            I created my own family here, but the journey hasn’t been easy. In
            just a few short years, I experienced immense personal loss, a major
            separation, and the intense responsibility of raising two incredible
            children with special needs — all while feeling the pressure of not
            having financial freedom or a career I could truly grow in.
          </p>
          <p>
            That became the turning point. I decided to pivot toward a path that
            would not only support my family, but allow me to thrive creatively
            and intellectually. I discovered coding — and immediately threw
            myself into learning everything I could. Frontend development became
            more than just a skill; it became my outlet, my drive, and my focus
            during some of the most turbulent times of my life.
          </p>
          <p>
            What keeps me going is not just the desire to succeed and provide, but the love
            I have for building beautiful, functional experiences that people
            actually enjoy using. I’m passionate about user interfaces that feel
            good, look good, and serve a real purpose. Whether it’s a mental
            health platform, a journaling tool, or helping someone bring their
            business vision to life — I want to be part of creating things that
            uplift others and make them feel secure.
          </p>
          <p className="font-semibold italic text-center">
            If there’s one thing I’ve learned, it’s this: no matter how chaotic
            life becomes, nothing can stop me. I’ve kept going, I’ve built
            through the hardest moments, and I’m just getting started.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
