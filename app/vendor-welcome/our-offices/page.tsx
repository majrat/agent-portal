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
import MapCard from "./_map-card/map-card";

export default function Home() {
  const { status, data } = useSession();
  const router = useRouter();
  const [Accepted, setAccepted] = useState<string>("loading");
  const [error, seterror] = useState<string>("");
  const handleAcceptSubmit = async () => {
    const userId = { user_id: data?.user?.id };
    await setVendorWelcome(userId)
      .then(() => {
        router.push("/brand-principles");
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
            PHYSICAL OFFICES OF brand
          </h2>
          <div className="grid md:grid-cols-2 gap-10 place-items-center">
            <MapCard
              main_location="Benin"
              address="Lot 712 Maison Issiaka I. Gbegamey-Centre, 12eme arondissement de Cotonou, Cotonou, Benin"
              email="benin@brand.com"
              telephone="+22996040699"
              aog_hotline=""
              gmap_link="https://maps.app.goo.gl/7PY9N1W3bhzVv6r59"
              iframe_link="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d187972.0631662173!2d-73.76706251007089!3d45.557040200179955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x24a5165d183a9795%3A0x25bbe8f83daf42ae!2sbrand%20Worldwide!5e1!3m2!1sen!2sae!4v1732184495191!5m2!1sen!2sae"
            />

            <MapCard
              main_location="Central African Republic"
              address="CROISEMENT SICA-BENZ-VI, 1ER IMMEUBLE NDJOKO 2 ieme ETAGE, Bangui, Central African Republic"
              email="car@brand.com"
              telephone="+23675657582"
              aog_hotline=""
              gmap_link="https://maps.app.goo.gl/NdwMDZ1Ym2D9ctQq8"
              iframe_link="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12044642.828952285!2d20.785693515875696!3d4.349789817297088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10b8ef1701227405%3A0x4df674afb26c40!2sSchool%20Benz%20Vi!5e1!3m2!1sen!2sae!4v1730544438239!5m2!1sen!2sae"
            />

            <MapCard
              main_location="Australia"
              address="brand Pty Ltd Suite 39, Bay 5, 2 Locomotive Street, South Eveleigh NSW 2015, Australia"
              email="sales.au@brand.com"
              telephone=""
              aog_hotline=""
              gmap_link="https://maps.app.goo.gl/zWUJZuqt2Cww6XBAA"
              iframe_link="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12044642.828952285!2d20.785693515875696!3d4.349789817297088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10b8ef1701227405%3A0x4df674afb26c40!2sSchool%20Benz%20Vi!5e1!3m2!1sen!2sae!4v1730544438239!5m2!1sen!2sae"
            />

            <MapCard
              main_location="Bosnia"
              address="PWS Bosnia d.o.o. Srebrenik, ul. 21. Srebrenicke brigade bb Srebrenik, 75359 Bosnia and Herzegovina"
              email="bosnia@brand.com"
              telephone="+38762885360"
              aog_hotline=""
              gmap_link="https://maps.app.goo.gl/xv2fS1H69uomt4bF6"
              iframe_link="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d172044.0289043161!2d18.46994389788339!3d44.712547288190784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475c1dcdc979ba79%3A0x5bbd46adbe3ea40f!2sPWS%20Bosnia!5e1!3m2!1sen!2sae!4v1730550134843!5m2!1sen!2sae"
            />

            <MapCard
              main_location="Burkina Faso"
              address="Boulevard des Tansoba, face gare routiere 10 BP 13608, Ouagadougou, Burkina Faso"
              email="burkina@brand.com"
              telephone=""
              aog_hotline=""
              gmap_link="https://maps.app.goo.gl/qvmFpLLaNMouYLDd6"
              iframe_link="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44089.90478434337!2d-1.520461867934852!3d12.340041162205749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xe2ebd7dfd18add1%3A0xa07f40ad1d39f184!2sGare%20routi%C3%A8re!5e1!3m2!1sen!2sae!4v1730551221474!5m2!1sen!2sae"
            />

            <MapCard
              main_location="Canada"
              address="brand / Priorité, Mondiale 195 Avenue du Voyageur, Pointe Claire, QC H9R 6B2, Canada"
              email="sales.ca@brand.com"
              telephone="+15149055983"
              aog_hotline="+17189473702"
              gmap_link="https://maps.app.goo.gl/uKRrfrQFrcURtssg8"
              iframe_link="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.9409345760964!2d-73.79191092326049!3d45.46427097107399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc917b39971bd11%3A0xb4f1d8e09aa51f37!2sbrand%20Worldwide!5e1!3m2!1sen!2sae!4v1730551925929!5m2!1sen!2sae"
            />

            <MapCard
              main_location="Chad"
              address="BOULEVARD PRESIDENT NGARTA TOUMBALBAYE, IMMEUBLE SAAR, QUARTIER KLEMAT, N’DJAMENA, CHAD"
              email="chad@brand.com"
              telephone="+23566541919"
              aog_hotline=""
              gmap_link="https://maps.app.goo.gl/HLZhjkTKBB8vgHWf7"
              iframe_link="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d36489.9781884049!2d15.032019351812162!3d12.11673129002176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x111963068e3ecbd3%3A0x44498e1e3759de9d!2sBureau%20WFP%20-%20N%E2%80%99djamena!5e1!3m2!1sen!2sae!4v1730552632876!5m2!1sen!2sae"
            />

            <MapCard
              main_location="Lebanon"
              address="Sin El Fil – Horsh Tabet, Center 288 – Ground Floor, Beirut, Lebanon"
              email="lebanon@brand.com"
              telephone="+9611500047"
              aog_hotline=""
              gmap_link="https://maps.app.goo.gl/q4xUhTwtEyQrYWZR9"
              iframe_link="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15491.695053362111!2d35.515102468011676!3d33.88307272153564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f17b6ec26f4f1%3A0x458fa0d443353b89!2sHorsh%20Tabet%20Park!5e1!3m2!1sen!2sae!4v1730553297545!5m2!1sen!2sae"
            />

            <MapCard
              main_location="Mali"
              address="BACO DJICORONI ACI, RUE 631 PORTE 836, BAMAKO – MALI"
              fax="+22320280107"
              email="mali@brand.com"
              telephone="+22344905113"
              aog_hotline=""
              gmap_link="https://maps.app.goo.gl/zZovMTCofNoMUyTz6"
              iframe_link="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4552.862233391437!2d-8.028545924282158!3d12.597937087684196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xe51cc1f5b253077%3A0x7a1bf49488328679!2sFatima%20Center!5e1!3m2!1sen!2sae!4v1730553628179!5m2!1sen!2sae"
            />

            <MapCard
              main_location="Niger"
              address="Boulevard Mali Béro, Complexe Commercial HAMA PATÉ, Block #5 Niamey, Niger"
              email="niger@brand.com"
              telephone="+22791151060"
              aog_hotline=""
              gmap_link="https://maps.app.goo.gl/4w2EEX3qXe2osvz5A"
              iframe_link="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d36288.10870495851!2d2.114764786317729!3d13.513953505102107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11d075f146b7600f%3A0x8a64c186b97dc8ea!2sBlvd%20Mali%20Bero%2C%20Niamey%2C%20Niger!5e1!3m2!1sen!2sae!4v1730554110388!5m2!1sen!2sae"
            />

            <MapCard
              main_location="Senegal"
              address="Les Almadies, Lot Numéro 154 Deuxième étage, Dakar, Senegal"
              email="senegal@brand.com"
              telephone=""
              aog_hotline=""
              gmap_link="https://maps.app.goo.gl/y57gtLkac6fqyJxt6"
              iframe_link="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9023.06333629478!2d-17.534339401342873!3d14.74565584659198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec112dfda00aff1%3A0xe5f72816848076b0!2sLes%20Almadies%2C%20Dakar%2C%20Senegal!5e1!3m2!1sen!2sae!4v1730557053861!5m2!1sen!2sae"
            />

            <MapCard
              main_location="Togo"
              address="1907 Avenue de la paix, B.P. 1819, Lome, Togo"
              email="togo@brand.com"
              telephone="+22890146066"
              aog_hotline=""
              gmap_link="https://maps.app.goo.gl/NSJ7iPfFvheicrYT6"
              iframe_link="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34862.286795772714!2d1.2380529796669997!3d6.153698008431501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1023e17dcd1e1c83%3A0xe204ac1605a010f1!2sAgence%20immobili%C3%A8re%20Rotor!5e1!3m2!1sen!2sae!4v1730558460790!5m2!1sen!2sae"
            />

            <MapCard
              main_location="UAE / Dubai"
              address="brand FZCO G 31, West Wing 3 DAFZA, AL Quds
                  Street PO Box : 371639, brand Logistics LLC 3503 Aspect Tower, Business Bay, Dubai 2260 – United Arab Emirates"
              email="dubai@brand.com"
              telephone="+97147187128"
              aog_hotline=""
              gmap_link="https://maps.app.goo.gl/cWVuASyk8rEv2RYE6"
              iframe_link="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5269.829411841793!2d55.37297046858729!3d25.26095372710018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5db161ca422f%3A0xe970cab8a67f58db!2sForesight%20Group%20Services%20Limited%20FZCO!5e1!3m2!1sen!2sae!4v1730558740932!5m2!1sen!2sae"
            />

            <MapCard
              main_location="USA / BWI"
              address="7361 Coca Cola Dr, Hanover, MD 21076 USA"
              email="sales@brand.com"
              telephone="+14107667470"
              aog_hotline="+17189473702"
              gmap_link="https://maps.app.goo.gl/VaP7KewPasST8C5Y9"
              iframe_link="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.9830858625355!2d-76.734862087971!3d39.1858327715457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7e229c7381505%3A0xc023fb9f0210300a!2s7361%20Coca%20Cola%20Dr%2C%20Hanover%2C%20MD%2021076%2C%20USA!5e1!3m2!1sen!2sae!4v1730559123083!5m2!1sen!2sae"
            />

            <MapCard
              main_location="USA / LAX"
              address="1200 W Walnut, Compton, CA 90220"
              email="laxsales@brand.com"
              telephone="+13103488449"
              aog_hotline=""
              gmap_link="https://maps.app.goo.gl/5huT1Z3FFoMyob3MA"
              iframe_link="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3873.2742245409127!2d-118.24561998817725!3d33.875351373112295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2cb251ac33367%3A0x87489efd70790b5f!2s1200%20W%20Walnut%20St!5e1!3m2!1sen!2sae!4v1730559417842!5m2!1sen!2sae"
            />
          </div>

          <div className="relative">
            <div className="fixed z-20 bottom-9 right-9 bg-[#FFBF3C]/80 cursor-pointer hover:bg-[#FFBF3C] px-3 py-2 font-bold text-white rounded-2xl flex">
              <Link href="/brand-principles">
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
