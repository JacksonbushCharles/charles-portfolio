import ThemeToggle from "./ThemeToggle";
import logo from "../assets/images/charlie_logo.png";

const Navbar = () => {
  return (
    <nav className="bg-green-900 text-white px-8 py-4 shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo / Name */}
        <div className="text-xl font-bold">
            <img src={logo} alt="Charlie.Dev" className="w-32 h-auto"/>
        </div>

        {/* Links */}
        <ul className="hidden md:flex gap-6 pr-12">
            <ThemeToggle />
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;
