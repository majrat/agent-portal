import { useState, useRef, useEffect } from "react";
interface AccordionMinimalProps {
  title: any;
  content: any;
  svg: any;
  isOpenValue: Boolean;
}
const AccordionMinimal: React.FC<AccordionMinimalProps> = ({
  title,
  content,
  svg,
  isOpenValue,
}) => {
  const [isOpen, setIsOpen] = useState(isOpenValue);
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
    <div
      className={`dark:text-slate-400 text-meta-4 rounded-md mt-6 ${
        !isOpen && "hover:border-[#fdc82e] ease-linear duration-100"
      }`}
    >
      <button
        className="w-full text-left flex justify-between items-center hover:text-[#fdc82e]"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex">
          {svg}
          <span className="font-medium px-6 hover:underline ease-linear duration-300">
            {title}
          </span>
        </div>
        <div className="flex">
          <span className="mx-3">{isOpen ? "Close" : "Open"}</span>
          <svg
            className={`w-5 h-5 mr-6 duration-300 ${
              isOpen ? "absolute" : ""
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
        </div>
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

export default AccordionMinimal;
