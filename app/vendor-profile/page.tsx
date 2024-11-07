"use client";
import { signIn, useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import DefaultLayout from "../../components/user/layouts/user-default-layout";
import React, { useState } from "react";
import LoaderMini from "components/common/loader-mini";
import Loader from "components/common/loader";
import LogoCard from "components/common/logo-card";

export default function Home() {
  const [error, setError] = useState("");
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setsuccess] = useState<string>("");
  const handleSubmit = async (formData: FormData) => {
    setLoading(true);
    // const res = await signIn("credentials", {
    //   email: formData.get("email"),
    //   password: formData.get("password"),
    //   redirect: false,
    // });
    // if (res?.error) {
    //   setLoading(false);
    //   setError(res.error as string);
    // }
    // if (res?.ok) {
    //   setLoading(false);
    //   setsuccess("Login Successful");
    //   await new Promise((resolve) => setTimeout(resolve, 2500));
    //   return router.push("/");
    // }
  };
  const { status } = useSession();
  const showSession = () => {
    if (status === "authenticated") {
      return (
        <div className="min-h-screen rounded-sm border text-black border-stroke bg-white/80 bg-blend-screen bg-[url('/images/global-v1-640x480.jpg')] bg-cover px-6 py-6 shadow-default dark:border-strokedark dark:bg-white/60 sm:px-7.5">
          <LogoCard />
          <div>
            <h2 className="font-medium text-xl py-3">
              Vendor Registration/Company details
            </h2>
            <form
              className="p-3 bg-white/80 rounded-md"
              action={handleSubmit}
              autoComplete="off"
            >
              <div className="w-full p-2">
                <div className="mb-4">
                  <div className="flex">
                    {error && <span className="text-red mr-4">{error}</span>}
                  </div>
                  <label className="mb-2.5 block font-medium text-black">
                    Company Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Enter your company name"
                      name="company_name"
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:border-form-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-[#fdc82e]"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black">
                    Head Office Address
                  </label>
                  <div className="relative">
                    <textarea
                      name="head_office_address"
                      placeholder="Enter your Head Office Address"
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:border-form-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-[#fdc82e]"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black">
                    City
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Enter your city name"
                      name="city"
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:border-form-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-[#fdc82e]"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black">
                    Country
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Enter your country name"
                      name="country"
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:border-form-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-[#fdc82e]"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black">
                    Telephone
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      placeholder="Enter your telephone number"
                      name="telephone"
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:border-form-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-[#fdc82e]"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black">
                    Fax
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      placeholder="Enter your fax number"
                      name="fax"
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:border-form-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-[#fdc82e]"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black">
                    Agent Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Enter your agent name"
                      name="agent_name"
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:border-form-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-[#fdc82e]"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black">
                    Title
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Enter your title"
                      name="title"
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:border-form-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-[#fdc82e]"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black">
                    Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      name="email"
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:border-form-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-[#fdc82e]"
                    />
                  </div>
                </div>

                <div className="mb-5 flex justify-between items-center gap-4">
                  <input
                    type="submit"
                    value="Submit"
                    className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
                  />
                  {loading && <LoaderMini />}
                </div>
              </div>
            </form>
          </div>
          <h2 className="pb-3">International Agency Agreement</h2>
          <h2 className="pb-3">Bank details</h2>
          <h2 className="pb-3">Agency credit application</h2>
          <h2 className="pb-3">NDA</h2>
          <h2 className="pb-3">
            Other – place for agents to upload any additional info they want to
            share like marketing materials
          </h2>
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
              <p>Pending</p>
            </div>
            <div className="fixed bottom-9 right-9 bg-green-600/80 cursor-pointer hover:bg-green-800 px-3 py-2 font-bold text-white rounded-2xl flex">
              <Link href="/cargo-security-program">
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
        </div>
      );
    } else if (status === "loading") {
      return (
        <span className="text-[#888] text-sm mt-7">
          <Loader />
        </span>
      );
    } else {
      return redirect("/auth/login");
    }
  };
  return <DefaultLayout>{showSession()}</DefaultLayout>;
}
