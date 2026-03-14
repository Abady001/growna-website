"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Cloud, Database, Layers, RefreshCw, Sparkles } from "lucide-react";

const services = [
  {
    id: "ai",
    title: "AI Solutions",
    description:
      "Intelligent automation and AI-powered insights to drive decision-making and operational efficiency.",
    icon: Brain,
  },
  {
    id: "saas",
    title: "SaaS Products",
    description:
      "Custom software as a service solutions built for scale, reliability, and business growth.",
    icon: Cloud,
  },
  {
    id: "erp",
    title: "ERP / Odoo",
    description:
      "Enterprise resource planning with Odoo implementation tailored to your business processes.",
    icon: Database,
  },
  {
    id: "integration",
    title: "Systems Integration",
    description:
      "Seamless connectivity across your tech stack to unify data and streamline operations.",
    icon: Layers,
  },
  {
    id: "automation",
    title: "Automation",
    description:
      "Streamline workflows and reduce manual work with intelligent process automation.",
    icon: RefreshCw,
  },
  {
    id: "dx",
    title: "Digital Transformation",
    description:
      "Modernize and scale your business with strategic digital transformation initiatives.",
    icon: Sparkles,
  },
];

export function ServicesOverview() {
  return (
    <section className="py-20 md:py-28" id="services">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive technology solutions designed to help your business grow,
            scale, and succeed in the digital age.
          </p>
        </div>

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
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">
                    {service.description}
                  </p>
                  <Button variant="ghost" size="sm" className="p-0 group-hover:translate-x-1 transition-transform">
                    <Link href="/services">
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button size="lg">
            <Link href="/services">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
