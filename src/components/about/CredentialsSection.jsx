import { motion } from "motion/react";
import assets from "../../assets/assets";

const credentialsData = [
  {
    image: assets.iso,
    title: "ISO 9001:2015 Quality Certified",
    category: "Quality Management",
  },
  {
    image: assets.iso2,
    title: "ISO 27001 Information Security Certified",
    category: "Information Security",
  },
  {
    image: assets.cmmi,
    title: "CMMI Level 3 Process Excellence",
    category: "Process Maturity",
  },
];

function CredentialsSection() {
  return (
    <section className="relative overflow-hidden px-4 py-24 sm:px-8 lg:px-16 xl:px-24">
      {/* Background */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <div className="inline-flex rounded-full border border-white/10 bg-primary px-5 py-2 text-xs font-semibold uppercase tracking-[2px] text-white shadow-lg">
            Credentials
          </div>

          <h2 className="mt-6 max-w-3xl text-3xl font-bold leading-tight text-text-primary dark:text-white sm:text-5xl">
            Certifications & Compliance Standards
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-text-secondary dark:text-white/70 sm:text-base">
            Built on globally recognized standards for quality, security, and
            process excellence.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {credentialsData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="
                group
                relative
                overflow-hidden
                rounded-[2rem]
                border
                border-border-light
                bg-white/70
                p-6
                text-center
                shadow-lg
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-primary/30
                hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]
                dark:border-border-dark
                dark:bg-white/[0.03]
              "
            >
              {/* Glow */}
              <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-primary/20 blur-3xl transition-all duration-300 group-hover:scale-150" />

              {/* Image */}
              <div className="mx-auto flex h-28 w-28 items-center justify-center overflow-hidden rounded-3xl bg-white p-3 shadow-lg dark:bg-white/10">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Category */}
              <p className="mt-6 text-xs font-semibold uppercase tracking-[2px] text-primary">
                {item.category}
              </p>

              {/* Title */}
              <p className="mt-3 text-sm font-medium leading-7 text-text-primary dark:text-white">
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CredentialsSection;
