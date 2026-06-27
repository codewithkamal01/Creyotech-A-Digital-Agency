import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Check, ArrowRight } from "lucide-react";
import { useState } from "react";

function ServiceOfferings({ offerings }) {
  const location = useLocation();
  
  const [active, setActive] = useState(() => {
    const matchedOffer = offerings.find(
      (offer) => `#${offer.id}` === location.hash,
    );

    return matchedOffer || offerings[0] || {};
  });

  const activeOffer =
    offerings.find((offer) => `#${offer.id}` === location.hash) || active;

  return (
    <section className="px-4 py-24 sm:px-8 lg:px-16 xl:px-24">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}

        <div className="max-w-3xl">
          <span className="font-medium text-primary">Website Solutions</span>

          <h2 className="mt-4 text-4xl font-bold dark:text-text-light">
            Solutions Tailored To Different Stages Of Business
          </h2>

          <p className="mt-4 text-text-secondary">
            From complimentary business websites to enterprise-grade e-commerce
            systems, choose the solution that aligns with your goals.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[320px_1fr]">
          {/* Tabs */}

          <div className="space-y-3 dark:text-text-light">
            {offerings.map((item) => (
              <div key={item.id}>
                <button
                  onClick={() => setActive(item)}
                  className={`
                    w-full
                    rounded-2xl
                    border
                    p-5
                    text-left
                    transition-all

                    ${
                      activeOffer.id === item.id
                        ? "border-primary bg-primary/5"
                        : "border-border-light hover:border-primary/20"
                    }
                  `}
                >
                  <h3 className="font-semibold">{item.title}</h3>

                  <p className="mt-2 text-sm text-text-secondary">
                    {item.badge}
                  </p>
                </button>
              </div>
            ))}
          </div>

          {/* Content */}

          <AnimatePresence mode="wait">
            <motion.div
              key={activeOffer.id}
              initial={{
                opacity: 0,
                x: 20,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: -20,
              }}
              transition={{
                duration: 0.25,
              }}
              className="
                rounded-3xl
                border
                border-border-light
                bg-bg-light
                dark:bg-secondary
                p-8
                shadow-lg
              "
            >
              <span
                className="
                  rounded-full
                  bg-primary/10
                  px-4
                  py-2
                  text-sm
                  font-medium
                  text-primary
                "
              >
                {activeOffer.badge}
              </span>

              <h3 className="mt-5 text-3xl font-bold dark:text-text-light">
                {activeOffer.title}
              </h3>

              <p className="mt-4 max-w-3xl text-text-secondary">
                {activeOffer.description}
              </p>

              <div className="mt-10 grid gap-8 md:grid-cols-2">
                {/* Ideal For */}

                <div className="dark:text-text-light">
                  <h4 className="mb-4 text-lg font-semibold">Ideal For</h4>

                  <div className="space-y-3">
                    {activeOffer.idealFor?.map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <Check size={18} className="text-primary" />

                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Features */}

                <div className="dark:text-text-light">
                  <h4 className="mb-4 text-lg font-semibold">Key Features</h4>

                  <div className="space-y-3">
                    {activeOffer.features?.map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <Check size={18} className="text-primary" />

                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <button
                className="
                  mt-10
                  flex
                  items-center
                  gap-2
                  rounded-2xl
                  bg-primary
                  px-6
                  py-3
                  text-white
                "
              >
                Discuss This Solution
                <ArrowRight size={18} />
              </button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default ServiceOfferings;
