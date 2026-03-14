import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { constructMetadata } from "@/lib";
import { PageHeader } from "@/components/sections/page-header";
import { Section, SectionHeader } from "@/components/sections/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface ServiceData {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  icon: string;
  benefits: string[];
  features: string[];
  process: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
}

export const servicesData: Record<string, ServiceData> = {
  ai: {
    id: "ai",
    slug: "ai",
    title: "AI Solutions",
    subtitle: "Intelligent Automation & Machine Learning",
    description: "Leverage artificial intelligence to automate decisions, optimize processes, and unlock insights from your data.",
    longDescription: "Our AI solutions help businesses transform raw data into actionable intelligence. From predictive analytics to natural language processing, we build AI systems that drive real business value.",
    icon: "brain",
    benefits: [
      "Automate repetitive decision-making processes",
      "Uncover hidden patterns in your data",
      "Predict future trends and outcomes",
      "Improve customer experience with AI-powered support",
      "Reduce operational costs through intelligent automation",
    ],
    features: [
      "Machine learning model development",
      "Predictive analytics dashboards",
      "Natural language processing",
      "Computer vision applications",
      "AI-powered chatbots and assistants",
      "Data preprocessing and feature engineering",
    ],
    process: [
      { title: "Assessment", description: "We analyze your data infrastructure and identify AI opportunities" },
      { title: "Strategy", description: "We develop a tailored AI roadmap aligned with your business goals" },
      { title: "Implementation", description: "We build and deploy AI models with rigorous testing" },
      { title: "Optimization", description: "We continuously monitor and improve model performance" },
    ],
    faqs: [
      { question: "How long does an AI project take?", answer: "Timeline varies based on complexity. Typical projects range from 8-16 weeks." },
      { question: "Do I need large amounts of data?", answer: "Not necessarily. We can work with existing data and implement data collection strategies." },
      { question: "Is AI expensive?", answer: "We focus on ROI. Our solutions are designed to pay for themselves through efficiency gains." },
    ],
  },
  saas: {
    id: "saas",
    slug: "saas",
    title: "SaaS Development",
    subtitle: "Scalable Software-as-a-Service Platforms",
    description: "Build and deploy scalable software-as-a-service solutions that grow with your business and your customers.",
    longDescription: "We build modern SaaS platforms designed for scale. From multi-tenant architecture to subscription billing, we handle the technical complexity so you can focus on growth.",
    icon: "cloud",
    benefits: [
      "Recurring revenue model with subscription billing",
      "Scalable architecture that grows with your users",
      "Reduced maintenance overhead",
      "Faster time-to-market",
      "Enterprise-grade security from day one",
    ],
    features: [
      "Custom SaaS platform development",
      "Multi-tenant architecture",
      "API-first design",
      "Subscription and billing management",
      "Cloud infrastructure (AWS/Azure/GCP)",
      "White-label and resale options",
    ],
    process: [
      { title: "Discovery", description: "We understand your market, users, and business model" },
      { title: "Architecture", description: "We design a scalable system architecture" },
      { title: "Development", description: "We build your SaaS platform with agile methodology" },
      { title: "Launch", description: "We assist with deployment and go-to-market" },
    ],
    faqs: [
      { question: "What cloud providers do you use?", answer: "We work with AWS, Azure, and GCP based on your requirements." },
      { question: "Can you integrate with existing systems?", answer: "Yes, we specialize in API-first architecture for seamless integrations." },
      { question: "Do you handle billing integration?", answer: "Yes, we integrate with Stripe, Paddle, and other payment providers." },
    ],
  },
  erp: {
    id: "erp",
    slug: "erp",
    title: "ERP / Odoo",
    subtitle: "Enterprise Resource Planning with Odoo",
    description: "Implement and customize Odoo ERP to streamline operations, unify data, and improve business visibility.",
    longDescription: "Odoo is a powerful, open-source ERP system that can transform how your business operates. We provide end-to-end Odoo implementation, customization, and support services.",
    icon: "database",
    benefits: [
      "Unified view of all business operations",
      "Automated workflows and processes",
      "Real-time reporting and analytics",
      "Integrated CRM, inventory, and accounting",
      "Scalable from startup to enterprise",
    ],
    features: [
      "Odoo implementation and setup",
      "Custom module development",
      "Data migration from legacy systems",
      "Third-party integrations",
      "Training and change management",
      "Ongoing support and maintenance",
    ],
    process: [
      { title: "Requirements", description: "We analyze your business processes and requirements" },
      { title: "Configuration", description: "We set up Odoo with best-practice configurations" },
      { title: "Customization", description: "We develop custom modules as needed" },
      { title: "Go-Live", description: "We migrate data and launch with full support" },
    ],
    faqs: [
      { question: "How long does Odoo implementation take?", answer: "Typical implementations take 2-6 months depending on complexity." },
      { question: "Can we migrate from our current system?", answer: "Yes, we have extensive experience with data migration." },
      { question: "Is Odoo suitable for small businesses?", answer: "Yes, Odoo scales from small businesses to large enterprises." },
    ],
  },
  integration: {
    id: "integration",
    slug: "integration",
    title: "Systems Integration",
    subtitle: "Connect Your Technology Ecosystem",
    description: "Connect your disparate systems into a unified platform that eliminates silos and enables data flow.",
    longDescription: "Modern businesses use dozens of tools and systems. We help you integrate them into a cohesive ecosystem that eliminates manual data entry and provides a single source of truth.",
    icon: "layers",
    benefits: [
      "Eliminate manual data entry and errors",
      "Single source of truth for all data",
      "Real-time information across systems",
      "Reduced operational costs",
      "Faster business processes",
    ],
    features: [
      "API development and integration",
      "Third-party service connections",
      "Data pipeline architecture",
      "Legacy system modernization",
      "Real-time synchronization",
      "Webhook and event-driven architectures",
    ],
    process: [
      { title: "Audit", description: "We map your current systems and identify integration points" },
      { title: "Design", description: "We create an integration architecture blueprint" },
      { title: "Build", description: "We develop APIs and integration pipelines" },
      { title: "Deploy", description: "We deploy and monitor integrations in production" },
    ],
    faqs: [
      { question: "What systems can you integrate?", answer: "Almost anything with an API - CRM, ERP, marketing tools, databases, and more." },
      { question: "How do you handle data security?", answer: "We follow security best practices including encryption, OAuth, and role-based access." },
    ],
  },
  automation: {
    id: "automation",
    slug: "automation",
    title: "Automation",
    subtitle: "Intelligent Workflow Automation",
    description: "Eliminate manual processes and reduce errors with intelligent workflow automation tailored to your operations.",
    longDescription: "Automate repetitive tasks and streamline business processes. We design and implement automation solutions that save time, reduce errors, and let your team focus on high-value work.",
    icon: "refresh",
    benefits: [
      "Reduce manual and repetitive tasks by up to 80%",
      "Minimize human errors",
      "Free team time for strategic work",
      "Consistent, reliable processes",
      "Faster turnaround times",
    ],
    features: [
      "Business process automation",
      "Workflow design and implementation",
      "Robotic process automation (RPA)",
      "Automated testing",
      "CI/CD pipelines",
      "Scheduled and event-triggered workflows",
    ],
    process: [
      { title: "Analysis", description: "We identify automation opportunities in your processes" },
      { title: "Design", description: "We create detailed automation specifications" },
      { title: "Development", description: "We build and test automation workflows" },
      { title: "Deployment", description: "We deploy and monitor automated processes" },
    ],
    faqs: [
      { question: "What processes can be automated?", answer: "Almost any repetitive, rule-based process can be automated." },
      { question: "Do I need technical knowledge?", answer: "No, we handle the technical implementation. You define the outcomes." },
    ],
  },
  dx: {
    id: "dx",
    slug: "dx",
    title: "Digital Transformation",
    subtitle: "Modernize and Scale Your Business",
    description: "Modernize your technology stack and transform how your business operates in the digital age.",
    longDescription: "Digital transformation is about using technology to fundamentally improve your business. We help you navigate the journey from legacy systems to modern, agile operations.",
    icon: "sparkles",
    benefits: [
      "Modern, agile technology infrastructure",
      "Improved customer experience",
      "Better data-driven decision making",
      "Increased competitiveness",
      "Future-proofed operations",
    ],
    features: [
      "Digital strategy consulting",
      "Technology roadmapping",
      "Legacy system modernization",
      "Cloud migration",
      "Digital culture enablement",
      "Innovation workshops",
    ],
    process: [
      { title: "Assessment", description: "We evaluate your current digital maturity" },
      { title: "Strategy", description: "We develop a transformation roadmap" },
      { title: "Execution", description: "We implement changes in phases" },
      { title: "Optimization", description: "We continuously improve and iterate" },
    ],
    faqs: [
      { question: "How long does digital transformation take?", answer: "It varies by scope - typically 6-18 months for comprehensive transformation." },
      { question: "Is it disruptive to our operations?", answer: "We use phased approaches to minimize disruption." },
    ],
  },
};

