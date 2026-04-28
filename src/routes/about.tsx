import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Eye, Zap, Heart } from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Color-Creator AI" },
      {
        name: "description",
        content:
          "Color-Creator AI is a creative content studio fusing AI production with human creative direction.",
      },
      { property: "og:title", content: "About — Color-Creator AI" },
      { property: "og:description", content: "A creative studio fusing AI production with human direction." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Sparkles, title: "Cinematic First", text: "Every frame is treated like a film still." },
  { icon: Eye, title: "Brand Obsessed", text: "Visuals that compound a brand's recognition." },
  { icon: Zap, title: "High Volume", text: "Production systems engineered for output." },
  { icon: Heart, title: "Human Direction", text: "AI-powered, but human-led at every step." },
];

const stats = [
  { num: "120+", label: "Campaigns delivered" },
  { num: "40+", label: "Brands worldwide" },
  { num: "4×", label: "Average content output lift" },
  { num: "98%", label: "Client retention" },
];

function AboutPage() {
  return (
    <div className="pt-32 pb-20">
      <section className="container mx-auto px-6">
        <SectionHeading
          eyebrow="About"
          title={<>A studio built for <span className="gradient-text">modern brands</span>.</>}
          description="Color-Creator AI is a creative content studio fusing cinematic art direction with the speed and scale of AI production. We help brands move from sporadic posting to a real visual presence."
        />
      </section>

      <section className="container mx-auto px-6 mt-24">
        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          <div className="relative glass-strong rounded-3xl p-10 md:p-14 overflow-hidden">
            <div
              className="absolute -top-20 -left-20 h-64 w-64 rounded-full opacity-30"
              style={{
                background: "radial-gradient(circle, var(--neon-purple), transparent 70%)",
                filter: "blur(60px)",
              }}
            />
            <div className="relative">
              <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Our Story
              </span>
              <h2 className="mt-4 font-display text-3xl md:text-4xl font-semibold leading-tight">
                Built where <span className="gradient-text">art direction</span> meets AI.
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                We're a small team of creative directors, photographers and
                AI specialists. We started Color-Creator AI to solve one
                problem: brands need premium visual content at a volume their
                in-house teams can't reach.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                By combining traditional craft with AI-native workflows, we
                produce months of content in weeks — without losing the
                cinematic quality your audience expects.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="glass rounded-3xl p-8 flex flex-col justify-center animate-fade-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <span className="font-display text-4xl md:text-5xl font-semibold gradient-text">
                  {s.num}
                </span>
                <span className="mt-2 text-sm text-muted-foreground">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 mt-28">
        <SectionHeading
          eyebrow="Values"
          title={<>What we <span className="gradient-text">stand for</span>.</>}
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <div
              key={v.title}
              className="glass rounded-3xl p-8 hover:-translate-y-1 transition-transform animate-fade-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <v.icon size={22} className="text-primary mb-5" />
              <h3 className="font-display text-lg font-semibold">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6 mt-28">
        <div className="relative max-w-4xl mx-auto text-center glass-strong rounded-3xl p-12 md:p-16 overflow-hidden">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background:
                "radial-gradient(circle at center, var(--neon-pink), transparent 60%)",
              filter: "blur(50px)",
            }}
          />
          <div className="relative">
            <h2 className="font-display text-3xl md:text-5xl font-semibold">
              Let's build something <span className="gradient-text">unforgettable</span>.
            </h2>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium text-primary-foreground shadow-glow hover:scale-105 transition-transform"
              style={{ background: "var(--gradient-cinematic)" }}
            >
              Start a project <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
