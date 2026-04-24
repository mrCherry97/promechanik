import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const CONSENT_KEY = "cookie_consent";

function loadGA() {
  const id = import.meta.env.VITE_GA_ID;
  if (!id) return;

  const script = document.createElement("script");
  script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  script.async = true;
  document.head.appendChild(script);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const w = window as any;
  w.dataLayer = w.dataLayer || [];
  w.gtag = function (...args: unknown[]) { w.dataLayer.push(args); };
  w.gtag("js", new Date());
  w.gtag("config", id);
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (consent === "accepted") {
      loadGA();
    } else if (!consent) {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem(CONSENT_KEY, "accepted");
    loadGA();
    setVisible(false);
  }

  function reject() {
    localStorage.setItem(CONSENT_KEY, "rejected");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="bg-card/95 backdrop-blur-md border border-border rounded-md px-6 py-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center shadow-lg">
          <div className="flex-1">
            <p className="font-display text-sm tracking-widest uppercase text-foreground mb-1">
              Pliki cookie
            </p>
            <p className="text-muted-foreground text-sm">
              Używamy Google Analytics do analizy ruchu na stronie. Dane są
              anonimizowane i nie są udostępniane osobom trzecim.
            </p>
          </div>
          <div className="flex gap-2 shrink-0">
            <Button variant="outline" size="sm" onClick={reject}>
              Odrzuć
            </Button>
            <Button size="sm" onClick={accept}>
              Akceptuj
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
