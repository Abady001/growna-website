import type { Metadata } from "next";

export const siteConfig = {
  name: "GROWNA",
  shortName: "GROWNA",
  description:
    "Technology & Growth Partner for Growing Businesses. We help modernize, automate, and scale through AI solutions, SaaS products, ERP/Odoo, and digital transformation.",
  url: "https://growna.com",
  ogImage: "/images/og-image.jpg",
  keywords: [
    "AI solutions",
    "SaaS development",
    "ERP Odoo",
    "systems integration",
    "automation",
    "digital transformation",
    "business technology partner",
  ],
  authors: [{ name: "GROWNA" }],
  company: {
    name: "GROWNA",
    email: "hello@growna.com",
    phone: "+1 (555) 000-0000",
    location: "Remote-first, worldwide",
    responseTime: "24 business hours",
  },
  social: {
    linkedin: "https://linkedin.com/company/growna",
    twitter: "https://twitter.com/growna",
    github: "https://github.com/growna",
  },
};

export const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Solutions", href: "/solutions" },
  { name: "Contact", href: "/contact" },
];

export const footerLinks = {
  company: [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Solutions", href: "/solutions" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "AI Solutions", href: "/services" },
    { name: "SaaS Products", href: "/services" },
    { name: "ERP / Odoo", href: "/services" },
    { name: "Digital Transformation", href: "/services" },
  ],
  resources: [
    { name: "Case Studies", href: "/case-studies" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

export const services = [
  {
    id: "ai",
    title: "AI Solutions",
    shortTitle: "AI",
    description:
      "Leverage artificial intelligence to automate decisions, optimize processes, and unlock insights from your data.",
    features: [
      "Machine learning model development",
      "Predictive analytics",
      "Intelligent automation",
      "Natural language processing",
      "Computer vision applications",
    ],
  },
  {
    id: "saas",
    title: "SaaS Products",
    shortTitle: "SaaS",
    description:
      "Build and deploy scalable software-as-a-service solutions that grow with your business and your customers.",
    features: [
      "Custom SaaS platform development",
      "Multi-tenant architecture",
      "API-first design",
      "Subscription management",
      "Cloud infrastructure setup",
    ],
  },
  {
    id: "erp",
    title: "ERP / Odoo",
    shortTitle: "ERP",
    description:
      "Implement and customize Odoo ERP to streamline operations, unify data, and improve business visibility.",
    features: [
      "Odoo implementation",
      "Custom module development",
      "Data migration",
      "Integration with existing systems",
      "Training and ongoing support",
    ],
  },
  {
    id: "integration",
    title: "Systems Integration",
    shortTitle: "Integration",
    description:
      "Connect your disparate systems into a unified platform that eliminates silos and enables data flow.",
    features: [
      "API development and integration",
      "Third-party service connections",
      "Data pipeline architecture",
      "Legacy system modernization",
      "Real-time synchronization",
    ],
  },
  {
    id: "automation",
    title: "Automation",
    shortTitle: "Automation",
    description:
      "Eliminate manual processes and reduce errors with intelligent workflow automation tailored to your operations.",
    features: [
      "Business process automation",
      "Workflow design and implementation",
      "Robotic process automation (RPA)",
      "Automated testing",
      "Continuous integration/deployment",
    ],
  },
  {
    id: "dx",
    title: "Digital Transformation",
    shortTitle: "DX",
    description:
      "Modernize your technology stack and transform how your business operates in the digital age.",
    features: [
      "Digital strategy consulting",
      "Technology roadmapping",
      "Legacy system modernization",
      "Cloud migration",
      "Digital culture enablement",
    ],
  },
];

export const solutions = [
  {
    category: "Operations",
    items: [
      {
        id: "manufacturing",
        title: "Manufacturing",
        description:
          "Streamline production, manage inventory, and optimize supply chains with integrated digital solutions.",
      },
      {
        id: "inventory",
        title: "Inventory Management",
        description:
          "Real-time tracking, automated reordering, and warehouse optimization to reduce costs and improve fulfillment.",
      },
      {
        id: "process-automation",
        title: "Process Automation",
        description:
          "Eliminate manual tasks, reduce errors, and speed up operations with intelligent workflow automation.",
      },
    ],
  },
  {
    category: "Commerce",
    items: [
      {
        id: "ecommerce",
        title: "E-commerce",
        description:
          "Scalable online stores with seamless integrations, automated workflows, and optimized checkout experiences.",
      },
      {
        id: "analytics",
        title: "Analytics & BI",
        description:
          "Transform data into actionable insights with dashboards, reporting, and predictive analytics.",
      },
      {
        id: "growth-marketing",
        title: "Growth Marketing",
        description:
          "Data-driven marketing strategies to acquire, retain, and grow your customer base.",
      },
    ],
  },
  {
    category: "Enterprise",
    items: [
      {
        id: "erp-implementation",
        title: "ERP Implementation",
        description:
          "Unified business management with Odoo — from accounting and inventory to CRM and operations.",
      },
      {
        id: "security",
        title: "Security & Compliance",
        description:
          "Protect your data and ensure compliance with industry standards and best practices.",
      },
      {
        id: "global-operations",
        title: "Global Operations",
        description:
          "Multi-currency, multi-language, and cross-border capabilities for businesses expanding internationally.",
      },
    ],
  },
];

export const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "5+", label: "Years Experience" },
  { value: "24/7", label: "Support Available" },
];

export const whyGrowna = [
  {
    title: "Business-First Approach",
    description:
      "We understand that technology is a means to an end. Every solution we build aligns with your business goals.",
  },
  {
    title: "Practical Innovation",
    description:
      "We don't chase trends. We implement proven technologies that deliver measurable results for your business.",
  },
  {
    title: "Partner Mentality",
    description:
      "We're not just vendors. We become an extension of your team, invested in your long-term success.",
  },
  {
    title: "Speed to Value",
    description:
      "We focus on delivering ROI quickly through agile delivery and incremental value delivery.",
  },
  {
    title: "Global Experience",
    description:
      "Our team brings experience working with businesses across multiple industries and geographies.",
  },
  {
    title: "Proven Process",
    description:
      "Our structured approach ensures clarity, accountability, and predictable outcomes every time.",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We start by understanding your business, challenges, and goals through detailed consultation.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "We develop a tailored roadmap with clear milestones, timelines, and success metrics.",
  },
  {
    number: "03",
    title: "Execute",
    description:
      "Our team builds and implements solutions using agile methodology with regular check-ins.",
  },
  {
    number: "04",
    title: "Optimize",
    description:
      "We continuously monitor, measure, and refine to ensure sustained growth and improvement.",
  },
];

export const engagementModels = [
  {
    title: "Project-Based",
    description:
      "Defined scope, timeline, and deliverables for specific initiatives.",
  },
  {
    title: "Team Augmentation",
    description: "Skilled developers integrated into your existing team.",
  },
  {
    title: "Retainer",
    description: "Ongoing partnership for continuous improvement and support.",
  },
];

export const pageMetadata = {
  home: {
    title: "GROWNA | Technology & Growth Partner",
    description:
      "GROWNA is a technology and growth partner helping growing businesses modernize, automate, and scale with AI solutions, SaaS products, ERP/Odoo, and digital transformation.",
  },
  about: {
    title: "About | GROWNA",
    description:
      "Learn about GROWNA, a technology and growth partner helping businesses modernize, automate, and scale through strategic technology implementation.",
  },
  services: {
    title: "Services | GROWNA",
    description:
      "Explore our comprehensive technology services including AI solutions, SaaS development, ERP/Odoo, systems integration, automation, and digital transformation.",
  },
  solutions: {
    title: "Solutions | GROWNA",
    description:
      "Discover tailored solutions for operations, commerce, and enterprise. Address common business challenges with proven technology approaches.",
  },
  contact: {
    title: "Contact | GROWNA",
    description:
      "Get in touch with GROWNA. Let's discuss how we can help your business grow through the right technology solutions.",
  },
  caseStudies: {
    title: "Case Studies | GROWNA",
    description:
      "See how we've helped businesses transform with technology. Real results, measurable outcomes, and proven approaches.",
  },
  blog: {
    title: "Blog | GROWNA",
    description:
      "Insights and updates on technology, digital transformation, and business growth from the GROWNA team.",
  },
};

type PageKey = keyof typeof pageMetadata;

export function getPageMetadata(page: PageKey) {
  return pageMetadata[page];
}

export function constructMetadata(
  page: PageKey,
  overrides?: Partial<Metadata>
): Metadata {
  const pageConfig = pageMetadata[page];
  
  return {
    metadataBase: new URL(siteConfig.url),
    ...pageConfig,
    ...overrides,
    openGraph: {
      ...pageConfig,
      ...overrides?.openGraph,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageConfig.title,
      description: pageConfig.description,
      images: [siteConfig.ogImage],
    },
  };
}
