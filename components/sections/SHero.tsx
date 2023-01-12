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
                "bg-clr-light-secondary relative",
                "text-clr-light-primary",
                "pt-6 pb-3",
                "lg:pt-0 lg:pb-0",
                "rounded-bl-2xl rounded-br-2xl overflow-hidden"
            )}
        >
            {/* layer-img-lemang */}
            <Image 
                alt="Hero Image"
                src="https://res.cloudinary.com/dltslq5fh/image/upload/v1671904279/aisnor/dnlb43kumipkhdz4bbb5.jpg"
                fill
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
                className="absolute object-cover -z-0"
            />

            {/* layer-overlay */}
            <div className="absolute inset-0 -z-0 bg-black/70 backdrop-blur" />

            {/* START: hero-wrap-grid */}
            <div
                className={classNames(
                    "c-container relative z-0",
                    "py-0",
                    "lg:pt-40 lg:pb-44 lg:px-10",
                )}
            >

                <motion.div 
                    variants={fadeInDown} 
                    className={classNames(
                        "grid grid-cols-1 place-items-center",
                        "text-center"
                    )}
                >

                    <h1
                        className={classNames(
                            "font-cabinet font-bold",
                            "text-3xl lg:text-7xl",
                        )}  
                    >{hero.title}
                    </h1>
                    
                    <p
                        className={classNames(
                            "mt-8 lg:mt-16",
                            "text-base lg:text-xl lg:text-center",
                        )}  
                    >{hero.desc1}
                    </p>

                    <p
                        className={classNames(
                            "mb-8 lg:mb-16",
                            "text-base lg:text-xl lg:text-center",
                        )}  
                    >{hero.desc2}
                    </p>

                    <div>
                        <button
                            className={classNames(
                                "rounded-full py-2 px-12 font-medium",
                                "bg-clr-light-primary text-clr-dark-primary hover:bg-clr-light-primary/95",
                                // "outline hover:outline-offset-2 outline-2 hover:outline-clr-light-primary"
                            )}  
                        >{hero.info}
                        </button>
                    </div>

                </motion.div>

            </div>{/* END: hero-wrap-grid */}
            
            {/* START: hero-footnote */}
            <div 
                className={classNames(
                    "pt-16 lg:py-4 relative z-0",
                    // "bg-clr-dark-primary/70", nice-blur
                    // "backdrop-blur-lg" nice-blur
                )}
            >

                <motion.div 
                    variants={fadeInUpwards} 
                    className={classNames(
                        "text-clr-light-primary text-xs lg:text-xs",
                        "c-container-header",
                        "flex justify-center flex-wrap",
                        "lg:flex-row lg:justify-between",
                        "gap-y-2 gap-x-2"
                    )}
                >

                    <p className="order-1">{hero.since}</p>

                    <ul className={classNames(
                        "order-2 basis-full lg:basis-auto justify-center flex"
                    )}>
                        {hero.socials.map(i =>
                            <li
                                key={i.id}
                            >
                                <a className="hover:text-clr-green-primary">{i.name}</a>
                                {i.id !== 3 ? <span className="mx-1">·</span> : null}
                            </li>
                        )}
                    </ul>
                    
                </motion.div>

            </div>{/* END: hero-footnote */}

        </motion.section>
    )
}
export default SHero;
//* END: section-hero