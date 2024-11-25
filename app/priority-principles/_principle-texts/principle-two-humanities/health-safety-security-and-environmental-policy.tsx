import Modal from "components/common/modal";
import { setHealthSafetySecurityAndEnvironmentalPolicy } from "actions/priority-principles";
import { useSession } from "next-auth/react";
import { useState } from "react";

interface HealthSafetySecurityAndEnvironmentalPolicyProps {
  accepted: boolean;
  onClickFunc: any;
  isOpen: any;
}
const HealthSafetySecurityAndEnvironmentalPolicyText: React.FC<
  HealthSafetySecurityAndEnvironmentalPolicyProps
> = ({ accepted, onClickFunc, isOpen }) => {
  const { data } = useSession();
  const [error, seterror] = useState<string>("");
  const [success, setsuccess] = useState<string>("");

  const handleAcceptSubmit = async () => {
    const userId = { user_id: data?.user?.id };
    await setHealthSafetySecurityAndEnvironmentalPolicy(userId)
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
      title="Health, Safety, Security and Environmental (HSSE) Policy"
      content=<div className="text-black border-t-2 bg-white dark:bg-meta-4 dark:text-white">
        <div className="p-6">
          <h2 className="text-title-sm font-bold pb-3">Introduction</h2>
          <p className="py-3">
            Priority Worldwide (PWW) is committed to protecting the health,
            safety, and security of our employees, contractors, visitors, and
            the communities in which we operate, as well as preserving the
            environment. Our HSSE policy outlines our commitment to maintaining
            the highest standards of health, safety, security, and environmental
            performance in all our business activities.
          </p>
          <h2 className="text-title-sm font-bold pb-3 pt-6">Scope</h2>
          <p className="py-3">
            This policy applies to all employees, contractors, and visitors at
            all PWW locations and extends to all activities and operations under
            our control.
          </p>
          <h2 className="text-title-sm font-bold pb-3 pt-6">
            Health and Safety Commitment
          </h2>
          <p className="py-3">
            We are dedicated to providing a safe and healthy working environment
            by:
          </p>
          <ul className="ms-9 list-disc">
            <li className="my-3">
              Complying with all applicable health and safety laws, regulations,
              and industry standards.
            </li>
            <li className="my-3">
              Identifying and assessing health and safety risks and implementing
              appropriate control measures.
            </li>
            <li className="my-3">
              Providing training, resources, and equipment to ensure the safety
              and well-being of our employees.
            </li>
            <li className="my-3">
              Encouraging active participation and consultation with employees
              on health and safety matters.
            </li>
            <li className="my-3">
              Reporting and investigating incidents and near-misses to prevent
              recurrence and improve safety performance.
            </li>
          </ul>
          <h2 className="text-title-sm font-bold pb-3 pt-6">
            Security Commitment
          </h2>
          <p className="py-3">
            We are committed to maintaining a secure working environment by:
          </p>
          <ul className="ms-9 list-disc">
            <li className="my-3">
              Protecting our employees, contractors, visitors, and assets from
              security threats.
            </li>
            <li className="my-3">
              Implementing security measures to prevent unauthorized access,
              theft, and vandalism.
            </li>
            <li className="my-3">
              Ensuring compliance with all applicable security laws,
              regulations, and industry standards.
            </li>
            <li className="my-3">
              Providing training and resources to employees to enhance their
              awareness and response to security risks.
            </li>
            <li className="my-3">
              Regularly reviewing and updating our security protocols and
              procedures.
            </li>
          </ul>
          <h2 className="text-title-sm font-bold pb-3 pt-6">
            Environmental Commitment
          </h2>
          <p className="py-3">
            We are dedicated to minimizing our environmental impact and
            promoting sustainability by:
          </p>
          <ul className="ms-9 list-disc">
            <li className="my-3">
              Complying with all applicable environmental laws, regulations, and
              industry standards.
            </li>
            <li className="my-3">
              Implementing practices to reduce waste, emissions, and resource
              consumption.
            </li>
            <li className="my-3">
              Promoting the use of sustainable materials, energy-efficient
              processes, and renewable energy sources.
            </li>
            <li className="my-3">
              Encouraging recycling and the responsible disposal of waste.
            </li>
            <li className="my-3">
              Conducting regular environmental audits and assessments to
              identify areas for improvement.
            </li>
            <li className="my-3">
              Engaging with stakeholders to support environmental conservation
              and sustainability initiatives.
            </li>
          </ul>
          <h2 className="text-title-sm font-bold pb-3 pt-6">
            Roles and Responsibilities
          </h2>
          <ul className="ms-9 list-disc">
            <li className="my-3">
              Management: Responsible for providing leadership, resources, and
              support to implement and maintain the HSSE policy.
            </li>
            <li className="my-3">
              Supervisors: Responsible for ensuring compliance with HSSE
              policies and procedures within their areas of control.
            </li>
            <li className="my-3">
              Employees and Contractors: Responsible for following HSSE policies
              and procedures, reporting hazards, and participating in HSSE
              training and initiatives.
            </li>
            <li className="my-3">
              Compliance: Responsible for developing, implementing, and
              monitoring HSSE programs and initiatives, and providing guidance
              and support to all employees and contractors.
            </li>
          </ul>
          <h2 className="text-title-sm font-bold pb-3 pt-6">
            Training and Awareness
          </h2>
          <p className="py-3">
            We will provide ongoing training and education to ensure that all
            employees and contractors are aware of their HSSE responsibilities
            and are equipped with the knowledge and skills to perform their
            duties safely and responsibly.
          </p>
          <h2 className="text-title-sm font-bold pb-3 pt-6">
            Monitoring and Review
          </h2>
          <p className="py-3">
            We will regularly monitor and review our HSSE performance to ensure
            continuous improvement and compliance with this policy. This
            includes:
          </p>
          <ul className="ms-9 list-disc">
            <li className="my-3">
              Conducting regular audits, inspections, and assessments.
            </li>
            <li className="my-3">
              Setting and reviewing HSSE objectives and targets.
            </li>
            <li className="my-3">
              Investigating incidents and implementing corrective actions.
            </li>
            <li className="my-3">
              Reporting on HSSE performance to stakeholders.
            </li>
          </ul>
          <h2 className="text-title-sm font-bold pb-3 pt-6">
            Continuous Improvement
          </h2>
          <p className="py-3">
            We are committed to continuously improving our HSSE management
            system and performance by:
          </p>
          <ul className="ms-9 list-disc">
            <li className="my-3">
              Encouraging feedback and suggestions from employees, contractors,
              and stakeholders.
            </li>
            <li className="my-3">
              Staying informed about advancements in HSSE practices and
              technologies.
            </li>
            <li className="my-3">
              Regularly reviewing and updating our HSSE policies, procedures,
              and practices.
            </li>
          </ul>
          <h2 className="text-title-sm font-bold pb-3 pt-6">Communication</h2>
          <p className="py-3">
            We will communicate this policy to all employees, contractors, and
            relevant stakeholders to ensure they understand our commitment to
            HSSE and their role in achieving our objectives.
          </p>
          <p className="py-3">
            This HSSE policy demonstrates Priority Worldwide’ s commitment to
            protecting health, safety, security, and the environment in all
            aspects of our operations. By adhering to this policy, we aim to
            create a safe, secure, and sustainable working environment for all.
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

export default HealthSafetySecurityAndEnvironmentalPolicyText;
