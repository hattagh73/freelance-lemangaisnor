//* IMPORT: nextjs-features-types
import Image from 'next/image';

//* IMPORT: types
import { iSHero } from '../../config/data-type';

//* IMPORT: framer-motion
import { motion } from 'framer-motion';
import { staggerContainer, fadeInDown, fadeInUpwards, ketupat, light } from '../../config/framer-variants';

// IMPORT: classnames-package
import classNames from 'classnames';

//* START: section-hero
const SHero = ({hero}: iSHero) => {
    return (
        <motion.section
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className={classNames(
                "bg-clr-light-secondary relative",
                "text-clr-light-primary",
                "pt-6",
                "lg:pt-0 lg:pb-0",
                "rounded-bl-3xl rounded-br-3xl overflow-hidden"
            )}
        >
            {/* layer-img-lemang */}
            <Image 
                alt="Hero Image"
                src="https://res.cloudinary.com/dltslq5fh/image/upload/v1671904279/aisnor/dnlb43kumipkhdz4bbb5.jpg"
                fill
                className="absolute object-cover -z-0"
            />

            {/* layer-overlay */}
            <div className="absolute inset-0 -z-0 bg-black/70"/>

            {/* START: hero-wrap-grid */}
            <div
                className={classNames(
                    "c-container",
                    "rounded-lg",
                    "py-6",
                    "lg:pt-40 lg:pb-44 lg:px-10",
                    "relative z-0",
                )}
            >

                <motion.div 
                    variants={fadeInDown} 
                    className={classNames(
                        "grid grid-cols-1 lg:place-items-center",
                        "lg:text-center"
                    )}
                >

                    <h1
                        className={classNames(
                            "font-medium",
                            "text-3xl",
                            "lg:text-7xl lg:max-w-[80%]"
                        )}  
                    >{hero.title}
                    </h1>
                    
                    <p
                        className={classNames(
                            "my-12",
                            "lg:mt-36 lg:mb-7",
                            "lg:text-center lg:text-base",
                        )}  
                    >{hero.desc}
                    </p>

                    <div>
                        <button
                            className={classNames(
                                "rounded-full py-2 px-12 font-medium",
                                "bg-clr-light-primary text-clr-dark-primary hover:bg-clr-light-primary/90",
                            )}  
                        >{hero.info}
                        </button>
                    </div>

                </motion.div>

            </div>{/* END: hero-wrap-grid */}
            
            {/* START: hero-footnote */}
            <div 
                className={classNames(
                    "pb-2 lg:pb-5 pt-12 lg:py-4 relative z-0",
                    // "bg-clr-dark-primary/70", nice-blur
                    // "backdrop-blur-lg" nice-blur
                )}
            >

                <motion.div 
                    variants={fadeInUpwards} 
                    className={classNames(
                        "text-clr-light-primary text-xs lg:text-xs font-light",
                        "c-container-header",
                        "flex justify-center flex-wrap",
                        "lg:flex-row lg:justify-between",
                        "gap-y-2 gap-x-2"
                    )}
                >
                    <p className="order-1">{hero.ais_lmg}</p>

                    <ul className={classNames(
                        "order-3 basis-full lg:basis-auto justify-center flex"
                    )}>
                        {hero.socials.map(i =>
                            <li
                                key={i.id}
                            >
                                <a className="hover:text-clr-green-primary">{i.name}</a>
                                {i.id !== 3 ? <span className="mx-1">•</span> : null}
                            </li>
                        )}
                    </ul>

                    <p className="order-2">{hero.since}</p>
                </motion.div>

            </div>{/* END: hero-footnote */}

        </motion.section>
    )
}
export default SHero;
//* END: section-hero