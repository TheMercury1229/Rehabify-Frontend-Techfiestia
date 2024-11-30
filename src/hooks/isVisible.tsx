'use client'
import { useEffect, useState } from "react";

export const isVisible = (threshold = 0.1) => {
  const [isInView, setIsInView] = useState(false);
  const [ref, setRef] = useState<HTMLElement | null>(null);
  const [hasBeenInView, setHasBeenInView] = useState(false);
  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) =>{ if(entry.isIntersecting){setHasBeenInView(true); setIsInView(entry.isIntersecting)}},
      { threshold }
    );

    observer.observe(ref);

    return () => {
      if (ref) observer.unobserve(ref);
    };
  }, [ref, threshold]);

  return { ref: setRef, isInView };
};
