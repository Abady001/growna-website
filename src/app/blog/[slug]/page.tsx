import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { constructMetadata } from "@/lib";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Clock, User } from "lucide-react";
import { blogPosts, getBlogPostBySlug } from "@/lib/data/blog";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  
  if (!post) {
    return constructMetadata("blog");
  }
  
  return constructMetadata("blog", {
    title: `${post.title} | GROWNA Blog`,
    description: post.subtitle,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <section className="py-12 md:py-16 bg-card border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>

          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full">
                {post.category}
              </span>
              <span className="text-sm text-muted-foreground flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
              <span className="text-sm text-muted-foreground">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              {post.title}
            </h1>
            <p className="text-xl text-muted-foreground">{post.subtitle}</p>

            <div className="flex items-center gap-3 mt-8">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <User className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="font-medium">{post.author.name}</div>
                <div className="text-sm text-muted-foreground">
                  {post.author.role}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <article className="max-w-3xl mx-auto">
            <div className="prose prose-lg dark:prose-invert max-none">
              <p className="text-xl text-muted-foreground lead mb-8">
                {post.excerpt}
              </p>
              
              <p>
                This is a placeholder for the full article content. In a production
                environment, this would be populated from a CMS or markdown file.
              </p>
              
              <h2>Key Takeaways</h2>
              <ul>
                <li>First key point about the topic</li>
                <li>Second important insight to consider</li>
                <li>Third actionable recommendation</li>
              </ul>

              <h2>Conclusion</h2>
              <p>
                The {post.category.toLowerCase()} landscape continues to evolve.
                Staying ahead requires the right technology partner who understands
                your business goals and can deliver practical solutions.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t border-border">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm px-3 py-1 bg-muted text-muted-foreground rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-12 p-8 bg-card border border-border rounded-xl text-center">
              <h3 className="text-xl font-semibold mb-2">
                Ready to Transform Your Business?
              </h3>
              <p className="text-muted-foreground mb-6">
                Let&apos;s discuss how we can help you achieve your goals.
              </p>
              <Button>
                <Link href="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
