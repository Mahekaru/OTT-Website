import { useEffect, useRef, useState } from "react";

// Simple IntersectionObserver hook for scroll-based reveal animations
export const useInView = (options?: IntersectionObserverInit) => {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const target = elementRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // Reveal once
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: "0px 0px -10% 0px",
        ...options,
      }
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, [options]);

  return { ref: elementRef, isVisible } as const;
};
