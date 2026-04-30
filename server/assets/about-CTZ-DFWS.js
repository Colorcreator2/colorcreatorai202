import { T as jsxRuntimeExports } from "./worker-entry-DdEP2Tla.js";
import { c as createLucideIcon, L as Link } from "./router-BQOOUiiF.js";
import { S as SectionHeading } from "./SectionHeading-BchWB-M2.js";
import { S as Sparkles } from "./sparkles-BTdtSXAU.js";
import { A as ArrowRight } from "./arrow-right-Ctm3-jSD.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$2 = [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
];
const Eye = createLucideIcon("eye", __iconNode$2);
const __iconNode$1 = [
  [
    "path",
    {
      d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
      key: "mvr1a0"
    }
  ]
];
const Heart = createLucideIcon("heart", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
];
const Zap = createLucideIcon("zap", __iconNode);
const values = [{
  icon: Sparkles,
  title: "Cinematic First",
  text: "Every frame is treated like a film still."
}, {
  icon: Eye,
  title: "Brand Obsessed",
  text: "Visuals that compound a brand's recognition."
}, {
  icon: Zap,
  title: "High Volume",
  text: "Production systems engineered for output."
}, {
  icon: Heart,
  title: "Human Direction",
  text: "AI-powered, but human-led at every step."
}];
const stats = [{
  num: "120+",
  label: "Campaigns delivered"
}, {
  num: "40+",
  label: "Brands worldwide"
}, {
  num: "4×",
  label: "Average content output lift"
}, {
  num: "98%",
  label: "Client retention"
}];
function AboutPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-32 pb-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container mx-auto px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "About", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "A studio built for ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "modern brands" }),
      "."
    ] }), description: "Color-Creator AI is a creative content studio fusing cinematic art direction with the speed and scale of AI production. We help brands move from sporadic posting to a real visual presence." }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container mx-auto px-6 mt-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-10 items-stretch", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative glass-strong rounded-3xl p-10 md:p-14 overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-20 -left-20 h-64 w-64 rounded-full opacity-30", style: {
          background: "radial-gradient(circle, var(--neon-purple), transparent 70%)",
          filter: "blur(60px)"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.3em] text-muted-foreground", children: "Our Story" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 font-display text-3xl md:text-4xl font-semibold leading-tight", children: [
            "Built where ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "art direction" }),
            " meets AI."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-muted-foreground leading-relaxed", children: "We're a small team of creative directors, photographers and AI specialists. We started Color-Creator AI to solve one problem: brands need premium visual content at a volume their in-house teams can't reach." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground leading-relaxed", children: "By combining traditional craft with AI-native workflows, we produce months of content in weeks — without losing the cinematic quality your audience expects." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-4", children: stats.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-3xl p-8 flex flex-col justify-center animate-fade-up", style: {
        animationDelay: `${i * 100}ms`
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-4xl md:text-5xl font-semibold gradient-text", children: s.num }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-2 text-sm text-muted-foreground", children: s.label })
      ] }, s.label)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container mx-auto px-6 mt-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Values", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "What we ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "stand for" }),
        "."
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4", children: values.map((v, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-3xl p-8 hover:-translate-y-1 transition-transform animate-fade-up", style: {
        animationDelay: `${i * 100}ms`
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(v.icon, { size: 22, className: "text-primary mb-5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-semibold", children: v.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: v.text })
      ] }, v.title)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container mx-auto px-6 mt-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-4xl mx-auto text-center glass-strong rounded-3xl p-12 md:p-16 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-30", style: {
        background: "radial-gradient(circle at center, var(--neon-pink), transparent 60%)",
        filter: "blur(50px)"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-3xl md:text-5xl font-semibold", children: [
          "Let's build something ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "unforgettable" }),
          "."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "mt-8 inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium text-primary-foreground shadow-glow hover:scale-105 transition-transform", style: {
          background: "var(--gradient-cinematic)"
        }, children: [
          "Start a project ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  AboutPage as component
};
