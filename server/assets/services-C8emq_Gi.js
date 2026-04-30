import { T as jsxRuntimeExports } from "./worker-entry-CjXa8inz.js";
import { c as createLucideIcon, L as Link } from "./router-O6hfg-5n.js";
import { S as SectionHeading } from "./SectionHeading-wEjXiVyL.js";
import { P as Palette, C as Camera, F as Film } from "./palette-MCzgZ0AE.js";
import { L as Layers } from "./layers-CYNvWy2e.js";
import { A as ArrowRight } from "./arrow-right-BJfG_IYS.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]];
const Check = createLucideIcon("check", __iconNode);
const services = [{
  icon: Palette,
  title: "Graphic Design",
  text: "High-quality marketing visuals including social media posts, billboard campaigns, and brand creatives.",
  deliverables: ["Social media post systems", "Ad creative variants", "Billboard & OOH campaigns", "Brand identity refresh"]
}, {
  icon: Camera,
  title: "Photography",
  text: "Professional brand photography including product shoots, lifestyle images and commercial visuals.",
  deliverables: ["Studio product photography", "Lifestyle & on-location shoots", "Commercial imagery", "E-commerce ready exports"]
}, {
  icon: Film,
  title: "AI Video Production",
  text: "Cinematic AI video campaigns for advertising, social media marketing and storytelling.",
  deliverables: ["Cinematic brand films", "Vertical social cuts", "Performance ad variants", "Story-driven campaigns"]
}, {
  icon: Layers,
  title: "Full Content Production",
  text: "Complete content systems combining graphics, photography and video campaigns.",
  deliverables: ["Quarterly content calendars", "30+ assets per cycle", "Cross-channel optimization", "Strategy & analytics"]
}];
function ServicesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-32 pb-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container mx-auto px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Services", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "What we ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "build" }),
      "."
    ] }), description: "Four production pillars working as one premium content engine — designed for brands that need volume without sacrificing quality." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-20 grid gap-8 md:grid-cols-2", children: services.map((s, i) => {
      const Icon = s.icon;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative glass-strong rounded-3xl p-10 glow-border overflow-hidden animate-fade-up", style: {
        animationDelay: `${i * 100}ms`
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-20 -right-20 h-48 w-48 rounded-full opacity-25", style: {
          background: "var(--gradient-cinematic)",
          filter: "blur(50px)"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-14 w-14 grid place-items-center rounded-2xl mb-6 shadow-glow", style: {
            background: "var(--gradient-cinematic)"
          }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 22, className: "text-primary-foreground" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl md:text-3xl font-semibold", children: s.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground leading-relaxed", children: s.text }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-2", children: s.deliverables.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 14, className: "text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/90", children: d })
          ] }, d)) })
        ] })
      ] }, s.title);
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-24 max-w-3xl mx-auto text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-3xl md:text-4xl font-semibold", children: [
        "Need a ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "custom package" }),
        "?"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "Most of our clients run a combined content engine across all four services. Let's design the right rhythm for your brand." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "mt-8 inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium text-primary-foreground shadow-glow hover:scale-105 transition-transform", style: {
        background: "var(--gradient-cinematic)"
      }, children: [
        "Build my package ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-20 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://selfany.com/s/aiuniversity28631", target: "_blank", rel: "noopener noreferrer", className: "relative w-full max-w-2xl rounded-2xl overflow-hidden group", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "src/assets/learnai.jpeg", alt: "Learn AI", className: "w-full h-full object-cover opacity-90 group-hover:opacity-100 transition" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-end justify-center pb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium text-primary-foreground shadow-glow hover:scale-105 transition-transform", style: {
        background: "var(--gradient-cinematic)"
      }, children: [
        "ENROLL NOW ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
      ] }) })
    ] }) })
  ] }) });
}
export {
  ServicesPage as component
};
