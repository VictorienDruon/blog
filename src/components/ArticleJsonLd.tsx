import { JsonLd } from "@/components/JsonLd";

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
        name: "Victorien Druon",
        url: "https://victorien.druon.xyz",
        sameAs: [
          "https://github.com/VictorienDruon",
          "https://x.com/druon_victorien",
          "https://linkedin.com/in/victorien-druon",
        ],
      },
    }}
  />
);
