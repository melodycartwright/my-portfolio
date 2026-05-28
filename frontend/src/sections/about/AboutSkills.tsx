const categories = [
  {
    title: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "React Native",
    ],
  },
  {
    title: "CMS & Data",
    items: ["Sanity CMS", "GROQ", "Zod", "REST APIs"],
  },
  {
    title: "Backend Foundation",
    items: [
      "Node.js",
      "Express",
      "MongoDB",
      "MERN Stack",
      "Authentication",
      "Web Security",
    ],
  },
  {
    title: "Tools & Workflow",
    items: [
      "Git & GitHub",
      "VS Code",
      "Figma",
      "Agile / Scrum",
      "AI-assisted development",
      "Debugging",
    ],
  },
  {
    title: "Additional",
    items: ["Accessibility", "Responsive Design", "UI/UX Principles"],
  },
];

export default function AboutSkills() {
  return (
    <div className="text-left space-y-6">
      <h2 className="text-3xl font-serif mb-2 text-center">Skills & Tools</h2>

      {categories.map((cat, idx) => (
        <div key={idx}>
          <h3 className="text-lg font-semibold mb-2 text-accent dark:text-accentSoft">
            {cat.title}
          </h3>
          <ul className="pl-4 list-disc space-y-1 text-sm leading-relaxed">
            {cat.items.map((item, i) => (
              <li key={i}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
