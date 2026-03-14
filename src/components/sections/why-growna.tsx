"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Globe, Lightbulb, Target, Users2, Zap } from "lucide-react";

const reasons = [
  {
    icon: Target,
    title: "Business-First Approach",
    description:
      "We understand that technology is a means to an end. Every solution we build aligns with your business goals.",
  },
  {
    icon: Lightbulb,
    title: "Practical Innovation",
    description:
      "We don't chase trends. We implement proven technologies that deliver measurable results for your business.",
  },
  {
    icon: Users2,
    title: "Partner Mentality",
    description:
      "We&apos;re not just vendors. We become an extension of your team, invested in your long-term success.",
  },
  {
    icon: Zap,
    title: "Speed to Value",
    description:
      "We focus on delivering ROI quickly through agile delivery and incremental value delivery.",
  },
  {
    icon: Globe,
    title: "Global Experience",
    description:
      "Our team brings experience working with businesses across multiple industries and geographies.",
  },
  {
    icon: CheckCircle2,
    title: "Proven Process",
    description:
      "Our structured approach ensures clarity, accountability, and predictable outcomes every time.",
  },
];

export function WhyGrowna() {
  return (
    <section className="py-20 md:py-28 bg-card border-y border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why GROWNA</h2>
          <p className="text-muted-foreground text-lg">
            We&apos;re not just another tech consultancy. We partner with you to build
            lasting solutions that drive real business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-4 p-6 rounded-xl hover:bg-primary/5 transition-colors"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <reason.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">{reason.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
