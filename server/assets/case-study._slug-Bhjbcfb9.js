import { T as jsxRuntimeExports } from "./worker-entry-DdEP2Tla.js";
import { L as Link } from "./router-BQOOUiiF.js";
import { A as ArrowLeft } from "./arrow-left-B8ctwh1L.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const SplitNotFoundComponent = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-40 pb-20 container mx-auto px-6 text-center", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl font-semibold", children: "Case study not found" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "The project you're looking for doesn't exist." }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/portfolio", className: "mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full glass-strong hover:bg-white/10 transition-colors text-sm font-medium", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 16 }),
    " Back to portfolio"
  ] })
] });
export {
  SplitNotFoundComponent as notFoundComponent
};
