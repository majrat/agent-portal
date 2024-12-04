import Modal from "components/common/modal";
import { setWhistleblowerPolicy } from "actions/brand-principles";
import { useSession } from "next-auth/react";
import { useState } from "react";

interface WhistleblowerPolicyProps {
  accepted: boolean;
  onClickFunc: any;
  isOpen: any;
}
const WhistleblowerPolicyText: React.FC<WhistleblowerPolicyProps> = ({
  accepted,
  onClickFunc,
  isOpen,
}) => {
  const { data } = useSession();
  const [error, seterror] = useState<string>("");
  const [success, setsuccess] = useState<string>("");

  const handleAcceptSubmit = async () => {
    const userId = { user_id: data?.user?.id };
    await setWhistleblowerPolicy(userId)
      .then((e) => {
        setsuccess(e.message);
      })
      .catch((e) => seterror(`${e.message}`));
  };
  return (
    <Modal
      isOpen={isOpen}
      onClickFunc={onClickFunc}
      svg={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fdc82e"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-license group-hover:animate-bounce duration-300 ease-linear"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11" />
          <path d="M9 7l4 0" />
          <path d="M9 11l4 0" />
        </svg>
      }
      title="praesentium consequuntur culpa labore"
      content=<div className="text-black border-t-2 bg-white dark:bg-meta-4 dark:text-white">
        <div className="p-6">
          <h2 className="text-title-sm font-bold pb-3 pt-6">Lorem.</h2>
          <p className="py-3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, laborum quas quos quo alias doloremque tempora minus
            dignissimos inventore sint magni aperiam facere possimus. Est nihil
            delectus odit optio quasi?
          </p>
          <h2 className="text-title-sm font-bold pb-3 pt-6">Lorem.</h2>
          <p className="py-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
            optio dignissimos minus fuga iste sit eaque explicabo, qui excepturi
            a vel itaque nulla debitis consequuntur sapiente dicta fugit
            recusandae quod.
          </p>
          <h2 className="text-title-sm font-bold pb-3 pt-6">Lorem, ipsum.</h2>
          <p className="py-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
            veritatis dolores explicabo, animi corrupti dolore rem minus, eaque
            ut assumenda expedita. Nam asperiores quos earum blanditiis numquam
            quaerat, quas eos!
          </p>
          <ul className="ms-9 list-disc">
            <li className="my-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur, exercitationem molestiae itaque quo magni ea
              perspiciatis dolorum soluta voluptate odio cumque mollitia, sunt
              ipsum. Quaerat minima tempora hic recusandae quod.
            </li>
            <li className="my-3">Lorem ipsum dolor sit amet consectetur.</li>
            <li className="my-3">Lorem ipsum dolor sit amet.</li>
            <li className="my-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </li>
          </ul>
          <h2 className="text-title-sm font-bold pb-3 pt-6">Lorem, ipsum.</h2>
          <p className="py-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat,
            reiciendis?
          </p>
          <ul className="ms-9 list-disc">
            <li className="my-3">
              Lorem, ipsum dolor: Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Reiciendis error incidunt sint nulla voluptates
              modi nobis dolore odio iure eos unde inventore enim sequi aperiam
              ea perferendis, quod explicabo harum!
            </li>
            <li className="my-3">
              Lorem, ipsum dolor: Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Reiciendis error incidunt sint nulla voluptates
              modi nobis dolore odio iure eos unde inventore enim sequi aperiam
              ea perferendis, quod explicabo harum!
            </li>
            <li className="my-3">
              Lorem, ipsum dolor: Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Reiciendis error incidunt sint nulla voluptates
              modi nobis dolore odio iure eos unde inventore enim sequi aperiam
              ea perferendis, quod explicabo harum!
            </li>
            <li className="my-3">
              Lorem, ipsum dolor: Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Reiciendis error incidunt sint nulla voluptates
              modi nobis dolore odio iure eos unde inventore enim sequi aperiam
              ea perferendis, quod explicabo harum!
            </li>
            <li className="my-3">
              Lorem, ipsum dolor: Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Reiciendis error incidunt sint nulla voluptates
              modi nobis dolore odio iure eos unde inventore enim sequi aperiam
              ea perferendis, quod explicabo harum!
            </li>
            <li className="my-3">
              Lorem, ipsum dolor: Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Reiciendis error incidunt sint nulla voluptates
              modi nobis dolore odio iure eos unde inventore enim sequi aperiam
              ea perferendis, quod explicabo harum!
            </li>
            <li className="my-3">
              Lorem, ipsum dolor: Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Reiciendis error incidunt sint nulla voluptates
              modi nobis dolore odio iure eos unde inventore enim sequi aperiam
              ea perferendis, quod explicabo harum!
            </li>
          </ul>
          <h2 className="text-title-sm font-bold pb-3 pt-6">
            Lorem ipsum dolor sit amet.
          </h2>
          <p className="py-3">Lorem ipsum dolor sit.:</p>
          <ul className="ms-9 list-disc">
            <li className="my-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              unde dicta blanditiis repellendus amet, excepturi vel explicabo
              mollitia nesciunt dignissimos harum eius quas sunt odit dolorem
              eligendi iste ipsam. Similique.
            </li>
            <li className="my-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              unde dicta blanditiis repellendus amet, excepturi vel explicabo
              mollitia nesciunt dignissimos harum eius quas sunt odit dolorem
              eligendi iste ipsam. Similique.
            </li>
            <li className="my-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              unde dicta blanditiis repellendus amet, excepturi vel explicabo
              mollitia nesciunt dignissimos harum eius quas sunt odit dolorem
              eligendi iste ipsam. Similique.
            </li>
          </ul>
          <h2 className="text-title-sm font-bold pb-3 pt-6">
            Lorem ipsum dolor sit amet.
          </h2>
          <p className="py-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam,
            aut qui?
          </p>
          <ul className="ms-9 list-disc">
            <li className="my-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </li>
            <li className="my-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos.
            </li>
            <li className="my-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </li>
          </ul>
          <h2 className="text-title-sm font-bold pb-3 pt-6">Lorem, ipsum.</h2>
          <p className="py-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit?
          </p>
          <ul className="ms-9 list-disc">
            <li className="my-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A fuga
              fugiat aliquam cumque ipsa?
            </li>
            <li className="my-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
              minima cumque officia, quas quidem natus!
            </li>
            <li className="my-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
              quisquam saepe esse ex tempore aut excepturi.
            </li>
          </ul>
          <h2 className="text-title-sm font-bold pb-3 pt-6">
            Lorem, ipsum dolor.
          </h2>
          <p className="py-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae,
            quisquam dolorem saepe delectus dignissimos quasi. Optio, maiores
            esse aliquam autem eum reiciendis odio quisquam quae laudantium
            molestiae at magni tempore!
          </p>
          <h2 className="text-title-sm font-bold pb-3 pt-6">Lorem.</h2>
          <p className="py-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            praesentium consequuntur culpa labore optio. Asperiores
            necessitatibus deserunt sunt, sed dolorem optio odio repellat
            suscipit fugit perferendis molestiae qui, adipisci quidem?
          </p>
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:px-6 flex justify-end gap-4">
          {error && <p className="text-red">{error}</p>}
          {accepted || success ? (
            <div className="flex justify-between">
              <p className="text-meta-3 text-center self-center">{success}</p>
              <p className="inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-meta-4 dark:text-meta-9 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400">
                Agreed
              </p>
            </div>
          ) : (
            <button
              disabled
              onClick={handleAcceptSubmit}
              className="inline-flex cursor-not-allowed justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-black dark:bg-white/70 dark:hover:bg-white dark:text-black text-base font-medium hover:text-white text-white/70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
            >
              I Read and Agree
            </button>
          )}
        </div>
      </div>
    />
  );
};

export default WhistleblowerPolicyText;
