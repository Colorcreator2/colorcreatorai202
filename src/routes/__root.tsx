import {
  Outlet,
  Link,
  createRootRoute,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import appCss from "../styles.css?url";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { AuroraBackground } from "@/components/site/AuroraBackground";

function NotFoundComponent() {
  return (
  <div>
    <h1 className="text-4xl font-bold">
      <NotFoundComponent />
    </h1>
  </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Color-Creator AI — AI Creative Content Studio" },
      {
        name: "description",
        content:
          "Color-Creator AI is an AI-powered creative content studio crafting graphics, photography, and cinematic AI video for modern brands.",
      },
      { name: "author", content: "Color-Creator AI" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#11091a" },
      { property: "og:title", content: "Color-Creator AI — AI Creative Content Studio" },
      { name: "twitter:title", content: "Color-Creator AI — AI Creative Content Studio" },
      { name: "description", content: "Color-Creator AI creates high-quality graphic design and photography for brands to boost visibility and impact." },
      { property: "og:description", content: "Color-Creator AI creates high-quality graphic design and photography for brands to boost visibility and impact." },
      { name: "twitter:description", content: "Color-Creator AI creates high-quality graphic design and photography for brands to boost visibility and impact." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/OzSFlOjSvZZeAPjREf30U2yFDJ73/social-images/social-1777089336308-IMG_4866.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/OzSFlOjSvZZeAPjREf30U2yFDJ73/social-images/social-1777089336308-IMG_4866.webp" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body className="dark">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="relative min-h-screen">
      <AuroraBackground />
      <Header />
      <main className="relative">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
