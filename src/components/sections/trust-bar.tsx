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
    <section className="py-20 md:py-24 bg-card border-y border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-5">
                <stat.icon className="h-7 w-7" />
              </div>
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
