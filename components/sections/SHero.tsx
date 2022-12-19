//* IMPORT: nextjs-features-types
import Image from 'next/image';

//* IMPORT: types
import { iSHero } from '../../config/data-type';

//* IMPORT: framer-motion
import { motion } from 'framer-motion';
import { staggerContainer, fadeInDown, ketupat, light } from '../../config/framer-variants';

import classNames from 'classnames';

//* START: section-hero
const SHero = ({hero}: iSHero) => {
    return (
        <motion.section
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className={classNames(
                // "bg-clr-light-secondary",
                "text-clr-light-primary",
                "pt-6",
                "lg:pt-36 lg:pb-28",
            )}
        >

            {/* START: hero-wrap-grid */}
            <div
                
                
                className={classNames(
                    "c-container bg-clr-green-primary rounded-3xl",
                    "py-6 px-6", "lg:py-24 lg:px-10",
                    // "grid grid-cols-1", "lg:place-items-center",
                    "relative",
                    // "shadow-lg shadow-clr-dark-primary/10"
                )}
            >
                <motion.div variants={fadeInDown} className="grid grid-cols-1 lg:place-items-center">
                    <h1
                        
                        className={classNames(
                            "font-semibold",
                            "text-3xl",
                            "lg:text-5xl"
                        )}  
                    >{hero.title}
                    </h1>
                    
                    <p
                        
                        className={classNames(
                            "my-12", "lg:text-center lg:my-16",
                            "lg:max-w-[40%]"
                        )}  
                    >{hero.desc}
                    </p>

                    <button
                        
                        className={classNames(
                            "rounded-lg py-3 px-16 font-medium",
                            // "bg-clr-light-secondary text-clr-green-primary"
                            "border-2 border-clr-light-primary"
                            
                        )}  
                    >{hero.info}
                    </button>
                </motion.div>
                {/* img-light */}
                <motion.span
                    variants={light}
                    className="absolute bottom-0 left-[2%] hidden lg:inline w-48 h-48"
                >
                    <Image 
                        alt="Illustration Light SVG"
                        src={'/images/light.svg'}
                        fill
                        sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
                    />
                </motion.span>
                
                {/* img-ketupat */}
                <motion.span
                    variants={ketupat}
                    className="absolute top-0 right-[2%] w-14 h-14 lg:w-48 lg:h-48"
                >
                    <Image 
                        alt="Illustration Ketupat SVG"
                        src={'/images/ketupat.svg'}
                        fill
                        sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
                    />
                </motion.span>

            </div>{/* END: hero-wrap-grid */}

        </motion.section>
    )
}
export default SHero;
//* END: section-hero

// //* IMPORT: nextjs-features-types
// import Image from 'next/image';

// //* IMPORT: types
// import { iSHero } from '../../config/data-type';

// //* IMPORT: framer-motion
// import { motion } from 'framer-motion';
// import { staggerContainer, fadeInDown, ketupat, light } from '../../config/framer-variants';

// import classNames from 'classnames';

//* START: section-hero
// const SHero = ({hero}: iSHero) => {
//     return (
//         <section
//             className={classNames(
//                 "text-clr-light-primary bg-clr-light-secondary",
//                 "pt-6",
//                 "lg:pt-36 lg:pb-28",
//             )}
//         >

//             {/* START: hero-wrap-grid */}
//             <motion.div
//                 variants={staggerContainer}
//                 initial="initial"
//                 animate="animate"
//                 className={classNames(
//                     "c-container bg-clr-green-primary rounded-3xl",
//                     "py-6 px-6", "lg:py-24 lg:px-10",
//                     "grid grid-cols-1", "lg:place-items-center",
//                     "relative",
//                     // "shadow-lg shadow-clr-dark-primary/10"
//                 )}
//             >

//                 <motion.h1
//                     variants={fadeInDown}
//                     className={classNames(
//                         "font-semibold",
//                         "text-3xl",
//                         "lg:text-5xl"
//                     )}  
//                 >{hero.title}
//                 </motion.h1>
                
//                 <motion.p
//                     variants={fadeInDown}
//                     className={classNames(
//                         "my-12", "lg:text-center lg:my-16",
//                         "lg:max-w-[40%]"
//                     )}  
//                 >{hero.desc}
//                 </motion.p>

//                 <motion.button
//                     variants={fadeInDown}
//                     className={classNames(
//                         "rounded-lg py-3 px-16 font-medium",
//                         // "bg-clr-light-secondary text-clr-green-primary"
//                         "border-2 border-clr-light-primary"
                        
//                     )}  
//                 >{hero.info}
//                 </motion.button>

//                 {/* img-light */}
//                 <motion.span
//                     variants={light}
//                     className="absolute bottom-0 left-[2%] drop-shadow-md hidden lg:inline w-48 h-48"
//                 >
//                     <Image 
//                         alt="Illustration Light SVG"
//                         src={'/images/light.svg'}
//                         fill
//                         sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
//                     />
//                 </motion.span>
                
//                 {/* img-ketupat */}
//                 <motion.span
//                     variants={ketupat}
//                     className="absolute top-0 right-[2%] drop-shadow-md w-14 h-14 lg:w-48 lg:h-48"
//                 >
//                     <Image 
//                         alt="Illustration Ketupat SVG"
//                         src={'/images/ketupat.svg'}
//                         fill
//                         sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
//                     />
//                 </motion.span>

//             </motion.div>{/* END: hero-wrap-grid */}

//         </section>
//     )
// }
// export default SHero;
//* END: section-hero