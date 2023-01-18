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
                "pt-32 pb-72",
                "bg-clr-light-secondary"
            )}
        >
            <div
                className={classNames(
                    "c-container",
                    "grid grid-cols-2",
                    "gap-x-24"
                )}
            >

                {/* col1-product-info */}
                <div
                    className={classNames(
                        "order-2 text-end"
                    )}
                >
                    <h4 className="mini-title">
                        {product.mini_title}
                    </h4>

                    <h1
                        className={classNames(
                            "main-title"
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
                
                {/* col2-product-gallery */}
                <div
                    className={classNames(
                        "order-1",
                        "grid grid-cols-2 grid-rows-[200px_200px]",
                        "gap-1",
                    )}
                >
                    {   product.img && product.img.map(i =>
                        <div
                            key={i.id}
                            className={classNames(
                                "border rounded-lg relative overflow-hidden",
                                "bg-clr-light-secondary",
                                {"col-span-2":i.id === 3},
                            )}
                        >
                            <div
                                className="absolute z-[2] inset-0 hover:bg-black/25"
                            ></div>
                            <Image 
                                alt="Gambar Produk"
                                src={i.src}
                                fill
                                className="object-cover z-[1]"
                            />
                        </div>
                    )}
                </div>
            </div>

        </section>
    )
}
export default SProduct;
//* END: section-product