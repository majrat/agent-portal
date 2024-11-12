"use client";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Loader from "components/common/loader";
import LogoCard from "components/common/logo-card";
import DefaultLayout from "components/user/layouts/user-default-layout";
import {
  getVendorRegistration,
  setVendorRegistration,
} from "actions/vendor-registration";
import NDA from "./_nda-text/nda-text";

export default function Home() {
  const [error, setError] = useState("");
  const router = useRouter();
  const [success, setsuccess] = useState<string>("");
  const [vendorRegistrationData, setVendorRegistrationData] = useState<any>();
  const { status, data } = useSession();
  const ref = useRef<HTMLFormElement>(null);

  useEffect(() => {
    async function fetchData() {
      return await getVendorRegistration(data?.user?.id);
    }
    fetchData()
      .then((response) => {
        setVendorRegistrationData(response?.data);
      })
      .catch((e) => setError(`${e}`));
  }, [data]);
  const showSession = () => {
    if (status === "authenticated") {
      return (
        <div className="min-h-screen rounded-sm border text-black border-stroke bg-white/80 bg-blend-screen bg-[url('/images/global-v1-640x480.jpg')] bg-cover px-6 py-6 shadow-default dark:border-strokedark dark:bg-white/60 sm:px-7.5">
          <LogoCard />
          <h3 className="text-xl font-medium py-3">
            VENDOR REGISTRATION / COMPANY DETAILS
          </h3>
          <div className="flex">
            {error && <span className="text-red mr-4">{error}</span>}
          </div>
          <NDA />
          <div className="mt-6 p-10 border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark dark:text-white rounded-md">
            <p className="block font-medium pb-3">Contracted Partner</p>
            <div className="grid grid-cols-2 pt-3">
              <p className="col-span-1 block">Date</p>
              <p className="md:col-span-1 col-span-1">
                <span className="border-b-2 border-dotted border-[#fdc82e]">
                  {vendorRegistrationData?.company_name || (
                    <span className="border-b-2 border-dotted border-red text-xs">
                      NO DATA FOUND
                    </span>
                  )}
                </span>
              </p>
            </div>
            <div className="grid grid-cols-2 pt-3">
              <p className="col-span-1 block">Printed Name</p>
              <p className="md:col-span-1 col-span-1">
                <span className="border-b-2 border-dotted border-[#fdc82e]">
                  {vendorRegistrationData?.company_name || (
                    <span className="border-b-2 border-dotted border-red text-xs">
                      NO DATA FOUND
                    </span>
                  )}
                </span>
              </p>
            </div>
            <div className="grid grid-cols-2 pt-3">
              <p className="col-span-1 block">Signature</p>
              <p className="md:col-span-1 col-span-1">
                <span className="border-b-2 border-dotted border-[#fdc82e]">
                  {vendorRegistrationData?.company_name || (
                    <span className="border-b-2 border-dotted border-red text-xs">
                      NO DATA FOUND
                    </span>
                  )}
                </span>
              </p>
            </div>
            <p className="block pt-9 pb-3 font-medium">Priority Worldwide</p>
            <div className="grid grid-cols-2 pt-3">
              <p className="col-span-1 block">Date</p>
              <p className="md:col-span-1 col-span-1">
                <span className="border-b-2 border-dotted border-[#fdc82e]">
                  {vendorRegistrationData?.company_name || (
                    <span className="border-b-2 border-dotted border-red text-xs">
                      NO DATA FOUND
                    </span>
                  )}
                </span>
              </p>
            </div>
            <div className="grid grid-cols-2 pt-3">
              <p className="col-span-1 block">Printed Name</p>
              <p className="md:col-span-1 col-span-1">
                <span className="border-b-2 border-dotted border-[#fdc82e]">
                  {vendorRegistrationData?.company_name || (
                    <span className="border-b-2 border-dotted border-red text-xs">
                      NO DATA FOUND
                    </span>
                  )}
                </span>
              </p>
            </div>
            <div className="grid grid-cols-2 pt-3">
              <p className="col-span-1 block">Signature</p>
              <p className="md:col-span-1 col-span-1">
                <span className="border-b-2 border-dotted border-[#fdc82e]">
                  {vendorRegistrationData?.company_name || (
                    <span className="border-b-2 border-dotted border-red text-xs">
                      NO DATA FOUND
                    </span>
                  )}
                </span>
              </p>
            </div>
          </div>
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
              <span>Edit</span>
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
              </Link>
            </div>
          </>
        </div>
      );
    } else if (status === "loading") {
      return (
        <span className="text-[#888] text-sm mt-7">
          <Loader />
        </span>
      );
    } else {
      return redirect("/auth/login");
    }
  };
  return <DefaultLayout>{showSession()}</DefaultLayout>;
}
