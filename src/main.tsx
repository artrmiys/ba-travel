import "leaflet/dist/leaflet.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

function renderFatal(err: unknown) {
  const msg = err instanceof Error ? (err.stack || err.message) : String(err);
  const root = document.getElementById("root");
  if (!root) return;
  root.innerHTML = `<div style="font-family:ui-monospace,monospace;padding:16px;white-space:pre-wrap;color:#fff;background:#111;min-height:100vh">${msg}</div>`;
}

try {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} catch (e) {
  renderFatal(e);
}
window.addEventListener("error", (e) => renderFatal((e as ErrorEvent).error || (e as any).message));
window.addEventListener("unhandledrejection", (e) => renderFatal((e as PromiseRejectionEvent).reason));
