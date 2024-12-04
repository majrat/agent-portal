"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import DefaultLayout from "components/user/layouts/user-default-layout";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  setVendorWelcome,
  getVendorWelcome,
} from "../../../actions/vendor-welcome";
import LogoCard from "components/common/logo-card";
import Loader from "components/common/loader";

export default function Home() {
  const { status, data } = useSession();
  const router = useRouter();
  const [Accepted, setAccepted] = useState<string>("loading");
  const [error, seterror] = useState<string>("");
  const handleAcceptSubmit = async () => {
    const userId = { user_id: data?.user?.id };
    await setVendorWelcome(userId)
      .then(() => {
        router.push("/brand-principles");
      })
      .catch((e) => seterror(`${e}`));
  };
  useEffect(() => {
    async function fetchData() {
      return await getVendorWelcome(data?.user?.id);
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
        <div className="min-h-screen rounded-sm border text-black border-stroke bg-white/80 bg-blend-screen bg-[url('/images/home-bg-02.png')] bg-cover px-6 py-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5">
          <LogoCard />
          <h2 className="font-medium text-xl py-3">BANK DETAILS</h2>
          <p className="p-6 bg-white/30 rounded-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum vero dolorum adipisci, voluptatum at aspernatur libero iste eum maxime, deleniti et facilis perspiciatis quos neque a rerum. Quasi, deserunt animi!
          </p>

          <h3 className="text-lg font-medium py-9">Remit To Address :</h3>

          <div className="grid grid-cols-2 gap-4 ps-6 pb-9">
            <div className="border-l-4 border-[#fdc82e] p-6 bg-white/30 rounded-md">
              <h2 className="font-semibold text-xl">USA</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing, Inc. Traded as: brand
                1234 Lorem, ipsum dolor., MD 12345 T: +1.234.567.8900
              </p>
            </div>

            <div className="border-l-4 border-[#fdc82e] rounded-md p-6 bg-white/30">
              <h2 className="font-semibold text-xl">CANADA</h2>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing, Inc. Traded as: brand
              1234 Lorem, ipsum dolor., MD 12345 T: +1.234.567.8900
              </p>
            </div>
          </div>

          <h3 className="text-lg font-medium pb-9">Bank Details :</h3>

          <div className="grid grid-cols-2 gap-4 ps-6 pb-9">
            <div className="border-l-4 border-[#fdc82e] rounded-md p-6 bg-white/30">
              <h2 className="font-semibold text-xl">USA USD TRANSACTIONS</h2>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing, Inc. Traded as: brand
              1234 Lorem, ipsum dolor., MD 12345 T: +1.234.567.8900: brand
                Worldwide
              </p>
            </div>

            <div className="border-l-4 border-[#fdc82e] rounded-md p-6 bg-white/30">
              <h2 className="font-semibold text-xl">CANADA TRANSACTIONS</h2>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing, Inc. Traded as: brand
              1234 Lorem, ipsum dolor., MD 12345 T: +1.234.567.8900
              </p>
            </div>
          </div>

          <h3 className="text-lg font-medium py-9">Remit To Address :</h3>

          <div className="grid grid-cols-2 gap-4 ps-6 pb-9">
            <div className="border-l-4 border-[#fdc82e] rounded-md p-6 bg-white/30">
              <h2 className="font-semibold text-xl">UAE</h2>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing, Inc. Traded as: brand
              1234 Lorem, ipsum dolor., MD 12345 T: +1.234.567.8900
              </p>
            </div>

            <div className="border-l-4 border-[#fdc82e] rounded-md p-6 bg-white/30">
              <h2 className="font-semibold text-xl">AUSTRALIA</h2>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing, Inc. Traded as: brand
              1234 Lorem, ipsum dolor., MD 12345 T: +1.234.567.8900
              </p>
            </div>
          </div>

          <h3 className="text-lg font-medium pb-9">Bank Details :</h3>

          <div className="grid grid-cols-2 gap-4 ps-6 pb-9">
            <div className="border-l-4 border-[#fdc82e] rounded-md p-6 bg-white/30">
              <h2 className="font-semibold text-xl">UAE TRANSACTIONS</h2>
              <p>
                First Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum. 12345
                SWIFT: ABCD123 IBAN: USD: AE12345678900987654321 AED:
                AE12345678900987654321 EUR: AE12345678900987654321
              </p>
            </div>

            <div className="border-l-4 border-[#fdc82e] rounded-md p-6 bg-white/30">
              <h2 className="font-semibold text-xl">AU TRANSACTIONS</h2>
              <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum. 12345
                SWIFT: ABCD123 IBAN: USD: AE12345678900987654321 AED:
                AE12345678900987654321 EUR: AE12345678900987654321
              </p>
            </div>
          </div>

          <p className="p-6 bg-white/30 font-semibold rounded-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque in illum ipsum nostrum esse dolores incidunt temporibus aspernatur sint aperiam odit, perferendis doloribus repudiandae. Harum vero dicta laudantium labore id?
          </p>
          <h2 className="font-medium text-xl py-3">
            Important Settlement Note:
          </h2>
          <p className="p-6 bg-white/30 rounded-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum voluptatum nulla mollitia tempora maxime, dignissimos praesentium reiciendis deserunt assumenda corporis suscipit cumque nisi facere dolore rem culpa. Est, veniam? Ab.
          </p>

          <div className="relative">
            <div className="fixed z-20 bottom-9 right-9 bg-[#FFBF3C]/80 cursor-pointer hover:bg-[#FFBF3C] px-3 py-2 font-bold text-white rounded-2xl flex">
              <Link href="/vendor-welcome/our-offices">
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
      );
    } else if (status === "loading") {
      return <span className="text-[#888] text-sm mt-7"><Loader /></span>;
    } else {
      router.push("/auth/login");
    }
  };
  return <DefaultLayout>{showSession()}</DefaultLayout>;
}
