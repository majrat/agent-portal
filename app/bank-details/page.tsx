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
        <div className="min-h-screen rounded-sm border text-black border-stroke bg-white/80 bg-blend-screen bg-[url('/images/home-bg-02.png')] bg-cover px-6 py-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5">
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
          <h2 className="font-medium text-xl py-3">BANK DETAILS</h2>
          <p className="p-6 bg-white/30">
            Statements and settlements between The United States, Canada, UAE
            and Australia offices are completely separate; there shall be no
            contra settling, carryover or any other financial mixing between
            countries without prior approval.
          </p>

          <h3 className="text-lg font-medium py-9">Remit To Address :</h3>

          <div className="grid grid-cols-2 gap-4 ps-6 pb-9">
            <div className="border-r-4 p-6 bg-white/30">
              <h2 className="font-semibold text-xl">USA</h2>
              <p>
                Air Cargo Transport Services, Inc. Traded as: Priority Worldwide
                7361 Coca Cola Dr Hanover, MD 21076 T: +1.410.766.7470
              </p>
            </div>

            <div className="p-6 bg-white/30">
              <h2 className="font-semibold text-xl">CANADA</h2>
              <p>
                PWS Logistics Montreal Traded as : Priority Worldwide / Priorité
                Mondial 195 Avenue du Voyageur Pointe Claire, QC H9R 6B2 T:
                +1.514.905.5983
              </p>
            </div>
          </div>

          <h3 className="text-lg font-medium pb-9">Bank Details :</h3>

          <div className="grid grid-cols-2 gap-4 ps-6 pb-9">
            <div className="border-r-4 p-6 bg-white/30">
              <h2 className="font-semibold text-xl">USA USD TRANSACTIONS</h2>
              <p>
                PNC Bank 8800 Tinicum Blvd Philadelphia, PA 19153 ABA/Routing
                Number: 031000053 Swift: PNCCUS33 Beneficiary: Priority
                Worldwide
              </p>
            </div>

            <div className="p-6 bg-white/30">
              <h2 className="font-semibold text-xl">CANADA TRANSACTIONS</h2>
              <p>
                The Royal Bank of Canada 316 Dorval Ave Lachine, QC H9S 3H7
                Transit No. 01271 Swift: ROYCCAT2 CAD Account No. 100-447-2 USD
                Account No. 400-115-2
              </p>
            </div>
          </div>

          <h3 className="text-lg font-medium py-9">Remit To Address :</h3>

          <div className="grid grid-cols-2 gap-4 ps-6 pb-9">
            <div className="border-r-4 p-6 bg-white/30">
              <h2 className="font-semibold text-xl">UAE</h2>
              <p>
                Priority Worldwide Logistics LLC 3503 Aspect Tower Business
                Avenue, Business Bay, Dubai. United Arab Emirates
              </p>
            </div>

            <div className="p-6 bg-white/30">
              <h2 className="font-semibold text-xl">AUSTRALIA</h2>
              <p>
                Priority Worldwide Pty. Ltd Suite 39, Bay 5, 2 Locomotive Street
                South Eveleigh NSW 2015 Sydney, Australia
              </p>
            </div>
          </div>

          <h3 className="text-lg font-medium pb-9">Bank Details :</h3>

          <div className="grid grid-cols-2 gap-4 ps-6 pb-9">
            <div className="border-r-4 p-6 bg-white/30">
              <h2 className="font-semibold text-xl">UAE TRANSACTIONS</h2>
              <p>
                First Abu Dhabi Bank Abu Baqar Siddique Road Diera Dubai 18977
                SWIFT: NBADAEAA IBAN: USD: AE540351031325611921002 AED:
                AE10351031325611921001 EUR: AE270351031325611921003
              </p>
            </div>

            <div className="p-6 bg-white/30">
              <h2 className="font-semibold text-xl">AU TRANSACTIONS</h2>
              <p>
                Commonwealth Bank of Australia 799 Pacific Highway Chatswood NSW
                2067 SWIFT: CTBAAU2S BSB: 062 000 AUD Account: 20564301 USD
                ACCOUNT: 20592230 EUR: 20592248 GBP: 20592257 NZD: 20592265
              </p>
            </div>
          </div>

          <p className="p-6 bg-white/30 font-semibold">
            Bank details must be provided on bank letterhead, signed and
            stamped. No payments shall be made until this is provided. Bank
            account changes must also be in the same format.
          </p>
          <h2 className="font-medium text-xl py-3">
            Important Settlement Note:
          </h2>
          <p className="p-6 bg-white/30">
            Invoices must be settled in the currency of invoice. USD transfers
            MAY ONLY BE MADE IF THE INVOICE IS ISSUED IN USD.
          </p>

          <div className="relative">
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
