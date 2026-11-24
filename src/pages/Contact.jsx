import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="w-full max-w-4xl mx-auto px-6 py-16 text-center">
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
