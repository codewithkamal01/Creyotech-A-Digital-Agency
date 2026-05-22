import React from "react";
import assets from "../../assets/assets";
import { motion } from "motion/react";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <div
      className="flex flex-col items-center gap-6 py-24 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden text-text-primary dark:text-text-light"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        viewport={{ once: true }}
        className="inline-flex items-center gap-2 border border-border-light p-1.5
       pr-4 rounded-full"
      >
        <img className="sm:w-28 w-18" src={assets.group_profile} alt="" />
        <p className="text-xs font-medium">trusted by 150+ people</p>
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium xl:leading-[95px] max-w-5xl"
      >
        Turning Imagination into{" "}
        <span className="bg-primary pt-1 pb-5 bg-clip-text text-transparent inline-block min-w-[320px]">
          <TypeAnimation
            sequence={[
              "digital impact.",
              1500,

               "bold ideas.",
              1500,

              "modern solutions.",
              1500,

              "creative products.",
              1500,

              "real innovation.",
              1500,
            ]}
            speed={50}
            repeat={Infinity}
            cursor={true}
            wrapper="span"
          />
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        viewport={{ once: true }}
        className="text-sm sm:text-lg font-medium text-text-secondary dark:text-text-light/75 max-w-4/5 sm:max-w-lg pb-3"
      >
        Creating meaningful connections and turning big ideas into interactive
        digital experiences.
      </motion.p>
      <div className="relative">
        {/* Background image */}
        <motion.img
          src={assets.bgImage1}
          alt=""
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          viewport={{ once: true }}
          className="
      absolute
      -top-40
      -right-40
      sm:-top-100
      sm:-right-70
      -z-10
      dark:hidden
    "
        />

        {/* Animated hero image only */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          viewport={{ once: true }}
        >
          <video autoPlay muted  src={assets.heroVideo} alt="" className="w-full max-w-6xl rounded-4xl" />
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
