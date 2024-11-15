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

export default function Home() {
  const { status, data } = useSession();
  console.log("================> ", status);
  const router = useRouter();
  const [VendorWelcomeAccepted, setVendorWelcomeAccepted] =
    useState<boolean>(false);
  const [PriorityPrincipleAccepted, setPriorityPrincipleAccepted] =
    useState<boolean>(false);
  const [CargoSecurityProgramAccepted, setCargoSecurityProgramAccepted] =
    useState<boolean>(false);
  const [checkIfCodeOfConductAnswered, setcheckIfCodeOfConductAnswered] =
    useState<boolean | undefined>(false);
  const [
    checkIfSupplierSustainabilityProfileAnswered,
    setcheckIfSupplierSustainabilityProfileAnswered,
  ] = useState<boolean | undefined>(false);
  const [
    checkIfCargoSecurityProfileAnswered,
    setcheckIfCargoSecurityProfileAnswered,
  ] = useState<boolean | undefined>(false);
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
        setPriorityPrincipleAccepted(response?.success);
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
      .then(
        (response: {
          success:
            | boolean
            | ((prevState: boolean | undefined) => boolean | undefined)
            | undefined;
        }) => {
          setcheckIfCargoSecurityProfileAnswered(response?.success);
        }
      )
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
            <CardDataStats
              big_txt="Vendor Welcome"
              page_link="/vendor-welcome"
              small_txt="Status:"
              status_txt={VendorWelcomeAccepted ? "Accepted" : "Pending"}
              color={VendorWelcomeAccepted ? "green" : "red"}
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
            </CardDataStats>
            <CardDataStats
              big_txt="Priority Principles"
              page_link="/priority-principles"
              small_txt="Status:"
              status_txt={PriorityPrincipleAccepted ? "Accepted" : "Pending"}
              color={PriorityPrincipleAccepted ? "green" : "red"}
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
                className="icon icon-tabler icons-tabler-outline icon-tabler-golf"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 18v-15l7 4l-7 4" />
                <path d="M9 17.67c-.62 .36 -1 .82 -1 1.33c0 1.1 1.8 2 4 2s4 -.9 4 -2c0 -.5 -.38 -.97 -1 -1.33" />
              </svg>
            </CardDataStats>
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
            <CardDataStats
              big_txt="Cargo Security Program"
              page_link="/cargo-security-program"
              small_txt="Status:"
              status_txt={CargoSecurityProgramAccepted ? "Accepted" : "Pending"}
              color={CargoSecurityProgramAccepted ? "green" : "red"}
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
            </CardDataStats>
            <CardDataStats
              big_txt="Code Of Conduct"
              page_link="/code-of-conduct"
              small_txt="Status:"
              status_txt={checkIfCodeOfConductAnswered ? "Accepted" : "Pending"}
              color={checkIfCodeOfConductAnswered ? "green" : "red"}
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
                checkIfSupplierSustainabilityProfileAnswered
                  ? "Accepted"
                  : "Pending"
              }
              color={
                checkIfSupplierSustainabilityProfileAnswered ? "green" : "red"
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
                checkIfCargoSecurityProfileAnswered ? "Accepted" : "Pending"
              }
              color={checkIfCargoSecurityProfileAnswered ? "green" : "red"}
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
