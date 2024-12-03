import Link from "next/link";
import Image from "next/image";

const LogoCard = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 justify-between p-3 dark:text-white text-black text-center rounded-md border border-stroke bg-white shadow-default dark:border-strokedark hover:border-[#FFBF3C] duration-300 ease-linear dark:hover:border-[#FFBF3C]">
      <Link
        className="self-center flex justify-center md:justify-start md:pl-3 pl-14 pt-4"
        href="/"
      >
        <Image
          className="rounded p-3"
          src={"/logo.svg"}
          alt="Logo"
          width={176}
          height={32}
        />
      </Link>
      <Link
        className="self-center flex justify-center md:justify-end p-3 "
        href="/"
      >
        <Image
          className="rounded p-3"
          src={"/images/logoipsum-321.svg"}
          alt="Logo"
          width={486}
          height={67}
        />
      </Link>
    </div>
  );
};

export default LogoCard;
