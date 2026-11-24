import profile from "../assets/images/charlie_profile.jpg"

const Home = () => {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-16 flex items-center justify-center">
        <div className="charlie">
            {/* main content */}
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h1 className="text-4xl font-bold mb-4 dark:text-white">
                Hi, I’m Charles
                </h1>
                <h3 className="text-xl text-gray-400 mb-6 dark:text-slate-400">
                  Digital Tech Strategist | Business Growth Through Technology
                  </h3>
                <p className="text-xl text-gray-600 mb-6 dark:text-slate-500">
                  I help businesses turn challenges into opportunities through technology, AI, strategic thinking and digital experiences.
                </p>
                <p className="text-xl text-gray-600 mb-6 dark:text-slate-500">
                  From building digital platforms and intelligent systems to improving business operations and digital visibility, I connect practical technology with real business needs.
                </p>
                <p className="text-xl text-gray-600 mb-6 dark:text-slate-500">
                  I don't just build digital solutions. I build solutions that move businesses forward.
                </p>

                <a
                href="/contact"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
                >
                Let's Work
                </a>
            </div>
        </div>
    </section>
  );
};

export default Home;
