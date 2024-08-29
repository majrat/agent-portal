"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import DefaultLayout from "../../components/layouts/user-default-layout";
import React from "react";

export default function Home() {
  const { status } = useSession();
  const showSession = () => {
    if (status === "authenticated") {
      return (
        <div className="min-h-screen rounded-sm border text-black dark:text-white border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
          <ul className="list-disc ps-6 pb-3">
            <li className="pb-3">Vendor Registration/Company details</li>
            <li className="pb-3">International Agency Agreement</li>
            <li className="pb-3">Bank details</li>
            <li className="pb-3">Agency credit application</li>
            <li className="pb-3">NDA</li>
            <li className="pb-3">
              Other – place for agents to upload any additional info they want
              to share like marketing materials
            </li>
          </ul>
        </div>
      );
    } else if (status === "loading") {
      return <span className="text-[#888] text-sm mt-7">Loading...</span>;
    } else {
      return redirect("/login");
    }
  };
  return <DefaultLayout>{showSession()}</DefaultLayout>;
}
