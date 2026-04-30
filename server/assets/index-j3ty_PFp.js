import { r as reactExports, T as jsxRuntimeExports } from "./worker-entry-CjXa8inz.js";
import { c as createLucideIcon, b as cowbellHero, n as nilaxHero, m as maltinaHero, d as nilaxLifestyle, e as cowbellEffortless, L as Link, l as logo, f as featuredCaseStudy, a as caseStudies } from "./router-O6hfg-5n.js";
import { S as SectionHeading } from "./SectionHeading-wEjXiVyL.js";
import { S as Sparkles } from "./sparkles-CocPHq7A.js";
import { A as ArrowRight } from "./arrow-right-BJfG_IYS.js";
import { P as Palette, C as Camera, F as Film } from "./palette-MCzgZ0AE.js";
import { L as Layers } from "./layers-CYNvWy2e.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$3 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  [
    "path",
    {
      d: "m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",
      key: "9ktpf1"
    }
  ]
];
const Compass = createLucideIcon("compass", __iconNode$3);
const __iconNode$2 = [
  ["path", { d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5", key: "qeys4" }],
  [
    "path",
    {
      d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09",
      key: "u4xsad"
    }
  ],
  [
    "path",
    {
      d: "M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z",
      key: "676m9"
    }
  ],
  ["path", { d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05", key: "92ym6u" }]
];
const Rocket = createLucideIcon("rocket", __iconNode$2);
const __iconNode$1 = [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
];
const Send = createLucideIcon("send", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",
      key: "ul74o6"
    }
  ],
  ["path", { d: "m14 7 3 3", key: "1r5n42" }],
  ["path", { d: "M5 6v4", key: "ilb8ba" }],
  ["path", { d: "M19 14v4", key: "blhpug" }],
  ["path", { d: "M10 2v2", key: "7u0qdc" }],
  ["path", { d: "M7 8H3", key: "zfb6yr" }],
  ["path", { d: "M21 16h-4", key: "1cnmox" }],
  ["path", { d: "M11 3H9", key: "1obp7u" }]
];
const WandSparkles = createLucideIcon("wand-sparkles", __iconNode);
function Particles({ count = 30 }) {
  const [particles, setParticles] = reactExports.useState([]);
  reactExports.useEffect(() => {
    const colors = [
      "var(--neon-purple)",
      "var(--neon-blue)",
      "var(--neon-pink)",
      "var(--neon-yellow)"
    ];
    setParticles(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 1,
        delay: Math.random() * 8,
        duration: Math.random() * 10 + 8,
        color: colors[Math.floor(Math.random() * colors.length)]
      }))
    );
  }, [count]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 overflow-hidden", children: particles.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "absolute rounded-full animate-float",
      style: {
        left: `${p.x}%`,
        top: `${p.y}%`,
        width: `${p.size}px`,
        height: `${p.size}px`,
        background: p.color,
        boxShadow: `0 0 ${p.size * 4}px ${p.color}`,
        animationDelay: `${p.delay}s`,
        animationDuration: `${p.duration}s`,
        opacity: 0.7
      }
    },
    p.id
  )) });
}
const processPhoto = "/assets/work-photo-1-DdTjqWCW.jpg";
const processVideo = "/assets/work-video-1-DIVQ8iwE.jpg";
const processBrand = "/assets/work-brand-1-DW4x4NdL.jpg";
const cards = [
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
    to: "cowbell-chocolate"
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
    to: "fbc-nilax"
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
    to: "maltina-classic"
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
    depth: 22
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
    depth: 20
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
    depth: 26
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
    depth: 24
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
    depth: 28
  }
];
function CardShell({ c, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: `absolute ${c.pos} float-card group`,
      style: {
        // CSS vars consumed by the float keyframes
        "--rot": `${c.rot}deg`,
        "--dur": `${c.dur}s`,
        "--delay": `${c.delay}s`,
        "--depth": `${c.depth}px`
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "float-card-inner h-full w-full", children })
    }
  );
}
function FloatingCards() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      "aria-hidden": false,
      className: "relative w-full aspect-[4/5] sm:aspect-[5/5] lg:aspect-[5/6] max-w-[640px] mx-auto",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "pointer-events-none absolute inset-0 -z-10",
            style: { background: "var(--gradient-aurora)" }
          }
        ),
        cards.map((c, i) => {
          const radius = c.size === "lg" ? "rounded-[28px]" : c.size === "md" ? "rounded-3xl" : "rounded-2xl";
          const inner = /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: `relative h-full w-full overflow-hidden ${radius} glass shadow-elevated transition-transform duration-500 group-hover:scale-[1.04]`,
              style: {
                border: "1px solid rgba(255,255,255,0.10)"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: c.img,
                    alt: c.alt,
                    loading: i < 3 ? "eager" : "lazy",
                    className: "absolute inset-0 h-full w-full object-cover"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                    style: { boxShadow: "var(--shadow-glow)" }
                  }
                ),
                c.tag && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] uppercase tracking-[0.18em] font-medium text-primary-foreground",
                    style: { background: "var(--gradient-cinematic)" },
                    children: c.tag
                  }
                ),
                c.label && !c.tag && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] uppercase tracking-[0.2em] glass text-foreground/90", children: c.label }),
                c.title && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-3 left-3 right-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-sm md:text-base font-semibold leading-tight", children: c.title }) })
              ]
            }
          );
          return /* @__PURE__ */ jsxRuntimeExports.jsx(CardShell, { c, children: c.to ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/case-study/$slug",
              params: { slug: c.to },
              className: "block h-full w-full",
              children: inner
            }
          ) : inner }, i);
        })
      ]
    }
  );
}
const heroBg = "/assets/hero-bg-BrCj3A2T.jpg";
const beforeImg = "/assets/nilax-flat-CzLuFJd9.jpg";
const afterImg = "/assets/nilax-cinematic-CbTQ-6h8.jpg";
const services = [{
  icon: Palette,
  title: "Graphic Design",
  text: "High quality marketing visuals — social media posts, billboard campaigns, and brand creatives."
}, {
  icon: Camera,
  title: "Photography",
  text: "Professional brand photography including product shoots, lifestyle, and commercial visuals."
}, {
  icon: Film,
  title: "AI Video Production",
  text: "Cinematic AI video campaigns for advertising, social media marketing, and storytelling."
}, {
  icon: Layers,
  title: "Full Content Production",
  text: "Complete content systems combining graphics, photography and video campaigns."
}];
const brandCategory = {
  "cowbell-chocolate": "Graphic Design",
  "fbc-nilax": "Photography",
  "maltina-classic": "Photography"
};
const portfolio = caseStudies.flatMap((c) => c.gallery.slice(0, 2).map((g) => ({
  img: g.src,
  title: c.brand,
  caption: g.caption,
  cat: brandCategory[c.slug] ?? c.projectType,
  slug: c.slug
}))).slice(0, 6);
const engine = [{
  icon: Palette,
  title: "Graphics",
  text: "Marketing visuals and campaign designs."
}, {
  icon: Camera,
  title: "Photography",
  text: "Brand and product photography."
}, {
  icon: Film,
  title: "Video",
  text: "Cinematic AI marketing videos."
}, {
  icon: Send,
  title: "Distribution Ready",
  text: "Optimized for social media and ads."
}];
const process = [{
  num: "01",
  icon: Compass,
  title: "Discovery",
  text: "Understanding brand goals."
}, {
  num: "02",
  icon: WandSparkles,
  title: "Strategy",
  text: "Planning the content direction."
}, {
  num: "03",
  icon: Sparkles,
  title: "Production",
  text: "Creating graphics, photo and video."
}, {
  num: "04",
  icon: Rocket,
  title: "Delivery",
  text: "Ready-to-publish marketing assets."
}];
const audience = [{
  title: "Startups",
  text: "Launch strong brand visuals quickly."
}, {
  title: "Small Businesses",
  text: "Consistent content production to grow visibility."
}, {
  title: "Growing Brands",
  text: "Full marketing content campaigns."
}];
function HomePage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 -z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroBg, alt: "", className: "w-full h-full object-cover opacity-30", width: 1920, height: 1080 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "", "aria-hidden": true, className: "pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] max-w-[680px] opacity-[0.05] -z-10 select-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Particles, { count: 40 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-6 relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-12 lg:gap-8 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-fade-up text-center lg:text-left max-w-xl mx-auto lg:mx-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 12, className: "text-primary" }),
            "Creative Content Studio"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tighter leading-[0.95]", children: [
            "Create",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "Visual Content",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "That Sells." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-base md:text-lg text-muted-foreground max-w-md mx-auto lg:mx-0 leading-relaxed", children: "We combine creativity, strategy and technology to produce stunning graphic design and photography that helps brands stand out and grow." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-9 flex flex-wrap justify-center lg:justify-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "group inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium text-primary-foreground shadow-glow hover:scale-105 transition-transform", style: {
              background: "var(--gradient-cinematic)"
            }, children: [
              "Start Project",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16, className: "group-hover:translate-x-1 transition-transform" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/portfolio", className: "inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium glass-strong hover:bg-white/10 transition-colors", children: "View Portfolio" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingCards, {}) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-5xl mx-auto glass-strong rounded-3xl p-10 md:p-16 shadow-elevated overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-32 -right-32 h-96 w-96 rounded-full opacity-30", style: {
        background: "radial-gradient(circle, var(--neon-purple), transparent 70%)",
        filter: "blur(60px)"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.3em] text-muted-foreground", children: "Our Mission" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 font-display text-3xl md:text-5xl font-semibold leading-tight", children: [
          "Helping brands ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "scale visual presence" }),
          " ",
          "with premium content."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-muted-foreground leading-relaxed max-w-3xl", children: "Color-Creator AI helps brands scale their visual presence through high-volume premium marketing content. Our studio combines creative strategy, photography, graphic design and AI video production to help brands dominate attention online and offline." })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Services", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "Built for ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "attention" }),
        "."
      ] }), description: "Four production pillars working as one creative engine." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4", children: services.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative glass rounded-3xl p-8 glow-border hover:-translate-y-2 transition-transform duration-500 animate-fade-up", style: {
        animationDelay: `${i * 100}ms`
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 grid place-items-center rounded-2xl mb-6 shadow-glow", style: {
          background: "var(--gradient-cinematic)"
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { size: 20, className: "text-primary-foreground" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-semibold mb-2", children: s.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: s.text })
      ] }, s.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Portfolio", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "Selected ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "work" }),
        "."
      ] }), description: "A glimpse of recent campaigns across graphics, photography, and AI video." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: portfolio.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/case-study/$slug", params: {
        slug: p.slug
      }, className: "group relative aspect-[4/5] overflow-hidden rounded-3xl glass glow-border animate-fade-up block", style: {
        animationDelay: `${i * 80}ms`
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.img, alt: p.title, loading: "lazy", width: 1024, height: 1280, className: "absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 p-6 flex flex-col justify-end translate-y-2 group-hover:translate-y-0 transition-transform duration-500", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "self-start px-2.5 py-1 rounded-full text-[10px] uppercase tracking-[0.18em] font-medium text-primary-foreground mb-3", style: {
            background: "var(--gradient-cinematic)"
          }, children: p.cat }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-semibold", children: p.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground line-clamp-1", children: p.caption })
        ] })
      ] }, `${p.slug}-${i}`)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/portfolio", className: "inline-flex items-center gap-2 px-6 py-3 rounded-full glass-strong hover:bg-white/10 transition-colors text-sm font-medium", children: [
        "See full portfolio ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Marketing Transformation", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "From flat to ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "cinematic" }),
        "."
      ] }), description: "See the difference premium creative direction makes — same product, two completely different stories." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid gap-6 md:gap-10 md:grid-cols-2 items-stretch", children: [{
        label: "Flat",
        img: beforeImg,
        caption: "Basic product shot with no creative direction.",
        isCinematic: false
      }, {
        label: "Cinematic",
        img: afterImg,
        caption: "High-impact visual designed for marketing and brand storytelling.",
        isCinematic: true
      }].map((b, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group animate-fade-up", style: {
        animationDelay: `${i * 150}ms`
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.25em] font-semibold", style: {
            background: b.isCinematic ? "var(--gradient-cinematic)" : "oklch(0.2 0.02 280 / 0.7)",
            color: b.isCinematic ? "var(--primary-foreground)" : void 0
          }, children: b.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px flex-1 bg-white/10" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-secondary/40 transition-all duration-500 ${b.isCinematic ? "group-hover:shadow-glow" : "group-hover:border-white/20"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: b.img, alt: `${b.label} Nilax product visual`, loading: "lazy", width: 1024, height: 1280, className: "absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-muted-foreground leading-relaxed", children: b.caption })
      ] }, b.label)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "The System", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "Your Brand ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "Content Engine" }),
        "."
      ] }), description: "A high-volume content production system that compounds your brand presence." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4", children: engine.map((e, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative glass-strong rounded-3xl p-8 overflow-hidden animate-fade-up", style: {
        animationDelay: `${i * 100}ms`
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-10 -right-10 h-32 w-32 rounded-full opacity-30", style: {
          background: "var(--gradient-cinematic)",
          filter: "blur(40px)"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(e.icon, { size: 28, className: "mb-6 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-semibold", children: e.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: e.text })
        ] })
      ] }, e.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Featured Campaign", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: featuredCaseStudy.brand }),
        "."
      ] }), description: featuredCaseStudy.summary }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 relative glass-strong rounded-3xl overflow-hidden glow-border shadow-elevated", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-32 -right-32 h-[28rem] w-[28rem] rounded-full opacity-30 pointer-events-none", style: {
          background: "radial-gradient(circle, var(--neon-pink), transparent 70%)",
          filter: "blur(80px)"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative grid lg:grid-cols-5 gap-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/case-study/$slug", params: {
            slug: featuredCaseStudy.slug
          }, className: "group lg:col-span-3 relative aspect-[4/3] lg:aspect-auto lg:min-h-[28rem] block overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: featuredCaseStudy.hero, alt: `${featuredCaseStudy.title} hero visual`, loading: "lazy", width: 1920, height: 1440, className: "absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background/40 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-background/60" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 p-8 md:p-10 flex flex-col justify-center gap-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs uppercase tracking-[0.3em] text-muted-foreground", children: [
              "Featured · ",
              featuredCaseStudy.industry
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-3xl md:text-4xl font-semibold leading-tight tracking-tight", children: featuredCaseStudy.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm uppercase tracking-[0.2em] text-foreground/70", children: featuredCaseStudy.brand }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: featuredCaseStudy.summary }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: featuredCaseStudy.tags.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-3 py-1 rounded-full glass text-[11px] uppercase tracking-[0.15em]", children: t }, t)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/case-study/$slug", params: {
              slug: featuredCaseStudy.slug
            }, className: "self-start inline-flex items-center gap-2 px-6 py-3 mt-2 rounded-full text-sm font-medium text-primary-foreground shadow-glow hover:scale-105 transition-transform", style: {
              background: "var(--gradient-cinematic)"
            }, children: [
              "View Case Study ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
            ] })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Creative Process", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "How we ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "build" }),
        "."
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4", children: process.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative glass rounded-3xl p-8 hover:-translate-y-1 transition-transform animate-fade-up", style: {
        animationDelay: `${i * 100}ms`
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-4xl font-semibold gradient-text", children: p.num }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(p.icon, { size: 20, className: "text-muted-foreground" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-semibold", children: p.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: p.text })
      ] }, p.num)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Who We Work With", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "Built for ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "ambitious" }),
        " brands."
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid gap-6 md:grid-cols-3", children: audience.map((a, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-strong rounded-3xl p-10 animate-fade-up", style: {
        animationDelay: `${i * 120}ms`
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-semibold gradient-text", children: a.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground leading-relaxed", children: a.text })
      ] }, a.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-4xl mx-auto text-center glass-strong rounded-3xl p-12 md:p-20 shadow-elevated overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-40", style: {
        background: "radial-gradient(circle at center, var(--neon-purple), transparent 60%)",
        filter: "blur(40px)"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl md:text-6xl font-semibold tracking-tight", children: [
          "Ready to ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "level up" }),
          " your brand?"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-lg text-muted-foreground max-w-2xl mx-auto", children: "Tell us about your brand and the content you need. We take on a limited number of projects each quarter." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "mt-10 inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-medium text-primary-foreground shadow-glow hover:scale-105 transition-transform", style: {
          background: "var(--gradient-cinematic)"
        }, children: [
          "Start My Project ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
        ] })
      ] })
    ] }) }) })
  ] });
}
export {
  HomePage as component
};
