import { JsonLd } from "@/components/JsonLd";
import { AUTHOR } from "@/utils/constants";

type ArticleJsonLdProps = {
  title: string;
  description: string;
};

export const ArticleJsonLd = ({ title, description }: ArticleJsonLdProps) => (
  <JsonLd
    data={{
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: title,
      description,
      author: {
        "@type": "Person",
        name: AUTHOR.name,
        url: AUTHOR.url,
        sameAs: [AUTHOR.github, AUTHOR.x, AUTHOR.linkedin],
      },
    }}
  />
);
