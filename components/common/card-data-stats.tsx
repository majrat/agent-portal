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

          {/* {green && (
            <svg
              className="fill-meta-3"
              width="10"
              height="11"
              viewBox="0 0 10 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.35716 2.47737L0.908974 5.82987L5.0443e-07 4.94612L5 0.0848689L10 4.94612L9.09103 5.82987L5.64284 2.47737L5.64284 10.0849L4.35716 10.0849L4.35716 2.47737Z"
                fill=""
              />
            </svg>
          )}
          {blue && (
            <svg
              className="fill-meta-5"
              width="10"
              height="11"
              viewBox="0 0 10 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.64284 7.69237L9.09102 4.33987L10 5.22362L5 10.0849L-8.98488e-07 5.22362L0.908973 4.33987L4.35716 7.69237L4.35716 0.0848701L5.64284 0.0848704L5.64284 7.69237Z"
                fill=""
              />
            </svg>
          )} */}
        </span>
      </div>
    </div>
  );
};

export default CardDataStats;
