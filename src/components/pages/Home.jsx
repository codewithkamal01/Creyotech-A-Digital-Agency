import React from "react";
import Services from "../Services";
import LatestWork from "../LatestWork";
import Contact from "../home/Contact";
import { company_logos } from "../../assets/assets";
import Hero from "../home/Hero";
import FAQ from "../home/FAQ";
import TrustedBy from "../home/TrustedBy";
import EngagementModels from "../home/EngagementModels";
import SpecialityCard from "../home/SpecialityCard";
import BuiltInAssurances from "../home/BuiltInAssurances";
import TechnologyStack from "../home/TechnologyStack";
import AnimatedParagraph from "../home/AnimatedParagraph";
import IndustriesSection from "../home/IndustriesSection";

function Home() {
  return (
    <>
      <Hero />
      <AnimatedParagraph/>
      <TrustedBy
        badge="Trusted Worldwide"
        title="Trusted by Leading Companies"
        logos={company_logos}
      />
      <SpecialityCard />
      <Services />
      <IndustriesSection/>
      <BuiltInAssurances />
      <LatestWork />
      <EngagementModels />
      <TechnologyStack />
      <FAQ />
      <Contact />
    </>
  );
}

export default Home;
