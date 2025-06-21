// sections/ContactCTA.tsx
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <motion.section
      className="bg-sage/30 dark:bg-softwhite/10 backdrop-blur-sm py-16 px-6 text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-xl mx-auto space-y-6">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold flex justify-center items-center gap-2 text-charcoal dark:text-softwhite">
          <Mail className="w-6 h-6 text-charcoal dark:text-white" />
          Let’s Connect
        </h2>

        <p className="text-base text-charcoal/80 dark:text-gray-300 font-sans">
          Interested in collaborating or hiring? I’d love to hear from you.
        </p>

        <Link
          to="/contact"
          className="inline-block px-6 py-2 text-sm font-medium bg-sage text-charcoal dark:text-charcoal rounded-full border border-sage hover:bg-[#cde0d8] transition"
        >
          Contact Me
        </Link>
      </div>
    </motion.section>
  );
}
