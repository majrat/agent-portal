"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import DefaultLayout from "components/layouts/user-default-layout";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  add_vendor_welcome,
  get_vendor_welcome,
} from "../../actions/vendor-welcome";

export default function Home() {
  const { status, data } = useSession();
  const router = useRouter();
  const [Accepted, setAccepted] = useState<boolean>(false);
  const [error, seterror] = useState<string>("");
  const handleAcceptSubmit = async () => {
    const acceptSubmitData = { user_id: data?.user?.id };
    await add_vendor_welcome(acceptSubmitData)
      .then(() => {
        router.push("/priority-principles");
      })
      .catch((e) => seterror(`${e}`));
  };
  useEffect(() => {
    async function fetchData() {
      return await get_vendor_welcome(data?.user?.id);
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
        <div className="min-h-screen rounded-sm border text-black border-stroke bg-white/80 bg-blend-screen bg-[url('/images/home-bg-02.png')] bg-cover px-6 py-6 shadow-default dark:border-strokedark dark:bg-meta-4 sm:px-7.5">
          <Link className="mb-3 inline-block" href="/">
            <Image
              className="bg-meta-4 rounded p-2"
              src={"/logo.svg"}
              alt="Logo"
              width={352}
              height={64}
            />
          </Link>
          {error && <p className="text-red">{error}</p>}
          <p className="p-6 bg-white/30">
            Welcome to Priority Worldwide. We are a full service logistics
            provider operating around the globe.
          </p>
          <h2 className="font-medium text-xl py-3">PRIORITY{"'"}S WORLD</h2>
          <p className="pt-6 px-6 bg-white/30">
            {'" '}Freight Forward People{' "'}
          </p>
          <p className="pb-6 px-6 bg-white/30">
            {'" '}The values set our path.. The people make it happen.. Our
            culture sets us apart..{' "'}
          </p>
          <h2 className="font-medium text-xl py-3">OUR QUALITY POLICY</h2>
          <p className="p-6 bg-white/30">
            Priority Worldwide is committed to provide the ultimate customer
            experience in global logistics. <br /> Quality service shall be
            provided by responsive employees, on-time delivery, client education
            and regulatory compliance.
            <br /> We further commit to limit our impact on the fragile
            ecosystem that we live in through concrete, measurable actions.
          </p>
          <h3 className="text-xl font-medium pt-3 pb-3">
            OUR EFFORTS SHALL BE GUIDED BY THE FOLLOWING PRINCIPLES:
          </h3>
          <ul className="list-disc p-6 bg-white/30">
            <li>
              Protect our environment through our purchasing decisions, energy
              conservation, waste management efforts and by being discretionary
              about the types of business we handle.
            </li>
            <li>
              Respect fellow employees and foster individual professional growth
              through regular training and employee recognition programs.
            </li>
            <li>
              Inspire individuals to continually improve operational and quality
              processes through the routine review of quality objectives.
            </li>
            <li>
              Operate with integrity 24/7 by embodying the highest standard in
              business ethics and practices.
            </li>
            <li>
              Rise to the challenges and opportunities of the complex global
              arena that we operate in.
            </li>
            <li>
              Instill a reverence within our organization for the environment
              and its inhabitants.
            </li>
            <li>
              Transcend industry standards to become a pillar of excellence
              within our community.
            </li>
            <li>
              Yield results that ensure stable growth for the company and its
              employees without sacrificing our values.
            </li>
          </ul>
          <h2 className="font-medium text-xl py-3">GOALS OF THIS PROFILE</h2>
          <p className="p-6 bg-white/30">
            The primary goal of our vendor supplier profile is to establish a
            comprehensive and transparent overview of our suppliers. Strong and
            collaborative relationships drive mutual growth and innovation. By
            achieving these goals, we aim to build a reliable, resilient, and
            sustainable supply chain that supports our business objectives and
            delivers value to our customers. Sustainability is a key component
            of our supply chain strategy. We prioritize suppliers who adhere to
            sustainable practices, including environmentally friendly production
            methods, ethical labor standards, and resource efficiency. By
            fostering partnerships with such vendors, we ensure that our supply
            chain not only meets current demands, regulatory compliance and
            ethical issues but also contributes to a healthier planet and
            society for future generations. We thank you in advance for your
            participation!
          </p>

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
                  <Link href="/priority-principles">
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
