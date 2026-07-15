import LegalPage from "../legal/LegalPage";
import LegalSection from "../legal/LegalSection";

function ProjectDeliveryPolicy() {
  return (
    <LegalPage
      title="Project Delivery Policy"
      subtitle="This policy outlines the project delivery process, engagement terms, payment conditions, and responsibilities for software development services provided by Creyotech."
      effectiveDate="11 November 2024"
      lastUpdated="8 November 2024"
    >
      <LegalSection title="1. Scope of Services">
        <p>
          Creyotech provides software development services including custom
          software solutions, web applications, mobile applications, consulting,
          AI solutions, and technology services for startups, SMEs, and
          enterprises.
        </p>
      </LegalSection>

      <LegalSection title="2. Project Lifecycle">
        <p>
          Every project follows a structured delivery process consisting of
          requirement gathering, planning, UI/UX design, development, testing,
          deployment, and post-launch support.
        </p>

        <p>
          Project milestones are finalized with the client before development
          begins and may vary depending on the engagement model.
        </p>
      </LegalSection>

      <LegalSection title="3. Project Timeline & Scope">
        <p>
          Project timelines are communicated through formal proposals, contracts,
          or email.
        </p>

        <p>
          Any requested scope changes after project approval may require revised
          timelines, additional development effort, and corresponding cost
          adjustments.
        </p>
      </LegalSection>

      <LegalSection title="4. Payment Terms">
        <p>
          Projects may follow upfront, milestone-based, monthly, or custom
          payment schedules as agreed with the client.
        </p>

        <p>
          Payments are securely processed using Razorpay and other approved
          payment methods.
        </p>

        <p>
          All completed payments are non-refundable unless otherwise specified
          in a written agreement.
        </p>
      </LegalSection>

      <LegalSection title="5. Client Responsibilities">
        <p>
          Clients are responsible for providing accurate project requirements,
          business information, timely approvals, content, credentials, and
          feedback necessary for successful project execution.
        </p>

        <p>
          Delays caused by incomplete information or delayed approvals may
          impact delivery schedules.
        </p>
      </LegalSection>

      <LegalSection title="6. Communication & Reporting">
        <p>
          Project communication may take place through email, project management
          tools, documentation platforms, scheduled meetings, or other agreed
          communication channels.
        </p>

        <p>
          Progress updates are shared according to the agreed engagement model
          and reporting schedule.
        </p>
      </LegalSection>

      <LegalSection title="7. Quality Assurance & Acceptance">
        <p>
          Every project undergoes quality assurance, testing, and verification
          before delivery.
        </p>

        <p>
          Acceptance criteria are mutually agreed before project execution.
          Issues identified during acceptance testing will be resolved according
          to the project agreement.
        </p>
      </LegalSection>

      <LegalSection title="8. Support & Maintenance">
        <p>
          Post-launch support and maintenance services are available based on
          the signed agreement.
        </p>

        <p>
          Requests for additional features, upgrades, or enhancements beyond the
          agreed scope may be treated as separate engagements.
        </p>
      </LegalSection>

      <LegalSection title="9. Confidentiality & Security">
        <p>
          Creyotech follows industry best practices to protect client
          information, project assets, source code, and confidential business
          data while complying with applicable data protection regulations.
        </p>
      </LegalSection>

      <LegalSection title="10. Intellectual Property">
        <p>
          Ownership of project deliverables transfers to the client upon full
          payment unless otherwise specified in the project agreement.
        </p>

        <p>
          Creyotech retains ownership of proprietary frameworks, reusable
          libraries, internal tools, and pre-existing intellectual property.
        </p>
      </LegalSection>

      <LegalSection title="11. Cancellation & Termination">
        <p>
          Projects may be cancelled according to the agreed contractual terms.
          Outstanding invoices and completed work remain payable upon
          termination.
        </p>
      </LegalSection>

      <LegalSection title="12. Dispute Resolution">
        <p>
          Project-related disputes will first be addressed through discussion
          between both parties. If unresolved, disputes shall be governed by the
          laws of India and fall under the jurisdiction of the courts of
          Kolkata, West Bengal.
        </p>
      </LegalSection>

      <LegalSection title="13. Force Majeure">
        <p>
          Creyotech shall not be held responsible for delays caused by events
          beyond reasonable control, including natural disasters, government
          actions, internet outages, pandemics, or other unforeseen
          circumstances.
        </p>
      </LegalSection>

      <LegalSection title="14. Policy Updates">
        <p>
          This Project Delivery Policy may be updated periodically to reflect
          operational, legal, or regulatory changes. The latest version will
          always be available on our website.
        </p>
      </LegalSection>

      <LegalSection title="Contact Information">
        <div className="rounded-2xl border border-border-light bg-primary/5 p-6 dark:border-border-dark">
          <h3 className="text-lg font-semibold dark:text-text-light">
            Creyotech
          </h3>

          <p className="mt-4 text-text-secondary">
            Email:
            <br />
            <strong>creyotechofficial@gmail.com</strong>
          </p>

          <p className="mt-4 text-text-secondary">
            Address:
            <br />
            877 South Kumrakhali
            <br />
            Kolkata – 700103
            <br />
            West Bengal, India
          </p>
        </div>
      </LegalSection>
    </LegalPage>
  );
}

export default ProjectDeliveryPolicy;