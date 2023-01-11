//* IMPORT: types
import { iSTestimony } from '../../config/data-type';

//* IMPORT: nextjs-features
import Image from 'next/image';

//* IMPORT: swiper-react-components-modules-styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

//* IMPORT: framer-motion
import { motion } from 'framer-motion';
import { staggerContainer, fadeInDown, fadeInUpwards } from '../../config/framer-variants';

//* IMPORT: classnames
import classNames from 'classnames';

//* START: section-testimony
const STestimony = ({testimony}: iSTestimony ) => {

    const bulletActiveClass = "bg-clr-green-primary opacity-100";

    return (

        <motion.section
            variants={staggerContainer}
            initial="initial"
            whileInView={"animate"}
            viewport={{once:true, amount: 0.6}}
            id="s_testimony"
            className={classNames(
                "py-20",
            )}
        >
            {/* START: container */}
            <motion.div
                variants={fadeInDown}
                className={classNames(
                    "c-container grid",
                    "grid-cols-12 gap-x-5",
                    ""
                )}
            >
                {/* START: col-1 */}
                <div
                    className="col-span-12 lg:text-center"
                >

                    <h4 
                        className="mini-title text-[#45ab41]"
                    >{testimony.mini_title}
                    </h4>

                    <h1
                        className={classNames(
                            "main-title text-[#052d1b]"
                        )}
                    >{testimony.title}
                    </h1>

                </div>{/* END: col-1 */}
                
                {/* START: col-2 */}
                {/* <div
                    className={classNames(
                        "mt-28 col-span-12 flex flex-col items-center text-center"
                    )}
                > */}

                <Swiper
                    pagination={{
                        enabled: true,
                        clickable: true,
                        bulletActiveClass: `${bulletActiveClass}`,
                    }}
                    modules={[Pagination, Navigation]}
                    className="mt-28 col-span-12 max-w-full pb-6 px-3"
                >
                    {testimony.testimonials.map(i =>
                        <SwiperSlide 
                            key={i.id}
                            className="flex flex-col items-center text-center"
                        >
                            {/* user-testimony */}
                            <p
                                className={classNames(
                                    "my-10 text-clr-light-tertiary order-3",
                                    "lg:max-w-[55%]"
                                )}
                            >
                                {i.desc}
                            </p>

                            {/* user-img */}
                            <span className="w-28 h-28 inline-block rounded-full order-1 relative">
                                <Image 
                                    alt="User Profile Picture Illustration"
                                    src={i.img}
                                    fill
                                    sizes="(max-width: 768px) 100vw,
                                    (max-width: 1200px) 50vw,
                                    33vw"
                                />
                            </span>

                            {/* user-name */}
                            <h1 className="mt-1 order-2 font-medium">{i.name}</h1>
                        </SwiperSlide>
                    )}
                </Swiper>
                {/* END: col-2 */}

            </motion.div>{/* END: container */}

        </motion.section>

    )
}
export default STestimony;
//* END: section-testimony