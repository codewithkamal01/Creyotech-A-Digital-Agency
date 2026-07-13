import { useParams } from "react-router-dom";
import JobHero from "./detailsSection/JobHero";
import { jobs } from "../../data/jobs";
import JobAbout from "./detailsSection/JobAbout";
import JobListSection from "./detailsSection/JobListSection";
import JobTechStack from "./detailsSection/JobTechStack";
import JobApply from "./detailsSection/JobApply";

function JobDetails() {
  const { slug } = useParams();

  const job = jobs.find((item) => item.slug === slug);

  if (!job) return <h1>Job Not Found</h1>;

  return (
    <>
      <JobHero job={job} />

      <JobAbout job={job} />

      <JobListSection
        title="Key Responsibilities"
        items={job.responsibilities}
      />
      <JobTechStack techStack={job.techStack} />
      <JobListSection title="Requirements" items={job.requirements} />

      <JobListSection
        title="Preferred Candidates"
        items={job.preferredCandidates}
      />

      <JobListSection title="What You'll Gain" items={job.whatYouWillGain} />

      <JobListSection title="Why Join Us" items={job.whyJoin} />

      {/* Apply */}
      <JobApply />
    </>
  );
}

export default JobDetails;
