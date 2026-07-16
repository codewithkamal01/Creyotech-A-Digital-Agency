import { useParams } from "react-router-dom";
import { jobs } from "../../data/jobs";
import JobAbout from "./detailsSection/JobAbout";

function JobDetails() {
  const { slug } = useParams();

  const job = jobs.find((item) => item.slug === slug);

  if (!job) return <h1>Job Not Found</h1>;

  return (
    <>
      <JobAbout job={job} />
    </>
  );
}

export default JobDetails;
