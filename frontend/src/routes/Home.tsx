import Hero from "../sections/home/Hero";

import ProjectsPreview from "../sections/home/ProjectsPreview";

import Experience from "../sections/home/Experience";
import ContactSection from "../sections/home/Contact";

export default function Home() {
  return (
    <div className="bg-softwhite dark:bg-charcoal text-charcoal dark:text-white min-h-screen">
      <Hero />

      <Experience />
      <ProjectsPreview />
      <ContactSection />
    </div>
  );
}
