"use client";
import { getAllusers, userPercentageChange } from "actions/user";
import CardDataStats from "components/common/card-data-stats";
import { Agent } from "types/package";
import { Metadata } from "next";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { get_all_cargo_security_profile } from "actions/cargo-security-profile";
import { getCargoSecurityProgram } from "actions/cargo-security-program";
import { getCodeOfConductQnA } from "actions/code-of-conduct-qna";
import { getbrandPrinciples } from "actions/brand-principles";
import { getSupplierSustainabilityProfile } from "actions/supplier-sustainability-profile";
import { getVendorWelcome } from "actions/vendor-welcome";
import DefaultLayout from "components/admin/layouts/admin-default-layout";
import Loader from "components/common/loader";

export default function Dashboard() {
  const { status, data } = useSession();
  const router = useRouter();
  const [VendorWelcome, setVendorWelcome] = useState<string>("loading");
  const [brandPrinciple, setbrandPrinciple] = useState<string>("loading");
  const [CargoSecurityProgram, setCargoSecurityProgram] =
    useState<string>("loading");
  const [CodeOfConduct, setCodeOfConduct] = useState<string>("loading");
  const [SupplierSustainabilityProfile, setSupplierSustainabilityProfile] =
    useState<string>("loading");
  const [CargoSecurityProfile, setCargoSecurityProfile] = useState([]);
  const [error, seterror] = useState<string>("");

  useEffect(() => {
    async function fetchVendorWelcomeData() {
      return await getVendorWelcome(data?.user?.id);
    }
    fetchVendorWelcomeData()
      .then((response) => {
        setVendorWelcome(response?.success);
      })
      .catch((e) => seterror(`${e}`));

    async function fetchbrandPrincipleData() {
      return await getbrandPrinciples(data?.user?.id);
    }
    fetchbrandPrincipleData()
      .then((response) => {
        setbrandPrinciple(response?.success);
      })
      .catch((e) => seterror(`${e}`));

    async function fetchCargoSecurityProgram() {
      return await getCargoSecurityProgram(data?.user?.id);
    }
    fetchCargoSecurityProgram()
      .then((response) => {
        setCargoSecurityProgram(response?.success);
      })
      .catch((e) => seterror(`${e}`));

    async function fetchCodeOfConductQnAData() {
      return await getCodeOfConductQnA(data?.user?.id);
    }
    fetchCodeOfConductQnAData()
      .then((response) => {
        setCodeOfConduct(response?.success);
      })
      .catch((e) => seterror(`${e}`));

    async function fetchSupplierSustainabilityProfileData() {
      return await getSupplierSustainabilityProfile(data?.user?.id);
    }
    fetchSupplierSustainabilityProfileData()
      .then((response) => {
        setSupplierSustainabilityProfile(response?.success);
      })
      .catch((e) => seterror(`${e}`));

    async function fetchCargoSecurityProfileData() {
      return await get_all_cargo_security_profile(data?.user?.role);
    }

    fetchCargoSecurityProfileData()
      .then((response) => {
        setCargoSecurityProfile(response?.data);
      })
      .catch((e) => seterror(`${e}`));
  }, [data]);
  const AgentSSPData: Agent[] = [
    {
      name: "Jauhar",
      email: "jauhar@gmail.com",
      status: "Pending",
      last_updated: "12 Aug 2024",
    },
    {
      name: "Naseeh",
      email: "naseeh@gmail.com",
      status: "Completed",
      last_updated: "12 Jul 2024",
    },
  ];
  const AgentCSPData: Agent[] = [
    {
      name: "Jauhar",
      email: "jauhar@gmail.com",
      status: "Pending",
      last_updated: "12 Aug 2024",
    },
    {
      name: "Naseeh",
      email: "naseeh@gmail.com",
      status: "Completed",
      last_updated: "12 Jul 2024",
    },
  ];

  const AgentCOCData: Agent[] = [
    {
      name: "Jauhar",
      email: "jauhar@gmail.com",
      status: "Pending",
      last_updated: "12 Aug 2024",
    },
    {
      name: "Naseeh",
      email: "naseeh@gmail.com",
      status: "Completed",
      last_updated: "12 Jul 2024",
    },
  ];

  const showSession = () => {
    if (status === "authenticated" && data.user.role === "ADMIN") {
      return (
        <div className="min-h-screen rounded-sm border bg-[url('/images/home-bg.png')] bg-cover text-black dark:text-white border-stroke px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
          <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
            <h3 className="pb-4 text-lg">Agent: name</h3>
            <div className="max-w-full overflow-x-auto">
              <table className="w-full table-auto">
                <thead>
                  <tr className="bg-gray-2 text-left dark:bg-meta-4">
                    <th className="min-w-[220px] px-4 py-4 font-medium text-black dark:text-white xl:pl-11">
                      Form
                    </th>
                    <th className="min-w-[150px] px-4 py-4 font-medium text-black dark:text-white">
                      Last Updated
                    </th>
                    <th className="min-w-[120px] px-4 py-4 font-medium text-black dark:text-white">
                      Status
                    </th>
                    <th className="px-4 py-4 font-medium text-black dark:text-white">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {AgentCOCData.map((agentItem, key) => (
                    <tr key={key}>
                      <td className="border-b border-[#eee] px-4 py-5 pl-9 dark:border-strokedark xl:pl-11">
                        <h5 className="font-medium text-black dark:text-white">
                          {agentItem.name}
                        </h5>
                        <p className="text-sm">{agentItem.email}</p>
                      </td>
                      <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                        <p className="text-black dark:text-white">
                          {agentItem.last_updated}
                        </p>
                      </td>
                      <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                        <p
                          className={`inline-flex rounded-full bg-opacity-10 px-3 py-1 text-sm font-medium ${
                            agentItem.status === "Completed"
                              ? "bg-success text-success"
                              : // : agentItem.status === "Unpaid"
                                // ? "bg-danger text-danger"
                                "bg-warning text-warning"
                          }`}
                        >
                          {agentItem.status}
                        </p>
                      </td>
                      <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                        <div className="flex items-center space-x-3.5">
                          <button className="hover:text-primary">
                            <svg
                              className="fill-current"
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.99981 14.8219C3.43106 14.8219 0.674805 9.50624 0.562305 9.28124C0.47793 9.11249 0.47793 8.88749 0.562305 8.71874C0.674805 8.49374 3.43106 3.20624 8.99981 3.20624C14.5686 3.20624 17.3248 8.49374 17.4373 8.71874C17.5217 8.88749 17.5217 9.11249 17.4373 9.28124C17.3248 9.50624 14.5686 14.8219 8.99981 14.8219ZM1.85605 8.99999C2.4748 10.0406 4.89356 13.5562 8.99981 13.5562C13.1061 13.5562 15.5248 10.0406 16.1436 8.99999C15.5248 7.95936 13.1061 4.44374 8.99981 4.44374C4.89356 4.44374 2.4748 7.95936 1.85605 8.99999Z"
                                fill=""
                              />
                              <path
                                d="M9 11.3906C7.67812 11.3906 6.60938 10.3219 6.60938 9C6.60938 7.67813 7.67812 6.60938 9 6.60938C10.3219 6.60938 11.3906 7.67813 11.3906 9C11.3906 10.3219 10.3219 11.3906 9 11.3906ZM9 7.875C8.38125 7.875 7.875 8.38125 7.875 9C7.875 9.61875 8.38125 10.125 9 10.125C9.61875 10.125 10.125 9.61875 10.125 9C10.125 8.38125 9.61875 7.875 9 7.875Z"
                                fill=""
                              />
                            </svg>
                          </button>
                          <button className="hover:text-primary">
                            <svg
                              className="fill-current"
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M13.7535 2.47502H11.5879V1.9969C11.5879 1.15315 10.9129 0.478149 10.0691 0.478149H7.90352C7.05977 0.478149 6.38477 1.15315 6.38477 1.9969V2.47502H4.21914C3.40352 2.47502 2.72852 3.15002 2.72852 3.96565V4.8094C2.72852 5.42815 3.09414 5.9344 3.62852 6.1594L4.07852 15.4688C4.13477 16.6219 5.09102 17.5219 6.24414 17.5219H11.7004C12.8535 17.5219 13.8098 16.6219 13.866 15.4688L14.3441 6.13127C14.8785 5.90627 15.2441 5.3719 15.2441 4.78127V3.93752C15.2441 3.15002 14.5691 2.47502 13.7535 2.47502ZM7.67852 1.9969C7.67852 1.85627 7.79102 1.74377 7.93164 1.74377H10.0973C10.2379 1.74377 10.3504 1.85627 10.3504 1.9969V2.47502H7.70664V1.9969H7.67852ZM4.02227 3.96565C4.02227 3.85315 4.10664 3.74065 4.24727 3.74065H13.7535C13.866 3.74065 13.9785 3.82502 13.9785 3.96565V4.8094C13.9785 4.9219 13.8941 5.0344 13.7535 5.0344H4.24727C4.13477 5.0344 4.02227 4.95002 4.02227 4.8094V3.96565ZM11.7285 16.2563H6.27227C5.79414 16.2563 5.40039 15.8906 5.37227 15.3844L4.95039 6.2719H13.0785L12.6566 15.3844C12.6004 15.8625 12.2066 16.2563 11.7285 16.2563Z"
                                fill=""
                              />
                              <path
                                d="M9.00039 9.11255C8.66289 9.11255 8.35352 9.3938 8.35352 9.75942V13.3313C8.35352 13.6688 8.63477 13.9782 9.00039 13.9782C9.33789 13.9782 9.64727 13.6969 9.64727 13.3313V9.75942C9.64727 9.3938 9.33789 9.11255 9.00039 9.11255Z"
                                fill=""
                              />
                              <path
                                d="M11.2502 9.67504C10.8846 9.64692 10.6033 9.90004 10.5752 10.2657L10.4064 12.7407C10.3783 13.0782 10.6314 13.3875 10.9971 13.4157C11.0252 13.4157 11.0252 13.4157 11.0533 13.4157C11.3908 13.4157 11.6721 13.1625 11.6721 12.825L11.8408 10.35C11.8408 9.98442 11.5877 9.70317 11.2502 9.67504Z"
                                fill=""
                              />
                              <path
                                d="M6.72245 9.67504C6.38495 9.70317 6.1037 10.0125 6.13182 10.35L6.3287 12.825C6.35683 13.1625 6.63808 13.4157 6.94745 13.4157C6.97558 13.4157 6.97558 13.4157 7.0037 13.4157C7.3412 13.3875 7.62245 13.0782 7.59433 12.7407L7.39745 10.2657C7.39745 9.90004 7.08808 9.64692 6.72245 9.67504Z"
                                fill=""
                              />
                            </svg>
                          </button>
                          <button className="hover:text-primary">
                            <svg
                              className="fill-current"
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M16.8754 11.6719C16.5379 11.6719 16.2285 11.9531 16.2285 12.3187V14.8219C16.2285 15.075 16.0316 15.2719 15.7785 15.2719H2.22227C1.96914 15.2719 1.77227 15.075 1.77227 14.8219V12.3187C1.77227 11.9812 1.49102 11.6719 1.12539 11.6719C0.759766 11.6719 0.478516 11.9531 0.478516 12.3187V14.8219C0.478516 15.7781 1.23789 16.5375 2.19414 16.5375H15.7785C16.7348 16.5375 17.4941 15.7781 17.4941 14.8219V12.3187C17.5223 11.9531 17.2129 11.6719 16.8754 11.6719Z"
                                fill=""
                              />
                              <path
                                d="M8.55074 12.3469C8.66324 12.4594 8.83199 12.5156 9.00074 12.5156C9.16949 12.5156 9.31012 12.4594 9.45074 12.3469L13.4726 8.43752C13.7257 8.1844 13.7257 7.79065 13.5007 7.53752C13.2476 7.2844 12.8539 7.2844 12.6007 7.5094L9.64762 10.4063V2.1094C9.64762 1.7719 9.36637 1.46252 9.00074 1.46252C8.66324 1.46252 8.35387 1.74377 8.35387 2.1094V10.4063L5.40074 7.53752C5.14762 7.2844 4.75387 7.31252 4.50074 7.53752C4.24762 7.79065 4.27574 8.1844 4.50074 8.43752L8.55074 12.3469Z"
                                fill=""
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
