function LegalHero({ title, subtitle }) {
  return (
    <div className="border-b border-border-light bg-primary/5 py-16 dark:border-border-dark">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h1 className="text-4xl font-bold text-text-primary dark:text-text-light lg:text-5xl">
          {title}
        </h1>

        {subtitle && (
          <p className="mx-auto mt-5 max-w-3xl text-text-secondary">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}

export default LegalHero;