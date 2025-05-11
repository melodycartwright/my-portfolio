function Navbar() {
  return (
    <header className="w-full sticky top-0 bg-white shadow z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <a href="/" className="text-xl font-bold text-gray-800">
          Melody Cartwright
        </a>
        <nav className="hidden md:flex gap-6 text-gray-600 text-sm font-medium">
          <a href="#projects" className="hover:text-black transition">
            Projects
          </a>
          <a href="#about" className="hover:text-black transition">
            About
          </a>
          <a href="#contact" className="hover:text-black transition">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
