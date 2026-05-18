import React from "react";
import {
  BriefcaseBusiness,
  BarChart3,
  Code2,
  ShieldCheck,
  Rocket,
} from "lucide-react";

import { motion } from "framer-motion";

const steps = [
  {
    id: "01",
    title: "Business Discovery",
    description:
      "We understand your business goals, audience, and vision before starting the project.",
    icon: <BriefcaseBusiness size={26} />,
    direction: -120,
  },
  {
    id: "02",
    title: "Research & Planning",
    description:
      "We analyze market trends and competitors to build smart digital strategies.",
    icon: <BarChart3 size={26} />,
    direction: 120,
  },
  {
    id: "03",
    title: "UI/UX & Development",
    description:
      "Modern interfaces and scalable development focused on performance and user experience.",
    icon: <Code2 size={26} />,
    direction: -120,
  },
  {
    id: "04",
    title: "Testing & Optimization",
    description:
      "We optimize speed, responsiveness, SEO, and overall product quality before launch.",
    icon: <ShieldCheck size={26} />,
    direction: 120,
  },
  {
    id: "05",
    title: "Launch & Growth",
    description:
      "After launch, we continuously support and scale your business digitally.",
    icon: <Rocket size={26} />,
    direction: -120,
  },
];

function ProcessSection() {
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

        <div
          className="
            absolute
            bottom-0
            right-0
            h-72
            w-72
            rounded-full
            bg-primary/5
            blur-3xl
          "
        />
      </div>

      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div
          className="
            mb-20
            flex
            flex-col
            items-center
            text-center
          "
        >

          {/* Title */}
          <h2
            className="
              mt-6
              max-w-4xl
              text-3xl
              font-bold
              leading-tight
              text-text-primary
              dark:text-white
              sm:text-5xl
            "
          >
            Smart Growth Framework For Digital Business
          </h2>

          {/* Description */}
          <p
            className="
              mt-6
              max-w-3xl
              text-sm
              leading-8
              text-text-secondary
              dark:text-white/70
              sm:text-lg
            "
          >
            CreyoTech follows a modern and scalable workflow to build powerful
            digital experiences for startups and businesses.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative flex flex-col gap-6">
          {/* Center Line */}
          <div
            className="
              absolute
              left-6
              top-0
              hidden
              h-full
              w-[2px]
              bg-primary/10
              lg:block
            "
          />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: step.direction,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
              }}
              className="
                group
                relative
                rounded-[2rem]
                border
                border-primary/10
                bg-white/50
                p-6
                backdrop-blur-2xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-primary/20
                hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)]
                dark:border-white/10
                dark:bg-white/[0.03]
                sm:p-8
              "
            >
              {/* Hover Glow */}
              <div
                className="
                  absolute
                  inset-0
                  rounded-[2rem]
                  bg-gradient-to-r
                  from-primary/5
                  to-transparent
                  opacity-0
                  transition-all
                  duration-500
                  group-hover:opacity-100
                "
              />

              <div
                className="
                  relative
                  z-10
                  flex
                  flex-col
                  gap-6
                  lg:flex-row
                  lg:items-center
                "
              >
                {/* Left */}
                <div
                  className="
                    flex
                    items-center
                    gap-5
                  "
                >
                  {/* Step Number */}
                  <div
                    className="
                      flex
                      h-16
                      w-16
                      shrink-0
                      items-center
                      justify-center
                      rounded-3xl
                      bg-primary
                      text-xl
                      font-bold
                      text-white
                      shadow-lg
                      shadow-primary/20
                    "
                  >
                    {step.id}
                  </div>

                  {/* Icon */}
                  <div
                    className="
                      flex
                      h-14
                      w-14
                      shrink-0
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-primary/10
                      bg-primary/10
                      text-primary
                    "
                  >
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3
                    className="
                      text-2xl
                      font-bold
                      text-text-primary
                      dark:text-white
                    "
                  >
                    {step.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      max-w-3xl
                      text-sm
                      leading-8
                      text-text-secondary
                      dark:text-white/70
                      sm:text-base
                    "
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;
