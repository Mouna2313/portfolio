import type { MetadataRoute } from "next";
import { profile, projects } from "@/content/data";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: profile.site, changeFrequency: "monthly", priority: 1 },
    ...projects.map((p) => ({ url: `${profile.site}/projects/${p.slug}`, changeFrequency: "yearly" as const, priority: 0.7 })),
    { url: `${profile.site}${profile.resume}`, changeFrequency: "monthly", priority: 0.5 },
  ];
}
