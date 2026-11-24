const Home = () => {
  return (
    <section className="mx-auto flex w-full max-w-6xl items-center justify-center px-2 py-6 sm:px-4 sm:py-8 lg:py-12">
        <div className="charlie">
            {/* main content */}
            <div className="mx-auto max-w-4xl px-2 text-center sm:px-4">
                <h1 className="mb-4 text-3xl font-bold dark:text-white sm:text-4xl">
                Hi, I’m Charles
                </h1>
                <h3 className="mb-5 text-lg text-gray-500 dark:text-slate-400 sm:text-xl">
                  Digital Tech Strategist | Business Growth Through Technology
                  </h3>
                <p className="mb-5 text-base text-gray-600 dark:text-slate-300 sm:text-lg">
                  I help businesses turn challenges into opportunities through technology, AI, strategic thinking and digital experiences.
                </p>
                <p className="mb-5 text-base text-gray-600 dark:text-slate-300 sm:text-lg">
                  From building digital platforms and intelligent systems to improving business operations and digital visibility, I connect practical technology with real business needs.
                </p>
                <p className="mb-6 text-base text-gray-600 dark:text-slate-300 sm:text-lg">
                  I don't just build digital solutions. I build solutions that move businesses forward.
                </p>

                <a
                href="/contact"
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
                >
                Let's Work
                </a>
            </div>
        </div>
    </section>
  );
};

export default Home;
