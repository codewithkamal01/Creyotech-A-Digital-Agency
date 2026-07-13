import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const lines = [
  "At Creyotech, we design and",
  "build custom digital solutions",
  "to help you move faster, work",
  "smarter, and grow confidently.",
];

const lineColors = [
  "bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent",
  "bg-gradient-to-r from-blue-500 to-emerald-400 bg-clip-text text-transparent",
  "bg-gradient-to-r from-emerald-400 via-green-500 to-teal-500 bg-clip-text text-transparent",
  "bg-gradient-to-r from-green-400 via-lime-400 to-yellow-400 bg-clip-text text-transparent",
];

function AnimatedLine({ line, color, index, scrollYProgress }) {
  const start = index / lines.length;
  const end = start + 0.25;

  const opacity = useTransform(scrollYProgress, [start, end], [0.18, 1]);

  return (
    <motion.div style={{ opacity }} className={color}>
      {line}
    </motion.div>
  );
}

export default function AnimatedParagraph() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 80%"],
  });

  return (
    <section
      ref={ref}
      className="min-h-[60vh] bg-gradient-to-b from-slate-50 via-white to-slate-100 dark:bg-none
dark:bg-bg-dark flex items-center justify-center px-6 py-24"
    >
      <div
        className="mx-auto
    px-4
    text-center
    font-bold
    tracking-tight
    leading-[1.2]

    max-w-sm
    sm:max-w-md
    md:max-w-2xl
    lg:max-w-3xl
    xl:max-w-6xl

    text-[38px]
    sm:text-5xl
    md:text-6xl
    lg:text-7xl"
      >
        {lines.map((line, index) => (
          <AnimatedLine
            key={index}
            line={line}
            color={lineColors[index]}
            index={index}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}
