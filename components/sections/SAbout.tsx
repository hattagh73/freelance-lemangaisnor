//* IMPORT: nextjs-features-types
import Image from 'next/image';

//* IMPORT: types
import { iSAbout } from '../../config/data-type';

//* IMPORT: framer-motion
import { animate, motion } from 'framer-motion';
import { staggerContainer, fadeInDown, fadeInUpwards, fadeLTR, fadeRTL } from '../../config/framer-variants';

//* IMPORT: swiper-react-components-modules-styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

// IMPORT: classnames-package
import classNames from 'classnames';

//* START: section-about
const SAbout = ({about}: iSAbout) => {
    return (
        <motion.section
            variants={staggerContainer} 
            initial="initial"
            whileInView="animate"
            viewport={{once:true, amount: 0.6}}
            id="s_contact"
            className={classNames(
                "relative",
                "py-16 lg:pt-24 lg:pb-12"
            )}
        >
            
            <div
                className={classNames(
                    "c-container grid relative z-10",
                    "grid-cols-1",
                    "lg:grid-cols-12 lg:gap-x-5"
                )} 
            >
                
                <motion.div 
                    variants={fadeInDown}
                    className={classNames(
                        "lg:col-span-12"
                    )}
                >

                    <h4 
                        className="mini-title"
                    >{about.mini_title}
                    </h4>

                    <h1
                        className={classNames(
                            "main-title"
                        )}
                    >{about.title}
                    </h1>

                    <p
                        className={classNames(
                            "mt-4 lg:mt-8 text-clr-light-tertiary max-w-[90%]"
                        )}
                    >{about.desc}
                    </p>

                </motion.div>

                <motion.span
                    variants={fadeInDown}
                    className={classNames(
                        "relative overflow-hidden rounded-md",
                        "w-full h-64",
                        "lg:col-start-1 lg:col-span-12 lg:justify-self-end lg:w-[100%] lg:h-96",
                        "mt-4 lg:mt-6"
                    )}
                >
                    <Image 
                        alt="An Image Of Lemang"      
                        src={about.img}   
                        fill
                        sizes="(max-width: 768px) 100vw,
                        (max-width: 1200px) 50vw,
                        33vw"
                        quality={100}
                        className="object-cover"       
                    />
                </motion.span>

            </div>

            {/* START: parent-selling */}           
            <motion.div 
                variants={fadeInDown}
                className="pt-7"
            >

                <div 
                    className={classNames(
                        "c-container",
                        // "bg-clr-green-primary bg-leaf",
                        // "grid-cols-[188px_188px_188px_188px] gap-x-5",
                        // "lg:grid-cols-4 lg:gap-x-6"
                    )}
                >

                    {/* START: small-card */}
                    <Swiper
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 5,
                            },
                            768:{
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            }
                        }}
                        className="w-full"
                    >
                        {about.sells.map(i =>
                            <SwiperSlide
                                key={i.id}
                            >
                                
                                <div 
                                    className={classNames(
                                        "border border-clr-light-tertiary/10 rounded",
                                        "text-center py-4 hover:shadow shadow-clr-light-tertiary",
                                    )}
                                >

                                    {/* rounded-label-number */}
                                    <span
                                        className={classNames(
                                            // "absolute -top-[20%] left-[40%]",
                                            "text-clr-green-primary bg-[#F5F5F5] rounded-full",
                                            "w-8 h-8 inline-flex justify-center items-center",
                                        )}
                                    >{i.id}
                                    </span>
                                    
                                    <h4
                                        className="font-semibold text-clr-dark-primary mt-3"
                                    >{i.title}
                                    </h4>

                                    <p 
                                        className="text-clr-light-tertiary text-sm"
                                    >{i.desc}
                                    </p>
                                    
                                </div>
                                
                            </SwiperSlide>
                        )}{/* END: small-card */}
                    </Swiper>
                    
                </div>

            </motion.div>{/* START: parent-selling */}  

        </motion.section>
    )
}
export default SAbout;
//* END: section-about