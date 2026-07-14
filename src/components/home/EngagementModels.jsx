import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BriefcaseBusiness, Code2, Users, CheckCircle2 } from "lucide-react";
import Title from "../Title";

const engagementModels = [
  {
    id: "fixed",
    title: "Fixed Price Project Engagement",
    shortTitle: "Fixed Scope",
    icon: <BriefcaseBusiness size={30} />,
    description:
      "Suitable for well-defined business requirements, fixed deliverables, predictable budgets, contractual milestones, and structured project execution.",

    steps: [
      {
        title: "Business Discovery & Solution Consulting",
        description:
          "Understand business goals, workflows, challenges, compliance needs, and project success criteria.",
      },
      {
        title: "Requirements Engineering & Scope Baseline",
        description:
          "Define functional requirements, documentation, user journeys, acceptance criteria, and finalize project scope.",
      },
      {
        title: "Commercial Proposal & Project Initiation",
        description:
          "Finalize estimation, roadmap, milestones, contracts, governance model, and project kickoff.",
      },
      {
        title: "Solution Architecture & Experience Design",
        description:
          "Design system architecture, APIs, database, security model, and UI/UX before implementation.",
      },
      {
        title: "Engineering, QA & Verification",
        description:
          "Develop the solution using coding standards, CI/CD, testing, code reviews, and quality assurance.",
      },
      {
        title: "User Acceptance Testing",
        description:
          "Deploy to staging, conduct client validation, resolve feedback, and obtain UAT approval.",
      },
      {
        title: "Production Deployment & Handover",
        description:
          "Deploy to production, configure infrastructure, complete documentation, and train stakeholders.",
      },
      {
        title: "Warranty Support & Project Closure",
        description:
          "Provide post-launch support, resolve issues, transfer knowledge, and transition to maintenance.",
      },
    ],
  },

  {
    id: "agile",
    title: "Agile Project Engagement",
    shortTitle: "Agile Development",
    icon: <Code2 size={30} />,
    description:
      "Ideal for SaaS platforms, enterprise applications, AI products, and continuously evolving digital solutions.",

    steps: [
      {
        title: "Product Discovery & Vision Alignment",
        description:
          "Define product vision, business objectives, MVP scope, user personas, and roadmap.",
      },
      {
        title: "Product Backlog Engineering",
        description:
          "Break requirements into epics, features, user stories, and prioritize the product backlog.",
      },
      {
        title: "Sprint Planning & Technical Foundation",
        description:
          "Establish architecture, DevOps pipelines, sprint cadence, and development standards.",
      },
      {
        title: "Iterative Product Development",
        description:
          "Deliver features through sprint-based development with continuous integration and collaboration.",
      },
      {
        title: "Sprint Review & Retrospective",
        description:
          "Review completed work, collect feedback, refine backlog, and improve sprint performance.",
      },
      {
        title: "Continuous Validation & Releases",
        description:
          "Perform automated testing, security validation, and deploy production-ready releases through CI/CD.",
      },
      {
        title: "Production Operations & Monitoring",
        description:
          "Monitor application health, analytics, infrastructure, incidents, and production stability.",
      },
      {
        title: "Continuous Product Evolution",
        description:
          "Introduce new features, improve scalability, reduce technical debt, and evolve the roadmap.",
      },
    ],
  },

  {
    id: "dedicated",
    title: "Dedicated Development Team Engagement",
    shortTitle: "Dedicated Team",
    icon: <Users size={30} />,
    description:
      "Designed for long-term product development, engineering augmentation, offshore teams, and technology partnerships.",

    steps: [
      {
        title: "Resource Planning & Capability Assessment",
        description:
          "Assess technology stack, project scope, engineering needs, and team composition.",
      },
      {
        title: "Talent Evaluation & Team Formation",
        description:
          "Select engineers through technical evaluation, interviews, and cultural fit assessment.",
      },
      {
        title: "Project Onboarding & Environment Setup",
        description:
          "Configure repositories, cloud environments, CI/CD pipelines, tools, and documentation.",
      },
      {
        title: "Sprint Execution & Engineering Delivery",
        description:
          "Dedicated engineers participate in sprint planning, development, code reviews, and delivery.",
      },
      {
        title: "Continuous Engineering & Quality Management",
        description:
          "Maintain code quality, testing, secure development, documentation, and engineering best practices.",
      },
      {
        title: "Performance Reporting & Governance",
        description:
          "Track sprint velocity, utilization, delivery metrics, engineering reviews, and stakeholder updates.",
      },
      {
        title: "Team Scaling & Capacity Optimization",
        description:
          "Scale engineering resources based on project priorities, roadmap, and business growth.",
      },
      {
        title: "Knowledge Transfer & Engagement Transition",
        description:
          "Complete documentation, repository handover, environment cleanup, and structured project closure.",
      },
    ],
  },
];

function EngagementModels() {
  const [activeModel, setActiveModel] = useState(engagementModels[0]);

  return (
    <section className="px-4 py-20 sm:px-8 lg:px-16 xl:px-24">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center dark:text-text-light">
          <span className="font-medium text-primary pb-5">
            Flexible Engagement Models
          </span>
          <Title
            title="Choose The Collaboration Model
            That Fits Your Business"
          />
          <p className="mx-auto mt-6 max-w-3xl text-text-secondary">
            Whether you need a fixed-cost project, agile product development, or
            dedicated resources, we offer flexible engagement options to match
            your goals.
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {engagementModels.map((model) => (
            <button
              key={model.id}
              onClick={() => setActiveModel(model)}
              className={`relative rounded-full px-8 py-4 text-sm font-medium transition-all duration-300 ${
                activeModel.id === model.id
                  ? "bg-primary text-white shadow-lg"
                  : "border border-border-light bg-bg-light hover:border-primary"
              }`}
            >
              {model.shortTitle}
            </button>
          ))}
        </div>

        {/* Content Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeModel.id}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.3 }}
            className="
              mt-10
              overflow-hidden
              rounded-3xl
              border
              border-border-light
              bg-bg-light
              shadow-lg
              dark:border-border-dark
              dark:bg-secondary
            "
          >
            {/* Steps */}
            <div>
              <div className="px-8 pt-8">
                <div className="px-8 pt-8">
                  <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-white">
                        {activeModel.icon}
                      </div>

                      <div>
                        <h3 className="text-3xl font-bold dark:text-text-light">
                          {activeModel.title}
                        </h3>

                        <p className="mt-2 text-text-secondary">
                          {activeModel.description}
                        </p>
                      </div>
                    </div>

                    <div className="rounded-full bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">
                      {activeModel.steps.length} Phase Delivery Process
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 grid gap-6 p-8 md:grid-cols-2">
                {activeModel.steps.map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="relative rounded-2xl border border-border-light bg-bg-light p-6 transition hover:border-primary dark:border-border-dark dark:bg-bg-dark"
                  >
                    <div className="mb-5 flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary font-bold text-white">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <h5 className="text-lg font-semibold dark:text-text-light">
                        {step.title}
                      </h5>
                    </div>

                    <p className="text-sm leading-7 text-text-secondary">
                      {step.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Footer Benefits */}
            <div className="border-t border-border-light bg-primary/5 p-8">
              <div className="grid gap-6 md:grid-cols-4 dark:text-text-light">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary" />
                  Enterprise Delivery
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary" />
                  Transparent Governance
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary" />
                  Secure Development
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary" />
                  Continuous Support
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default EngagementModels;
