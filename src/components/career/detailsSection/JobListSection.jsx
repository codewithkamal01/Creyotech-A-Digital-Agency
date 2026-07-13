import { CheckCircle2 } from "lucide-react";

function JobListSection({ title, items, columns = 2 }) {
  if (!items?.length) return null;

  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border border-border-light bg-white p-8 shadow-sm dark:border-white/10 dark:bg-secondary">
          <h2 className="text-3xl font-bold text-text-primary dark:text-text-light">
            {title}
          </h2>

          <div
            className={`mt-8 grid gap-5 ${
              columns === 1 ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"
            }`}
          >
            {items.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 rounded-2xl border border-border-light p-5 transition-all duration-300 hover:border-primary/30 hover:bg-primary/5 dark:border-white/10 dark:hover:bg-primary/10"
              >
                <div className="mt-0.5 shrink-0 text-primary">
                  <CheckCircle2 size={22} />
                </div>

                <p className="leading-7 text-text-secondary dark:text-text-light/80">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default JobListSection;
