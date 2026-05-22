import React from "react";
import assets from "../assets/assets";
import { motion } from "motion/react";
import { MapPin, Phone, Mail } from "lucide-react";

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="
        mt-10
        bg-bg-soft
        px-4
        pt-14
        dark:bg-secondary
        sm:mt-18
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
            dark:text-text-light/65
          "
        >
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src={assets.Creyotech}
              className="
                w-28
                sm:w-30
              "
              alt=""
            />
          </div>

          {/* Description */}
          <p className="leading-6">
            From strategy to execution, we craft digital solutions that move
            your business forward.
          </p>

          {/* Links */}
          <ul className="flex flex-wrap gap-3  text-xs">
            <li>
              <a
                className="
                  transition-colors
                  hover:text-primary
                "
                href="#"
              >
                Privacy Policy
              </a>
            </li>

            <li>
              <a
                className="
                  transition-colors
                  hover:text-primary
                "
                href="#"
              >
                Refund Policy
              </a>
            </li>

            <li>
              <a
                className="
                  transition-colors
                  hover:text-primary
                "
                href="#"
              >
                Terms of Service
              </a>
            </li>

            <li>
              <a
                className="
                  transition-colors
                  hover:text-primary
                "
                href="#"
              >
                Project Delivery Policy
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Contact*/}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="
    max-w-sm
    space-y-4
    text-sm
    text-text-secondary
    dark:text-text-light/70
  "
        >
          {/* Address */}
          <div className="flex items-start gap-3">
            <div
              className="
        mt-1
        rounded-lg
        bg-primary/10
        p-2
        text-primary
      "
            >
              <MapPin size={16} />
            </div>

            <p className="leading-6">
              Module 232, SDF Building, Sector V, Bidhannagar, Kolkata, West
              Bengal 700091
            </p>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3">
            <div
              className="
        rounded-lg
        bg-primary/10
        p-2
        text-primary
      "
            >
              <Phone size={16} />
            </div>

            <a
              href="tel:+919674665053"
              className="transition-all hover:text-primary"
            >
              (+91) 9674665053
            </a>
          </div>

          {/* Email */}
          <div className="flex items-start gap-3">
            <div
              className="
        mt-1
        rounded-lg
        bg-primary/10
        p-2
        text-primary
      "
            >
              <Mail size={16} />
            </div>

            <div className="flex flex-col">
              <a
                href="mailto:hr@creyotech.com"
                className="transition-all hover:text-primary"
              >
                hr@creyotech.com
              </a>

              <a
                href="mailto:creyotech@gmail.com"
                className="transition-all hover:text-primary"
              >
                creyotech@gmail.com
              </a>
            </div>
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
        <p>Copyright 2026 © Creyotech It Services - All Rights Reserved.</p>

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
