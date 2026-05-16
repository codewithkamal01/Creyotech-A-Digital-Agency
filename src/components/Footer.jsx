import React from "react";
import assets from "../assets/assets";
import { motion } from "motion/react";

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="
        mt-20
        bg-bg-soft
        px-4
        pt-14
        dark:bg-secondary
        sm:mt-40
        sm:px-10
        lg:px-24
        xl:px-40
      "
    >
      <div
        className="
          flex
          justify-between
          gap-14
          max-lg:flex-col
          lg:items-center
        "
      >
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="
            max-w-md
            space-y-5
            text-sm
            text-text-secondary
            dark:text-white/65
          "
        >
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src={assets.logo}
              className="
                w-5
                sm:w-8
              "
              alt=""
            />

            <h1
              className="
                text-sm
                font-bold
                text-text-primary
                dark:text-text-light
                sm:text-xl
              "
            >
              Digi
              <span className="text-primary">.Agency</span>
            </h1>
          </div>

          {/* Description */}
          <p className="leading-7">
            From strategy to execution, we craft digital solutions that move
            your business forward.
          </p>

          {/* Links */}
          <ul className="flex flex-wrap gap-6">
            <li>
              <a
                className="
                  transition-colors
                  hover:text-primary
                "
                href="#home"
              >
                Home
              </a>
            </li>

            <li>
              <a
                className="
                  transition-colors
                  hover:text-primary
                "
                href="#services"
              >
                Services
              </a>
            </li>

            <li>
              <a
                className="
                  transition-colors
                  hover:text-primary
                "
                href="#our-work"
              >
                Our Work
              </a>
            </li>

            <li>
              <a
                className="
                  transition-colors
                  hover:text-primary
                "
                href="#contact-us"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="
            max-w-lg
            text-text-secondary
            dark:text-white/65
          "
        >
          <h3
            className="
              text-lg
              font-semibold
              text-text-primary
              dark:text-text-light
            "
          >
            Subscribe to our newsletter
          </h3>

          <p className="mb-6 mt-3 text-sm leading-7">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>

          {/* Input */}
          <div className="flex gap-3 max-sm:flex-col">
            <input
              type="email"
              placeholder="Enter your email"
              className="
                w-full
                rounded-xl
                border
                border-border-light
                bg-bg-light
                px-4
                py-3
                text-sm
                outline-none
                transition-all
                focus:border-primary
                dark:border-border-dark
                dark:bg-bg-dark
                dark:text-text-light
              "
            />

            <button
              className="
                rounded-xl
                bg-primary
                px-6
                py-3
                text-sm
                font-medium
                text-white
                transition-all
                hover:scale-105
                hover:shadow-lg
              "
            >
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>

      {/* Divider */}
      <hr
        className="
          my-8
          border-border-light
          dark:border-border-dark
        "
      />

      {/* Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="
          flex
          flex-wrap
          items-center
          justify-center
          gap-5
          pb-8
          text-sm
          text-muted
          sm:justify-between
        "
      >
        <p>Copyright 2026 © Kamal - All Rights Reserved.</p>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          {[
            assets.facebook_icon,
            assets.twitter_icon,
            assets.instagram_icon,
            assets.linkedin_icon,
          ].map((icon, index) => (
            <div
              key={index}
              className="
                flex
                h-10
                w-10
                cursor-pointer
                items-center
                justify-center
                rounded-full
                border
                border-border-light
                bg-bg-light
                transition-all
                hover:-translate-y-1
                hover:border-primary
                hover:bg-primary
                dark:border-border-dark
                dark:bg-bg-dark
              "
            >
              <img src={icon} alt="" className="w-4" />
            </div>
          ))}
        </div>
      </motion.div>
    </motion.footer>
  );
}

export default Footer;
