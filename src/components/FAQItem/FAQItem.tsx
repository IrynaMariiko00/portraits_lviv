import type React from "react";
import { useState } from "react";
import type { FAQItemProps } from "~/types/FAQItem";

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li
      className="p-[2%] group rounded-xl bg-gradient-to-b from-white/[0.03] to-transparent backdrop-blur-[2px] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)] hover:bg-white/[0.02] transition-[background-color,box-shadow] duration-500 group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="flex justify-between">
        <h4 className="subtitle text-blue">{question}</h4>
        <button className="relative w-12 h-12 flex items-center justify-center group">
          <span className="absolute w-[16px] h-[3px] bg-[var(--color-primary)] rounded transition-all duration-300"></span>
          <span className="absolute w-[3px] h-[16px] bg-[var(--color-primary)] rounded transition-all duration-300 group-hover:rotate-90 origin-center"></span>
        </button>
      </div>

      <p
        className={`transition-all duration-300 overflow-hidden text ${
          isOpen ? "opacity-100 max-h-96 mt-2" : "opacity-0 max-h-0"
        }`}
      >
        {answer}
      </p>
    </li>
  );
};

export default FAQItem;
