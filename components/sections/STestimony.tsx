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

//* IMPORT: components
import { Badge } from '../components';

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
                "py-20 c-container grid",
                "grid-cols-12 gap-x-2"
            )}
        >

            {/* START: testimony-col-1 */}
            <motion.div
                variants={fadeInDown}
                className={classNames(
                    "col-span-full",
                )}
            >

                <div className="flex justify-between items-center">

                    <h1
                        className={classNames(
                            "main-title"
                        )}
                    >{testimony.title}
                    </h1>

                    <Badge 
                        alt="SVG icon image testimony"
                        src={testimony.badge_img}
                        mini_title={testimony.mini_title}
                    />
                    
                </div>

                <p className="text-clr-light-tertiary">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>

            </motion.div>{/* END: testimony-col-1 */}

            {/* START: testimony-col-2 */}
            <motion.div
                variants={fadeInDown}
                className={classNames(
                    "col-span-full",
                )}
            >
                <Swiper
                    pagination={{
                        enabled: true,
                        clickable: true,
                        bulletActiveClass: `${bulletActiveClass}`,
                    }}
                    modules={[Pagination, Navigation]}
                    className="mt-28 w-full pb-8"
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 14,
                            pagination: { enabled: true, clickable: true}
                        }
                    }}
                >
                    {testimony.testimonials.map(i =>
                        <SwiperSlide 
                            key={i.id}
                            className="flex flex-col items-center "
                        >

                            {/* user-img */}
                            <span className="w-28 h-28 rounded-full relative">
                                <Image 
                                    alt="User Profile Picture Illustration"
                                    src={i.img}
                                    fill
                                    sizes="(max-width: 768px) 100vw,
                                    (max-width: 1200px) 50vw,
                                    33vw"
                                    className="object-cover"
                                />
                            </span>

                            {/* user-name */}
                            <h1 className="-mt-1 font-medium">{i.name}</h1>

                            {/* user-testimony */}
                            <div
                                className="bg-clr-light-secondary text-center mt-4 py-12 md:px-48 rounded"
                            >
                                <p
                                    className={classNames(
                                        "text-clr-light-tertiary",
                                        // "lg:max-w-[55%]"
                                    )}
                                >
                                    {i.desc}
                                </p>
                            </div>
                            
                        </SwiperSlide>
                    )}
                </Swiper>

            </motion.div>{/* END: testimony-col-2 */}

        </motion.section>

    )
}
export default STestimony;
//* END: section-testimony