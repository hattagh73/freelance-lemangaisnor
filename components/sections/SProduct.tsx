//* IMPORT: nextjs-features-types
import Image from 'next/image';

//* IMPORT: types
import { iSProduct } from '../../config/data-type';

//* IMPORT: framer-motion
import { motion } from 'framer-motion';
import { staggerContainer, fadeInDown, ketupat, light } from '../../config/framer-variants';

import classNames from 'classnames';

//* START: section-product
const SProduct = ({product}: iSProduct) => {
    return (
        <section
            id="s_contact"
            className={classNames(
                "c-container",
                "pt-32 pb-32",
                "grid grid-cols-2",
            )}
        >

            <div
                className={classNames(
                    "order-2 text-end"
                )}
            >

                <h1
                    className={classNames(
                        "text-2xl font-semibold"
                    )}
                >{product.title}
                </h1>

                <p
                    className={classNames(
                        "mt-10 text-clr-light-tertiary"
                    )}
                >{product.desc}
                </p>

            </div>

            <div
                className={classNames(
                    "order-1"
                )}
            >
                about-col-2
            </div>

        </section>
    )
}
export default SProduct;
//* END: section-product