"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import DefaultLayout from "../../components/layouts/user-default-layout";
import React, { useEffect, useState } from "react";
import {
  acceptPriorityPrinciples,
  getPriorityPrinciples,
} from "actions/priority-principles";
import { useRouter } from "next/navigation";

export default function Home() {
  const { status, data } = useSession();
  const router = useRouter();
  const [Accepted, setAccepted] = useState<boolean>(false);
  const [error, seterror] = useState<string>("");
  const handleAcceptSubmit = async () => {
    const acceptSubmitData = { user_id: data?.user?.id, accepted: true };
    await acceptPriorityPrinciples(acceptSubmitData);
    router.push("/priority-principles");
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
        <div className="min-h-screen rounded-sm border text-black dark:text-white border-stroke bg-white/80 bg-blend-screen bg-[url('/images/domestic-2-640x480.jpg')] bg-cover px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
          {/* Overlay */}
          <div>
            {error && <p className="text-red">{error}</p>}
            <h1 className="text-3xl pb-3"></h1>
            {/* <h1 className="text-5xl pb-4">PRIORITY WORLDWIDE</h1> */}
            <Link className="mb-3 inline-block" href="/">
              <Image
                className="hidden dark:block p-2"
                src={"/logo.svg"}
                alt="Logo"
                width={352}
                height={64}
              />
              <Image
                className="dark:hidden bg-slate-500 rounded p-2"
                src={"/logo.svg"}
                alt="Logo"
                width={352}
                height={64}
              />
            </Link>
            <p className="pb-3">
              Welcome to Priority Worldwide. We are a full service logistics
              provider operating around the globe.
            </p>
            <h2 className="font-medium text-xl py-3">PRIORITY{"'"}S WORLD</h2>
            <p className="pb-1">
              {'" '}Freight Forward People{' "'}
            </p>
            <p className="pb-3">
              {'" '}The values set our path.. The people make it happen.. Our
              culture sets us apart..{' "'}
            </p>
            <h3 className="text-xl font-medium pt-3 pb-3">
              PRIORITY PRINCIPLES
            </h3>
            <ul className="list-disc ps-6 pb-3">
              <li className="pb-3">
                Principle One: <span className="font-bold">Compliance</span> -{" "}
                Compliance in international logistics is crucial for the
                seamless and efficient movement of goods across borders.
                Adhering to international regulations, trade agreements, and
                customs requirements ensures that our operations run smoothly
                and legally.
                <ul className="list-disc mx-12">
                  <li>Anti-Corruption Statement & Policy</li>
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
                <ul className="list-disc mx-12">
                  <li>
                    Anti-slavery, Human Trafficking and Forced Labor Policy
                  </li>
                  <li>Health, Safety, Security and Environmental Policy</li>
                  <li>Human Rights and Modern Slavery Statement</li>
                  <li>Whistleblower Policy</li>
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
                <ul className="list-disc mx-12">
                  <li>International standard for sustainable procurement</li>
                  <li>Sustainable Procurement Policy</li>
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
                <ul className="list-disc mx-12">
                  <li>Supply Chain Management policy</li>
                  <li>Supplier Code of Conduct Statement</li>
                  <li>Supplier Code of Conduct Questionnaire</li>
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
                <ul className="list-disc mx-12">
                  <li>CTPAT/PIP/AEO writeup</li>
                  <li>Supplier Security Profile Questionnaire</li>
                </ul>
              </li>
            </ul>
            <div className="relative">
              {Accepted ? (
                <>
                  <div className="fixed bottom-9 right-22 bg-green-600/80 px-3 py-2 font-bold text-white rounded-2xl flex">
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
                    <p>Accepted</p>
                  </div>
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
                <Link
                  href="/vendor-profile"
                  onClick={handleAcceptSubmit}
                  className="fixed bottom-9 right-9 bg-slate-600/80 px-3 py-2 font-extrabold text-white rounded-2xl"
                >
                  Accept & Continue
                </Link>
              )}
            </div>
          </div>
        </div>
      );
    } else if (status === "loading") {
      return <span className="text-[#888] text-sm mt-7">Loading...</span>;
    } else {
      return redirect("/login");
    }
  };
  return <DefaultLayout>{showSession()}</DefaultLayout>;
}
