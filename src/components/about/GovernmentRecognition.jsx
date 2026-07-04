import { motion } from "framer-motion";
import assets from "../../assets/assets";

const recognitionData = [
  {
    image: assets.msme,
    title: "MSME Registered Enterprise",
  },
  {
    image: assets.meity,
    title: "Recognized under MeitY Initiatives",
  },
  {
    image: assets.nsic,
    title: "NSIC-Registered IT Services Provider",
  },
  {
    image: assets.iso,
    title: "ISO 9001:2015 Quality Certified",
  },
  {
    image: assets.iso2,
    title: "ISO 27001 Information Security Certified",
  },
  {
    image: assets.cmmi,
    title: "CMMI Level 3 Process Excellence",
  },
  {
    image: assets.StartUpIndia,
    title: "StartUp India Recognized",
  },
  {
    image: assets.MakeInIndia,
    title: "Make in India Recognized",
  },
];

function GovernmentRecognition() {
  return (
    <section
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
      {/* Background */}
      <div className="absolute inset-0 -z-20">
        {/* Main Gradient */}
        <div
          className="
      absolute
      inset-0
      bg-gradient-to-b
      from-primary/5
      via-transparent
      to-transparent
    "
        />

        {/* Glow 1 */}
        <div
          className="
      absolute
      left-1/2
      top-0
      h-96
      w-96
      -translate-x-1/2
      rounded-full
      bg-primary/10
      blur-3xl
    "
        />

        {/* Glow 2 */}
        <div
          className="
      absolute
      bottom-0
      right-0
      h-72
      w-72
      rounded-full
      bg-primary/5
      blur-3xl
    "
        />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="
            mb-16
            flex
            flex-col
            items-center
            text-center
          "
        >
          {/* Badge */}
          <div
            className="
              inline-flex
              rounded-full
              border
              border-white/10
              bg-primary
              px-5
              py-2
              text-xs
              font-semibold
              uppercase
              tracking-[2px]
              text-white
              shadow-lg
            "
          >
            Government Recognition
          </div>

          <h2
            className="
              mt-6
              max-w-3xl
              text-3xl
              font-bold
              leading-tight
              text-text-primary dark:text-white
              sm:text-5xl
            "
          >
            Trusted Certifications & Official Recognition
          </h2>

          <p
            className="
              mt-5
              max-w-2xl
              text-sm
              leading-8
              text-text-secondary dark:text-white/70
              sm:text-base
            "
          >
            Creyotech follows structured operational standards with recognized
            certifications, compliance frameworks, and process excellence.
          </p>
        </motion.div>

        {/* Recognition Grid */}
        <div
          className="
            grid
            gap-6
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-[repeat(auto-fit,minmax(220px,1fr))]
          "
        >
          {recognitionData.map((item, index) => (
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
                border-white/10
                bg-white/50 dark:bg-white/[0.03]
                p-5
                text-center
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-primary/30
                hover:bg-white/15
                hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)]
              "
            >
              {/* Glow */}
              <div
                className="
                  absolute
                  right-0
                  top-0
                  h-24
                  w-24
                  rounded-full
                  bg-primary/20
                  blur-3xl
                  transition-all
                  duration-300
                  group-hover:scale-150
                "
              />

              {/* Image */}
              <div
                className="
                  mx-auto
                  flex
                  h-28
                  w-28
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-3xl
                  bg-white
                  p-3
                  shadow-lg
                "
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-contain"
                />
              </div>

              {/* Text */}
              <div className="mt-6">
                <p
                  className="
                    text-sm
                    font-medium
                    leading-7
                   text-text-primary dark:text-white
                  "
                >
                  {item.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GovernmentRecognition;
