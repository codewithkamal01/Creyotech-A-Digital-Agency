import React from "react";
import Title from "../Title";
import TrustedBy from "../TrustedBy";
import { clg_logos } from "../../assets/assets";

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
        cardHeight="h-24"
        logoHeight="max-h-14"
      />
    </section>
  );
}

export default CampusCollab;
