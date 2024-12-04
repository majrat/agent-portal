"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import DefaultLayout from "components/user/layouts/user-default-layout";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  setVendorWelcome,
  getVendorWelcome,
} from "../../actions/vendor-welcome";
import LogoCard from "components/common/logo-card";
import Loader from "components/common/loader";

export default function Home() {
  const { status, data } = useSession();
  const router = useRouter();
  const [Accepted, setAccepted] = useState<string>("loading");
  const [error, seterror] = useState<string>("");
  const handleAcceptSubmit = async () => {
    const userId = { user_id: data?.user?.id };
    await setVendorWelcome(userId)
      .then(() => {
        router.push("/vendor-welcome/bank-details");
      })
      .catch((e) => seterror(`${e}`));
  };
  useEffect(() => {
    async function fetchData() {
      return await getVendorWelcome(data?.user?.id);
    }
    fetchData()
      .then((response) => {
        setAccepted(response?.success);
      })
      .catch((e) => seterror(`${e}`));
  }, [data]);

  const showSession = () => {
    if (status === "authenticated") {
      return (
        <div className="min-h-screen rounded-md border text-black border-stroke bg-white/80 bg-blend-screen bg-[url('/images/home-bg-02.png')] bg-cover px-6 py-6 shadow-default dark:border-strokedark dark:bg-meta-4 sm:px-7.5">
          <LogoCard />
          <h3 className="text-xl font-medium pt-6">MISSION STATEMENT</h3>
          <p className="p-3 bg-white/30 rounded-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum enim perspiciatis eos velit. Fugiat modi sunt est saepe cum voluptatibus officia sequi numquam voluptatem consequuntur commodi cumque, optio harum dicta.
          </p>
          <h3 className="text-xl font-medium pt-6">OUR COMMITMENT</h3>
          <p className="p-3 bg-white/30 rounded-md">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nostrum, veritatis ex quas perferendis ipsam repellendus itaque, numquam, accusamus magni amet. Exercitationem neque impedit ullam doloribus optio earum ipsum. Officia?
            Molestias nisi praesentium, quasi, commodi temporibus nam rem unde accusamus consectetur consequatur, optio fuga? Ipsa maxime nam, ut tempore accusamus alias magni iste commodi asperiores aliquid incidunt dolore eius ratione!
          </p>
          <h2 className="font-medium text-xl pt-6">QUALITY POLICY</h2>
          <p className="p-3 bg-white/30 rounded-md">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam voluptas, asperiores animi delectus laudantium, neque facilis nobis voluptatem necessitatibus ullam assumenda pariatur. Fugit, pariatur odit sapiente voluptatem natus sequi doloremque!
            Iure, nesciunt soluta atque qui quibusdam distinctio facere voluptatum excepturi voluptate illo! Odio earum necessitatibus asperiores illum quas inventore consectetur facere reprehenderit? Adipisci explicabo deserunt a excepturi. Perspiciatis, facilis recusandae.
          </p>
          <div className="p-3 grid xl:grid-cols-2 grid-cols-1 gap-3">
            <div className="flex bg-white/30 rounded-md p-3">
              <div
                style={{ width: "10%", height: "auto" }}
                className="self-start"
              >
                <Image
                  className="rounded"
                  src={"/images/icon/protect.png"}
                  alt="Logo"
                  width={914}
                  height={765}
                />
              </div>

              <p
                className="px-3 self-center"
                style={{ width: "90%", height: "auto" }}
              >
                <span className="font-extrabold text-lg">I</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aliquid neque perferendis dicta voluptate nisi excepturi hic, vero, corrupti esse, laborum voluptatem explicabo quo ipsam. Quod harum id labore voluptatum!
              </p>
            </div>
            <div className="flex bg-white/30 rounded-md p-3">
              <div
                style={{ width: "10%", height: "auto" }}
                className="self-start"
              >
                <Image
                  className="rounded"
                  src={"/images/icon/rise.png"}
                  alt="Logo"
                  width={914}
                  height={765}
                />
              </div>

              <p
                className="px-3 self-center "
                style={{ width: "90%", height: "auto" }}
              >
                <span className="font-extrabold text-lg">N</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque beatae natus inventore? Soluta omnis ratione rem harum eaque, saepe magnam, doloribus voluptatem repudiandae deserunt, commodi nulla qui aut ab repellat!
              </p>
            </div>
            <div className="flex bg-white/30 rounded-md p-3">
              <div
                style={{ width: "10%", height: "auto" }}
                className="self-start"
              >
                <Image
                  className="rounded"
                  src={"/images/icon/instill.png"}
                  alt="Logo"
                  layout="responsive"
                  width={914}
                  height={765}
                />
              </div>
              <p
                className="px-3 self-center"
                style={{ width: "90%", height: "auto" }}
              >
                <span className="font-extrabold text-lg">T</span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi totam aliquid deserunt laboriosam vel harum eum quasi corporis ut, accusantium placeat, ipsum voluptates nostrum at ratione adipisci, amet eveniet? Nisi!
              </p>
            </div>
            <div className="flex bg-white/30 rounded-md p-3">
              <div
                style={{ width: "10%", height: "auto" }}
                className="self-start"
              >
                <Image
                  className="rounded"
                  src={"/images/icon/operate.png"}
                  alt="Logo"
                  layout="responsive"
                  width={914}
                  height={765}
                />
              </div>
              <p
                className="px-3 self-center"
                style={{ width: "90%", height: "auto" }}
              >
                <span className="font-extrabold text-lg">E</span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio cumque vero odit eveniet mollitia dolorum accusantium porro excepturi ullam consequatur? Repellat aliquid est hic alias, explicabo obcaecati quas dignissimos delectus?
              </p>
            </div>
            <div className="flex bg-white/30 rounded-md p-3">
              <div
                style={{ width: "10%", height: "auto" }}
                className="self-start"
              >
                <Image
                  className="rounded"
                  src={"/images/icon/respect.png"}
                  alt="Logo"
                  layout="responsive"
                  width={914}
                  height={765}
                />
              </div>
              <p
                className="px-3 self-center"
                style={{ width: "90%", height: "auto" }}
              >
                <span className="font-extrabold text-lg">R</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. At animi dolores repudiandae distinctio repellat reprehenderit numquam aut mollitia quaerat voluptas, asperiores sed accusamus ipsum ea, vitae perspiciatis natus quo iusto.
              </p>
            </div>

            <div className="flex bg-white/30 rounded-md p-3">
              <div
                style={{ width: "10%", height: "auto" }}
                className="self-start"
              >
                <Image
                  className="rounded"
                  src={"/images/icon/inspire.png"}
                  alt="Logo"
                  layout="responsive"
                  width={914}
                  height={765}
                />
              </div>
              <p
                className="px-3 self-center"
                style={{ width: "90%", height: "auto" }}
              >
                <span className="font-extrabold text-lg">N</span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui molestiae, hic et laudantium itaque magni deleniti aperiam fuga fugit consequatur odio possimus neque ipsa quae impedit explicabo sit ipsum iure!
              </p>
            </div>
            <div className="flex bg-white/30 rounded-md p-3">
              <div
                style={{ width: "10%", height: "auto" }}
                className="self-start"
              >
                <Image
                  className="rounded"
                  src={"/images/icon/transcend.png"}
                  alt="Logo"
                  layout="responsive"
                  width={914}
                  height={765}
                />
              </div>
              <p
                className="px-3 self-center"
                style={{ width: "90%", height: "auto" }}
              >
                <span className="font-extrabold text-lg">E</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis earum repellat, ut numquam maxime facilis, doloremque eveniet assumenda, molestiae officia sint voluptatem possimus excepturi deleniti consequuntur beatae fuga nesciunt debitis.
              </p>
            </div>

            <div className="flex bg-white/30 rounded-md p-3">
              <div
                style={{ width: "10%", height: "auto" }}
                className="self-start"
              >
                <Image
                  className="rounded"
                  src={"/images/icon/yield.png"}
                  alt="Logo"
                  layout="responsive"
                  width={914}
                  height={765}
                />
              </div>
              <p
                className="px-3 self-center"
                style={{ width: "90%", height: "auto" }}
              >
                <span className="font-extrabold text-lg">T</span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, optio, iusto nemo cum minus dignissimos numquam itaque, libero consectetur aliquam pariatur tempora alias? Assumenda, enim deserunt error numquam accusamus quas.
              </p>
            </div>
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
                  <Link href="/vendor-welcome/bank-details">
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
                className="fixed bottom-9 right-9 bg-[#FFBF3C]/80 cursor-pointer hover:bg-[#FFBF3C] px-3 py-2 font-extrabold text-white rounded-2xl"
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
