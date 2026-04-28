import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Camera, Film, Layers, Palette, Rocket, Compass, Wand2, Send } from "lucide-react";
import { Particles } from "@/components/site/Particles";
import { SectionHeading } from "@/components/site/SectionHeading";
import { FloatingCards } from "@/components/site/FloatingCards";
import heroBg from "@/assets/hero-bg.jpg";
import beforeImg from "@/assets/clients/nilax-flat.jpg";
import afterImg from "@/assets/clients/nilax-cinematic.jpg";
import logo from "@/assets/logo.png";
import { caseStudies, featuredCaseStudy } from "@/data/case-studies";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Color-Creator AI — AI Creative Content Studio for Modern Brands" },
      {
        name: "description",
        content:
          "Cinematic AI video, premium photography and high-volume marketing graphics for brands ready to dominate attention.",
      },
      { property: "og:title", content: "Color-Creator AI — AI Creative Content Studio" },
      { property: "og:description", content: "AI-powered visual content studio for modern brands." },
      { property: "og:image", content: featuredCaseStudy.hero },
      { name: "twitter:image", content: featuredCaseStudy.hero },
    ],
  }),
  component: HomePage,
});

const services = [
  {
    icon: Palette,
    title: "Graphic Design",
    text: "High quality marketing visuals — social media posts, billboard campaigns, and brand creatives.",
  },
  {
    icon: Camera,
    title: "Photography",
    text: "Professional brand photography including product shoots, lifestyle, and commercial visuals.",
  },
  {
    icon: Film,
    title: "AI Video Production",
    text: "Cinematic AI video campaigns for advertising, social media marketing, and storytelling.",
  },
  {
    icon: Layers,
    title: "Full Content Production",
    text: "Complete content systems combining graphics, photography and video campaigns.",
  },
];

/** Explicit per-brand category mapping for the homepage portfolio strip.
 *  Cowbell → Graphic Design, Nilax → Photography, Maltina → Photography. */
const brandCategory: Record<string, "Graphic Design" | "Photography"> = {
  "cowbell-chocolate": "Graphic Design",
  "fbc-nilax": "Photography",
  "maltina-classic": "Photography",
};

const portfolio = caseStudies
  .flatMap((c) =>
    c.gallery.slice(0, 2).map((g) => ({
      img: g.src,
      title: c.brand,
      caption: g.caption,
      cat: brandCategory[c.slug] ?? c.projectType,
      slug: c.slug,
    })),
  )
  .slice(0, 6);

const engine = [
  { icon: Palette, title: "Graphics", text: "Marketing visuals and campaign designs." },
  { icon: Camera, title: "Photography", text: "Brand and product photography." },
  { icon: Film, title: "Video", text: "Cinematic AI marketing videos." },
  { icon: Send, title: "Distribution Ready", text: "Optimized for social media and ads." },
];

const process = [
  { num: "01", icon: Compass, title: "Discovery", text: "Understanding brand goals." },
  { num: "02", icon: Wand2, title: "Strategy", text: "Planning the content direction." },
  { num: "03", icon: Sparkles, title: "Production", text: "Creating graphics, photo and video." },
  { num: "04", icon: Rocket, title: "Delivery", text: "Ready-to-publish marketing assets." },
];

const audience = [
  { title: "Startups", text: "Launch strong brand visuals quickly." },
  { title: "Small Businesses", text: "Consistent content production to grow visibility." },
  { title: "Growing Brands", text: "Full marketing content campaigns." },
];

