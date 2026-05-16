import React, { useState } from "react";
import { motion } from "framer-motion";
import Title from "./Title";

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqData = [
    {
      question: "What services do you provide?",
      answer:
        "We provide web development, UI/UX design, branding, SEO optimization, and digital marketing solutions tailored for modern businesses.",
    },
    {
      question: "How long does a project usually take?",
      answer:
        "Project timelines depend on complexity and requirements, but most projects are completed within 2 to 6 weeks.",
    },
    {
      question: "Do you work with startups?",
      answer:
        "Yes, we love working with startups and helping them build scalable and impactful digital products from scratch.",
    },
    {
      question: "Can I request custom features?",
      answer:
        "Absolutely. Every project is customizable based on your business goals and feature requirements.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
    id="faq"
      className="
        px-4
        py-24
        sm:px-8
        lg:px-16
        xl:px-24
        dark:text-white
      "
    >
      <div className="mx-auto max-w-4xl">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-14 flex flex-col items-center gap-8"
        >
          <Title
            title="Frequently asked questions"
            desc="Everything you need to know about our services, process, and collaboration."
          />
        </motion.div>

        {/* FAQ List */}
        <div className="flex flex-col gap-5">
          {faqData.map((faq, index) => {
            const isActive = activeIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="
                  overflow-hidden
                  rounded-2xl
                  border
                  border-border-light
                  bg-bg-light
                  transition-all
                  duration-300
                  dark:border-border-dark
                  dark:bg-secondary
                "
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    gap-4
                    px-6
                    py-5
                    text-left
                  "
                >
                  <h3
                    className="
                      text-base
                      font-semibold
                      text-text-primary
                      dark:text-text-light
                    "
                  >
                    {faq.question}
                  </h3>

                  <div
                    className={`
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      bg-primary-100
                      text-primary
                      transition-transform
                      duration-300
                      ${isActive ? "rotate-45" : ""}
                    `}
                  >
                    +
                  </div>
                </button>

                {/* Answer */}
                <div
                  className={`
                    grid
                    transition-all
                    duration-300
                    ${
                      isActive
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }
                  `}
                >
                  <div className="overflow-hidden">
                    <p
                      className="
                        px-6
                        pb-6
                        text-sm
                        leading-7
                        text-text-secondary
                        dark:text-white/70
                      "
                    >
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
