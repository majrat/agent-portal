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
} from "../../../actions/vendor-welcome";
import LogoCard from "components/common/logo-card";
import Loader from "components/common/loader";

export default function Home() {
  const { status, data } = useSession();
  const router = useRouter();
  const [Accepted, setAccepted] = useState<boolean>(false);
  const [error, seterror] = useState<string>("");
  const handleAcceptSubmit = async () => {
    const userId = { user_id: data?.user?.id };
    await setVendorWelcome(userId)
      .then(() => {
        router.push("/priority-principles");
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
        <div className="min-h-screen rounded-sm border text-black border-stroke bg-white/80 bg-blend-screen bg-[url('/images/home-bg-02.png')] px-3 lg:px-6 py-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5">
          <LogoCard />
          <h2 className="text-xl font-medium py-6">
            PHYSICAL OFFICES OF PRIORITY WORLDWIDE
          </h2>
          <div className="grid md:grid-cols-2 gap-10 place-items-center">
            <div className="relative overflow-hidden w-full h-60 text-white rounded-md hover:border-stroke duration-300 ease-linear border border-meta-4">
              <div className="z-9 w-full h-60 absolute p-3 md:p-6 bg-meta-4/90">
                <h2 className="font-semibold text-xl">Benin</h2>
                <p>Lot 712 Maison Issiaka I. Gbegamey-Centre</p>
                <p>12eme arondissement de Cotonou</p>
                <p>Cotonou, Benin</p>
                <div className="mt-3 flex">
                  <p className="font-semibold">Email: </p>
                  <a
                    href="mailto:benin@priorityworldwide.com"
                    className="text-[#FFBF3C] hover:underline"
                  >
                    &nbsp;benin@priorityworldwide.com
                  </a>
                </div>
                <div className="mt-3 flex">
                  <p className="font-semibold">Telephone: </p>
                  <a
                    href="tel:+22996040699"
                    className="text-[#FFBF3C] hover:underline"
                  >
                    &nbsp;+229 96 04 06 99
                  </a>
                </div>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30931630.729549248!2d-6.022373210672462!3d-7.572457517093634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x102355add1367d15%3A0xb600df511e2a0f7f!2sGbegamey%2C%20Cotonou%2C%20Benin!5e1!3m2!1sen!2sae!4v1730542791276!5m2!1sen!2sae"
                className="h-150 z-1 w-full absolute -mt-39 grayscale"
                style={{ border: "0" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="relative overflow-hidden w-full h-60 text-white text-start rounded-md hover:border-stroke duration-300 ease-linear border border-meta-4">
              <div className="z-9 w-full h-60 absolute p-3 md:p-6 bg-meta-4/90">
                <h2 className="font-semibold text-xl">
                  Central African Republic
                </h2>
                <p>CROISEMENT SICA-BENZ-VI</p>
                <p>1ER IMMEUBLE NDJOKO 2 ieme ETAGE</p>
                <p>Bangui, Central African Republic</p>
                <div className="mt-3 flex">
                  <p className="font-semibold">Email: </p>
                  <a
                    href="mailto:car@priorityworldwide.com"
                    className="text-[#FFBF3C] hover:underline"
                  >
                    &nbsp;car@priorityworldwide.com
                  </a>
                </div>
                <div className="mt-3 flex">
                  <p className="font-semibold">Telephone: </p>
                  <a
                    href="tel:+23675657582"
                    className="text-[#FFBF3C] hover:underline"
                  >
                    &nbsp;+236 75 65 75 82
                  </a>
                </div>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12044642.828952285!2d20.785693515875696!3d4.349789817297088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10b8ef1701227405%3A0x4df674afb26c40!2sSchool%20Benz%20Vi!5e1!3m2!1sen!2sae!4v1730544438239!5m2!1sen!2sae"
                className="h-150 z-1 w-full absolute -mt-39 grayscale"
                style={{ border: "0" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="relative overflow-hidden w-full h-60 text-white rounded-md hover:border-stroke duration-300 ease-linear border border-meta-4">
              <div className="z-9 w-full h-60 absolute p-3 md:p-6 bg-meta-4/90">
                <h2 className="font-semibold text-xl">Australia</h2>
                <p>Priority Worldwide Pty Ltd Suite 39,</p>
                <p>Bay 5, 2 Locomotive Street,</p>
                <p>South Eveleigh NSW 2015, Australia</p>
                <div className="mt-3 flex">
                  <p className="font-semibold">Email: </p>
                  <a
                    href="mailto:sales.au@priorityworldwide.com"
                    className="text-[#FFBF3C] hover:underline"
                  >
                    &nbsp;sales.au@priorityworldwide.com
                  </a>
                </div>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12044642.828952285!2d20.785693515875696!3d4.349789817297088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10b8ef1701227405%3A0x4df674afb26c40!2sSchool%20Benz%20Vi!5e1!3m2!1sen!2sae!4v1730544438239!5m2!1sen!2sae"
                className="h-150 z-1 w-full absolute -mt-39 grayscale"
                style={{ border: "0" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="relative overflow-hidden w-full h-60 text-white rounded-md hover:border-stroke duration-300 ease-linear border border-meta-4">
              <div className="z-9 w-full h-60 absolute p-3 md:p-6 bg-meta-4/90">
                <h2 className="font-semibold text-xl">Bosnia</h2>
                <p>PWS Bosnia d.o.o. Srebrenik</p>
                <p>ul. 21. Srebrenicke brigade bb Srebrenik,</p>
                <p>75359 Bosnia and Herzegovina</p>
                <div className="mt-3 flex">
                  <p className="font-semibold">Email: </p>
                  <a
                    href="mailto:bosnia@priorityworldwide.com"
                    className="text-[#FFBF3C] hover:underline"
                  >
                    &nbsp;bosnia@priorityworldwide.com
                  </a>
                </div>
                <div className="mt-3 flex">
                  <p className="font-semibold">Telephone: </p>
                  <a
                    href="tel:+38762885360"
                    className="text-[#FFBF3C] hover:underline"
                  >
                    &nbsp;+387 62 885 360
                  </a>
                </div>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d172044.0289043161!2d18.46994389788339!3d44.712547288190784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475c1dcdc979ba79%3A0x5bbd46adbe3ea40f!2sPWS%20Bosnia!5e1!3m2!1sen!2sae!4v1730550134843!5m2!1sen!2sae"
                className="h-150 z-1 w-full absolute -mt-39 grayscale"
                style={{ border: "0" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="relative overflow-hidden w-full h-60 text-white rounded-md hover:border-stroke duration-300 ease-linear border border-meta-4">
              <div className="z-9 w-full h-60 absolute p-3 md:p-6 bg-meta-4/90">
                <h2 className="font-semibold text-xl">Burkina Faso</h2>
                <p>Boulevard des Tansoba,</p>
                <p>face gare routiere 10 BP 13608</p>
                <p>Ouagadougou, Burkina Faso</p>
                <div className="mt-3 flex">
                  <p className="font-semibold">Email: </p>
                  <a
                    href="mailto:burkina@priorityworldwide.com"
                    className="text-[#FFBF3C] hover:underline"
                  >
                    &nbsp;burkina@priorityworldwide.com
                  </a>
                </div>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44089.90478434337!2d-1.520461867934852!3d12.340041162205749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xe2ebd7dfd18add1%3A0xa07f40ad1d39f184!2sGare%20routi%C3%A8re!5e1!3m2!1sen!2sae!4v1730551221474!5m2!1sen!2sae"
                className="h-150 z-1 w-full absolute -mt-39 grayscale"
                style={{ border: "0" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="relative overflow-hidden w-full h-60 text-white rounded-md hover:border-stroke duration-300 ease-linear border border-meta-4">
              <div className="z-9 w-full h-60 absolute p-3 md:p-6 bg-meta-4/90">
                <h2 className="font-semibold text-xl">Canada</h2>
                <p>Priority Worldwide / Priorité</p>
                <p>Mondiale 195 Avenue du Voyageur,</p>
                <p>Pointe Claire, QC H9R 6B2, Canada</p>
                <div className="mt-3 flex">
                  <p className="font-semibold">Email: </p>
                  <a
                    href="mailto:sales.ca@priorityworldwide.com"
                    className="text-[#FFBF3C] hover:underline"
                  >
                    &nbsp;sales.ca@priorityworldwide.com
                  </a>
                </div>
                <div className="mt-3 flex">
                  <p className="font-semibold">Telephone: </p>
                  <a
                    href="tel:+15149055983"
                    className="text-[#FFBF3C] hover:underline"
                  >
                    &nbsp;+1.514.905.5983
                  </a>
                </div>
                <div className="flex">
                  <p className="font-semibold">24/7 AOG Hotline: </p>
                  <a
                    href="tel:+17189473702"
                    className="text-[#FFBF3C] hover:underline"
                  >
                    &nbsp;+1.718.947.3702
                  </a>
                </div>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.9409345760964!2d-73.79191092326049!3d45.46427097107399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc917b39971bd11%3A0xb4f1d8e09aa51f37!2sPriority%20Worldwide!5e1!3m2!1sen!2sae!4v1730551925929!5m2!1sen!2sae"
                className="h-150 z-1 w-full absolute -mt-39 grayscale"
                style={{ border: "0" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="relative overflow-hidden w-full h-60 text-white rounded-md hover:border-stroke duration-300 ease-linear border border-meta-4">
              <div className="z-9 w-full h-60 absolute p-3 md:p-6 bg-meta-4/90">
                <h2 className="font-semibold text-xl">Chad</h2>
                <p>BOULEVARD PRESIDENT NGARTA TOUMBALBAYE</p>
                <p>IMMEUBLE SAAR, QUARTIER KLEMAT</p>
                <p>N’DJAMENA, CHAD</p>
                <div className="mt-3 flex">
                  <p className="font-semibold">Email: </p>
                  <a
                    href="mailto:chad@priorityworldwide.com"
                    className="text-[#FFBF3C] hover:underline"
                  >
                    &nbsp;chad@priorityworldwide.com
                  </a>
                </div>
                <div className="mt-3 flex">
                  <p className="font-semibold">Telephone: </p>
                  <a
                    href="tel:+23566541919"
                    className="text-[#FFBF3C] hover:underline"
                  >
                    &nbsp;+235 66 54 19 19
                  </a>
                </div>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d36489.9781884049!2d15.032019351812162!3d12.11673129002176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x111963068e3ecbd3%3A0x44498e1e3759de9d!2sBureau%20WFP%20-%20N%E2%80%99djamena!5e1!3m2!1sen!2sae!4v1730552632876!5m2!1sen!2sae"
                className="h-150 z-1 w-full absolute -mt-39 grayscale"
                style={{ border: "0" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="relative overflow-hidden w-full h-60 text-white rounded-md hover:border-stroke duration-300 ease-linear border border-meta-4">
              <div className="z-9 w-full h-60 absolute p-3 md:p-6 bg-meta-4/90">
                <h2 className="font-semibold text-xl">Lebanon</h2>
                <p>Sin El Fil – Horsh Tabet</p>
                <p>Center 288 – Ground Floor</p>
                <p>Beirut, Lebanon</p>
                <div className="mt-3 flex">
                  <p className="font-semibold">Email: </p>
                  <a
                    href="mailto:lebanon@priorityworldwide.com"
                    className="text-[#FFBF3C] hover:underline"
                  >
                    &nbsp;lebanon@priorityworldwide.com
                  </a>
                </div>
                <div className="mt-3 flex">
                  <p className="font-semibold">Telephone: </p>
                  <a
                    href="tel:+9611500047"
                    className="text-[#FFBF3C] hover:underline"
                  >
                    &nbsp;+961.1.500.047
                  </a>
                </div>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15491.695053362111!2d35.515102468011676!3d33.88307272153564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f17b6ec26f4f1%3A0x458fa0d443353b89!2sHorsh%20Tabet%20Park!5e1!3m2!1sen!2sae!4v1730553297545!5m2!1sen!2sae"
                className="h-150 z-1 w-full absolute -mt-39 grayscale"
                style={{ border: "0" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="relative overflow-hidden w-full h-60 text-white rounded-md hover:border-stroke duration-300 ease-linear border border-meta-4">
              <div className="z-9 w-full h-60 absolute p-3 md:p-6 bg-meta-4/90">
                <h2 className="font-semibold text-xl">Mali</h2>
                <p>BACO DJICORONI ACI</p>
                <p>RUE 631 PORTE 836</p>
                <p>BAMAKO – MALI</p>
                <p>FAX: +223 20 28 01 07</p>
                <div className="mt-3 flex">
                  <p className="font-semibold">Email: </p>
                  <a
                    href="mailto:mali@priorityworldwide.com"
                    className="text-[#FFBF3C] hover:underline"
                  >
                    &nbsp;mali@priorityworldwide.com
                  </a>
                </div>
                <div className="mt-3 flex">
                  <p className="font-semibold">Telephone: </p>
                  <a
                    href="tel:+22344905113"
                    className="text-[#FFBF3C] hover:underline"
                  >
                    &nbsp;+223 44 90 51 13
                  </a>
                </div>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4552.862233391437!2d-8.028545924282158!3d12.597937087684196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xe51cc1f5b253077%3A0x7a1bf49488328679!2sFatima%20Center!5e1!3m2!1sen!2sae!4v1730553628179!5m2!1sen!2sae"
                className="h-150 z-1 w-full absolute -mt-39 grayscale"
                style={{ border: "0" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="relative overflow-hidden w-full h-60 text-white rounded-md hover:border-stroke duration-300 ease-linear border border-meta-4">
              <div className="z-9 w-full h-60 absolute p-3 md:p-6 bg-meta-4/90">
                <h2 className="font-semibold text-xl">Niger</h2>
                <p>Boulevard Mali Béro</p>
                <p>Complexe Commercial HAMA PATÉ</p>
                <p>Block #5 Niamey, Niger</p>
                <div className="mt-3 flex">
                  <p className="font-semibold">Email: </p>
                  <a
                    href="mailto:niger@priorityworldwide.com"
                    className="text-[#FFBF3C] hover:underline"
                  >
                    &nbsp;niger@priorityworldwide.com
                  </a>
                </div>
                <div className="mt-3 flex">
                  <p className="font-semibold">Telephone: </p>
                  <a
                    href="tel:+22791151060"
                    className="text-[#FFBF3C] hover:underline"
                  >
                    &nbsp;+227.91.15.10.60
                  </a>
                </div>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d36288.10870495851!2d2.114764786317729!3d13.513953505102107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11d075f146b7600f%3A0x8a64c186b97dc8ea!2sBlvd%20Mali%20Bero%2C%20Niamey%2C%20Niger!5e1!3m2!1sen!2sae!4v1730554110388!5m2!1sen!2sae"
                className="h-150 z-1 w-full absolute -mt-39 grayscale"
                style={{ border: "0" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="relative overflow-hidden w-full h-60 text-white rounded-md hover:border-stroke duration-300 ease-linear border border-meta-4">
              <div className="z-9 w-full h-60 absolute p-3 md:p-6 bg-meta-4/90">
                <h2 className="font-semibold text-xl">Senegal</h2>
                <p>Les Almadies,</p>
                <p>Lot Numéro 154 Deuxième étage</p>
                <p>Dakar, Senegal</p>
                <div className="mt-3 flex">
                  <p className="font-semibold">Email: </p>
                  <a
                    href="mailto:senegal@priorityworldwide.com"
                    className="text-[#FFBF3C] hover:underline"
                  >
                    &nbsp;senegal@priorityworldwide.com
                  </a>
                </div>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9023.06333629478!2d-17.534339401342873!3d14.74565584659198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec112dfda00aff1%3A0xe5f72816848076b0!2sLes%20Almadies%2C%20Dakar%2C%20Senegal!5e1!3m2!1sen!2sae!4v1730557053861!5m2!1sen!2sae"
                className="h-150 z-1 w-full absolute -mt-39 grayscale"
                style={{ border: "0" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="relative overflow-hidden w-full h-60 text-white rounded-md hover:border-stroke duration-300 ease-linear border border-meta-4">
              <div className="z-9 w-full h-60 absolute p-3 md:p-6 bg-meta-4/90">
                <h2 className="font-semibold text-xl">Togo</h2>
                <p>1907 Avenue de la paix, B.P.</p>
                <p>1819, Lome, Togo</p>
                <div className="mt-3 flex">
                  <p className="font-semibold">Email: </p>
                  <a
                    href="mailto:togo@priorityworldwide.com"
                    className="text-[#FFBF3C] hover:underline"
                  >
                    &nbsp;togo@priorityworldwide.com
                  </a>
                </div>
                <div className="mt-3 flex">
                  <p className="font-semibold">Telephone: </p>
                  <a
                    href="tel:+22890146066"
                    className="text-[#FFBF3C] hover:underline"
                  >
                    &nbsp;+228.90.14.60.66
                  </a>
                </div>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34862.286795772714!2d1.2380529796669997!3d6.153698008431501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1023e17dcd1e1c83%3A0xe204ac1605a010f1!2sAgence%20immobili%C3%A8re%20Rotor!5e1!3m2!1sen!2sae!4v1730558460790!5m2!1sen!2sae"
                className="h-150 z-1 w-full absolute -mt-39 grayscale"
                style={{ border: "0" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="relative overflow-hidden w-full h-60 text-white rounded-md hover:border-stroke duration-300 ease-linear border border-meta-4">
              <div className="z-9 w-full h-60 absolute p-3 md:p-6 bg-meta-4/90">
                <h2 className="font-semibold text-xl">UAE / Dubai</h2>
                <p>
                  Priority Worldwide FZCO G 31, West Wing 3 DAFZA, AL Quds
                  Street PO Box : 371639
                </p>
                <p>Priority Worldwide Logistics LLC 3503 Aspect Tower,</p>
                <p>Business Bay, Dubai 2260 – United Arab Emirates</p>
                <div className="mt-3 flex">
                  <p className="font-semibold">Email: </p>
                  <a
                    href="mailto:dubai@priorityworldwide.com"
                    className="text-[#FFBF3C] hover:underline"
                  >
                    &nbsp;dubai@priorityworldwide.com
                  </a>
                </div>
                <div className="mt-3 flex">
                  <p className="font-semibold">Telephone: </p>
                  <a
                    href="tel:+97147187128"
                    className="text-[#FFBF3C] hover:underline"
                  >
                    &nbsp;+971 4 718 7128
                  </a>
                </div>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5269.829411841793!2d55.37297046858729!3d25.26095372710018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5db161ca422f%3A0xe970cab8a67f58db!2sForesight%20Group%20Services%20Limited%20FZCO!5e1!3m2!1sen!2sae!4v1730558740932!5m2!1sen!2sae"
                className="h-150 z-1 w-full absolute -mt-39 grayscale"
                style={{ border: "0" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="relative overflow-hidden w-full h-60 text-white rounded-md hover:border-stroke duration-300 ease-linear border border-meta-4">
              <div className="z-9 w-full h-60 absolute p-3 md:p-6 bg-meta-4/90">
                <h2 className="font-semibold text-xl">USA / BWI</h2>
                <p>7361 Coca Cola Dr, Hanover,</p>
                <p>MD 21076 USA</p>
                <div className="mt-3 flex">
                  <p className="font-semibold">Email: </p>
                  <a
                    href="mailto:sales@priorityworldwide.com"
                    className="text-[#FFBF3C] hover:underline"
                  >
                    &nbsp;sales@priorityworldwide.com
                  </a>
                </div>
                <div className="mt-3 flex">
                  <p className="font-semibold">Telephone: </p>
                  <a
                    href="tel:+14107667470"
                    className="text-[#FFBF3C] hover:underline"
                  >
                    &nbsp;+1.410.766.7470
                  </a>
                </div>
                <div className="mt-3 flex">
                  <p className="font-semibold">24/7 AOG HOTLINE: </p>
                  <a
                    href="tel:+17189473702"
                    className="text-[#FFBF3C] hover:underline"
                  >
                    &nbsp;+1.718.947.3702
                  </a>
                </div>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.9830858625355!2d-76.734862087971!3d39.1858327715457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7e229c7381505%3A0xc023fb9f0210300a!2s7361%20Coca%20Cola%20Dr%2C%20Hanover%2C%20MD%2021076%2C%20USA!5e1!3m2!1sen!2sae!4v1730559123083!5m2!1sen!2sae"
                className="h-150 z-1 w-full absolute -mt-39 grayscale"
                style={{ border: "0" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="relative overflow-hidden w-full h-60 text-white rounded-md hover:border-stroke duration-300 ease-linear border border-meta-4">
              <div className="z-9 w-full h-60 absolute p-3 md:p-6 bg-meta-4/90">
                <h2 className="font-semibold text-xl">USA / LAX</h2>
                <p>1200 W Walnut, Compton,</p>
                <p>CA 90220</p>
                <div className="mt-3 flex">
                  <p className="font-semibold">Email: </p>
                  <a
                    href="mailto:laxsales@priorityworldwide.com"
                    className="text-[#FFBF3C] hover:underline"
                  >
                    &nbsp;laxsales@priorityworldwide.com
                  </a>
                </div>
                <div className="mt-3 flex">
                  <p className="font-semibold">Telephone: </p>
                  <a
                    href="tel:+13103488449"
                    className="text-[#FFBF3C] hover:underline"
                  >
                    &nbsp;+1.310.348.8449
                  </a>
                </div>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3873.2742245409127!2d-118.24561998817725!3d33.875351373112295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2cb251ac33367%3A0x87489efd70790b5f!2s1200%20W%20Walnut%20St!5e1!3m2!1sen!2sae!4v1730559417842!5m2!1sen!2sae"
                className="h-150 z-1 w-full absolute -mt-39 grayscale"
                style={{ border: "0" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="relative">
            <div className="fixed bottom-9 right-9 bg-green-600/80 cursor-pointer hover:bg-green-800 px-3 py-2 font-bold text-white rounded-2xl flex">
              <Link href="/priority-principles">
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
          </div>
        </div>
      );
    } else if (status === "loading") {
      return <span className="text-[#888] text-sm mt-7"><Loader /></span>;
    } else {
      router.push("/auth/login");
    }
  };
  return <DefaultLayout>{showSession()}</DefaultLayout>;
}
