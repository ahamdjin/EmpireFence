"use client";

import { useEffect, useState } from "react";

import { chatWidget } from "@/lib/site";

export function ChatWidget() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const evaluate = () => {
      const isMobile = window.innerWidth <= 640;
      if (!isMobile) {
        setEnabled(true);
        return;
      }

      setEnabled(window.scrollY > 1400);
    };

    evaluate();
    window.addEventListener("resize", evaluate, { passive: true });
    window.addEventListener("scroll", evaluate, { passive: true });

    return () => {
      window.removeEventListener("resize", evaluate);
      window.removeEventListener("scroll", evaluate);
    };
  }, []);

  useEffect(() => {
    if (!enabled) {
      return undefined;
    }

    const scriptId = "empire-chat-widget";
    if (document.getElementById(scriptId)) {
      return undefined;
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = chatWidget.loaderSrc;
    script.async = true;
    script.dataset.resourcesUrl = chatWidget.resourcesUrl;
    script.dataset.widgetId = chatWidget.widgetId;
    document.body.appendChild(script);

    return () => {
      const existing = document.getElementById(scriptId);
      if (existing) {
        existing.remove();
      }
    };
  }, [enabled]);

  if (!enabled) {
    return null;
  }

  return (
    <div
      data-chat-widget=""
      data-widget-id={chatWidget.widgetId}
    />
  );
}
