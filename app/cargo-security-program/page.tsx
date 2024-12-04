"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import DefaultLayout from "../../components/user/layouts/user-default-layout";
import {
  setCargoSecurityProgram,
  getCargoSecurityProgram,
} from "actions/cargo-security-program";
import { redirect, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Loader from "components/common/loader";
import LogoCard from "components/common/logo-card";

export default function CargoSecurityProgram() {
  const { status, data } = useSession();
  const router = useRouter();
  const [Accepted, setAccepted] = useState<string>("loading");
  const [error, seterror] = useState<string>("");
  const handleAcceptSubmit = async () => {
    const userId = { user_id: data?.user?.id };
    await setCargoSecurityProgram(userId)
      .then(() => {
        router.push("/cargo-security-program/cargo-security-profile");
      })
      .catch((e) => seterror(`${e}`));
  };
  useEffect(() => {
    async function fetchData() {
      return await getCargoSecurityProgram(data?.user?.id);
    }
    fetchData()
      .then((response) => {
        setAccepted(response?.success);
      })
      .catch((e) => seterror(`${e}`));
  }, [data]);
  const showSession: any = () => {
    if (status === "authenticated") {
      return (
        <div className="min-h-screen rounded-sm border text-black border-stroke bg-white/80 bg-blend-screen bg-[url('/images/pexels-tirachard-kumtanom-112571-733852.jpg')] bg-cover px-6 py-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5">
          {error && <p className="text-red">{error}</p>}
          <LogoCard />
          <h2 className="text-xl font-medium py-6">Lorem, ipsum dolor.</h2>
          <div className="p-6 bg-white/80 rounded-md">
            <div className="grid md:grid-cols-2">
              <div>
                <p className="pb-1">To: Lorem ipsum dolor sit.</p>
                <p className="pb-6">
                  Re: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, quam.
                </p>
              </div>
              <div className="md:text-end">
                <p className="pb-3">7361 Lorem ipsum dolor sit amet. 21076</p>
                <p>+1.234.567.8900 | TELEPHONE</p>
                <p>+1.234.567.8900 | TOLL FREE</p>
                <p className="pb-3">+1.234.567.8900 | 24/7 AOG HOTLINE</p>
                <a href="mailto:sales@brand.com">
                  lorem@brand.com
                </a>
              </div>
            </div>
            <p className="pb-6">Dear Sir/Madam;</p>
            <p className="pb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis velit similique earum eveniet consectetur. Est modi enim nulla consectetur autem deserunt optio. Repellendus inventore fuga facere consequatur dolorum laudantium labore.
              Earum maiores laudantium aliquid sequi nulla animi libero illum temporibus molestias! Iste accusantium amet assumenda repudiandae asperiores quisquam saepe fuga quibusdam! Reprehenderit, aperiam explicabo. At quod fugit deleniti molestiae! Minima!
              Totam maiores cum incidunt ad quia nobis nemo odio minima deleniti sit veniam aliquid porro animi veritatis, cupiditate ut iure quisquam non magni modi officiis necessitatibus a distinctio sint. Ipsa.
            </p>
            <p className="pb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ut placeat repellendus amet, dolor excepturi, sapiente voluptate natus modi impedit culpa ratione libero, illum doloribus assumenda minus quod corrupti ducimus?
              Illo, dignissimos exercitationem. Labore consequuntur est ipsum quo atque! Sapiente fuga, totam harum reprehenderit ratione officia fugit illum libero exercitationem eligendi nobis vero repellendus quae illo veniam itaque. Voluptatibus, sunt.
              Porro illo fugit aliquid eos, exercitationem ratione officiis! Impedit voluptatem, ipsa soluta magni libero aut recusandae aliquam voluptatum incidunt dignissimos, quam animi deleniti eius ipsam, unde labore esse excepturi rerum.
              Dolorem nam sit blanditiis eligendi porro maxime in tempora fugiat suscipit ullam nesciunt velit hic debitis nemo omnis, quos itaque! Magnam dolorem cupiditate quisquam molestias nam laboriosam nobis alias vel.
            </p>
            <p className="pb-6">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique nobis dolore aliquam quasi autem nihil iure corrupti quos tempore? Possimus, esse? Excepturi ut delectus reprehenderit cum maiores qui, facere repellendus.
             Sequi eligendi perferendis veniam! Temporibus vitae ratione eius placeat. Veniam voluptates nisi asperiores molestias laudantium temporibus, illo qui ratione perferendis deleniti reiciendis. Tenetur hic asperiores officiis deserunt, quae temporibus obcaecati.
             Quasi debitis deleniti pariatur aliquid cum quaerat nihil doloremque, amet repellat mollitia! Accusantium ad doloremque tempore, quisquam vero id exercitationem. Nulla hic quia pariatur quas aperiam ab odit voluptas voluptatibus.
             Ipsa doloremque ipsam beatae ex dolorem necessitatibus repellat delectus, deserunt harum labore nobis, perspiciatis laborum nam enim amet veritatis earum reprehenderit! Veritatis dicta quae quod pariatur maxime quam! Iusto, asperiores!
            </p>
            <p className="pb-6">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. A corrupti voluptates, repudiandae qui aliquid ab veritatis tempore. Molestias officia quidem reprehenderit doloribus, eveniet, pariatur quas odio, id praesentium nam magni?
             Dolorum quis alias corrupti natus aut accusamus? At nihil officiis alias reiciendis commodi rem quaerat, quas reprehenderit doloremque nam tempore debitis, esse sapiente consequatur pariatur est atque ipsa voluptatum qui?
             Soluta perspiciatis omnis corrupti rerum similique, aspernatur nisi, eos accusamus deleniti perferendis dignissimos eligendi corporis vel sint, blanditiis atque! Exercitationem aut in ea sed ut assumenda, tempore odit quam fugit.
             Eum ratione itaque laborum ea quisquam voluptates non? Ducimus laborum praesentium, facere harum architecto iste quidem corrupti voluptate minus cumque dignissimos magnam eos ab doloremque quae nisi soluta aspernatur eius.
             Necessitatibus magni quidem accusamus, magnam praesentium esse dicta exercitationem corrupti. Voluptas natus tempora dolor deleniti. Eaque excepturi voluptatibus dolorem explicabo, magnam eos iure ipsum, necessitatibus, facilis nisi illo esse doloremque?
            </p>
            <p className="pb-6">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa omnis deleniti ut deserunt sit sed magnam sunt excepturi, esse iste impedit ex officiis harum accusamus laboriosam libero et repudiandae voluptate.
              Accusantium cumque minus saepe consequatur iure ducimus nulla ad sequi eaque ea quas neque, aperiam totam earum perspiciatis possimus reiciendis dolores doloribus mollitia voluptate reprehenderit non repudiandae aliquam deserunt? Facere.
              Inventore officia ex corrupti dolore qui commodi natus sunt maiores aut provident. Exercitationem necessitatibus voluptatem officia iusto! Quae ex aliquam, quis tempore, ipsa aliquid suscipit ducimus obcaecati, corrupti eos cupiditate!
              Nisi expedita dolor quos eaque quod? Eius deserunt molestias dolor nulla tempore, quas ea quia vero accusamus ipsa laudantium eaque! Earum iure sequi omnis optio distinctio eveniet aliquam ab corporis.
              Dolorum, voluptate ducimus! Odio et necessitatibus earum eos? Soluta nemo reiciendis culpa dolorem minus quidem esse, est ab quia, architecto incidunt aspernatur possimus, laborum ducimus illo facere delectus quo voluptas.
            </p>

            <p className="pb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam vel excepturi aut id laboriosam veniam velit quasi. Expedita quod architecto ad omnis maxime. Debitis vitae et dolorum aut voluptates alias.
              Quaerat, soluta expedita nam facere officiis quas, laboriosam, praesentium iusto cum facilis omnis? Quisquam distinctio odio eos itaque ducimus provident? Assumenda iure incidunt commodi quis, quas eligendi cumque voluptates officiis.
            </p>

            <p className="pb-1">Lorem, ipsum dolor., CHB, CCS</p>
            <p className="pb-1">Lorem ipsum dolor sit.</p>
            <p className="pb-6">brand</p>
            <a className="pb-1" href="https://brand.com">
              www.brand.com
            </a>
          </div>
          <div className="relative">
            {Accepted === "success" ? (
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
                </div>
                <div className="fixed bottom-9 right-9 bg-[#FFBF3C]/80 cursor-pointer hover:bg-[#FFBF3C] px-3 py-2 font-bold text-white rounded-2xl flex">
                  <Link href="/cargo-security-program/cargo-security-profile">
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
            ) : (
              <a
                onClick={handleAcceptSubmit}
                className="fixed bottom-9 right-9 bg-[#FFBF3C]/80 hover:bg-[#FFBF3C] px-3 py-2 font-extrabold cursor-pointer text-white rounded-2xl"
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
                  className="icon icon-tabler icons-tabler-outline icon-tabler-chevrons-right"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M7 7l5 5l-5 5" />
                  <path d="M13 7l5 5l-5 5" />
                </svg>
              </a>
            )}
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
