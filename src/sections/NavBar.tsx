function Navbar() {
  return (
    <header className="w-full bg-white shadow p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-gray-800">
          Melody Cartwright
        </a>
        <nav className="space-x-6">
          <a href="#projects" className="text-gray-600 hover:text-black">
            Projects
          </a>
          <a href="#about" className="text-gray-600 hover:text-black">
            About
          </a>
          <a href="#contact" className="text-gray-600 hover:text-black">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
