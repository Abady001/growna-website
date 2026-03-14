"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Compass, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We start by understanding your business, challenges, and goals through detailed consultation.",
    icon: Search,
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "We develop a tailored roadmap with clear milestones, timelines, and success metrics.",
    icon: Compass,
  },
  {
    number: "03",
    title: "Execute",
    description:
      "Our team builds and implements solutions using agile methodology with regular check-ins.",
    icon: Rocket,
  },
  {
    number: "04",
    title: "Optimize",
    description:
      "We continuously monitor, measure, and refine to ensure sustained growth and improvement.",
    icon: TrendingUp,
  },
];

export function Process() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Work</h2>
          <p className="text-muted-foreground text-lg">
            A proven, collaborative approach that delivers results. We&apos;re partners
            in your growth from day one.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-transparent border-0 shadow-none">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-5xl font-bold text-primary/15 tracking-tight">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <step.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
