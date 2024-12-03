import Accordion from "components/common/accordion";
interface CodeOfConductProps {
  isOpenValue: boolean;
}
const CodeOfConductText: React.FC<CodeOfConductProps> = ({ isOpenValue }) => {
  return (
    <Accordion
      title="SUPPLIER CODE OF CONDUCT"
      isOpenValue={isOpenValue}
      content=<div className="p-3 dark:text-white text-black border-t-2 bg-white dark:bg-meta-4">
        <div className="p-6">
          <h2 className="text-title-md pb-3">Introduction</h2>
          <p>
            At brand, we are committed to conducting our business
            in an ethical, sustainable, and socially responsible manner. We
            expect our suppliers to share this commitment and adhere to the
            principles outlined in this Supplier Code of Conduct.
          </p>
          <h2 className="text-title-md pb-3 pt-6">Scope</h2>
          <p>
            This Supplier Code of Conduct applies to all suppliers, contractors,
            and business partners who provide goods or services to [Your Company
            Name]. It sets out the minimum standards and expectations for
            ethical behavior, environmental sustainability, and social
            responsibility.
          </p>
          <h2 className="text-title-md pb-3 pt-6">
            Compliance with Laws and Regulations
          </h2>
          <p>
            Suppliers must comply with all applicable laws, regulations, and
            industry standards in the countries where they operate. This
            includes, but is not limited to:
          </p>
          <ul className="ms-9 list-disc">
            <li className="my-1">Labor laws and regulations</li>
            <li className="my-1">Environmental regulations</li>
            <li className="my-1">Health and safety standards</li>
            <li className="my-1">Anti-corruption and anti-bribery laws</li>
          </ul>
          <h2 className="text-title-md pb-3 pt-6">
            Human Rights and Labor Practices
          </h2>
          <p>
            Suppliers are expected to uphold and respect internationally
            recognized human rights and labor standards. This includes:
          </p>
          <ul className="ms-9 list-disc">
            <li className="my-1">
              Prohibition of Forced Labor: Suppliers must not use any form of
              forced, bonded, or involuntary labor.
            </li>
            <li className="my-1">
              Prohibition of Child Labor: Suppliers must not employ children
              under the legal working age in their country or any child labor as
              defined by the International Labor Organization (ILO) standards.
            </li>
            <li className="my-1">
              Non-Discrimination: Suppliers must provide a workplace free of
              discrimination based on race, gender, age, sexual orientation,
              disability, religion, or any other characteristic protected by
              law.
            </li>
            <li className="my-1">
              Freedom of Association: Suppliers must respect the rights of
              workers to freely associate, join trade unions, and bargain
              collectively.
            </li>
          </ul>
          <h2 className="text-title-md pb-3 pt-6">Health and Safety</h2>
          <p>
            Suppliers must provide a safe and healthy working environment for
            their employees. This includes:
          </p>
          <ul className="ms-9 list-disc">
            <li className="my-1">
              Ensuring compliance with health and safety laws and regulations
            </li>
            <li className="my-1">
              Implementing effective health and safety policies and procedures
            </li>
            <li className="my-1">
              Providing appropriate safety training and protective equipment
            </li>
          </ul>
          <h2 className="text-title-md pb-3 pt-6">
            Environmental Responsibility
          </h2>
          <p>
            Suppliers are expected to minimize their environmental impact and
            promote sustainability. This includes:
          </p>
          <ul className="ms-9 list-disc">
            <li className="my-1">
              Complying with all applicable environmental laws and regulations
            </li>
            <li className="my-1">
              Implementing practices to reduce waste, emissions, and resource
              consumption
            </li>
            <li className="my-1">
              Promoting the use of sustainable materials and energy-efficient
              processes
            </li>
          </ul>
          <h2 className="text-title-md pb-3 pt-6">
            Ethical Business Practices
          </h2>
          <p>
            Suppliers must conduct their business with integrity and
            transparency. This includes:
          </p>
          <ul className="ms-9 list-disc">
            <li className="my-1">
              Prohibiting all forms of corruption, bribery, and fraudulent
              practices
            </li>
            <li className="my-1">
              Ensuring accurate and transparent record-keeping
            </li>
            <li className="my-1">
              Respecting intellectual property rights and confidentiality
              agreements
            </li>
          </ul>
          <h2 className="text-title-md pb-3 pt-6">Supply Chain Transparency</h2>
          <p>
            Suppliers are expected to promote the principles of this code
            throughout their own supply chains. This includes:
          </p>
          <ul className="ms-9 list-disc">
            <li className="my-1">
              Communicating these standards to their own suppliers and
              subcontractors
            </li>
            <li className="my-1">
              Ensuring compliance with these standards at all levels of their
              supply chain
            </li>
          </ul>
          <h2 className="text-title-md pb-3 pt-6">Monitoring and Compliance</h2>
          <p>
            brand reserves the right to monitor and assess supplier
            compliance with this code. This may include:
          </p>
          <ul className="ms-9 list-disc">
            <li className="my-1">
              Conducting audits and assessments of supplier facilities and
              practices
            </li>
            <li className="my-1">
              Requiring suppliers to provide documentation and information
              related to their compliance
            </li>
            <li className="my-1">
              Working with suppliers to address any identified non-compliance
              issues
            </li>
          </ul>
          <h2 className="text-title-md pb-3 pt-6">Continuous Improvement</h2>
          <p>
            Suppliers are encouraged to continuously improve their practices and
            performance in line with the principles of this code. brand
            Worldwide will support suppliers in their efforts to enhance their
            social, environmental, and ethical practices.
          </p>
          <h2 className="text-title-md pb-3 pt-6">Reporting Concerns</h2>
          <p>
            Suppliers and their employees are encouraged to report any concerns
            or violations of this code. Reports can be made confidentially and
            without fear of retaliation through brand’ s designated
            reporting channels.
          </p>
        </div>
      </div>
    />
  );
};

export default CodeOfConductText;
