import { T as jsxRuntimeExports } from "./worker-entry-CjXa8inz.js";
import { S as SectionHeading } from "./SectionHeading-wEjXiVyL.js";
import { S as Sparkles } from "./sparkles-CocPHq7A.js";
import { c as createLucideIcon, I as Instagram, M as Mail } from "./router-O6hfg-5n.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$1 = [
  [
    "path",
    {
      d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
      key: "1sd12s"
    }
  ]
];
const MessageCircle = createLucideIcon("message-circle", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
];
const Phone = createLucideIcon("phone", __iconNode);
function ContactPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-32 pb-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container mx-auto px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Contact", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "Start Your ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "Project" }),
      "."
    ] }), description: "Tell us what you need — we'll handle the creative." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ContactChannels, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 max-w-3xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative glass-strong rounded-3xl p-6 md:p-10 shadow-elevated overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-24 -right-24 h-64 w-64 rounded-full opacity-30 pointer-events-none", style: {
        background: "radial-gradient(circle, var(--neon-purple), transparent 70%)",
        filter: "blur(60px)"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-6 px-4 py-2 rounded-full glass text-xs uppercase tracking-[0.2em] text-muted-foreground w-fit", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 12, className: "text-primary" }),
          "Serious brands only — limited slots each quarter."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl overflow-hidden bg-white/[0.02] border border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { "aria-label": "Color-creator Ai", src: "https://forms.zohopublic.com/colorcreatorai1/form/ColorcreatorAi/formperma/iVnUApsvAOy4g5uACcN6DpghQtlZ0ZOs4fE8emSXq5Q", style: {
          border: "none"
        }, className: "w-full h-[800px] block" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-sm text-center text-muted-foreground", children: "We'll get back to you within 24–48 hours." })
      ] })
    ] }) })
  ] }) });
}
function ContactChannels() {
  const channels = [{
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+234 807 893 1982",
    href: "https://wa.me/2348078931982",
    cta: "Chat on WhatsApp"
  }, {
    icon: Instagram,
    label: "Instagram",
    value: "@colorcreator_ai",
    href: "https://instagram.com/colorcreator_ai",
    cta: "Follow on Instagram"
  }, {
    icon: Mail,
    label: "Email",
    value: "okirikachika530@gmail.com",
    href: "mailto:okirikachika530@gmail.com",
    cta: "Send an email"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-14 grid gap-4 sm:grid-cols-3 max-w-4xl mx-auto", children: [
    channels.map(({
      icon: Icon,
      label,
      value,
      href,
      cta
    }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href, target: href.startsWith("http") ? "_blank" : void 0, rel: "noreferrer", className: "group glass rounded-2xl p-5 flex flex-col gap-3 hover:shadow-glow transition-all", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-10 w-10 grid place-items-center rounded-full text-primary-foreground", style: {
          background: "var(--gradient-cinematic)"
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 16 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.2em] text-muted-foreground", children: label })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-foreground font-medium break-all", children: value }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground group-hover:text-foreground transition-colors", children: [
        cta,
        " →"
      ] })
    ] }, label)),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://wa.me/2348078931982", target: "_blank", rel: "noreferrer", className: "sm:col-span-3 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-primary-foreground shadow-glow hover:scale-[1.01] transition-transform", style: {
      background: "var(--gradient-cinematic)"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 16 }),
      " Chat with us on WhatsApp"
    ] })
  ] });
}
export {
  ContactPage as component
};
