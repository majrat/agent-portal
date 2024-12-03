"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import DefaultLayout from "../../components/user/layouts/user-default-layout";
import React, { useEffect, useState } from "react";
import { getPriorityPrinciples } from "actions/priority-principles";
import { useRouter } from "next/navigation";
import LogoCard from "components/common/logo-card";
import Loader from "components/common/loader";
import AntiCorruptionStatementPolicyText from "./_principle-texts/principle-one-compliance/anti-corruption-statement-policy";
import AntiSlaveryHumanTraffickingAndForcedLaborPolicyText from "./_principle-texts/principle-two-humanities/anti-slavery-human-trafficking-and-forced-labor-policy";
import HealthSafetySecurityAndEnvironmentalPolicyText from "./_principle-texts/principle-two-humanities/health-safety-security-and-environmental-policy";
import SustainableProcurementPolicyText from "./_principle-texts/principle-three-sustainability/sustainable-procurement-policy";
import InternationalStandardForSustainableProcurementText from "./_principle-texts/principle-three-sustainability/international-standard-for-sustainable-procurement";
import HumanRightsAndModernSlaveryStatementText from "./_principle-texts/principle-two-humanities/human-rights-and-modern-slavery-statement";
import WhistleblowerPolicyText from "./_principle-texts/principle-two-humanities/whistleblower-policy";
import SupplyChainManagementPolicyText from "./_principle-texts/principle-four-supplier-code-of-conduct/supply-chain-management-policy";

