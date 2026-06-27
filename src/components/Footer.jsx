import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import assets from "../assets/assets";
import footerImage from "../assets/gallery/gallery8.webp";

function Footer() {
  const socialLinks = [
    {
      icon: assets.facebook_icon,
      href: "https://facebook.com",
      label: "Facebook",
    },
    {
      icon: assets.twitter_icon,
      href: "https://twitter.com",
      label: "Twitter",
    },
    {
      icon: assets.instagram_icon,
      href: "https://instagram.com",
      label: "Instagram",
    },
    {
      icon: assets.linkedin_icon,
      href: "https://linkedin.com",
      label: "LinkedIn",
    },
  ];

  const footerLinks = [
    "Privacy Policy",
    "Refund Policy",
    "Terms of Service",
    "Project Delivery Policy",
  ];

  return (
    <footer className="relative mt-15 overflow-hidden">
      {/* Fixed Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.img
          src={footerImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-[20%_40%]"
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 8, ease: "easeOut" }}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/75 backdrop-blur-[2px]" />

      {/* Content */}
      <div className="relative z-10 px-6 py-10 sm:px-10 lg:px-20 xl:px-32">
        <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <img
              src={assets.Creyotech_dark}
              alt="Creyotech"
              className="mb-6 w-32 sm:w-40 rounded-md"
              loading="lazy"
            />

            <p className="mb-8 leading-7 text-white/80">
              From strategy to execution, we craft digital solutions that
              transform ideas into impactful digital experiences and help
              businesses grow faster.
            </p>

            <div className="flex flex-wrap gap-4 text-sm text-white/70">
              {footerLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="transition hover:text-primary"
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="space-y-6 text-white/80"
          >
            <h3 className="text-xl font-semibold text-white">
              Contact Information
            </h3>

            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-primary/15 p-3 text-primary">
                <MapPin size={18} />
              </div>

              <p className="leading-7">
                Module 232, SDF Building, Sector V, Bidhannagar, Kolkata, West
                Bengal 700091
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-primary/15 p-3 text-primary">
                <Phone size={18} />
              </div>

              <a
                href="tel:+919674665053"
                className="transition hover:text-primary"
              >
                (+91) 9674665053
              </a>
            </div>

            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-primary/15 p-3 text-primary">
                <Mail size={18} />
              </div>

              <div className="flex flex-col gap-2">
                <a
                  href="mailto:hr@creyotech.com"
                  className="transition hover:text-primary"
                >
                  hr@creyotech.com
                </a>

                <a
                  href="mailto:creyotech@gmail.com"
                  className="transition hover:text-primary"
                >
                  creyotech@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="my-5 h-px bg-white/10" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-white/60">
            © 2016 - {new Date().getFullYear()} Creyotech IT Services. All
            rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {socialLinks.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
                className="
                  flex h-8 w-8 items-center justify-center
                  rounded-full border border-white/15
                  bg-white/5 backdrop-blur-md
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-primary
                  hover:bg-primary
                "
              >
                <img
                  src={item.icon}
                  alt={item.label}
                  className="w-4"
                  loading="lazy"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
