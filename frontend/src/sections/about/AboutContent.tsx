import { motion } from "framer-motion";
import AboutStory from "./AboutStory";
import AboutSkills from "./AboutSkills";

export default function AboutContent() {
  return (
    <section className="bg-offwhite dark:bg-charcoal text-charcoal dark:text-white py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12">
        {/* About Story: 3/4 */}
        <motion.div
          className="md:w-3/4"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <AboutStory />
        </motion.div>

        {/* About Skills: 1/4 */}
        <motion.div
          className="md:w-1/4"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <div
            className="h-full w-full rounded-2xl p-6 backdrop-blur-md shadow-md"
            style={{
              backgroundColor: "rgba(234, 200, 200, 0.3)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              minHeight: "100%",
            }}
          >
            <AboutSkills />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
