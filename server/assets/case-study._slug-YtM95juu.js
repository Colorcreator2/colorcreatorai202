import { T as jsxRuntimeExports } from "./worker-entry-CjXa8inz.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const SplitErrorComponent = ({
  error
}) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-40 pb-20 container mx-auto px-6 text-center", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl font-semibold", children: "Something went wrong" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: error.message })
] });
export {
  SplitErrorComponent as errorComponent
};
