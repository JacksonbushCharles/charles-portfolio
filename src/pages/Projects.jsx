import {
  FaArrowRight,
  FaChartLine,
  FaCode,
  FaMicrochip,
  FaRobot,
} from "react-icons/fa";

const projects = [
  {
    number: "01",
    category: "WEB DEVELOPMENT",
    title: "Web Projects",
    description:
      "I have helped busineses and individuals build websites, landing pages and web applications that are visually appealing, user-friendly and optimised for performance.",
    icon: <FaCode />,
    accent: "from-emerald-500/15 to-teal-500/5",
    iconColor: "text-emerald-700 dark:text-emerald-300",
    skills: ["React", "Responsive UI", "UX strategy"],
    outcome: "Make expertise simple to understand",
  },
  {
    number: "02",
    category: "AI & AUTOMATION",
    title: "Workflow Copilot",
    description:
      "A practical AI assistant concept that helps a small team organise enquiries, surface useful information and reduce repetitive admin.",
    icon: <FaRobot />,
    accent: "from-violet-500/15 to-indigo-500/5",
    iconColor: "text-violet-700 dark:text-violet-300",
    skills: ["AI integration", "Process design", "Automation"],
    outcome: "Give teams more time for meaningful work",
  },
  {
    number: "03",
    category: "IoT & SYSTEMS",
    title: "Connected Space Monitor",
    description:
      "An IoT monitoring concept that brings sensor readings into one clear dashboard, making it easier to spot changes and act early.",
    icon: <FaMicrochip />,
    accent: "from-sky-500/15 to-cyan-500/5",
    iconColor: "text-sky-700 dark:text-sky-300",
    skills: ["IoT", "Systems integration", "Data visualisation"],
    outcome: "Turn connected-device data into useful signals",
  },
  {
    number: "03",
    category: "Media",
    title: "Digital Tech Strategy",
    description:
      "I have assisted businesses and individuals in developing digital strategies that align with their goals, leveraging technology to drive growth and innovation.",
    icon: <FaMicrochip />,
    accent: "from-sky-500/15 to-cyan-500/5",
    iconColor: "text-sky-700 dark:text-sky-300",
    skills: ["SM", "SEO", "Ads", "Content Creation", "Branding"],
    outcome: "Turn connected-device data into useful signals",
  },
];

const Projects = () => (
  <section className="mx-auto w-full max-w-5xl px-2 py-8 sm:px-4 md:py-12">
    <header className="mb-8 md:mb-10">
      <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-green-700 dark:text-green-400">
        <span className="h-2 w-2 rounded-full bg-green-500" />
        Skills in action
      </p>
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
        Projects<span className="text-green-600 dark:text-green-400">.</span>
      </h1>
      <p className="max-w-2xl text-sm leading-6 text-gray-600 dark:text-gray-300 sm:text-base">
        A few ways I bring technology, strategy and creativity together to solve
        real-world challenges. These project concepts reflect the skills I’m
        excited to put to work.
      </p>
    </header>

    <div className="grid gap-4 lg:grid-cols-2">
      {projects.map((project) => (
        <article
          key={project.number}
          className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800 sm:p-6"
        >
          <div
            className={`pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-br ${project.accent}`}
          />
          <div className="relative">
            <div className="mb-5 flex items-center justify-between">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-2xl shadow-sm dark:bg-gray-700">
                <span className={project.iconColor}>{project.icon}</span>
              </span>
              <span className="font-mono text-sm text-gray-400 dark:text-gray-500">
                / {project.number}
              </span>
            </div>

            <p className="mb-2 text-[10px] font-bold tracking-[0.16em] text-green-700 dark:text-green-400">
              {project.category}
            </p>
            <h2 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
              {project.title}
            </h2>
            <p className="mb-5 text-sm leading-6 text-gray-600 dark:text-gray-300">
              {project.description}
            </p>

            <div className="mb-5 flex flex-wrap gap-2">
              {project.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 dark:bg-gray-700 dark:text-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-2 border-t border-gray-100 pt-4 text-sm font-medium text-gray-700 dark:border-gray-700 dark:text-gray-200">
              <FaChartLine className="shrink-0 text-green-600 dark:text-green-400" />
              <span>{project.outcome}</span>
              <FaArrowRight className="ml-auto shrink-0 text-xs text-gray-400 transition group-hover:translate-x-1 group-hover:text-green-600 dark:group-hover:text-green-400" />
            </div>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default Projects;
