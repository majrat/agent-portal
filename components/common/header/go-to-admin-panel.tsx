import { useState } from "react";
import Link from "next/link";
import ClickOutside from "../click-outside";
import { usePathname } from "next/navigation";

const GoToAdminPanel = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notifying, setNotifying] = useState(true);
  const pathname = usePathname();

  return (
    <ClickOutside onClick={() => setDropdownOpen(false)} className="relative">
      <li>
        <Link
          href={pathname?.includes("/admin/") ? `/` : `/admin/dashboard`}
          className="relative flex w-40 h-8 items-center justify-evenly rounded-full border-[0.5px] text-stone-900 border-stroke hover:bg-meta-4 hover:text-white bg-gray dark:border-strokedark dark:bg-meta-4 dark:text-gray dark:hover:text-meta-4 dark:hover:bg-gray"
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
            className="icon icon-tabler icons-tabler-outline icon-tabler-source-code duration-300 ease-in-out"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M14.5 4h2.5a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3v-5" />
            <path d="M6 5l-2 2l2 2" />
            <path d="M10 9l2 -2l-2 -2" />
          </svg>
          <span className="font-medium text-sm duration-300 ease-in-out">
            {pathname?.includes("/admin/")
              ? `Open user Panel`
              : `Open Admin Panel`}
          </span>
        </Link>
      </li>
    </ClickOutside>
  );
};

export default GoToAdminPanel;
