import "@/styles/globals.css";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";

import { JsonLd } from "@/components/JsonLd";
import { jetBrainsMono, stixTwoText } from "@/styles/fonts";
import { cn } from "@/utils/cn";
import { AUTHOR, SITE_URL } from "@/utils/constants";

const description =
  "Software engineer apprentice based in Paris. Writing about software engineering, web development and building products.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: AUTHOR.name,
    template: `%s — ${AUTHOR.name}`,
  },
  description,
  authors: [{ name: AUTHOR.name, url: SITE_URL }],
  creator: AUTHOR.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: AUTHOR.name,
    title: AUTHOR.name,
    description,
  },
  twitter: {
    card: "summary",
    creator: "@druon_victorien",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
  },
  alternates: {
    canonical: SITE_URL,
  },
};

const RootLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <html
      lang="en"
      className={cn("antialiased", stixTwoText.variable, jetBrainsMono.variable)}
      suppressHydrationWarning
    >
      <body className="mx-auto max-w-2xl px-8 py-16">
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: AUTHOR.name,
            url: SITE_URL,
            author: {
              "@type": "Person",
              name: AUTHOR.name,
              url: AUTHOR.url,
              sameAs: [AUTHOR.github, AUTHOR.x, AUTHOR.linkedin],
            },
          }}
        />
        <main className="md:mt-8">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Analytics />
            <SpeedInsights />
          </ThemeProvider>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