export default function Home() {
  const { status, data } = useSession();
  const router = useRouter();
  // FUNCTION: HANDLE MODAL
  const handleCloseIsOpenAntiCorruptionStatementAndPolicy = () => {
    setIsOpenAntiCorruptionStatementAndPolicy(
      !IsOpenAntiCorruptionStatementAndPolicy
    );
  };
  const handleCloseIsOpenAntiSlaveryHumanTraffickingAndForcedLaborPolicy =
    () => {
      setIsOpenAntiSlaveryHumanTraffickingAndForcedLaborPolicy(
        !IsOpenAntiSlaveryHumanTraffickingAndForcedLaborPolicy
      );
    };
  const handleCloseIsOpenHealthSafetySecurityAndEnvironmentalPolicy = () => {
    setIsOpenHealthSafetySecurityAndEnvironmentalPolicy(
      !IsOpenHealthSafetySecurityAndEnvironmentalPolicy
    );
  };
  const handleCloseIsOpenHumanRightsAndModernSlaveryStatement = () => {
    setIsOpenHumanRightsAndModernSlaveryStatement(
      !IsOpenHumanRightsAndModernSlaveryStatement
    );
  };
  const handleCloseIsOpenWhistleblowerPolicy = () => {
    setIsOpenWhistleblowerPolicy(!IsOpenWhistleblowerPolicy);
  };
  const handleCloseIsOpenInternationalStandardForSustainableProcurement =
    () => {
      setIsOpenInternationalStandardForSustainableProcurement(
        !IsOpenInternationalStandardForSustainableProcurement
      );
    };
  const handleCloseIsOpenSustainableProcurementPolicy = () => {
    setIsOpenSustainableProcurementPolicy(!IsOpenSustainableProcurementPolicy);
  };
  const handleCloseIsOpenSupplyChainManagementPolicy = () => {
    setIsOpenSupplyChainManagementPolicy(!IsOpenSupplyChainManagementPolicy);
  };
  // FUNCTION: HANDLE MODAL
  const [Accepted, setAccepted] = useState<string>("loading");
  // USE STATE: HANDLE MODAL
  const [
    IsOpenAntiCorruptionStatementAndPolicy,
    setIsOpenAntiCorruptionStatementAndPolicy,
  ] = useState<boolean>(false);
  const [
    IsOpenAntiSlaveryHumanTraffickingAndForcedLaborPolicy,
    setIsOpenAntiSlaveryHumanTraffickingAndForcedLaborPolicy,
  ] = useState<boolean>(false);
  const [
    IsOpenHealthSafetySecurityAndEnvironmentalPolicy,
    setIsOpenHealthSafetySecurityAndEnvironmentalPolicy,
  ] = useState<boolean>(false);
  const [
    IsOpenHumanRightsAndModernSlaveryStatement,
    setIsOpenHumanRightsAndModernSlaveryStatement,
  ] = useState<boolean>(false);
  const [IsOpenWhistleblowerPolicy, setIsOpenWhistleblowerPolicy] =
    useState<boolean>(false);
  const [
    IsOpenInternationalStandardForSustainableProcurement,
    setIsOpenInternationalStandardForSustainableProcurement,
  ] = useState<boolean>(false);
  const [
    IsOpenSustainableProcurementPolicy,
    setIsOpenSustainableProcurementPolicy,
  ] = useState<boolean>(false);
  const [
    IsOpenSupplyChainManagementPolicy,
    setIsOpenSupplyChainManagementPolicy,
  ] = useState<boolean>(false);
  // USE STATE: HANDLE MODAL

  // USE STATE: DOC AGREE OR NOT
  const [
    AntiCorruptionStatementAndPolicy,
    setAntiCorruptionStatementAndPolicy,
  ] = useState<boolean>();
  const [
    AntiSlaveryHumanTraffickingAndForcedLaborPolicy,
    setAntiSlaveryHumanTraffickingAndForcedLaborPolicy,
  ] = useState<boolean>();
  const [
    HealthSafetySecurityAndEnvironmentalPolicy,
    setHealthSafetySecurityAndEnvironmentalPolicy,
  ] = useState<boolean>();
  const [
    HumanRightsAndModernSlaveryStatement,
    setHumanRightsAndModernSlaveryStatement,
  ] = useState<boolean>();
  const [WhistleblowerPolicy, setWhistleblowerPolicy] = useState<boolean>();
  const [
    InternationalStandardForSustainableProcurement,
    setInternationalStandardForSustainableProcurement,
  ] = useState<boolean>();
  const [SustainableProcurementPolicy, setSustainableProcurementPolicy] =
    useState<boolean>();
  const [SupplyChainManagementPolicy, setSupplyChainManagementPolicy] =
    useState<boolean>();
  // USE STATE: DOC AGREE OR NOT

  const [error, seterror] = useState<string>("");

  useEffect(() => {
    async function fetchData() {
      return await getPriorityPrinciples(data?.user?.id);
    }
    fetchData()
      .then((response) => {
        setAccepted(response?.success);
        setAntiCorruptionStatementAndPolicy(
          response?.data?.principle?.one_compliance
            ?.anti_corruption_statement_and_policy
        );
        setAntiSlaveryHumanTraffickingAndForcedLaborPolicy(
          response?.data?.principle?.two_humanities
            ?.anti_slavery_human_trafficking_and_forced_labor_policy
        );
        setHealthSafetySecurityAndEnvironmentalPolicy(
          response?.data?.principle?.two_humanities
            ?.health_safety_security_and_environmental_policy
        );
        setHumanRightsAndModernSlaveryStatement(
          response?.data?.principle?.two_humanities
            ?.human_rights_and_modern_slavery_statement
        );
        setWhistleblowerPolicy(
          response?.data?.principle?.two_humanities?.whistleblower_policy
        );
        setInternationalStandardForSustainableProcurement(
          response?.data?.principle?.three_sustainability
            ?.international_standard_for_sustainable_procurement
        );
        setSustainableProcurementPolicy(
          response?.data?.principle?.three_sustainability
            ?.sustainable_procurement_policy
        );
        setSupplyChainManagementPolicy(
          response?.data?.principle?.four_supplier_code_of_conduct
            ?.supply_chain_management_policy
        );
      })
      .catch((e) => seterror(`${e}`));
  }, [
    data,
    IsOpenAntiCorruptionStatementAndPolicy,
    IsOpenAntiSlaveryHumanTraffickingAndForcedLaborPolicy,
    IsOpenHealthSafetySecurityAndEnvironmentalPolicy,
    IsOpenHumanRightsAndModernSlaveryStatement,
    IsOpenInternationalStandardForSustainableProcurement,
    IsOpenSupplyChainManagementPolicy,
    IsOpenSustainableProcurementPolicy,
    IsOpenWhistleblowerPolicy,
  ]);

  const showSession = () => {
    if (status === "authenticated") {
      if (Accepted === "loading") {
        return (
          <span className="text-[#888] text-sm mt-7">
            <Loader />
          </span>
        );
      } else {
        return (
          <div className="min-h-screen rounded-sm border text-black border-stroke bg-white/80 bg-blend-screen bg-[url('/images/domestic-2-640x480.jpg')] bg-cover px-6 py-6 shadow-default dark:border-strokedark sm:px-7.5">
            {/* Overlay */}
            <div>
              {error && <p className="text-red">{error}</p>}
              <h1 className="text-3xl pb-3"></h1>
              <LogoCard />
              <div className="my-6 grid gap-3 grid-cols-1 md:grid-cols-3 justify-between p-3 dark:text-white text-black text-center rounded-md border border-stroke bg-white shadow-default dark:border-strokedark hover:border-strokedark duration-300 ease-linear dark:hover:border-stroke">
                <Link
                  className="self-center flex justify-center md:justify-start"
                  href="/"
                >
                  <Image
                    className="rounded"
                    src={"/images/compliance-compass.JPG"}
                    alt="Logo"
                    width={321}
                    height={135}
                  />
                </Link>
                <h3 className="text-xl font-medium self-center md:block hidden">
                  PRIORITY PRINCIPLES
                </h3>
                <Link
                  className="self-center flex justify-center md:justify-end"
                  href="/"
                >
                  <Image
                    className="rounded"
                    src={"/images/ISO-logo.png"}
                    alt="Logo"
                    width={1169 / 4}
                    height={570 / 4}
                  />
                </Link>
                <h3 className="text-xl font-medium self-center block md:hidden">
                  PRIORITY PRINCIPLES
                </h3>
              </div>
              <ul className="relative list-disc p-6 bg-white/60 rounded-md">
                <li className="pb-3">
                  <span
                    className="font-bold border-b-2 border-[#fdc82e]"
                    id="principle-one-compliance"
                  >
                    Principle One: Compliance
                  </span>{" "}
                  - Compliance in international logistics is crucial for the
                  seamless and efficient movement of goods across borders.
                  Adhering to international regulations, trade agreements, and
                  customs requirements ensures that our operations run smoothly
                  and legally.
                  <ul className="list-disc">
                    <li className="text-meta-4 flex cursor-pointer my-3">
                      <AntiCorruptionStatementPolicyText
                        accepted={AntiCorruptionStatementAndPolicy as boolean}
                        onClickFunc={
                          handleCloseIsOpenAntiCorruptionStatementAndPolicy
                        }
                        isOpen={IsOpenAntiCorruptionStatementAndPolicy}
                      />
                      {AntiCorruptionStatementAndPolicy ? (
                        <>
                          &nbsp;
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
                            className="icon icon-tabler icons-tabler-outline icon-tabler-checks text-meta-3"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M7 12l5 5l10 -10" />
                            <path d="M2 12l5 5m5 -5l5 -5" />
                          </svg>
                          <sub className="text-meta-3">Done</sub>
                        </>
                      ) : (
                        <>
                          &nbsp;
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
                            className="icon icon-tabler icons-tabler-outline icon-tabler-x text-meta-1"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M18 6l-12 12" />
                            <path d="M6 6l12 12" />
                          </svg>
                          <sub className="text-meta-1">Pending</sub>
                        </>
                      )}
                    </li>
                  </ul>
                </li>
                <li className="pb-3">
                  <span
                    className="font-bold border-b-2 border-[#fdc82e]"
                    id="principle-two-humanities"
                  >
                    Principle Two: Humanities
                  </span>{" "}
                  - Humanities enrich international logistics by providing the
                  cultural insight, ethical foundation, communication skills,
                  and global perspective necessary for effective and responsible
                  supply chain management. Embracing the humanities ensures that
                  logistics professionals are not only technically proficient
                  but also culturally aware and ethically grounded, ultimately
                  leading to more sustainable and successful global operations.
                  <ul className="list-disc">
                    <li className="text-meta-4 flex cursor-pointer my-3">
                      <AntiSlaveryHumanTraffickingAndForcedLaborPolicyText
                        accepted={
                          AntiSlaveryHumanTraffickingAndForcedLaborPolicy as boolean
                        }
                        onClickFunc={
                          handleCloseIsOpenAntiSlaveryHumanTraffickingAndForcedLaborPolicy
                        }
                        isOpen={
                          IsOpenAntiSlaveryHumanTraffickingAndForcedLaborPolicy
                        }
                      />
                      {AntiSlaveryHumanTraffickingAndForcedLaborPolicy ? (
                        <>
                          &nbsp;
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
                            className="icon icon-tabler icons-tabler-outline icon-tabler-checks text-meta-3"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M7 12l5 5l10 -10" />
                            <path d="M2 12l5 5m5 -5l5 -5" />
                          </svg>
                          <sub className="text-meta-3">Done</sub>
                        </>
                      ) : (
                        <>
                          &nbsp;
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
                            className="icon icon-tabler icons-tabler-outline icon-tabler-x text-meta-1"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M18 6l-12 12" />
                            <path d="M6 6l12 12" />
                          </svg>
                          <sub className="text-meta-1">Pending</sub>
                        </>
                      )}
                    </li>
                    <li className="text-meta-4 flex cursor-pointer my-3">
                      <HealthSafetySecurityAndEnvironmentalPolicyText
                        accepted={
                          HealthSafetySecurityAndEnvironmentalPolicy as boolean
                        }
                        onClickFunc={
                          handleCloseIsOpenHealthSafetySecurityAndEnvironmentalPolicy
                        }
                        isOpen={
                          IsOpenHealthSafetySecurityAndEnvironmentalPolicy
                        }
                      />
                      {HealthSafetySecurityAndEnvironmentalPolicy ? (
                        <>
                          &nbsp;
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
                            className="icon icon-tabler icons-tabler-outline icon-tabler-checks text-meta-3"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M7 12l5 5l10 -10" />
                            <path d="M2 12l5 5m5 -5l5 -5" />
                          </svg>
                          <sub className="text-meta-3">Done</sub>
                        </>
                      ) : (
                        <>
                          &nbsp;
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
                            className="icon icon-tabler icons-tabler-outline icon-tabler-x text-meta-1"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M18 6l-12 12" />
                            <path d="M6 6l12 12" />
                          </svg>
                          <sub className="text-meta-1">Pending</sub>
                        </>
                      )}
                    </li>
                    <li className="text-meta-4 flex cursor-pointer my-3">
                      <HumanRightsAndModernSlaveryStatementText
                        accepted={
                          HumanRightsAndModernSlaveryStatement as boolean
                        }
                        onClickFunc={
                          handleCloseIsOpenHumanRightsAndModernSlaveryStatement
                        }
                        isOpen={IsOpenHumanRightsAndModernSlaveryStatement}
                      />
                      {/* {HumanRightsAndModernSlaveryStatement ? (
                        <>
                          &nbsp;
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
                            className="icon icon-tabler icons-tabler-outline icon-tabler-checks text-meta-3"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M7 12l5 5l10 -10" />
                            <path d="M2 12l5 5m5 -5l5 -5" />
                          </svg>
                          <sub className="text-meta-3">Done</sub>
                        </>
                      ) : (
                        <>
                          &nbsp;
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
                            className="icon icon-tabler icons-tabler-outline icon-tabler-x text-meta-1"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M18 6l-12 12" />
                            <path d="M6 6l12 12" />
                          </svg>
                          <sub className="text-meta-1">Pending</sub>
                        </>
                      )} */}
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
                        className="icon icon-tabler icons-tabler-outline icon-tabler-file-unknown text-meta-1"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                        <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                        <path d="M12 17v.01" />
                        <path d="M12 14a1.5 1.5 0 1 0 -1.14 -2.474" />
                      </svg>
                      <sub className="text-meta-1">
                        Awaiting Content: Please provide details
                      </sub>
                    </li>
                    <li className="text-meta-4 flex cursor-pointer my-3">
                      <WhistleblowerPolicyText
                        accepted={WhistleblowerPolicy as boolean}
                        onClickFunc={handleCloseIsOpenWhistleblowerPolicy}
                        isOpen={IsOpenWhistleblowerPolicy}
                      />
                      {/* {WhistleblowerPolicy ? (
                        <>
                          &nbsp;
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
                            className="icon icon-tabler icons-tabler-outline icon-tabler-checks text-meta-3"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M7 12l5 5l10 -10" />
                            <path d="M2 12l5 5m5 -5l5 -5" />
                          </svg>
                          <sub className="text-meta-3">Done</sub>
                        </>
                      ) : (
                        <>
                          &nbsp;
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
                            className="icon icon-tabler icons-tabler-outline icon-tabler-x text-meta-1"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M18 6l-12 12" />
                            <path d="M6 6l12 12" />
                          </svg>
                          <sub className="text-meta-1">Pending</sub>
                        </>
                      )} */}
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
                        className="icon icon-tabler icons-tabler-outline icon-tabler-file-unknown text-meta-1"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                        <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                        <path d="M12 17v.01" />
                        <path d="M12 14a1.5 1.5 0 1 0 -1.14 -2.474" />
                      </svg>
                      <sub className="text-meta-1">
                        Awaiting Content: Please provide details
                      </sub>
                    </li>
                  </ul>
                </li>
                <li className="pb-3">
                  <span
                    className="font-bold border-b-2 border-[#fdc82e]"
                    id="principle-three-sustainability"
                  >
                    Principle Three: Sustainability
                  </span>{" "}
                  - Sustainability in international logistics is essential for
                  protecting the environment, ensuring regulatory compliance,
                  achieving economic efficiency, meeting market demands,
                  managing risks, fulfilling corporate social responsibility,
                  and fostering innovation. By prioritizing sustainability,
                  logistics providers can contribute to a more sustainable and
                  resilient global supply chain, benefiting businesses,
                  communities, and the planet.
                  <ul className="list-disc">
                    <li className="text-meta-4 flex cursor-pointer my-3">
                      <InternationalStandardForSustainableProcurementText
                        accepted={
                          InternationalStandardForSustainableProcurement as boolean
                        }
                        onClickFunc={
                          handleCloseIsOpenInternationalStandardForSustainableProcurement
                        }
                        isOpen={
                          IsOpenInternationalStandardForSustainableProcurement
                        }
                      />
                      {/* {InternationalStandardForSustainableProcurement ? (
                        <>
                          &nbsp;
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
                            className="icon icon-tabler icons-tabler-outline icon-tabler-checks text-meta-3"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M7 12l5 5l10 -10" />
                            <path d="M2 12l5 5m5 -5l5 -5" />
                          </svg>
                          <sub className="text-meta-3">Done</sub>
                        </>
                      ) : (
                        <>
                          &nbsp;
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
                            className="icon icon-tabler icons-tabler-outline icon-tabler-x text-meta-1"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M18 6l-12 12" />
                            <path d="M6 6l12 12" />
                          </svg>
                          <sub className="text-meta-1">Pending</sub>
                        </>
                      )} */}
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
                        className="icon icon-tabler icons-tabler-outline icon-tabler-file-unknown text-meta-1"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                        <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                        <path d="M12 17v.01" />
                        <path d="M12 14a1.5 1.5 0 1 0 -1.14 -2.474" />
                      </svg>
                      <sub className="text-meta-1">
                        Awaiting Content: Please provide details
                      </sub>
                    </li>
                    <li className="text-meta-4 flex cursor-pointer my-3">
                      <SustainableProcurementPolicyText
                        accepted={SustainableProcurementPolicy as boolean}
                        onClickFunc={
                          handleCloseIsOpenSustainableProcurementPolicy
                        }
                        isOpen={IsOpenSustainableProcurementPolicy}
                      />
                      {SustainableProcurementPolicy ? (
                        <>
                          &nbsp;
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
                            className="icon icon-tabler icons-tabler-outline icon-tabler-checks text-meta-3"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M7 12l5 5l10 -10" />
                            <path d="M2 12l5 5m5 -5l5 -5" />
                          </svg>
                          <sub className="text-meta-3">Done</sub>
                        </>
                      ) : (
                        <>
                          &nbsp;
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
                            className="icon icon-tabler icons-tabler-outline icon-tabler-x text-meta-1"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M18 6l-12 12" />
                            <path d="M6 6l12 12" />
                          </svg>
                          <sub className="text-meta-1">Pending</sub>
                        </>
                      )}
                    </li>
                  </ul>
                </li>
                <li className="pb-3">
                  <span
                    className="font-bold border-b-2 border-[#fdc82e]"
                    id="principle-four-supplier-code-of-conduct"
                  >
                    Principle Four: Supplier Code Of Conduct
                  </span>{" "}
                  - A supplier code of conduct is essential in international
                  logistics for upholding ethical standards, ensuring regulatory
                  compliance, maintaining quality, promoting sustainability,
                  enhancing reputation, mitigating risks, fulfilling social
                  responsibility, and driving innovation. By implementing and
                  enforcing a robust code of conduct, companies can build a more
                  resilient, responsible, and successful supply chain.
                  <ul className="list-disc">
                    <li className="text-meta-4 flex cursor-pointer my-3">
                      <SupplyChainManagementPolicyText
                        accepted={SupplyChainManagementPolicy as boolean}
                        onClickFunc={
                          handleCloseIsOpenSupplyChainManagementPolicy
                        }
                        isOpen={IsOpenSupplyChainManagementPolicy}
                      />
                      {SupplyChainManagementPolicy ? (
                        <>
                          &nbsp;
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
                            className="icon icon-tabler icons-tabler-outline icon-tabler-checks text-meta-3"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M7 12l5 5l10 -10" />
                            <path d="M2 12l5 5m5 -5l5 -5" />
                          </svg>
                          <sub className="text-meta-3">Done</sub>
                        </>
                      ) : (
                        <>
                          &nbsp;
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
                            className="icon icon-tabler icons-tabler-outline icon-tabler-x text-meta-1"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M18 6l-12 12" />
                            <path d="M6 6l12 12" />
                          </svg>
                          <sub className="text-meta-1">Pending</sub>
                        </>
                      )}
                    </li>
                    {/* <li className="text-meta-4 flex cursor-pointer my-3">
                    Supplier Code of Conduct Statement
                  </li>
                  <li className="text-meta-4 flex cursor-pointer my-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#fdc82e"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="icon icon-tabler icons-tabler-outline icon-tabler-download mx-3 hover:animate-bounce duration-300 ease-linear"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                      <path d="M7 11l5 5l5 -5" />
                      <path d="M12 4l0 12" />
                    </svg>
                    <a
                      className="border-b-2 border-[#fdc82e] duration-300 ease-linear hover:bg-[#fdc82e] px-1 rounded"
                      href="/docs/Supplier Code of Conduct Questions.docx"
                    >
                      Supplier Code of Conduct Questionnaire
                    </a>
                  </li> */}
                  </ul>
                </li>
                <li className="pb-3">
                  <span
                    className="font-bold border-b-2 border-[#fdc82e]"
                    id="principle-five-cargo-safety-and-security"
                  >
                    Principle Five: Cargo Safety and Security
                  </span>{" "}
                  - Cargo safety and security are fundamental to the success of
                  international logistics. They protect goods, ensure regulatory
                  compliance, mitigate risks, build customer trust, reduce
                  liability, enhance operational efficiency, bolster brand
                  reputation, and maintain supply chain continuity. By
                  prioritizing cargo safety and security, logistics providers
                  can deliver reliable and secure services, supporting global
                  trade and economic growth.
                  <span className="flex pt-6">
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
                      className="icon icon-tabler icons-tabler-outline icon-tabler-file-unknown text-meta-1"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                      <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                      <path d="M12 17v.01" />
                      <path d="M12 14a1.5 1.5 0 1 0 -1.14 -2.474" />
                    </svg>
                    <sub className="text-meta-1">
                      Awaiting Content: Please provide details
                    </sub>
                  </span>
                  {/* <ul className="list-disc">
                  <li className="text-meta-4 flex cursor-pointer my-3">
                    CTPAT/PIP/AEO writeup
                  </li>
                  <li className="text-meta-4 flex cursor-pointer my-3">
                    Supplier Security Profile Questionnaire
                  </li>
                </ul> */}
                </li>
              </ul>
              <div className="relative">
                <div className="fixed bottom-9 right-9 bg-[#FFBF3C]/80 cursor-pointer hover:bg-[#FFBF3C] px-3 py-2 font-bold text-white rounded-2xl flex">
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
                      className="icon icon-tabler icons-tabler-outline icon-tabler-chevrons-right"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M7 7l5 5l-5 5" />
                      <path d="M13 7l5 5l-5 5" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
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
