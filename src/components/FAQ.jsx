import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import Title from "./Title";

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqData = [
    {
      question: "Why choose Creyotech over other consultancy service provider?",
      answer:
        "Creyotech combines corporate compliance expertise with modern IT execution under one roof. With 4 years of consistent operations and 137 satisfied clients, we have built a reputation for reliability, structured processes, and measurable outcomes. Our integrated approach ensures that clients do not need multiple vendors for legal, compliance, and digital growth support.",
    },
    {
      question: "Do you work with both startups and established businesses?",
      answer:
        "Yes, we love working with startups and helping them build scalable and impactful digital products from scratch.",
    },
    {
      question: "What industries does creyotech primarily work with?",
      answer:
        "Over the past 4 years, Creyotech has supported 137 clients across diverse industries including startups, manufacturing businesses, service providers, ecommerce brands, and growing enterprises. Our cross-industry exposure allows us to understand practical business challenges and deliver scalable solutions.",
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
    <section id="faq" className="relative px-4 py-24 sm:px-8 lg:px-16 xl:px-24">
      {/* Background Blur */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col items-center gap-8 dark:text-text-light"
        >
          <Title
            title="Frequently asked questions"
            desc="Everything you need to know about our services, process, and collaboration."
          />
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-6">
          {faqData.map((faq, index) => {
            const isActive = activeIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className={`
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  ${
                    isActive
                      ? `
                        border-primary/40 bg-gradient-to-br  from-primary/10  to-transparent shadow-[0_0_40px_rgba(59,130,246,0.15)]
                      `
                      : `
                        hover:border-primary/20
                         border-zinc-200/70 bg-white/[0.03] dark:border-white/10
                      `
                  }
                `}
              >
                {/* Accent Line */}
                <div
                  className={`
                    absolute
                    left-0
                    top-0
                    h-full
                    w-1
                    rounded-full
                    bg-primary
                    transition-all
                    duration-500
                    ${isActive ? "opacity-100" : "opacity-0"}
                  `}
                />

                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between gap-6 px-7 py-6 text-left"
                >
                  <h3
                    className={`
                      text-lg
                      font-semibold
                      transition-colors
                      duration-300
                      ${
                        isActive
                          ? "text-primary"
                          : "text-text-primary dark:text-white"
                      }
                    `}
                  >
                    {faq.question}
                  </h3>

                  {/* Icon */}
                  <motion.div
                    animate={{
                      rotate: isActive ? 45 : 0,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className={`
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      transition-all
                      duration-300
                      ${
                        isActive
                          ? `
                            border-primary/30
                            bg-primary
                            text-white
                            shadow-lg
                          `
                          : `
                            border-border-light
                            bg-white/10
                            text-text-primary
                            dark:border-white/10
                            dark:text-white
                          `
                      }
                    `}
                  >
                    <Plus size={20} />
                  </motion.div>
                </button>

                {/* Answer */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.35,
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-7 pb-7">
                        <p className="max-w-3xl text-sm leading-8 text-text-secondary dark:text-white/70">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
