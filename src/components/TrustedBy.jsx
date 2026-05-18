import React from "react";
import { motion } from "framer-motion";

function TrustedBy({
  title = "",
  badge = "",
  logos = [],
  speed = 20,
  cardWidth = "w-40",
  cardHeight = "h-24",
  logoHeight = "max-h-10",
  className = "",
}) {
  // Duplicate logos for infinite marquee
  const marqueeLogos = [...logos, ...logos];

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      viewport={{ once: true }}
      className={`
        relative
        overflow-hidden
        px-4
        pb-16
        sm:px-12
        lg:px-24
        xl:px-40
        ${className}
      `}
    >
      {/* Heading */}
      <div className="mb-10 flex flex-col items-center text-center">
        {badge && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="
              inline-flex
              rounded-full
              border
              border-primary/10
              bg-primary/5
              px-4
              py-2
              text-xs
              font-semibold
              uppercase
              tracking-[2px]
              text-primary
            "
          >
            {badge}
          </motion.div>
        )}

        {title && (
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="
              mt-5
              text-2xl
              font-bold
              text-text-primary
              dark:text-white
              sm:text-3xl
            "
          >
            {title}
          </motion.h3>
        )}
      </div>

      {/* Marquee Wrapper */}
      <div className="relative overflow-hidden">
        {/* Left Fade */}
        <div
          className="
            absolute
            left-0
            top-0
            z-10
            h-full
            w-20
            bg-gradient-to-r
            from-white
            to-transparent
            dark:from-secondary
          "
        />

        {/* Right Fade */}
        <div
          className="
            absolute
            right-0
            top-0
            z-10
            h-full
            w-20
            bg-gradient-to-l
            from-white
            to-transparent
            dark:from-secondary
          "
        />

        {/* Marquee */}
        <motion.div
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: speed,
            ease: "linear",
            repeat: Infinity,
          }}
          className="
            flex
            w-max
            items-center
            gap-10
            p-1
          "
        >
          {marqueeLogos.map((logo, index) => (
            <div
              key={index}
              className={`
                ${cardHeight}
                ${cardWidth}
                flex
                shrink-0
                items-center
                justify-center
                rounded-3xl
                border
                border-primary/10
                bg-white/50
                p-6
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-primary/20
                hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)]
                dark:border-white/10
                dark:bg-white/[0.03]
              `}
            >
              <img
                src={logo}
                alt="logo"
                className={`
                  ${logoHeight}
                  w-auto
                  object-contain
                  transition-all
                  duration-300
                  dark:brightness-90
                `}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default TrustedBy;
