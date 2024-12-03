"use client";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Loader from "components/common/loader";
import LogoCard from "components/common/logo-card";
import DefaultLayout from "components/user/layouts/user-default-layout";
import {
  getVendorRegistration,
  setVendorRegistration,
} from "actions/vendor-registration";

export default function Home() {
  const [error, setError] = useState("");
  const router = useRouter();
  const [success, setsuccess] = useState<string>("");
  const [vendorRegistrationData, setVendorRegistrationData] = useState<any>();
  const { status, data } = useSession();
  const ref = useRef<HTMLFormElement>(null);

  const handleSubmit = async (formData: FormData) => {
    const r = await setVendorRegistration({
      user_id: data?.user?.id,
      company_name: formData.get("company_name"),
      head_office_address: formData.get("head_office_address"),
      city: formData.get("city"),
      country: formData.get("country"),
      telephone: formData.get("telephone"),
      fax: formData.get("fax"),
      agent_name: formData.get("agent_name"),
      title: formData.get("title"),
      email: formData.get("email"),
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
      return await getVendorRegistration(data?.user?.id);
    }
    fetchData()
      .then((response) => {
        setVendorRegistrationData(response?.data);
      })
      .catch((e) => setError(`${e}`));
  }, [data]);
  const showSession = () => {
    if (status === "authenticated") {
      return (
        <div className="min-h-screen rounded-sm border text-black border-stroke bg-white/80 bg-blend-screen bg-[url('/images/global-v1-640x480.jpg')] bg-cover px-6 py-6 shadow-default dark:border-strokedark dark:bg-white/60 sm:px-7.5">
          <LogoCard />
          <h3 className="text-xl font-medium py-3">
            VENDOR REGISTRATION / COMPANY DETAILS
          </h3>
          <form
            className="p-10 bg-white/80 rounded-md"
            action={handleSubmit}
            autoComplete="off"
          >
            <div className="w-full p-2">
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
                <label className="mb-2.5 block font-medium text-black">
                  Company Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder={
                      vendorRegistrationData?.company_name ||
                      "Enter your company name"
                    }
                    name="company_name"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:focus:border-[#fdc82e]"
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
                    placeholder={
                      vendorRegistrationData?.head_office_address ||
                      "Enter your Head Office Address"
                    }
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:focus:border-[#fdc82e]"
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
                    placeholder={
                      vendorRegistrationData?.city || "Enter your city name"
                    }
                    name="city"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:focus:border-[#fdc82e]"
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
                    placeholder={
                      vendorRegistrationData?.country ||
                      "Enter your country name"
                    }
                    name="country"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:focus:border-[#fdc82e]"
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
                    placeholder={
                      vendorRegistrationData?.telephone ||
                      "Enter your telephone number"
                    }
                    name="telephone"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:focus:border-[#fdc82e]"
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
                    placeholder={
                      vendorRegistrationData?.fax || "Enter your fax number"
                    }
                    name="fax"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:focus:border-[#fdc82e]"
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
                    placeholder={
                      vendorRegistrationData?.agent_name ||
                      "Enter your agent name"
                    }
                    name="agent_name"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:focus:border-[#fdc82e]"
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
                    placeholder={
                      vendorRegistrationData?.title || "Enter your title"
                    }
                    name="title"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:focus:border-[#fdc82e]"
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
                    placeholder={
                      vendorRegistrationData?.email || "Enter your email"
                    }
                    name="email"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-[#fdc82e] focus-visible:shadow-none dark:focus:border-[#fdc82e]"
                  />
                </div>
              </div>

              <div className="mb-5 flex justify-between items-center gap-4">
                <input
                  type="submit"
                  value="Submit"
                  className="w-full cursor-pointer rounded-lg hover:bg-[#fdc82e]/90 bg-meta-4/60 text-white p-3 hover:text-meta-4 transition"
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
