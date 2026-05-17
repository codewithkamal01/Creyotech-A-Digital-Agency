import React from "react";
import assets from "../assets/assets";
import Title from "./Title";
import ServiceCard from "./ServiceCard";
import { motion } from "motion/react";

function Services() {
  const servicesData = [
    {
      title: "Web Development",
      desc: "We turn bold ideas into powerful digital solutions that connect, engage and inspire audiences.",
      icon: assets.ads_icon,
    },
    {
      title: "Content marketing",
      desc: "Strategic content that builds trust, improves visibility and helps brands grow online.",
      icon: assets.marketing_icon,
    },
    {
      title: "Digital Marketing",
      desc: "High quality writing crafted to communicate clearly and leave a lasting impression.",
      icon: assets.content_icon,
    },
    {
      title: "Social media",
      desc: "Creative social campaigns that increase engagement and strengthen your online presence.",
      icon: assets.social_icon,
    },
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      id="services"
      className="
        relative
        overflow-hidden
        px-4
        py-24
        text-text-primary
        dark:text-text-light
        sm:px-8
        lg:px-16
        xl:px-24
      "
    >
      {/* Background */}
      <img
        src={assets.bgImage2}
        alt=""
        className="
          absolute
          -top-72
          -left-72
          -z-10
          hidden
          opacity-70
          dark:hidden
          lg:block
        "
      />

      <div className="mx-auto max-w-6xl">
        {/* Title */}
        <div className="mb-16 flex flex-col gap-8 items-center">
          <Title
            title="How can we help?"
            desc="From strategy to execution, we craft digital solutions that move your business forward."
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Services;
