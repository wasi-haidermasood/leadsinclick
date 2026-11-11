// src/components/blog/BlogClientView.tsx
"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { BlogPost } from "@/data/blogs";

interface BlogClientViewProps {
  initialBlogs: BlogPost[];
  categories: string[];
}

export default function BlogClientView({
  initialBlogs,
  categories,
}: BlogClientViewProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter blogs by both search query and selected category
  const filteredBlogs = useMemo(() => {
    return initialBlogs.filter((blog) => {
      const matchesCategory =
        selectedCategory === "All" || blog.category === selectedCategory;
      const matchesSearch =
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.category.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [initialBlogs, searchQuery, selectedCategory]);

  return (
    <div className="w-full font-sans text-[#1a1a1a]">
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[460px] sm:h-[520px] md:h-[580px] overflow-hidden">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1800&auto=format&fit=crop"
          alt="Digital Marketing Services"
          className="w-full h-full object-cover object-top brightness-90"
        />
        {/* Warm Dark Gradient Overlay matching reference */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent" />

        {/* Hero Content */}
        <div className="absolute inset-0 max-w-7xl mx-auto px-6 sm:px-10 md:px-14 flex flex-col justify-center pb-12">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] max-w-xl">
            Digital Marketing <br />
            Services
          </h1>
          <div className="mt-6">
            <a
              href="#articles"
              className="inline-block bg-[#b8c99d] hover:bg-[#a7bb88] text-[#1a1a1a] font-medium text-xs sm:text-sm px-6 py-3 rounded-full transition-all shadow-md"
            >
              Explore Insights & Articles
            </a>
          </div>
        </div>
      </section>

      {/* ================= MAIN ROUNDED WHITE CONTAINER ================= */}
      <section className="relative z-10 -mt-12 sm:-mt-16 bg-white rounded-t-[36px] rounded-b-[36px] max-w-7xl mx-auto px-6 sm:px-10 md:px-14 py-10 sm:py-14 shadow-2xl">
        
        {/* --- TOP 3-COLUMN BENTO SECTION --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start pb-12 border-b border-gray-100">
          
          {/* Column 1: Interactive Categories List (3 cols) */}
          <div className="lg:col-span-3">
            <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-4">
              Categories
            </p>
            <ul className="space-y-2 text-sm">
              {categories.map((category) => {
                const isActive = selectedCategory === category;
                return (
                  <li key={category}>
                    <button
                      onClick={() => setSelectedCategory(category)}
                      className={`flex items-center text-left transition-colors hover:text-black ${
                        isActive
                          ? "font-bold text-black text-base"
                          : "text-gray-600 font-normal"
                      }`}
                    >
                      <span className="mr-2 text-gray-400">·</span>
                      {category}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 2: Featured Service Spotlight (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full">
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-2">
                Featured Topic
              </p>
              <p className="text-xs text-gray-400 mb-3">
                 curated marketing blueprint
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1a1a] leading-snug mb-4">
                Social Media <br />
                Management
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mb-6">
                Build an authentic brand presence across platforms. Learn how data-driven scheduling, community management, and viral storytelling boost organic reach.
              </p>
            </div>
            <div>
              <button
                onClick={() => {
                  setSelectedCategory("Strategy");
                  document.getElementById("articles")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-[#181818] hover:bg-black/80 text-white text-xs font-medium px-6 py-2.5 rounded-full transition"
              >
                Explore Strategy
              </button>
            </div>
          </div>

          {/* Column 3: Dark Promo Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-3xl bg-[#181817] text-white p-7 sm:p-8 flex flex-col justify-between min-h-[250px] shadow-lg">
              {/* Subtle right-side decorative image overlay like reference */}
              <div
                className="absolute right-0 top-0 bottom-0 w-2/5 opacity-25 pointer-events-none bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=600&auto=format&fit=crop')",
                }}
              />
              <div className="relative z-10 max-w-xs">
                <h3 className="text-2xl sm:text-3xl font-bold leading-tight mb-3">
                  Let&apos;s grow your <br />
                  Brand Together!
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed mb-6">
                  Transform your digital footprint with tailored SEO, high-converting content, and precision ad campaigns designed for modern businesses.
                </p>
                <Link
                  href="/blog/let-it-campaigns-together"
                  className="inline-block bg-white hover:bg-gray-100 text-[#181817] font-semibold text-xs px-5 py-2.5 rounded-full transition"
                >
                  Read Featured Guide
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* --- BOTTOM BLOG GRID SECTION --- */}
        <div id="articles" className="pt-10">
          {/* Header + Working Search Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-3 flex-wrap">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1a1a]">
                Capabilities Together
              </h2>
              <span className="text-[11px] font-medium text-gray-500 border border-gray-200 rounded-full px-3 py-1 bg-gray-50">
                {filteredBlogs.length} {filteredBlogs.length === 1 ? "Article" : "Articles"}
              </span>
              {selectedCategory !== "All" && (
                <button
                  onClick={() => setSelectedCategory("All")}
                  className="text-xs text-[#6b8247] hover:underline font-medium"
                >
                  Clear filter ({selectedCategory}) ✕
                </button>
              )}
            </div>

            {/* Working Search Input */}
            <div className="relative w-full sm:w-64 md:w-72">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles, topics..."
                className="w-full text-xs sm:text-sm bg-gray-50 border border-gray-200 rounded-full pl-9 pr-8 py-2.5 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#b8c99d] focus:bg-white transition"
              />
              {/* Search Icon */}
              <svg
                className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              {/* Clear Search Button */}
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xs"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* 5-Column Responsive Blog Cards Grid */}
          {filteredBlogs.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {filteredBlogs.map((blog) => (
                <Link
                  href={`/blog/${blog.slug}`}
                  key={blog.id}
                  className="group flex flex-col justify-between rounded-2xl transition-all duration-200 hover:-translate-y-1"
                >
                  <div>
                    {/* Square/Rounded Thumbnail Image */}
                    <div className="w-full aspect-square rounded-2xl overflow-hidden bg-gray-100 mb-3.5">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Title */}
                    <h3 className="font-bold text-sm text-[#1a1a1a] group-hover:text-[#5d723d] transition-colors leading-snug mb-1.5 line-clamp-2">
                      {blog.title}
                    </h3>

                    {/* Short Excerpt */}
                    <p className="text-[11px] text-gray-400 leading-relaxed line-clamp-2 mb-3">
                      {blog.excerpt}
                    </p>
                  </div>

                  {/* Card Footer: Mini Icon + Author/Date */}
                  <div className="flex items-center gap-2 pt-1">
                    <span className="w-4 h-4 rounded-full bg-[#1a1a1a] text-white flex items-center justify-center text-[8px] font-bold shrink-0">
                      ▶
                    </span>
                    <span className="text-[10px] text-gray-400 truncate">
                      {blog.category} • {blog.readTime}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            /* Empty Search State */
            <div className="text-center py-14 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
              <p className="text-base font-semibold text-gray-700 mb-1">
                No matching articles found
              </p>
              <p className="text-xs text-gray-400 mb-4">
                We couldn&apos;t find anything matching &quot;{searchQuery}&quot; in {selectedCategory}.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="bg-[#181817] text-white text-xs px-5 py-2 rounded-full hover:bg-black/80 transition"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}