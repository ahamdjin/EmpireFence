"use client";

import { useEffect, useState } from "react";

import { chatWidget } from "@/lib/site";

export function ChatWidget() {
  const [enabled, setEnabled] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const evaluate = () => {
      const isMobile = window.innerWidth <= 640;
      if (enabled) {
        return;
      }

      if (!isMobile || window.scrollY > 1400) {
        setEnabled(true);
      }
    };

    evaluate();
    window.addEventListener("resize", evaluate, { passive: true });
    window.addEventListener("scroll", evaluate, { passive: true });

    return () => {
      window.removeEventListener("resize", evaluate);
      window.removeEventListener("scroll", evaluate);
    };
  }, [enabled]);

  useEffect(() => {
    if (!enabled) {
      return undefined;
    }

    const scriptId = "empire-chat-widget";
    const existing = document.getElementById(scriptId);
    if (existing) {
      setHydrated(true);
      return undefined;
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = chatWidget.loaderSrc;
    script.async = true;
    script.dataset.resourcesUrl = chatWidget.resourcesUrl;
    script.dataset.widgetId = chatWidget.widgetId;
    script.addEventListener("load", () => setHydrated(true), { once: true });
    document.body.appendChild(script);

    return undefined;
  }, [enabled]);

  if (!enabled) {
    return null;
  }

  return (
    <div
      data-chat-widget=""
      data-widget-id={chatWidget.widgetId}
      data-widget-ready={hydrated ? "true" : "false"}
    />
  );
}
