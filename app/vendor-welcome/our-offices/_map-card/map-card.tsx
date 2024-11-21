import Link from "next/link";

interface MapCardProps {
  main_location: string;
  address: string;
  email?: string;
  telephone?: string;
  fax?: string;
  aog_hotline?: string;
  iframe_link: string;
  gmap_link: string;
}

const MapCard: React.FC<MapCardProps> = ({
  main_location,
  address,
  fax,
  email,
  telephone,
  aog_hotline,
  iframe_link,
  gmap_link,
}) => {
  return (
    <div className="relative overflow-hidden w-full h-60 text-white rounded-md hover:border-stroke duration-300 ease-linear border border-meta-4">
      <div className="z-9 w-full h-60 absolute p-3 md:p-6 bg-meta-4/90">
        <h2 className="font-semibold text-xl">{main_location}</h2>
        <p className="w-3/4">{address}</p>
        {fax && (
          <div className="mt-3 flex">
            <p className="font-semibold">Fax: </p>
            <a href={`tel:${fax}`} className="text-[#FFBF3C] hover:underline">
              &nbsp;{fax}
            </a>
          </div>
        )}
        {email && (
          <div className="mt-3 flex">
            <p className="font-semibold">Email: </p>
            <a
              href={`mailto:${email}`}
              className="text-[#FFBF3C] hover:underline"
            >
              &nbsp;{email}
            </a>
          </div>
        )}
        {telephone && (
          <div className="mt-3 flex">
            <p className="font-semibold">Telephone: </p>
            <a
              href={`tel:${telephone}`}
              className="text-[#FFBF3C] hover:underline"
            >
              &nbsp;{telephone}
            </a>
          </div>
        )}
        {aog_hotline && (
          <div className="flex">
            <p className="font-semibold">24/7 AOG Hotline: </p>
            <a
              href={`tel:${aog_hotline}`}
              className="text-[#FFBF3C] hover:underline"
            >
              &nbsp;{aog_hotline}
            </a>
          </div>
        )}
      </div>
      <div className="absolute right-0 z-9 mt-6 mr-6 cursor-pointer group">
        <Link href={gmap_link}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="icon icon-tabler icons-tabler-outline hover:text-[#FFBF3C] icon-tabler-external-link"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
            <path d="M11 13l9 -9" />
            <path d="M15 4h5v5" />
          </svg>
          <p className="absolute w-[90px] text-sm mr-3 right-0 bg-zinc-300 text-meta-4 text-center rounded-l-md rounded-br-md p-1 opacity-0 group-hover:opacity-100 duration-300">
            Open Map
          </p>
        </Link>
      </div>
      <iframe
        src={iframe_link}
        className="h-150 z-1 w-full absolute -mt-39 grayscale"
        style={{ border: "0" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapCard;
