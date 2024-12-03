import Modal from "components/common/modal";
import { setAntiSlaveryHumanTraffickingAndForcedLaborPolicy } from "actions/brand-principles";
import { useSession } from "next-auth/react";
import { useState } from "react";

interface AntiSlaveryHumanTraffickingAndForcedLaborPolicyProps {
  accepted: boolean;
  onClickFunc: any;
  isOpen: any;
}
const AntiSlaveryHumanTraffickingAndForcedLaborPolicyText: React.FC<
  AntiSlaveryHumanTraffickingAndForcedLaborPolicyProps
> = ({ accepted, onClickFunc, isOpen }) => {
  const { data } = useSession();
  const [error, seterror] = useState<string>("");
  const [success, setsuccess] = useState<string>("");

  const handleAcceptSubmit = async () => {
    const userId = { user_id: data?.user?.id };
    await setAntiSlaveryHumanTraffickingAndForcedLaborPolicy(userId)
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
      title="Anti-slavery, Human Trafficking and Forced Labor Policy"
      content=<div className="text-black border-t-2 bg-white dark:bg-meta-4 dark:text-white">
        <div className="p-6">
          <h2 className="text-title-sm font-bold pb-3">Introduction</h2>
          <p className="py-3">
            At brand (PWW), we are committed to conducting our
            business in an ethical and socially responsible manner. We recognize
            the serious issues of slavery, human trafficking and forced labor,
            and we are dedicated to taking steps to eradicate these practices
            from our operations and supply chains.
          </p>
          <h2 className="text-title-sm font-bold pb-3 pt-6">
            Organizational Commitment:
          </h2>
          <p className="py-3">
            PWW is dedicated to maintaining the highest standards of integrity
            and ethical behavior. We unequivocally condemn all forms of slavery,
            human trafficking and forced labor and are committed to ensuring
            that such practices have no place within our organization.
          </p>
          <h2 className="text-title-sm font-bold pb-3 pt-6">Policy Scope:</h2>
          <p className="py-3">
            This policy applies to all employees, contractors, and business
            partners of PWW and extends to all operations, activities, and
            supply chains.
          </p>
          <h2 className="text-title-sm font-bold pb-3 pt-6">
            Risk Assessment:
          </h2>
          <p className="py-3">
            We regularly assess the risk of slavery, human trafficking and
            forced labor in our supply chains and operations to identify and
            mitigate potential issues.
          </p>
          <h2 className="text-title-sm font-bold pb-3 pt-6">Due Diligence:</h2>
          <p className="py-3">
            PWW conducts due diligence on all new suppliers and business
            partners to ensure compliance with our standards.
          </p>
          <h2 className="text-title-sm font-bold pb-3 pt-6">
            Employee Responsibilities:
          </h2>
          <p className="py-3">
            Every employee is responsible for upholding this policy and
            reporting any concerns related to slavery, human trafficking or
            forced labor promptly.
          </p>
          <h2 className="text-title-sm font-bold pb-3 pt-6">Training:</h2>
          <p className="py-3">
            We provide training to all employees to raise awareness of the risks
            of slavery, human trafficking and forced labor and to equip them
            with the knowledge to identify and report potential issues.
          </p>
          <h2 className="text-title-sm font-bold pb-3 pt-6">
            Communication Channels:
          </h2>
          <p className="py-3">
            We maintain open channels for reporting, ensuring confidentiality
            and non-retaliation for whistleblowers.
          </p>
          <h2 className="text-title-sm font-bold pb-3 pt-6">
            Supplier Relations:
          </h2>
          <p className="py-3">
            PWW expects suppliers and business partners to comply with all
            applicable laws and regulations related to slavery, human
            trafficking and forced labor. We reserve the right to terminate
            relationships with entities that do not meet these standards.
          </p>
          <h2 className="text-title-sm font-bold pb-3 pt-6">
            Monitoring and Compliance:
          </h2>
          <p className="py-3">
            We conduct regular monitoring and audits to ensure compliance with
            this policy, and corrective actions are taken promptly if violations
            are identified.
          </p>
          <h2 className="text-title-sm font-bold pb-3 pt-6">
            Consequences for Non-Compliance:
          </h2>
          <p className="py-3">
            Violations of this policy will result in appropriate disciplinary
            action, including termination of employment or business
            relationships, and may lead to legal proceedings.
          </p>
          <h2 className="text-title-sm font-bold pb-3 pt-6">
            Review and Continuous Improvement:
          </h2>
          <p className="py-3">
            We commit to regularly reviewing and updating this policy to ensure
            its effectiveness and relevance in addressing emerging risks and
            challenges.
          </p>
          <h2 className="text-title-sm font-bold pb-3 pt-6">Definitions:</h2>
          <p className="py-3">
            <b>Human trafficking</b> refers to the illegal and exploitative
            trade of human beings for various purposes, often involving force,
            fraud, or coercion. The United Nations defines human trafficking as:
            &quot;The recruitment, transportation, transfer, harboring, or
            receipt of persons by means of threat, use of force or other forms
            of coercion, of abduction, of fraud, of deception, of the abuse of
            power or of a position of vulnerability or of the giving or
            receiving of payments or benefits to achieve the consent of a person
            having control over another person, for the purpose of exploitation.
            Exploitation shall include, at a minimum, the exploitation of the
            prostitution of others or other forms of sexual exploitation, forced
            labor or services, slavery or practices similar to slavery,
            servitude or the removal of organs.&quot;
          </p>
          <p className="py-3">
            <b>Forced labor,</b> also known as involuntary labor or unfree
            labor, refers to work or services that people are forced to
            undertake against their will, under threat of punishment or
            coercion. This can involve various forms of compulsion, such as
            physical force, intimidation, withholding of wages, debt bondage, or
            any other means of controlling individuals to exploit their labor.
          </p>
          <h2 className="text-title-sm font-bold pb-3 pt-6">
            Key elements of forced labor include:
          </h2>
          <ul className="ms-9 list-disc">
            <li className="my-3">
              <b>Coercion:</b> Individuals are compelled to work through the use
              of force, threats, or other forms of intimidation.
            </li>
            <li className="my-3">
              <b>Lack of Free Will:</b> Workers do not have the freedom to
              refuse or leave the work due to the coercive circumstances they
              face.
            </li>
          </ul>
          <p className="pt-3">
            <b>Exploitation:</b> The labor is often exploited for economic gain,
            and the workers may be subjected to degrading conditions, long
            hours, and inadequate compensation.
          </p>
          <p className="py-1">
            Forced labor can take various forms, including but not limited to:
          </p>
          <ul className="ms-9 list-disc">
            <li className="my-3">
              <b>Bonded Labor:</b> Workers are forced to work to repay a debt,
              often under conditions that make it impossible to ever repay.
            </li>
            <li className="my-3">
              <b>Child Labor:</b> Children are forced to work under conditions
              that deprive them of their childhood and interfere with their
              ability to attend regular schools.
            </li>
            <li className="my-3">
              <b>Human Trafficking:</b> Individuals are compelled to work
              through force, fraud, or coercion, often as part of a broader
              human trafficking scheme.
            </li>
          </ul>
          <h2 className="text-title-sm font-bold pb-3 pt-6">Reporting:</h2>
          <p className="py-3">
            If you suspect activity that is inconsistent with this policy,
            please contact the Director of Compliance or the Global Human
            Trafficking Hotline at 1-844-888-FREE and its email address at
            <a href="mailto:help@befree.org" className="text-primary">
              {" "}
              help@befree.org.
            </a>
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

export default AntiSlaveryHumanTraffickingAndForcedLaborPolicyText;
