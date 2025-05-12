// src/App.tsx
import Hero from "./sections/Hero";
import NavBar from "./sections/NavBar";
import Projects from "./sections/Projects";
import About from "./sections/About";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
    <Projects />
    <About />
    </>
  );
}

export default App;
