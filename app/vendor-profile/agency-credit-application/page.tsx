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
import { getAgencyCreditApplication } from "actions/agency-credit-application";

export default function Home() {
  const [error, setError] = useState("");
  const router = useRouter();
  const [success, setsuccess] = useState<string>("");
  const [agencyCreditApplicationData, setAgencyCreditApplicationData] =
    useState<type_of_agency_credit_application>();
  const { status, data } = useSession();
  const ref = useRef<HTMLFormElement>(null);
  const [checkIfAnswered, setcheckIfAnswered] = useState<string>("loading");

  useEffect(() => {
    async function fetchData() {
      return await getAgencyCreditApplication(data?.user?.id);
    }
    fetchData()
      .then((response) => {
        setcheckIfAnswered(response?.success);
        setAgencyCreditApplicationData(response?.data);
      })
      .catch((e) => setError(`${e}`));
  }, [data]);

  const showSession = () => {
    if (status === "authenticated") {
      if (checkIfAnswered === "success") {
        return (
          <div className="min-h-screen rounded-sm border text-black border-stroke bg-white/80 bg-blend-lighten bg-[url('/images/global-v1-640x480.jpg')] px-6 py-6 shadow-default dark:border-strokedark dark:bg-white/60 sm:px-7.5">
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
                        ?.corporate_name || (
                        <span className="border-b-2 border-dotted border-red text-xs">
                          NO DATA FOUND
                        </span>
                      )}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 p-3">
                    <p className="col-span-1 block">DBA</p>
                    <p className="md:col-span-1 col-span-1 ">
                      {agencyCreditApplicationData?.general_information
                        ?.dba || (
                        <span className="border-b-2 border-dotted border-red text-xs">
                          NO DATA FOUND
                        </span>
                      )}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 p-3">
                    <p className="col-span-1 block">Year Founded</p>
                    <p className="md:col-span-1 col-span-1 ">
                      {agencyCreditApplicationData?.general_information
                        ?.year_founded || (
                        <span className="border-b-2 border-dotted border-red text-xs">
                          NO DATA FOUND
                        </span>
                      )}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 p-3">
                    <p className="col-span-1 block">
                      Corporate Hq Physical Address
                    </p>
                    <p className="md:col-span-1 col-span-1 ">
                      {agencyCreditApplicationData?.general_information
                        ?.corporate_hq_physical_address || (
                        <span className="border-b-2 border-dotted border-red text-xs">
                          NO DATA FOUND
                        </span>
                      )}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 p-3">
                    <p className="col-span-1 block">Main Telephone</p>
                    <p className="md:col-span-1 col-span-1 ">
                      {agencyCreditApplicationData?.general_information
                        ?.main_telephone || (
                        <span className="border-b-2 border-dotted border-red text-xs">
                          NO DATA FOUND
                        </span>
                      )}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 p-3">
                    <p className="col-span-1 block">Main Fax</p>
                    <p className="md:col-span-1 col-span-1 ">
                      {agencyCreditApplicationData?.general_information
                        ?.main_fax || (
                        <span className="border-b-2 border-dotted border-red text-xs">
                          NO DATA FOUND
                        </span>
                      )}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 p-3">
                    <p className="col-span-1 block">Main Email</p>
                    <p className="md:col-span-1 col-span-1 ">
                      {agencyCreditApplicationData?.general_information
                        ?.main_email || (
                        <span className="border-b-2 border-dotted border-red text-xs">
                          NO DATA FOUND
                        </span>
                      )}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 p-3">
                    <p className="col-span-1 block">Mailing Address</p>
                    <p className="md:col-span-1 col-span-1 ">
                      {agencyCreditApplicationData?.general_information
                        ?.mailing_address || (
                        <span className="border-b-2 border-dotted border-red text-xs">
                          NO DATA FOUND
                        </span>
                      )}
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
                      {agencyCreditApplicationData?.bank_information
                        ?.bank_name || (
                        <span className="border-b-2 border-dotted border-red text-xs">
                          NO DATA FOUND
                        </span>
                      )}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 p-3">
                    <p className="col-span-1 block">Bank Address</p>
                    <p className="md:col-span-1 col-span-1 ">
                      {agencyCreditApplicationData?.bank_information
                        ?.bank_address || (
                        <span className="border-b-2 border-dotted border-red text-xs">
                          NO DATA FOUND
                        </span>
                      )}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 p-3">
                    <p className="col-span-1 block">Account No.</p>
                    <p className="md:col-span-1 col-span-1 ">
                      {agencyCreditApplicationData?.bank_information
                        ?.account_no || (
                        <span className="border-b-2 border-dotted border-red text-xs">
                          NO DATA FOUND
                        </span>
                      )}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 p-3">
                    <p className="col-span-1 block">Telephone</p>
                    <p className="md:col-span-1 col-span-1 ">
                      {agencyCreditApplicationData?.bank_information
                        ?.telephone || (
                        <span className="border-b-2 border-dotted border-red text-xs">
                          NO DATA FOUND
                        </span>
                      )}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 p-3">
                    <p className="col-span-1 block">Fax</p>
                    <p className="md:col-span-1 col-span-1 ">
                      {agencyCreditApplicationData?.bank_information?.fax || (
                        <span className="border-b-2 border-dotted border-red text-xs">
                          NO DATA FOUND
                        </span>
                      )}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 p-3">
                    <p className="col-span-1 block">Email</p>
                    <p className="md:col-span-1 col-span-1 ">
                      {agencyCreditApplicationData?.bank_information?.email || (
                        <span className="border-b-2 border-dotted border-red text-xs">
                          NO DATA FOUND
                        </span>
                      )}
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
                      {agencyCreditApplicationData?.branch_info !==
                      undefined ? (
                        agencyCreditApplicationData?.branch_info?.map(
                          (branchInfo, index) => (
                            <tr key={index}>
                              <td className="align-top pt-6">
                                {branchInfo.branch_location || (
                                  <span className="border-b-2 border-dotted border-red text-xs p-3">
                                    NO DATA FOUND
                                  </span>
                                )}
                              </td>
                              <td className="align-top pt-6">
                                {"Name: " +
                                  branchInfo.accounting_contact.name || (
                                  <span className="border-b-2 border-dotted border-red text-xs p-3">
                                    NO DATA FOUND
                                  </span>
                                )}{" "}
                                <br />
                                {"Email: " +
                                  branchInfo.accounting_contact.email || (
                                  <span className="border-b-2 border-dotted border-red text-xs p-3">
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
                            <span>Name: </span>
                            <span className="border-b-2 border-dotted border-red text-xs">
                              NO DATA FOUND
                            </span>
                            <br />
                            <span>Email: </span>
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
                            {data.name || (
                              <span className="border-b-2 border-dotted border-red text-xs">
                                NO DATA FOUND
                              </span>
                            )}
                          </p>
                        </div>
                        <div className="grid grid-cols-2 p-3">
                          <p className="col-span-1 block">Address</p>
                          <p className="md:col-span-1 col-span-1 ">
                            {data.address || (
                              <span className="border-b-2 border-dotted border-red text-xs">
                                NO DATA FOUND
                              </span>
                            )}
                          </p>
                        </div>
                        <div className="grid grid-cols-2 p-3">
                          <p className="col-span-1 block">Telephone</p>
                          <p className="md:col-span-1 col-span-1 ">
                            {data.telephone || (
                              <span className="border-b-2 border-dotted border-red text-xs">
                                NO DATA FOUND
                              </span>
                            )}
                          </p>
                        </div>
                        <div className="grid grid-cols-2 p-3">
                          <p className="col-span-1 block">Fax</p>
                          <p className="md:col-span-1 col-span-1 ">
                            {data.fax || (
                              <span className="border-b-2 border-dotted border-red text-xs">
                                NO DATA FOUND
                              </span>
                            )}
                          </p>
                        </div>
                        <div className="grid grid-cols-2 p-3">
                          <p className="col-span-1 block">Email</p>
                          <p className="md:col-span-1 col-span-1 ">
                            {data.email || (
                              <span className="border-b-2 border-dotted border-red text-xs">
                                NO DATA FOUND
                              </span>
                            )}
                          </p>
                        </div>
                        <div className="grid grid-cols-2 p-3">
                          <p className="col-span-1 block">Account No.</p>
                          <p className="md:col-span-1 col-span-1 ">
                            {data.account_number || (
                              <span className="border-b-2 border-dotted border-red text-xs">
                                NO DATA FOUND
                              </span>
                            )}
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
                        ?.expected_annual_air_frieght_volume || (
                        <span className="border-b-2 border-dotted border-red text-xs">
                          NO DATA FOUND
                        </span>
                      )}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 p-3">
                    <p className="col-span-1 block">
                      Expected Annual Ocean Freight Volume
                    </p>
                    <p className="md:col-span-1 col-span-1 ">
                      {agencyCreditApplicationData?.volume_and_revenue
                        ?.expected_annual_ocean_frieght_volume || (
                        <span className="border-b-2 border-dotted border-red text-xs">
                          NO DATA FOUND
                        </span>
                      )}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 p-3">
                    <p className="col-span-1 block">Expected Annual Revenue</p>
                    <p className="md:col-span-1 col-span-1 ">
                      {agencyCreditApplicationData?.volume_and_revenue
                        ?.expected_annual_revenue || (
                        <span className="border-b-2 border-dotted border-red text-xs">
                          NO DATA FOUND
                        </span>
                      )}
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
                        ?.who_is_the_primary_accounting_contact || (
                        <span className="border-b-2 border-dotted border-red text-xs">
                          NO DATA FOUND
                        </span>
                      )}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 p-3">
                    <p className="col-span-1 block">
                      What Are Your Payment Terms?
                    </p>
                    <p className="md:col-span-1 col-span-1 ">
                      {agencyCreditApplicationData?.account_details
                        ?.what_are_your_payment_terms || (
                        <span className="border-b-2 border-dotted border-red text-xs">
                          NO DATA FOUND
                        </span>
                      )}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 p-3">
                    <p className="col-span-1 block">
                      Do You Have Any Invoicing Requirements?
                    </p>
                    <p className="md:col-span-1 col-span-1 ">
                      {agencyCreditApplicationData?.account_details
                        ?.do_you_have_any_invoicing_requirements || (
                        <span className="border-b-2 border-dotted border-red text-xs">
                          NO DATA FOUND
                        </span>
                      )}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 p-3">
                    <p className="col-span-1 block">
                      Do You Accept You Invoices Via Email?
                    </p>
                    <p className="md:col-span-1 col-span-1 ">
                      {agencyCreditApplicationData?.account_details
                        ?.do_you_accept_you_invoices_via_email || (
                        <span className="border-b-2 border-dotted border-red text-xs">
                          NO DATA FOUND
                        </span>
                      )}
                    </p>
                  </div>
                </div>
                <div className="border-b-2 py-6">
                  <p className="block font-medium text-xl mt-6">
                    ADDITIONAL COMPANY DETAILS
                  </p>
                  <div className="grid grid-cols-2 p-3">
                    <p className="col-span-1 block">
                      Current Agency Network Memberships
                    </p>
                    <p>
                      {(agencyCreditApplicationData?.additional_company_details
                        ?.current_agency_network_memberships as string) ||
                        "Enter Current Agency Network Memberships"}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 p-3">
                    <p className="col-span-1 block">
                      Country Specific Requirements
                    </p>
                    <p>
                      {(agencyCreditApplicationData?.additional_company_details
                        ?.country_specific_requirements as string) ||
                        "Enter Country Specific Requirements"}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 p-3">
                    <p className="col-span-1 block">
                      How Were You Referred To PWS?
                    </p>
                    <p>
                      {(agencyCreditApplicationData?.additional_company_details
                        ?.how_were_you_referred_to_pws as string) ||
                        "How Were You Referred To PWS?"}
                    </p>
                  </div>
                </div>
                <div className="border-b-2 py-6">
                  <p className="block font-medium text-xl mt-6">
                    NOTES OR ADDITIONAL INFORMATION
                  </p>
                  <div className="grid grid-cols-2 p-3">
                    <p className="md:col-span-1 col-span-1 ">
                      {agencyCreditApplicationData?.notes_or_additional_information || (
                        <span className="border-b-2 border-dotted border-red text-xs">
                          NO DATA FOUND
                        </span>
                      )}
                    </p>
                  </div>
                </div>

                <div className="border-b-2 py-6">
                  <p className="block text-md m-6">
                    I Hearby Authorize The Release Of Credit Information To
                    Priority Worldwide. Payment Terms Are Net 30 Days. Payments
                    Not Received Within 30 Days Will Be Subject To Finance
                    Charges. By Signature Below, I Acknowledge That I Have Read
                    And Accept Priority Worldwide’S Terms & Conditions Of
                    Contract And That In The Event Of Legal Action Is Instituted
                    To Enforce Collection, Agree To Pay Reasonable Attorney’S
                    Fees And Costs For Such Action.
                  </p>
                </div>

                <div className="border-b-2 py-6">
                  <div className="grid grid-cols-2 p-3">
                    <p className="col-span-1 block">Printed Name</p>
                    <p className="md:col-span-1 col-span-1 ">
                      {agencyCreditApplicationData?.printed_name || (
                        <span className="border-b-2 border-dotted border-red text-xs">
                          NO DATA FOUND
                        </span>
                      )}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 p-3">
                    <p className="col-span-1 block">Signature</p>
                    <p className="md:col-span-1 col-span-1 ">
                      {agencyCreditApplicationData?.signature || (
                        <span className="border-b-2 border-dotted border-red text-xs">
                          NO DATA FOUND
                        </span>
                      )}
                    </p>
                    <span className="text-xs">
                      (must be an officer or controlling member)
                    </span>
                  </div>

                  <div className="grid grid-cols-2 p-3">
                    <p className="col-span-1 block">Title</p>
                    <p className="md:col-span-1 col-span-1 ">
                      {agencyCreditApplicationData?.title || (
                        <span className="border-b-2 border-dotted border-red text-xs">
                          NO DATA FOUND
                        </span>
                      )}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 p-3">
                    <p className="col-span-1 block">Date</p>
                    <p className="md:col-span-1 col-span-1 ">
                      {formattedDate(
                        agencyCreditApplicationData?.created_at as Date
                      ) || (
                        <span className="border-b-2 border-dotted border-red text-xs">
                          NO DATA FOUND
                        </span>
                      )}
                    </p>
                  </div>
                </div>
                <>
                  <Link
                    href="/vendor-profile/agency-credit-application/edit"
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
            </div>
          </div>
        );
      } else if (checkIfAnswered === "failed") {
        router.push("/vendor-profile/agency-credit-application/edit");
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
