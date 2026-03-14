"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PageHeader } from "@/components/sections/page-header";
import { Section } from "@/components/sections/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Linkedin,
  Twitter,
  Github,
  CheckCircle2,
} from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    description: "Reach out anytime",
    value: "hello@growna.com",
    href: "mailto:hello@growna.com",
  },
  {
    icon: Phone,
    title: "Phone",
    description: "Mon-Fri, 9am-6pm UTC",
    value: "+1 (555) 000-0000",
    href: "tel:+15550000000",
  },
  {
    icon: MapPin,
    title: "Location",
    description: "Serving clients globally",
    value: "Remote-first, worldwide",
    href: null,
  },
  {
    icon: Clock,
    title: "Response Time",
    description: "We aim to reply within",
    value: "24 business hours",
    href: null,
  },
];

const inquiryTypes = [
  "General Inquiry",
  "AI Solutions",
  "SaaS Development",
  "ERP / Odoo",
  "Systems Integration",
  "Automation",
  "Digital Transformation",
  "Partnership",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    inquiryType: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <>
      <PageHeader
        title="Get in Touch"
        description="Ready to start your next project? Let's talk about how we can help your business grow."
      />

      <Section>
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle>Send us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">
                        Message Sent
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        Thank you for reaching out. We&apos;ll get back to you within 24
                        business hours.
                      </p>
                      <Button
                        variant="outline"
                        onClick={() => setIsSubmitted(false)}
                      >
                        Send Another Message
                      </Button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name *</Label>
                          <Input
                            id="name"
                            placeholder="Your name"
                            required
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="you@company.com"
                            required
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({ ...formData, email: e.target.value })
                            }
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="company">Company</Label>
                          <Input
                            id="company"
                            placeholder="Your company name"
                            value={formData.company}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                company: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="inquiryType">Inquiry Type</Label>
                          <select
                            id="inquiryType"
                            className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            value={formData.inquiryType}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                inquiryType: e.target.value,
                              })
                            }
                          >
                            <option value="">Select an option</option>
                            {inquiryTypes.map((type) => (
                              <option key={type} value={type}>
                                {type}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          placeholder="Tell us about your project or inquiry..."
                          required
                          rows={6}
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              message: e.target.value,
                            })
                          }
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full">
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </Button>

                      <p className="text-xs text-muted-foreground text-center">
                        By submitting this form, you agree to our{" "}
                        <a href="/privacy" className="underline">
                          Privacy Policy
                        </a>
                        . We&apos;ll never share your information.
                      </p>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactMethods.map((method) => (
                    <div key={method.title} className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <method.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">{method.title}</div>
                        <div className="text-sm text-muted-foreground">
                          {method.description}
                        </div>
                        {method.href ? (
                          <a
                            href={method.href}
                            className="text-sm text-primary hover:underline"
                          >
                            {method.value}
                          </a>
                        ) : (
                          <div className="text-sm text-muted-foreground">
                            {method.value}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle>Follow Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Stay updated with our latest work and insights.
                  </p>
                  <div className="flex gap-3">
                    <a
                      href="#"
                      className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                    >
                      <Linkedin className="h-5 w-5 text-primary" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                    >
                      <Twitter className="h-5 w-5 text-primary" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                    >
                      <Github className="h-5 w-5 text-primary" />
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary border-0 text-primary-foreground">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">Prefer a Call?</h3>
                  <p className="text-sm text-primary-foreground/80 mb-4">
                    Schedule a 15-minute intro call at a time that works for you.
                  </p>
                  <Button variant="secondary" className="w-full">
                    Book a Time
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
