import { motion } from "motion/react";
import { ArrowRight, Code2 } from "lucide-react";

function ServiceHero({ hero }) {
  return (
    <section className="relative overflow-hidden px-4 py-10 sm:px-8 lg:px-16 xl:px-24">
      {/* Background Blur */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <Code2 size={16} />
            {hero.badge}
          </div>

          <h1 className="mt-6 text-5xl font-bold leading-tight md:text-6xl dark:text-text-light">
            {hero.title}
          </h1>

          <p className="mt-6 max-w-xl text-lg text-text-secondary">
            {hero.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={hero.primaryCTA?.href || "#"}
              className="
                flex
                items-center
                gap-2
                rounded-2xl
                bg-primary
                px-7
                py-4
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
                px-7
                py-4
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
        >
          <img
            src={hero.image || "/images/services/web-development-hero.webp"}
            alt={hero.title || "Service"}
            className="
              w-full
              rounded-[32px]
              border
              border-border-light
              shadow-2xl
            "
          />
        </motion.div>
      </div>
    </section>
  );
}

export default ServiceHero;
