import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import profileImg from "../assets/images/charlie_profile.jpg";

const Contact = () => {
  return (
    <section className="mx-auto w-full max-w-4xl px-2 py-6 text-center sm:px-4 sm:py-8 lg:py-12">
      
                  <div className="text-center">
                    <p className="text-sm text-gray-500 dark:text-white">Digital Tech Strategist</p>
                    <p className="text-sm text-gray-500 dark:text-white">Talk business. Think technology. Deliver growth.</p>
      
                    <div className="mt-6 space-y-2 text-sm">
                      <p>✉️ jacksonbushcharles@gmail.com</p>
                      <p>📍 Lagos, Nigeria</p>
                    </div>
                  </div>
      
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <p className="mb-6 text-gray-600">
        Feel free to reach out for collaborations or opportunities.
      </p>

      <div className="flex justify-center gap-6 text-3xl">
        <a href="https://github.com/JacksonbushCharles" className="hover:text-blue-600"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/charles-samuel-okoroafor/" className="hover:text-blue-600"><FaLinkedin /></a>
        <a href="https://wa.me/2347014411221?text=Hello+Charles+I+will+like+to+discuss+a+project" className="hover:text-blue-600"><FaWhatsapp /></a>
      </div>
    </section>
  );
};

export default Contact;
