"use client";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Loader from "components/common/loader";
import LogoCard from "components/common/logo-card";
import DefaultLayout from "components/user/layouts/user-default-layout";
import { getBankDetails } from "actions/bank-details";

export default function Home() {
  const [error, setError] = useState("");
  const router = useRouter();
  const [success, setsuccess] = useState<string>("");
  const [BankDetailsData, setBankDetailsData] = useState<any>();
  const { status, data } = useSession();
  const ref = useRef<HTMLFormElement>(null);
  const [checkIfAnswered, setcheckIfAnswered] = useState<string>("loading");

  useEffect(() => {
    async function fetchData() {
      return await getBankDetails(data?.user?.id);
    }
    fetchData()
      .then((response) => {
        setcheckIfAnswered(response?.success);
        setBankDetailsData(response?.data);
      })
      .catch((e) => setError(`${e}`));
  }, [data]);

  const showSession = () => {
    if (status === "authenticated") {
      if (checkIfAnswered === "success") {
        return (
          <div className="min-h-screen rounded-sm border text-black border-stroke bg-white/80 bg-blend-screen bg-[url('/images/pexels-tirachard-kumtanom-112571-733852.jpg')] bg-cover px-6 py-6 shadow-default dark:border-strokedark dark:bg-white/60 sm:px-7.5">
            <LogoCard />
            <h3 className="text-xl font-medium py-3">BANK DETAILS</h3>
            <div className="flex">
              {error && <span className="text-red mr-4">{error}</span>}
            </div>
            <div className="pt-10 px-10 gap-7 border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark dark:text-white sm:px-7.5 xl:pb-1 rounded-md grid md:grid-cols-3 grid-cols-2">
              <p className="col-span-1 block font-medium">
                Beneficiary / Payee Name :
              </p>
              <p className="md:col-span-2 col-span-1">
                <span className="border-b-2 border-dotted border-[#fdc82e]">
                  {BankDetailsData?.beneficiary_payee_name || (
                    <span className="border-b-2 border-dotted border-red text-xs">
                      NO DATA FOUND
                    </span>
                  )}
                </span>
              </p>

              <p className="col-span-1 block font-medium">
                Beneficiary / Payee Address :
              </p>
              <p className="md:col-span-2 col-span-1">
                <span className="border-b-2 border-dotted border-[#fdc82e]">
                  {BankDetailsData?.beneficiary_payee_address || (
                    <span className="border-b-2 border-dotted border-red text-xs">
                      NO DATA FOUND
                    </span>
                  )}
                </span>
              </p>

              <p className="col-span-1 block font-medium">Bank Account No :</p>
              <p className="md:col-span-2 col-span-1">
                <span className="border-b-2 border-dotted border-[#fdc82e]">
                  {BankDetailsData?.bank_account_no || (
                    <span className="border-b-2 border-dotted border-red text-xs">
                      NO DATA FOUND
                    </span>
                  )}
                </span>
              </p>

              <p className="col-span-1 block font-medium">Bank Name :</p>
              <p className="md:col-span-2 col-span-1">
                <span className="border-b-2 border-dotted border-[#fdc82e]">
                  {BankDetailsData?.bank_name || (
                    <span className="border-b-2 border-dotted border-red text-xs">
                      NO DATA FOUND
                    </span>
                  )}
                </span>
              </p>

              <p className="col-span-1 block font-medium">Bank Address :</p>
              <p className="md:col-span-2 col-span-1">
                <span className="border-b-2 border-dotted border-[#fdc82e]">
                  {BankDetailsData?.bank_address || (
                    <span className="border-b-2 border-dotted border-red text-xs">
                      NO DATA FOUND
                    </span>
                  )}
                </span>
              </p>

              <p className="col-span-1 block font-medium">Branch :</p>
              <p className="md:col-span-2 col-span-1">
                <span className="border-b-2 border-dotted border-[#fdc82e]">
                  {BankDetailsData?.branch || (
                    <span className="border-b-2 border-dotted border-red text-xs">
                      NO DATA FOUND
                    </span>
                  )}
                </span>
              </p>

              <p className="col-span-1 block font-medium">Swift code :</p>
              <p className="md:col-span-2 col-span-1">
                <span className="border-b-2 border-dotted border-[#fdc82e]">
                  {BankDetailsData?.swift_code || (
                    <span className="border-b-2 border-dotted border-red text-xs">
                      NO DATA FOUND
                    </span>
                  )}
                </span>
              </p>

              <p className="col-span-1 block font-medium">
                International Bank A/c Number (IBAN) :
              </p>
              <p className="md:col-span-2 col-span-1">
                <span className="border-b-2 border-dotted border-[#fdc82e]">
                  {BankDetailsData?.iban || (
                    <span className="border-b-2 border-dotted border-red text-xs">
                      NO DATA FOUND
                    </span>
                  )}
                </span>
              </p>

              <p className="col-span-1 block font-medium pb-10">Currency :</p>
              <p className="md:col-span-2 col-span-1 pb-10">
                <span className="border-b-2 border-dotted border-[#fdc82e]">
                  {BankDetailsData?.currency || (
                    <span className="border-b-2 border-dotted border-red text-xs">
                      NO DATA FOUND
                    </span>
                  )}
                </span>
              </p>
            </div>
            <>
              <Link
                href="/vendor-profile/bank-details/edit"
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
      } else if (checkIfAnswered === "failed") {
        router.push("/vendor-profile/bank-details/edit");
      } else {
        return (
          <span className="text-[#888] text-sm mt-7">
            <Loader />
          </span>
        );
      }
    } else if (status === "loading") {
      return (
        <span className="text-[#888] text-sm mt-7">
          <Loader />
        </span>
      );
    } else {
      router.push("/auth/login");
    }
  };
  return <DefaultLayout>{showSession()}</DefaultLayout>;
}
