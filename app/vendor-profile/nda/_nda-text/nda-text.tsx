import Accordion from "components/common/accordion";
interface NDAProps {
  contracted_partner: any;
  isOpenValue: boolean;
}
const NDA: React.FC<NDAProps> = ({ contracted_partner, isOpenValue }) => {
  return (
    <Accordion
      title="NON DISCLOSURE AGREEMENT"
      isOpenValue={isOpenValue}
      content=<div className="p-3 dark:text-white text-black text-center border-t-2 bg-white dark:bg-meta-4">
        <div className="p-6">
          <h3 className="text-xl font-medium py-3 col-span-2">
            NON DISCLOSURE AGREEMENT
          </h3>
          <p className="pt-6 font-semibold text-start">between</p>
          <p className="pt-6 text-start">{contracted_partner}</p>
          <p className="pt-6 font-semibold text-start">and</p>
          <p className="pt-6 text-start">
            brand <br /> 7361 Coca Cola <br /> Hanover, MD 21076
          </p>
          <p className="pt-9 text-start">
            - hereinafter referred to as “contract partner”–
          </p>
          <p className="pt-6 text-start">
            - hereinafter collectively referred to as “the Parties“-
          </p>
          <p className="pt-6 text-start text-blue-400">Preamble</p>
          <p className="pt-9 text-start">
            In this context the Parties wish to disclose to each other
            proprietary and sensitive commercial or technical information. In
            order to protect any such confidential or proprietary information,
            the Parties are concluding the following agreement. In addition, the
            aim of this agreement is to prevent the unauthorised dissemination,
            use or reproduction of documents, data and other information of
            Carrier which the contract partner has already received or will
            receive in future.
          </p>
          <p className="pt-9 text-start">
            Therefore the Parties agree as follows:
          </p>
          <ol className="ps-6 pt-9 text-start list-decimal">
            <li className="pt-3">
              The Parties agree to treat information of the other Party as
              strictly confidential. All information about
              <ul className="ps-3 list-disc">
                <li className="pt-3">customers and companies</li>
                <li className="pt-3">
                  key indicators as well as, but not exclusively, prices and
                  payment terms
                </li>
                <li className="pt-3">processes and work methods</li>
                <li className="pt-3">personal data</li>
                <li className="pt-3">
                  sources of supply and services of the Parties and information
                  regarding the Parties’ cooperation, shall be deemed strictly
                  confidential.
                </li>
                <p className="pt-3">
                  Moreover, information shall be classed as confidential,
                </p>
                <li className="pt-3">
                  if the Party expressly designates it as confidential;
                </li>
                <li className="pt-3">
                  if it would usually be recognised as confidential in the
                  business world; or
                </li>
                <li className="pt-3">
                  if it must be deemed confidential due to the circumstances of
                  its communication.
                </li>
              </ul>
            </li>
            <li className="pt-9">
              Information shall not be classed as confidential according to
              clause 1, if
              <ul className="ps-3 list-disc">
                <li className="pt-3">
                  the disclosing Party has given its prior written consent to
                  its release;
                </li>
                <li className="pt-3">
                  it was demonstrably in the public domain before being passed
                  on to the receiving Party;
                </li>
                <li className="pt-3">
                  it becomes public domain through no fault of the receiving
                  Party;
                </li>
                <li className="pt-3">
                  the receiving Party has demonstrably received the information
                  from a third party without violating an obligation towards the
                  disclosing Party; or
                </li>
                <li className="pt-3">
                  such information was developed independently by the receiving
                  Party.
                </li>
              </ul>
            </li>
            <li className="pt-9">
              The receiving Party shall use the confidential information solely
              within the context of its business relationship with the
              disclosing Party and shall not disseminate it to third parties
              unless the disclosing Party has given its express prior consent to
              use of the information for other purposes in written form.
            </li>
            <li className="pt-9">
              As far as the receiving Party is obliged to disclose confidential
              information of the disclosing Party for legal reasons, it shall
              immediately notify the disclosing Party thereof so that the
              disclosing Party may take necessary protection measures or declare
              its written consent.
            </li>
            <li className="pt-9">
              Confidential information may only be provided to persons whom the
              receiving Party has entrusted with preparing or handling the
              assignment. The receiving Party shall do everything within its
              powers and with the necessary care to ensure that these persons
              comply with the applicable legal data protection regulations and
              do not disclose information obtained from the disclosing Party’s
              surroundings to third parties, or reproduce or otherwise exploit
              such information.
            </li>
            <li className="pt-9">
              In the event of a violation of this agreement the violating Party
              shall be held liable according to legal regulations.
            </li>
            <li className="pt-9">
              After the expiry hereof the receiving Party shall immediately
              surrender to the disclosing Party on first demand all records,
              data, notes, and other written and printed material or electronic
              data in its possession that contains confidential information or
              shall destroy it at the disclosing Party’s request, except for one
              (1) copy which may be retained as necessary to comply with
              applicable record keeping laws and procedures.
            </li>
            <li className="pt-9">
              If any current or future provision of this agreement should be or
              become ineffective, invalid or unfeasible in whole or in part,
              this shall not affect the validity of the remaining provisions.
              The same shall apply, if a gap that requires amendment should
              arise after conclusion hereof. The Parties shall replace or amend
              any ineffective, invalid or incomplete provision by an effective
              provision that corresponds to the ineffective or invalid provision
              and the overall purpose of this agreement in its legal and
              economic content.
            </li>
            <li className="pt-9">
              The assignment of this agreement or any rights and obligations
              hereunder shall not be admissible without the prior written
              consent of the other Party.
            </li>
            <li className="pt-9">
              Any changes or additions to this agreement and other declarations
              of the contracting Parties concerning the contractual relationship
              shall require written form and shall be sent to the address last
              known to the contract partner. Any waiver of the stipulation
              requiring written form shall also be in writing.
            </li>
            <li className="pt-9">
              This agreement shall be governed solely by the law of the US
              Government excluding private international law (conflict-of-laws
              rules) and the provisions of the United Nations Convention on
              Contracts for the International Sale of Goods. Any disputes under
              or in connection with this agreement shall be subject to the
              exclusive jurisdiction of the courts of Baltimore, MD USA.
            </li>
            <li className="pt-9">
              This agreement shall become effective on execution by both Parties
              and shall end on expiry of their cooperation. The secrecy
              obligations specified herein shall continue to apply for a term of
              two years after the expiry of their cooperation.
            </li>
          </ol>
        </div>
      </div>
    />
  );
};

export default NDA;
