"use client";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Loader from "components/common/loader";
import LogoCard from "components/common/logo-card";
import DefaultLayout from "components/user/layouts/user-default-layout";
import { getNDA, setNDA } from "actions/nda";
import { type_of_agency_credit_application } from "types/agency-credit-application";
import formattedDate from "js/formattedDate";

export default function Home() {
  const [error, setError] = useState("");
  const router = useRouter();
  const [success, setsuccess] = useState<string>("");
  const [agencyCreditApplicationData, setAgencyCreditApplicationData] =
    useState<type_of_agency_credit_application>();
  const { status, data } = useSession();
  const ref = useRef<HTMLFormElement>(null);

  const handleSubmit = async (formData: FormData) => {
    const r = await setNDA({
      user_id: data?.user?.id,
      generalInformation_date: formData.get("generalInformation_date"),
      generalInformation_printed_name: formData.get(
        "generalInformation_printed_name"
      ),
      generalInformation_signature: formData.get(
        "generalInformation_signature"
      ),
      priority_worldwide_date: formData.get("priority_worldwide_date"),
      priority_worldwide_printed_name: formData.get(
        "priority_worldwide_printed_name"
      ),
      priority_worldwide_signature: formData.get(
        "priority_worldwide_signature"
      ),
    });
    if (r?.success) {
      ref.current?.reset();
      setsuccess(`${r?.message}` as string);
      await new Promise((resolve) => setTimeout(resolve, 2500));
      return router.push("/vendor-profile/vendor-registration");
    } else {
      setError(`${r?.message}` as string);
    }
  };
  useEffect(() => {
    async function fetchData() {
      return await getNDA(data?.user?.id);
    }
    fetchData()
      .then((response) => {
        setAgencyCreditApplicationData(response?.data);
      })
      .catch((e) => setError(`${e}`));
  }, [data]);
  const showSession = () => {
    if (status === "authenticated") {
      return (
        <div className="min-h-screen rounded-sm border text-black border-stroke bg-white/80 bg-blend-screen bg-[url('/images/global-v1-640x480.jpg')] bg-cover px-6 py-6 shadow-default dark:border-strokedark dark:bg-white/60 sm:px-7.5">
          <LogoCard />
          <h3 className="text-xl font-medium py-3">
            Agency Credit Application
          </h3>
          <div className="p-10 rounded-md border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark dark:text-white">
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
              <div className="border-b-2 py-6">
                <p className="block font-medium text-xl p-2">
                  GENERAL INFORMATION
                </p>
                <div className="grid grid-cols-2 p-3">
                  <p className="col-span-1 block">Corporate Name</p>
                  <p className="md:col-span-1 col-span-1 ">
                    {agencyCreditApplicationData?.general_information
                      ?.corporate_name || "Enter Corporate Name"}
                  </p>
                </div>
                <div className="grid grid-cols-2 p-3">
                  <p className="col-span-1 block">DBA</p>
                  <p className="md:col-span-1 col-span-1 ">
                    {agencyCreditApplicationData?.general_information?.dba ||
                      "Enter DBA"}
                  </p>
                </div>
                <div className="grid grid-cols-2 p-3">
                  <p className="col-span-1 block">Year Founded</p>
                  <p className="md:col-span-1 col-span-1 ">
                    {agencyCreditApplicationData?.general_information
                      ?.year_founded || "Enter Year Founded"}
                  </p>
                </div>
                <div className="grid grid-cols-2 p-3">
                  <p className="col-span-1 block">
                    Corporate Hq Physical Address
                  </p>
                  <p className="md:col-span-1 col-span-1 ">
                    {agencyCreditApplicationData?.general_information
                      ?.corporate_hq_physical_address ||
                      "Enter Corporate HQ Physical Address"}
                  </p>
                </div>
                <div className="grid grid-cols-2 p-3">
                  <p className="col-span-1 block">Main Telephone</p>
                  <p className="md:col-span-1 col-span-1 ">
                    {agencyCreditApplicationData?.general_information
                      ?.main_telephone || "Enter Main Telephone"}
                  </p>
                </div>
                <div className="grid grid-cols-2 p-3">
                  <p className="col-span-1 block">Main Fax</p>
                  <p className="md:col-span-1 col-span-1 ">
                    {agencyCreditApplicationData?.general_information
                      ?.main_fax || "Enter Main Fax"}
                  </p>
                </div>
                <div className="grid grid-cols-2 p-3">
                  <p className="col-span-1 block">Main Email</p>
                  <p className="md:col-span-1 col-span-1 ">
                    {agencyCreditApplicationData?.general_information
                      ?.main_email || "Enter Main Email"}
                  </p>
                </div>
                <div className="grid grid-cols-2 p-3">
                  <p className="col-span-1 block">Mailing Address</p>
                  <p className="md:col-span-1 col-span-1 ">
                    {agencyCreditApplicationData?.general_information
                      ?.mailing_address || "Enter Mailing Address"}
                  </p>
                </div>
              </div>

              <div className="border-b-2 py-6">
                <p className="block font-medium text-xl mt-6">
                  BANK INFORMATION
                </p>
                <div className="grid grid-cols-2 p-3">
                  <p className="col-span-1 block">Bank Name</p>
                  <p className="md:col-span-1 col-span-1 ">
                    {agencyCreditApplicationData?.bank_information?.bank_name ||
                      "Enter Bank Name"}
                  </p>
                </div>
                <div className="grid grid-cols-2 p-3">
                  <p className="col-span-1 block">Bank Address</p>
                  <p className="md:col-span-1 col-span-1 ">
                    {agencyCreditApplicationData?.bank_information
                      ?.bank_address || "Enter Bank Address"}
                  </p>
                </div>
                <div className="grid grid-cols-2 p-3">
                  <p className="col-span-1 block">Account No.</p>
                  <p className="md:col-span-1 col-span-1 ">
                    {agencyCreditApplicationData?.bank_information
                      ?.account_no || "Enter Account No."}
                  </p>
                </div>
                <div className="grid grid-cols-2 p-3">
                  <p className="col-span-1 block">Telephone</p>
                  <p className="md:col-span-1 col-span-1 ">
                    {agencyCreditApplicationData?.bank_information?.telephone ||
                      "Enter Telephone"}
                  </p>
                </div>
                <div className="grid grid-cols-2 p-3">
                  <p className="col-span-1 block">Fax</p>
                  <p className="md:col-span-1 col-span-1 ">
                    {agencyCreditApplicationData?.bank_information?.fax ||
                      "Enter Fax"}
                  </p>
                </div>
                <div className="grid grid-cols-2 p-3">
                  <p className="col-span-1 block">Email</p>
                  <p className="md:col-span-1 col-span-1 ">
                    {agencyCreditApplicationData?.bank_information?.email ||
                      "Enter Email"}
                  </p>
                </div>
              </div>

              <div className="border-b-2 py-6">
                <table className="w-full mt-6">
                  <thead>
                    <tr>
                      <th className="text-start font-medium text-xl">
                        BRANCH LOCATIONS
                      </th>
                      <th className="text-start font-medium text-xl">
                        ACCOUNTING CONTACT (NAME & EMAIL)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-start">
                    {agencyCreditApplicationData?.branch_info !== undefined ? (
                      agencyCreditApplicationData?.branch_info?.map(
                        (branchInfo, index) => (
                          <tr key={index}>
                            <td className="align-top">
                              {branchInfo.branch_location || (
                                <span className="border-b-2 border-dotted border-red text-xs">
                                  NO DATA FOUND
                                </span>
                              )}
                            </td>
                            <td>
                              {"Name: " +
                                branchInfo.accounting_contact.name || (
                                <span className="border-b-2 border-dotted border-red text-xs">
                                  NO DATA FOUND
                                </span>
                              )}{" "}
                              <br />
                              {"Email: " +
                                branchInfo.accounting_contact.email || (
                                <span className="border-b-2 border-dotted border-red text-xs">
                                  NO DATA FOUND
                                </span>
                              )}
                            </td>
                          </tr>
                        )
                      )
                    ) : (
                      <tr>
                        <td>
                          <span className="border-b-2 align-top border-dotted border-red text-xs">
                            NO DATA FOUND
                          </span>
                        </td>
                        <td>
                          Name:{" "}
                          <span className="border-b-2 border-dotted border-red text-xs">
                            NO DATA FOUND
                          </span>
                          <br />
                          Email:{" "}
                          <span className="border-b-2 border-dotted border-red text-xs">
                            NO DATA FOUND
                          </span>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              <p className="block font-medium text-xl mt-6">
                TRADE REFERENCE INFORMATION
              </p>
              <p className="block font-medium text-sm mt-2">
                (PLEASE INCLUDE TEL, FAX, CONTACT, EMAIL, AND ACCT NO. IF
                APPLICABLE) *MIN 3 REQUIRED*
              </p>
              {agencyCreditApplicationData?.trade_reference_information !==
              undefined ? (
                agencyCreditApplicationData?.trade_reference_information?.map(
                  (data, index) => (
                    <div key={index} className="border-b-2">
                      <div className="grid grid-cols-2 p-3">
                        <p className="col-span-1 block">Name</p>
                        <p className="md:col-span-1 col-span-1 ">
                          {data.name || "Enter Name"}
                        </p>
                      </div>
                      <div className="grid grid-cols-2 p-3">
                        <p className="col-span-1 block">Address</p>
                        <p className="md:col-span-1 col-span-1 ">
                          {data.address || "Enter Address"}
                        </p>
                      </div>
                      <div className="grid grid-cols-2 p-3">
                        <p className="col-span-1 block">Telephone</p>
                        <p className="md:col-span-1 col-span-1 ">
                          {data.telephone || "Enter Telephone"}
                        </p>
                      </div>
                      <div className="grid grid-cols-2 p-3">
                        <p className="col-span-1 block">Fax</p>
                        <p className="md:col-span-1 col-span-1 ">
                          {data.fax || "Enter Fax"}
                        </p>
                      </div>
                      <div className="grid grid-cols-2 p-3">
                        <p className="col-span-1 block">Email</p>
                        <p className="md:col-span-1 col-span-1 ">
                          {data.email || "Enter Email"}
                        </p>
                      </div>
                      <div className="grid grid-cols-2 p-3">
                        <p className="col-span-1 block">Account No.</p>
                        <p className="md:col-span-1 col-span-1 ">
                          {data.account_number || "Enter Account No."}
                        </p>
                      </div>
                    </div>
                  )
                )
              ) : (
                <div className="border-b-2 py-6">
                  <div className="grid grid-cols-2 p-3">
                    <p className="col-span-1 block">Name</p>
                    <p className="md:col-span-1 col-span-1">
                      <span className="border-b-2 border-dotted border-red text-xs">
                        NO DATA FOUND
                      </span>
                    </p>
                  </div>
                  <div className="grid grid-cols-2 p-3">
                    <p className="col-span-1 block">Address</p>
                    <p className="md:col-span-1 col-span-1">
                      <span className="border-b-2 border-dotted border-red text-xs">
                        NO DATA FOUND
                      </span>
                    </p>
                  </div>
                  <div className="grid grid-cols-2 p-3">
                    <p className="col-span-1 block">Telephone</p>
                    <p className="md:col-span-1 col-span-1">
                      <span className="border-b-2 border-dotted border-red text-xs">
                        NO DATA FOUND
                      </span>
                    </p>
                  </div>
                  <div className="grid grid-cols-2 p-3">
                    <p className="col-span-1 block">Fax</p>
                    <p className="md:col-span-1 col-span-1">
                      <span className="border-b-2 border-dotted border-red text-xs">
                        NO DATA FOUND
                      </span>
                    </p>
                  </div>
                  <div className="grid grid-cols-2 p-3">
                    <p className="col-span-1 block">Email</p>
                    <p className="md:col-span-1 col-span-1">
                      <span className="border-b-2 border-dotted border-red text-xs">
                        NO DATA FOUND
                      </span>
                    </p>
                  </div>
                  <div className="grid grid-cols-2 p-3">
                    <p className="col-span-1 block">Account No.</p>
                    <p className="md:col-span-1 col-span-1">
                      <span className="border-b-2 border-dotted border-red text-xs">
                        NO DATA FOUND
                      </span>
                    </p>
                  </div>
                </div>
              )}

              <div className="border-b-2 py-6">
                <p className="block font-medium text-xl mt-6">
                  VOLUME & REVENUE
                </p>
                <div className="grid grid-cols-2 p-3">
                  <p className="col-span-1 block">
                    Expected Annual Airfreight Volume
                  </p>
                  <p className="md:col-span-1 col-span-1 ">
                    {agencyCreditApplicationData?.volume_and_revenue
                      ?.expected_annual_air_frieght_volume ||
                      "Enter Expected Annual Airfreight Volume"}
                  </p>
                </div>
                <div className="grid grid-cols-2 p-3">
                  <p className="col-span-1 block">
                    Expected Annual Ocean Freight Volume
                  </p>
                  <p className="md:col-span-1 col-span-1 ">
                    {agencyCreditApplicationData?.volume_and_revenue
                      ?.expected_annual_ocean_frieght_volume ||
                      "Enter Expected Annual Ocean Freight Volume"}
                  </p>
                </div>
                <div className="grid grid-cols-2 p-3">
                  <p className="col-span-1 block">Expected Annual Revenue</p>
                  <p className="md:col-span-1 col-span-1 ">
                    {agencyCreditApplicationData?.volume_and_revenue
                      ?.expected_annual_revenue ||
                      "Enter Expected Annual Revenue"}
                  </p>
                </div>
              </div>

              <div className="border-b-2 py-6">
                <p className="block font-medium text-xl mt-6">
                  ACCOUNT DETAILS
                </p>
                <div className="grid grid-cols-2 p-3">
                  <p className="col-span-1 block">
                    Who Is The Primary Accounting Contact?
                  </p>
                  <p className="md:col-span-1 col-span-1 ">
                    {agencyCreditApplicationData?.account_details
                      ?.who_is_the_primary_accounting_contact ||
                      "Enter Primary Accounting Contact"}
                  </p>
                </div>
                <div className="grid grid-cols-2 p-3">
                  <p className="col-span-1 block">
                    What Are Your Payment Terms?
                  </p>
                  <p className="md:col-span-1 col-span-1 ">
                    {agencyCreditApplicationData?.account_details
                      ?.what_are_your_payment_terms || "Enter Payment Terms"}
                  </p>
                </div>
                <div className="grid grid-cols-2 p-3">
                  <p className="col-span-1 block">
                    Do You Have Any Invoicing Requirements?
                  </p>
                  <p className="md:col-span-1 col-span-1 ">
                    {agencyCreditApplicationData?.account_details
                      ?.do_you_have_any_invoicing_requirements ||
                      "Enter Any Invoicing Requirements"}
                  </p>
                </div>
                <div className="grid grid-cols-2 p-3">
                  <p className="col-span-1 block">
                    Do You Accept You Invoices Via Email?
                  </p>
                  <p className="md:col-span-1 col-span-1 ">
                    {agencyCreditApplicationData?.account_details
                      ?.do_you_accept_you_invoices_via_email ||
                      "Do You Accept You Invoices Via Email"}
                  </p>
                </div>
              </div>

              <div className="border-b-2 py-6">
                <p className="block font-medium text-xl mt-6">
                  NOTES OR ADDITIONAL INFORMATION
                </p>
                <div className="grid grid-cols-2 p-3">
                  <p className="md:col-span-1 col-span-1 ">
                    {agencyCreditApplicationData?.notes_or_additional_information ||
                      "Enter Notes Or Additional Information"}
                  </p>
                </div>
              </div>

              <div className="border-b-2 py-6">
                <p className="block text-md m-6">
                  I Hearby Authorize The Release Of Credit Information To
                  Priority Worldwide. Payment Terms Are Net 30 Days. Payments
                  Not Received Within 30 Days Will Be Subject To Finance
                  Charges. By Signature Below, I Acknowledge That I Have Read
                  And Accept Priority Worldwide’S Terms & Conditions Of Contract
                  And That In The Event Of Legal Action Is Instituted To Enforce
                  Collection, Agree To Pay Reasonable Attorney’S Fees And Costs
                  For Such Action.
                </p>
              </div>

              <div className="border-b-2 py-6">
                <div className="grid grid-cols-2 p-3">
                  <p className="col-span-1 block">Printed Name</p>
                  <p className="md:col-span-1 col-span-1 ">
                    {agencyCreditApplicationData?.printed_name ||
                      "Enter Printed Name"}
                  </p>
                </div>
                <div className="grid grid-cols-2 p-3">
                  <p className="col-span-1 block">Signature</p>
                  <p className="md:col-span-1 col-span-1 ">
                    {agencyCreditApplicationData?.signature ||
                      "Enter Signature"}
                  </p>
                  <span className="text-xs">
                    (must be an officer or controlling member)
                  </span>
                </div>

                <div className="grid grid-cols-2 p-3">
                  <p className="col-span-1 block">Title</p>
                  <p className="md:col-span-1 col-span-1 ">
                    {agencyCreditApplicationData?.title || "Enter Title"}
                  </p>
                </div>

                <div className="grid grid-cols-2 p-3">
                  <p className="col-span-1 block">Date</p>
                  <p className="md:col-span-1 col-span-1 ">
                    {formattedDate(
                      agencyCreditApplicationData?.created_at as Date
                    ) || "Enter Date"}
                  </p>
                </div>
              </div>
              <p className="block text-sm m-9 text-center font-semibold">
                PLEASE EMAIL THE COMPLETED APPLICATION TO
                ACCOUNTING@PRIORITYWORLDWIDE.COM
              </p>

              <div className="my-6 flex justify-between items-center gap-4">
                <input
                  type="submit"
                  value="Submit"
                  className="w-full cursor-pointer rounded-lg hover:bg-[#fdc82e]/90 dark:bg-white/30 dark:hover:bg-white/60 bg-meta-4/60 text-white p-3 hover:text-meta-4 transition"
                />
              </div>
              <div className="mt-6 text-center">
                <p>
                  <Link
                    href="/vendor-profile/agency-credit-application"
                    className="text-red"
                  >
                    Cancel
                  </Link>
                </p>
              </div>
            </div>
          </div>
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
