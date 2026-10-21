import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://leadsinclick.in";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/studio", "/studio/*"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}