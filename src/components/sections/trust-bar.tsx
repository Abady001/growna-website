"use client";

import { motion } from "framer-motion";
import { TrendingUp, Shield, Users, Clock } from "lucide-react";

const stats = [
  {
    value: "50+",
    label: "Projects Delivered",
    icon: TrendingUp,
  },
  {
    value: "98%",
    label: "Client Satisfaction",
    icon: Users,
  },
  {
    value: "5+",
    label: "Years Experience",
    icon: Clock,
  },
  {
    value: "24/7",
    label: "Support Available",
    icon: Shield,
  },
];

export function TrustBar() {
  return (
    <section className="py-16 md:py-24 bg-card border-y border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
                <stat.icon className="h-6 w-6" />
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
