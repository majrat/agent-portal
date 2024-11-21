"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import DefaultLayout from "../../components/user/layouts/user-default-layout";
import React, { useEffect, useState } from "react";
import {
  setPriorityPrinciples,
  getPriorityPrinciples,
} from "actions/priority-principles";
import { useRouter } from "next/navigation";
import LogoCard from "components/common/logo-card";
import Loader from "components/common/loader";
import AntiCorruptionStatementPolicyText from "./_principle-texts/principle-one-compliance/anti-corruption-statement-policy";

export default function Home() {
  const { status, data } = useSession();
  const router = useRouter();
  const [Accepted, setAccepted] = useState<string>("loading");
  const [error, seterror] = useState<string>("");
  const handleAcceptSubmit = async () => {
    const userId = { user_id: data?.user?.id, accepted: true };
    await setPriorityPrinciples(userId);
    router.push("/vendor-profile");
  };
  useEffect(() => {
    async function fetchData() {
      return await getPriorityPrinciples(data?.user?.id);
    }
    fetchData()
      .then((response) => {
        setAccepted(response?.success);
      })
      .catch((e) => seterror(`${e}`));
  }, [data]);
  const showSession = () => {
    if (status === "authenticated") {
      return (
        <div className="min-h-screen rounded-sm border text-black border-stroke bg-white/80 bg-blend-screen bg-[url('/images/domestic-2-640x480.jpg')] bg-cover px-6 py-6 shadow-default dark:border-strokedark sm:px-7.5">
          {/* Overlay */}
          <div>
            {error && <p className="text-red">{error}</p>}
            <h1 className="text-3xl pb-3"></h1>
            {/* <h1 className="text-5xl pb-4">PRIORITY WORLDWIDE</h1> */}
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
            <ul className="list-disc p-6 bg-white/60 rounded-md">
              <li className="pb-3">
                Principle One: <span className="font-bold">Compliance</span> -{" "}
                Compliance in international logistics is crucial for the
                seamless and efficient movement of goods across borders.
                Adhering to international regulations, trade agreements, and
                customs requirements ensures that our operations run smoothly
                and legally.
                <ul className="list-disc">
                  <li className="text-meta-4 flex cursor-pointer my-3">
                    {/* <a
                      className="border-b-2 border-[#fdc82e] duration-300 ease-linear hover:bg-[#fdc82e] px-1 rounded"
                      href="/docs/Anti-Corruption Statement and Policy.docx"
                    >
                      Anti-Corruption Statement & Policy{" "}
                    </a> */}
                    <AntiCorruptionStatementPolicyText />
                  </li>
                </ul>
              </li>
              <li className="pb-3">
                Principle Two: <span className="font-bold">Humanities</span> -{" "}
                Humanities enrich international logistics by providing the
                cultural insight, ethical foundation, communication skills, and
                global perspective necessary for effective and responsible
                supply chain management. Embracing the humanities ensures that
                logistics professionals are not only technically proficient but
                also culturally aware and ethically grounded, ultimately leading
                to more sustainable and successful global operations.
                <ul className="list-disc">
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
                      href="/docs/Anti-Slavery, Human Trafficking and Forced Labor Policy.docx"
                    >
                      Anti-slavery, Human Trafficking and Forced Labor Policy
                    </a>
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
                      href="/docs/Health, Safety, Security, and Environmental (HSSE) Policy.docx"
                    >
                      Health, Safety, Security and Environmental Policy
                    </a>
                  </li>
                  <li className="text-meta-4 flex cursor-pointer my-3">
                    Human Rights and Modern Slavery Statement
                  </li>
                  <li className="text-meta-4 flex cursor-pointer my-3">
                    Whistleblower Policy
                  </li>
                </ul>
              </li>
              <li className="pb-3">
                Principle Three:{" "}
                <span className="font-bold">Sustainability</span> -
                Sustainability in international logistics is essential for
                protecting the environment, ensuring regulatory compliance,
                achieving economic efficiency, meeting market demands, managing
                risks, fulfilling corporate social responsibility, and fostering
                innovation. By prioritizing sustainability, logistics providers
                can contribute to a more sustainable and resilient global supply
                chain, benefiting businesses, communities, and the planet.
                <ul className="list-disc">
                  <li className="text-meta-4 flex cursor-pointer my-3">
                    International standard for sustainable procurement
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
                      href="/docs/Sustainable Procurement Policy.docx"
                    >
                      Sustainable Procurement Policy
                    </a>
                  </li>
                </ul>
              </li>
              <li className="pb-3">
                Principle Four:{" "}
                <span className="font-bold">Supplier code of conduct</span> - A
                supplier code of conduct is essential in international logistics
                for upholding ethical standards, ensuring regulatory compliance,
                maintaining quality, promoting sustainability, enhancing
                reputation, mitigating risks, fulfilling social responsibility,
                and driving innovation. By implementing and enforcing a robust
                code of conduct, companies can build a more resilient,
                responsible, and successful supply chain.
                <ul className="list-disc">
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
                      href="/docs/Supply Chain Management Policy.docx"
                    >
                      Supply Chain Management policy
                    </a>
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
                Principle Five:{" "}
                <span className="font-bold">Cargo Safety and Security</span> -
                Cargo safety and security are fundamental to the success of
                international logistics. They protect goods, ensure regulatory
                compliance, mitigate risks, build customer trust, reduce
                liability, enhance operational efficiency, bolster brand
                reputation, and maintain supply chain continuity. By
                prioritizing cargo safety and security, logistics providers can
                deliver reliable and secure services, supporting global trade
                and economic growth.
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
              {Accepted === "success" ? (
                <>
                  <div className="fixed bottom-9 right-22 bg-slate-600/80 px-3 py-2 font-bold text-white rounded-2xl flex">
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
                      className="icon icon-tabler icons-tabler-outline icon-tabler-rosette-discount-check"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M5 7.2a2.2 2.2 0 0 1 2.2 -2.2h1a2.2 2.2 0 0 0 1.55 -.64l.7 -.7a2.2 2.2 0 0 1 3.12 0l.7 .7c.412 .41 .97 .64 1.55 .64h1a2.2 2.2 0 0 1 2.2 2.2v1c0 .58 .23 1.138 .64 1.55l.7 .7a2.2 2.2 0 0 1 0 3.12l-.7 .7a2.2 2.2 0 0 0 -.64 1.55v1a2.2 2.2 0 0 1 -2.2 2.2h-1a2.2 2.2 0 0 0 -1.55 .64l-.7 .7a2.2 2.2 0 0 1 -3.12 0l-.7 -.7a2.2 2.2 0 0 0 -1.55 -.64h-1a2.2 2.2 0 0 1 -2.2 -2.2v-1a2.2 2.2 0 0 0 -.64 -1.55l-.7 -.7a2.2 2.2 0 0 1 0 -3.12l.7 -.7a2.2 2.2 0 0 0 .64 -1.55v-1" />
                      <path d="M9 12l2 2l4 -4" />
                    </svg>
                  </div>
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
                </>
              ) : (
                <a
                  onClick={handleAcceptSubmit}
                  className="fixed z-20 bottom-9 right-9 bg-[#FFBF3C]/80 cursor-pointer hover:bg-[#FFBF3C] px-3 py-2 font-bold text-white rounded-2xl flex"
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
                    className="icon icon-tabler icons-tabler-outline icon-tabler-chevrons-right"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M7 7l5 5l-5 5" />
                    <path d="M13 7l5 5l-5 5" />
                  </svg>
                </a>
              )}
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