interface Props {
  params: Promise<{
    service: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(servicesData).map((service) => ({
    service,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service } = await params;
  const serviceData = servicesData[service];
  
  if (!serviceData) {
    return constructMetadata("services");
  }
  
  return constructMetadata("services", {
    title: `${serviceData.title} | GROWNA`,
    description: serviceData.description,
  });
}

const iconMap: Record<string, React.ElementType> = {
  brain: ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2a9 9 0 0 1 9 9c0 3.1-1.6 5.8-4 7.4V21a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-2.6A9 9 0 0 1 12 2z" />
      <path d="M9 18h6" />
    </svg>
  ),
  cloud: ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17.5 19c0-3.037-2.463-5.5-5.5-5.5S6.5 15.963 6.5 19" />
      <path d="M20.6 16c2.5-1 4.4-3.5 4.4-6.5a7 7 0 0 0-13-3.6A7 7 0 0 0 2 10c0 4.1 2.9 7.5 6.9 8" />
    </svg>
  ),
  database: ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  ),
  layers: ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  ),
  refresh: ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 2v6h-6" />
      <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
      <path d="M3 22v-6h6" />
      <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
    </svg>
  ),
  sparkles: ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z" />
      <path d="M5 19l.5 1.5L7 21l-1.5.5L5 23l-.5-1.5L3 21l1.5-.5L5 19z" />
      <path d="M19 5l.5 1.5L21 7l-1.5.5L19 9l-.5-1.5L17 7l1.5-.5L19 5z" />
    </svg>
  ),
};

