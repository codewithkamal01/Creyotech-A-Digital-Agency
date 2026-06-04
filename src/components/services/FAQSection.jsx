import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

function FAQSection({ faqs }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="px-4 py-24 sm:px-8 lg:px-16 xl:px-24">
      <div className="mx-auto max-w-5xl">
        {/* Heading */}

        <div className="text-center">
          <span className="font-medium text-primary">
            Frequently Asked Questions
          </span>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl dark:text-text-light">
            Everything You Need To Know
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-text-secondary">
            Answers to the most common questions businesses ask before starting
            a website development project.
          </p>
        </div>

        {/* FAQs */}

        <div className="mt-14 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={faq.question}
                className="
                  overflow-hidden
                  rounded-3xl
                  border
                  border-border-light
                  bg-bg-light
                  dark:border-border-dark
                  dark:bg-secondary
                "
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    gap-4
                    p-6
                    text-left
                  "
                >
                  <h3
                    className="
                      text-lg
                      font-semibold
                      dark:text-text-light
                    "
                  >
                    {faq.question}
                  </h3>

                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-primary/10
                      text-primary
                    "
                  >
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                    >
                      <div className="px-6 pb-6">
                        <p
                          className="
                            max-w-4xl
                            leading-relaxed
                            text-text-secondary
                          "
                        >
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}

        <div
          className="
            mt-14
            rounded-[32px]
            bg-primary/5
            p-8
            text-center
          "
        >
          <h3 className="text-2xl font-bold dark:text-text-light">Still Have Questions?</h3>

          <p className="mt-3 text-text-secondary">
            Speak with our team and get expert guidance tailored to your
            business requirements.
          </p>

          <button
            className="
              mt-6
              rounded-2xl
              bg-primary
              px-6
              py-3
              font-medium
              text-white
            "
          >
            Book Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
