"use client";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Loader from "components/common/loader";
import LogoCard from "components/common/logo-card";
import DefaultLayout from "components/user/layouts/user-default-layout";
import { getNDA, setNDA } from "actions/nda";
import NDA from "../_nda-text/nda-text";

export default function Home() {
  const [error, setError] = useState("");
  const router = useRouter();
  const [success, setsuccess] = useState<string>("");
  const [NDAData, setNDAData] = useState<any>();
  const { status, data } = useSession();
  const ref = useRef<HTMLFormElement>(null);

  const handleSubmit = async (formData: FormData) => {
    const r = await setNDA({
      user_id: data?.user?.id,
      contracted_partner_date: formData.get("contracted_partner_date"),
      contracted_partner_printed_name: formData.get(
        "contracted_partner_printed_name"
      ),
      contracted_partner_signature: formData.get(
        "contracted_partner_signature"
      ),
      priority_worldwide_date: formData.get("priority_worldwide_date"),
      priority_worldwide_printed_name: formData.get(
        "priority_worldwide_printed_name"
      ),
      priority_worldwide_signature: formData.get(
        "priority_worldwide_signature"
      ),
    });
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
      return await getNDA(data?.user?.id);
    }
    fetchData()
      .then((response) => {
        setNDAData(response?.data);
      })
      .catch((e) => setError(`${e}`));
  }, [data]);
  const showSession = () => {
    if (status === "authenticated") {
      return (
        <div className="min-h-screen rounded-sm border text-black border-stroke bg-white/80 bg-blend-screen bg-[url('/images/global-v1-640x480.jpg')] bg-cover px-6 py-6 shadow-default dark:border-strokedark dark:bg-white/60 sm:px-7.5">
          <LogoCard />
          <NDA contracted_partner={NDAData?.contracted_partner?.name} />
          <form
            className="p-10 mt-6 rounded-md border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark dark:text-white"
            action={handleSubmit}
            autoComplete="off"
          >
            <div className="mb-4">
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
              <p className="block font-medium text-xl pb-3">
                Contracted Partner
              </p>
              <div className="grid grid-cols-2 pt-3">
                <p className="col-span-1 block">Date</p>
                <p className="md:col-span-1 col-span-1">
                  <input
                    type="date"
                    placeholder={
                      NDAData?.contracted_partner?.date || "Enter Date"
                    }
                    name="contracted_partner_date"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-white outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:focus:border-[#fdc82e]"
                  />
                </p>
              </div>
              <div className="grid grid-cols-2 pt-3">
                <p className="col-span-1 block">Printed Name</p>
                <p className="md:col-span-1 col-span-1">
                  <input
                    type="text"
                    name="contracted_partner_printed_name"
                    placeholder={
                      NDAData?.contracted_partner?.printed_name ||
                      "Enter Printed Name"
                    }
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:focus:border-[#fdc82e]"
                  />
                </p>
              </div>
              <div className="grid grid-cols-2 pt-3">
                <p className="col-span-1 block">Signature</p>
                <p className="md:col-span-1 col-span-1">
                  <input
                    type="text"
                    placeholder={
                      NDAData?.contracted_partner?.signature ||
                      "Enter Signature"
                    }
                    name="contracted_partner_signature"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:focus:border-[#fdc82e]"
                  />
                </p>
              </div>
              <p className="block pt-9 pb-3 text-xl font-medium">
                Priority Worldwide
              </p>
              <div className="grid grid-cols-2 pt-3">
                <p className="col-span-1 block">Date</p>
                <p className="md:col-span-1 col-span-1">
                  <input
                    type="date"
                    placeholder={
                      NDAData?.priority_worldwide?.date || "Enter Date"
                    }
                    name="priority_worldwide_date"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-white outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:focus:border-[#fdc82e]"
                  />
                </p>
              </div>
              <div className="grid grid-cols-2 pt-3">
                <p className="col-span-1 block">Printed Name</p>
                <p className="md:col-span-1 col-span-1">
                  <input
                    type="text"
                    placeholder={
                      NDAData?.priority_worldwide?.printed_name ||
                      "Enter Printed Name"
                    }
                    name="priority_worldwide_printed_name"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:focus:border-[#fdc82e]"
                  />
                </p>
              </div>
              <div className="grid grid-cols-2 pt-3">
                <p className="col-span-1 block">Signature</p>
                <p className="md:col-span-1 col-span-1">
                  <input
                    type="text"
                    placeholder={
                      NDAData?.priority_worldwide?.signature ||
                      "Enter Signature"
                    }
                    name="priority_worldwide_signature"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:focus:border-[#fdc82e]"
                  />
                </p>
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
                    href="/vendor-profile/vendor-registration"
                    className="text-red"
                  >
                    Cancel
                  </Link>
                </p>
              </div>
            </div>
          </form>
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
