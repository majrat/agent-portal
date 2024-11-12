"use client";
import { setInvitation } from "actions/admin/invitation";
import { getAllusers, userPercentageChange } from "actions/user";
import DefaultLayout from "components/admin/layouts/admin-default-layout";
import CardDataStats from "components/common/card-data-stats";
import Loader from "components/common/loader";
import { Metadata } from "next";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const { status, data } = useSession();
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  const handleSubmit = async (formData: FormData) => {
    const res = await setInvitation({
      user_id: data?.user.id,
      first_name: formData.get("first_name"),
      last_name: formData.get("last_name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
      org_code: formData.get("org_code"),
    });
    console.log("res===>", res)
    if (res?.success === false) {
      setError(res.message as string);
    }
    if (res?.success === true) {
      setSuccess(res?.message);
      setError("");
      await new Promise((resolve) => setTimeout(resolve, 2500));
      setSuccess("");
    }
  };
  const showSession = () => {
    if (status === "authenticated" && data.user.role === "ADMIN") {
      return (
        <div className="min-h-screen rounded-sm border text-black dark:text-white border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
          {success && (
            <div className="relative ease-in-out duration-500 bg-gray-100">
              <p className="fixed text-black inset-1 w-screen h-screen text-2xl font-bold bg-white/30 backdrop-blur-lg rounded-lg flex items-center justify-center text-center p-4 m-auto z-50">
                {success}
              </p>
            </div>
          )}
          <div className="flex flex-col gap-9">
            {/* <!-- Contact Form --> */}
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                {error && <p className="text-red">{error}</p>}
                <h3 className="font-medium text-black dark:text-white">
                  Send Invitation to Agent
                </h3>
              </div>
              <form action={handleSubmit}>
                <div className="p-6.5">
                  <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                    <div className="w-full xl:w-1/2">
                      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                        First name <span className="text-meta-1">*</span>
                      </label>
                      <input
                        type="text"
                        name="first_name"
                        placeholder="Enter agent's first name"
                        required
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />
                    </div>

                    <div className="w-full xl:w-1/2">
                      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                        Last name <span className="text-meta-1">*</span>
                      </label>
                      <input
                        type="text"
                        name="last_name"
                        placeholder="Enter agent's last name"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                    <div className="w-full xl:w-1/2">
                      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                        Email <span className="text-meta-1">*</span>
                      </label>
                      <input
                        type="text"
                        name="email"
                        placeholder="Enter agent's email address"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        required
                      />
                    </div>

                    <div className="w-full xl:w-1/2">
                      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                        Organisation Code <span className="text-meta-1">*</span>
                      </label>
                      <input
                        type="text"
                        name="org_code"
                        placeholder="Enter agent's organisation code"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-4.5">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Subject <span className="text-meta-1">*</span>
                    </label>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Type subject"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      required
                    />
                  </div>

                  {/* <SelectGroupOne /> */}

                  <div className="mb-6">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Message <span className="text-meta-1">*</span>
                    </label>
                    <textarea
                      rows={6}
                      placeholder="Type message"
                      name="message"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      required
                    ></textarea>
                  </div>

                  <div className="mb-5">
                    <input
                      type="submit"
                      value="Send Invitation"
                      className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    } else if (status === "loading") {
      return <span className="text-[#888] text-sm mt-7"><Loader /></span>;
    } else {
      return redirect("/auth/login");
    }
  };
  return <DefaultLayout>{showSession()}</DefaultLayout>;
}
