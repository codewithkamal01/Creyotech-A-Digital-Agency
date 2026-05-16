import React from "react";
import assets from "../assets/assets";
import Title from "./Title";
import WorkCard from "./WorkCard";
import { motion } from "motion/react";

function LatestWork() {
  const worksData = [
    {
      title: "Mobile app marketing",
      desc: "We turn bold ideas into powerful digital solutions that connect users and drive engagement.",
      image: assets.work_mobile_app,
    },
    {
      title: "Dashboard management",
      desc: "Modern dashboard interfaces designed for analytics, management and better productivity.",
      image: assets.work_dashboard_management,
    },
    {
      title: "Fitness app promotion",
      desc: "Creative promotional designs that help fitness brands attract and retain users.",
      image: assets.work_fitness_app,
    },
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      id="our-work"
      className="
        px-4
        py-24
        text-gray-700
        dark:text-white
        sm:px-8
        lg:px-16
        xl:px-24
      "
    >
      <div className="mx-auto max-w-7xl">
        {/* Title */}
        <div className="mb-16 flex flex-col gap-6 items-center">
          <Title
            title="Our latest work"
            desc="Browse our portfolio of innovative digital projects that showcase creativity, performance, and results."
          />
        </div>

        {/* Work Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {worksData.map((work, index) => (
            <WorkCard key={index} work={work} index={index}/>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default LatestWork;
