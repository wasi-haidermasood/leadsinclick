import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://leadsinclick.in";

  return [
    { url: `${baseUrl}/`, lastModified: new Date() },
    { url: `${baseUrl}/blog`, lastModified: new Date() },
    { url: `${baseUrl}/how-we-work`, lastModified: new Date() },
    { url: `${baseUrl}/pricing`, lastModified: new Date() },
    { url: `${baseUrl}/why-us`, lastModified: new Date() },
    { url: `${baseUrl}/contact`, lastModified: new Date() },
  ];
}