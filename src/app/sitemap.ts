import type { MetadataRoute } from "next";

import { SITE_URL } from "@/utils/constants";

const sitemap = (): MetadataRoute.Sitemap => [
  {
    url: SITE_URL,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 1,
  },
  {
    url: `${SITE_URL}/writing/becoming-an-engineer-when-machines-can-code`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.8,
  },
  {
    url: `${SITE_URL}/writing/my-2026-stack`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.8,
  },
  {
    url: `${SITE_URL}/writing/ditch-tanstack-query-embrace-tanstack-db`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.8,
  },
  {
    url: `${SITE_URL}/writing/pnpm-workspaces`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.8,
  },
];

export default sitemap;
