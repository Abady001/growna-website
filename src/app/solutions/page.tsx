"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PageHeader } from "@/components/sections/page-header";
import { Section, SectionHeader } from "@/components/sections/section";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BarChart3,
  Package,
  ShoppingCart,
  Factory,
  Building2,
  LineChart,
  Workflow,
  Shield,
  Globe,
} from "lucide-react";

const solutions = [
  {
    category: "Operations",
    items: [
      {
        icon: Factory,
        title: "Manufacturing",
        description:
          "Streamline production, manage inventory, and optimize supply chains with integrated digital solutions.",
      },
      {
        icon: Package,
        title: "Inventory Management",
        description:
          "Real-time tracking, automated reordering, and warehouse optimization to reduce costs and improve fulfillment.",
      },
      {
        icon: Workflow,
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
        icon: ShoppingCart,
        title: "E-commerce",
        description:
          "Scalable online stores with seamless integrations, automated workflows, and optimized checkout experiences.",
      },
      {
        icon: BarChart3,
        title: "Analytics & BI",
        description:
          "Transform data into actionable insights with dashboards, reporting, and predictive analytics.",
      },
      {
        icon: LineChart,
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
        icon: Building2,
        title: "ERP Implementation",
        description:
          "Unified business management with Odoo — from accounting and inventory to CRM and operations.",
      },
      {
        icon: Shield,
        title: "Security & Compliance",
        description:
          "Protect your data and ensure compliance with industry standards and best practices.",
      },
      {
        icon: Globe,
        title: "Global Operations",
        description:
          "Multi-currency, multi-language, and cross-border capabilities for businesses expanding internationally.",
      },
    ],
  },
];

const capabilities = [
  {
    title: "Custom Development",
    description:
      "Tailored software built specifically for your business requirements and workflows.",
  },
  {
    title: "System Integration",
    description:
      "Connect disparate systems and data sources into a unified, coherent platform.",
  },
  {
    title: "Cloud Migration",
    description:
      "Move to the cloud with minimal disruption and maximum benefit realization.",
  },
  {
    title: "Ongoing Support",
    description:
      "Continuous maintenance, optimization, and enhancement to keep your systems performing at their best.",
  },
];

export default function SolutionsPage() {
  return (
    <>
      <PageHeader
        title="Solutions"
        description="Tailored solutions that address common business challenges and drive measurable outcomes."
      />

      <Section>
        <div className="container mx-auto px-4 md:px-6">
          {solutions.map((category) => (
            <div key={category.category} className="mb-16 last:mb-0">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-2xl font-bold mb-8"
              >
                {category.category}
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {category.items.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full bg-card border-border hover:border-primary/50 transition-colors">
                      <CardHeader>
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                          <item.icon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground text-sm">
                          {item.description}
                        </p>
                        <Button variant="ghost" size="sm" className="mt-4 p-0">
                          <Link href="/contact">
                            Get started
                            <ArrowRight className="ml-1 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-card border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            title="Core Capabilities"
            description="The foundation behind every solution we deliver."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap, index) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-background border-border">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">{cap.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {cap.description}
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
            <h2 className="text-3xl font-bold mb-4">
              Need Something Custom?
            </h2>
            <p className="text-muted-foreground mb-8">
              We build tailored solutions for unique business challenges. Tell us
              about your needs and we&apos;ll help you find the right approach.
            </p>
            <Button>
              <Link href="/contact">
                Discuss Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
