import {
  MapPin,
  Briefcase,
  Clock3,
  CalendarDays,
  ArrowLeft,
  Users2,
  Banknote,
} from "lucide-react";

function JobHero({ job }) {
  return (
    <section className="relative overflow-hidden border-b border-border-light bg-white py-12 md:py-20 dark:border-white/10 dark:bg-bg-dark">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 lg:flex-row lg:items-start lg:justify-between">
        {/* Left Content Column */}
        <div className="flex-1 max-w-3xl">
          {/* Back Navigation Breadcrumb */}
          <a
            href="/career"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors mb-6 group"
          >
            <ArrowLeft
              size={16}
              className="transition-transform group-hover:-translate-x-1"
            />
            Back to Careers
          </a>

          {/* Badges Layout */}
          <div className="mb-6 flex flex-wrap gap-2.5">
            <span className="rounded-full bg-primary/10 px-3.5 py-1 text-xs font-semibold tracking-wide uppercase text-primary">
              {job.category}
            </span>

            <span className="rounded-full bg-green-500/10 px-3.5 py-1 text-xs font-semibold tracking-wide uppercase text-green-600 dark:text-green-400">
              {job.type}
            </span>
          </div>

          {/* Main Job Title */}
          <h1 className="text-3xl font-extrabold tracking-tight text-text-primary md:text-5xl lg:leading-[1.15] dark:text-text-light">
            {job.title}
          </h1>

          {/* Core Job Description Summary */}
          <p className="mt-5 text-base md:text-lg leading-8 text-text-secondary dark:text-text-light/70">
            {job.description}
          </p>

          {/* Primary Distinguishing Secondary Info Row (Removes pure redundancy) */}
          <div className="mt-8 pt-6 border-t border-dashed border-border-light dark:border-white/5 flex flex-wrap gap-6">
            <div className="flex items-center gap-2.5 text-sm text-text-secondary dark:text-text-light/70">
              <Banknote size={18} className="text-primary" />
              <span className="font-medium text-text-primary dark:text-text-light">
                {job.salary || "Competitive Salary"}
              </span>
            </div>
            <div className="flex items-center gap-2.5 text-sm text-text-secondary dark:text-text-light/70">
              <CalendarDays size={18} />
              <span>Posted: {job.postedDate || "Just recently"}</span>
            </div>
          </div>
        </div>

        {/* Right Sticky Overview Sidebar Card */}
        <div className="w-full lg:max-w-sm rounded-3xl border border-border-light bg-white p-6 md:p-8 shadow-xl shadow-gray-100/50 dark:border-white/10 dark:bg-secondary dark:shadow-none lg:sticky lg:top-6 dark:text-text-light">
          <h3 className="text-lg font-bold tracking-tight border-b border-border-light dark:border-white/5 pb-4">
            Job Overview
          </h3>

          <div className="mt-5 space-y-4">
            <OverviewRow
              label="Location"
              value={job.location}
              icon={<MapPin size={16} />}
            />
            <OverviewRow
              label="Job Type"
              value={job.type}
              icon={<Briefcase size={16} />}
            />
            <OverviewRow
              label="Experience"
              value={job.experience}
              icon={<Clock3 size={16} />}
            />
            <OverviewRow
              label="Duration"
              value={job.duration}
              icon={<CalendarDays size={16} />}
            />
            <OverviewRow
              label="Openings"
              value={`${job.openings} Positions`}
              icon={<Users2 size={16} />}
            />
          </div>

          {/* Apply Micro-Action Scroll Anchor Trigger */}
          <button
            onClick={() =>
              document.getElementById("apply")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            className="mt-8 w-full rounded-2xl cursor-pointer bg-primary px-6 py-4 font-semibold text-white shadow-md shadow-primary/10 transition-all hover:opacity-95 hover:shadow-lg active:scale-[0.99]"
          >
            Apply Now
          </button>
        </div>
      </div>
    </section>
  );
}

function OverviewRow({ label, value, icon }) {
  return (
    <div className="flex items-center justify-between border-b border-border-light pb-3.5 last:border-0 last:pb-0 dark:border-white/5">
      <div className="flex items-center gap-2.5 text-text-secondary dark:text-text-light/70">
        <span className="text-primary/70 dark:text-text-light/50">{icon}</span>
        <span className="text-sm font-medium">{label}</span>
      </div>

      <span className="text-sm font-semibold text-text-primary dark:text-text-light text-right max-w-[60%] truncate">
        {value}
      </span>
    </div>
  );
}

export default JobHero;
