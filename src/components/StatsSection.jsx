import {
  BriefcaseBusiness,
  Users,
  Building2,
  BadgeCheck,
  FolderKanban,
  Clock3,
} from "lucide-react";
import CountUp from "react-countup";
import Title from "./Title";

const statsData = [
  {
    icon: FolderKanban,
    number: "187",
    label: "Completed Projects",
  },
  {
    icon: Users,
    number: "137",
    label: "Happy Clients",
  },
  {
    icon: Building2,
    number: "4",
    label: "Offshore Development Centres",
  },
  {
    icon: BadgeCheck,
    number: "13",
    label: "Government Accreditations",
  },
  {
    icon: BriefcaseBusiness,
    number: "126",
    label: "Maintenance Projects",
  },
  {
    icon: Clock3,
    number: "10,000",
    label: "Development Hours",
  },
];

function StatsSection() {
  return (
    <section className="relative overflow-hidden py-24 px-24">
      {/* Glow */}
      <div
        className="
          absolute
          inset-0
          -z-10
          rounded-[2rem]
          bg-primary/10
          blur-3xl
        "
      />

      <div className="mx-auto max-w-7xl">
        {/* Title */}
        <div
          className="
    mb-12
    gap-5
    flex
    flex-col
    items-center
    justify-center
    text-center
    dark:text-text-light
  "
        >
          <Title
            title={"Excellence in Execution"}
            desc={"Proven Results & Growth"}
          />
        </div>

        {/* Main Container */}
        <div
          className="
            rounded-[2rem]
            border
            border-primary/10
            bg-white/40
            p-4
            backdrop-blur-2xl
            dark:border-white/10
            dark:bg-white/[0.03]
            sm:p-6
          "
        >
          {/* Top Row */}
          <div
            className="
              mb-10
              flex
              flex-col
              items-center
              justify-between
              gap-4
              text-center
              sm:flex-row
              sm:text-left
            "
          >
            <div>
              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[3px]
                  text-primary
                "
              >
                Trusted Performance
              </p>

              <h3
                className="
                  mt-2
                  text-2xl
                  font-bold
                  text-text-primary
                  dark:text-white
                "
              >
                Delivering measurable business impact.
              </h3>
            </div>

            <div
              className="
                rounded-2xl
                border
                border-primary/20
                bg-primary/10
                px-4
                py-2
                text-sm
                font-medium
                text-primary
              "
            >
              Since 2016
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {statsData.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-3xl
                    border
                    border-primary/10
                    bg-gradient-to-br
                    from-primary/10
                    to-transparent
                    p-5
                    transition-all
                    duration-300
                    will-change-transform
                    hover:-translate-y-1
                    hover:border-primary/20
                    hover:shadow-[0_20px_40px_rgba(59,130,246,0.12)]
                    dark:border-white/10
                    sm:p-6
                  "
                >
                  {/* Hover Glow */}
                  <div
                    className="
                      absolute
                      right-0
                      top-0
                      h-24
                      w-24
                      rounded-full
                      bg-primary/10
                      blur-2xl
                      transition-all
                      duration-300
                      group-hover:scale-150
                    "
                  />

                  {/* Icon */}
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-2xl
                      bg-primary/15
                      text-primary
                      sm:h-14
                      sm:w-14
                    "
                  >
                    <Icon size={28} strokeWidth={2.2} />
                  </div>

                  {/* Number */}
                  <h2
                    className="
                      mt-6
                      text-3xl
                      font-bold
                      tracking-tight
                      text-text-primary
                      dark:text-white
                      sm:text-4xl
                    "
                  >
                    <CountUp
                      end={Number(item.number.replace(/,/g, ""))}
                      duration={3}
                      separator=","
                      enableScrollSpy
                      scrollSpyOnce
                    />
                  </h2>

                  {/* Label */}
                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-text-secondary
                      dark:text-white/70
                    "
                  >
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
