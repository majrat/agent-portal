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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse enim
            beatae nobis veritatis ullam facilis explicabo officiis dolore minus
            eaque qui vero, amet voluptate. Ad, facilis? Modi molestias ex
            dolor!
          </p>
          <h2 className="text-title-md pb-3 pt-6">Scope</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate
            ad quisquam nulla reiciendis necessitatibus beatae consequuntur!
            Autem et ratione quam debitis facere. Dignissimos dolorem quis
            nesciunt iure necessitatibus corporis adipisci! Nobis magni veniam
            itaque commodi a, eos dicta cupiditate tempora assumenda odio,
            quidem tempore cumque dolorem. Qui ipsam, eveniet perferendis
            inventore, aliquam sed saepe, ut soluta natus dolorum distinctio
            nihil! Earum quisquam officia nesciunt architecto quam! Natus ipsum
            qui consequatur ab consequuntur odio a minima, quidem ducimus labore
            laboriosam molestias debitis quisquam eum ut? Ex cum quae fugit
            totam nam?
          </p>
          <h2 className="text-title-md pb-3 pt-6">
            Compliance with Laws and Regulations
          </h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam
            dolor doloremque qui mollitia, sapiente voluptates officia ipsum
            temporibus! Quos ea atque asperiores deleniti iure. In, similique
            amet! Molestiae, modi in! Placeat nulla totam vero maiores quaerat
            sint eum rerum nisi culpa modi animi facere, debitis corporis
            commodi quasi quam laborum expedita eligendi vel molestias quod
            quae? Accusantium nisi impedit dolor. Laboriosam nesciunt excepturi
            et illum nobis soluta nemo dolor, nostrum in, voluptatibus cum
            eligendi ipsum laborum perspiciatis dicta praesentium,
            exercitationem possimus distinctio enim eaque veniam? Cupiditate
            dignissimos earum a nulla:
          </p>
          <ul className="ms-9 list-disc">
            <li className="my-1">Lorem ipsum dolor sit.</li>
            <li className="my-1">Lorem ipsum dolor sit amet.</li>
            <li className="my-1">Lorem ipsum dolor sit amet consectetur.</li>
            <li className="my-1">Lorem ipsum dolor sit amet.</li>
          </ul>
          <h2 className="text-title-md pb-3 pt-6">
            Human Rights and Labor Practices
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
            necessitatibus cumque ex dolor et placeat impedit amet temporibus
            rerum rem, iure quibusdam nisi qui ea voluptatem? Mollitia iusto ab
            repellat.
          </p>
          <ul className="ms-9 list-disc">
            <li className="my-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
              possimus vitae quaerat debitis, dignissimos cum totam tempore,
              autem id ut quos? Vel voluptatem officia numquam odio nostrum,
              porro error placeat.
            </li>
            <li className="my-1">
              Lorem ipsum dolor sit.: Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. A, praesentium! Eos atque molestiae blanditiis
              molestias distinctio est saepe, aut, earum voluptas illum
              cupiditate. Pariatur temporibus inventore deleniti sunt iste eos.
            </li>
            <li className="my-1">
              Lorem ipsum dolor sit.: Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. A, praesentium! Eos atque molestiae blanditiis
              molestias distinctio est saepe, aut, earum voluptas illum
              cupiditate. Pariatur temporibus inventore deleniti sunt iste eos.
            </li>
            <li className="my-1">
              Lorem ipsum dolor sit.: Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. A, praesentium! Eos atque molestiae blanditiis
              molestias distinctio est saepe, aut, earum voluptas illum
              cupiditate. Pariatur temporibus inventore deleniti sunt iste eos.
            </li>
          </ul>
          <h2 className="text-title-md pb-3 pt-6">Health and Safety</h2>
          <p>
            Lorem ipsum dolor sit.: Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. A, praesentium! Eos atque molestiae blanditiis
            molestias distinctio est saepe, aut, earum voluptas illum
            cupiditate. Pariatur temporibus inventore deleniti sunt iste eos.:
          </p>
          <ul className="ms-9 list-disc">
            <li className="my-1">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis?
            </li>
            <li className="my-1">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis?
            </li>
            <li className="my-1">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis?
            </li>
          </ul>
          <h2 className="text-title-md pb-3 pt-6">
            Environmental Responsibility
          </h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
            mollitia temporibus placeat ipsa delectus voluptatum neque qui
            maxime numquam totam assumenda corporis minima reprehenderit hic
            consequuntur, aperiam quibusdam nobis eligendi!:
          </p>
          <ul className="ms-9 list-disc">
            <li className="my-1">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis?
            </li>
            <li className="my-1">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis?
            </li>
            <li className="my-1">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis?
            </li>
          </ul>
          <h2 className="text-title-md pb-3 pt-6">
            Ethical Business Practices
          </h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis?:
          </p>
          <ul className="ms-9 list-disc">
            <li className="my-1">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis?
            </li>
            <li className="my-1">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis?
            </li>
            <li className="my-1">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis?
            </li>
          </ul>
          <h2 className="text-title-md pb-3 pt-6">Supply Chain Transparency</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis?:
          </p>
          <ul className="ms-9 list-disc">
            <li className="my-1">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis?
            </li>
            <li className="my-1">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis?
            </li>
          </ul>
          <h2 className="text-title-md pb-3 pt-6">Monitoring and Compliance</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis?:
          </p>
          <ul className="ms-9 list-disc">
            <li className="my-1">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis?
            </li>
            <li className="my-1">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis?
            </li>
            <li className="my-1">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis?
            </li>
          </ul>
          <h2 className="text-title-md pb-3 pt-6">Continuous Improvement</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            error consequatur a corporis deleniti eveniet amet necessitatibus
            tempore eius beatae minus impedit quas cupiditate maxime repellendus
            officiis, similique ratione quasi?.
          </p>
          <h2 className="text-title-md pb-3 pt-6">Reporting Concerns</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae,
            nihil impedit. Itaque quidem eos sequi reprehenderit natus suscipit,
            fugiat eveniet officiis quo explicabo eius ut magni veritatis.
            Nesciunt, iure in!
          </p>
        </div>
      </div>
    />
  );
};

export default CodeOfConductText;
