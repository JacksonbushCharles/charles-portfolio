import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import profileImg from "../assets/images/charlie_profile.jpg";

const PageWrapper = () => {
  const contentRef = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    contentRef.current?.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="pagewrapper flex min-h-screen flex-col lg:h-screen lg:overflow-hidden">
      <Header />
      <div className="flex-1 bg-slate-200 dark:bg-slate-900 lg:min-h-0">
        <div className="mx-auto flex w-full max-w-6xl flex-col px-4 py-5 sm:px-6 sm:py-6 lg:h-full lg:min-h-0 lg:flex-row lg:items-center lg:py-8">
          <header className="mb-5 flex shrink-0 items-center justify-center gap-4 py-2 sm:mb-6 lg:hidden">
            <img
              src={profileImg}
              className="h-16 w-16 rounded-full object-cover sm:h-20 sm:w-20"
              alt="Charles S. Okoroafor"
            />
            <h1 className="text-xl font-bold text-gray-900 dark:text-white sm:text-2xl">
              Charles S. Okoroafor
            </h1>
          </header>

          <aside className="hidden w-1/3 self-center rounded-3xl bg-slate-100 p-6 shadow-lg dark:bg-gray-800 lg:block">
            <div className="text-center">
              <img
                src={profileImg}
                className="mx-auto h-32 w-32 rounded-full object-cover"
                alt="Charles S. Okoroafor"
              />
              <h2 className="mt-4 text-xl font-semibold">Charles S. Okoroafor</h2>
              <p className="text-sm text-gray-500 dark:text-white">Digital Tech Strategist</p>
              <p className="text-sm text-gray-500 dark:text-white">Talk business. Think technology. Deliver growth.</p>

              <div className="mt-6 flex justify-center gap-5">
                <a
                  href="https://www.linkedin.com/in/charles-samuel-okoroafor/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-2xl text-gray-600 hover:text-green-500"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/JacksonbushCharles"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-2xl text-gray-600 hover:text-green-500"
                >
                  <FaGithub />
                </a>
              </div>

              <div className="mt-6 space-y-2 text-sm">
                <p>✉️ jacksonbushcharles@gmail.com</p>
                <p>📍 Lagos, Nigeria</p>
              </div>
            </div>
          </aside>

          <div className="flex min-w-0 flex-col gap-4 lg:h-full lg:min-h-0 lg:flex-1 lg:flex-row lg:gap-0">
            <Sidebar />
            <main className="order-last min-w-0 flex-1 lg:order-first lg:min-h-0 lg:w-5/6">
              <section
                ref={contentRef}
                className="min-w-0 lg:flex lg:h-full lg:min-h-0 lg:flex-col lg:overflow-y-auto lg:pr-6"
              >
                <div className="my-auto w-full">
                  <Outlet />
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PageWrapper;
