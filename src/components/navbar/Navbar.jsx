import React, { useState } from "react";
import { motion } from "framer-motion";
import assets from "../../assets/assets";

import ThemeToggle from "../ThemeToggle";
import NavLinks from "./NavLinks";
import NavbarCTA from "./NavbarCTA";
import MobileSidebar from "./MobileSidebar";

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
        <img src={ theme === 'dark' ? assets.Creyotech_dark : assets.Creyotech} className="w-26 sm:w-30 rounded" alt="" />

        {/* <h1 className="text-lg dark:text-text-light sm:text-xl">
          Digi
          <span className="text-primary">.Agency</span>
        </h1> */}
      </div>

      {/* Nav Container */}
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
        {/* Desktop Nav */}
        <div className="hidden items-center gap-5 sm:flex">
          <a
            href="#home"
            className="
        transition-all
        duration-300
        hover:text-primary
      "
          >
            Home
          </a>

          <NavLinks activeMenu={activeMenu} setActiveMenu={setActiveMenu} />

          <a
            href="#about-us"
            className="
        transition-all
        duration-300
        hover:text-primary
      "
          >
            About Us
          </a>

          <a
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

        {/* Mobile Nav */}
        <div className="flex flex-col gap-5 sm:hidden">
          <MobileSidebar
            sideBarOpen={sideBarOpen}
            setSideBarOpen={setSideBarOpen}
          />
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-2 sm:gap-4">
        <ThemeToggle theme={theme} setTheme={setTheme} />

        <img
          src={theme === "dark" ? assets.menu_icon_dark : assets.menu_icon}
          alt=""
          onClick={() => setSideBarOpen(true)}
          className="w-8 sm:hidden"
        />

        <NavbarCTA />
      </div>
    </motion.div>
  );
}

export default Navbar;
