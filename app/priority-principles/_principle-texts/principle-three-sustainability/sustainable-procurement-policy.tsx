import Modal from "components/common/modal";
import { setSustainableProcurementPolicy } from "actions/priority-principles";
import { useSession } from "next-auth/react";
import { useState } from "react";

interface SustainableProcurementPolicyProps {
  accepted: boolean;
  onClickFunc: any;
  isOpen: any;
}
const SustainableProcurementPolicyText: React.FC<
  SustainableProcurementPolicyProps
> = ({ accepted, onClickFunc, isOpen }) => {
  const { data } = useSession();
  const [error, seterror] = useState<string>("");
  const [success, setsuccess] = useState<string>("");

  const handleAcceptSubmit = async () => {
    const userId = { user_id: data?.user?.id };
    await setSustainableProcurementPolicy(userId)
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
      title="Sustainable Procurement Policy"
      content=<div className="text-black border-t-2 bg-white dark:bg-meta-4 dark:text-white">
        <div className="p-6">
          <h2 className="text-title-sm font-bold pb-3">Purpose</h2>
          <p className="py-3">
            The purpose of this policy is to integrate sustainability into our
            procurement practices to ensure that all purchasing decisions
            consider economic, environmental, and social impacts, thereby
            contributing to sustainable development.
          </p>
          <h2 className="text-title-sm font-bold pb-3 pt-6">Scope</h2>
          <p className="py-3">
            This policy applies to all employees, departments, and divisions of
            Priority Worldwide (PWW) involved in the procurement of goods,
            services, and works.
          </p>
          <h2 className="text-title-sm font-bold pb-3 pt-6">
            Policy Statement
          </h2>
          <p className="py-3">
            At Priority Worldwide, we are committed to sustainable procurement
            practices that:
          </p>
          <ul className="ms-9 list-disc">
            <li className="my-3">Reduce environmental impact</li>
            <li className="my-3">Promote social responsibility</li>
            <li className="my-3">Deliver economic value</li>
          </ul>
          <h2 className="text-title-sm font-bold pb-3 pt-6">Principles</h2>
          <p className="py-3">
            Our sustainable procurement activities will be guided by the
            following principles:
          </p>
          <ul className="ms-9">
            <li className="my-3">
              <b>Accountability:</b> We will be accountable for our procurement
              decisions and their impacts on society, the economy, and the
              environment.
            </li>
            <li className="my-3">
              <b>Transparency:</b> Our procurement processes will be transparent
              and open to scrutiny, fostering trust among stakeholders.
            </li>
            <li className="my-3">
              <b>Ethical Behavior:</b> We will conduct our procurement
              activities ethically, avoiding corruption and respecting human
              rights.
            </li>
            <li className="my-3">
              <b>Full and Fair Opportunity:</b> We will provide full and fair
              opportunities to all potential suppliers, encouraging competition
              and innovation.
            </li>
            <li className="my-3">
              <b>Respect for Stakeholder Interests:</b> We will consider the
              interests of all stakeholders, including suppliers, employees, and
              communities, in our procurement decisions.
            </li>
            <li className="my-3">
              <b>Respect for the Rule of Law:</b> We will comply with all
              applicable laws and regulations in our procurement activities.
            </li>
            <li className="my-3">
              <b>Respect for International Norms of Behavior:</b> We will adhere
              to internationally recognized standards and norms, such as those
              related to labor rights and environmental protection.
            </li>
            <li className="my-3">
              <b>Respect for Human Rights:</b> We will uphold human rights in
              our procurement processes, ensuring no exploitation or abuse
              occurs.
            </li>
            <li className="my-3">
              <b>Innovation:</b> We will encourage and support innovation in our
              procurement activities, seeking out sustainable solutions and
              improvements.
            </li>
            <li className="my-3">
              <b>Focus on Needs:</b> Our procurement will be driven by the
              genuine needs of the organization, avoiding over-consumption and
              waste.
            </li>
            <li className="my-3">
              <b>Integration:</b> We will integrate sustainability
              considerations into our procurement policies and practices, making
              them part of our core operations.
            </li>
            <li className="my-3">
              <b>Improvement:</b> We will pursue continuous improvement in our
              procurement practices, regularly reviewing and enhancing
              sustainability performance.
            </li>
          </ul>
          <h2 className="text-title-sm font-bold pb-3 pt-6">Implementation</h2>
          <p className="py-3">To implement this policy, PWW will:</p>
          <ul className="ms-9 list-disc">
            <li className="my-3">
              Train employees involved in procurement in sustainable practices.
            </li>
            <li className="my-3">
              Develop criteria for assessing the sustainability of suppliers and
              products.
            </li>
            <li className="my-3">
              Engage with suppliers to encourage sustainable practices and
              improve supply chain sustainability.
            </li>
            <li className="my-3">
              Monitor and report on the sustainability performance of our
              procurement activities.
            </li>
          </ul>
          <h2 className="text-title-sm font-bold pb-3 pt-6">
            Monitoring and Review
          </h2>
          <p className="py-3">
            We will regularly monitor our procurement practices to ensure
            compliance with this policy and review the policy annually to
            incorporate improvements and address emerging sustainability
            challenges.
          </p>
          <h2 className="text-title-sm font-bold pb-3 pt-6">Responsibility</h2>
          <p className="py-3">
            All employees involved in procurement are responsible for adhering
            to this policy. The CEO, CFO and Director of Compliance will oversee
            the implementation and monitoring of this policy.
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
              onClick={handleAcceptSubmit}
              className="inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-black dark:bg-white/70 dark:hover:bg-white dark:text-black text-base font-medium hover:text-white text-white/70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
            >
              I Read and Agree
            </button>
          )}
        </div>
      </div>
    />
  );
};

export default SustainableProcurementPolicyText;
