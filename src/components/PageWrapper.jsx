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
    <div className="pagewrapper h-screen flex flex-col overflow-hidden">
      {/* HEADER (STATIC) */}
      <Header />
      <div className="flex-1 min-h-0 bg-slate-200 flex items-center justify-center dark:bg-slate-900">
        <div className="w-full max-w-6xl h-full min-h-0 flex py-8">

          {/* LEFT PROFILE (STATIC) */}
          <aside className="w-1/3 self-center p-6 rounded-3xl bg-slate-100 shadow-lxg dark:bg-gray-800 dark:text-white-100">
            <div className="text-center">
              <img
                src={profileImg}
                className="w-32 h-32 mx-auto rounded-full object-cover"
                alt="profile"
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

              <div className="mt-6 text-sm space-y-2">
                <p>✉️ jacksonbushcharles@gmail.com</p>
                <p>📍 Lagos, Nigeria</p>
              </div>
            </div>
          </aside>

          {/* RIGHT SIDE */}
          <main className="w-2/3 min-h-0 min-w-0 flex flex-col">
            {/* CONTENT ROW */}
            <div className="flex flex-1 min-h-0 min-w-0">
              <div className="w-5/6 min-h-0 min-w-0 flex flex-col">
                {/* PAGE CONTENT (DYNAMIC) */}
                <section
                  ref={contentRef}
                  className="flex flex-1 min-h-0 min-w-0 flex-col overflow-y-auto p-8"
                >
                  <div className="my-auto w-full">
                    <Outlet />
                  </div>
                </section>
              </div>
              <div className="w-1/6 flex flex-col">
                {/* SIDEBAR (STATIC) */}
                <Sidebar />
              </div>
            </div>
          </main>
        </div>
      </div>
      {/* FOOTER (STATIC) */}
      <Footer />
    </div>
    
  );
};

export default PageWrapper;
