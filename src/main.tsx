import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Hero from "./components/Hero.tsx";
import NavBar from "./components/NavBar.tsx";
import "./index.css"; // 👈 Tailwind MUST be imported here


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <Hero/>
    <NavBar />
    
  </React.StrictMode>
);
