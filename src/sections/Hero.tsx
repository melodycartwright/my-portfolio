import { Link } from "react-router-dom";
import profileImage from "../assets/melody.jpg"; // Make sure this path is correct

export default function Hero() {
  return (
    <section className="relative bg-softwhite dark:bg-charcoal text-charcoal dark:text-white py-20 px-4">
      <div className="md:w-1/2 text-center md:text-left space-y-6">
        <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
          Hi, I’m Melody.
        </h1>

        <p className="text-lg font-sans max-w-md">
          A frontend developer focused on security, beautiful design, and
          responsive web experiences.
        </p>

        <div className="flex justify-center md:justify-start gap-4">
          <Link
            to="/about"
            className="px-6 py-2 rounded-full font-medium bg-blush text-charcoal border border-blush hover:bg-[#e9cfcf] transition-all duration-200"
          >
            Learn More
          </Link>

          <Link
            to="/projects"
            className="px-6 py-2 rounded-full font-medium bg-sage text-charcoal border border-sage hover:bg-[#cde0d8] transition-all duration-200"
          >
            View Projects
          </Link>
        </div>
      </div>

      {/* RIGHT IMAGE BLOCK */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img
          src={profileImage}
          alt="Melody Cartwright"
          className="rounded-2xl shadow-lg w-64 h-64 object-cover"
        />
      </div>
    </section>
  );
}
