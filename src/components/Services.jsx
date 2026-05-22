import React from "react";
import ServiceCard from "./ServiceCard";

import {
  Globe,
  Cloud,
  Smartphone,
  Megaphone,
  Bot,
  Briefcase,
  BadgeDollarSign,
  Users,
} from "lucide-react";

const services = [
  {
    title: "Website Development",
    icon: Globe,
    desc: "Custom websites and conversion-focused platforms designed to build strong digital presence and drive measurable growth.",
  },
  {
    title: "Cloud Application Development",
    icon: Cloud,
    desc: "Scalable, secure and high-performance cloud applications built to streamline operations and improve business agility.",
  },
  {
    title: "Mobile Application Development",
    icon: Smartphone,
    desc: "User-friendly Android and iOS applications engineered for seamless customer engagement and enhanced digital experiences.",
  },
  {
    title: "Digital Marketing",
    icon: Megaphone,
    desc: "Integrated growth strategies including SEO, influencer campaigns and paid advertising to generate quality leads.",
  },
  {
    title: "Proprietary AI Outreach Platforms",
    icon: Bot,
    desc: "AI-powered automation tools for intelligent lead generation, engagement acceleration and scalable outreach.",
  },
  {
    title: "Business Incorporation & Statutory Compliance",
    icon: Briefcase,
    desc: "End-to-end support for company registration, GST, trademark protection and regulatory certifications.",
  },
];

function Services() {
  return (
    <section className="bg-bg-light dark:bg-bg-dark py-20 px-5 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary">
            Our Services
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-secondary/70">
            Smart digital and business solutions built to help brands scale
            faster and operate better.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
