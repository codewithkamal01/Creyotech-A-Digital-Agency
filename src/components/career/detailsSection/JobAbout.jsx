import { Building2, BriefcaseBusiness } from "lucide-react";

function JobAbout({ job }) {
  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 md:gap-8 lg:grid-cols-2">
          {/* About Company Card */}
          <div className="rounded-3xl border-t-6 border-blue-700 bg-white p-6 md:p-8 shadow-sm dark:border-white/10 dark:bg-secondary flex flex-col justify-between">
            <div>
              {/* Header Icon Indicator */}
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-primary/20">
                <Building2 size={24} />
              </div>

              {/* Card Title */}
              <h2 className="text-xl font-bold tracking-tight text-text-primary dark:text-text-light md:text-2xl">
                About Creyotech
              </h2>

              {/* Dynamic Paragraph Wrapper */}
              <div className="mt-4 text-sm md:text-base leading-7 text-text-secondary dark:text-text-light/70 whitespace-pre-line space-y-4">
                {job.aboutCompany}
              </div>
            </div>
          </div>

          {/* Role Overview Card */}
          <div className="rounded-3xl border-t-6 border-blue-700 bg-white p-6 md:p-8 shadow-sm dark:border-white/10 dark:bg-secondary flex flex-col justify-between">
            <div>
              {/* Header Icon Indicator */}
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-primary/20">
                <BriefcaseBusiness size={24} />
              </div>

              {/* Card Title */}
              <h2 className="text-xl font-bold tracking-tight text-text-primary dark:text-text-light md:text-2xl">
                Role Overview
              </h2>

              {/* Dynamic Paragraph Wrapper */}
              <div className="mt-4 text-sm md:text-base leading-7 text-text-secondary dark:text-text-light/70 whitespace-pre-line space-y-4">
                {job.roleOverview}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default JobAbout;
