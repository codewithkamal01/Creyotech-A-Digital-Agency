import React from "react";
import { Wallet, Truck, ShieldCheck, BadgeCheck } from "lucide-react";
import Title from "../Title";

function SpecialityCard() {
  const items = [
    {
      title: "Budget Friendly",
      icon: <Wallet size={28} />,
      desc: "Affordable and scalable digital solutions tailored for startups and growing businesses.",
    },
    {
      title: "Fast Delivery",
      icon: <Truck size={28} />,
      desc: "Efficient workflows and agile execution ensure timely project delivery.",
    },
    {
      title: "Value Driven",
      icon: <ShieldCheck size={28} />,
      desc: "Focused on long-term business impact, transparency, and measurable results.",
    },
    {
      title: "Maintain Quality",
      icon: <BadgeCheck size={28} />,
      desc: "Strict quality standards and testing processes for reliable digital experiences.",
    },
  ];

  return (
    <section
      className="
        relative
        overflow-hidden
        px-4
        py-20
        sm:px-8
        lg:px-16
        xl:px-24
      "
    >
      <div className="mb-10 flex flex-col gap-8 items-center">
        <Title title="Our Specialities" />
      </div>
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="
            absolute
            left-1/2
            top-0
            h-80
            w-80
            -translate-x-1/2
            rounded-full
            bg-primary/10
            blur-3xl
          "
        />
      </div>

      <div
        className="
          mx-auto
          grid
          max-w-7xl
          gap-6
          sm:grid-cols-2
          xl:grid-cols-4
        "
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="
              group
              relative
              flex
              flex-col
              items-center
              overflow-hidden
              rounded-4xl
              border
              border-primary/10
              bg-white/70
              p-7
              shadow-[0_15px_40px_rgba(0,0,0,0.04)]
              backdrop-blur-xl
              transition-all
              duration-300
              hover:-translate-y-2
              hover:border-primary/20
              hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]
              dark:border-white/10
              dark:bg-white/[0.03]
            "
          >
            {/* Hover Glow */}
            <div
              className="
                absolute
                right-0
                top-0
                h-28
                w-28
                rounded-full
                bg-primary/10
                blur-3xl
                opacity-0
                transition-all
                duration-500
                group-hover:opacity-100
              "
            />

            {/* Icon */}
            <div
              className="
                relative
                z-10
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-2xl
                bg-primary/10
                text-primary
                transition-all
                duration-300
                group-hover:scale-110
                group-hover:bg-primary
                group-hover:text-white
              "
            >
              {item.icon}
            </div>

            {/* Content */}
            <div className="relative z-10 mt-6 text-center">
              <h2
                className="
                  text-xl
                  font-bold
                  text-text-primary
                  transition-all
                  duration-300
                  dark:text-white
                "
              >
                {item.title}
              </h2>

              <p
                className="
                  mt-3
                  text-sm
                  leading-5
                  text-text-secondary
                  dark:text-white/70
                "
              >
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SpecialityCard;
