import ThemeToggle from "./ThemeToggle";
import logo from "../assets/images/charlie_logo.png";

const Navbar = () => {
  return (
    <nav className="bg-green-900 px-4 py-3 text-white shadow-lg sm:px-6 sm:py-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        {/* Logo / Name */}
        <div className="text-xl font-bold">
            <img src={logo} alt="Charlie.Dev" className="w-32 h-auto"/>
        </div>

        {/* Links */}
        <ul className="flex items-center gap-3 sm:gap-6">
            <ThemeToggle />
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;
