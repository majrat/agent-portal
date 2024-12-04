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
            brand <br /> 7361 Lorem, ipsum dolor. <br /> Lorem., MD 12345
          </p>
          <p className="pt-9 text-start">
            - hereinafter referred to as “contract partner”–
          </p>
          <p className="pt-6 text-start">
            - hereinafter collectively referred to as “the Parties“-
          </p>
          <p className="pt-6 text-start text-blue-400">Preamble</p>
          <p className="pt-9 text-start">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam unde dolores atque nemo ab, accusantium quibusdam eligendi vel cupiditate sit voluptates laboriosam eos quos aliquam perferendis corrupti explicabo tempore ut?
            Officiis cupiditate ut odit non quam tempora libero obcaecati voluptates optio repellat, suscipit soluta ratione provident eum possimus corporis ea! Dolor temporibus possimus ipsum quaerat consectetur, praesentium inventore numquam et.
            Doloremque magni nisi perspiciatis consequuntur ullam vitae eum corporis beatae deserunt quasi sint a sit cupiditate, obcaecati iusto velit, maiores necessitatibus aliquid ea provident autem officiis, quidem perferendis veniam! Consequatur.
          </p>
          <p className="pt-9 text-start">
            Therefore the Parties agree as follows:
          </p>
          <ol className="ps-6 pt-9 text-start list-decimal">
            <li className="pt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos porro fuga consectetur omnis ullam facere suscipit error, odio debitis dolor impedit nobis commodi ipsa voluptates delectus? Cupiditate libero ad explicabo.
              <ul className="ps-3 list-disc">
                <li className="pt-3">Lorem, ipsum dolor.</li>
                <li className="pt-3">
                 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis!
                </li>
                <li className="pt-3">Lorem ipsum dolor sit.</li>
                <li className="pt-3">Lorem, ipsum dolor.</li>
                <li className="pt-3">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam!
                </li>
                <p className="pt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum.
                </p>
                <li className="pt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque.
                </li>
                <li className="pt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti!
                </li>
                <li className="pt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, consequuntur!
                </li>
              </ul>
            </li>
            <li className="pt-9">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, ut inventore
              <ul className="ps-3 list-disc">
                <li className="pt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, quae.
                </li>
                <li className="pt-3">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, voluptas.
                </li>
                <li className="pt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, veniam?
                </li>
                <li className="pt-3">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore obcaecati, inventore quis veniam necessitatibus vero?
                </li>
                <li className="pt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas temporibus ullam officia eaque asperiores dolores minima sunt!
                </li>
              </ul>
            </li>
            <li className="pt-9">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ex est adipisci enim cumque repellendus maiores nihil quod, autem doloremque dolore porro at inventore. Dolor at ea saepe ullam. At.
              Maxime temporibus aperiam minima. Asperiores beatae quia doloribus dolores ipsum numquam quidem neque ea harum quos? Placeat ratione unde molestias modi laborum optio deleniti! Quae qui labore adipisci totam architecto.
            </li>
            <li className="pt-9">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore magni vitae ipsa rem iste cum? Voluptates, optio esse, dignissimos omnis, beatae nesciunt vitae praesentium quisquam sequi architecto maxime id ducimus.
              Animi iure optio voluptatem deleniti cupiditate. Atque perferendis ratione eaque? Ut minus accusantium explicabo ab provident doloribus sequi quibusdam ullam incidunt rerum voluptatibus reiciendis voluptatem natus odio, cum sed consequuntur.
            </li>
            <li className="pt-9">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid voluptatum possimus amet unde reprehenderit perspiciatis eum facere minus ipsam aspernatur, tempore accusamus obcaecati labore. Ratione dolor rerum enim quaerat doloribus.
              Assumenda architecto quisquam sequi eos recusandae ullam? Iure unde a reprehenderit, quam magnam accusamus eaque molestiae sint nam aliquam voluptatem deserunt. Quidem doloribus delectus temporibus laborum excepturi, ut minima est?
            </li>
            <li className="pt-9">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam laborum dicta dolorem repellat nam? Laboriosam, sit libero praesentium perferendis deserunt sint reiciendis quisquam incidunt impedit blanditiis, sed dicta iure alias!
            </li>
            <li className="pt-9">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum voluptate magnam vel laborum illo ipsam placeat unde quisquam inventore ad, numquam id neque eaque pariatur deleniti aut voluptas maiores! Odit.
            </li>
            <li className="pt-9">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione accusantium repellat cum praesentium culpa possimus laboriosam consectetur nemo, temporibus consequatur sint deserunt libero veritatis commodi sed quo! Culpa, iusto libero.
             Eveniet quibusdam aut in alias delectus, adipisci ullam? Ut, vel totam consequuntur aliquid modi nemo exercitationem vero nisi voluptates excepturi laudantium in temporibus dicta repudiandae, libero non odio fugiat aliquam.
             Possimus ad libero quibusdam ullam tempore optio eveniet saepe, labore ab harum aut magni natus debitis sit reprehenderit explicabo architecto aperiam fuga soluta non ipsa necessitatibus. Illum atque repudiandae non!
            </li>
            <li className="pt-9">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, vitae aperiam vel asperiores assumenda omnis perferendis nulla nemo accusamus repellat sed atque eos est ipsum eaque culpa sunt debitis molestias.
            </li>
            <li className="pt-9">
             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse nisi velit delectus, dolorum nostrum possimus, dolor libero eum incidunt sunt beatae nulla ipsum inventore ex! At blanditiis aliquam delectus officia.
             Iusto, voluptates dolores placeat impedit harum sed sit, beatae assumenda, optio a magni fugiat repellat saepe suscipit eveniet praesentium sapiente ipsum molestiae natus. Id error enim rem rerum, consequatur ducimus!
            </li>
            <li className="pt-9">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, vitae? Voluptas, minus autem maxime reprehenderit molestias nesciunt. Sequi modi quia itaque rerum molestiae, iste veniam ab labore vitae, quos hic?
             Provident perspiciatis doloribus quod quisquam accusantium soluta, nam fugiat, tempora in hic id vero nesciunt tenetur recusandae. Illum, optio qui tenetur perferendis quidem maiores architecto ducimus repellendus aut cum obcaecati?
             Molestiae sapiente eaque earum vitae ex ipsam, beatae sunt, libero inventore natus fugit veniam dolorum voluptate voluptatum quas iure obcaecati molestias maiores assumenda at autem, culpa pariatur repellendus voluptatibus! Mollitia.
            </li>
            <li className="pt-9">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione quisquam architecto vitae ducimus voluptates. Mollitia vitae repudiandae rerum aliquid doloribus quasi officia! Perferendis in eum omnis natus saepe voluptatibus veniam.
            </li>
          </ol>
        </div>
      </div>
    />
  );
};

export default NDA;
