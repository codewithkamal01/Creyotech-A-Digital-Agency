import React from "react";
import { motion } from "framer-motion";
import Title from "./Title";

function StatsSection() {
  const statsData = [
    {
      number: "1200+",
      label: "Projects Completed",
    },
    {
      number: "1800+",
      label: "Happy Clients",
    },
    {
      number: "16+",
      label: "Years Experience",
    },
    {
      number: "24/7",
      label: "Support Available",
    },
  ];

  return (
    <section
      className="
        relative
        overflow-hidden
        px-4
        py-24
        sm:px-8
        lg:px-16
        xl:px-24
        dark:text-text-light
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[450px]
          w-[450px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-primary/10
          blur-3xl
        "
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col items-center gap-8"
        >
          <Title
            title="Driven by results"
            desc="We combine creativity, strategy, and technology to deliver impactful digital experiences for modern brands."
          />
        </motion.div>

        {/* Stats Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {statsData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-border-light
                bg-bg-light
                p-8
                text-center
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-2xl
                dark:border-border-dark
                dark:bg-secondary
              "
            >
              {/* Hover Glow */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-br
                  from-primary/10
                  via-transparent
                  to-primary/5
                  opacity-0
                  transition-opacity
                  duration-300
                  group-hover:opacity-100
                "
              />

              {/* Number */}
              <h3
                className="
                  relative
                  text-5xl
                  font-extrabold
                  tracking-tight
                  text-primary
                "
              >
                {item.number}
              </h3>

              {/* Label */}
              <p
                className="
                  relative
                  mt-4
                  text-sm
                  font-medium
                  text-text-secondary
                  dark:text-white/70
                "
              >
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
