import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

type PdsState = "loading" | "available" | "unavailable" | "not-configured";

function App() {
  const [pds, setPds] = useState<PdsState>("loading");

  useEffect(() => {
    fetch("/api/pds")
      .then((r) => r.json())
      .then((data) => {
        if (!data.configured) setPds("not-configured");
        else setPds(data.available ? "available" : "unavailable");
      })
      .catch(() => setPds("unavailable"));
  }, []);

  return (
    <main>
      <h1>AT Protocol starter</h1>
      <p>Your app is running. Edit <code>src/main.tsx</code> to get started.</p>
      <p className="status">
        PDS: <strong>{pds}</strong>
      </p>
      {pds === "not-configured" && (
        <p className="hint">
          Set <code>PDS_URL</code> in <code>.env</code> to connect to a Personal Data Server.
        </p>
      )}
    </main>
  );
}

createRoot(document.getElementById("app")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
