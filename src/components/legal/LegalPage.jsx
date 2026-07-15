import LegalHero from "./LegalHero";

function LegalPage({ title, subtitle, lastUpdated, effectiveDate, children }) {
  return (
    <>
      <LegalHero title={title} subtitle={subtitle} />

      <section className="py-16">
        <div className="mx-auto max-w-5xl rounded-3xl border border-border-light bg-bg-light p-8 shadow-sm dark:border-border-dark dark:bg-secondary lg:p-12">
          {(effectiveDate || lastUpdated) && (
            <div className="mb-10 flex flex-wrap gap-6 rounded-xl bg-primary/5 p-5 text-sm">
              {effectiveDate && (
                <p>
                  <span className="font-semibold">Effective Date:</span>{" "}
                  {effectiveDate}
                </p>
              )}

              {lastUpdated && (
                <p>
                  <span className="font-semibold">Last Updated:</span>{" "}
                  {lastUpdated}
                </p>
              )}
            </div>
          )}

          <div className="prose prose-neutral max-w-none dark:prose-invert">
            {children}
          </div>
        </div>
      </section>
    </>
  );
}

export default LegalPage;
