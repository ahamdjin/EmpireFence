import { useEffect, useEffectEvent, useState } from "react";

export function usePageEffects() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [heroOffset, setHeroOffset] = useState(0);

  const onScroll = useEffectEvent(() => {
    const top = window.scrollY;
    setIsScrolled(top > 18);
    setHeroOffset(Math.min(top * 0.14, 56));
  });

  useEffect(() => {
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  useEffect(() => {
    const nodes = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -10%" },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return { heroOffset, isScrolled };
}
