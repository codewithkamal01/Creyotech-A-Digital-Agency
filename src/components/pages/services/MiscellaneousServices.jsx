import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import FAQ from "../../../components/home/FAQ";
import { miscellaneousServices } from "../../../data/services/miscellaneousServices";

function MiscellaneousServices() {
  return (
    <section className="space-y-12">
      {miscellaneousServices.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className="
            group
            relative
            scroll-mt-28
            overflow-hidden
            border
            border-border-light
            bg-gradient-to-br
            from-white
            via-white
            to-primary/5
            shadow-sm
            transition-all
            duration-500
            hover:-translate-y-1
            hover:border-primary/20
            hover:shadow-2xl
            dark:border-white/10
            dark:from-secondary
            dark:via-secondary
            dark:to-primary/10
            lg:p-10
          "
        >
          {/* Decorative Top Border */}
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-indigo-400 to-cyan-400" />

          {/* Background Glow */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl transition-all duration-500 group-hover:scale-125" />

          {/* Header */}
          <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-3xl">
              <span
                className="
                  inline-flex
                  items-center
                  rounded-full
                  border
                  border-primary/20
                  bg-primary/10
                  px-4
                  py-1.5
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[2px]
                  text-primary
                "
              >
                Service {String(index + 1).padStart(2, "0")}
              </span>

              <h2 className="mt-5 text-3xl font-bold text-text-primary dark:text-text-light lg:text-4xl">
                {service.title}
              </h2>

              <p className="mt-5 max-w-2xl leading-8 text-text-secondary dark:text-text-light/70">
                {service.description}
              </p>
            </div>

            <div
              className="
                flex
                h-20
                w-20
                shrink-0
                items-center
                justify-center
                rounded-3xl
                bg-primary/10
                text-primary
                shadow-lg
                shadow-primary/10
              "
            >
              <CheckCircle2 size={34} />
            </div>
          </div>

          {/* Divider */}
          <div className="relative z-10 my-10 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

          {/* Features */}
          <div className="relative z-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {service.features.map((feature) => (
              <div
                key={feature}
                className="
                  flex
                  items-center
                  gap-4
                  rounded-2xl
                  border
                  border-border-light
                  bg-white/70
                  p-4
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-primary
                  hover:bg-primary/5
                  hover:shadow-lg
                  dark:border-white/10
                  dark:bg-white/5
                "
              >
                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-primary/10
                    text-primary
                  "
                >
                  <CheckCircle2 size={18} />
                </div>

                <span className="font-medium text-text-primary dark:text-text-light">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div
            className="
              relative
              z-10
              mt-12
              flex
              flex-col
              gap-6
              rounded-3xl
              border
              border-primary/15
              bg-primary/5
              p-6
              dark:bg-primary/10
              lg:flex-row
              lg:items-center
              lg:justify-between
            "
          >
            <div>
              <h3 className="text-xl font-semibold text-text-primary dark:text-text-light">
                Ready to get started?
              </h3>

              <p className="mt-2 max-w-xl text-text-secondary dark:text-text-light/70">
                Our experts can help you choose the right solution based on your
                business goals, budget, and future growth plans.
              </p>
            </div>

            <Link
              to="/contact-us"
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-primary
                px-6
                py-3
                font-medium
                text-white
                transition-all
                duration-300
                hover:scale-105
                hover:shadow-xl
                hover:shadow-primary/30
              "
            >
              Get Started
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      ))}

      <FAQ />
    </section>
  );
}

export default MiscellaneousServices;