export default async function ServicePage({ params }: Props) {
  const { service } = await params;
  const serviceData = servicesData[service];

  if (!serviceData) {
    notFound();
  }

  const IconComponent = iconMap[serviceData.icon] || iconMap.sparkles;

  return (
    <>
      <PageHeader
        title={serviceData.title}
        description={serviceData.description}
      />

      <Section>
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">{serviceData.subtitle}</h2>
              <p className="text-lg text-muted-foreground mb-8">
                {serviceData.longDescription}
              </p>
              <Button>
                <Link href="/contact">
                  Discuss Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="flex justify-center">
              <div className="w-32 h-32 rounded-2xl bg-primary/10 flex items-center justify-center">
                <IconComponent className="w-16 h-16 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-card border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            title="Key Benefits"
            description="How this service helps your business"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceData.benefits.map((benefit, index) => (
              <Card key={index} className="bg-background border-border">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            title="What's Included"
            description="Our comprehensive service offerings"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {serviceData.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-card border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            title="Our Process"
            description="How we deliver results"
          />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {serviceData.process.map((step, index) => (
              <Card key={index} className="bg-background border-border">
                <CardContent className="pt-6">
                  <div className="text-2xl font-bold text-primary/20 mb-3">
                    0{index + 1}
                  </div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {serviceData.faqs.map((faq, index) => (
                  <div key={index}>
                    <h3 className="font-semibold mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Card className="bg-primary text-primary-foreground">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">Ready to Get Started?</h3>
                  <p className="text-sm text-primary-foreground/80 mb-4">
                    Let&apos;s discuss how we can help your business with {serviceData.title}.
                  </p>
                  <Button variant="secondary" className="w-full">
                    <Link href="/contact">
                      Schedule a Call
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
