// src/app/blog/page.tsx
import { Metadata } from "next";
import BlogClientView from "@/components/blog/BlogClientView";
import { BLOG_POSTS, CATEGORIES } from "@/data/blogs";

// Server Component SEO Metadata Configuration
export const metadata: Metadata = {
  title: "Digital Marketing Insights & Blog | Migital",
  description:
    "Explore expert articles on Strategy, Content Creation, SEO, Design, Analytics, and Brand Growth.",
  keywords: [
    "Digital Marketing",
    "SEO",
    "Content Creation",
    "Social Media Management",
    "Marketing Blog",
  ],
  openGraph: {
    title: "Digital Marketing Insights & Blog | Migital",
    description: "Let's grow your brand together with actionable marketing insights.",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Digital Marketing Services Blog",
      },
    ],
  },
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#141413]">
      <BlogClientView initialBlogs={BLOG_POSTS} categories={CATEGORIES} />
    </main>
  );
}