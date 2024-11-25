import Modal from "components/common/modal";
import { setInternationalStandardForSustainableProcurement } from "actions/priority-principles";
import { useSession } from "next-auth/react";
import { useState } from "react";

interface InternationalStandardForSustainableProcurementProps {
  accepted: boolean;
  onClickFunc: any;
  isOpen: any;
}
const InternationalStandardForSustainableProcurementText: React.FC<
  InternationalStandardForSustainableProcurementProps
> = ({ accepted, onClickFunc, isOpen }) => {
  const { data } = useSession();
  const [error, seterror] = useState<string>("");
  const [success, setsuccess] = useState<string>("");

  const handleAcceptSubmit = async () => {
    const userId = { user_id: data?.user?.id };
    await setInternationalStandardForSustainableProcurement(userId)
      .then((e) => {
        setsuccess(e.message);
      })
      .catch((e) => seterror(`${e.message}`));
  };

  return (
    <Modal
      isOpen={isOpen}
      onClickFunc={onClickFunc}
      svg={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fdc82e"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-license group-hover:animate-bounce duration-300 ease-linear"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11" />
          <path d="M9 7l4 0" />
          <path d="M9 11l4 0" />
        </svg>
      }
      title="International Standard For Sustainable Procurement"
      content=<div className="text-black border-t-2 bg-white dark:bg-meta-4 dark:text-white">
        <div className="p-6">
          <h2 className="text-title-sm font-bold pb-3 pt-6">Text Missing</h2>
          <p className="py-3">Text Missing</p>
          {/* <ul className="ms-9 list-disc">
            <li className="my-3"></li>
            <li className="my-3"></li>
            <li className="my-3"></li>
            <li className="my-3"></li>
            <li className="my-3"></li>
          </ul> */}
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:px-6 flex justify-end gap-4">
          {error && <p className="text-red">{error}</p>}
          {accepted || success ? (
            <div className="flex justify-between">
              <p className="text-meta-3 text-center self-center">{success}</p>
              <p className="inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-meta-4 dark:text-meta-9 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400">
                Agreed
              </p>
            </div>
          ) : (
            <button
              disabled
              onClick={handleAcceptSubmit}
              className="inline-flex cursor-not-allowed justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-black dark:bg-white/70 dark:hover:bg-white dark:text-black text-base font-medium hover:text-white text-white/70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
            >
              I Read and Agree
            </button>
          )}
        </div>
      </div>
    />
  );
};

export default InternationalStandardForSustainableProcurementText;
