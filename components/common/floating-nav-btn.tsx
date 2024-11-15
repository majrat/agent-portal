import Link from "next/link";
interface AccordionProps {
  btn1txt: any;
  btn2txt: any;
}
const FloatingNavBtn: React.FC<AccordionProps> = ({ btn1txt, btn2txt }) => {
  return (
    <>
      <Link
        href="/vendor-profile/vendor-registration/edit"
        className="fixed bottom-9 right-22 px-3 py-2 font-bold text-white rounded-2xl flex bg-red/60 cursor-pointer hover:bg-red"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-edit"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
          <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />
          <path d="M16 5l3 3" />
        </svg>
        <span>{btn1txt}</span>
      </Link>
      <div className="fixed bottom-9 right-9 bg-green-600/80 cursor-pointer hover:bg-green-800 px-3 py-2 font-bold text-white rounded-2xl flex">
        <Link href="/vendor-profile">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-x"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
          </svg>
          <span>{btn2txt}</span>
        </Link>
      </div>
    </>
  );
};

export default FloatingNavBtn;
