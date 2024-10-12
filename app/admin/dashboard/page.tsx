"use client";
import { getAllusers, userPercentageChange } from "actions/user";
import CardDataStats from "components/card-data-stats";
import DefaultLayout from "components/layouts/admin-default-layout";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [error, seterror] = useState<string>("");
  const { status, data } = useSession();
  const [users, setusers] = useState([]);
  const [userPercentageChangeData, setuserPercentageChangeData] = useState<
    string | { error: string }
  >();

  useEffect(() => {
    async function fetchuserData() {
      // You can await here
      return await getAllusers();
    }
    fetchuserData()
      .then((response) => setusers(response?.data))
      .catch((e) => seterror(`${e}`));

    async function fetchuserPercentageChangeData() {
      // You can await here
      return await userPercentageChange();
    }
    fetchuserPercentageChangeData()
      .then((response) => setuserPercentageChangeData(response?.data))
      .catch((e) => seterror(`${e}`));
  }, []);

  const showSession = () => {
    if (status === "authenticated" && data.user.role === "ADMIN") {
      return (
        <div className="min-h-screen rounded-sm border text-black dark:text-white border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
          <h3 className="pb-4 text-lg">Summary:</h3>
          {error && <p className="text-red">{error}</p>}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3">
            <CardDataStats
              big_txt="Total No. of Agents"
              small_txt={users.length + ""}
              status_txt={
                userPercentageChangeData === null || undefined || Infinity
                  ? "0"
                  : userPercentageChangeData + ""
              }
            >
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
                className="icon icon-tabler icons-tabler-outline icon-tabler-tie"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 22l4 -4l-2.5 -11l.993 -2.649a1 1 0 0 0 -.936 -1.351h-3.114a1 1 0 0 0 -.936 1.351l.993 2.649l-2.5 11l4 4z" />
                <path d="M10.5 7h3l5 5.5" />
              </svg>
            </CardDataStats>
            <CardDataStats
              big_txt="Forms Completed"
              small_txt="no. of agrents"
              status_txt="1"
            >
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
                className="icon icon-tabler icons-tabler-outline icon-tabler-license"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11" />
                <path d="M9 7l4 0" />
                <path d="M9 11l4 0" />
              </svg>
            </CardDataStats>
            <CardDataStats
              big_txt="Forms Not Completed"
              small_txt="no. of agents"
              status_txt="1"
            >
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
                className="icon icon-tabler icons-tabler-outline icon-tabler-license-off"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 1 0 4 0v-2m0 -4v-8a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -.864 .126m-2.014 2.025a3 3 0 0 0 -.122 .849v11" />
                <path d="M11 7h2" />
                <path d="M9 11h2" />
                <path d="M3 3l18 18" />
              </svg>
            </CardDataStats>
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
