import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { caseStudies, featuredCaseStudy } from "@/data/case-studies";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Color-Creator AI" },
      {
        name: "description",
        content:
          "Selected campaigns spanning graphic design, brand photography, AI video and full content production.",
      },
      { property: "og:title", content: "Portfolio — Color-Creator AI" },
      { property: "og:description", content: "Selected creative campaigns by Color-Creator AI." },
      { property: "og:image", content: featuredCaseStudy.hero },
      { name: "twitter:image", content: featuredCaseStudy.hero },
    ],
  }),
  component: PortfolioPage,
});

const categories = ["All", "Graphic Design", "Photography"] as const;

type Item = {
  img: string;
  title: string;
  cat: "Graphic Design" | "Photography";
  client: string;
  slug: string;
};

const items: Item[] = caseStudies.flatMap((c) =>
  c.gallery.map((g) => {
    // Explicit per-brand category mapping so filters surface the right work.
    let cat: Item["cat"];
    if (c.slug === "cowbell-chocolate") {
      cat = "Graphic Design";
    } else if (c.slug === "fbc-nilax") {
      cat = "Photography";
    } else if (c.projectType === "Graphic Design") {
      cat = "Graphic Design";
    } else {
      cat = "Photography";
    }
    return { img: g.src, title: g.caption, cat, client: c.brand, slug: c.slug };
  }),
);

function PortfolioPage() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const filtered = active === "All" ? items : items.filter((i) => i.cat === active);

  return (
    <div className="pt-32 pb-20">
      <section className="container mx-auto px-6">
        <SectionHeading
          eyebrow="Portfolio"
          title={<>Portfolio</>}
          description="Selected works in graphic design and photography for real brands."
        />

        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setActive(c)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                active === c
                  ? "text-primary-foreground shadow-glow"
                  : "glass hover:bg-white/10"
              }`}
              style={
                active === c
                  ? { background: "var(--gradient-cinematic)" }
                  : undefined
              }
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <Link
              key={`${p.slug}-${p.title}-${i}`}
              to="/case-study/$slug"
              params={{ slug: p.slug }}
              className="group relative aspect-[4/5] overflow-hidden rounded-3xl glass border border-white/10 hover:border-white/25 hover:shadow-glow transition-all duration-500 animate-fade-up"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                width={1024}
                height={1280}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.2em] glass-strong border border-white/15">
                  {p.cat}
                </span>
              </div>
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="font-display text-xl font-semibold translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1 opacity-80 group-hover:opacity-100 transition-opacity">
                  {p.client}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-center gap-5 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Explore more of our creative work
          </p>
          <a
            href="https://www.behance.net/chukwudiudenwa"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium glass border border-white/15 hover:border-transparent hover:text-primary-foreground hover:shadow-glow transition-all hover:[background:var(--gradient-cinematic)]"
          >
            View Full Portfolio on Behance <ExternalLink size={16} />
          </a>

          <Link
            to="/contact"
            className="mt-2 inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium text-primary-foreground shadow-glow hover:scale-105 transition-transform"
            style={{ background: "var(--gradient-cinematic)" }}
          >
            Start your project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
