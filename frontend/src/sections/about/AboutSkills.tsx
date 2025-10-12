const categories = [
  {
    title: "Core Languages",
    items: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript"],
  },
  {
    title: "Frameworks & Libraries",
    items: [
      "React",
      "React Native (Expo)",
      "Node.js",
      "Express",
      "Tailwind CSS",
      "Framer Motion",
      "Storybook",
    ],
  },
  {
    title: "Full-Stack Development",
    items: [
      "MERN Stack (MongoDB, Express, React, Node.js)",
      "Backend & Frontend linking",
      "Multi-repository project setups",
      "API integration & testing",
    ],
  },
  {
    title: "Databases & APIs",
    items: ["MongoDB", "REST APIs", "Postman (API testing & debugging)"],
  },
  {
    title: "Tools & Workflows",
    items: [
      "Git & GitHub (branching, clean commits, PR reviews)",
      "VS Code",
      "Agile / Scrum collaboration",
      "Figma (UI design & prototyping)",
      "Monorepo & npm linking (npm workspaces, local packages)",
    ],
  },
  {
    title: "Languages (Spoken)",
    items: ["English (native)", "Swedish (conversational proficiency)"],
  },

];

export default function AboutSkills() {
  return (
    <div className="text-left space-y-8">
      <h2 className="text-3xl font-serif mb-4 text-center">Skills & Tools</h2>

      {categories.map((cat, idx) => (
        <div key={idx}>
          <h3 className="text-xl font-semibold underline underline-offset-4 mb-2">
            {cat.title}
          </h3>
          <ul className="pl-4 list-disc space-y-1">
            {cat.items.map((item, i) => (
              <li key={i} className="text-base">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
