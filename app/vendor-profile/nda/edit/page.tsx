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

export default function Home() {
  const [error, setError] = useState("");
  const router = useRouter();
  const [success, setsuccess] = useState<string>("");
  const [NDAData, setNDAData] = useState<any>();
  const { status, data } = useSession();
  const [checkIfAnswered, setcheckIfAnswered] = useState<boolean | undefined>();
  const ref = useRef<HTMLFormElement>(null);
  const survey = useMemo(() => {
    const thisSurvey = new Model(survey_json);
    return thisSurvey;
  }, []);

  useEffect(() => {
    async function fetchData() {
      return await getNDA(data?.user?.id);
    }

    fetchData()
      .then((response) => {
        setcheckIfAnswered(response?.success);
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
          <NDA
            contracted_partner={NDAData?.contracted_partner?.name}
            isOpenValue={true}
          />
          <div className="mt-6"></div>
          <Survey model={survey} />
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

async function saveSurveyResults(user_id: any, answers: any, questions: any) {
  // await setNDA({
  //   user_id: user_id,
  //   answers: answers,
  //   questions: questions,
  // });
}
