import { Link } from "@tanstack/react-router";
import cowbellHero from "@/assets/clients/cowbell-hero.jpeg";
import cowbellEffortless from "@/assets/clients/cowbell-effortless.jpeg";
import nilaxHero from "@/assets/clients/nilax-hero.jpeg";
import nilaxLifestyle from "@/assets/clients/nilax-lifestyle.jpeg";
import maltinaHero from "@/assets/clients/maltina-hero.jpeg";
import processPhoto from "@/assets/work-photo-1.jpg";
import processVideo from "@/assets/work-video-1.jpg";
import processBrand from "@/assets/work-brand-1.jpg";

type Card = {
  img: string;
  alt: string;
  label?: string;
  tag?: string;
  title?: string;
  size: "lg" | "md" | "sm";
  /** absolute positioning utility classes inside the relative stage */
  pos: string;
  /** rotation in degrees at rest */
  rot: number;
  /** float animation duration (s) */
  dur: number;
  /** float delay (s) — also used for stagger entry */
  delay: number;
  /** parallax depth: larger = drifts more */
  depth: number;
  to?: string;
};

const cards: Card[] = [
  // LARGE — real portfolio (Cowbell · Graphic Design)
  {
    img: cowbellHero,
    alt: "Cowbell Chocolate campaign visual",
    tag: "Graphic Design",
    title: "Cowbell Chocolate",
    size: "lg",
    pos: "left-[6%] top-[8%] w-[46%] aspect-[4/5]",
    rot: -5,
    dur: 9,
    delay: 0,
    depth: 14,
    to: "cowbell-chocolate",
  },
  // LARGE — Nilax · Photography
  {
    img: nilaxHero,
    alt: "FBC Nilax product photography",
    tag: "Photography",
    title: "FBC Nilax",
    size: "lg",
    pos: "right-[4%] top-[2%] w-[42%] aspect-[4/5]",
    rot: 4,
    dur: 10,
    delay: 0.15,
    depth: 18,
    to: "fbc-nilax",
  },
  // LARGE — Maltina · Photography
  {
    img: maltinaHero,
    alt: "Maltina liquid gold photography",
    tag: "Photography",
    title: "Maltina",
    size: "lg",
    pos: "right-[18%] bottom-[4%] w-[40%] aspect-[4/5]",
    rot: -3,
    dur: 11,
    delay: 0.3,
    depth: 16,
    to: "maltina-classic",
  },
  // MEDIUM — lifestyle / product showcase
  {
    img: nilaxLifestyle,
    alt: "Skincare lifestyle moment",
    label: "Lifestyle",
    size: "md",
    pos: "left-[2%] bottom-[10%] w-[30%] aspect-square",
    rot: 6,
    dur: 8,
    delay: 0.45,
    depth: 22,
  },
  {
    img: cowbellEffortless,
    alt: "Cowbell lifestyle moment",
    label: "Brand",
    size: "md",
    pos: "left-[34%] bottom-[2%] w-[26%] aspect-square",
    rot: -7,
    dur: 9,
    delay: 0.6,
    depth: 20,
  },
  // SMALL — process / behind the scenes
  {
    img: processPhoto,
    alt: "Photographer on set",
    label: "On Set",
    size: "sm",
    pos: "left-[28%] top-[2%] w-[20%] aspect-square",
    rot: 8,
    dur: 7,
    delay: 0.75,
    depth: 26,
  },
  {
    img: processVideo,
    alt: "Editing workstation",
    label: "Editing",
    size: "sm",
    pos: "right-[2%] top-[42%] w-[20%] aspect-square",
    rot: -10,
    dur: 7.5,
    delay: 0.9,
    depth: 24,
  },
  {
    img: processBrand,
    alt: "Creative direction",
    label: "Direction",
    size: "sm",
    pos: "left-[52%] top-[44%] w-[18%] aspect-square",
    rot: 4,
    dur: 8.5,
    delay: 1.05,
    depth: 28,
  },
];

function CardShell({ c, children }: { c: Card; children: React.ReactNode }) {
  return (
    <div
      className={`absolute ${c.pos} float-card group`}
      style={
        {
          // CSS vars consumed by the float keyframes
          "--rot": `${c.rot}deg`,
          "--dur": `${c.dur}s`,
          "--delay": `${c.delay}s`,
          "--depth": `${c.depth}px`,
        } as React.CSSProperties
      }
    >
      <div className="float-card-inner h-full w-full">{children}</div>
    </div>
  );
}

export function FloatingCards() {
  return (
    <div
      aria-hidden={false}
      className="relative w-full aspect-[4/5] sm:aspect-[5/5] lg:aspect-[5/6] max-w-[640px] mx-auto"
    >
      {/* soft ambient glow */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ background: "var(--gradient-aurora)" }}
      />

      {cards.map((c, i) => {
        const radius =
          c.size === "lg"
            ? "rounded-[28px]"
            : c.size === "md"
            ? "rounded-3xl"
            : "rounded-2xl";

        const inner = (
          <div
            className={`relative h-full w-full overflow-hidden ${radius} glass shadow-elevated transition-transform duration-500 group-hover:scale-[1.04]`}
            style={{
              border: "1px solid rgba(255,255,255,0.10)",
            }}
          >
            <img
              src={c.img}
              alt={c.alt}
              loading={i < 3 ? "eager" : "lazy"}
              className="absolute inset-0 h-full w-full object-cover"
            />
            {/* dark grade for cohesive cinematic tone */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
            {/* hover glow */}
            <div
              className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ boxShadow: "var(--shadow-glow)" }}
            />

            {c.tag && (
              <span
                className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] uppercase tracking-[0.18em] font-medium text-primary-foreground"
                style={{ background: "var(--gradient-cinematic)" }}
              >
                {c.tag}
              </span>
            )}
            {c.label && !c.tag && (
              <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] uppercase tracking-[0.2em] glass text-foreground/90">
                {c.label}
              </span>
            )}
            {c.title && (
              <div className="absolute bottom-3 left-3 right-3">
                <p className="font-display text-sm md:text-base font-semibold leading-tight">
                  {c.title}
                </p>
              </div>
            )}
          </div>
        );

        return (
          <CardShell key={i} c={c}>
            {c.to ? (
              <Link
                to="/case-study/$slug"
                params={{ slug: c.to }}
                className="block h-full w-full"
              >
                {inner}
              </Link>
            ) : (
              inner
            )}
          </CardShell>
        );
      })}
    </div>
  );
}