"use client";

import { useEffect, useRef, useState } from "react";

export function Reveal({
  as: Tag = "div",
  className = "",
  children,
  delay = 0,
  initiallyVisible = false,
  variant = "up",
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(initiallyVisible);

  useEffect(() => {
    if (initiallyVisible) {
      return undefined;
    }

    const node = ref.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -4%" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [initiallyVisible]);

  return (
    <Tag
      ref={ref}
      className={`reveal reveal--${variant}${visible ? " is-visible" : ""}${className ? ` ${className}` : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
