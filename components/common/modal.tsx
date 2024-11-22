import { useState } from "react";
interface ModalProps {
  title: any;
  content: any;
  svg: any;
}

const Modal: React.FC<ModalProps> = ({ title, content, svg }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Button to open the privacy policy modal */}
      <div className="flex group">
        {svg}
        <button
          onClick={() => setIsOpen(true)}
          className="font-medium rounded hover:text-[#fdc82e]"
        >
          {title}
        </button>
      </div>
      {isOpen && (
        <div className="absolute z-10 inset-0 w-full font-sans bg-gray-100 flex items-center justify-center backdrop-blur-sm dark:bg-meta-4/50 bg-white/50 dark:text-white text-meta-4">
          {/* Privacy Policy Modal */}
          <div className="">
            {/* Background Overlay */}
            <div
              className="bg-gray-500 opacity-75"
              onClick={() => setIsOpen(false)}
            ></div>

            {/* Modal Content */}
            <div className="rounded-lg overflow-hidden shadow-xl max-w-screen-md w-full m-4 dark:bg-meta-4/50 bg-white/50 dark:text-white text-meta-4">
              {/* Modal Header */}
              <div className="px-6 py-4">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  {title}
                </h3>
              </div>

              {/* Modal Body */}
              <div className="max-w-[100vw] border-slate-300 border rounded p-6 overflow-y-auto max-h-[60vh] dark:bg-meta-4 bg-white">
                {content}
              </div>

              {/* Modal Footer */}
              <div className="bg-gray-50 px-4 py-3 sm:px-6 flex justify-end gap-4">
                <button
                  onClick={() => setIsOpen(false)}
                  className="inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-base font-medium text-red/70 hover:text-red focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Modal;
