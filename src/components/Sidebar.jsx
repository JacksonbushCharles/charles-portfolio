import { NavLink } from "react-router-dom";
import { FaHome, FaUser, FaTools, FaFolderOpen, FaEnvelope } from "react-icons/fa";

const Sidebar = () => {
  const LinkAccess = ({isActive}) =>
    `flex items-center justify-center rounded-full p-3 transition-colors sm:p-4
    ${
      isActive ?
        "bg-green-800 text-white dark:text-white" : "text-black hover:text-green-800 dark:text-white dark:hover:text-green-800"
    }`;
  
  return (
    <nav aria-label="Main navigation" className="order-first w-full shrink-0 lg:order-last lg:h-full lg:w-1/6 lg:border-l">
      <ul className="flex items-center justify-center gap-1 text-[20px] sm:gap-3 lg:h-full lg:flex-col lg:gap-4 lg:text-[22px]">
        <li><NavLink to="." end aria-label="Home" title="Home" className={LinkAccess}><FaHome /></NavLink></li>
        <li><NavLink to="about" aria-label="About" title="About" className={LinkAccess}><FaUser /></NavLink></li>
        <li><NavLink to="skills" aria-label="Skills" title="Skills" className={LinkAccess}><FaTools /></NavLink></li>
        <li><NavLink to="projects" aria-label="Projects" title="Projects" className={LinkAccess}><FaFolderOpen /></NavLink></li>
        <li><NavLink to="contact" aria-label="Contact" title="Contact" className={LinkAccess}><FaEnvelope /></NavLink></li>
      </ul>
    </nav>
  );
};

export default Sidebar;
