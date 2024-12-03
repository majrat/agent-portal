import Modal from "components/common/modal";
import { setSupplyChainManagementPolicy } from "actions/priority-principles";
import { useSession } from "next-auth/react";
import { useState } from "react";

interface SupplyChainManagementPolicyProps {
  accepted: boolean;
  onClickFunc: any;
  isOpen: any;
}
const SupplyChainManagementPolicyText: React.FC<
  SupplyChainManagementPolicyProps
> = ({ accepted, onClickFunc, isOpen }) => {
  const { data } = useSession();
  const [error, seterror] = useState<string>("");
  const [success, setsuccess] = useState<string>("");

  const handleAcceptSubmit = async () => {
    const userId = { user_id: data?.user?.id };
    await setSupplyChainManagementPolicy(userId)
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
      title="Supply Chain Management Policy"
      content=<div className="text-black border-t-2 bg-white dark:bg-meta-4 dark:text-white">
        <div className="p-6">
          <h2 className="text-title-sm font-bold pb-3 pt-6">Purpose</h2>
          <p className="py-3">
            The purpose of this policy is to establish a framework for managing
            our supply chain effectively, ensuring that it supports our business
            objectives and aligns with our commitment to sustainability,
            quality, and ethical standards.
          </p>
          <h2 className="text-title-sm font-bold pb-3 pt-6">Scope</h2>
          <p className="py-3">
            This policy applies to all employees, departments, and divisions of
            Priority Worldwide (PWW) involved in the selection, management, and
            evaluation of suppliers and the procurement of goods and services.
          </p>
          <h2 className="text-title-sm font-bold pb-3 pt-6">
            Policy Statement
          </h2>
          <p className="py-3">
            At Priority Worldwide, we are committed to a supply chain management
            approach that:
          </p>
          <ul className="ms-9 list-disc">
            <li className="my-3">
              Ensures the timely and efficient delivery of quality goods and
              services
            </li>
            <li className="my-3">
              Promotes sustainability and ethical practices
            </li>
            <li className="my-3">Reduces risks and enhances resilience</li>
            <li className="my-3">
              Fosters strong and collaborative relationships with suppliers
            </li>
          </ul>
          <h2 className="text-title-sm font-bold pb-3 pt-6">Principles</h2>
          <p className="py-3">
            Our supply chain management activities will be guided by the
            following principles:
          </p>
          <ul className="ms-9 list-disc">
            <li className="my-3">
              Quality and Reliability: We will source goods and services that
              meet our quality standards and deliver reliability to our
              operations and customers.
            </li>
            <li className="my-3">
              Sustainability: We will integrate environmental and social
              sustainability considerations into our supply chain decisions to
              minimize negative impacts.
            </li>
            <li className="my-3">
              Ethical Conduct: We will uphold high ethical standards in all
              supply chain activities, including compliance with laws,
              regulations, and human rights.
            </li>
            <li className="my-3">
              Risk Management: We will identify, assess, and mitigate risks in
              our supply chain to ensure continuity and resilience.
            </li>
            <li className="my-3">
              Innovation and Improvement: We will encourage innovation and
              continuous improvement in our supply chain processes and
              relationships.
            </li>
            <li className="my-3">
              Cost Efficiency: We will seek to achieve cost efficiency while
              maintaining the quality and sustainability of our supply chain.
            </li>
            <li className="my-3">
              Transparency and Accountability: We will ensure transparency in
              our supply chain activities and hold ourselves accountable for our
              decisions and actions.
            </li>
          </ul>
          <h2 className="text-title-sm font-bold pb-3 pt-6">
            Supplier Selection and Management
          </h2>
          <p className="py-3">To implement this policy, we will:</p>
          <ul className="ms-9 list-disc">
            <li className="my-3">
              Develop criteria for selecting and evaluating suppliers based on
              quality, sustainability, ethical conduct, and cost efficiency.
            </li>
            <li className="my-3">
              Conduct due diligence and regular assessments of suppliers to
              ensure compliance with our standards and expectations.
            </li>
            <li className="my-3">
              Foster long-term relationships with suppliers that demonstrate a
              commitment to continuous improvement and innovation.
            </li>
          </ul>
          <h2 className="text-title-sm font-bold pb-3 pt-6">
            Sustainability and Ethical Standards
          </h2>
          <p className="py-3">
            We will work with suppliers who share our commitment to
            sustainability and ethical standards by:
          </p>
          <ul className="ms-9 list-disc">
            <li className="my-3">
              Encouraging the adoption of environmentally friendly practices and
              reducing carbon footprints.
            </li>
            <li className="my-3">
              Ensuring that suppliers uphold labor rights, provide safe working
              conditions, and avoid practices such as child labor and forced
              labor.
            </li>
            <li className="my-3">
              Promoting fair trade and ethical sourcing of materials.
            </li>
          </ul>
          <h2 className="text-title-sm font-bold pb-3 pt-6">Risk Management</h2>
          <p className="py-3">
            We will enhance the resilience of our supply chain by:
          </p>
          <ul className="ms-9 list-disc">
            <li className="my-3">
              Identifying potential risks, including geopolitical,
              environmental, and economic factors.
            </li>
            <li className="my-3">
              Developing contingency plans and diversifying our supply base to
              mitigate risks.
            </li>
            <li className="my-3">
              Continuously monitoring and reviewing supply chain risks and
              implementing corrective actions as needed.
            </li>
          </ul>
          <h2 className="text-title-sm font-bold pb-3 pt-6">
            Monitoring and Review
          </h2>
          <p className="py-3">
            We will regularly monitor our supply chain management practices to
            ensure compliance with this policy and review the policy annually to
            incorporate improvements and address emerging challenges.
          </p>
          <h2 className="text-title-sm font-bold pb-3 pt-6">Responsibility</h2>
          <p className="py-3">
            All employees involved in supply chain activities are responsible
            for adhering to this policy. The CEO, CFO and Director of Compliance
            will oversee the implementation and monitoring of this policy.
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

export default SupplyChainManagementPolicyText;
