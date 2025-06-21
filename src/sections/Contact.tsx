import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="bg-softwhite dark:bg-charcoal text-charcoal dark:text-white py-20 px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
        Let’s Work Together
      </h2>
      <p className="text-lg max-w-2xl mx-auto text-slate-600 dark:text-slate-300 mb-8 font-sans">
        I’m open to freelance projects, part-time or full-time roles, and
        creative collaborations.
      </p>
      <Link
        to="/contact"
        className="inline-block bg-sage text-white font-semibold py-3 px-6 rounded-full hover:bg-[#cde0d8] hover:text-gray-500 transition-all duration-200"
      >
        Contact Me
      </Link>
    </section>
  );
}
