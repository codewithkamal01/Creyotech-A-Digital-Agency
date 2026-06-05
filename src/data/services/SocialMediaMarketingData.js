import { service_images } from "../../assets/assets";

export const socialMediaMarketingData = {
  hero: {
    badge: "Social Media Marketing",
    title: "Build Visibility, Engagement & Brand Authority",
    description:
      "From organic growth and influencer campaigns to paid social advertising and video content production, we help brands scale their social presence.",
    ctaPrimary: "Book Consultation",
    ctaSecondary: "View Packages",
    image: service_images.socialmedia,
  },

  offerings: [
    {
      id: "organic-growth",

      title: "Organic Social Media Growth",

      subtitle: "Community & Brand Building",

      type: "growth",

      description:
        "Consistent content creation, publishing, and community management designed to strengthen brand visibility, credibility, and audience trust.",

      idealFor: [
        "Local Brands",
        "Consultants",
        "Service Businesses",
        "Personal Brands",
      ],

      features: [
        "Content Planning",
        "Creative Design",
        "Community Management",
        "Engagement Tracking",
        "Analytics Reporting",
      ],

      eligibility: [],

      conditions: [
        "Client approval required for content publishing",
        "Consistent posting schedule recommended",
      ],
    },

    {
      id: "influencer-marketing",

      title: "Influencer Campaign Management",

      subtitle: "Influencer-Led Brand Promotion",

      type: "awareness",

      description:
        "Strategic influencer collaborations designed to expand reach, build trust, and increase brand awareness among targeted audiences.",

      idealFor: [
        "Consumer Brands",
        "Retail Businesses",
        "Product Launches",
        "D2C Companies",
      ],

      features: [
        "Influencer Discovery",
        "Influencer Vetting",
        "Campaign Management",
        "Content Review",
        "ROI Reporting",
      ],

      eligibility: [],

      conditions: [
        "Influencer selection subject to availability",
        "Campaign budget determined separately",
      ],
    },

    {
      id: "paid-social",

      title: "Paid Social Advertising",

      subtitle: "Performance Marketing Campaigns",

      type: "performance",

      description:
        "Data-driven advertising campaigns across Facebook, Instagram, and LinkedIn focused on lead generation, conversions, and measurable ROI.",

      idealFor: [
        "Lead Generation",
        "B2B Companies",
        "Fast-Growing Startups",
        "Scaling Businesses",
      ],

      features: [
        "Audience Targeting",
        "Ad Creative Design",
        "Campaign Setup",
        "Conversion Tracking",
        "Continuous Optimization",
      ],

      eligibility: [],

      conditions: [
        "Advertising budget excluded from management fees",
        "Performance depends on market competition and offer quality",
      ],
    },

    {
      id: "video-production",

      title: "AI-Led & Human-Led Video Production",

      subtitle: "Modern Video Content Creation",

      type: "content",

      description:
        "Scalable video production combining AI-generated content and real human presenters to create engaging marketing assets efficiently.",

      idealFor: [
        "Educational Content",
        "Product Demonstrations",
        "Social Media Campaigns",
        "Promotional Marketing",
      ],

      features: [
        "AI Avatars",
        "Voice Generation",
        "Human Presenters",
        "Reels Production",
        "Editing & Post Production",
      ],

      eligibility: [],

      conditions: [
        "Scripts require client approval",
        "Video output varies based on production requirements",
      ],
    },
  ],

  faqs: [
    {
      question: "Which social platforms do you manage?",
      answer:
        "We manage Instagram, Facebook, LinkedIn, YouTube, and other platforms based on your audience.",
    },

    {
      question: "Do you create content?",
      answer:
        "Yes. We handle content strategy, creative design, copywriting, reels, and video production.",
    },

    {
      question: "Do you run paid advertising campaigns?",
      answer:
        "Yes. We create, launch, monitor and optimize Meta and LinkedIn advertising campaigns.",
    },

    {
      question: "Can you work with influencers?",
      answer:
        "Absolutely. We identify, vet, negotiate and manage influencer collaborations.",
    },
  ],

  packages: {
    title: "Social Media Marketing Growth Systems",

    subtitle:
      "From brand visibility and audience engagement to lead generation and full-funnel social growth, choose the system that aligns with your business goals.",

    plans: [
      {
        id: "starter-growth-plan",

        name: "Starter Growth Plan",

        badge: "Best For Brand Presence",

        shortDescription:
          "A foundational social media management package focused on building brand visibility, consistency, and audience engagement.",
        highlights: [
          "Consistent Brand Presence",
          "Audience Engagement",
          "Content Strategy",
          "Community Building",
        ],
        idealFor: [
          "Local Businesses",
          "Consultants",
          "Professional Services",
          "Personal Brands",
        ],

        coreServices: [
          "Social Media Audit",
          "Profile Optimization",
          "Content Strategy",
          "Platform Setup & Enhancement",
        ],

        contentServices: [
          "12-16 Content Assets Per Month",
          "Static Creatives",
          "Carousel Posts",
          "Basic Reels",
          "Caption Writing",
          "Hashtag Strategy",
        ],

        managementServices: [
          "Scheduling & Publishing",
          "Basic Community Management",
          "Inbox Monitoring",
          "Comment Management",
        ],

        advertisingServices: ["Basic Meta Ads Setup"],

        deliverables: [
          "Monthly Content Calendar",
          "Published Content Assets",
          "Brand Consistency Framework",
          "Monthly Analytics Report",
        ],

        reporting: [
          "Audience Growth",
          "Engagement Metrics",
          "Reach & Impressions",
          "Content Performance",
        ],

        support: "Monthly Strategy Review",

        outcome: [
          "Consistent brand presence",
          "Improved audience engagement",
          "Strong social foundation",
          "Initial visibility growth",
        ],
      },

      {
        id: "growth-acceleration-plan",

        name: "Growth Acceleration Plan",

        badge: "Most Popular",

        shortDescription:
          "A lead-generation focused social media growth system combining content, advertising, funnels, and conversion optimization.",
        highlights: [
          "Lead Generation Campaigns",
          "Performance Advertising",
          "Conversion Optimization",
          "Growth Focused Content",
        ],
        idealFor: [
          "Growing Businesses",
          "B2B Companies",
          "Service Providers",
          "Lead Generation Brands",
        ],

        coreServices: [
          "Everything In Starter",
          "Growth Strategy Planning",
          "Lead Funnel Development",
          "Conversion Optimization",
        ],

        contentServices: [
          "20-25 Conversion-Focused Assets",
          "High-Converting Reels",
          "Advanced Carousel Content",
          "Educational & Promotional Content",
        ],

        managementServices: [
          "Community Management",
          "Lead Follow-Up Assistance",
          "Content Scheduling",
          "Audience Engagement",
        ],

        advertisingServices: [
          "Meta Lead Generation Ads",
          "Landing Page Integration",
          "Lead Capture Setup",
          "Campaign Optimization",
        ],

        deliverables: [
          "Lead Generation Funnel",
          "Monthly Campaign Reports",
          "Content Strategy Updates",
          "Lead Tracking Dashboard",
        ],

        reporting: [
          "Lead Volume",
          "Cost Per Lead",
          "Ad Performance",
          "Conversion Metrics",
          "Audience Growth",
        ],

        support: "Bi-Weekly Growth Reviews",

        outcome: [
          "Predictable lead inflow",
          "Higher conversion rates",
          "Improved campaign efficiency",
          "Structured lead generation system",
        ],
      },

      {
        id: "scale-authority-plan",

        name: "Scale & Authority Plan",

        badge: "Full Funnel Growth",

        shortDescription:
          "A comprehensive social media growth ecosystem combining content, paid media, automation, CRM integration, and authority building.",
        highlights: [
          "Brand Authority Building",
          "Advanced Paid Media",
          "Marketing Automation",
          "Revenue Focused Growth",
        ],
        idealFor: [
          "Scaling Businesses",
          "D2C Brands",
          "Enterprise Companies",
          "Aggressive Growth Companies",
        ],

        coreServices: [
          "Everything In Growth",
          "Full Funnel Strategy",
          "Authority Positioning",
          "Revenue Attribution Planning",
        ],

        contentServices: [
          "30-40 Premium Content Assets",
          "High-Performance Reels",
          "UGC Content Strategy",
          "Authority Content",
          "Multi-Platform Content Production",
        ],

        managementServices: [
          "Advanced Community Management",
          "Brand Reputation Monitoring",
          "Audience Segmentation",
          "Multi-Channel Coordination",
        ],

        advertisingServices: [
          "Advanced Paid Media Strategy",
          "A/B Testing",
          "Retargeting Campaigns",
          "CRM Integration",
          "Marketing Automation",
        ],

        deliverables: [
          "Growth Dashboard",
          "CRM Integration Setup",
          "Marketing Automation Workflow",
          "Revenue Attribution Reporting",
        ],

        reporting: [
          "Revenue Attribution",
          "Lead Quality",
          "Customer Acquisition Cost",
          "Campaign ROI",
          "Audience Growth",
        ],

        support: "Dedicated Growth Team",

        outcome: [
          "Scalable lead acquisition",
          "Lower acquisition cost",
          "Strong brand authority",
          "Revenue-focused growth system",
          "Predictable marketing performance",
        ],
      },
    ],
  },
};

