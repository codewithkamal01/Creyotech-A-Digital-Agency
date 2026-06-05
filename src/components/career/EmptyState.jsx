import React from "react";

function EmptyState() {
  return (
    <div className="rounded-3xl border dark:border-white/20 p-12 text-center">
      <h3 className="text-2xl font-bold dark:text-text-light">No Jobs Found</h3>

      <p className="mt-2 text-gray-500">Try changing your filters.</p>
    </div>
  );
}

export default EmptyState;
