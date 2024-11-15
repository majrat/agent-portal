import { useState, useRef, useEffect } from "react";
interface AccordionProps {
  title: any;
  content: any;
}
const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef<any>(null);

  useEffect(() => {
    if (isOpen) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div className={`border-b border-gray-200 bg-white dark:bg-meta-4 dark:text-white rounded-md mt-6 shadow-default ${!isOpen && "hover:bg-[#fdc82e]/30 ease-linear duration-300"}`}>
      <button
        className="w-full text-left py-4 flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-lg px-6 hover:underline ease-linear duration-300">{title}</span>
        <svg
          className={`w-5 h-5 transform transition-transform mr-6 duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        ref={contentRef}
        style={{ height: `${height}px` }}
        className="overflow-hidden transition-height duration-300 ease-in-out"
      >
        <div className="px-4 pb-4 text-gray-600">{content}</div>
      </div>
    </div>
  );
};

export default Accordion;
