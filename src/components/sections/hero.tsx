"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/30 via-background to-background" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[80px]" />
        <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[60px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              <span>Technology & Growth Partner</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6"
          >
            Scale Your Business with{" "}
            <span className="text-primary">Intelligent Technology</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            We help growing businesses modernize, automate, and scale through AI
            solutions, SaaS products, ERP systems, and strategic digital
            transformation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="text-base px-8">
              <Link href="/contact">
                Start Growing
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-base px-8">
              <Link href="/services">Explore Services</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-20 pt-10 border-t border-border/60"
          >
            <p className="text-sm text-muted-foreground mb-8 font-medium">
              Trusted by forward-thinking companies
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
              <span className="text-lg font-semibold text-muted-foreground/70">Acme Corp</span>
              <span className="text-lg font-semibold text-muted-foreground/70">TechStart</span>
              <span className="text-lg font-semibold text-muted-foreground/70">GlobalTech</span>
              <span className="text-lg font-semibold text-muted-foreground/70">InnovateCo</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
