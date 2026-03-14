import type { Metadata } from "next";
import Link from "next/link";
import { constructMetadata } from "@/lib";
import { PageHeader } from "@/components/sections/page-header";
import { Section } from "@/components/sections/section";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, User } from "lucide-react";
import { blogPosts, getFeaturedBlogPosts } from "@/lib/data/blog";

export const metadata: Metadata = constructMetadata("blog");

export default function BlogPage() {
  const featuredPosts = getFeaturedBlogPosts();

  return (
    <>
      <PageHeader
        title="Blog"
        description="Insights and updates on technology, digital transformation, and business growth from the GROWNA team."
      />

      {featuredPosts.length > 0 && (
        <Section>
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-8">Featured Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredPosts.map((post) => (
                <Card
                  key={post.id}
                  className="bg-card border-border hover:border-primary/50 transition-colors"
                >
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold">{post.title}</h3>
                    <p className="text-sm text-muted-foreground">{post.subtitle}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">
                          {post.author.name}
                        </span>
                      </div>
                      <Button variant="ghost" size="sm" className="p-0">
                        <Link href={`/blog/${post.slug}`}>
                          Read more
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Section>
      )}

      <Section className="bg-card border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-bold mb-8">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Card
                key={post.id}
                className="bg-background border-border hover:border-primary/50 transition-colors"
              >
                <CardHeader>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold line-clamp-2">
                    {post.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      {post.date}
                    </span>
                    <Button variant="ghost" size="sm" className="p-0 h-auto">
                      <Link href={`/blog/${post.slug}`}>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-muted-foreground mb-8">
              Get the latest insights on technology and business growth delivered
              to your inbox.
            </p>
            <Button>
              <Link href="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
