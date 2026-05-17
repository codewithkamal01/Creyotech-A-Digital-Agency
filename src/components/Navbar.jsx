import React, { useState } from "react";
import assets from "../assets/assets";
import ThemeToggle from "./ThemeToggle";
import { motion } from "motion/react";

function Navbar({ theme, setTheme }) {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.7 }}
      viewport={{ once: true }}
      className="flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-bg-light/50 dark:bg-secondary/70"
    >
      <div className="flex items-center gap-1 font-bold">
        <img src={assets.logo} className="w-6 sm:w-8 fill-primary" alt="" />
        <h1 className="sm:text-xl text-lg dark:text-text-light">
          Digi
          <span className="text-primary dark:text-primary">.Agency</span>{" "}
        </h1>
      </div>

      <div
        className={`text-text-primary dark:text-text-light sm:text-sm ${!sideBarOpen ? "max-sm:w-0 overflow-hidden" : "max-sm:w-60 max-sm:pl-10"} max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-primary max-sm:text-text-light max-sm:pt-20 flex sm:items-center gap-5 transition-all`}
      >
        <img
          src={assets.close_icon}
          alt=""
          className="w-5 absolute right-4 top-4 sm:hidden"
          onClick={() => setSideBarOpen(false)}
        />

        <a
          onClick={() => setSideBarOpen(false)}
          href="#"
          className="sm:hover:border-b"
        >
          Home
        </a>
        <a
          onClick={() => setSideBarOpen(false)}
          href="#services"
          className="sm:hover:border-b"
        >
          Services
        </a>
        <a
          onClick={() => setSideBarOpen(false)}
          href="#our-work"
          className="sm:hover:border-b"
        >
          Our Work
        </a>
        <a
          onClick={() => setSideBarOpen(false)}
          href="#contact-us"
          className="sm:hover:border-b"
        >
          Contact Us
        </a>
        <a
          onClick={() => setSideBarOpen(false)}
          href="#faq"
          className="sm:hover:border-b"
        >
          FAQ
        </a>
      </div>
      <div className="flex items-center gap-2 sm:gap-4">
        <ThemeToggle theme={theme} setTheme={setTheme} />

        <img
          src={theme === "dark" ? assets.menu_icon_dark : assets.menu_icon}
          alt=""
          onClick={() => setSideBarOpen(true)}
          className="w-8 sm:hidden"
        />

        <a
          href="#contact-us"
          className="text-sm max-sm:hidden flex items-center gap-2 bg-primary text-text-light px-6 py-2 rounded-full cursor-pointer hover:scale-103 transition-all"
        >
          Connect
          <img src={assets.arrow_icon} width={14} alt="" />
        </a>
      </div>
    </motion.div>
  );
}

export default Navbar;
