import { motion } from "motion/react";
import { ArrowRight, Code2 } from "lucide-react";

function ServiceHero({ hero }) {
  return (
    <section className="relative overflow-hidden px-4 py-8 sm:px-8 lg:px-16 xl:px-24">
      {/* Background Blur */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div
        className="
      mx-auto
      grid
      min-h-[80vh]
      max-w-7xl
      items-center
      gap-10
      lg:grid-cols-2
    "
      >
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <Code2 size={16} />
            {hero.badge}
          </div>

          <h1
            className="
          mt-4
          text-4xl
          font-bold
          leading-tight
          md:text-5xl
          dark:text-text-light
        "
          >
            {hero.title}
          </h1>

          <p className="mt-4 max-w-xl text-base md:text-lg text-text-secondary">
            {hero.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={hero.primaryCTA?.href || "#"}
              className="
            flex
            items-center
            gap-2
            rounded-2xl
            bg-primary
            px-6
            py-3
            font-medium
            text-white
            transition-all
            hover:-translate-y-1
          "
            >
              {hero.primaryCTA?.label}
              <ArrowRight size={18} />
            </a>

            <a
              href={hero.secondaryCTA?.href || "#"}
              className="
            rounded-2xl
            border
            border-border-light
            px-6
            py-3
            font-medium
            dark:text-text-light
          "
            >
              {hero.secondaryCTA?.label}
            </a>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex justify-center lg:justify-end"
        >
          <img
            src={hero.image}
            alt={hero.title}
            className="
  w-full
  max-w-[450px]
  h-[520px]
  object-cover
  rounded-[28px]
"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default ServiceHero;
