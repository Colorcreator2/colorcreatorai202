import { r as reactExports, T as jsxRuntimeExports } from "./worker-entry-DdEP2Tla.js";
import { c as createLucideIcon, X, R as Route, L as Link, a as caseStudies } from "./router-BQOOUiiF.js";
import { S as SectionHeading } from "./SectionHeading-BchWB-M2.js";
import { A as ArrowLeft } from "./arrow-left-B8ctwh1L.js";
import { L as Layers } from "./layers-BdRwhwQI.js";
import { S as Sparkles } from "./sparkles-BTdtSXAU.js";
import { A as ArrowRight } from "./arrow-right-Ctm3-jSD.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$5 = [
  ["path", { d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16", key: "jecpp" }],
  ["rect", { width: "20", height: "14", x: "2", y: "6", rx: "2", key: "i6l2r4" }]
];
const Briefcase = createLucideIcon("briefcase", __iconNode$5);
const __iconNode$4 = [
  ["path", { d: "M10 12h4", key: "a56b0p" }],
  ["path", { d: "M10 8h4", key: "1sr2af" }],
  ["path", { d: "M14 21v-3a2 2 0 0 0-4 0v3", key: "1rgiei" }],
  [
    "path",
    {
      d: "M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",
      key: "secmi2"
    }
  ],
  ["path", { d: "M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16", key: "16ra0t" }]
];
const Building2 = createLucideIcon("building-2", __iconNode$4);
const __iconNode$3 = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]];
const ChevronLeft = createLucideIcon("chevron-left", __iconNode$3);
const __iconNode$2 = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]];
const ChevronRight = createLucideIcon("chevron-right", __iconNode$2);
const __iconNode$1 = [
  [
    "path",
    {
      d: "M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z",
      key: "q8bfy3"
    }
  ],
  ["path", { d: "M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14", key: "1853fq" }],
  ["path", { d: "M8 6v8", key: "15ugcq" }]
];
const Megaphone = createLucideIcon("megaphone", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
      key: "vktsd0"
    }
  ],
  ["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor", key: "kqv944" }]
];
const Tag = createLucideIcon("tag", __iconNode);
function Lightbox({
  items,
  index,
  onClose,
  onPrev,
  onNext
}) {
  reactExports.useEffect(() => {
    if (index === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [index, onClose, onPrev, onNext]);
  if (index === null) return null;
  const current = items[index];
  if (!current) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "fixed inset-0 z-[100] flex items-center justify-center bg-background/90 backdrop-blur-xl animate-fade-up",
      onClick: onClose,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: (e) => {
              e.stopPropagation();
              onClose();
            },
            "aria-label": "Close",
            className: "absolute top-6 right-6 h-11 w-11 grid place-items-center rounded-full glass-strong hover:bg-white/10 transition-colors",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 20 })
          }
        ),
        items.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: (e) => {
                e.stopPropagation();
                onPrev();
              },
              "aria-label": "Previous",
              className: "absolute left-4 md:left-8 h-12 w-12 grid place-items-center rounded-full glass-strong hover:bg-white/10 transition-colors",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { size: 22 })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: (e) => {
                e.stopPropagation();
                onNext();
              },
              "aria-label": "Next",
              className: "absolute right-4 md:right-8 h-12 w-12 grid place-items-center rounded-full glass-strong hover:bg-white/10 transition-colors",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 22 })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "figure",
          {
            className: "max-w-[92vw] max-h-[88vh] flex flex-col items-center gap-4",
            onClick: (e) => e.stopPropagation(),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: current.src,
                  alt: current.caption ?? "",
                  className: "max-w-[92vw] max-h-[78vh] object-contain rounded-2xl shadow-elevated"
                }
              ),
              current.caption && /* @__PURE__ */ jsxRuntimeExports.jsx("figcaption", { className: "text-sm text-muted-foreground text-center max-w-2xl", children: current.caption })
            ]
          }
        )
      ]
    }
  );
}
function CaseStudyPage() {
  const {
    study
  } = Route.useLoaderData();
  const [lightboxIndex, setLightboxIndex] = reactExports.useState(null);
  const next = () => setLightboxIndex((i) => i === null ? null : (i + 1) % study.gallery.length);
  const prev = () => setLightboxIndex((i) => i === null ? null : (i - 1 + study.gallery.length) % study.gallery.length);
  const overview = [{
    icon: Building2,
    label: "Client / Brand",
    value: study.brand
  }, {
    icon: Briefcase,
    label: "Project Type",
    value: study.projectType
  }, {
    icon: Tag,
    label: "Industry",
    value: study.industry
  }, {
    icon: Megaphone,
    label: "Campaign Type",
    value: study.campaignType
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-32 pb-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container mx-auto px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/portfolio", className: "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 16 }),
        " Back to portfolio"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid lg:grid-cols-12 gap-8 items-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7 animate-fade-up", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs uppercase tracking-[0.3em] text-muted-foreground", children: [
          "Case Study · ",
          study.brand
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-4 font-display text-5xl md:text-7xl font-semibold leading-[0.95] tracking-tighter", children: study.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed", children: study.summary }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex flex-wrap gap-2", children: study.tags.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-3 py-1.5 rounded-full glass text-xs uppercase tracking-[0.18em] text-foreground/80", children: t }, t)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 relative aspect-[16/10] rounded-3xl overflow-hidden glass glow-border animate-fade-up", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: study.hero, alt: `${study.title} hero`, width: 1920, height: 1200, className: "absolute inset-0 h-full w-full object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container mx-auto px-6 mt-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Project Overview", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "The ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "brief" }),
        "."
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4", children: overview.map((o, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl p-6 animate-fade-up", style: {
        animationDelay: `${i * 70}ms`
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(o.icon, { size: 18, className: "text-primary mb-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.22em] text-muted-foreground", children: o.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 font-display text-base font-semibold leading-snug", children: o.value })
      ] }, o.label)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container mx-auto px-6 mt-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Deliverables", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "What we ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "produced" }),
        "."
      ] }), description: "A focused content system shipped as one cohesive launch." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3", children: study.deliverables.map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-3xl p-8 glow-border hover:-translate-y-2 transition-transform duration-500 animate-fade-up", style: {
        animationDelay: `${i * 80}ms`
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 grid place-items-center rounded-2xl mb-6 shadow-glow", style: {
          background: "var(--gradient-cinematic)"
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { size: 20, className: "text-primary-foreground" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-semibold", children: d.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: d.text })
      ] }, d.title)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container mx-auto px-6 mt-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Visual Gallery", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "The full ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "visual story" }),
        "."
      ] }), description: "Click any image to open in lightbox view." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3", children: study.gallery.map((g, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => setLightboxIndex(i), className: "group relative aspect-[4/5] overflow-hidden rounded-3xl glass glow-border animate-fade-up cursor-zoom-in", style: {
        animationDelay: `${i * 60}ms`
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: g.src, alt: g.caption, loading: "lazy", className: "absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-5 left-5 right-5 text-left", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.2em] text-muted-foreground", children: study.brand }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 font-display text-sm font-semibold", children: g.caption })
        ] })
      ] }, i)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container mx-auto px-6 mt-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative glass-strong rounded-3xl p-10 md:p-16 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-32 -left-32 h-96 w-96 rounded-full opacity-30", style: {
        background: "radial-gradient(circle, var(--neon-purple), transparent 70%)",
        filter: "blur(60px)"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative grid lg:grid-cols-3 gap-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.3em] text-muted-foreground", children: "The Objective" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 font-display text-2xl font-semibold", children: "Brand goals" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground leading-relaxed", children: study.approach.objective })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.3em] text-muted-foreground", children: "The Direction" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 font-display text-2xl font-semibold", children: "Creative direction" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground leading-relaxed", children: study.approach.direction })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.3em] text-muted-foreground", children: "The Impact" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 font-display text-2xl font-semibold", children: "Marketing lift" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground leading-relaxed", children: study.approach.impact })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container mx-auto px-6 mt-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "More work", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "Other ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "campaigns" }),
        "."
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-6 md:grid-cols-3", children: caseStudies.filter((c) => c.slug !== study.slug).map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/case-study/$slug", params: {
        slug: c.slug
      }, className: "group relative aspect-[4/3] rounded-3xl overflow-hidden glass glow-border block", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: c.hero, alt: c.title, loading: "lazy", className: "absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background/85 to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-5 left-5 right-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.2em] text-muted-foreground", children: c.brand }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-1 font-display text-lg font-semibold", children: c.title })
        ] })
      ] }, c.slug)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container mx-auto px-6 mt-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-4xl mx-auto text-center glass-strong rounded-3xl p-12 md:p-20 shadow-elevated overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-40", style: {
        background: "radial-gradient(circle at center, var(--neon-pink), transparent 60%)",
        filter: "blur(40px)"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 28, className: "mx-auto text-primary mb-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl md:text-6xl font-semibold tracking-tight", children: [
          "Start Your ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "Campaign" }),
          "."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-lg text-muted-foreground max-w-2xl mx-auto", children: "Tell us about your brand and the content you need." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", hash: "lead-form", className: "mt-10 inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-medium text-primary-foreground shadow-glow hover:scale-105 transition-transform", style: {
          background: "var(--gradient-cinematic)"
        }, children: [
          "Start My Project ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Lightbox, { items: study.gallery, index: lightboxIndex, onClose: () => setLightboxIndex(null), onPrev: prev, onNext: next })
  ] });
}
export {
  CaseStudyPage as component
};
