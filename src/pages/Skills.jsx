import {
  FaBullhorn,
  FaChartLine,
  FaCode,
  FaMicrochip,
  FaRobot,
  FaServer,
} from "react-icons/fa";

const capabilities = [
  {
    number: "01",
    title: "Digital Strategy & Business Growth",
    icon: <FaChartLine />,
    skills: [
      "Digital transformation strategy",
      "Business technology assessment",
      "Digital presence and positioning",
      "Growth opportunity identification",
      "Technology consulting",
    ],
  },
  {
    number: "02",
    title: "Web Development & Digital Experiences",
    icon: <FaCode />,
    skills: [
      "Business websites",
      "E-commerce platforms",
      "Landing pages",
      "Web applications",
      "UI/UX implementation",
      "Website optimisation",
    ],
  },
  {
    number: "03",
    title: "AI Integration & Automation",
    icon: <FaRobot />,
    skills: [
      "AI-powered business workflows",
      "Process automation",
      "AI assistants and integrations",
      "Intelligent business tools",
      "Workflow optimisation",
    ],
  },
  {
    number: "04",
    title: "Systems Engineering & IoT",
    icon: <FaMicrochip />,
    skills: [
      "IoT systems and integration",
      "Sensors and microcontrollers",
      "Industrial monitoring",
      "Networking and infrastructure",
      "Hardware and systems troubleshooting",
    ],
  },
  {
    number: "05",
    title: "Digital Marketing & Content",
    icon: <FaBullhorn />,
    skills: [
      "Social media management",
      "Digital marketing strategy",
      "Search engine optimisation",
      "Content strategy",
      "Video editing and creative production",
    ],
  },
  {
    number: "06",
    title: "IT Infrastructure & Administration",
    icon: <FaServer />,
    skills: [
      "Network administration",
      "Windows administration",
      "Server and VPS management",
      "Remote access solutions",
      "IT support and troubleshooting",
    ],
  },
];

const Skills = () => {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-3">Skills &amp; Capabilities</h2>
      <p className="mb-8 text-gray-600 dark:text-gray-300">
        Six connected capability areas, brought together through one role: Digital Tech Strategist.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        {capabilities.map(({ number, title, icon, skills }) => (
          <article
            key={number}
            className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-400 dark:bg-gray-800"
          >
            <div className="mb-4 flex items-start gap-3">
              <span className="mt-1 text-2xl text-green-700 dark:text-green-400">
                {icon}
              </span>
              <div>
                <p className="text-xs font-semibold tracking-wide text-gray-500 dark:text-gray-400">
                  {number}
                </p>
                <h3 className="font-semibold leading-snug text-gray-900 dark:text-white">
                  {title}
                </h3>
              </div>
            </div>
            <ul className="space-y-1.5 text-sm text-gray-600 dark:text-gray-300">
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Skills;
