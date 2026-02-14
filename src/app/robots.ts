import type { MetadataRoute } from "next";

const robots = (): MetadataRoute.Robots => ({
  rules: {
    userAgent: "*",
    allow: "/",
  },
  sitemap: "https://victorien.druon.xyz/sitemap.xml",
});

export default robots;
