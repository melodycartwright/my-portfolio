import type { Project } from "../types/Project";
import placeholder from "../assets/placeholder-project.jpg";

export const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "My personal portfolio built with React, TypeScript, and Tailwind.",
    image: placeholder,

    url: "#",
    tech: ["React", "TypeScript", "Tailwind"],
  },
  {
    id: 2,
    title: "Weather App",
    description: "A weather forecasting app using OpenWeather API.",
    image: placeholder,

    url: "#",
    tech: ["React", "API", "CSS"],
  },
  {
    id: 3,
    title: "E-commerce Webshop",
    description: "A fullstack webshop built with the MERN stack.",
    image: placeholder,

    url: "#",
    tech: ["MongoDB", "Express", "React", "Node.js"],
  },
];
