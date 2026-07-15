import React from "react";
import { FaReact, FaGitAlt, FaPython, FaJira, FaTasks, FaDrawPolygon, FaCodeBranch, FaClipboardCheck, FaProjectDiagram, FaRobot, FaVideo, FaPhotoVideo, FaCloud } from "react-icons/fa";
import { MdAutoGraph } from "react-icons/md";
import {
  SiPostgresql,
  SiFastapi,
  SiFirebase,
  SiNodedotjs,
  SiWordpress,
  SiMongodb,
  SiMysql,
  SiFigma,
  SiSonarqubecloud,
  SiNextdotjs,
  SiAngular,
  SiHtml5,
  SiOdoo,
  SiZoho,
  SiBuffer,
  SiKotlin,
  SiIonic,
  SiReact,
  SiFlutter,
  SiSemrush,
  SiMeta,
  SiHubspot,
  SiGoogleanalytics,
  SiMiro,
  SiSlackware,
  SiJira,
  SiDocker,
  SiCloudflare,
  SiGrafana,
  SiSelenium,
  SiPostman,
  SiApachejmeter,
  SiOwasp,
  SiSap,
  SiLangchain,
  SiOpenaigym,
} from "react-icons/si";

import { TbDatabase } from "react-icons/tb";

const techCategories = [
  {
    title: "Frontend",
    technologies: [
      { name: "NextJs", icon: <SiNextdotjs /> },
      { name: "ReactJs", icon: <FaReact /> },
      { name: "Angular", icon: <SiAngular /> },
      { name: "HTML/CSS", icon: <SiHtml5 /> },
    ],
  },

  {
    title: "Backend",
    technologies: [
      { name: "Python", icon: <FaPython /> },
      { name: "FastAPI", icon: <SiFastapi /> },
      { name: "CMS", icon: <SiWordpress /> },
      { name: "NodeJs", icon: <SiNodedotjs /> },
    ],
  },

  {
    title: "Databases",
    technologies: [
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MongoDb", icon: <SiMongodb /> },
      { name: "Oracle Db", icon: <TbDatabase /> },
      { name: "Firebase", icon: <SiFirebase /> },
    ],
  },

  {
    title: "Tools & Version Control",
    technologies: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "Jira", icon: <FaJira /> },
      { name: "Figma", icon: <SiFigma /> },
      { name: "SonarQube", icon: <SiSonarqubecloud /> },
    ],
  },
  {
    title: "AI & Machine Learning",
    technologies: [
      { name: "LangChain", icon: <SiLangchain /> },
      { name: "OpenAI", icon: <SiOpenaigym /> },
      { name: "Pydantic AI", icon: <FaRobot /> },
      { name: "RAG", icon: <MdAutoGraph /> },
    ],
  },
  {
    title: "Project Methodologies",
    technologies: [
      { name: "Agile", icon: <FaTasks /> },
      { name: "Scrum", icon: <FaClipboardCheck /> },
      { name: "Kanban", icon: <FaTasks /> },
      { name: "Waterfall", icon: <FaProjectDiagram /> },
    ],
  },
  {
    title: "Testing",
    technologies: [
      { name: "Selenium", icon: <SiSelenium /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "Apache JMeter", icon: <SiApachejmeter /> },
      { name: "OWASP ZAP", icon: <SiOwasp /> },
    ],
  },
  {
    title: "DevOps",
    technologies: [
      { name: "Docker", icon: <SiDocker /> },
      { name: "CI/CD", icon: <FaCodeBranch /> },
      { name: "Cloudflare", icon: <SiCloudflare /> },
      { name: "Grafana", icon: <SiGrafana /> },
    ],
  },
  {
    title: "Requirement & Collabs Tools",
    technologies: [
      { name: "Miro", icon: <SiMiro /> },
      { name: "Slack", icon: <SiSlackware /> },
      { name: "Jira", icon: <SiJira /> },
      { name: "Draw.io", icon: <FaDrawPolygon /> },
    ],
  },
  {
    title: "Digital Marketing Tools",
    technologies: [
      { name: "SEMrush", icon: <SiSemrush /> },
      { name: "Meta Business Suite", icon: <SiMeta /> },
      { name: "HubSpot", icon: <SiHubspot /> },
      { name: "Google Analytics", icon: <SiGoogleanalytics /> },
    ],
  },
  {
    title: "Mobile Development",
    technologies: [
      { name: "Flutter", icon: <SiFlutter /> },
      { name: "React Native", icon: <SiReact /> },
      { name: "Ionic", icon: <SiIonic /> },
      { name: "Kotlin", icon: <SiKotlin /> },
    ],
  },
  {
    title: "Social Media Tools",
    technologies: [
      { name: "Buffer", icon: <SiBuffer /> },
      { name: "Photoshop", icon: <FaPhotoVideo /> },
      { name: "Adobe Premiere Pro", icon: <FaVideo /> },
      { name: "Sprout Social", icon: <FaTasks /> },
    ],
  },
  {
    title: "Enterprise / Operations",
    technologies: [
      { name: "Zoho", icon: <SiZoho /> },
      { name: "Odoo", icon: <SiOdoo /> },
      { name: "Salesforce", icon: <FaCloud /> },
      { name: "SAP", icon: <SiSap /> },
    ],
  },
];

function TechnologyStack() {
  const marqueeItems = [...techCategories, ...techCategories];

  return (
    <section className="px-4 py-18 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <span className="inline-flex rounded-full border border-primary/15 bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            Our Technology Expertise
          </span>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-secondary md:text-5xl dark:text-text-light">
            Technologies We Use
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-text-secondary sm:text-lg dark:text-text-secondary/80">
            We combine modern frameworks, automation tools, and delivery
            practices to build scalable, secure, and high-performing digital
            solutions.
          </p>
        </div>

        <div className="mt-14 overflow-hidden rounded-[2rem] border border-border-light/70 bg-gradient-to-br from-white via-bg-soft to-primary/5 p-4 shadow-[0_20px_80px_rgba(15,23,42,0.08)] dark:border-border-dark dark:from-secondary/80 dark:via-secondary dark:to-primary/10 dark:shadow-[0_20px_80px_rgba(2,6,23,0.45)] sm:p-6 lg:p-8">
          <div className="marquee-track" role="list" aria-label="Technology stack categories">
            {marqueeItems.map((category, idx) => (
              <div
                key={`${category.title}-${idx}`}
                className="marquee-card flex h-full flex-col rounded-[1.5rem] border border-border-light/80 bg-bg-light/95 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-border-dark dark:bg-secondary/90"
              >
                <div className="mb-5 flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-secondary dark:text-text-light">
                    {category.title}
                  </h3>

                </div>

                <div className="grid grid-cols-2 gap-3">
                  {category.technologies.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex h-[96px] w-full flex-col items-center justify-center gap-2 rounded-2xl border border-border-light/70 bg-bg-soft/80 p-3 text-center transition-all duration-200 hover:border-primary/20 hover:bg-primary/10 dark:border-border-dark dark:bg-white/5 dark:hover:bg-primary/15"
                    >
                      <span className="text-2xl text-primary">{tech.icon}</span>
                      <span className="text-[11px] font-semibold leading-4 text-text-secondary dark:text-text-light/90">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechnologyStack;
