import "@/styles/globals.css";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";

import { jetBrainsMono, stixTwoText } from "@/styles/fonts";
import { cn } from "@/utils/cn";

const url = "https://victorien.druon.xyz";

const description =
  "Software engineer apprentice based in Paris. Writing about software engineering, web development and building products.";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: {
    default: "Victorien Druon",
    template: "%s — Victorien Druon",
  },
  description,
  authors: [{ name: "Victorien Druon", url }],
  creator: "Victorien Druon",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: url,
    siteName: "Victorien Druon",
    title: "Victorien Druon",
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
    canonical: url,
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
