// src/app/blog/[slug]/page.tsx
import { Suspense } from "react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS } from "@/data/blogs";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate Dynamic SEO Metadata for each blog post
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = BLOG_POSTS.find((post) => post.slug === slug);

  if (!blog) {
    return { title: "Blog Not Found" };
  }

  return {
    title: `${blog.title} | Digital Marketing Blog`,
    description: blog.excerpt,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      images: [{ url: blog.image }],
    },
  };
}

// Generate Static Params for pre-rendering known slugs
export async function generateStaticParams() {
  return BLOG_POSTS.map((blog) => ({
    slug: blog.slug,
  }));
}

// 1. Inner Async Component that awaits `params` inside Suspense
async function BlogArticleContent({ params }: PageProps) {
  const { slug } = await params;
  const blog = BLOG_POSTS.find((post) => post.slug === slug);

  if (!blog) {
    notFound();
  }

  // Get 3 related blogs excluding current one
  const relatedBlogs = BLOG_POSTS.filter((post) => post.id !== blog.id).slice(
    0,
    3
  );

  return (
    <article className="max-w-5xl mx-auto bg-white rounded-[36px] overflow-hidden shadow-2xl">
      {/* Top Hero Image Banner */}
      <div className="relative h-[300px] sm:h-[420px] w-full">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        {/* Title & Meta Overlay */}
        <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-12 sm:right-12 text-white">
          <span className="inline-block bg-[#b8c99d] text-[#1a1a1a] text-xs font-bold px-3.5 py-1 rounded-full mb-3">
            {blog.category}
          </span>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight">
            {blog.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-gray-300 mt-4">
            <span>By {blog.author}</span>
            <span>•</span>
            <span>{blog.date}</span>
            <span>•</span>
            <span>{blog.readTime}</span>
          </div>
        </div>
      </div>

      {/* Main Article Body */}
      <div className="px-6 sm:px-12 md:px-20 py-10 sm:py-14">
        <p className="text-lg sm:text-xl text-gray-600 font-medium leading-relaxed mb-8 border-l-4 border-[#b8c99d] pl-4">
          {blog.excerpt}
        </p>

        {/* Rich HTML Content */}
        <div
          className="prose prose-neutral max-w-none text-gray-700 leading-relaxed space-y-5
            [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-[#1a1a1a] [&>h3]:mt-8 [&>h3]:mb-2
            [&>blockquote]:bg-gray-50 [&>blockquote]:p-6 [&>blockquote]:rounded-2xl [&>blockquote]:italic [&>blockquote]:text-[#1a1a1a] [&>blockquote]:font-medium [&>blockquote]:border [&>blockquote]:border-gray-200"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

        {/* Bottom CTA Banner inside Article */}
        <div className="mt-14 rounded-3xl bg-[#181817] text-white p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2">
              Let&apos;s grow your Brand Together!
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 max-w-md">
              Ready to turn these insights into measurable revenue? Connect with
              our digital marketing strategists today.
            </p>
          </div>
          <Link
            href="/blog"
            className="bg-[#b8c99d] hover:bg-[#a7bb88] text-[#1a1a1a] font-semibold text-xs sm:text-sm px-6 py-3 rounded-full shrink-0 transition"
          >
            Explore More Services
          </Link>
        </div>

        {/* Related Articles Section */}
        <div className="mt-14 pt-10 border-t border-gray-100">
          <h2 className="text-xl sm:text-2xl font-bold text-[#1a1a1a] mb-6">
            More Articles You Might Like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedBlogs.map((item) => (
              <Link
                href={`/blog/${item.slug}`}
                key={item.id}
                className="group block"
              >
                <div className="aspect-video rounded-2xl overflow-hidden bg-gray-100 mb-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-gray-400">
                  {item.category}
                </span>
                <h4 className="font-bold text-sm text-[#1a1a1a] group-hover:text-[#5d723d] transition-colors mt-1">
                  {item.title}
                </h4>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

// 2. Instant Loading Skeleton for Suspense Fallback
function BlogSkeleton() {
  return (
    <div className="max-w-5xl mx-auto bg-white rounded-[36px] overflow-hidden shadow-2xl animate-pulse">
      <div className="h-[300px] sm:h-[420px] w-full bg-gray-200" />
      <div className="px-6 sm:px-12 md:px-20 py-10 sm:py-14 space-y-6">
        <div className="h-6 bg-gray-200 rounded w-3/4" />
        <div className="h-4 bg-gray-200 rounded w-full" />
        <div className="h-4 bg-gray-200 rounded w-5/6" />
        <div className="h-4 bg-gray-200 rounded w-full" />
      </div>
    </div>
  );
}

// 3. Main Page Component wrapping dynamic URL params inside <Suspense>
export default function SingleBlogPage({ params }: PageProps) {
  return (
    <main className="min-h-screen bg-[#141413] py-8 sm:py-12 px-4 sm:px-6">
      <Suspense fallback={<BlogSkeleton />}>
        <BlogArticleContent params={params} />
      </Suspense>
    </main>
  );
}