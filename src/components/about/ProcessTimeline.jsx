import React, { useRef } from "react";
import { Flag } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { timeLine } from "../../assets/assets";

const timelineData = [
  {
    year: "2016",
    month: "March 2016",
    title: "Company Established",
    cardTitle: "Foundation as a Startup-Focused Technology Partner",
    description:
      "Creyotech was founded with a clear purpose: to enable startups and SMEs to build dependable digital solutions without enterprise-level complexity or cost.",
    image: timeLine[0],
  },
  {
    year: "2016",
    month: "July 2016",
    title: "Service Expansion",
    cardTitle: "Expansion Into Full-Scale Development",
    description:
      "The company expanded into modern web applications, scalable backend systems, and digital transformation services.",
    image: timeLine[1],
  },
  {
    year: "2022",
    month: "April 2022",
    title: "Ecommerce Products & Partnerships",
    cardTitle:
      "Ecommerce Product Development & Partnerships",
    description:
      "Creyotech integrated branding, SEO operations, UI/UX design, and digital growth services.",
    image: timeLine[2],
  },
  {
    year: "2026",
    month: "January 2026",
    title: "AI & Automation",
    cardTitle: "Smart Automation & AI Integration",
    description:
      "The company introduced AI automation systems and operational workflows for scalable businesses.",
    image: timeLine[3],
  },
];

function CompanyTimeline() {
  const timelineRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      className="
        relative
        overflow-hidden
        px-4
        py-20
        sm:px-8
        lg:px-16
        xl:px-40
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
        <div className="mb-24 text-center">
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
            Company Timeline
          </div>

          <h2
            className="
              mt-6
              text-3xl
              font-bold
              leading-tight
              text-text-primary
              dark:text-white
              sm:text-5xl
            "
          >
            The journey behind Creyotech
          </h2>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          <div
            className="
    absolute
    left-1/2
    top-0
    hidden
    h-full
    w-[3px]
    -translate-x-1/2
    overflow-hidden
    rounded-full
    bg-primary/10
    lg:block
  "
          >
            {/* Scroll Progress */}
            <motion.div
              style={{
                height: lineHeight,
              }}
              className="
      absolute
      left-0
      top-0
      w-full
      rounded-full
      bg-primary
      shadow-[0_0_20px_rgba(59,130,246,0.7)]
    "
            />
          </div>

          <div className="space-y-28">
            {timelineData.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`
    relative
    flex
    gap-6
    pl-12
    lg:pl-0
    ${isLeft ? "lg:flex-row" : "lg:flex-row-reverse"}
  `}
                >
                  {/* Mobile Timeline Line */}
                  <div
                    className="
    absolute
    left-5
    top-0
    h-full
    w-[2px]
    bg-primary/15
    lg:hidden
  "
                  >
                    <motion.div
                      style={{
                        height: lineHeight,
                      }}
                      className="
      absolute
      left-0
      top-0
      w-full
      bg-primary
    "
                    />
                  </div>
                  {/* Left / Right Card */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 50,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.7,
                    }}
                    viewport={{
                      once: true,
                    }}
                    className="
                      w-full
                      lg:w-1/2
                    "
                  >
                    <div
                      className={`
                        ${isLeft ? "lg:pr-20" : "lg:pl-20"}
                      `}
                    >
                      <div
                        className="
                          overflow-hidden
                          rounded-4xl
                          border
                          border-primary/10
                          bg-white/60
                          shadow-[0_20px_60px_rgba(0,0,0,0.06)]
                          backdrop-blur-2xl
                          dark:border-white/10
                          dark:bg-white/[0.03]
                        "
                      >
                        {/* Image */}
                        <img
                          src={item.image}
                          alt={item.cardTitle}
                          className="
                            h-[280px]
                            w-full
                            object-cover
                          "
                        />

                        {/* Content */}
                        <div className="p-6 sm:p-8 text-center">
                          {/* Mobile Timeline Content */}
                          <div className="mb-5 lg:hidden">
                            <p
                              className="
      text-xs
      font-semibold
      uppercase
      tracking-[2px]
      text-primary
    "
                            >
                              {item.month}
                            </p>

                            <h4
                              className="
      mt-2
      text-xl
      font-bold
      text-text-primary
      dark:text-white
    "
                            >
                              {item.title}
                            </h4>
                          </div>
                          <h3
                            className="
                              text-2xl
                              font-bold
                              leading-tight 
                              text-text-primary
                              dark:text-white
                            "
                          >
                            {item.cardTitle}
                          </h3>

                          <p
                            className="
                              mt-5
                              text-xs
                              leading-relaxed
                              sm:leading-7
                              text-text-secondary
                              dark:text-white/70
                              sm:text-base
                            "
                          >
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Timeline Icon */}
                  <div
                    className="
    absolute
    left-5
    top-6
    z-30
    flex
    h-10
    w-10
    -translate-x-1/2
    items-center
    justify-center
    rounded-full
    border-2
    border-primary/20
    bg-white
    text-primary
    shadow-lg
    dark:bg-secondary
    lg:left-1/2
    lg:h-14
    lg:w-14
  "
                  >
                    <Flag size={16} className="lg:hidden" />
                    <Flag size={18} className="hidden lg:block" />
                  </div>

                  {/* Desktop Year */}
                  <div
                    className="
    absolute
    left-1/2
    top-[-55px]
    z-30
    hidden
    -translate-x-1/2
    rounded-md
    bg-white
    px-4
    py-2
    text-sm
    font-bold
    shadow-md
    dark:bg-secondary
    dark:text-white
    lg:block
  "
                  >
                    {item.year}
                  </div>

                  {/* Timeline Text */}
                  <div
                    className="
                      hidden
                      lg:block
                      lg:w-1/2
                    "
                  >
                    <div
                      className={`
                        ${isLeft ? "pl-20" : "pr-20 text-right"}
                      `}
                    >
                      <h3
                        className="
                          text-3xl
                          font-bold
                          text-primary
                        "
                      >
                        {item.month}
                      </h3>

                      <p
                        className="
                          mt-3
                          text-2xl
                          font-semibold
                          leading-relaxed
                          text-text-primary
                          dark:text-white
                        "
                      >
                        {item.title}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CompanyTimeline;
