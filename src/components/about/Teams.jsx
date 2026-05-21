import React from "react";
import Title from "../Title";
import { teamData } from "../../assets/assets";
import { motion } from "motion/react";

function Teams() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      className="flex flex-col items-center text-center gap-7 px-8 sm:px-12 lg:px-24 xl:px-40 pt-30 text-text-primary dark:text-text-light"
    >
      <Title
        title="Meet The Leadership Team"
        desc="A passionate team of digital experts dedicated to your brands success."
      />

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-2">
        {teamData.map((team, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            key={index}
            className="
        group
        relative
        overflow-hidden
        rounded-[1.8rem]
        border
        border-primary/10
        bg-white/70
        p-5
        shadow-[0_15px_40px_rgba(0,0,0,0.05)]
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-primary/20
        hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]
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
          h-28
          w-28
          rounded-full
          bg-primary/10
          blur-3xl
          opacity-0
          transition-all
          duration-500
          group-hover:opacity-100
        "
            />

            {/* Content */}
            <div className="relative z-10">
              {/* Top */}
              <div
                className="
            flex
            items-center
            gap-4
          "
              >
                {/* Image */}
                <img
                  src={team.image}
                  className="
              h-28
              w-28
              shrink-0
              rounded-2xl
              object-cover
              object-top
              ring-2
              ring-primary/10
            "
                  alt={team.name}
                />

                {/* Name + Role */}
                <div
                  className="flex
    flex-1
    flex-col
    items-start
    text-left"
                >
                  <h3
                    className="
                 text-lg
      font-bold
      leading-tight
      text-left
      text-text-primary
      dark:text-white
              "
                  >
                    {team.name}
                  </h3>

                  <p
                    className="
               mt-1
      text-left
      text-sm
      font-medium
      text-primary
              "
                  >
                    {team.title}
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div
                className="
            my-5
            h-px
            w-full
            bg-gradient-to-r
            from-transparent
            via-primary/15
            to-transparent
          "
              />

              {/* Description */}
              <p
                className="
            text-sm
            leading-5
            text-text-secondary
            dark:text-white/70
          "
              >
                {team.desc}
              </p>
            </div>

            {/* Floating Number */}
            <div
              className="
          absolute
          top-3
          right-4
          text-5xl
          font-bold
          leading-none
          text-primary/5
          transition-all
          duration-300
          group-hover:scale-110
          dark:text-white/[0.03]
        "
            >
              {(index + 1).toString().padStart(2, "0")}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Teams;
