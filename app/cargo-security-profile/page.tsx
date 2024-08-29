"use client";
import DefaultLayout from "@/components/layouts/user-default-layout";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import "survey-core/defaultV2.min.css";
import "survey-core/modern.min.css";
import { Survey } from "survey-react-ui";
import { Model } from "survey-core";
import { useCallback } from "react";
import { survey_json } from "@/models/cargo-security-profile-form";
import {
  addAssessmentQnA,
  getAssessmentQnA,
} from "../../actions/cargo-security-profile";
import { CargoSecurityProfileType } from "@/types/cargo-security-profile";
import { ErrorResponse } from "@/types/error-response";

export default function Assessment() {
  const { status } = useSession();
  const { data } = useSession();
  const [checkIfAnswered, setcheckIfAnswered] = useState<
    CargoSecurityProfileType | ErrorResponse | null
  >(null);
  const survey = useMemo(() => {
    const thisSurvey = new Model(survey_json);
    return thisSurvey;
  }, []);

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
      if (checkIfAnswered !== null) {
        return (
          <div className="min-h-screen flex flex-col items-center justify-center rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
            <div className="max-w-full overflow-x-auto">
              <div className="border-b-4 border-slate-700 mb-9">
                <h2 className="text-lg sm:text-3xl font-semibold mb-8 text-center">
                  Already Answered
                </h2>
                <Link
                  href="/"
                  className="bg-slate-700 text-gray hover:bg-slate-800 px-40 py-3 text-xl"
                >
                  See Dashboard
                </Link>
              </div>
            </div>
          </div>
        );
      }
      return <Survey model={survey} />;
    } else if (status === "loading") {
      return <span className="text-[#888] text-sm mt-7">Loading...</span>;
    } else {
      return redirect("/login");
    }
  };

  useEffect(() => {
    async function fetchData() {
      return await getAssessmentQnA(data?.user?.id);
    }
    fetchData().then((response) => setcheckIfAnswered(response));
  }, [data]);
  console.log("+++++>>>-------->>> checkIfAnswered", checkIfAnswered);

  return <DefaultLayout>{showSession()}</DefaultLayout>;
}

async function saveSurveyResults(user_id: any, answers: any, questions: any) {
  await addAssessmentQnA({
    user_id: user_id,
    answers: answers,
    questions: questions,
  });
}
