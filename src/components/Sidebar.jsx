import { NavLink } from "react-router-dom";
import { FaHome, FaUser, FaTools, FaFolderOpen, FaEnvelope } from "react-icons/fa";

const Sidebar = () => {
  const LinkAccess = ({isActive}) =>
    `flex items-center gap-3 p-4 rounded-full transition-colors
    ${
      isActive ?
        "bg-green-800 text-white dark:text-white" : "text-black hover:text-green-800 dark:text-white dark:hover:text-green-800"
    }`;
  
  return (
    <nav className="h-full w-20 flex flex-col items-center justify-center border-l">
      {/* Links */}
      <ul className="flex flex-col gap-4 text-[22px]">
        <li><NavLink to="." end className={LinkAccess}><FaHome /></NavLink></li>
        <li><NavLink to="about" className={LinkAccess}><FaUser /></NavLink></li>
        <li><NavLink to="skills" className={LinkAccess}><FaTools /></NavLink></li>
        <li><NavLink to="projects" className={LinkAccess}><FaFolderOpen /></NavLink></li>
        <li><NavLink to="contact"className={LinkAccess}><FaEnvelope /></NavLink></li>
      </ul>
    </nav>
  );
};

export default Sidebar;
