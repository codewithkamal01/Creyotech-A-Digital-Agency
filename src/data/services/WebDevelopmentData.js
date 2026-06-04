import { service_images } from "../../assets/assets";

export const webDevelopmentData = {
  hero: {
    badge: "Web Development Services",
    title: "Websites Engineered for Growth, Performance & Conversions",
    description:
      "From business websites to enterprise-grade web applications, we build digital experiences designed to support your business objectives and long-term growth.",
    ctaPrimary: "Book Free Consultation",
    ctaSecondary: "View Our Work",
    image: service_images.webapp,
  },

  offerings: [
    {
      id: "complimentary",
      title: "Complimentary Website Offering",
      subtitle: "For Verified Businesses",
      type: "featured",
      description:
        "A complimentary website initiative designed to help verified startups and small businesses establish their initial digital presence.",

      idealFor: [
        "Verified Startups",
        "Small Businesses",
        "Local Service Providers",
        "New Business Owners",
      ],

      features: [
        "No Development Cost",
        "Mobile Responsive Website",
        "Business Information Pages",
        "Basic SEO Setup",
      ],

      eligibility: [
        "GST Registration Certificate",
        "Valid Trade License",
        "Current Account or CC Account",
        "Successful Business Verification",
      ],

      conditions: [
        "Client provides all website content",
        "Domain includes Creyotech branding",
        "Limited customization",
        "Standardized design framework",
      ],
    },

    {
      id: "portfolio",
      title: "Modern & Luxury Portfolio Websites",
      subtitle: "Premium Brand Presence",
      type: "premium",
      description:
        "Premium websites designed to strengthen brand perception, build credibility, and generate qualified inquiries.",

      idealFor: [
        "Consultants",
        "Professional Service Providers",
        "Startups",
        "Premium Brands",
      ],

      features: [
        "Luxury UI/UX Design",
        "Brand-Aligned Visual Identity",
        "Service Showcase Sections",
        "Lead Generation Forms",
        "Mobile-First Architecture",
        "Performance Optimization",
      ],

      eligibility: [],

      conditions: [
        "Client provides branding assets",
        "Content strategy consultation included",
      ],
    },

    {
      id: "mini-commerce",
      title: "Mini E-Commerce Websites",
      subtitle: "Payment-Focused Solution",
      type: "commerce",
      description:
        "Lightweight e-commerce solutions focused on secure online payments and fast market entry.",

      idealFor: [
        "Local Businesses",
        "Service Providers",
        "Pilot Launches",
        "Small Product Catalogs",
      ],

      features: [
        "Payment Gateway Integration",
        "Product Listing Pages",
        "Basic Order Workflow",
        "Fast Loading Architecture",
      ],

      eligibility: [],

      conditions: ["Limited catalog size", "Designed for simple transactions"],
    },

    {
      id: "enterprise-commerce",
      title: "Full-Scale E-Commerce Solutions",
      subtitle: "Enterprise Ready",
      type: "enterprise",
      description:
        "Enterprise-grade commerce platforms with automation, integrations, and scalability at the core.",

      idealFor: [
        "Retail Brands",
        "Manufacturers",
        "Large Catalog Stores",
        "Growth-Stage Businesses",
      ],

      features: [
        "Payment Gateway Integration",
        "CRM Integration",
        "Inventory Management",
        "Analytics & Reporting",
        "Marketing Automation",
        "Customer Lifecycle Tracking",
      ],

      eligibility: [],

      conditions: [
        "Requires discovery workshop",
        "Custom implementation roadmap",
      ],
    },
  ],

  agencySelectionGuide: {
    title: "What Really Matters When Selecting a Website Development Agency",

    factors: [
      {
        title: "Relevant Experience",
        description:
          "Choose an agency with proven experience delivering similar projects.",
      },

      {
        title: "Business Understanding",
        description:
          "A great agency understands your customers, sales process, and objectives.",
      },

      {
        title: "Clear Process",
        description:
          "Structured planning and execution reduce delays and risks.",
      },

      {
        title: "Right Team",
        description:
          "Know exactly who will work on your project and where expertise comes from.",
      },

      {
        title: "SEO & Performance",
        description:
          "Fast, mobile-friendly, search-optimized websites are non-negotiable.",
      },

      {
        title: "Ownership & Control",
        description:
          "Retain complete ownership of domains, hosting, and source code.",
      },

      {
        title: "Transparent Pricing",
        description:
          "Expect clear scope, timelines, milestones, and deliverables.",
      },

      {
        title: "Communication Quality",
        description: "Responsive communication prevents project bottlenecks.",
      },

      {
        title: "Proven Credibility",
        description:
          "Request references, case studies, and measurable results.",
      },
    ],

    scorecard: [
      "Relevant Industry Experience",
      "Business Understanding",
      "Process Clarity",
      "SEO & Performance Readiness",
      "Pricing Transparency",
      "Communication Quality",
    ],
  },

  whyCreyotech: {
    title: "Why Businesses Choose Creyotech",

    points: [
      "Strategically aligned with business goals",
      "Designed to generate qualified leads",
      "SEO-first architecture",
      "100% ownership and control",
      "Built for scalability",
      "Long-term growth focused",
    ],
  },

  faqs: [
    {
      question: "How long does website development take?",
      answer:
        "Most business websites take between 2–6 weeks depending on scope and content readiness.",
    },

    {
      question: "Will I own my website completely?",
      answer:
        "Yes. You retain ownership of your website, content, domain, hosting, and source code.",
    },

    {
      question: "Do you provide SEO optimization?",
      answer:
        "Yes. All websites are developed with technical SEO and performance best practices.",
    },

    {
      question: "Can you redesign my existing website?",
      answer:
        "Absolutely. We can modernize, optimize, and migrate existing websites.",
    },

    {
      question: "Do you offer maintenance after launch?",
      answer:
        "Yes. We provide ongoing maintenance, support, and performance optimization plans.",
    },
  ],
};
