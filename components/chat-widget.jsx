"use client";

import { useEffect } from "react";

import { chatWidget } from "@/lib/site";

export function ChatWidget() {
  useEffect(() => {
    const scriptId = "empire-chat-widget";
    if (document.getElementById(scriptId)) {
      return;
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
  }, []);

  return (
    <div
      data-chat-widget=""
      data-widget-id={chatWidget.widgetId}
      data-location-id={chatWidget.locationId}
    />
  );
}
