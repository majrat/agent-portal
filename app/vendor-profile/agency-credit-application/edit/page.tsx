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
import {
  getAgencyCreditApplication,
  setAgencyCreditApplication,
} from "actions/agency-credit-application";

export default function Home() {
  const [error, setError] = useState("");
  const router = useRouter();
  const [success, setsuccess] = useState<string>("");
  const [agencyCreditApplicationData, setAgencyCreditApplicationData] =
    useState<type_of_agency_credit_application>();
  const { status, data } = useSession();
  const ref = useRef<HTMLFormElement>(null);
  const [branchInfo, setBranchInfo] = useState(0);

  const handleSubmit = async (formData: FormData) => {
    const submit_data = {
      general_information: {
        corporate_name: formData.get("corporate_name"),
        dba: formData.get("dba"),
        year_founded: formData.get("year_founded"),
        corporate_hq_physical_address: formData.get(
          "corporate_hq_physical_address"
        ),
        main_telephone: formData.get("main_telephone"),
        main_fax: formData.get("main_fax"),
        main_email: formData.get("main_email"),
        mailing_address: formData.get("mailing_address"),
      },
      bank_information: {
        bank_name: formData.get("bank_name"),
        bank_address: formData.get("bank_address"),
        account_no: formData.get("account_no"),
        telephone: formData.get("telephone"),
        fax: formData.get("fax"),
        email: formData.get("email"),
      },
      branch_info: [
        {
          branch_location: formData.get("branch_location_1"),
          accounting_contact: {
            name: formData.get("accounting_contact_name_1"),
            email: formData.get("accounting_contact_email_1"),
          },
        },
        {
          branch_location: formData.get("branch_location_2"),
          accounting_contact: {
            name: formData.get("accounting_contact_name_2"),
            email: formData.get("accounting_contact_email_2"),
          },
        },
        {
          branch_location: formData.get("branch_location_3"),
          accounting_contact: {
            name: formData.get("accounting_contact_name_3"),
            email: formData.get("accounting_contact_email_3"),
          },
        },
        {
          branch_location: formData.get("branch_location_4"),
          accounting_contact: {
            name: formData.get("accounting_contact_name_4"),
            email: formData.get("accounting_contact_email_4"),
          },
        },
      ],
      trade_reference_information: [
        {
          name: formData.get("trade_reference_information_name_1"),
          address: formData.get("trade_reference_information_address_1"),
          telephone: formData.get("trade_reference_information_telephone_1"),
          fax: formData.get("trade_reference_information_fax_1"),
          email: formData.get("trade_reference_information_email_1"),
          account_number: formData.get(
            "trade_reference_information_account_no_1"
          ),
        },
        {
          name: formData.get("trade_reference_information_name_2"),
          address: formData.get("trade_reference_information_address_2"),
          telephone: formData.get("trade_reference_information_telephone_2"),
          fax: formData.get("trade_reference_information_fax_2"),
          email: formData.get("trade_reference_information_email_2"),
          account_number: formData.get(
            "trade_reference_information_account_no_2"
          ),
        },
        {
          name: formData.get("trade_reference_information_name_3"),
          address: formData.get("trade_reference_information_address_3"),
          telephone: formData.get("trade_reference_information_telephone_3"),
          fax: formData.get("trade_reference_information_fax_3"),
          email: formData.get("trade_reference_information_email_3"),
          account_number: formData.get(
            "trade_reference_information_account_no_3"
          ),
        },
        {
          name: formData.get("trade_reference_information_name_4"),
          address: formData.get("trade_reference_information_address_4"),
          telephone: formData.get("trade_reference_information_telephone_4"),
          fax: formData.get("trade_reference_information_fax_4"),
          email: formData.get("trade_reference_information_email_4"),
          account_number: formData.get(
            "trade_reference_information_account_no_4"
          ),
        },
      ],
      volume_and_revenue: {
        expected_annual_air_frieght_volume: formData.get(
          "expected_annual_air_frieght_volume"
        ),
        expected_annual_ocean_frieght_volume: formData.get(
          "expected_annual_ocean_frieght_volume"
        ),
        expected_annual_revenue: formData.get("expected_annual_revenue"),
      },
      account_details: {
        who_is_the_primary_accounting_contact: formData.get(
          "who_is_the_primary_accounting_contact"
        ),
        what_are_your_payment_terms: formData.get(
          "what_are_your_payment_terms"
        ),
        do_you_have_any_invoicing_requirements: formData.get(
          "do_you_have_any_invoicing_requirements"
        ),
        do_you_accept_you_invoices_via_email: formData.get(
          "do_you_accept_you_invoices_via_email"
        ),
      },
      additional_company_details: {
        current_agency_network_memberships: formData.get(
          "current_agency_network_memberships"
        ),
        country_specific_requirements: formData.get(
          "country_specific_requirements"
        ),
        how_were_you_referred_to_pws: formData.get(
          "how_were_you_referred_to_pws"
        ),
      },
      notes_or_additional_information: formData.get(
        "notes_or_additional_information"
      ),
      printed_name: formData.get("printed_name"),
      signature: formData.get("signature"),
      title: formData.get("title"),
    };

    const r = await setAgencyCreditApplication(
      submit_data as unknown as type_of_agency_credit_application,
      data?.user?.id
    );
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
      return await getAgencyCreditApplication(data?.user?.id);
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
        <div className="min-h-screen rounded-sm border text-black border-stroke bg-white/80 bg-blend-screen bg-[url('/images/global-v1-640x480.jpg')] px-6 py-6 shadow-default dark:border-strokedark sm:px-7.5">
          <LogoCard />
          <h3 className="text-xl font-medium py-3">
            Agency Credit Application
          </h3>
          <div className="p-10 rounded-md border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark dark:text-white">
            <form action={handleSubmit} className="mb-4" autoComplete="off">
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
                  <input
                    type="text"
                    placeholder={
                      (agencyCreditApplicationData?.general_information
                        ?.corporate_name as string) || "Enter Corporate Name"
                    }
                    name="corporate_name"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:focus:border-[#fdc82e]"
                  />
                </div>
                <div className="grid grid-cols-2 p-3">
                  <p className="col-span-1 block">DBA</p>
                  <input
                    type="text"
                    placeholder={
                      (agencyCreditApplicationData?.general_information
                        ?.dba as string) || "Enter DBA"
                    }
                    name="dba"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:focus:border-[#fdc82e]"
                  />
                </div>
                <div className="grid grid-cols-2 p-3">
                  <p className="col-span-1 block">Year Founded</p>
                  <input
                    type="text"
                    placeholder={
                      (agencyCreditApplicationData?.general_information
                        ?.year_founded as string) || "Enter Year Founded"
                    }
                    name="year_founded"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:focus:border-[#fdc82e]"
                  />
                </div>
                <div className="grid grid-cols-2 p-3">
                  <p className="col-span-1 block">
                    Corporate Hq Physical Address
                  </p>
                  <input
                    type="text"
                    placeholder={
                      (agencyCreditApplicationData?.general_information
                        ?.corporate_hq_physical_address as string) ||
                      "Enter Corporate HQ Physical Address"
                    }
                    name="corporate_hq_physical_address"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:focus:border-[#fdc82e]"
                  />
                </div>
                <div className="grid grid-cols-2 p-3">
                  <p className="col-span-1 block">Main Telephone</p>
                  <input
                    type="text"
                    placeholder={
                      (agencyCreditApplicationData?.general_information
                        ?.main_telephone as string) || "Enter Main Telephone"
                    }
                    name="main_telephone"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:focus:border-[#fdc82e]"
                  />
                </div>
                <div className="grid grid-cols-2 p-3">
                  <p className="col-span-1 block">Main Fax</p>
                  <input
                    type="text"
                    placeholder={
                      (agencyCreditApplicationData?.general_information
                        ?.main_fax as string) || "Enter Main Fax"
                    }
                    name="main_fax"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:focus:border-[#fdc82e]"
                  />
                </div>
                <div className="grid grid-cols-2 p-3">
                  <p className="col-span-1 block">Main Email</p>
                  <input
                    type="email"
                    placeholder={
                      (agencyCreditApplicationData?.general_information
                        ?.main_email as string) || "Enter Main Email"
                    }
                    name="main_email"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:focus:border-[#fdc82e]"
                  />
                </div>
                <div className="grid grid-cols-2 p-3">
                  <p className="col-span-1 block">Mailing Address</p>
                  <input
                    type="text"
                    placeholder={
                      (agencyCreditApplicationData?.general_information
                        ?.mailing_address as string) || "Enter Mailing Address"
                    }
                    name="mailing_address"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:focus:border-[#fdc82e]"
                  />
                </div>
              </div>

              <div className="border-b-2 py-6">
                <p className="block font-medium text-xl mt-6">
                  BANK INFORMATION
                </p>
                <div className="grid grid-cols-2 p-3">
                  <p className="col-span-1 block">Bank Name</p>
                  <input
                    type="text"
                    placeholder={
                      (agencyCreditApplicationData?.bank_information
                        ?.bank_name as string) || "Enter Bank Name"
                    }
                    name="bank_name"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:focus:border-[#fdc82e]"
                  />
                </div>
                <div className="grid grid-cols-2 p-3">
                  <p className="col-span-1 block">Bank Address</p>
                  <input
                    type="text"
                    placeholder={
                      (agencyCreditApplicationData?.bank_information
                        ?.bank_address as string) || "Enter Bank Address"
                    }
                    name="bank_address"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:focus:border-[#fdc82e]"
                  />
                </div>
                <div className="grid grid-cols-2 p-3">
                  <p className="col-span-1 block">Account No.</p>
                  <input
                    type="text"
                    placeholder={
                      (agencyCreditApplicationData?.bank_information
                        ?.account_no as string) || "Enter Account No."
                    }
                    name="account_no"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:focus:border-[#fdc82e]"
                  />
                </div>
                <div className="grid grid-cols-2 p-3">
                  <p className="col-span-1 block">Telephone</p>
                  <input
                    type="tel"
                    placeholder={
                      (agencyCreditApplicationData?.bank_information
                        ?.telephone as string) || "Enter Telephone"
                    }
                    name="telephone"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:focus:border-[#fdc82e]"
                  />
                </div>
                <div className="grid grid-cols-2 p-3">
                  <p className="col-span-1 block">Fax</p>
                  <input
                    type="tel"
                    placeholder={
                      (agencyCreditApplicationData?.bank_information
                        ?.fax as string) || "Enter Fax"
                    }
                    name="fax"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:focus:border-[#fdc82e]"
                  />
                </div>
                <div className="grid grid-cols-2 p-3">
                  <p className="col-span-1 block">Email</p>
                  <input
                    type="email"
                    placeholder={
                      (agencyCreditApplicationData?.bank_information
                        ?.email as string) || "Enter Email"
                    }
                    name="email"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:focus:border-[#fdc82e]"
                  />
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
                    {/* {agencyCreditApplicationData?.branch_info?.map(
                      (branchInfo, index) => (
                        <tr key={index}>
                          <td className="align-top">
                            <input
                              type="text"
                              placeholder={
                                (branchInfo.branch_location as string) ||
                                "Enter Branch Location"
                              }
                              name={"branch_location" + index}
                              className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:focus:border-[#fdc82e]"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              placeholder={
                                (branchInfo.accounting_contact
                                  .name as string) ||
                                "Enter Accounting Contact Name"
                              }
                              name={"accounting_contact_name" + index}
                              className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:focus:border-[#fdc82e]"
                            />
                            <br />
                            <input
                              type="text"
                              placeholder={
                                (branchInfo.accounting_contact
                                  .email as string) ||
                                "Enter Accounting Contact Email"
                              }
                              name={"accounting_contact_email" + index}
                              className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:focus:border-[#fdc82e]"
                            />
                          </td>
                        </tr>
                      )
                    )} */}

                    <tr>
                      <td className="align-top">
                        <input
                          type="text"
                          placeholder="Location"
                          name="branch_location_1"
                          className="w-full my-3 rounded-lg border border-stroke bg-transparent py-4 pl-2 md:px-6 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:focus:border-[#fdc82e]"
                        />
                        <input
                          type="text"
                          placeholder="Location"
                          name="branch_location_2"
                          className="w-full rounded-lg my-3 border border-stroke bg-transparent py-4 pl-2 md:px-6 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:focus:border-[#fdc82e]"
                        />
                        <input
                          type="text"
                          placeholder="Location"
                          name="branch_location_3"
                          className="w-full rounded-lg my-3 border border-stroke bg-transparent py-4 pl-2 md:px-6 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:focus:border-[#fdc82e]"
                        />
                        <input
                          type="text"
                          placeholder="Location"
                          name="branch_location_4"
                          className="w-full rounded-lg my-3 border border-stroke bg-transparent py-4 pl-2 md:px-6 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:focus:border-[#fdc82e]"
                        />
                      </td>
                      <td>
                        <div className="flex">
                          <input
                            type="text"
                            placeholder="Name"
                            name="accounting_contact_name_1"
                            className="w-full rounded-lg my-3 border border-stroke bg-transparent py-4 pl-2 md:px-6 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:focus:border-[#fdc82e]"
                          />
                          <input
                            type="text"
                            placeholder="Email"
                            name="accounting_contact_email_1"
                            className="w-full rounded-lg my-3 border border-stroke bg-transparent py-4 pl-2 md:px-6 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:focus:border-[#fdc82e]"
                          />
                        </div>
                        <div className="flex">
                          <input
                            type="text"
                            placeholder="Name"
                            name="accounting_contact_name_2"
                            className="w-full rounded-lg my-3 border border-stroke bg-transparent py-4 pl-2 md:px-6 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:focus:border-[#fdc82e]"
                          />
                          <input
                            type="text"
                            placeholder="Email"
                            name="accounting_contact_email_2"
                            className="w-full rounded-lg my-3 border border-stroke bg-transparent py-4 pl-2 md:px-6 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:focus:border-[#fdc82e]"
                          />
                        </div>
                        <div className="flex">
                          <input
                            type="text"
                            placeholder="Name"
                            name="accounting_contact_name_3"
                            className="w-full rounded-lg my-3 border border-stroke bg-transparent py-4 pl-2 md:px-6 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:focus:border-[#fdc82e]"
                          />
                          <input
                            type="text"
                            placeholder="Email"
                            name="accounting_contact_email_3"
                            className="w-full rounded-lg my-3 border border-stroke bg-transparent py-4 pl-2 md:px-6 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:focus:border-[#fdc82e]"
                          />
                        </div>
                        <div className="flex">
                          <input
                            type="text"
                            placeholder="Name"
                            name="accounting_contact_name_4"
                            className="w-full rounded-lg my-3 border border-stroke bg-transparent py-4 pl-2 md:px-6 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:focus:border-[#fdc82e]"
                          />
                          <input
                            type="text"
                            placeholder="Email"
                            name="accounting_contact_email_4"
                            className="w-full rounded-lg my-3 border border-stroke bg-transparent py-4 pl-2 md:px-6 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:focus:border-[#fdc82e]"
                          />
                        </div>
                      </td>
                    </tr>
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

              {/* {agencyCreditApplicationData?.trade_reference_information?.map(
                (data, index) => (
                  <div key={index} className="border-b-2">
                    <div className="grid grid-cols-2 p-3">
                      <p className="col-span-1 block">Name</p>
                      <td className="align-top">
                        <input
                          type="text"
                          placeholder={(data.name as string) || "Enter Name"}
                          name={"trade_reference_information_name" + index}
                          className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:focus:border-[#fdc82e]"
                        />
                      </td>
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
              )} */}

              <p>1</p>

              <div className="border-b-2 py-6">
                <div className="grid grid-cols-2 p-3">
                  <p className="col-span-1 block">Name</p>
                  <input
                    type="text"
                    placeholder="Enter Name"
                    name="trade_reference_information_name_1"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:focus:border-[#fdc82e]"
                  />
                </div>
                <div className="grid grid-cols-2 p-3">
                  <p className="col-span-1 block">Address</p>
                  <input
                    type="text"
                    placeholder="Enter Address"
                    name="trade_reference_information_address_1"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:focus:border-[#fdc82e]"
                  />
                </div>
                <div className="grid grid-cols-2 p-3">
                  <p className="col-span-1 block">Telephone</p>
                  <input
                    type="tel"
                    placeholder="Enter Telephone"
                    name="trade_reference_information_telephone_1"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:focus:border-[#fdc82e]"
                  />
                </div>
                <div className="grid grid-cols-2 p-3">
                  <p className="col-span-1 block">Fax</p>
                  <input
                    type="tel"
                    placeholder="Enter Fax"
                    name="trade_reference_information_fax_1"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:focus:border-[#fdc82e]"
                  />
                </div>
                <div className="grid grid-cols-2 p-3">
                  <p className="col-span-1 block">Email</p>
                  <input
                    type="email"
                    placeholder="Enter Email"
                    name="trade_reference_information_email_1"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:focus:border-[#fdc82e]"
                  />
                </div>
                <div className="grid grid-cols-2 p-3">
                  <p className="col-span-1 block">Account No.</p>
                  <input
                    type="text"
                    placeholder="Enter Account No."
                    name="trade_reference_information_account_no_1"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:focus:border-[#fdc82e]"
                  />
                </div>
              </div>

              <p>2</p>

              <div className="border-b-2 py-6">
                <div className="grid grid-cols-2 p-3">
                  <p className="col-span-1 block">Name</p>
                  <input
                    type="text"
                    placeholder="Enter Name"
                    name="trade_reference_information_name_2"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:focus:border-[#fdc82e]"
                  />
                </div>
                <div className="grid grid-cols-2 p-3">
                  <p className="col-span-1 block">Address</p>
                  <input
                    type="text"
                    placeholder="Enter Address"
                    name="trade_reference_information_address_2"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:focus:border-[#fdc82e]"
                  />
                </div>
                <div className="grid grid-cols-2 p-3">
                  <p className="col-span-1 block">Telephone</p>
                  <input
                    type="tel"
                    placeholder="Enter Telephone"
                    name="trade_reference_information_telephone_2"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:focus:border-[#fdc82e]"
                  />
                </div>
                <div className="grid grid-cols-2 p-3">
                  <p className="col-span-1 block">Fax</p>
                  <input
                    type="tel"
                    placeholder="Enter Fax"
                    name="trade_reference_information_fax_2"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:focus:border-[#fdc82e]"
                  />
                </div>
                <div className="grid grid-cols-2 p-3">
                  <p className="col-span-1 block">Email</p>
                  <input
                    type="email"
                    placeholder="Enter Email"
                    name="trade_reference_information_email_2"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:focus:border-[#fdc82e]"
                  />
                </div>
                <div className="grid grid-cols-2 p-3">
                  <p className="col-span-1 block">Account No.</p>
                  <input
                    type="text"
                    placeholder="Enter Account No."
                    name="trade_reference_information_account_no_2"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:focus:border-[#fdc82e]"
                  />
                </div>
              </div>

              <p>3</p>

              <div className="border-b-2 py-6">
                <div className="grid grid-cols-2 p-3">
                  <p className="col-span-1 block">Name</p>
                  <input
                    type="text"
                    placeholder="Enter Name"
                    name="trade_reference_information_name_3"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:focus:border-[#fdc82e]"
                  />
                </div>
                <div className="grid grid-cols-2 p-3">
                  <p className="col-span-1 block">Address</p>
                  <input
                    type="text"
                    placeholder="Enter Address"
                    name="trade_reference_information_address_3"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:focus:border-[#fdc82e]"
                  />
                </div>
                <div className="grid grid-cols-2 p-3">
                  <p className="col-span-1 block">Telephone</p>
                  <input
                    type="tel"
                    placeholder="Enter Telephone"
                    name="trade_reference_information_telephone_3"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:focus:border-[#fdc82e]"
                  />
                </div>
                <div className="grid grid-cols-2 p-3">
                  <p className="col-span-1 block">Fax</p>
                  <input
                    type="tel"
                    placeholder="Enter Fax"
                    name="trade_reference_information_fax_3"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:focus:border-[#fdc82e]"
                  />
                </div>
                <div className="grid grid-cols-2 p-3">
                  <p className="col-span-1 block">Email</p>
                  <input
                    type="email"
                    placeholder="Enter Email"
                    name="trade_reference_information_email_3"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:focus:border-[#fdc82e]"
                  />
                </div>
                <div className="grid grid-cols-2 p-3">
                  <p className="col-span-1 block">Account No.</p>
                  <input
                    type="text"
                    placeholder="Enter Account No."
                    name="trade_reference_information_account_no_3"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:focus:border-[#fdc82e]"
                  />
                </div>
              </div>

              <p>4</p>

              <div className="border-b-2 py-6">
                <div className="grid grid-cols-2 p-3">
                  <p className="col-span-1 block">Name</p>
                  <input
                    type="text"
                    placeholder="Enter Name"
                    name="trade_reference_information_name_4"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:focus:border-[#fdc82e]"
                  />
                </div>
                <div className="grid grid-cols-2 p-3">
                  <p className="col-span-1 block">Address</p>
                  <input
                    type="text"
                    placeholder="Enter Address"
                    name="trade_reference_information_address_4"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:focus:border-[#fdc82e]"
                  />
                </div>
                <div className="grid grid-cols-2 p-3">
                  <p className="col-span-1 block">Telephone</p>
                  <input
                    type="tel"
                    placeholder="Enter Telephone"
                    name="trade_reference_information_telephone_4"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:focus:border-[#fdc82e]"
                  />
                </div>
                <div className="grid grid-cols-2 p-3">
                  <p className="col-span-1 block">Fax</p>
                  <input
                    type="tel"
                    placeholder="Enter Fax"
                    name="trade_reference_information_fax_4"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:focus:border-[#fdc82e]"
                  />
                </div>
                <div className="grid grid-cols-2 p-3">
                  <p className="col-span-1 block">Email</p>
                  <input
                    type="email"
                    placeholder="Enter Email"
                    name="trade_reference_information_email_4"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:focus:border-[#fdc82e]"
                  />
                </div>
                <div className="grid grid-cols-2 p-3">
                  <p className="col-span-1 block">Account No.</p>
                  <input
                    type="text"
                    placeholder="Enter Account No."
                    name="trade_reference_information_account_no_4"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:focus:border-[#fdc82e]"
                  />
                </div>
              </div>

              <div className="border-b-2 py-6">
                <p className="block font-medium text-xl mt-6">
                  VOLUME & REVENUE
                </p>
                <div className="grid grid-cols-2 p-3">
                  <p className="col-span-1 block">
                    Expected Annual Airfreight Volume
                  </p>
                  <input
                    type="text"
                    placeholder={
                      (agencyCreditApplicationData?.volume_and_revenue
                        ?.expected_annual_air_frieght_volume as string) ||
                      "Enter Expected Annual Airfreight Volume"
                    }
                    name="expected_annual_air_frieght_volume"
                    className="col-span-1 w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:focus:border-[#fdc82e]"
                  />
                </div>
                <div className="grid grid-cols-2 p-3">
                  <p className="col-span-1 block">
                    Expected Annual Ocean Freight Volume
                  </p>
                  <input
                    type="text"
                    placeholder={
                      (agencyCreditApplicationData?.volume_and_revenue
                        ?.expected_annual_ocean_frieght_volume as string) ||
                      "Enter Expected Annual Ocean Freight Volume"
                    }
                    name="expected_annual_ocean_frieght_volume"
                    className="col-span-1 w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:focus:border-[#fdc82e]"
                  />
                </div>
                <div className="grid grid-cols-2 p-3">
                  <p className="col-span-1 block">Expected Annual Revenue</p>
                  <input
                    type="text"
                    placeholder={
                      (agencyCreditApplicationData?.volume_and_revenue
                        ?.expected_annual_revenue as string) ||
                      "Enter Expected Annual Revenue"
                    }
                    name="expected_annual_revenue"
                    className="col-span-1 w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:focus:border-[#fdc82e]"
                  />
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
                  <input
                    type="text"
                    placeholder={
                      (agencyCreditApplicationData?.account_details
                        ?.who_is_the_primary_accounting_contact as string) ||
                      "Enter Primary Accounting Contact"
                    }
                    name="who_is_the_primary_accounting_contact"
                    className="col-span-1 w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:focus:border-[#fdc82e]"
                  />
                </div>
                <div className="grid grid-cols-2 p-3">
                  <p className="col-span-1 block">
                    What Are Your Payment Terms?
                  </p>
                  <input
                    type="text"
                    placeholder={
                      (agencyCreditApplicationData?.account_details
                        ?.what_are_your_payment_terms as string) ||
                      "What Are Your Payment Terms"
                    }
                    name="what_are_your_payment_terms"
                    className="col-span-1 w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:focus:border-[#fdc82e]"
                  />
                </div>
                <div className="grid grid-cols-2 p-3">
                  <p className="col-span-1 block">
                    Do You Have Any Invoicing Requirements?
                  </p>
                  <input
                    type="text"
                    placeholder={
                      (agencyCreditApplicationData?.account_details
                        ?.do_you_have_any_invoicing_requirements as string) ||
                      "Do You Have Any Invoicing Requirements?"
                    }
                    name="do_you_have_any_invoicing_requirements"
                    className="col-span-1 w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:focus:border-[#fdc82e]"
                  />
                </div>
                <div className="grid grid-cols-2 p-3">
                  <p className="col-span-1 block">
                    Do You Accept You Invoices Via Email?
                  </p>
                  <input
                    type="text"
                    placeholder={
                      (agencyCreditApplicationData?.account_details
                        ?.do_you_accept_you_invoices_via_email as string) ||
                      "Do You Accept You Invoices Via Email"
                    }
                    name="do_you_accept_you_invoices_via_email"
                    className="col-span-1 w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:focus:border-[#fdc82e]"
                  />
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
                  <input
                    type="text"
                    placeholder={
                      (agencyCreditApplicationData?.additional_company_details
                        ?.current_agency_network_memberships as string) ||
                      "Enter Current Agency Network Memberships"
                    }
                    name="current_agency_network_memberships"
                    className="col-span-1 w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:focus:border-[#fdc82e]"
                  />
                </div>
                <div className="grid grid-cols-2 p-3">
                  <p className="col-span-1 block">
                    Country Specific Requirements
                  </p>
                  <input
                    type="text"
                    placeholder={
                      (agencyCreditApplicationData?.additional_company_details
                        ?.country_specific_requirements as string) ||
                      "Enter Country Specific Requirements"
                    }
                    name="country_specific_requirements"
                    className="col-span-1 w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:focus:border-[#fdc82e]"
                  />
                </div>
                <div className="grid grid-cols-2 p-3">
                  <p className="col-span-1 block">
                    How Were You Referred To PWS?
                  </p>
                  <input
                    type="text"
                    placeholder={
                      (agencyCreditApplicationData?.additional_company_details
                        ?.how_were_you_referred_to_pws as string) ||
                      "How Were You Referred To PWS?"
                    }
                    name="how_were_you_referred_to_pws"
                    className="col-span-1 w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:focus:border-[#fdc82e]"
                  />
                </div>
              </div>

              <div className="border-b-2 py-6">
                <p className="block font-medium text-xl mt-6">
                  NOTES OR ADDITIONAL INFORMATION
                </p>
                <input
                  type="text"
                  placeholder={
                    (agencyCreditApplicationData?.notes_or_additional_information as string) ||
                    "Enter Notes Or Additional Information"
                  }
                  name="notes_or_additional_information"
                  className="col-span-1 w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:focus:border-[#fdc82e]"
                />
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
                  <input
                    type="text"
                    placeholder={
                      (agencyCreditApplicationData?.printed_name as string) ||
                      "Enter Printed Name"
                    }
                    name="printed_name"
                    className="col-span-1 w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:focus:border-[#fdc82e]"
                  />
                </div>
                <div className="grid grid-cols-2 p-3">
                  <p className="col-span-1 block">
                    Signature
                    <p className="text-xs">
                      (must be an officer or controlling member)
                    </p>
                  </p>
                  <input
                    type="text"
                    placeholder={
                      (agencyCreditApplicationData?.signature as string) ||
                      "Enter Signature"
                    }
                    name="signature"
                    className="col-span-1 w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:focus:border-[#fdc82e]"
                  />
                </div>

                <div className="grid grid-cols-2 p-3">
                  <p className="col-span-1 block">Title</p>
                  <input
                    type="text"
                    placeholder={
                      (agencyCreditApplicationData?.title as string) ||
                      "Enter Title"
                    }
                    name="title"
                    className="col-span-1 w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:focus:border-[#fdc82e]"
                  />
                  <p className="md:col-span-1 col-span-1 "></p>
                </div>

                {/* <div className="grid grid-cols-2 p-3">
                  <p className="col-span-1 block">Date</p>
                  <input
                    type="text"
                    placeholder={
                      formattedDate(
                        agencyCreditApplicationData?.created_at as Date
                      ) || "Enter Date"
                    }
                    name="title"
                    className="col-span-1 w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:focus:border-[#fdc82e]"
                  />
                  <p className="md:col-span-1 col-span-1 "></p>
                </div> */}
              </div>

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
            </form>
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
