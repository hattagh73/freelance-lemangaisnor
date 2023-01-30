//* IMPORT: nextjs-features-types
import Image from 'next/image';

//* IMPORT: types
import { iSHero } from '../../config/data-type';

//* IMPORT: framer-motion
import { motion } from 'framer-motion';
import { staggerHeroContainer, fadeInDown, fadeInUpwards, ketupat, light } from '../../config/framer-variants';

// IMPORT: classnames-package
import classNames from 'classnames';

//* START: section-hero
const SHero = ({hero}: iSHero) => {

    return (

        <motion.section
            variants={staggerHeroContainer}
            initial="initial"
            animate="animate"
            className={classNames(
                "h-screen relative"
            )}
        >

            {/* layer-1-image */}
            <div
                className="absolute inset-0 z-[1]"
            >
            
                <Image 
                    alt="Hero background image"
                    src="https://res.cloudinary.com/dltslq5fh/image/upload/v1671904279/aisnor/dnlb43kumipkhdz4bbb5.jpg"
                    width={1922}
                    height={1080}
                    className="object-cover h-full w-full"
                />
                
            </div>

            {/* layer-2-overlays */}
            <div className="absolute inset-0 z-[2] bg-black/80 backdrop-blur-sm" />

            {/* layer-3-hero-content */}
            <div
                className={classNames(
                    "absolute inset-0 z-[3] c-container text-clr-light-primary",
                    "flex flex-col justify-between items-center"
                )}
            >

                {/* START: hero-titles */}
                <motion.div 
                    variants={fadeInDown} 
                    className="pt-48 flex flex-col gap-y-10 text-center"
                >

                    <div
                        className="font-mochiy text-[5.25rem]"
                    >

                        <h1
                            className={classNames(
                                "text-clr-green-primary leading-tight"
                            )}
                        >{hero.title1}<br /><span className="text-clr-light-primary">{hero.title2}</span>
                        </h1>

                        {/* <h1
                            className={classNames(
                                "text-clr-light-primary "
                            )}
                        >{hero.title2}
                        </h1> */}

                    </div>

                    <p
                        className={classNames(
                            ""
                        )}
                    >{hero.desc1}
                    </p>

                    <div>
                        <motion.button
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            className={classNames(
                                "rounded-full py-2 px-10 font-medium",
                                "bg-clr-light-primary text-clr-dark-primary hover:bg-clr-light-primary/95",
                                // "outline hover:outline-offset-2 outline-2 hover:outline-clr-light-primary"
                            )}  
                        >{hero.info}
                        </motion.button>
                    </div>

                </motion.div>

                {/* START: hero-footnote */}
                <motion.div
                    variants={fadeInDown} 
                    className="pb-3 flex flex-col items-center text-center"
                >

                    <motion.ul 
                        className="flex items-center gap-x-4"
                    >
                        
                        <li
                            className=""
                        >
                            <Image 
                                alt="Hero social icon"
                                src="/images/fa-whatsapp.svg"
                                height={22}
                                width={22}
                                className=""
                            />
                        </li>
                        
                        <li
                            className=""
                        >
                            <Image 
                                alt="Hero social icon"
                                src="/images/fa-instagram.svg"
                                height={22}
                                width={22}
                                className=""
                            />
                        </li>

                        <li
                            className=""
                        >
                            <Image 
                                alt="Hero social icon"
                                src="/images/fa-facebook.svg"
                                height={24}
                                width={24}
                                className=""
                            />
                        </li>

                    </motion.ul>

                    <p className="mt-1 text-sm font-medium">Lemang Panas</p>

                </motion.div>

            </div>

        </motion.section>

    )
}
export default SHero;
//* END: section-hero