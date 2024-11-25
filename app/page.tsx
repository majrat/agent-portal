"use client";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import Image from "next/image";
import DefaultLayout from "components/user/layouts/user-default-layout";
import CardDataStats from "components/common/card-data-stats";
import { getVendorWelcome } from "actions/vendor-welcome";
import { useEffect, useState } from "react";
import { getPriorityPrinciples } from "actions/priority-principles";
import { getCargoSecurityProgram } from "actions/cargo-security-program";
import { getCodeOfConductQnA } from "actions/code-of-conduct-qna";
import { getSupplierSustainabilityProfile } from "actions/supplier-sustainability-profile";
import { getCargoSecurityProfile } from "actions/cargo-security-profile";
import LogoCard from "../components/common/logo-card";
import Loader from "components/common/loader";
import formattedDate from "js/formattedDate";
import Link from "next/link";
import { type_of_priority_principles } from "types/priority_principles";

export default function Home() {
  const { status, data } = useSession();
  const router = useRouter();
  const [VendorWelcomeAccepted, setVendorWelcomeAccepted] =
    useState<string>("loading");
  const [PriorityPrincipleData, setPriorityPrincipleData] =
    useState<type_of_priority_principles>();
  const [CargoSecurityProgramAccepted, setCargoSecurityProgramAccepted] =
    useState<string>("loading");
  const [checkIfCodeOfConductAnswered, setcheckIfCodeOfConductAnswered] =
    useState<string>("loading");
  const [
    checkIfSupplierSustainabilityProfileAnswered,
    setcheckIfSupplierSustainabilityProfileAnswered,
  ] = useState<string>("loading");
  const [
    checkIfCargoSecurityProfileAnswered,
    setcheckIfCargoSecurityProfileAnswered,
  ] = useState<string>("loading");
  const [error, seterror] = useState<string>("");

  useEffect(() => {
    async function fetchVendorWelcomeData() {
      return await getVendorWelcome(data?.user?.id);
    }
    fetchVendorWelcomeData()
      .then((response) => {
        setVendorWelcomeAccepted(response?.success);
      })
      .catch((e) => seterror(`${e}`));

    async function fetchPriorityPrincipleData() {
      return await getPriorityPrinciples(data?.user?.id);
    }
    fetchPriorityPrincipleData()
      .then((response) => {
        setPriorityPrincipleData(response?.data);
      })
      .catch((e) => seterror(`${e}`));

    async function fetchCargoSecurityProgram() {
      return await getCargoSecurityProgram(data?.user?.id);
    }
    fetchCargoSecurityProgram()
      .then((response) => {
        setCargoSecurityProgramAccepted(response?.success);
      })
      .catch((e) => seterror(`${e}`));

    async function fetchCodeOfConductQnAData() {
      return await getCodeOfConductQnA(data?.user?.id);
    }
    fetchCodeOfConductQnAData()
      .then((response) => {
        setcheckIfCodeOfConductAnswered(response?.success);
      })
      .catch((e) => seterror(`${e}`));

    async function fetchSupplierSustainabilityProfileData() {
      return await getSupplierSustainabilityProfile(data?.user?.id);
    }
    fetchSupplierSustainabilityProfileData()
      .then((response) => {
        setcheckIfSupplierSustainabilityProfileAnswered(response?.success);
      })
      .catch((e) => seterror(`${e}`));

    async function fetchCargoSecurityProfileData() {
      return await getCargoSecurityProfile(data?.user?.id);
    }
    fetchCargoSecurityProfileData()
      .then((response) => {
        setcheckIfCargoSecurityProfileAnswered(response?.success);
      })
      .catch((e) => seterror(`${e}`));
  }, [data]);
  const showSession = () => {
    if (status === "authenticated") {
      const Dateformatted = formattedDate(data.user.joined_date);
      const email = data.user.email;
      const name = data.user.name;
      return (
        <div className="min-h-screen flex flex-col rounded-sm border text-black dark:text-white border-stroke bg-blend-screen bg-[url('/images/Priority-Worldwide-General-Presentation-Aug-24.jpeg')] bg-cover bg-white/80 px-6 py-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 text-center">
          <LogoCard />
          {error && <p className="text-red">Error: {error}</p>}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-4 py-4">
            <CardDataStats
              small_txt={email}
              big_txt={name}
              status_txt={"Joined Date: " + Dateformatted}
              color="blue"
            >
              <span className="h-12 w-12 rounded-full">
                <Image
                  width={90}
                  height={90}
                  // src={data?.user?.image || "/images/user/user-svgrepo-com.svg"}
                  src={"/images/user/user-svgrepo-com.svg"}
                  alt="user"
                />
              </span>
            </CardDataStats>
            <CardDataStats
              small_txt="Froms submitted on: 12-08-2024"
              big_txt="Active"
              status_txt="Renewal required on: 11-08-2025"
              color="green"
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
                className="icon icon-tabler icons-tabler-outline icon-tabler-calendar-stats"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M11.795 21h-6.795a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4" />
                <path d="M18 14v4h4" />
                <path d="M18 18m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                <path d="M15 3v4" />
                <path d="M7 3v4" />
                <path d="M3 11h16" />
              </svg>
            </CardDataStats>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-4 xl:grid-cols-4">
            {/* <CardDataStats
              big_txt="Vendor Welcome"
              page_link="/vendor-welcome"
              small_txt="Status:"
              status_txt={
                VendorWelcomeAccepted === "success" ? "Accepted" : "Pending"
              }
              color={VendorWelcomeAccepted === "success" ? "green" : "red"}
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
                className="icon icon-tabler icons-tabler-outline icon-tabler-rotate-dot"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M19.95 11a8 8 0 1 0 -.5 4m.5 5v-5h-5" />
                <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
              </svg>
            </CardDataStats> */}
            <Link
              href={"/priority-principles"}
              className=" cursor-pointer group col-span-2 border text-meta-4 dark:text-white border-stroke bg-white dark:bg-meta-4/30 rounded-md hover:border-[#FFBF3C] duration-300 ease-linear p-6"
            >
              <div className="flex justify-between">
                <div className="flex justify-center w-55 pb-3 group-hover:text-[#FFBF3C] duration-300 ease-linear rounded-ss-md rounded-ee-md">
                  <div className="bg-meta-9 rounded-full p-2 w-10 self-center justify-center">
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
                      className="icon icon-tabler icons-tabler-outline icon-tabler-golf text-meta-4"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 18v-15l7 4l-7 4" />
                      <path d="M9 17.67c-.62 .36 -1 .82 -1 1.33c0 1.1 1.8 2 4 2s4 -.9 4 -2c0 -.5 -.38 -.97 -1 -1.33" />
                    </svg>
                  </div>
                  <h2 className="ps-3 font-medium self-center">
                    Priority Principles
                  </h2>
                </div>
                {PriorityPrincipleData?.principle?.one_compliance
                  ?.anti_corruption_statement_and_policy &&
                PriorityPrincipleData?.principle?.two_humanities
                  ?.anti_slavery_human_trafficking_and_forced_labor_policy &&
                PriorityPrincipleData?.principle?.two_humanities
                  ?.health_safety_security_and_environmental_policy &&
                PriorityPrincipleData?.principle?.two_humanities
                  ?.human_rights_and_modern_slavery_statement &&
                PriorityPrincipleData?.principle?.two_humanities
                  ?.whistleblower_policy &&
                PriorityPrincipleData?.principle?.three_sustainability
                  ?.international_standard_for_sustainable_procurement &&
                PriorityPrincipleData?.principle?.three_sustainability
                  ?.sustainable_procurement_policy &&
                PriorityPrincipleData?.principle?.four_supplier_code_of_conduct
                  ?.supply_chain_management_policy ? (
                  <p className="self-center px-6 font-medium text-meta-3">
                    completed
                  </p>
                ) : (
                  <p className="self-center px-6 font-medium text-meta-1">
                    Pending
                  </p>
                )}
              </div>
              <div className="flex flex-col justify-center items-center gap-3">
                <div className="flex justify-between text-start items-start w-full p-1">
                  <p> Principle One: Compliance</p>
                  {PriorityPrincipleData?.principle?.one_compliance
                    ?.anti_corruption_statement_and_policy ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="icon icon-tabler icons-tabler-outline icon-tabler-square-rounded-check text-meta-3"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M9 12l2 2l4 -4" />
                      <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="icon icon-tabler icons-tabler-outline icon-tabler-square-rounded-x text-meta-1"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M10 10l4 4m0 -4l-4 4" />
                      <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
                    </svg>
                  )}
                </div>
                <div className="flex justify-between text-start items-start w-full p-1">
                  <p> Principle Two: Humanities</p>
                  {PriorityPrincipleData?.principle?.two_humanities
                    ?.anti_slavery_human_trafficking_and_forced_labor_policy &&
                  PriorityPrincipleData?.principle?.two_humanities
                    ?.health_safety_security_and_environmental_policy &&
                  PriorityPrincipleData?.principle?.two_humanities
                    ?.human_rights_and_modern_slavery_statement &&
                  PriorityPrincipleData?.principle?.two_humanities
                    ?.whistleblower_policy ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="icon icon-tabler icons-tabler-outline icon-tabler-square-rounded-check text-meta-3"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M9 12l2 2l4 -4" />
                      <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="icon icon-tabler icons-tabler-outline icon-tabler-square-rounded-x text-meta-1"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M10 10l4 4m0 -4l-4 4" />
                      <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
                    </svg>
                  )}
                </div>
                <div className="flex justify-between text-start items-start w-full p-1">
                  <p> Principle Three: Sustainability</p>
                  {PriorityPrincipleData?.principle?.three_sustainability
                    ?.international_standard_for_sustainable_procurement &&
                  PriorityPrincipleData?.principle?.three_sustainability
                    ?.sustainable_procurement_policy ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="icon icon-tabler icons-tabler-outline icon-tabler-square-rounded-check text-meta-3"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M9 12l2 2l4 -4" />
                      <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="icon icon-tabler icons-tabler-outline icon-tabler-square-rounded-x text-meta-1"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M10 10l4 4m0 -4l-4 4" />
                      <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
                    </svg>
                  )}
                </div>
                <div className="flex justify-between text-start items-start w-full p-1">
                  <p>Principle Four: Supplier code of conduct</p>
                  {PriorityPrincipleData?.principle
                    ?.four_supplier_code_of_conduct
                    ?.supply_chain_management_policy ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="icon icon-tabler icons-tabler-outline icon-tabler-square-rounded-check text-meta-3"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M9 12l2 2l4 -4" />
                      <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="icon icon-tabler icons-tabler-outline icon-tabler-square-rounded-x text-meta-1"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M10 10l4 4m0 -4l-4 4" />
                      <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
                    </svg>
                  )}
                </div>
                <div className="flex justify-between text-start items-start w-full p-1">
                  <p>Principle Five: Cargo Safety and Security</p>-
                </div>
              </div>
            </Link>
            <Link
              href={"/priority-principles"}
              className=" cursor-pointer group col-span-2 border text-meta-4 dark:text-white border-stroke bg-white dark:bg-meta-4/30 rounded-md hover:border-[#FFBF3C] duration-300 ease-linear p-6"
            >
              <div className="flex justify-between">
                <div className="flex justify-center w-55 pb-3 group-hover:text-[#FFBF3C] duration-300 ease-linear rounded-ss-md rounded-ee-md">
                  <div className="bg-meta-9 rounded-full p-2 w-10 self-center justify-center">
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
                      className="icon icon-tabler icons-tabler-outline icon-tabler-user text-meta-4"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                      <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                    </svg>
                  </div>
                  <h2 className="ps-3 font-medium self-center">
                    Vendor Profile
                  </h2>
                </div>
                {true ? (
                  <p className="self-center px-6 font-medium text-meta-3">
                    completed
                  </p>
                ) : (
                  <p className="self-center px-6 font-medium text-meta-1">
                    Pending
                  </p>
                )}
              </div>
              <div className="flex flex-col justify-center items-center gap-3">
                <div className="flex justify-between text-start items-start w-full p-1">
                  <p>Vendor Registration</p>
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
                    className="icon icon-tabler icons-tabler-outline icon-tabler-rosette-discount-check text-meta-3"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 7.2a2.2 2.2 0 0 1 2.2 -2.2h1a2.2 2.2 0 0 0 1.55 -.64l.7 -.7a2.2 2.2 0 0 1 3.12 0l.7 .7c.412 .41 .97 .64 1.55 .64h1a2.2 2.2 0 0 1 2.2 2.2v1c0 .58 .23 1.138 .64 1.55l.7 .7a2.2 2.2 0 0 1 0 3.12l-.7 .7a2.2 2.2 0 0 0 -.64 1.55v1a2.2 2.2 0 0 1 -2.2 2.2h-1a2.2 2.2 0 0 0 -1.55 .64l-.7 .7a2.2 2.2 0 0 1 -3.12 0l-.7 -.7a2.2 2.2 0 0 0 -1.55 -.64h-1a2.2 2.2 0 0 1 -2.2 -2.2v-1a2.2 2.2 0 0 0 -.64 -1.55l-.7 -.7a2.2 2.2 0 0 1 0 -3.12l.7 -.7a2.2 2.2 0 0 0 .64 -1.55v-1" />
                    <path d="M9 12l2 2l4 -4" />
                  </svg>
                </div>
                <div className="flex justify-between text-start items-start w-full p-1">
                  <p>Bank details</p>
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
                    className="icon icon-tabler icons-tabler-outline icon-tabler-rosette-discount-check text-meta-3"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 7.2a2.2 2.2 0 0 1 2.2 -2.2h1a2.2 2.2 0 0 0 1.55 -.64l.7 -.7a2.2 2.2 0 0 1 3.12 0l.7 .7c.412 .41 .97 .64 1.55 .64h1a2.2 2.2 0 0 1 2.2 2.2v1c0 .58 .23 1.138 .64 1.55l.7 .7a2.2 2.2 0 0 1 0 3.12l-.7 .7a2.2 2.2 0 0 0 -.64 1.55v1a2.2 2.2 0 0 1 -2.2 2.2h-1a2.2 2.2 0 0 0 -1.55 .64l-.7 .7a2.2 2.2 0 0 1 -3.12 0l-.7 -.7a2.2 2.2 0 0 0 -1.55 -.64h-1a2.2 2.2 0 0 1 -2.2 -2.2v-1a2.2 2.2 0 0 0 -.64 -1.55l-.7 -.7a2.2 2.2 0 0 1 0 -3.12l.7 -.7a2.2 2.2 0 0 0 .64 -1.55v-1" />
                    <path d="M9 12l2 2l4 -4" />
                  </svg>
                </div>
                <div className="flex justify-between text-start items-start w-full p-1">
                  <p>Agency Credit Application</p>
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
                    className="icon icon-tabler icons-tabler-outline icon-tabler-rosette-discount-check text-meta-3"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 7.2a2.2 2.2 0 0 1 2.2 -2.2h1a2.2 2.2 0 0 0 1.55 -.64l.7 -.7a2.2 2.2 0 0 1 3.12 0l.7 .7c.412 .41 .97 .64 1.55 .64h1a2.2 2.2 0 0 1 2.2 2.2v1c0 .58 .23 1.138 .64 1.55l.7 .7a2.2 2.2 0 0 1 0 3.12l-.7 .7a2.2 2.2 0 0 0 -.64 1.55v1a2.2 2.2 0 0 1 -2.2 2.2h-1a2.2 2.2 0 0 0 -1.55 .64l-.7 .7a2.2 2.2 0 0 1 -3.12 0l-.7 -.7a2.2 2.2 0 0 0 -1.55 -.64h-1a2.2 2.2 0 0 1 -2.2 -2.2v-1a2.2 2.2 0 0 0 -.64 -1.55l-.7 -.7a2.2 2.2 0 0 1 0 -3.12l.7 -.7a2.2 2.2 0 0 0 .64 -1.55v-1" />
                    <path d="M9 12l2 2l4 -4" />
                  </svg>
                </div>
                <div className="flex justify-between text-start items-start w-full p-1">
                  <p>NDA</p>
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
                    className="icon icon-tabler icons-tabler-outline icon-tabler-rosette-discount-check text-meta-3"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 7.2a2.2 2.2 0 0 1 2.2 -2.2h1a2.2 2.2 0 0 0 1.55 -.64l.7 -.7a2.2 2.2 0 0 1 3.12 0l.7 .7c.412 .41 .97 .64 1.55 .64h1a2.2 2.2 0 0 1 2.2 2.2v1c0 .58 .23 1.138 .64 1.55l.7 .7a2.2 2.2 0 0 1 0 3.12l-.7 .7a2.2 2.2 0 0 0 -.64 1.55v1a2.2 2.2 0 0 1 -2.2 2.2h-1a2.2 2.2 0 0 0 -1.55 .64l-.7 .7a2.2 2.2 0 0 1 -3.12 0l-.7 -.7a2.2 2.2 0 0 0 -1.55 -.64h-1a2.2 2.2 0 0 1 -2.2 -2.2v-1a2.2 2.2 0 0 0 -.64 -1.55l-.7 -.7a2.2 2.2 0 0 1 0 -3.12l.7 -.7a2.2 2.2 0 0 0 .64 -1.55v-1" />
                    <path d="M9 12l2 2l4 -4" />
                  </svg>
                </div>
              </div>
            </Link>
            {/* <div className="col-span-2">
              <CardDataStats
                big_txt="Vendor Profile"
                page_link="/vendor-profile"
                small_txt="Status:"
                status_txt="pending"
                color={false ? "green" : "red"}
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
                  className="icon icon-tabler icons-tabler-outline icon-tabler-user"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                  <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                </svg>
              </CardDataStats>
            </div> */}
            {/* <CardDataStats
              big_txt="Cargo Security Program"
              page_link="/cargo-security-program"
              small_txt="Status:"
              status_txt={
                CargoSecurityProgramAccepted === "success"
                  ? "Completed"
                  : "Pending"
              }
              color={
                CargoSecurityProgramAccepted === "success" ? "green" : "red"
              }
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
                className="icon icon-tabler icons-tabler-outline icon-tabler-shield-lock"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
                <path d="M12 11m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                <path d="M12 12l0 2.5" />
              </svg>
            </CardDataStats> */}
            <CardDataStats
              big_txt="Code Of Conduct"
              page_link="/code-of-conduct"
              small_txt="Status:"
              status_txt={
                checkIfCodeOfConductAnswered === "success"
                  ? "Completed"
                  : "Pending"
              }
              color={
                checkIfCodeOfConductAnswered === "success" ? "green" : "red"
              }
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
                className="icon icon-tabler icons-tabler-outline icon-tabler-template"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 4m0 1a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1z" />
                <path d="M4 12m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                <path d="M14 12l6 0" />
                <path d="M14 16l6 0" />
                <path d="M14 20l6 0" />
              </svg>
            </CardDataStats>
            <CardDataStats
              big_txt="Supplier Sustainability Profile"
              page_link="/supplier-sustainability-profile"
              small_txt="Status:"
              status_txt={
                checkIfSupplierSustainabilityProfileAnswered === "success"
                  ? "Completed"
                  : "Pending"
              }
              color={
                checkIfSupplierSustainabilityProfileAnswered === "success"
                  ? "green"
                  : "red"
              }
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
                className="icon icon-tabler icons-tabler-outline icon-tabler-stairs-up"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M22 6h-5v5h-5v5h-5v5h-5" />
                <path d="M6 10v-7" />
                <path d="M3 6l3 -3l3 3" />
              </svg>
            </CardDataStats>
            <CardDataStats
              big_txt="Cargo Security Profile"
              page_link="/cargo-security-program/cargo-security-profile"
              small_txt="Status:"
              status_txt={
                checkIfCargoSecurityProfileAnswered === "success"
                  ? "Completed"
                  : "Pending"
              }
              color={
                checkIfCargoSecurityProfileAnswered === "success"
                  ? "green"
                  : "red"
              }
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
                className="icon icon-tabler icons-tabler-outline icon-tabler-key"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M16.555 3.843l3.602 3.602a2.877 2.877 0 0 1 0 4.069l-2.643 2.643a2.877 2.877 0 0 1 -4.069 0l-.301 -.301l-6.558 6.558a2 2 0 0 1 -1.239 .578l-.175 .008h-1.172a1 1 0 0 1 -.993 -.883l-.007 -.117v-1.172a2 2 0 0 1 .467 -1.284l.119 -.13l.414 -.414h2v-2h2v-2l2.144 -2.144l-.301 -.301a2.877 2.877 0 0 1 0 -4.069l2.643 -2.643a2.877 2.877 0 0 1 4.069 0z" />
                <path d="M15 9h.01" />
              </svg>
            </CardDataStats>
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
