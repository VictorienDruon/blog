import type { MetadataRoute } from "next";

const sitemap = (): MetadataRoute.Sitemap => [
  {
    url: "https://victorien.druon.xyz",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 1,
  },
  {
    url: "https://victorien.druon.xyz/writing/becoming-an-engineer-when-machines-can-code",
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.8,
  },
  {
    url: "https://victorien.druon.xyz/writing/my-2026-stack",
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.8,
  },
  {
    url: "https://victorien.druon.xyz/writing/ditch-tanstack-query-embrace-tanstack-db",
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.8,
  },
  {
    url: "https://victorien.druon.xyz/writing/pnpm-workspaces",
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.8,
  },
];

export default sitemap;
