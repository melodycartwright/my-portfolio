import type { Project } from "../types/Project";
import placeholder from "../assets/placeholder-project.jpg";
import chatify from "../assets/chatify.png"
import weather from "../assets/ReactWeatherApp.png"

export const projects: Project[] = [
  {
    id: 1,
    title: "Chatify Client",
    description:
      "Chatify Client is a modern React chat application that features real-time messaging, secure authentication, user profile management, and dynamic conversation handling. Built with best practices in mind, it uses React Context for state management, Axios for API integration, and DOMPurify for security. The project demonstrates advanced frontend skills, including modular architecture, responsive UI, error handling with Sentry, and clean code organization—making it an ideal showcase of professional web development expertise.",
    image: chatify,

    url: "https://chatifyclient.netlify.app/login",
    tech: [
      "React",
      "Axios",
      "Vite",
      "DOMPurify",
      "Sentry",
      "CSS modules",
      "JavaScript (ES6+)",
      "React Context",
    ],
  },
  {
    id: 2,
    title: "Weather App",
    description: "A weather forecasting app using OpenWeather API.",
    image: weather,

    url: "https://weatherbymel.netlify.app/",
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
