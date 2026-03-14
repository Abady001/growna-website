export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  client: string;
  industry: string;
  services: string[];
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  image: string;
  date: string;
  featured?: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "1",
    slug: "manufacturing-digital-transformation",
    title: "Manufacturing Digital Transformation",
    subtitle: "Modernizing legacy operations for a mid-size manufacturer",
    client: "Industrial Corp",
    industry: "Manufacturing",
    services: ["ERP Implementation", "Automation", "Systems Integration"],
    challenge:
      "A mid-size manufacturer was struggling with disconnected legacy systems, manual inventory tracking, and lack of real-time visibility into production workflows.",
    solution:
      "Implemented a unified Odoo ERP system with real-time IoT integration, automated inventory management, and custom reporting dashboards.",
    results: [
      { metric: "Operational Efficiency", value: "+45%" },
      { metric: "Inventory Accuracy", value: "99.2%" },
      { metric: "Manual Tasks Reduced", value: "60%" },
      { metric: "ROI Achieved", value: "8 months" },
    ],
    testimonial: {
      quote:
        "GROWNA transformed how we operate. We now have visibility we never had before.",
      author: "John Smith",
      role: "COO, Industrial Corp",
    },
    image: "/images/case-studies/manufacturing.jpg",
    date: "2025-12-01",
    featured: true,
  },
  {
    id: "2",
    slug: "saas-platform-scale",
    title: "SaaS Platform Scaling",
    subtitle: "Building a scalable multi-tenant platform for a fintech startup",
    client: "FinTech Solutions",
    industry: "Financial Technology",
    services: ["SaaS Development", "Cloud Architecture", "API Development"],
    challenge:
      "A fintech startup needed to scale their platform from 100 to 100,000+ users while maintaining security compliance and performance.",
    solution:
      "Architected a cloud-native multi-tenant platform with Kubernetes, implemented tiered security, and built comprehensive API infrastructure.",
    results: [
      { metric: "Platform Uptime", value: "99.99%" },
      { metric: "User Capacity", value: "100,000+" },
      { metric: "API Response Time", value: "<50ms" },
      { metric: "Security Compliance", value: "SOC2" },
    ],
    image: "/images/case-studies/fintech.jpg",
    date: "2025-10-15",
    featured: true,
  },
  {
    id: "3",
    slug: "ai-powered-customer-service",
    title: "AI-Powered Customer Service",
    subtitle: "Reducing support costs while improving customer satisfaction",
    client: "E-commerce Retailer",
    industry: "Retail / E-commerce",
    services: ["AI Solutions", "Integration", "Automation"],
    challenge:
      "An e-commerce company was struggling with high support costs and slow response times during peak periods.",
    solution:
      "Deployed an AI-powered support system with intelligent routing, automated responses for common queries, and predictive analytics for demand forecasting.",
    results: [
      { metric: "Support Costs", value: "-40%" },
      { metric: "Response Time", value: "-70%" },
      { metric: "Customer Satisfaction", value: "+25%" },
      { metric: "Tickets Automated", value: "60%" },
    ],
    testimonial: {
      quote:
        "The AI system handled our peak season without missing a beat. Incredible ROI.",
      author: "Sarah Johnson",
      role: "VP Operations, E-commerce Retailer",
    },
    image: "/images/case-studies/ai-support.jpg",
    date: "2025-08-20",
    featured: false,
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

export function getFeaturedCaseStudies(): CaseStudy[] {
  return caseStudies.filter((cs) => cs.featured);
}
