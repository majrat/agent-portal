"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import DefaultLayout from "../../components/layouts/user-default-layout";
import {
  add_cargo_security_program,
  get_cargo_security_program,
} from "actions/cargo-security-program";
import { redirect, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function WelcomeLetter() {
  const { status, data } = useSession();
  const router = useRouter();
  const [Accepted, setAccepted] = useState<boolean>(false);
  const [error, seterror] = useState<string>("");
  const handleAcceptSubmit = async () => {
    const acceptSubmitData = { user_id: data?.user?.id };
    await add_cargo_security_program(acceptSubmitData)
      .then(() => {
        router.push("/cargo-security-profile");
      })
      .catch((e) => seterror(`${e}`));
  };
  useEffect(() => {
    async function fetchData() {
      return await get_cargo_security_program(data?.user?.id);
    }
    fetchData()
      .then((response) => {
        setAccepted(response?.success);
      })
      .catch((e) => seterror(`${e}`));
  }, [data]);
  const showSession: any = () => {
    if (status === "authenticated") {
      return (
        <div className="min-h-screen rounded-sm border text-black dark:text-white border-stroke bg-white/80 bg-blend-screen bg-[url('/images/air-international-transport-640x480.jpg')] bg-cover px-6 py-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5">
          {error && <p className="text-red">{error}</p>}
          <div className="grid grid-cols-3 pb-12">
            <div className="col-span-2">
              <Link className="mb-5.5 inline-block" href="/">
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
            </div>
            <div className="md:col-span-1 col-span-3 text-start md:text-end">
              <p className="pb-3">7361 Coca Cola Drive Hanover, MD 21076</p>
              <p>+1.410.766.7470 | TELEPHONE</p>
              <p>+1.800.727.1085 | TOLL FREE</p>
              <p className="pb-3">+1.718.947.3702 | 24/7 AOG HOTLINE</p>
              <a href="mailto:sales@priorityworldwide.com">
                sales@priorityworldwide.com
              </a>
            </div>
          </div>
          <p className="pb-1">To: Priority Business Partner</p>
          <p className="pb-6">
            Re: Customs-Trade Partnership Against Terrorism (C-TPAT), Partners
            in Protection (PIP), Authorized Economic Operator (AEO)
          </p>
          <p className="pb-6">Dear Sir/Madam;</p>
          <p className="pb-6">
            Since 2007, Priority Worldwide has been a certified participant of
            the C-TPAT program, a partnership between the trade community and
            U.S. Customs and Border Protection (CBP), designed to establish
            supply chain security processes to prevent terrorist devices and
            other contraband from entering the global supply chain. Since 2016,
            Priority Worldwide Canada has been a certified participant of the
            PIP program, an equivalent program in Canada. We have recently
            opened additional international offices and will be participating in
            their AEO Programs.
          </p>
          <p className="pb-6">
            As a member of the C-TPAT, PIP and other AEO programs, Priority
            Worldwide is required to engage with all our business partners
            (clients, vendors and overseas agents) in order to strengthen and
            aid in the development and maintenance of a security program that
            aims to ensure the integrity of all shipments. Together we will work
            to prevent the introduction of unauthorized materials into any
            cargo, container, trailer, or other shipping conveyance. The
            C-TPAT/PIP/AEO minimum security criteria outlined in the attachment
            are a necessary means to that end. After reviewing the criteria and
            answering the questions, you should implement any security and/or
            trade compliance improvements necessary to comply and consider
            applying for C-TPAT, PIP or AEO membership, if eligible.
          </p>
          <p className="pb-6">
            If you are already a member of the C-TPAT, PIP programs, please
            email your Status Verification Interface (SVI) number or certificate
            of membership to our Director of Compliance, Lauren Priddy, at
            lpriddy@priorityworldwide.com. In concert with U.S. CBP, CBSA and
            the World Customs Organization, several other countries have
            developed similar, equivalent programs designated Authorized
            Economic Operator programs. If you are a member of one of these
            programs, please forward a certificate of membership from your
            customs agency.
          </p>
          <p className="pb-6">
            Whether or not you are a member of C-TPAT, PIP or an equivalent
            program, we ask that you complete and return to us the attached
            questionnaire on your current security procedures. Completion of
            this questionnaire will aid us in ensuring the security of the
            supply chain we maintain and will assist us in determining what
            support we can give regarding the enhancement of your security
            program. Full and complete responses to this questionnaire will also
            aid us in determining how frequently we may be required under the
            programs to conduct site visits to verify security procedures are in
            place. We thank you in advance for your cooperation.
          </p>
          <p className="pb-6">
            We encourage you in turn to educate your business partners about
            C-TPAT, PIP and the Authorized Economic Operator programs. Emphasis
            on trailer and 7 - point container inspections, seal processes,
            live-time tracking and monitoring of cargo en-route, personnel and
            access control security and security awareness training is
            requested. Inspection of containers should be documents, and a copy
            of the completed inspection forwarded to Priority Worldwide along
            with the other documents associated with the shipment(s). All loaded
            U.S.-bound or Canada-bound containers/trailers must be secured with
            an ISO PAS 17712 high security seal. You must also have written
            procedures within your supply chain for recognizing and reporting
            compromised seals on your containers and unknown/unauthorized
            persons within your facilities. If you should need assistance with
            any of these issues, please contact us for further information and
            training.
          </p>

          <p className="pb-6">
            In sum, we are asking all our business partners to have a documented
            cargo and supply chain security program. Please contact us at the
            above phone number or email us with questions regarding C-TPAT, PIP,
            AEO, developing your own security plan, or any other supply chain
            security matters, and return to us the completed security
            questionnaire as soon as possible.
          </p>

          <p className="pb-1">Lauren Priddy, CHB, CCS</p>
          <p className="pb-1">Director of Compliance</p>
          <p className="pb-6">Priority Worldwide</p>
          <a className="pb-1" href="https://priorityworldwide.com">
            www.priorityworldwide.com
          </a>
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
                  <Link href="/cargo-security-profile">
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
                className="fixed bottom-9 right-9 bg-slate-600/80 px-3 py-2 font-extrabold cursor-pointer text-white rounded-2xl"
              >
                Accept & Continue
              </a>
            )}
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
