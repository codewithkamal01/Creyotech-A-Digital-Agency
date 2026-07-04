import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const text =
  "At Creyotech, we design and build custom digital solutions to help you move faster, work smarter, and grow confidently.";

function AnimatedParagraph() {
  const ref = useRef(null);
  const words = text.split(" ");

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 80%"],
  });

  return (
    <section
      ref={ref}
      className="min-h-[60vh] flex items-center justify-center px-6 py-24"
    >
      <p className="max-w-4xl text-center text-2xl md:text-5xl leading-[1.5] font-bold tracking-tight dark:text-white">
        {words.map((word, index) => {
          const start = index / words.length;
          const end = start + 0.18; // overlap for smoother flow

          const opacity = useTransform(
            scrollYProgress,
            [start, end],
            [0.18, 1],
          );

          const highlightWords = [
            "custom",
            "digital",
            "faster,",
            "smarter,",
            "grow",
          ];

          return (
            <motion.span
              key={index}
              style={{ opacity }}
              className={`inline-block mr-3 transition-colors ${
                highlightWords.includes(word)
                  ? "bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"
                  : ""
              }`}
            >
              {word}
            </motion.span>
          );
        })}
      </p>
    </section>
  );
}

export default AnimatedParagraph;
