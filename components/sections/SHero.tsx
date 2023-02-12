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
            <div className="absolute inset-0 z-[2] bg-black/90 backdrop-blur-sm" />

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
                    className="pt-56 md:pt-40 flex flex-col items-center gap-y-10 text-center"
                >

                    <h1
                        className={classNames(
                            "font-heyaug text-clr-green-primary -rotate-3 tracking-wide",
                            "text-6xl",
                            "lg:text-9xl",
                            // "[5.25rem]"
                        )}
                    >{hero.title1}<br/><span className="text-clr-light-primary"> {hero.title2}</span>
                    </h1>

                    <p
                        className={classNames(
                            "text-sm lg:text-base",
                            "max-w-[90%]"
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
                        className="flex items-center gap-x-5"
                    >

                        {   hero.socials.map((i, index) =>

                            <motion.li
                                initial = {{
                                    rotate: 0,
                                    scale: 1
                                }}

                                whileHover = {{
                                    rotate: 360,
                                    scale: 1.4
                                }}
                                transition = {{
                                    delay: 0.1,
                                    duration: 0.3,
                                    ease: "easeIn"
                                }}
                                className=""
                                key={i.id}
                            >
                                <Image 
                                    alt="Hero social icon"
                                    // src="/images/fa-whatsapp.svg"
                                    src={i.icon}
                                    height={512}
                                    width={512}
                                    className="w-6 h-6"
                                />
                            </motion.li>

                        )}

                    </motion.ul>

                    <p className="mt-3 text-sm">{hero.lemang_panas}</p>

                </motion.div>

            </div>

        </motion.section>

    )
}
export default SHero;
//* END: section-hero