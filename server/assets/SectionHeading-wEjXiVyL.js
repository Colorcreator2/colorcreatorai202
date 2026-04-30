import { T as jsxRuntimeExports } from "./worker-entry-CjXa8inz.js";
function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center"
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `max-w-3xl ${align === "center" ? "mx-auto text-center" : ""} animate-fade-up`,
      children: [
        eyebrow && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs uppercase tracking-[0.2em] text-muted-foreground mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "h-1.5 w-1.5 rounded-full",
              style: { background: "var(--gradient-cinematic)" }
            }
          ),
          eyebrow
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight", children: title }),
        description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-base md:text-lg text-muted-foreground leading-relaxed", children: description })
      ]
    }
  );
}
export {
  SectionHeading as S
};
