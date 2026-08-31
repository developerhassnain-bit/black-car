"use client";

import { useEffect, useRef, useState } from "react";

export function Reveal({
  children,
  className = "",
  variant = "up",
  delay = 0,
  duration = 700,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const getVariantStyles = () => {
    switch (variant) {
      case "up":
        return isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8";
      case "down":
        return isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-8";
      case "left":
        return isVisible
          ? "opacity-100 translate-x-0"
          : "opacity-0 -translate-x-8";
      case "right":
        return isVisible
          ? "opacity-100 translate-x-0"
          : "opacity-0 translate-x-8";
      case "scale":
        return isVisible
          ? "opacity-100 scale-100"
          : "opacity-0 scale-95";
      default:
        return isVisible ? "opacity-100" : "opacity-0";
    }
  };

  return (
    <div
      ref={ref}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
      className={`transition-all ease-out ${getVariantStyles()} ${className}`}
    >
      {children}
    </div>
  );
}
