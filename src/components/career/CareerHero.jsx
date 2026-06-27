import React from "react";

function CareerHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-violet-600 py-24">
      <div className="container mx-auto px-6 text-center">
        <span className="rounded-full bg-white/20 px-4 py-2 text-sm text-white">
          Join Our Team
        </span>

        <h1 className="mt-6 text-5xl font-bold text-white">
          Build The Future With Us
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
          We&apos;re looking for passionate people to help us create amazing
          digital experiences.
        </p>
      </div>
    </section>
  );
}

export default CareerHero;
