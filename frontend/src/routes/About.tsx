import AboutHero from "../sections/about/AboutHero";
//import AboutStory from "../sections/about/AboutStory";
//import AboutSkills from "../sections/about/AboutSkills";
import AboutContent from "../sections/about/AboutContent";
import AboutLinks from "../sections/about/AboutLinks";

export default function About() {
  return (
    <div className="bg-softwhite dark:bg-charcoal text-charcoal dark:text-white">
      <AboutHero />

      <AboutContent />
      <AboutLinks />
    </div>
  );
}
