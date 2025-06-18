
import Hero from "../sections/Hero";

import ProjectsPreview from "../sections/ProjectsPreview";
import Contact from "../sections/Contact";
import Experience from "../sections/Experience";

export default function Home() {
  return (
    <>
      <Hero />
      
      <Experience />
      <ProjectsPreview/>
  
      <Contact />
    </>
  );
}
