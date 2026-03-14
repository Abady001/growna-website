"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PageHeader } from "@/components/sections/page-header";
import { Section, SectionHeader } from "@/components/sections/section";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Brain,
  Cloud,
  Database,
  Layers,
  RefreshCw,
  Sparkles,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";

const services = [
  {
    id: "ai",
    title: "AI Solutions",
    shortTitle: "AI",
    description:
      "Leverage artificial intelligence to automate decisions, optimize processes, and unlock insights from your data.",
    icon: Brain,
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
    icon: Cloud,
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
    icon: Database,
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
    icon: Layers,
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
    icon: RefreshCw,
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
    icon: Sparkles,
    features: [
      "Digital strategy consulting",
      "Technology roadmapping",
      "Legacy system modernization",
      "Cloud migration",
      "Digital culture enablement",
    ],
  },
];

const engagementModels = [
  {
    title: "Project-Based",
    description:
      "Defined scope, timeline, and deliverables for specific initiatives.",
  },
  {
    title: "Team Augmentation",
    description:
      "Skilled developers integrated into your existing team.",
  },
  {
    title: "Retainer",
    description:
      "Ongoing partnership for continuous improvement and support.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Services"
        description="Comprehensive technology solutions designed to help your business grow, scale, and succeed."
      />

      <Section>
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-card border-border hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <service.icon className="h-6 w-6 text-primary" />
                      </div>
                      <span className="text-sm font-medium text-muted-foreground">
                        {service.shortTitle}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.slice(0, 3).map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-sm"
                        >
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant="ghost" size="sm" className="mt-4 p-0">
                      <Link href="/contact">
                        Learn more
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-card border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            title="How We Deliver"
            description="Flexible engagement models to match your needs and budget."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {engagementModels.map((model, index) => (
              <motion.div
                key={model.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-background border-border hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold mb-2">{model.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {model.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-muted-foreground mb-10 text-lg">
              Let&apos;s discuss how our services can help you achieve your business
              goals. We&apos;ll start with a conversation, not a pitch.
            </p>
            <Button size="lg" className="text-base px-8">
              <Link href="/contact">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
