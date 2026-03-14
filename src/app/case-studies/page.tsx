import type { Metadata } from "next";
import Link from "next/link";
import { constructMetadata } from "@/lib";
import { PageHeader } from "@/components/sections/page-header";
import { Section } from "@/components/sections/section";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Building2, ShoppingCart } from "lucide-react";
import { caseStudies } from "@/lib/data/case-studies";

export const metadata: Metadata = constructMetadata("caseStudies");

const industryIcons: Record<string, React.ElementType> = {
  Manufacturing: Building2,
  "Financial Technology": TrendingUp,
  "Retail / E-commerce": ShoppingCart,
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHeader
        title="Case Studies"
        description="See how we've helped businesses transform with technology. Real results, measurable outcomes, and proven approaches."
      />

      <Section>
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((study) => {
              const Icon = industryIcons[study.industry] || Building2;
              return (
                <Card
                  key={study.id}
                  className="bg-card border-border hover:border-primary/50 transition-colors"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold">{study.title}</h3>
                    <p className="text-sm text-muted-foreground">{study.subtitle}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <p className="text-xs text-muted-foreground mb-2">
                        {study.client} • {study.industry}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {study.services.slice(0, 2).map((service) => (
                          <span
                            key={service}
                            className="text-xs px-2 py-1 bg-primary/10 text-primary rounded"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {study.results.slice(0, 2).map((result) => (
                        <div
                          key={result.metric}
                          className="text-center p-2 bg-background rounded"
                        >
                          <div className="text-lg font-bold text-primary">
                            {result.value}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {result.metric}
                          </div>
                        </div>
                      ))}
                    </div>
                    <Button variant="ghost" size="sm" className="p-0">
                      <Link href={`/case-studies/${study.slug}`}>
                        Read case study
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </Section>

      <Section className="bg-card border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-muted-foreground mb-8">
              Let&apos;s discuss how we can help your business achieve similar
              results through strategic technology implementation.
            </p>
            <Button>
              <Link href="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