function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroBg}
            alt=""
            className="w-full h-full object-cover opacity-30"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
        </div>
        {/* Faint logo watermark */}
        <img
          src={logo}
          alt=""
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] max-w-[680px] opacity-[0.05] -z-10 select-none"
        />
        <Particles count={40} />

        <div className="container mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left — copy */}
            <div className="animate-fade-up text-center lg:text-left max-w-xl mx-auto lg:mx-0">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">
                <Sparkles size={12} className="text-primary" />
                Creative Content Studio
              </span>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tighter leading-[0.95]">
                Create
                <br />
                Visual Content
                <br />
                <span className="gradient-text">That Sells.</span>
              </h1>
              <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-md mx-auto lg:mx-0 leading-relaxed">
                We combine creativity, strategy and technology to produce
                stunning graphic design and photography that helps brands stand
                out and grow.
              </p>
              <div className="mt-9 flex flex-wrap justify-center lg:justify-start gap-3">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium text-primary-foreground shadow-glow hover:scale-105 transition-transform"
                  style={{ background: "var(--gradient-cinematic)" }}
                >
                  Start Project
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/portfolio"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium glass-strong hover:bg-white/10 transition-colors"
                >
                  View Portfolio
                </Link>
              </div>
            </div>

            {/* Right — floating cinematic cards */}
            <div className="relative">
              <FloatingCards />
            </div>
          </div>
        </div>
      </section>

      {/* BRAND STORY */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="relative max-w-5xl mx-auto glass-strong rounded-3xl p-10 md:p-16 shadow-elevated overflow-hidden">
            <div
              className="absolute -top-32 -right-32 h-96 w-96 rounded-full opacity-30"
              style={{
                background: "radial-gradient(circle, var(--neon-purple), transparent 70%)",
                filter: "blur(60px)",
              }}
            />
            <div className="relative">
              <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Our Mission
              </span>
              <h2 className="mt-4 font-display text-3xl md:text-5xl font-semibold leading-tight">
                Helping brands <span className="gradient-text">scale visual presence</span>{" "}
                with premium content.
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-3xl">
                Color-Creator AI helps brands scale their visual presence
                through high-volume premium marketing content. Our studio
                combines creative strategy, photography, graphic design and AI
                video production to help brands dominate attention online and
                offline.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <SectionHeading
            eyebrow="Services"
            title={<>Built for <span className="gradient-text">attention</span>.</>}
            description="Four production pillars working as one creative engine."
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="group relative glass rounded-3xl p-8 glow-border hover:-translate-y-2 transition-transform duration-500 animate-fade-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div
                  className="h-12 w-12 grid place-items-center rounded-2xl mb-6 shadow-glow"
                  style={{ background: "var(--gradient-cinematic)" }}
                >
                  <s.icon size={20} className="text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <SectionHeading
            eyebrow="Portfolio"
            title={<>Selected <span className="gradient-text">work</span>.</>}
            description="A glimpse of recent campaigns across graphics, photography, and AI video."
          />
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {portfolio.map((p, i) => (
              <Link
                key={`${p.slug}-${i}`}
                to="/case-study/$slug"
                params={{ slug: p.slug }}
                className="group relative aspect-[4/5] overflow-hidden rounded-3xl glass glow-border animate-fade-up block"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <span
                    className="self-start px-2.5 py-1 rounded-full text-[10px] uppercase tracking-[0.18em] font-medium text-primary-foreground mb-3"
                    style={{ background: "var(--gradient-cinematic)" }}
                  >
                    {p.cat}
                  </span>
                  <h3 className="font-display text-xl font-semibold">{p.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground line-clamp-1">
                    {p.caption}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-strong hover:bg-white/10 transition-colors text-sm font-medium"
            >
              See full portfolio <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* TRANSFORMATION */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <SectionHeading
            eyebrow="Marketing Transformation"
            title={<>From flat to <span className="gradient-text">cinematic</span>.</>}
            description="See the difference premium creative direction makes — same product, two completely different stories."
          />
          <div className="mt-16 grid gap-6 md:gap-10 md:grid-cols-2 items-stretch">
            {[
              {
                label: "Flat",
                img: beforeImg,
                caption: "Basic product shot with no creative direction.",
                isCinematic: false,
              },
              {
                label: "Cinematic",
                img: afterImg,
                caption: "High-impact visual designed for marketing and brand storytelling.",
                isCinematic: true,
              },
            ].map((b, i) => (
              <div
                key={b.label}
                className="group animate-fade-up"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <div className="mb-4 flex items-center gap-3">
                  <span
                    className="px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.25em] font-semibold"
                    style={{
                      background: b.isCinematic
                        ? "var(--gradient-cinematic)"
                        : "oklch(0.2 0.02 280 / 0.7)",
                      color: b.isCinematic ? "var(--primary-foreground)" : undefined,
                    }}
                  >
                    {b.label}
                  </span>
                  <span className="h-px flex-1 bg-white/10" />
                </div>
                <div
                  className={`relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-secondary/40 transition-all duration-500 ${
                    b.isCinematic
                      ? "group-hover:shadow-glow"
                      : "group-hover:border-white/20"
                  }`}
                >
                  <img
                    src={b.img}
                    alt={`${b.label} Nilax product visual`}
                    loading="lazy"
                    width={1024}
                    height={1280}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  {b.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENT ENGINE */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <SectionHeading
            eyebrow="The System"
            title={<>Your Brand <span className="gradient-text">Content Engine</span>.</>}
            description="A high-volume content production system that compounds your brand presence."
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {engine.map((e, i) => (
              <div
                key={e.title}
                className="relative glass-strong rounded-3xl p-8 overflow-hidden animate-fade-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div
                  className="absolute -top-10 -right-10 h-32 w-32 rounded-full opacity-30"
                  style={{
                    background: "var(--gradient-cinematic)",
                    filter: "blur(40px)",
                  }}
                />
                <div className="relative">
                  <e.icon size={28} className="mb-6 text-primary" />
                  <h3 className="font-display text-xl font-semibold">{e.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{e.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED CAMPAIGN */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <SectionHeading
            eyebrow="Featured Campaign"
            title={<><span className="gradient-text">{featuredCaseStudy.brand}</span>.</>}
            description={featuredCaseStudy.summary}
          />
          <div className="mt-16 relative glass-strong rounded-3xl overflow-hidden glow-border shadow-elevated">
            <div
              className="absolute -top-32 -right-32 h-[28rem] w-[28rem] rounded-full opacity-30 pointer-events-none"
              style={{
                background: "radial-gradient(circle, var(--neon-pink), transparent 70%)",
                filter: "blur(80px)",
              }}
            />
            <div className="relative grid lg:grid-cols-5 gap-0">
              <Link
                to="/case-study/$slug"
                params={{ slug: featuredCaseStudy.slug }}
                className="group lg:col-span-3 relative aspect-[4/3] lg:aspect-auto lg:min-h-[28rem] block overflow-hidden"
              >
                <img
                  src={featuredCaseStudy.hero}
                  alt={`${featuredCaseStudy.title} hero visual`}
                  loading="lazy"
                  width={1920}
                  height={1440}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-background/60" />
              </Link>
              <div className="lg:col-span-2 p-8 md:p-10 flex flex-col justify-center gap-5">
                <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  Featured · {featuredCaseStudy.industry}
                </span>
                <h3 className="font-display text-3xl md:text-4xl font-semibold leading-tight tracking-tight">
                  {featuredCaseStudy.title}
                </h3>
                <p className="text-sm uppercase tracking-[0.2em] text-foreground/70">
                  {featuredCaseStudy.brand}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {featuredCaseStudy.summary}
                </p>
                <div className="flex flex-wrap gap-2">
                  {featuredCaseStudy.tags.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-full glass text-[11px] uppercase tracking-[0.15em]">
                      {t}
                    </span>
                  ))}
                </div>
                <Link
                  to="/case-study/$slug"
                  params={{ slug: featuredCaseStudy.slug }}
                  className="self-start inline-flex items-center gap-2 px-6 py-3 mt-2 rounded-full text-sm font-medium text-primary-foreground shadow-glow hover:scale-105 transition-transform"
                  style={{ background: "var(--gradient-cinematic)" }}
                >
                  View Case Study <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <SectionHeading
            eyebrow="Creative Process"
            title={<>How we <span className="gradient-text">build</span>.</>}
          />
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <div
                key={p.num}
                className="relative glass rounded-3xl p-8 hover:-translate-y-1 transition-transform animate-fade-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="font-display text-4xl font-semibold gradient-text">
                    {p.num}
                  </span>
                  <p.icon size={20} className="text-muted-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AUDIENCE */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <SectionHeading
            eyebrow="Who We Work With"
            title={<>Built for <span className="gradient-text">ambitious</span> brands.</>}
          />
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {audience.map((a, i) => (
              <div
                key={a.title}
                className="glass-strong rounded-3xl p-10 animate-fade-up"
                style={{ animationDelay: `${i * 120}ms` }}
              >
                <h3 className="font-display text-2xl font-semibold gradient-text">
                  {a.title}
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="relative max-w-4xl mx-auto text-center glass-strong rounded-3xl p-12 md:p-20 shadow-elevated overflow-hidden">
            <div
              className="absolute inset-0 opacity-40"
              style={{
                background:
                  "radial-gradient(circle at center, var(--neon-purple), transparent 60%)",
                filter: "blur(40px)",
              }}
            />
            <div className="relative">
              <h2 className="font-display text-4xl md:text-6xl font-semibold tracking-tight">
                Ready to <span className="gradient-text">level up</span> your brand?
              </h2>
              <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">
                Tell us about your brand and the content you need. We take on a
                limited number of projects each quarter.
              </p>
              <Link
                to="/contact"
                className="mt-10 inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-medium text-primary-foreground shadow-glow hover:scale-105 transition-transform"
                style={{ background: "var(--gradient-cinematic)" }}
              >
                Start My Project <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
