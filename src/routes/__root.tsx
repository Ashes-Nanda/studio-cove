import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Footer } from "../components/Footer";
import { Nav } from "../components/Nav";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-paper px-6">
      <div className="max-w-md text-center">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-6">
          404 / Not Found
        </p>
        <h1 className="font-display italic text-6xl md:text-7xl leading-none mb-6">
          Lost in the archive.
        </h1>
        <p className="text-sm text-ink/60 mb-10">
          This page is not part of the current edition.
        </p>
        <Link
          to="/"
          className="inline-block px-8 py-4 bg-ink text-paper text-[11px] uppercase tracking-[0.2em] hover:bg-accent transition-colors"
        >
          Return to Cover
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-paper px-6">
      <div className="max-w-md text-center">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-6">
          Error
        </p>
        <h1 className="font-display italic text-5xl leading-tight mb-6">
          A misprint occurred.
        </h1>
        <p className="text-sm text-ink/60 mb-10">
          Something interrupted the page. Reload or return to the cover.
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="px-8 py-4 bg-ink text-paper text-[11px] uppercase tracking-[0.2em] hover:bg-accent transition-colors"
          >
            Try Again
          </button>
          <a
            href="/"
            className="px-8 py-4 border border-ink/20 text-[11px] uppercase tracking-[0.2em] hover:border-ink transition-colors"
          >
            Cover
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Studio Cove — Making Waves" },
      {
        name: "description",
        content:
          "Studio Cove is a creative practice in branding, social media, production, and campaigns — making your brand grow like a tree in a concrete jungle.",
      },
      { name: "author", content: "Studio Cove" },
      { property: "og:title", content: "Studio Cove — Making Waves" },
      {
        property: "og:description",
        content:
          "A creative studio for F&B, FMCG, fashion, art, and culture-led brands.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Studio Cove — Making Waves" },
      {
        name: "twitter:description",
        content:
          "Branding, social media, production, and campaigns. Est. 2023.",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,700;1,500;1,700&family=Inter:wght@400;500&family=JetBrains+Mono:wght@400&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-paper text-ink min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
