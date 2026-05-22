import React from "react";
import Title from "../Title";
import { clg_logos } from "../../assets/assets";
import TrustedBy from "../home/TrustedBy";

function CampusCollab() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Logos */}
      <TrustedBy
        logos={clg_logos}
        badge="Academic Partnerships"
        title="Campus Collaboration"
        speed={18}
        className="!px-0 !pb-0"
        cardWidth="w-44"
        cardHeight="h-32"
        logoHeight="max-h-26"
      />
    </section>
  );
}

export default CampusCollab;
