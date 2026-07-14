import { useState } from "react";
import { motion } from "motion/react";
import CountUp from "react-countup";
import { Award, Smile, TrendingUp, Users } from "lucide-react";

function StatCard({ item, index }) {
  const Icon = item.icon;
  const [startCount, setStartCount] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      onViewportEnter={() => setStartCount(true)}
      viewport={{ once: true, amount: 0.5 }}
      transition={{
        duration: 0.5,
        delay: index * 0.15,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-[28px]
        border
        border-primary/10
        bg-gradient-to-br
        from-white
        via-white
        to-primary/5
        p-8
        shadow-lg
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-primary
        hover:shadow-2xl
        hover:shadow-primary/10
        dark:border-white/10
        dark:from-secondary
        dark:via-secondary
        dark:to-primary/10
      "
    >
      {/* Background Glow */}
      <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary/10 blur-3xl transition-all duration-500 group-hover:scale-150" />

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Icon */}
        <div
          className="
            mb-6
            flex
            h-20
            w-20
            items-center
            justify-center
            rounded-2xl
            bg-gradient-to-br
            from-primary
            to-indigo-500
            text-white
            shadow-lg
            shadow-primary/30
            transition-all
            duration-500
            group-hover:rotate-6
            group-hover:scale-110
          "
        >
          <Icon size={40} />
        </div>

        {/* Counter */}
        <h2 className="text-5xl font-bold tracking-tight text-text-primary dark:text-text-light lg:text-6xl">
          {startCount ? (
            <CountUp end={item.value} duration={2.2} suffix={item.suffix} />
          ) : (
            `0${item.suffix}`
          )}
        </h2>

        {/* Divider */}
        <div className="mt-4 h-1 w-14 rounded-full bg-gradient-to-r from-primary to-indigo-500 transition-all duration-500 group-hover:w-24" />

        {/* Title */}
        <p className="mt-5 text-lg font-medium text-text-secondary dark:text-text-light/70">
          {item.title}
        </p>
      </div>
    </motion.div>
  );
}

function AnimatedStats() {
  const stats = [
    {
      icon: TrendingUp,
      value: 94,
      suffix: "%",
      title: "Success Rate",
    },
    {
      icon: Users,
      value: 87,
      suffix: "%",
      title: "Client Retention",
    },
    {
      icon: Award,
      value: 4,
      suffix: "+",
      title: "Successful Years",
    },
    {
      icon: Smile,
      value: 137,
      suffix: "+",
      title: "Happy Clients",
    },
  ];

  return (
    <section className="relative py-18">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span
            className="
              inline-flex
              rounded-full
              border
              border-primary/20
              bg-primary/10
              px-4
              py-1.5
              text-xs
              font-semibold
              uppercase
              tracking-[3px]
              text-primary
            "
          >
            Our Achievements
          </span>

          <h2 className="mt-5 text-4xl font-bold text-text-primary dark:text-text-light lg:text-5xl">
            Numbers That Reflect
            <span className="text-primary"> Our Excellence</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-text-secondary dark:text-text-light/70">
            Every project we deliver strengthens our commitment to quality,
            innovation, and long-term partnerships with businesses across
            industries.
          </p>
        </div>

        {/* Stats */}
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((item, index) => (
            <StatCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AnimatedStats;
