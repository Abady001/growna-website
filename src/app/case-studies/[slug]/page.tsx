import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { constructMetadata } from "@/lib";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Building2, Calendar } from "lucide-react";
import { caseStudies, getCaseStudyBySlug } from "@/lib/data/case-studies";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  
  if (!study) {
    return constructMetadata("caseStudies");
  }
  
  return constructMetadata("caseStudies", {
    title: `${study.title} | GROWNA Case Study`,
    description: study.subtitle,
  });
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  return (
    <>
      <section className="py-12 md:py-16 bg-card border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <Link
            href="/case-studies"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Case Studies
          </Link>

          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-sm text-muted-foreground flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {new Date(study.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                })}
              </span>
              <span className="text-sm text-muted-foreground flex items-center gap-1">
                <Building2 className="h-4 w-4" />
                {study.industry}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              {study.title}
            </h1>
            <p className="text-xl text-muted-foreground">{study.subtitle}</p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl">
            <div className="flex flex-wrap gap-2 mb-8">
              {study.services.map((service) => (
                <span
                  key={service}
                  className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full"
                >
                  {service}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
              {study.results.map((result) => (
                <Card key={result.metric} className="bg-card border-border">
                  <CardContent className="pt-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-1">
                      {result.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {result.metric}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
                <p className="text-muted-foreground">{study.challenge}</p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Our Solution</h2>
                <p className="text-muted-foreground">{study.solution}</p>
              </div>
            </div>

            {study.testimonial && (
              <Card className="bg-card border-border mb-16">
                <CardContent className="pt-6">
                  <blockquote className="text-lg italic text-muted-foreground mb-4">
                    &ldquo;{study.testimonial.quote}&rdquo;
                  </blockquote>
                  <div>
                    <div className="font-semibold">{study.testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">
                      {study.testimonial.role}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">
                Ready to achieve similar results?
              </h3>
              <p className="text-muted-foreground mb-6">
                Let&apos;s discuss how we can help your business grow.
              </p>
              <Button>
                <Link href="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
