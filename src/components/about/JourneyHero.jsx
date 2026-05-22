import { motion } from "framer-motion";
import assets from "../../assets/assets";

function JourneyHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
          className="
            group
            relative
            overflow-hidden
            border
            border-primary/10
            shadow-[0_20px_80px_rgba(0,0,0,0.08)]
            dark:border-white/10
          "
        >
          {/* Background Image */}
          <img
            src={assets.AboutHero}
            alt="Our Journey"
            className="
    h-[300px]
    w-full
    object-cover
    sm:h-[380px]
    lg:h-[500px]
    xl:h-[560px]
  "
          />

          {/* Overlay */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/70
              via-black/20
              to-black/10
            "
          />

          {/* Top Glow */}
          <div
            className="
              absolute
              left-1/2
              top-0
              h-60
              w-60
              -translate-x-1/2
              rounded-full
              bg-primary/20
              blur-3xl
            "
          />

          {/* Content */}
          <div
            className="
              absolute
              inset-0
              flex
              flex-col
              items-center
             top-30
              text-center
            "
          >
            {/* Badge */}
            <div
              className="
                inline-flex
                rounded-full
                border
                border-white/20
                bg-white/10
                px-4
                py-2
                text-xs
                font-semibold
                uppercase
                tracking-[3px]
                text-white
                backdrop-blur-xl
              "
            >
              Since 2016
            </div>

            {/* Heading */}
            <h1
              className="
                max-w-4xl
                text-4xl
                font-bold
                leading-tight
                text-white
                drop-shadow-xl
                sm:text-6xl
                lg:text-7xl
              "
            >
              Our Journey
            </h1>

            {/* Description */}
            <p
              className="
                sm:mt-6
                mt-2
                p-4
                sm:p-0
                max-w-3xl
                text-xs
                leading-tight
                sm:leading-6
                text-white/80
                sm:text-lg
              "
            >
              From a startup-focused technology partner to a modern digital
              innovation company, Creyotech continues to build scalable digital
              ecosystems for businesses worldwide.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default JourneyHero;
