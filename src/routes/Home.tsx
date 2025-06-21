
import Hero from "../sections/Hero";

import ProjectsPreview from "../sections/ProjectsPreview";

import Experience from "../sections/Experience";
import ContactSection from "../sections/Contact";

export default function Home() {
  return (
    <div className="bg-softwhite dark:bg-charcoal text-charcoal dark:text-white min-h-screen">
      <Hero />
      
      <Experience />
      <ProjectsPreview/>
 <ContactSection/>
      
    </div>
  );
}
