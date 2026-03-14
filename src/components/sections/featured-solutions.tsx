"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Package, ShoppingCart } from "lucide-react";

const solutions = [
  {
    title: "AI-Powered Analytics",
    description:
      "Transform your data into actionable insights with machine learning and predictive analytics.",
    icon: BarChart3,
    href: "/solutions",
  },
  {
    title: "E-commerce Solutions",
    description:
      "Scalable online stores with seamless integrations, automated workflows, and optimized checkout.",
    icon: ShoppingCart,
    href: "/solutions",
  },
  {
    title: "Enterprise ERP",
    description:
      "Unified business management with Odoo — from accounting and inventory to CRM and operations.",
    icon: Package,
    href: "/solutions",
  },
];

export function FeaturedSolutions() {
  return (
    <section className="py-16 md:py-24 bg-card border-y border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Solutions
            </h2>
            <p className="text-muted-foreground">
              Tailored solutions that address common business challenges and drive
              measurable outcomes.
            </p>
          </div>
          <Button variant="outline">
            <Link href="/solutions">
              View All Solutions
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-background border-border hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <solution.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{solution.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">
                    {solution.description}
                  </p>
                  <Button variant="ghost" size="sm" className="p-0">
                    <Link href={solution.href}>
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
