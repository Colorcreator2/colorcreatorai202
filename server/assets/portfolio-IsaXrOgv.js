import { r as reactExports, T as jsxRuntimeExports } from "./worker-entry-DdEP2Tla.js";
import { c as createLucideIcon, L as Link, a as caseStudies } from "./router-BQOOUiiF.js";
import { S as SectionHeading } from "./SectionHeading-BchWB-M2.js";
import { V as VideoSection } from "./VideoSection-67xUvohw.js";
import { A as ArrowRight } from "./arrow-right-Ctm3-jSD.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
];
const ExternalLink = createLucideIcon("external-link", __iconNode);
const categories = ["All", "Graphic Design", "Photography"];
const items = caseStudies.flatMap((c) => c.gallery.map((g) => {
  let cat;
  if (c.slug === "cowbell-chocolate") {
    cat = "Graphic Design";
  } else if (c.slug === "fbc-nilax") {
    cat = "Photography";
  } else if (c.projectType === "Graphic Design") {
    cat = "Graphic Design";
  } else {
    cat = "Photography";
  }
  return {
    img: g.src,
    title: g.caption,
    cat,
    client: c.brand,
    slug: c.slug
  };
}));
function PortfolioPage() {
  const [active, setActive] = reactExports.useState("All");
  const filtered = active === "All" ? items : items.filter((i) => i.cat === active);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-32 pb-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container mx-auto px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Portfolio", title: /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: "Portfolio" }), description: "Selected works in graphic design and photography for real brands." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 flex flex-wrap justify-center gap-2", children: categories.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActive(c), className: `px-4 py-2 rounded-full text-sm transition-all ${active === c ? "text-primary-foreground shadow-glow" : "glass hover:bg-white/10"}`, style: active === c ? {
        background: "var(--gradient-cinematic)"
      } : void 0, children: c }, c)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3", children: filtered.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/case-study/$slug", params: {
        slug: p.slug
      }, className: "group relative aspect-[4/5] overflow-hidden rounded-3xl glass border border-white/10 hover:border-white/25 hover:shadow-glow transition-all duration-500 animate-fade-up", style: {
        animationDelay: `${i * 60}ms`
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.img, alt: p.title, loading: "lazy", className: "absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-4 left-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.2em] glass-strong border border-white/15", children: p.cat }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 p-6 flex flex-col justify-end", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-semibold translate-y-2 group-hover:translate-y-0 transition-transform duration-500", children: p.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1 opacity-80 group-hover:opacity-100 transition-opacity", children: p.client })
        ] })
      ] }, `${p.slug}-${p.title}-${i}`)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mt-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx(VideoSection, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container mx-auto px-6 mt-24 flex flex-col items-center gap-5 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-muted-foreground", children: "Explore more of our creative work" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.behance.net/chukwudiudenwa", target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium glass border border-white/15 hover:border-transparent hover:text-primary-foreground hover:shadow-glow transition-all hover:[background:var(--gradient-cinematic)]", children: [
        "View Full Portfolio on Behance ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { size: 16 })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "mt-2 inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium text-primary-foreground shadow-glow hover:scale-105 transition-transform", style: {
        background: "var(--gradient-cinematic)"
      }, children: [
        "Start your project ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
      ] })
    ] })
  ] });
}
export {
  PortfolioPage as component
};
