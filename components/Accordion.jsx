"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="surface-card rounded-2xl transition-all duration-300 overflow-hidden"
          >
            <button
              type="button"
              onClick={() => toggle(index)}
              className="flex w-full items-center justify-between px-6 py-5 text-left font-display font-semibold text-base sm:text-lg text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              <span>{item.q}</span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-primary transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen
                  ? "grid-rows-[1fr] opacity-100 px-6 pb-5"
                  : "grid-rows-[0fr] opacity-0 px-6 pb-0"
              }`}
            >
              <div className="overflow-hidden text-sm leading-relaxed text-muted-foreground">
                {item.a}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
