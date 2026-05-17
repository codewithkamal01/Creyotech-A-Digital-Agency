import { motion } from "motion/react";
import React from "react";

function WorkCard({ work, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="group"
    >
      {/* Image Container */}
      <div
        className="
          overflow-hidden
          rounded-2xl
          bg-primary-50
          p-4
          transition-all
          duration-300
          group-hover:-translate-y-1
          group-hover:shadow-xl
        "
      >
        <img
          src={work.image}
          alt={work.title}
          className="
            h-44
            w-full
            object-contain
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />
      </div>

      {/* Content */}
      <div className="mt-5">
        <h3 className="text-xl font-semibold text-text-primary dark:text-text-light">
          {work.title}
        </h3>

        <p className="mt-2 text-sm leading-6 text-text-secondary dark:text-text-light/70">
          {work.desc}
        </p>
      </div>
    </motion.div>
  );
}

export default WorkCard;
