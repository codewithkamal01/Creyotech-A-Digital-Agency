import React, { useState } from "react";
import assets from "../assets/assets";
import ThemeToggle from "./ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

function Navbar({ theme, setTheme }) {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.7 }}
      viewport={{ once: true }}
      className="
        sticky
        top-0
        z-50
        flex
        items-center
        justify-between
        border-b
        border-black/5
        bg-bg-light/60
        px-4
        py-4
        font-medium
        backdrop-blur-xl
        dark:border-white/10
        dark:bg-secondary/70
        sm:px-12
        lg:px-24
        xl:px-40
      "
    >
      {/* Logo */}
      <div className="flex items-center gap-1 font-bold">
        <img src={assets.logo} className="w-6 sm:w-8" alt="" />

        <h1 className="text-lg dark:text-text-light sm:text-xl">
          Digi
          <span className="text-primary">.Agency</span>
        </h1>
      </div>

      {/* Nav Links */}
      <div
        className={`
    text-text-primary
    dark:text-text-light
    sm:text-sm
    ${!sideBarOpen ? "max-sm:w-0" : "max-sm:w-60 max-sm:pl-10"}
    max-sm:overflow-hidden
    max-sm:fixed
    top-0
    bottom-0
    right-0
    max-sm:min-h-screen
    max-sm:h-full
    max-sm:flex-col
    max-sm:bg-primary
    max-sm:text-text-light
    max-sm:pt-20
    flex
    sm:items-center
    gap-5
    transition-all
  `}
      >
        {/* Mobile Close */}
        <img
          src={assets.close_icon}
          alt=""
          className="absolute right-4 top-4 w-5 sm:hidden"
          onClick={() => setSideBarOpen(false)}
        />

        {/* Home */}
        <a
          onClick={() => setSideBarOpen(false)}
          href="#"
          className="
            relative
            transition-all
            duration-300
            hover:text-primary
          "
        >
          Home
        </a>

        {/* Services Mega Menu */}
        <div
          className="relative hidden sm:block"
          onMouseEnter={() => setActiveMenu("services")}
          onMouseLeave={() => setActiveMenu(null)}
        >
          <button
            className="
              flex
              items-center
              gap-1
              transition-all
              duration-300
              hover:text-primary
            "
          >
            Services
            <ChevronDown
              size={16}
              className={`transition duration-300 ${
                activeMenu === "services" ? "rotate-180" : ""
              }`}
            />
          </button>

          <AnimatePresence>
            {activeMenu === "services" && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.98 }}
                className="
                  absolute
                  left-1/2
                  top-12
                  w-[700px]
                  -translate-x-1/2
                  rounded-3xl
                  border
                  border-black/5
                  bg-white/90
                  p-8
                  shadow-[0_20px_80px_rgba(0,0,0,0.08)]
                  backdrop-blur-2xl
                  dark:border-white/10
                  dark:bg-secondary/95
                "
              >
                <div className="grid grid-cols-3 gap-6">
                  {/* Left */}
                  <div className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-[3px] text-primary">
                      Development
                    </p>

                    {["Web Development", "Mobile Apps", "SaaS Platforms"].map(
                      (item, index) => (
                        <a
                          key={index}
                          href="#services"
                          className="
                          block
                          rounded-2xl
                          p-3
                          transition-all
                          hover:bg-primary/5
                        "
                        >
                          <h3 className="font-medium dark:text-text-light">
                            {item}
                          </h3>
                        </a>
                      ),
                    )}
                  </div>

                  {/* Middle */}
                  <div className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-[3px] text-primary">
                      Design
                    </p>

                    {["UI/UX Design", "Brand Identity", "Motion Graphics"].map(
                      (item, index) => (
                        <a
                          key={index}
                          href="#services"
                          className="
                          block
                          rounded-2xl
                          p-3
                          transition-all
                          hover:bg-primary/5
                        "
                        >
                          <h3 className="font-medium dark:text-text-light">
                            {item}
                          </h3>
                        </a>
                      ),
                    )}
                  </div>

                  {/* Right CTA */}
                  <div
                    className="
                      rounded-3xl
                      bg-primary/5
                      p-6
                      dark:bg-white/5
                    "
                  >
                    <p className="text-xs font-semibold uppercase tracking-[3px] text-primary">
                      Build Faster
                    </p>

                    <h2 className="mt-4 text-2xl font-semibold leading-tight dark:text-text-light">
                      Create premium digital experiences.
                    </h2>

                    <a
                      href="#contact-us"
                      className="
                        mt-6
                        inline-flex
                        rounded-full
                        bg-primary
                        px-5
                        py-3
                        text-sm
                        text-white
                        transition-all
                        hover:scale-105
                      "
                    >
                      Start Project
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Our Work Mega Menu */}
        <div
          className="relative hidden sm:block"
          onMouseEnter={() => setActiveMenu("work")}
          onMouseLeave={() => setActiveMenu(null)}
        >
          <button
            className="
              flex
              items-center
              gap-1
              transition-all
              duration-300
              hover:text-primary
            "
          >
            Our Work
            <ChevronDown
              size={16}
              className={`transition duration-300 ${
                activeMenu === "work" ? "rotate-180" : ""
              }`}
            />
          </button>

          <AnimatePresence>
            {activeMenu === "work" && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.98 }}
                className="
                  absolute
                  left-1/2
                  top-12
                  w-[650px]
                  -translate-x-1/2
                  rounded-3xl
                  border
                  border-black/5
                  bg-white/90
                  p-8
                  shadow-[0_20px_80px_rgba(0,0,0,0.08)]
                  backdrop-blur-2xl
                  dark:border-white/10
                  dark:bg-secondary/95
                "
              >
                <div className="grid grid-cols-2 gap-6">
                  {/* Work Links */}
                  <div className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-[3px] text-primary">
                      Portfolio
                    </p>

                    {[
                      "Case Studies",
                      "Recent Projects",
                      "Client Testimonials",
                      "Creative Showcase",
                    ].map((item, index) => (
                      <a
                        key={index}
                        href="#our-work"
                        className="
                          block
                          rounded-2xl
                          p-3
                          transition-all
                          hover:bg-primary/5
                        "
                      >
                        <h3 className="font-medium dark:text-text-light">
                          {item}
                        </h3>
                      </a>
                    ))}
                  </div>

                  {/* Featured Card */}
                  <div
                    className="
                      rounded-3xl
                      bg-gradient-to-br
                      from-primary
                      to-blue-600
                      p-6
                      text-white
                    "
                  >
                    <p className="text-xs uppercase tracking-[3px] text-white/70">
                      Featured Work
                    </p>

                    <h2 className="mt-4 text-2xl font-semibold leading-tight">
                      Helping brands grow with modern design.
                    </h2>

                    <a
                      href="#our-work"
                      className="
                        mt-6
                        inline-flex
                        rounded-full
                        bg-white
                        px-5
                        py-3
                        text-sm
                        font-medium
                        text-black
                        transition-all
                        hover:scale-105
                      "
                    >
                      View Projects
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile Links */}
        <a
          onClick={() => setSideBarOpen(false)}
          href="#services"
          className="sm:hidden"
        >
          Services
        </a>

        <a
          onClick={() => setSideBarOpen(false)}
          href="#our-work"
          className="sm:hidden"
        >
          Our Work
        </a>

        {/* Contact */}
        <a
          onClick={() => setSideBarOpen(false)}
          href="#contact-us"
          className="
            transition-all
            duration-300
            hover:text-primary
          "
        >
          Contact Us
        </a>

        {/* FAQ */}
        <a
          onClick={() => setSideBarOpen(false)}
          href="#faq"
          className="
            transition-all
            duration-300
            hover:text-primary
          "
        >
          FAQ
        </a>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-2 sm:gap-4">
        <ThemeToggle theme={theme} setTheme={setTheme} />

        {/* Mobile Menu */}
        <img
          src={theme === "dark" ? assets.menu_icon_dark : assets.menu_icon}
          alt=""
          onClick={() => setSideBarOpen(true)}
          className="w-8 sm:hidden"
        />

        {/* CTA */}
        <a
          href="#contact-us"
          className="
            hidden
            items-center
            gap-2
            rounded-full
            bg-primary
            px-6
            py-2
            text-sm
            text-text-light
            transition-all
            hover:scale-105
            sm:flex
          "
        >
          Connect
          <img src={assets.arrow_icon} width={14} alt="" />
        </a>
      </div>
    </motion.div>
  );
}

export default Navbar;
