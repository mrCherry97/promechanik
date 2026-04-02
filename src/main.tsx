import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

if (window.location.search.startsWith("?/")) {
  const decodedPath = window.location.search
    .slice(1)
    .split("&")
    .map((segment) => segment.replace(/~and~/g, "&"))
    .join("?");

  const normalizedPath = `${window.location.pathname.replace(/\/$/, "")}${decodedPath}${window.location.hash}`;
  window.history.replaceState(null, "", normalizedPath);
}

createRoot(document.getElementById("root")!).render(<App />);
