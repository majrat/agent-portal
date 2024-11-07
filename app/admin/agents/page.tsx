"use client";
// import { getAllusers, userPercentageChange } from "@/actions/user";
// import CardDataStats from "@/components/card-data-stats";
// import DefaultLayout from "@/components/layouts/admin-default-layout";
// import { Agent } from "@/types/package";
import { Metadata } from "next";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Agent } from "../../../types/package";
import DefaultLayout from "components/admin/layouts/admin-default-layout";
import Loader from "components/common/loader";

export default function Dashboard() {
  const { status, data } = useSession();
  const agentData: Agent[] = [
    
  ];
  const showSession = () => {
    if (status === "authenticated" && data.user.role === "ADMIN") {
      return (
        <div className="min-h-screen rounded-sm border text-black dark:text-white border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="px-4 py-6 md:px-6 xl:px-7.5">
              <h4 className="text-xl font-semibold text-black dark:text-white">
                Top Products
              </h4>
            </div>

            <div className="grid grid-cols-6 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
              <div className="col-span-3 flex items-center">
                <p className="font-medium">Agent Name</p>
              </div>
              <div className="col-span-2 hidden items-center sm:flex">
                <p className="font-medium">E-MAIL</p>
              </div>
              <div className="col-span-1 flex items-center">
                <p className="font-medium">Price</p>
              </div>
              <div className="col-span-1 flex items-center">
                <p className="font-medium">Sold</p>
              </div>
              <div className="col-span-1 flex items-center">
                <p className="font-medium">Profit</p>
              </div>
            </div>

            {agentData.map((product, key) => (
              <div
                className="grid grid-cols-6 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5"
                key={key}
              >
                <div className="col-span-3 flex items-center">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                    <div className="h-12.5 w-15 rounded-md">
                      <Image
                        src={product.image || "public/images/user/user-svgrepo-com.svg"}
                        width={60}
                        height={50}
                        alt="Product"
                      />
                    </div>
                    <p className="text-sm text-black dark:text-white">
                      {product.name}
                    </p>
                  </div>
                </div>
                <div className="col-span-2 hidden items-center sm:flex">
                  <p className="text-sm text-black dark:text-white">
                   test
                  </p>
                </div>
                <div className="col-span-1 flex items-center">
                  <p className="text-sm text-black dark:text-white">
                    test
                  </p>
                </div>
                <div className="col-span-1 flex items-center">
                  <p className="text-sm text-black dark:text-white">
                    test
                  </p>
                </div>
                <div className="col-span-1 flex items-center">
                  <p className="text-sm text-meta-3">$</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    } else if (status === "loading") {
      return <span className="text-[#888] text-sm mt-7"><Loader /></span>;
    } else {
      return redirect("/auth/login");
    }
  };
  return <DefaultLayout>{showSession()}</DefaultLayout>;
}
