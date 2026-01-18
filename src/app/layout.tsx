import "@/styles/globals.css";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";

import { jetBrainsMono, stixTwoText } from "@/styles/fonts";
import { cn } from "@/utils/cn";

export const metadata: Metadata = {
  title: "Victorien Druon",
  description: "Victorien Druon's blog",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "16x16" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
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
