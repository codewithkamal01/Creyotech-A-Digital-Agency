import React from "react";
import assets from "../../assets/assets";
import { motion } from "motion/react";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={assets.heroVideo} type="video/webm" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/55 to-black/70" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-5 text-center text-white">
        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-2 py-2 backdrop-blur-md"
        >
          <img
            src={assets.group_profile}
            alt="Clients"
            className="h-7 w-auto sm:h-8"
          />
          <p className="pr-2 text-xs font-medium sm:text-sm">
            Trusted by 1500+ clients across India
          </p>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-6xl text-4xl font-semibold leading-tight sm:text-6xl lg:text-7xl"
        >
          Your Trusted
          <span className="mx-2 text-primary">PAN India</span>
          Growth Partner for
          <br />
          <span className="mt-2 block min-h-[1.2em] text-primary">
            <TypeAnimation
              sequence={[
                "Innovative Marketer",
                2000,
                "Brand Strategist",
                2000,
                "Creative Partner",
                2000,
                "Trendsetting Creator",
                2000,
              ]}
              speed={60}
              repeat={Infinity}
              preRenderFirstString
            />
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 max-w-2xl text-base text-white/80 sm:text-lg"
        >
          We help businesses build stronger brands, attract more customers, and
          achieve measurable growth through creative digital solutions.
        </motion.p>
      </div>
    </section>
  );
}

export default Hero;
