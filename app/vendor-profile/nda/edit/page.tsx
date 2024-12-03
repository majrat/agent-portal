"use client";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import Link from "next/link";
import React, {
  useEffect,
  useRef,
  useMemo,
  useState,
  useCallback,
} from "react";
import Loader from "components/common/loader";
import LogoCard from "components/common/logo-card";
import DefaultLayout from "components/user/layouts/user-default-layout";
import { getNDA, setNDA } from "actions/nda";
import NDA from "../_nda-text/nda-text";
import { Survey } from "survey-react-ui";
import { survey_json } from "models/nda-form";
import { Model } from "survey-core";
import "survey-core/defaultV2.min.css";
import { DoubleBorderLight } from "survey-core/themes";

export default function Home() {
  const [error, setError] = useState("");
  const router = useRouter();
  const [success, setsuccess] = useState<string>("");
  const [NDAData, setNDAData] = useState<any>();
  const { status, data } = useSession();
  const [checkIfAnswered, setcheckIfAnswered] = useState<string>("loading");
  const ref = useRef<HTMLFormElement>(null);
  const survey = useMemo(() => {
    const thisSurvey = new Model(survey_json);
    return thisSurvey;
  }, []);
  survey.applyTheme(DoubleBorderLight);

  useEffect(() => {
    async function fetchData() {
      return await getNDA(data?.user?.id);
    }

    fetchData()
      .then((response) => {
        setcheckIfAnswered(response?.success);
        setNDAData(response?.data);
      })
      .catch((e) => setError(`${e}`));
  }, [data]);

  const surveyComplete = useCallback(
    (thisSurvey: { setValue: (arg0: string, arg1: any) => any; data: any }) => {
      const result = survey.toJSON().pages[0].elements;
      const answers = thisSurvey.data;
      const questions = result.reduce(
        (
          acc: { [x: string]: any },
          item: { name: string | number; title: any }
        ) => {
          acc[item.name] = item.title;
          return acc;
        },
        {}
      );
      saveSurveyResults(data?.user?.id, answers, questions);
    },
    [data?.user?.id, survey]
  );

  survey.onComplete.add(surveyComplete);

  const showSession: any = () => {
    if (status === "authenticated") {
      if (checkIfAnswered === "success") {
        return (
          <div className="min-h-screen flex flex-col items-center justify-center rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
            {error && <p className="text-red">{error}</p>}
            <div className="max-w-full overflow-x-auto">
              <div className="border-b-4 border-slate-700 mb-9">
                <h2 className="text-lg text-stone-900 sm:text-3xl font-semibold mb-1 text-center">
                  NON DISCLOSURE AGREEMENT
                </h2>
                <p className="text-lg text-stone-900 sm:text-xl mb-8 text-center flex items-center justify-center gap-2">
                  Already Answered
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon text-green-600 icon-tabler icons-tabler-outline icon-tabler-rosette-discount-check"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 7.2a2.2 2.2 0 0 1 2.2 -2.2h1a2.2 2.2 0 0 0 1.55 -.64l.7 -.7a2.2 2.2 0 0 1 3.12 0l.7 .7c.412 .41 .97 .64 1.55 .64h1a2.2 2.2 0 0 1 2.2 2.2v1c0 .58 .23 1.138 .64 1.55l.7 .7a2.2 2.2 0 0 1 0 3.12l-.7 .7a2.2 2.2 0 0 0 -.64 1.55v1a2.2 2.2 0 0 1 -2.2 2.2h-1a2.2 2.2 0 0 0 -1.55 .64l-.7 .7a2.2 2.2 0 0 1 -3.12 0l-.7 -.7a2.2 2.2 0 0 0 -1.55 -.64h-1a2.2 2.2 0 0 1 -2.2 -2.2v-1a2.2 2.2 0 0 0 -.64 -1.55l-.7 -.7a2.2 2.2 0 0 1 0 -3.12l.7 -.7a2.2 2.2 0 0 0 .64 -1.55v-1" />
                    <path d="M9 12l2 2l4 -4" />
                  </svg>
                </p>
                <div className="flex flex-col gap-3 text-center">
                  <Link
                    href="/vendor-profile/nda"
                    className="bg-slate-700 text-gray hover:bg-slate-800 px-30 py-1 text-xl"
                  >
                    View Submitted Data
                  </Link>
                  <Link
                    href="#"
                    className="bg-slate-700 text-gray hover:bg-slate-800 px-30 py-1 text-xl"
                  >
                    Request Edit
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      } else if (checkIfAnswered === "loading") {
        return (
          <span className="text-[#888] text-sm mt-7">
            <Loader />
          </span>
        );
      } else {
        return (
          <div className="min-h-screen rounded-sm border text-black border-stroke bg-white/80 bg-blend-screen bg-[url('/images/pexels-tirachard-kumtanom-112571-733852.jpg')] bg-cover px-6 py-6 shadow-default dark:border-strokedark dark:bg-white/60 sm:px-7.5">
            <LogoCard />
            <NDA
              contracted_partner={NDAData?.contracted_partner?.name}
              isOpenValue={true}
            />
            <div className="mt-6"></div>
            <Survey model={survey} />
          </div>
        );
      }
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
  useEffect(() => {}, [data]);

  return <DefaultLayout>{showSession()}</DefaultLayout>;
}

async function saveSurveyResults(user_id: any, answers: any, questions: any) {
  await setNDA({
    user_id: user_id,
    answers: answers,
    questions: questions,
  });
}
