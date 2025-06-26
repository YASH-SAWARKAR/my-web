const Navbar = () => (
  <nav className="flex justify-between p-4 bg-gray-900 text-white">
    <div className="text-xl font-bold">My Portfolio</div>
    <div className="space-x-4">
      <a href="#about">About</a>
      <a href="#resume">Resume</a>
      <a href="#contact">Contact</a>
    </div>
  </nav>
);
export default Navbar;
