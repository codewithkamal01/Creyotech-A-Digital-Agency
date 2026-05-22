import { motion } from "framer-motion";
import careerImg from "../../assets/career.webp";

function CareerOpportunities() {
  return (
    <section
      id="careers"
      className="
        relative
        overflow-hidden
        px-4
        py-24
        sm:px-8
        lg:px-16
        xl:px-24
      "
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="
            absolute
            left-1/2
            top-0
            h-96
            w-96
            -translate-x-1/2
            rounded-full
            bg-primary/15
            blur-3xl
          "
        />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.9fr]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {/* Badge */}
            <div
              className="
                inline-flex
                rounded-full
                border
                border-primary/20
                bg-primary/10
                px-4
                py-2
                text-xs
                font-semibold
                uppercase
                tracking-[2px]
                text-primary
              "
            >
              Careers at Creyotech
            </div>

            {/* Title */}
            <h2
              className="
                mt-6
                max-w-3xl
                text-4xl
                font-bold
                leading-tight
                text-text-primary
                dark:text-white
                sm:text-5xl
              "
            >
              Career Opportunities for Fresh Graduates at Creyotech
            </h2>

            {/* Description */}
            <div
              className="
                mt-8
                space-y-6
                text-[15px]
                leading-8
                text-text-secondary
                dark:text-white/70
              "
            >
              <p>
                Creyotech offers structured internships and entry-level roles
                designed specifically for fresh graduates with little or no
                prior industry experience. These roles focus on hands-on
                learning, real project exposure, and gradual responsibility
                building.
              </p>

              <p>
                Engineering graduates can begin their careers in software
                development, web and application engineering, AI automation, QA
                testing. Non-engineering graduates are offered opportunities in
                digital marketing execution, SEO operations etc.
              </p>

              <p>
                Through mentorship, structured training, and continuous
                feedback, Creyotech enables fresh talent to transition
                confidently into full-time professionals.
              </p>
            </div>

            {/* Bottom Highlights */}
            <div className="mt-10 flex flex-wrap gap-3">
              {[
                "Internships",
                "Live Projects",
                "Mentorship",
                "Growth Opportunities",
              ].map((item, index) => (
                <div
                  key={index}
                  className="
                    rounded-full
                    border
                    border-primary/20
                    bg-primary/10
                    px-4
                    py-2
                    text-sm
                    font-medium
                    text-primary
                  "
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Glow */}
            <div
              className="
                absolute
                inset-0
                -z-10
                rounded-4xl
                bg-primary/20
                blur-3xl
              "
            />

            {/* Main Image Card */}
            <div
              className="
                relative
                overflow-hidden
                rounded-4xl
                border
                border-primary/10
                bg-white/40
                p-3
                shadow-[0_20px_80px_rgba(0,0,0,0.08)]
                backdrop-blur-2xl
                dark:border-white/10
                dark:bg-white/[0.03]
              "
            >
              <img
                src={careerImg}
                alt="Career Opportunities"
                className="
                h-[430px]
                  sm:h-[550px]
                  w-full
                  rounded-3xl
                  object-cover
                "
              />

              {/* Floating Card */}
              <div
                className="
    absolute
    bottom-4
    left-1/2
    w-[80%]
    max-w-sm
    -translate-x-1/2
    rounded-3xl
    border
    border-white/10
    bg-black/50
    p-4
    backdrop-blur-xl

    sm:bottom-8
    sm:left-8
    sm:w-full
    sm:max-w-md
    sm:translate-x-0
    sm:p-4
  "
              >
                <p
                  className="
      text-[8px]
      font-semibold
      uppercase
      tracking-[2px]
      text-primary
      sm:text-xs
    "
                >
                  Career Growth
                </p>

                <h3
                  className="
      mt-1
      text-xs
      font-semibold
      leading-relaxed
      text-white
      sm:text-lg
      sm:leading-snug
    "
                >
                  Learn and grow with real industry experience.
                </h3>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default CareerOpportunities;
