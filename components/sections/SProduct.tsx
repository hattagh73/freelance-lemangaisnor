import { useState } from 'react';

//* IMPORT: nextjs-features-types
import Image from 'next/image';

//* IMPORT: data-types
import { iSProduct } from '../../config/data-type';

//* IMPORT: framer-motion
import { motion } from 'framer-motion';
import { staggerContainer, fadeInDown, ketupat, light } from '../../config/framer-variants';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

//* IMPORT: components

//* IMPORT: classnames-package
import classNames from 'classnames';

//* START: section-product
const SProduct = ({product}: iSProduct) => {

    const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
    const [nextEl, setNextEl] = useState<HTMLElement | null>(null);

    return (

        <motion.section
            variants={staggerContainer}
            initial="initial"
            whileInView={"animate"}
            viewport={{once:true, amount: 0.6}}
            id="s_contact"
            className={classNames(
                "py-12",
            )}
        >
            
            {/* START: product-container */}
            <div
                className={classNames(
                    "c-container grid",
                    "grid-cols-1",
                    "lg:grid-cols-12",
                    "gap-x-2"
                )}
            >

                {/* START: product-col-1 */}
                <motion.div
                    variants={fadeInDown}
                    className={classNames(
                        "col-span-full place-self-center text-center"
                    )}
                >
                    
                    <h1
                        className={classNames(
                            "main-title"
                        )}
                    >{product.title}
                    </h1>
                    
                    <p className="text-clr-light-tertiary mt-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>

                </motion.div>{/* END: product-col-1 */}

                <motion.div 
                    variants={fadeInDown}
                    className="mt-14 col-span-full px-36"
                >
                    <Swiper
                            // slidesPerView={"auto"}
                            // centeredSlides={true}
                            
                            modules={[Navigation]}
                            navigation={{
                                prevEl,
                                nextEl
                            }}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                    spaceBetween: 14,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 14,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                }
                            }}
                            className="pb-10"
                        >
                            
                            {   [1,2,3,4].map(i =>
                                <SwiperSlide
                                    key={i}
                                >

                                    <div className="grid grid-cols-1 group/prod">

                                        {/* card-img-wrap */}
                                        <div
                                            className="overflow-hidden rounded"
                                        >
                                            <Image  
                                                alt="Hero Image"
                                                src="https://res.cloudinary.com/dltslq5fh/image/upload/v1671904279/aisnor/dnlb43kumipkhdz4bbb5.jpg"
                                                width={1600}
                                                height={400}
                                                className={classNames(
                                                    "transition ease-in duration-300 h-48 w-full",
                                                    "lg:brightness-90 lg:group-hover/prod:brightness-100",
                                                    "group-hover/prod:scale-110"
                                                )}
                                            />
                                        </div>

                                        {/* card-body-wrap */}
                                        <div 
                                            className={classNames(
                                                "flex flex-col gap-y-3",
                                                "px-4 lg:px-7 pt-4 pb-8",
                                                "border-b-[3px] border-b-clr-green-primary/50 lg:group-hover/prod:border-b-clr-green-primary",
                                                "bg-[#F8F8F8] lg:group-hover/prod:bg-[#f5f5f5]",
                                                "transition ease-in duration-300"
                                            )}
                                        >

                                            <h1 className="text-lg font-medium">Card Title</h1>

                                            <div className="h-[1px] bg-clr-dark-primary/10" />

                                            <p className="text-clr-light-tertiary text-sm">Prodick ini juga boleh dibeli untuk</p>

                                            <ul className="flex flex-wrap gap-2 my-3">
                                                {   ["Bulan Puasa", "Hari Raya Haji", "Tempahan", "Dan Lain²"].map((i, index) =>
                                                    <li key={index} className="inline-flex">
                                                        <span 
                                                            className="text-xs font-medium px-3 bg-[#F0F0F0] text-clr-light-tertiary py-2 rounded-full"
                                                        >{i}
                                                        </span>
                                                    </li>
                                                )}
                                            </ul>

                                        </div>

                                    </div>

                                </SwiperSlide>
                            )}
                            <div className="absolute z-[1] right-[45%] bottom-0 inset-x-0 flex justify-end gap-x-4">

                                <span 
                                    ref={(node) => setPrevEl(node)} 
                                    className="rounded-full w-8 h-8 backdrop-blur-sm transition duration-200 ease-linear bg-[#f2f2f2]"
                                >1
                                </span>

                                <span 
                                    ref={(node) => setNextEl(node)} 
                                    className="rounded-full w-8 h-8 backdrop-blur-sm transition duration-200 ease-linear bg-[#f2f2f2]/5"
                                >2
                                </span>

                            </div>
                    </Swiper>
                </motion.div>
                
            </div>{/* END: product-container */}

        </motion.section>
    )
}
export default SProduct;
//* END: section-product