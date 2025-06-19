
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      
        <Link to="/" className="text-2xl font-bold font-playfair text-charcoal">
          Melody.dev
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6 text-sm font-inter text-charcoal">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "underline" : "hover:underline"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "underline" : "hover:underline"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? "underline" : "hover:underline"
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "underline" : "hover:underline"
            }
          >
            Contact
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
