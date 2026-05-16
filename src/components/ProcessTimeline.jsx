import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Title from "./Title";

function ProcessTimeline() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const processData = [
    {
      step: "01",
      title: "Discovery",
      desc: "We understand your business goals, audience, and project requirements before starting.",
    },
    {
      step: "02",
      title: "Planning",
      desc: "A clear strategy and roadmap is created to ensure smooth project execution.",
    },
    {
      step: "03",
      title: "Development",
      desc: "Our team designs and develops scalable digital solutions with modern technologies.",
    },
    {
      step: "04",
      title: "Launch",
      desc: "After testing and optimization, your project is launched successfully to the world.",
    },
  ];

  return (
    <section
      className="
        px-4
        py-24
        sm:px-8
        lg:px-16
        xl:px-24
         dark:text-text-light
      "
    >
      <div className="mx-auto max-w-5xl mt-20">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-20 flex flex-col items-center gap-8"
        >
          <Title
            title="Our workflow"
            desc="A streamlined workflow designed to transform ideas into impactful digital experiences."
          />
        </motion.div>

        {/* Timeline */}
        <div ref={containerRef} className="relative">
          {/* Static Line */}
          <div
            className="
              absolute
              left-5
              top-0
              h-full
              w-[2px]
              bg-primary-100
              md:left-1/2
              md:-translate-x-1/2
            "
          />

          {/* Animated Line */}
          <motion.div
            style={{ scaleY }}
            className="
              absolute
              left-5
              top-0
              h-full
              w-[2px]
              origin-top
              bg-primary
              md:left-1/2
              md:-translate-x-1/2
            "
          />

          <div className="flex flex-col gap-12">
            {processData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                className={`
                  relative
                  flex
                  flex-col
                  md:w-1/2
                  ${
                    index % 2 === 0
                      ? "md:pr-12 md:self-start"
                      : "md:pl-12 md:self-end"
                  }
                `}
              >
                {/* Timeline Dot */}
                <div
                  className="
                    absolute
                    left-5
                    top-8
                    z-10
                    h-4
                    w-4
                    -translate-x-1/2
                    rounded-full
                    border-4
                    border-bg-light
                    bg-primary
                    dark:border-secondary
                    md:left-auto
                    md:right-0
                  "
                  style={index % 2 !== 0 ? { left: "-8px", right: "auto" } : {}}
                />

                {/* Card */}
                <div
                  className="
                    ml-14
                    rounded-3xl
                    border
                    border-border-light
                    bg-bg-light
                    p-8
                    shadow-lg
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-2xl
                    dark:border-border-dark
                    dark:bg-secondary
                    md:ml-0
                  "
                >
                  <span
                    className="
                      text-sm
                      font-semibold
                      text-primary
                    "
                  >
                    Step {item.step}
                  </span>

                  <h3
                    className="
                      mt-3
                      text-2xl
                      font-semibold
                      text-text-primary
                      dark:text-text-light
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-4
                      text-sm
                      leading-7
                      text-text-secondary
                      dark:text-white/70
                    "
                  >
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProcessTimeline;
