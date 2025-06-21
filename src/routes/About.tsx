import AboutHero from "../sections/about/AboutHero";
import AboutStory from "../sections/about/AboutStory";
//import AboutSkills from "../sections/AboutSkills";
//import AboutLinks from "../sections/AboutLinks";

export default function About() {
  return (
    <div className="bg-softwhite dark:bg-charcoal text-charcoal dark:text-white">
      <AboutHero />
      <AboutStory />
      {/*<AboutSkills />*/}
      {/*<AboutLinks />*/}
    </div>
  );
}
