"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import "survey-core/defaultV2.min.css";
import "survey-core/modern.min.css";
import { Survey } from "survey-react-ui";
import { Model } from "survey-core";
import { useCallback } from "react";
import { survey_json } from "@/models/code-of-conduct-form";
import React from "react";
import DefaultLayout from "../../components/layouts/user-default-layout";
import {
  getCodeOfConductQnA,
  addCodeOfConductQnA,
} from "../../actions/code-of-conduct-qna";

export default function CodeOfConduct() {
  // State to track checkbox status
  const [isChecked, setIsChecked] = useState(false);

  // Function to handle checkbox change
  const handleCheckboxChange = (event: {
    target: { checked: boolean | ((prevState: boolean) => boolean) };
  }) => {
    setIsChecked(event.target.checked);
  };

  // Function to handle button click (for example, navigating to the next page)
  const handleNextClick = () => {
    if (isChecked) {
      // Logic to navigate to the next page
      console.log("Navigating to the next page");
      // Example: use router.push('/next-page') if you're using Next.js routing
    }
  };

  const { status } = useSession();
  const { data } = useSession();
  const [checkIfAnswered, setcheckIfAnswered] = useState([]);
  const survey = useMemo(() => {
    const thisSurvey = new Model(survey_json);
    return thisSurvey;
  }, []);

  useEffect(() => {
    async function fetchData() {
      return await getCodeOfConductQnA(data?.user?.id);
    }
    fetchData().then((response) => setcheckIfAnswered(response));
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
      console.log("CodeOfConduct-survey-questions=====> ", questions);
      console.log("CodeOfConduct-survey-answers=====> ", thisSurvey.data);
      saveSurveyResults(data?.user?.id, answers, questions);
    },
    [data?.user?.id, survey]
  );

  survey.onComplete.add(surveyComplete);

  const showSession: any = () => {
    if (status === "authenticated") {
      if (checkIfAnswered?.length !== 0 || checkIfAnswered == undefined) {
        return (
          <div className="min-h-screen flex flex-col items-center justify-center rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
            <div className="max-w-full overflow-x-auto">
              <div className="border-b-4 border-slate-700 mb-9">
                <h2 className="text-lg sm:text-3xl font-semibold mb-8 text-center">
                  Already Answered
                </h2>
                <Link
                  href="/supplier-sustainability-profile"
                  className="bg-slate-700 text-gray hover:bg-slate-800 px-40 py-3 text-xl"
                >
                  Next
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

  return <DefaultLayout>{showSession()}</DefaultLayout>;
}

async function saveSurveyResults(user_id: any, answers: any, questions: any) {
  await addCodeOfConductQnA({
    user_id: user_id,
    answers: answers,
    questions: questions,
  });
}
