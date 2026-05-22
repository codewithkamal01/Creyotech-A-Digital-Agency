import React from "react";
import { BriefcaseBusiness, Code2, Users, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const engagementModels = [
  {
    title: "Fixed Scope Delivery Model",
    description:
      "A structured engagement with clearly defined scope, timelines, and predictable project delivery.",
    icon: <BriefcaseBusiness size={34} />,
  },
  {
    title: "Agile Iterative Development Model",
    description:
      "A sprint-based collaborative approach designed for evolving requirements and rapid delivery. Suited for dynamic projects.",
    icon: <Code2 size={34} />,
  },
  {
    title: "Dedicated Resource Engagement Model",
    description:
      "A long-term partnership where dedicated experts work as an extension of your internal team.",
    icon: <Users size={34} />,
  },
];

function EngagementModels() {
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
      "
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="
            absolute
            left-1/2
            top-0
            h-96
            w-96
            -translate-x-1/2
            rounded-full
            bg-primary/10
            blur-3xl
          "
        />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="
            mb-16
            text-center
          "
        >
          <div
            className="
              inline-flex
              rounded-full
              border
              border-primary/20
              bg-primary/10
              px-4
              py-2
              text-xs
              font-semibold
              uppercase
              tracking-[3px]
              text-primary
            "
          >
            Engagement Models
          </div>

          <h2
            className="
              mt-6
              text-3xl
              font-bold
              text-text-primary
              dark:text-white
              sm:text-5xl
            "
          >
            Flexible Collaboration Models
          </h2>
        </motion.div>

        {/* Cards */}
        <div
          className="
            grid
            gap-6
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {engagementModels.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              viewport={{
                once: true,
              }}
              whileHover={{
                y: -6,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-4xl
                border
                border-primary/10
                bg-white/70
                p-7
                shadow-[0_15px_50px_rgba(0,0,0,0.05)]
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-primary/20
                dark:border-white/10
                dark:bg-white/[0.03]
              "
            >
              {/* Hover Glow */}
              <div
                className="
                  absolute
                  right-0
                  top-0
                  h-32
                  w-32
                  rounded-full
                  bg-primary/10
                  blur-3xl
                  opacity-0
                  transition-all
                  duration-500
                  group-hover:opacity-100
                "
              />

              {/* Icon */}
              <div
                className="
                  relative
                  z-10
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  bg-primary/10
                  text-primary
                "
              >
                {item.icon}
              </div>

              {/* Content */}
              <div className="relative z-10 mt-6">
                <h3
                  className="
                    text-2xl
                    font-bold
                    leading-snug
                    text-text-primary
                    dark:text-white
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-4
                    text-sm
                    leading-5
                    text-text-secondary
                    dark:text-white/70
                  "
                >
                  {item.description}
                </p>

                {/* CTA */}
                <button
                  className="
                    mt-6
                    inline-flex
                    items-center
                    gap-2
                    text-sm
                    font-semibold
                    text-primary
                    transition-all
                    group-hover:gap-3
                  "
                >
                  Discover More
                  <ArrowRight size={16} />
                </button>
              </div>

              {/* Floating Number */}
              <div
                className="
                  absolute
                  bottom-3
                  right-5
                  text-6xl
                  font-bold
                  leading-none
                  text-primary/5
                  dark:text-white/[0.03]
                "
              >
                {(index + 1).toString().padStart(2, "0")}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EngagementModels;
