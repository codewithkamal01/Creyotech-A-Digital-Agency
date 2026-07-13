import { Cpu } from "lucide-react";

function JobTechStack({ techStack }) {
  if (!techStack?.length) return null;

  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border border-border-light bg-white p-8 shadow-sm dark:border-white/10 dark:bg-secondary">
          <div className="mb-8 flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Cpu size={28} />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-text-primary dark:text-text-light">
                Tech Stack
              </h2>

              <p className="mt-1 text-text-secondary dark:text-text-light/70">
                Technologies and tools you&apos;ll work with.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="
                  rounded-full
                  border
                  border-primary/20
                  bg-primary/10
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  text-primary
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-primary
                  hover:bg-primary
                  hover:text-white
                "
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default JobTechStack;
