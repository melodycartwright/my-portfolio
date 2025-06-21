import { Routes, Route } from "react-router-dom";
import Navbar from "./sections/NavBar";
import Home from "./routes/Home";
import About from "./routes/About";
import Projects from "./routes/Projects";
import Contact from "./routes/Contact";
import Footer from "./components/Footer";
import ProjectDetail from "./routes/ProjectDetail";
import ContactForm from "./components/ContactForm";
export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/ContactForm" element={<ContactForm />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
