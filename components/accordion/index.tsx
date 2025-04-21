"use client";

import { useState } from 'react';

type AccordionItem = {
  title: string;
  content: string;
};

type AccordionProps = {
  items: AccordionItem[];
};

export default function Accordion({ items }: AccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full ">
      {items.map((item, index) => (
        <div key={index} className="mb-0.5 overflow-hidden rounded-lg">
          <button
            className="w-full p-4 text-left bg-teal-900 hover:bg-teal-800 transition-colors duration-200 flex justify-between items-center"
            onClick={() => toggleAccordion(index)}
          >
            <span className="font-medium">{item.title}</span>
            <span className="transform transition-transform duration-200">
              {activeIndex === index ? '−' : '+'}
            </span>
          </button>
          <div
            className={`px-4 overflow-hidden transition-all duration-200 ${
              activeIndex === index ? 'max-h-96 py-4' : 'max-h-0 py-0'
            }`}
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
}