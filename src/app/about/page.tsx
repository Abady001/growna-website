"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PageHeader } from "@/components/sections/page-header";
import { Section, SectionHeader } from "@/components/sections/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Target,
  Lightbulb,
  Heart,
  Shield,
  Users,
  Zap,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Business Focus",
    description:
      "Every solution we build aligns with measurable business outcomes. Technology is the tool; growth is the goal.",
  },
  {
    icon: Heart,
    title: "Client Partnership",
    description:
      "We invest in long-term relationships. Your success is our success, and we measure ourselves by your results.",
  },
  {
    icon: Zap,
    title: "Practical Innovation",
    description:
      "We implement proven technologies that deliver ROI. No hype, just results that impact your bottom line.",
  },
  {
    icon: Shield,
    title: "Reliability",
    description:
      "We deliver on our commitments. On time, on budget, and as promised. Every single time.",
  },
];

const principles = [
  "Start with business outcomes, not technology",
  "Communicate clearly and honestly",
  "Build for scale and maintainability",
  "Prioritize security and compliance",
  "Measure and optimize continuously",
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About GROWNA"
        description="Technology and growth partner helping growing businesses modernize, automate, and scale."
      />

      <Section>
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                We Exist to Help Businesses Grow
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  GROWNA was founded on a simple premise: technology should drive
                  business growth, not just exist as a cost center.
                </p>
                <p>
                  We saw too many companies invest in complex systems that never
                  delivered real value. Too many digital transformations that
                  ended in expensive failures. Too many consultancies that cared
                  more about their expertise than their client&apos;s results.
                </p>
                <p>
                  We decided to build something different. A partner that
                  understands business first, then applies the right technology
                  to solve real problems. A team that measures success by your
                  growth, not by the complexity of what we build.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary mb-2">50+</div>
                  <div className="text-muted-foreground">Projects Delivered</div>
                  <div className="mt-8 grid grid-cols-2 gap-8">
                    <div>
                      <div className="text-3xl font-bold">98%</div>
                      <div className="text-sm text-muted-foreground">
                        Client Satisfaction
                      </div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold">5+</div>
                      <div className="text-sm text-muted-foreground">
                        Years Experience
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      <Section className="bg-card border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            title="Our Mission"
            description="Why we exist and what drives us every day."
          />

          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl md:text-2xl leading-relaxed">
              &ldquo;To empower growing businesses with technology that delivers
              measurable outcomes — transforming challenges into competitive
              advantages and growth into sustainable success.&rdquo;
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            title="What We Do"
            description="We help businesses modernize, automate, and scale through strategic technology implementation."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-card border-border hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Strategy & Consulting</h3>
                <p className="text-sm text-muted-foreground">
                  Technology roadmaps aligned with business goals. We help you
                  make the right decisions about what to build and why.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Implementation</h3>
                <p className="text-sm text-muted-foreground">
                  Building and deploying solutions that work. From custom
                  development to system integration to ERP implementation.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Ongoing Support</h3>
                <p className="text-sm text-muted-foreground">
                  Continuous optimization and improvement. We stay involved to
                  ensure your technology keeps delivering value.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      <Section className="bg-card border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            title="Our Values"
            description="The principles that guide every project we work on."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-background border-border hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <value.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
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
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">
              How We Work
            </h2>
            <div className="space-y-3">
              {principles.map((principle, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{principle}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-primary-foreground/80 mb-10 max-w-xl mx-auto">
            Let&apos;s discuss how we can help your business grow through the right
            technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-base px-8">
              <Link href="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-base px-8"
            >
              <Link href="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
