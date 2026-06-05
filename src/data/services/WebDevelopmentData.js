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

  packages: {
    title: "Website Development Packages",

    subtitle:
      "Choose the website solution that aligns with your business stage, goals, and growth plans.",

    plans: [
      {
        id: "starter-business-presence",

        name: "Starter Business Presence",

        badge: "Best for New Businesses",

        shortDescription:
          "A professional website designed to establish credibility and create a strong first digital presence.",

        highlights: [
          "Mobile Responsive",
          "SEO Optimized",
          "Lead Generation Ready",
          "Professional Business Presence",
        ],

        idealFor: [
          "Local Businesses",
          "Startups",
          "Professionals",
          "Service Providers",
        ],

        features: [
          "Up to 5 Static Pages",
          "Mobile Responsive Design",
          "Contact Form Integration",
          "WhatsApp Click-to-Chat",
          "Basic SEO Setup",
          "Google Maps Integration",
          "Business Information Pages",
          "Call-to-Action Sections",
          "Performance Optimized Layout",
          "30 Days Support",
        ],

        deliverables: [
          "Professional Business Website",
          "Mobile-Friendly Experience",
          "Lead Capture Capability",
          "Search Engine Indexing Ready",
        ],

        support: "30 Days",

        outcome: [
          "Build business credibility",
          "Establish online presence",
          "Generate inquiries",
          "Improve customer trust",
        ],
      },

      {
        id: "cms-scalable-site",

        name: "CMS-Based Scalable Site",

        badge: "Most Popular",

        shortDescription:
          "A content-managed website that allows businesses to easily update content while maintaining scalability.",

        highlights: [
          "Content Management System",
          "SEO Ready",
          "Easy Content Updates",
          "Scalable Foundation",
        ],
        idealFor: [
          "Growing Businesses",
          "Content-Driven Brands",
          "Consultants",
          "Agencies",
        ],

        features: [
          "Custom WordPress Development",
          "Admin Dashboard Access",
          "Blog Management System",
          "Dynamic Content Sections",
          "Advanced SEO Plugin Setup",
          "E-Commerce Ready Architecture",
          "Lead Generation Forms",
          "Role-Based Access Control",
          "Performance Optimization",
          "Security Hardening",
          "60 Days Support",
        ],

        deliverables: [
          "Fully Managed CMS",
          "SEO-Ready Website",
          "Content Publishing System",
          "Business Growth Infrastructure",
        ],

        support: "60 Days",

        outcome: [
          "Easy content updates",
          "Better search visibility",
          "Scalable growth foundation",
          "Reduced dependency on developers",
        ],
      },

      {
        id: "high-performance-website",

        name: "High-Performance Website",

        badge: "Modern Web Experience",

        shortDescription:
          "A fast, modern, and highly interactive website built using modern frontend technologies.",

        highlights: [
          "React Powered",
          "Fast Loading",
          "Premium UX",
          "Modern Architecture",
        ],

        idealFor: [
          "Tech Startups",
          "SaaS Companies",
          "Product Businesses",
          "Modern Brands",
        ],

        features: [
          "Single Page Application (SPA)",
          "React-Based Development",
          "Component-Based Architecture",
          "API Integration Ready",
          "Advanced Animations & Interactions",
          "Fast Loading Performance",
          "Dynamic User Interface",
          "Reusable UI Components",
          "Scalable Frontend Structure",
          "Technical SEO Readiness",
          "90 Days Support",
        ],

        deliverables: [
          "Premium User Experience",
          "High-Speed Website",
          "Interactive Interface",
          "Modern Frontend Architecture",
        ],

        support: "90 Days",

        outcome: [
          "Improved engagement",
          "Better conversion potential",
          "Premium brand perception",
          "Future-ready architecture",
        ],
      },

      {
        id: "fullstack-scalable-system",

        name: "Full-Stack Scalable System",

        badge: "Enterprise Solution",

        shortDescription:
          "A complete custom web application with backend systems, integrations, security, and cloud deployment.",

        highlights: [
          "Custom Business Logic",
          "Secure Authentication",
          "Cloud Deployment",
          "Enterprise Scalability",
        ],

        idealFor: [
          "Enterprises",
          "SaaS Products",
          "Marketplaces",
          "Custom Platforms",
        ],

        features: [
          "Custom Full-Stack Development",
          "RESTful API Development",
          "Backend Architecture",
          "Real-Time Data Updates",
          "Authentication & Authorization",
          "Role-Based Access Management",
          "Database Design & Optimization",
          "Third-Party Integrations",
          "Cloud Deployment Setup",
          "Scalable Infrastructure",
          "Security Best Practices",
          "Performance Monitoring Setup",
          "120 Days Support",
        ],

        deliverables: [
          "Custom Business Platform",
          "Scalable Backend System",
          "Cloud Infrastructure",
          "Enterprise-Grade Security",
        ],

        support: "120 Days",

        outcome: [
          "Business process automation",
          "Operational efficiency",
          "Scalable digital infrastructure",
          "Long-term technology foundation",
        ],
      },
    ],
  },
};

export const webDevelopmentPackages = webDevelopmentData.packages;
