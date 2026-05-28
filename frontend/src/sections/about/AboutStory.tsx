import { motion } from "framer-motion";
import portrait from "../../assets/images/about-portrait.jpg";

export default function AboutStory() {
  return (
    <div className="text-charcoal dark:text-white">
      <motion.div
        className="max-w-4xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-serif mb-8 text-left">
          About Me
        </h2>

        <div className="text-lg leading-relaxed font-sans">
          {/* Float Image Left */}
          <img
            src={portrait}
            alt="Melody portrait"
            className="w-56 h-49 object-cover rounded-xl shadow-md-sage md:float-left mr-6 mb-4 border-2 border-white shadow-md"
          />

          <p className="mb-4">
            I’m a frontend developer based in Stockholm, with hands-on
            experience building and improving modern web applications using
            React, Next.js, TypeScript and Tailwind CSS.
          </p>
          <p className="mb-4">
            My recent experience at NoA Ignite gave me the opportunity to
            contribute to a production e-commerce platform across multiple
            storefronts, including Intersport, Sport1 and Löplabbet. I worked
            with CMS-driven frontend features using Sanity, GROQ and Zod,
            following the flow from content modeling and data fetching to
            validation, types and React rendering.
          </p>
          <p className="mb-4">
            What I enjoy most about development is understanding how systems
            connect. I like tracing problems from the source, asking where the
            issue exists, what is affected, and what solution will be the most
            maintainable. That problem-first mindset has helped me become
            stronger at debugging and working in larger codebases.
          </p>
          <p className="mb-4">
            I also have a MERN stack foundation from my education, with
            experience in Node.js, Express, MongoDB, REST APIs, authentication
            and web security. Frontend is where I see my strongest direction,
            but understanding backend logic helps me build with more clarity and
            collaborate better across the product.
          </p>
          <p className="mb-4">
            I care about writing clean, understandable code, communicating
            clearly, and building digital experiences that are useful,
            accessible and thoughtful. I’m still early in my career, but I’m
            driven, curious and serious about growing into a strong developer.
          </p>
          <p className="font-semibold italic text-center mt-8">
            "I build by understanding the problem first - then finding the
            simplest solution that works well and lasts."
          </p>
        </div>
      </motion.div>
    </div>
  );
}
