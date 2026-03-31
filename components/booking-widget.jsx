"use client";

import { useEffect } from "react";

import { bookingWidget } from "@/lib/site";

export function BookingWidget() {
  useEffect(() => {
    const scriptId = "empire-booking-widget";
    if (document.getElementById(scriptId)) {
      return;
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = bookingWidget.scriptSrc;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const existing = document.getElementById(scriptId);
      if (existing) {
        existing.remove();
      }
    };
  }, []);

  return (
    <div className="bookingWidget">
      <iframe
        src={bookingWidget.iframeSrc}
        style={{ width: "100%", border: "none", overflow: "hidden" }}
        scrolling="no"
        id={bookingWidget.iframeId}
        title="Empire Fence booking calendar"
      />
    </div>
  );
}
