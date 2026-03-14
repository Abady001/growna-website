export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  content?: string;
  author: {
    name: string;
    role: string;
    image?: string;
  };
  category: string;
  tags: string[];
  image: string;
  date: string;
  readTime: string;
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "ai-business-transformation-2026",
    title: "How AI is Transforming Business Operations in 2026",
    subtitle: "Practical applications of artificial intelligence for growing businesses",
    excerpt:
      "Artificial intelligence is no longer just a buzzword. Learn how businesses are leveraging AI to automate processes, improve decision-making, and drive growth.",
    author: {
      name: "Ahmed Abady",
      role: "Founder & CEO",
    },
    category: "AI & Automation",
    tags: ["AI", "Business", "Automation", "2026"],
    image: "/images/blog/ai-transformation.jpg",
    date: "2026-01-15",
    readTime: "8 min read",
    featured: true,
  },
  {
    id: "2",
    slug: "saas-vs-custom-software",
    title: "SaaS vs Custom Software: Making the Right Choice",
    subtitle: "A practical guide for growing businesses evaluating technology options",
    excerpt:
      "Should you build custom or buy SaaS? This guide helps business leaders make informed decisions about their technology stack.",
    author: {
      name: "Ahmed Abady",
      role: "Founder & CEO",
    },
    category: "Strategy",
    tags: ["SaaS", "Custom Development", "Technology Strategy"],
    image: "/images/blog/saas-vs-custom.jpg",
    date: "2025-12-20",
    readTime: "6 min read",
    featured: false,
  },
  {
    id: "3",
    slug: "erp-implementation-guide",
    title: "ERP Implementation: A Complete Guide for 2026",
    subtitle: "Best practices for successful ERP deployment in mid-market companies",
    excerpt:
      "ERP implementations fail more often than they succeed. Learn the key factors that separate successful implementations from costly failures.",
    author: {
      name: "Ahmed Abady",
      role: "Founder & CEO",
    },
    category: "ERP & Odoo",
    tags: ["ERP", "Odoo", "Implementation", "Best Practices"],
    image: "/images/blog/erp-guide.jpg",
    date: "2025-11-10",
    readTime: "10 min read",
    featured: true,
  },
  {
    id: "4",
    slug: "digital-transformation-checklist",
    title: "Digital Transformation Checklist for Growing Businesses",
    subtitle: "A step-by-step guide to modernizing your business technology",
    excerpt:
      "Digital transformation can feel overwhelming. Use this practical checklist to assess your current state and plan your modernization journey.",
    author: {
      name: "Ahmed Abady",
      role: "Founder & CEO",
    },
    category: "Digital Transformation",
    tags: ["Digital Transformation", "Strategy", "Modernization"],
    image: "/images/blog/digital-checklist.jpg",
    date: "2025-10-05",
    readTime: "7 min read",
    featured: false,
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getFeaturedBlogPosts(): BlogPost[] {
  return blogPosts.filter((post) => post.featured);
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter((post) => post.category === category);
}

export const blogCategories = [
  "All",
  "AI & Automation",
  "Strategy",
  "ERP & Odoo",
  "Digital Transformation",
  "SaaS",
  "Case Studies",
];
