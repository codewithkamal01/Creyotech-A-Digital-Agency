import { CheckCircle } from "lucide-react";

function ApplicationSuccess({ firstName, lastName, email, onReset }) {
  const applicantName = [firstName, lastName].filter(Boolean).join(" ").trim();

  return (
    <section className="animate-fade-in py-24">
      <div className="mx-auto max-w-xl px-6 text-center">
        <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30">
          <CheckCircle size={36} />
        </div>
        <h2 className="mb-4 text-3xl font-bold dark:text-white">
          Application Received!
        </h2>
        <p className="mb-8 text-gray-600 dark:text-gray-400">
          Thank you for applying, {applicantName || "there"}. We have sent a
          confirmation email to{" "}
          <span className="font-medium text-gray-900 dark:text-white">
            {email}
          </span>
          .
        </p>
        <button
          onClick={onReset}
          className="rounded-xl bg-gray-100 px-6 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-200 dark:bg-zinc-800 dark:text-gray-50 dark:hover:bg-zinc-700"
        >
          Apply for another position
        </button>
      </div>
    </section>
  );
}

export default ApplicationSuccess;
