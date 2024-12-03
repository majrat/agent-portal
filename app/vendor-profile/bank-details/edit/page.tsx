"use client";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Loader from "components/common/loader";
import LogoCard from "components/common/logo-card";
import DefaultLayout from "components/user/layouts/user-default-layout";
import { getBankDetails, setBankDetails } from "actions/bank-details";

export default function Home() {
  const [error, setError] = useState("");
  const router = useRouter();
  const [success, setsuccess] = useState<string>("");
  const [vendorRegistrationData, setBankDetailsData] = useState<any>();
  const { status, data } = useSession();
  const ref = useRef<HTMLFormElement>(null);

  const handleSubmit = async (formData: FormData) => {
    const r = await setBankDetails({
      user_id: data?.user?.id,
      beneficiary_payee_name: formData.get("beneficiary_payee_name"),
      beneficiary_payee_address: formData.get("beneficiary_payee_address"),
      bank_account_no: formData.get("bank_account_no"),
      bank_name: formData.get("bank_name"),
      bank_address: formData.get("bank_address"),
      branch: formData.get("branch"),
      swift_code: formData.get("swift_code"),
      iban: formData.get("iban"),
      currency: formData.get("currency"),
    });
    if (r?.success) {
      ref.current?.reset();
      setsuccess(`${r?.message}` as string);
      await new Promise((resolve) => setTimeout(resolve, 2500));
      return router.push("/vendor-profile/bank-details");
    } else {
      setError(`${r?.message}` as string);
    }
  };
  useEffect(() => {
    async function fetchData() {
      return await getBankDetails(data?.user?.id);
    }
    fetchData()
      .then((response) => {
        setBankDetailsData(response?.data);
      })
      .catch((e) => setError(`${e}`));
  }, [data]);
  const showSession = () => {
    if (status === "authenticated") {
      return (
        <div className="min-h-screen rounded-sm border text-black border-stroke bg-white/80 bg-blend-screen bg-[url('/images/global-v1-640x480.jpg')] bg-cover px-6 py-6 shadow-default dark:border-strokedark dark:bg-white/60 sm:px-7.5">
          <LogoCard />
          <h3 className="text-xl font-medium py-3">BANK DETAILS</h3>
          <form
            className="p-10 bg-white/80 rounded-md"
            action={handleSubmit}
            autoComplete="off"
          >
            <div className="w-full p-2">
              <div className="mb-4">
                <div className="flex">
                  {error && <span className="text-red mr-4">{error}</span>}
                  {success && (
                    <div className="relative ease-in-out duration-500 bg-gray-100">
                      <p className="fixed text-black inset-1 w-screen h-screen text-2xl font-bold bg-white/30 backdrop-blur-lg rounded-lg flex items-center justify-center text-center p-4 m-auto z-50">
                        {success}
                      </p>
                    </div>
                  )}
                </div>
                <label className="mb-2.5 block font-medium text-black">
                  Beneficiary / Payee Name :
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder={
                      vendorRegistrationData?.beneficiary_payee_name ||
                      "Enter your Beneficiary / Payee Name"
                    }
                    name="beneficiary_payee_name"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:focus:border-[#fdc82e]"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="mb-2.5 block font-medium text-black">
                  Beneficiary / Payee Address :
                </label>
                <div className="relative">
                  <input
                    name="beneficiary_payee_address"
                    type="text"
                    placeholder={
                      vendorRegistrationData?.beneficiary_payee_address ||
                      "Enter your Beneficiary / Payee Address"
                    }
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:focus:border-[#fdc82e]"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="mb-2.5 block font-medium text-black">
                  Bank Account No :
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder={
                      vendorRegistrationData?.bank_account_no ||
                      "Enter your Bank Account No"
                    }
                    name="bank_account_no"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:focus:border-[#fdc82e]"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="mb-2.5 block font-medium text-black">
                  Bank Name :
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder={
                      vendorRegistrationData?.bank_name ||
                      "Enter your Bank Name"
                    }
                    name="bank_name"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:focus:border-[#fdc82e]"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="mb-2.5 block font-medium text-black">
                  Bank Address :
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder={
                      vendorRegistrationData?.bank_address ||
                      "Enter your Bank Address"
                    }
                    name="bank_address"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:focus:border-[#fdc82e]"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="mb-2.5 block font-medium text-black">
                  Branch :
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder={
                      vendorRegistrationData?.branch ||
                      "Enter your Branch"
                    }
                    name="branch"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:focus:border-[#fdc82e]"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="mb-2.5 block font-medium text-black">
                  Swift code :
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder={
                      vendorRegistrationData?.swift_code ||
                      "Enter your Swift code"
                    }
                    name="swift_code"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:focus:border-[#fdc82e]"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="mb-2.5 block font-medium text-black">
                  International Bank A/c Number (IBAN) :
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder={
                      vendorRegistrationData?.iban || "Enter your International Bank A/c Number (IBAN)"
                    }
                    name="iban"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:focus:border-[#fdc82e]"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="mb-2.5 block font-medium text-black">
                  Currency :
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder={
                      vendorRegistrationData?.currency || "Enter your Currency"
                    }
                    name="currency"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:focus:border-[#fdc82e]"
                  />
                </div>
              </div>

              <div className="mb-5 flex justify-between items-center gap-4">
                <input
                  type="submit"
                  value="Submit"
                  className="w-full cursor-pointer rounded-lg hover:bg-[#fdc82e]/90 bg-meta-4/60 text-white p-3 hover:text-meta-4 transition"
                />
              </div>
              <div className="mt-6 text-center">
                <p>
                  <Link
                    href="/vendor-profile/bank-details"
                    className="text-red"
                  >
                    Cancel
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      );
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
