import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const lines = [
  "At Creyotech, we design and",
  "build custom digital solutions",
  "to help you move faster, work",
  "smarter, and grow confidently.",
];

const lineColors = [
  // Ocean Blue
  "bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent",

  // Blue → Emerald
  "bg-gradient-to-r from-blue-500 to-emerald-400 bg-clip-text text-transparent",

  // Emerald
  "bg-gradient-to-r from-emerald-400 via-green-500 to-teal-500 bg-clip-text text-transparent",

  // Green → Yellow
  "bg-gradient-to-r from-green-400 via-lime-400 to-yellow-400 bg-clip-text text-transparent",

  // Golden Yellow
  "bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-400 bg-clip-text text-transparent",
];

function AnimatedParagraph() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 80%"],
  });

  return (
    <section
      ref={ref}
      className="min-h-[60vh] flex items-center justify-center px-6 py-24"
    >
      <div className="max-w-5xl text-center text-6xl md:text-6xl font-bold leading-[1.5] tracking-tight">
        {lines.map((line, index) => {
          const start = index / lines.length;
          const end = start + 0.25;

          const opacity = useTransform(
            scrollYProgress,
            [start, end],
            [0.18, 1],
          );

          return (
            <motion.div
              key={index}
              style={{ opacity }}
              className={lineColors[index]}
            >
              {line}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default AnimatedParagraph;