export const socialMediaPackages = {
  title: "Social Media Marketing Growth Systems",

  subtitle:
    "From brand visibility and audience engagement to lead generation and full-funnel social growth, choose the system that aligns with your business goals.",

  plans: [
    {
      id: "starter-growth-plan",

      name: "Starter Growth Plan",

      badge: "Best For Brand Presence",

      shortDescription:
        "A foundational social media management package focused on building brand visibility, consistency, and audience engagement.",

      idealFor: [
        "Local Businesses",
        "Consultants",
        "Professional Services",
        "Personal Brands",
      ],

      coreServices: [
        "Social Media Audit",
        "Profile Optimization",
        "Content Strategy",
        "Platform Setup & Enhancement",
      ],

      contentServices: [
        "12-16 Content Assets Per Month",
        "Static Creatives",
        "Carousel Posts",
        "Basic Reels",
        "Caption Writing",
        "Hashtag Strategy",
      ],

      managementServices: [
        "Scheduling & Publishing",
        "Basic Community Management",
        "Inbox Monitoring",
        "Comment Management",
      ],

      advertisingServices: ["Basic Meta Ads Setup"],

      deliverables: [
        "Monthly Content Calendar",
        "Published Content Assets",
        "Brand Consistency Framework",
        "Monthly Analytics Report",
      ],

      reporting: [
        "Audience Growth",
        "Engagement Metrics",
        "Reach & Impressions",
        "Content Performance",
      ],

      support: "Monthly Strategy Review",

      outcome: [
        "Consistent brand presence",
        "Improved audience engagement",
        "Strong social foundation",
        "Initial visibility growth",
      ],
    },

    {
      id: "growth-acceleration-plan",

      name: "Growth Acceleration Plan",

      badge: "Most Popular",

      shortDescription:
        "A lead-generation focused social media growth system combining content, advertising, funnels, and conversion optimization.",

      idealFor: [
        "Growing Businesses",
        "B2B Companies",
        "Service Providers",
        "Lead Generation Brands",
      ],

      coreServices: [
        "Everything In Starter",
        "Growth Strategy Planning",
        "Lead Funnel Development",
        "Conversion Optimization",
      ],

      contentServices: [
        "20-25 Conversion-Focused Assets",
        "High-Converting Reels",
        "Advanced Carousel Content",
        "Educational & Promotional Content",
      ],

      managementServices: [
        "Community Management",
        "Lead Follow-Up Assistance",
        "Content Scheduling",
        "Audience Engagement",
      ],

      advertisingServices: [
        "Meta Lead Generation Ads",
        "Landing Page Integration",
        "Lead Capture Setup",
        "Campaign Optimization",
      ],

      deliverables: [
        "Lead Generation Funnel",
        "Monthly Campaign Reports",
        "Content Strategy Updates",
        "Lead Tracking Dashboard",
      ],

      reporting: [
        "Lead Volume",
        "Cost Per Lead",
        "Ad Performance",
        "Conversion Metrics",
        "Audience Growth",
      ],

      support: "Bi-Weekly Growth Reviews",

      outcome: [
        "Predictable lead inflow",
        "Higher conversion rates",
        "Improved campaign efficiency",
        "Structured lead generation system",
      ],
    },

    {
      id: "scale-authority-plan",

      name: "Scale & Authority Plan",

      badge: "Full Funnel Growth",

      shortDescription:
        "A comprehensive social media growth ecosystem combining content, paid media, automation, CRM integration, and authority building.",

      idealFor: [
        "Scaling Businesses",
        "D2C Brands",
        "Enterprise Companies",
        "Aggressive Growth Companies",
      ],

      coreServices: [
        "Everything In Growth",
        "Full Funnel Strategy",
        "Authority Positioning",
        "Revenue Attribution Planning",
      ],

      contentServices: [
        "30-40 Premium Content Assets",
        "High-Performance Reels",
        "UGC Content Strategy",
        "Authority Content",
        "Multi-Platform Content Production",
      ],

      managementServices: [
        "Advanced Community Management",
        "Brand Reputation Monitoring",
        "Audience Segmentation",
        "Multi-Channel Coordination",
      ],

      advertisingServices: [
        "Advanced Paid Media Strategy",
        "A/B Testing",
        "Retargeting Campaigns",
        "CRM Integration",
        "Marketing Automation",
      ],

      deliverables: [
        "Growth Dashboard",
        "CRM Integration Setup",
        "Marketing Automation Workflow",
        "Revenue Attribution Reporting",
      ],

      reporting: [
        "Revenue Attribution",
        "Lead Quality",
        "Customer Acquisition Cost",
        "Campaign ROI",
        "Audience Growth",
      ],

      support: "Dedicated Growth Team",

      outcome: [
        "Scalable lead acquisition",
        "Lower acquisition cost",
        "Strong brand authority",
        "Revenue-focused growth system",
        "Predictable marketing performance",
      ],
    },
  ],
};
