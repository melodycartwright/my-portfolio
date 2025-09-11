const categories = [
  {
    title: "Languages (Coding)",
    items: ["HTML5", "CSS3", "JavaScript", "TypeScript"],
  },
  {
    title: "Frameworks & Libraries",
    items: ["React", "Node.js", "Express", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Tools",
    items: ["Git & GitHub", "VS Code", "Postman", "Figma", "MongoDB"],
  },
  {
    title: "Languages (Spoken)",
    items: ["English (native)", "Swedish (professional working)"],
  },
  {
    title: "Fun Facts & Hobbies",
    items: [
      "I walk 15–20k steps every day",
      "I love frontend + cybersecurity",
      "I’m a mom of 2 neurodivergent kids",
      "I rockclimb and Boulder on my freetime",
      "I love animals and have a special bond with them",
      "I love nature",
      "I am a hobby collector",
    ],
  },
];

export default function AboutSkillsInner() {
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
