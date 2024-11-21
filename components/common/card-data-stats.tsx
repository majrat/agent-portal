import Link from "next/link";
import React, { ReactNode } from "react";

interface CardDataStatsProps {
  small_txt?: string;
  big_txt?: string;
  status_txt?: string;
  color?: string;
  page_link?: string;
  children: ReactNode;
}

const CardDataStats: React.FC<CardDataStatsProps> = ({
  small_txt,
  big_txt,
  status_txt,
  color,
  children,
  page_link,
}) => {
  return (
    <div className="rounded-md border border-stroke bg-white/90 px-7.5 py-6 shadow-default dark:border-strokedark dark:bg-meta-4/90 hover:border-strokedark duration-300 ease-linear dark:hover:border-stroke">
      <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
        {children}
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div className="text-start">
          <Link href={page_link || "#"}>
            <h4 className="font-medium text-black dark:text-white">
              {big_txt}
            </h4>
          </Link>
          <span className="text-sm font-medium">{small_txt}</span>
        </div>

        <span
          className={`flex items-center gap-1 text-sm font-medium text-end ${
            color === "green" && "text-meta-3"
          } ${color === "blue" && "text-meta-5"} ${color === "red" && "text-red"} `}
        >
          {status_txt}

          
        </span>
      </div>
    </div>
  );
};

export default CardDataStats;
