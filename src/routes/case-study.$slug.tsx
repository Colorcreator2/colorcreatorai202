import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, ArrowRight, Layers, Sparkles, Tag, Building2, Briefcase, Megaphone } from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Lightbox } from "@/components/site/Lightbox";
import { caseStudies, getCaseStudy } from "@/data/case-studies";

export const Route = createFileRoute("/case-study/$slug")({
  loader: ({ params }) => {
    const study = getCaseStudy(params.slug);
    if (!study) throw notFound();
    return { study };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.study;
    if (!s) return { meta: [{ title: "Case Study — Color-Creator AI" }] };
    return {
      meta: [
        { title: `${s.title} — Case Study | Color-Creator AI` },
        { name: "description", content: s.summary },
        { property: "og:title", content: s.title },
        { property: "og:description", content: s.summary },
        { property: "og:image", content: s.hero },
        { name: "twitter:image", content: s.hero },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="pt-40 pb-20 container mx-auto px-6 text-center">
      <h1 className="font-display text-4xl font-semibold">Case study not found</h1>
      <p className="mt-4 text-muted-foreground">The project you're looking for doesn't exist.</p>
      <Link
        to="/portfolio"
        className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full glass-strong hover:bg-white/10 transition-colors text-sm font-medium"
      >
        <ArrowLeft size={16} /> Back to portfolio
      </Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="pt-40 pb-20 container mx-auto px-6 text-center">
      <h1 className="font-display text-3xl font-semibold">Something went wrong</h1>
      <p className="mt-4 text-muted-foreground">{error.message}</p>
    </div>
  ),
  component: CaseStudyPage,
});

function CaseStudyPage() {
  const { study } = Route.useLoaderData();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const next = () =>
    setLightboxIndex((i) => (i === null ? null : (i + 1) % study.gallery.length));
  const prev = () =>
    setLightboxIndex((i) =>
      i === null ? null : (i - 1 + study.gallery.length) % study.gallery.length,
    );

  const overview = [
    { icon: Building2, label: "Client / Brand", value: study.brand },
    { icon: Briefcase, label: "Project Type", value: study.projectType },
    { icon: Tag, label: "Industry", value: study.industry },
    { icon: Megaphone, label: "Campaign Type", value: study.campaignType },
  ];

  return (
    <div className="pt-32 pb-20">
      {/* HERO */}
      <section className="container mx-auto px-6">
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft size={16} /> Back to portfolio
        </Link>

        <div className="grid lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7 animate-fade-up">
            <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Case Study · {study.brand}
            </span>
            <h1 className="mt-4 font-display text-5xl md:text-7xl font-semibold leading-[0.95] tracking-tighter">
              {study.title}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              {study.summary}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {study.tags.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 rounded-full glass text-xs uppercase tracking-[0.18em] text-foreground/80"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 relative aspect-[16/10] rounded-3xl overflow-hidden glass glow-border animate-fade-up">
          <img
            src={study.hero}
            alt={`${study.title} hero`}
            width={1920}
            height={1200}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="container mx-auto px-6 mt-24">
        <SectionHeading
          eyebrow="Project Overview"
          title={<>The <span className="gradient-text">brief</span>.</>}
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {overview.map((o, i) => (
            <div
              key={o.label}
              className="glass rounded-2xl p-6 animate-fade-up"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <o.icon size={18} className="text-primary mb-4" />
              <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                {o.label}
              </div>
              <div className="mt-2 font-display text-base font-semibold leading-snug">
                {o.value}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="container mx-auto px-6 mt-24">
        <SectionHeading
          eyebrow="Deliverables"
          title={<>What we <span className="gradient-text">produced</span>.</>}
          description="A focused content system shipped as one cohesive launch."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {study.deliverables.map((d, i) => (
            <div
              key={d.title}
              className="glass rounded-3xl p-8 glow-border hover:-translate-y-2 transition-transform duration-500 animate-fade-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div
                className="h-12 w-12 grid place-items-center rounded-2xl mb-6 shadow-glow"
                style={{ background: "var(--gradient-cinematic)" }}
              >
                <Layers size={20} className="text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-semibold">{d.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="container mx-auto px-6 mt-24">
        <SectionHeading
          eyebrow="Visual Gallery"
          title={<>The full <span className="gradient-text">visual story</span>.</>}
          description="Click any image to open in lightbox view."
        />
        <div className="mt-12 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {study.gallery.map((g, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setLightboxIndex(i)}
              className="group relative aspect-[4/5] overflow-hidden rounded-3xl glass glow-border animate-fade-up cursor-zoom-in"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <img
                src={g.src}
                alt={g.caption}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-5 left-5 right-5 text-left">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {study.brand}
                </p>
                <p className="mt-1 font-display text-sm font-semibold">{g.caption}</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* CREATIVE APPROACH */}
      <section className="container mx-auto px-6 mt-28">
        <div className="relative glass-strong rounded-3xl p-10 md:p-16 overflow-hidden">
          <div
            className="absolute -top-32 -left-32 h-96 w-96 rounded-full opacity-30"
            style={{
              background: "radial-gradient(circle, var(--neon-purple), transparent 70%)",
              filter: "blur(60px)",
            }}
          />
          <div className="relative grid lg:grid-cols-3 gap-10">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                The Objective
              </span>
              <h3 className="mt-3 font-display text-2xl font-semibold">Brand goals</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">{study.approach.objective}</p>
            </div>
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                The Direction
              </span>
              <h3 className="mt-3 font-display text-2xl font-semibold">Creative direction</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">{study.approach.direction}</p>
            </div>
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                The Impact
              </span>
              <h3 className="mt-3 font-display text-2xl font-semibold">Marketing lift</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">{study.approach.impact}</p>
            </div>
          </div>
        </div>
      </section>

      {/* MORE WORK */}
      <section className="container mx-auto px-6 mt-24">
        <SectionHeading eyebrow="More work" title={<>Other <span className="gradient-text">campaigns</span>.</>} />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {caseStudies.filter((c) => c.slug !== study.slug).map((c) => (
            <Link
              key={c.slug}
              to="/case-study/$slug"
              params={{ slug: c.slug }}
              className="group relative aspect-[4/3] rounded-3xl overflow-hidden glass glow-border block"
            >
              <img
                src={c.hero}
                alt={c.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/85 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{c.brand}</p>
                <h3 className="mt-1 font-display text-lg font-semibold">{c.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 mt-28">
        <div className="relative max-w-4xl mx-auto text-center glass-strong rounded-3xl p-12 md:p-20 shadow-elevated overflow-hidden">
          <div
            className="absolute inset-0 opacity-40"
            style={{
              background: "radial-gradient(circle at center, var(--neon-pink), transparent 60%)",
              filter: "blur(40px)",
            }}
          />
          <div className="relative">
            <Sparkles size={28} className="mx-auto text-primary mb-4" />
            <h2 className="font-display text-4xl md:text-6xl font-semibold tracking-tight">
              Start Your <span className="gradient-text">Campaign</span>.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">
              Tell us about your brand and the content you need.
            </p>
            <Link
              to="/contact"
              hash="lead-form"
              className="mt-10 inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-medium text-primary-foreground shadow-glow hover:scale-105 transition-transform"
              style={{ background: "var(--gradient-cinematic)" }}
            >
              Start My Project <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <Lightbox
        items={study.gallery}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onPrev={prev}
        onNext={next}
      />
    </div>
  );
}