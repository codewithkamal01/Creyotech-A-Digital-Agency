import LegalPage from "../legal/LegalPage";
import LegalSection from "../legal/LegalSection";

function RefundPolicy() {
  return (
    <LegalPage
      title="Refund Policy"
      subtitle="This Refund Policy explains the terms governing refunds, cancellations, and course access for all educational services offered by Creyotech Learning."
    >
      <LegalSection title="No Refunds">
        <p>
          At Creyotech Learning a subsidiary of Creyotech, we provide
          educational services through online classes in various technical and
          non-technical professional courses oriented towards job readiness.
        </p>

        <p>
          Once payment is made and access to course materials or services has
          been granted, we do not offer refunds under any circumstances.
        </p>
      </LegalSection>

      <LegalSection title="Exemptions">
        <p>
          As our courses are delivered digitally, no physical products are
          involved.
        </p>

        <p>Therefore, the concept of returns or exchanges does not apply.</p>

        <p>
          This policy ensures fairness, as students gain immediate access to
          valuable course content, resources, and instructor support upon
          payment.
        </p>
      </LegalSection>

      <LegalSection title="Course Access">
        <p>
          Upon successful enrollment and payment, students will have access to
          the online course materials for the duration specified at the time of
          enrollment.
        </p>

        <p>
          It is the responsibility of the student to utilize the provided
          resources within the stipulated timeframe.
        </p>
      </LegalSection>

      <LegalSection title="Technical Issues">
        <p>
          If you experience technical difficulties that prevent you from
          accessing the course content, please contact our support team at
          <strong> creyotechofficial@gmail.com</strong>, and we will assist in
          resolving the issue.
        </p>
      </LegalSection>

      <LegalSection title="Cancellations">
        <p>
          Once payment is processed and course access is provided, no
          cancellations are allowed.
        </p>

        <p>
          Please ensure that the course you are enrolling in meets your
          professional development needs before making the payment.
        </p>
      </LegalSection>

      <LegalSection title="Contact Information">
        <p>
          If you have any questions or concerns regarding this policy, please
          contact us at:
        </p>

        <div className="mt-6 rounded-2xl border border-border-light bg-primary/5 p-6 dark:border-border-dark">
          <h3 className="text-lg font-semibold dark:text-text-light">
            Creyotech Learning
          </h3>

          <p className="mt-3 text-text-secondary">
            Email:
            <br />
            <strong>creyotechofficial@gmail.com</strong>
          </p>
        </div>
      </LegalSection>
    </LegalPage>
  );
}

export default RefundPolicy;
