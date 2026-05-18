import React from "react";
import AboutStorySection from "./AboutStorySection";
import CareerOpportunities from "./CareerOpportunities";
import GovernmentRecognition from "./GovernmentRecognition";
import CampusCollab from "./CampusCollab";
import StatsSection from "../StatsSection";
import CustomerReviewsSection from "./CustomerReviewsSection";
import ProcessTimeline from "./ProcessTimeline";
import ProcessSection from "./ProcessSection";

function AboutUs() {
  return (
    <div id="about-us" className="pt-30">
      <AboutStorySection />
      <StatsSection />
      <CareerOpportunities />
      <GovernmentRecognition />
      <ProcessTimeline />
      <CampusCollab />
      <ProcessSection/>
      <CustomerReviewsSection />
    </div>
  );
}

export default AboutUs;
