import React from "react";
import JobCard from "./JobCard";

function JobGrid({jobs}) {
  return (
    <div className="mt-12 grid gap-6">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}

export default JobGrid;
