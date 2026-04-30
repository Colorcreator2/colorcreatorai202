import { createFileRoute, Link } from "@tanstack/react-router";
import { Camera, Film, Layers, Palette, ArrowRight, Check } from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Color-Creator AI" },
      {
        name: "description",
        content:
          "Graphic design, photography, AI video production and full content systems for modern brands.",
      },
      { property: "og:title", content: "Services — Color-Creator AI" },
      { property: "og:description", content: "Creative content services by Color-Creator AI." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Palette,
    title: "Graphic Design",
    text: "High-quality marketing visuals including social media posts, billboard campaigns, and brand creatives.",
    deliverables: [
      "Social media post systems",
      "Ad creative variants",
      "Billboard & OOH campaigns",
      "Brand identity refresh",
    ],
  },
  {
    icon: Camera,
    title: "Photography",
    text: "Professional brand photography including product shoots, lifestyle images and commercial visuals.",
    deliverables: [
      "Studio product photography",
      "Lifestyle & on-location shoots",
      "Commercial imagery",
      "E-commerce ready exports",
    ],
  },
  {
    icon: Film,
    title: "AI Video Production",
    text: "Cinematic AI video campaigns for advertising, social media marketing and storytelling.",
    deliverables: [
      "Cinematic brand films",
      "Vertical social cuts",
      "Performance ad variants",
      "Story-driven campaigns",
    ],
  },
  {
    icon: Layers,
    title: "Full Content Production",
    text: "Complete content systems combining graphics, photography and video campaigns.",
    deliverables: [
      "Quarterly content calendars",
      "30+ assets per cycle",
      "Cross-channel optimization",
      "Strategy & analytics",
    ],
  },
];

function ServicesPage() {
  return (
    <div className="pt-32 pb-20">
      <section className="container mx-auto px-6">
        <SectionHeading
          eyebrow="Services"
          title={
            <>
              What we <span className="gradient-text">build</span>.
            </>
          }
          description="Four production pillars working as one premium content engine — designed for brands that need volume without sacrificing quality."
        />

        {/* SERVICES GRID */}
        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {services.map((s, i) => {
            const Icon = s.icon;

            return (
              <div
                key={s.title}
                className="relative glass-strong rounded-3xl p-10 glow-border overflow-hidden animate-fade-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div
                  className="absolute -top-20 -right-20 h-48 w-48 rounded-full opacity-25"
                  style={{
                    background: "var(--gradient-cinematic)",
                    filter: "blur(50px)",
                  }}
                />

                <div className="relative">
                  <div
                    className="h-14 w-14 grid place-items-center rounded-2xl mb-6 shadow-glow"
                    style={{ background: "var(--gradient-cinematic)" }}
                  >
                    <Icon size={22} className="text-primary-foreground" />
                  </div>

                  <h3 className="font-display text-2xl md:text-3xl font-semibold">
                    {s.title}
                  </h3>

                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    {s.text}
                  </p>

                  <ul className="mt-6 space-y-2">
                    {s.deliverables.map((d) => (
                      <li key={d} className="flex items-center gap-2 text-sm">
                        <Check size={14} className="text-primary" />
                        <span className="text-foreground/90">{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA SECTION */}
        <div className="mt-24 max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold">
            Need a <span className="gradient-text">custom package</span>?
          </h2>

          <p className="mt-4 text-muted-foreground">
            Most of our clients run a combined content engine across all four services.
            Let's design the right rhythm for your brand.
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium text-primary-foreground shadow-glow hover:scale-105 transition-transform"
            style={{ background: "var(--gradient-cinematic)" }}
          >
            Build my package <ArrowRight size={16} />
          </Link>
        </div>

        {/* IMAGE CTA */}
        <div className="mt-20 flex justify-center">
          <a
            href="https://selfany.com/s/aiuniversity28631"
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-full max-w-2xl rounded-2xl overflow-hidden group"
          >
            <img
              src="src/assets/learnai.jpeg"
              alt="Learn AI"
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition"
            />

            <div className="absolute inset-0 flex items-end justify-center pb-6">
              <div
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium text-primary-foreground shadow-glow hover:scale-105 transition-transform"
                style={{ background: "var(--gradient-cinematic)" }}
              >
                ENROLL NOW <ArrowRight size={16} />
              </div>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}