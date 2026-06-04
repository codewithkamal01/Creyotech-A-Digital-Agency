import React from "react";
import { motion } from "motion/react";
import {
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
  Search,
  MessageSquare,
  BadgeDollarSign,
  Users,
  Target,
} from "lucide-react";

function AgencySelectionGuide({ data }) {
  const icons = [
    ShieldCheck,
    Target,
    TrendingUp,
    Users,
    Search,
    ShieldCheck,
    BadgeDollarSign,
    MessageSquare,
    CheckCircle2,
    Target,
  ];

  const minimumScore = data?.minimumScore ?? 20;

  return (
    <section className="px-4 py-24 sm:px-8 lg:px-16 xl:px-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="font-medium text-primary">Agency Selection Guide</span>

          <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl dark:text-text-light">
            {data?.title}
          </h2>

          <p className="mt-5 text-lg text-text-secondary">{data?.description}</p>
        </div>
        {/* Factors */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {(data?.factors || []).map((factor, index) => {
            const Icon = icons[index];

            return (
              <motion.div
                key={factor.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                }}
                viewport={{ once: true }}
                className="
              rounded-3xl
              border
              border-border-light
              bg-bg-light
              p-6
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-primary/30
              hover:shadow-lg
              dark:border-border-dark
              dark:bg-secondary
            "
              >
                <div
                  className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-2xl
                bg-primary/10
                text-primary
              "
                >
                  <Icon size={22} />
                </div>

                <h3 className="mt-5 text-lg font-semibold dark:text-text-light">
                  {factor.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  {factor.description}
                </p>
              </motion.div>
            );
          })}
        </div>
        {/* Scorecard */}
        <div
          className="
        mt-20
        rounded-[32px]
        border
        border-primary/10
        bg-primary/5
        p-8
        lg:p-12
      "
        >
          <div className="grid gap-10 lg:grid-cols-[1fr_300px]">
            <div>
              <span className="font-medium text-primary ">
                Agency Evaluation Scorecard
              </span>

              <h3 className="mt-3 text-3xl font-bold dark:text-text-light">
                Simple Framework To Shortlist The Right Agency
              </h3>

                <p className="mt-4 text-text-secondary">
                Evaluate each agency from 1–5 on the following criteria and
                eliminate any agency that scores below {minimumScore}/30.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {(data?.scorecard || []).map((item) => (
                  <div
                    key={item}
                    className="
                  flex
                  items-center
                  gap-3
                  rounded-2xl
                  bg-white
                  p-4
                  shadow-sm
                  dark:bg-secondary
                  dark:text-text-light
                "
                  >
                    <CheckCircle2 size={18} className="text-primary" />

                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Score */}

            <div className="flex items-center justify-center">
              <div
                className="
              flex
              h-64
              w-64
              flex-col
              items-center
              justify-center
              rounded-full
              border-[10px]
              border-primary
              bg-white
              shadow-xl
              dark:bg-secondary
            "
              >
                <span className="text-6xl font-bold text-primary">
                  {minimumScore}
                </span>

                <span className="mt-2 text-xl font-semibold dark:text-text-light">/ 30</span>

                <p className="mt-3 max-w-[180px] text-center text-sm text-text-secondary">
                  Minimum acceptable score before considering an agency.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Why Creyotech */}
        <div className="mt-20">
          <span className="font-medium text-primary ">
            Why Businesses Choose Creyotech
          </span>

          <h3 className="mt-3 text-4xl font-bold dark:text-text-light">
            Built For Business Outcomes, Not Just Visual Appeal
          </h3>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Strategically aligned with business goals",
              "Designed to generate qualified leads",
              "SEO-first architecture",
              "100% ownership and control",
              "Built for scalability",
              "Long-term growth focused",
            ].map((item) => (
              <div
                key={item}
                className="
              flex
              gap-4
              rounded-3xl
              border
              border-border-light
              bg-bg-light
              p-6
              transition-all
              hover:border-primary/30
              hover:shadow-lg
              dark:border-border-dark
              dark:bg-secondary
              dark:text-text-light
            "
              >
                <CheckCircle2
                  className="
                mt-1
                shrink-0
                text-primary
              "
                />

                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AgencySelectionGuide;
