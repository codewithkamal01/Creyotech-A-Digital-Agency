function LegalSection({ title, children }) {
  return (
    <section className="mb-12">
      <h2 className="mb-5 text-2xl font-bold text-text-primary dark:text-text-light">
        {title}
      </h2>

      <div className="space-y-4 text-[16px] leading-8 text-text-secondary">
        {children}
      </div>
    </section>
  );
}

export default LegalSection;
