//* IMPORT: nextjs-features-types
import Image from 'next/image';

//* IMPORT: types
import { iSHero } from '../../config/data-type';

//* IMPORT: framer-motion
import { motion } from 'framer-motion';
import { staggerContainer, fadeInDown, ketupat, light } from '../../config/framer-variants';

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
            )}
        >
            {/* layer-img-lemang */}
            <Image 
                alt="Hero Image"
                src="https://res.cloudinary.com/dltslq5fh/image/upload/v1671904279/aisnor/dnlb43kumipkhdz4bbb5.jpg"
                fill
                className="absolute -z-0"
            />

            {/* layer-overlay */}
            <div className="absolute inset-0 -z-0 bg-black/70"/>

            {/* START: hero-wrap-grid */}
            <div
                className={classNames(
                    "c-container",
                    // "bg-clr-green-primary",
                    "rounded-lg",
                    "py-6 px-6", "lg:py-44 lg:px-10",
                    // "grid grid-cols-1", "lg:place-items-center",
                    "relative z-0",
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
                            "lg:text-lg",
                            "lg:max-w-[40%]"
                        )}  
                    >{hero.desc}
                    </p>

                    <button
                        
                        className={classNames(
                            "rounded-md py-3 px-16 font-medium",
                            // "bg-clr-green-primary text-clr-light-primary",
                            "border-2 border-clr-light-primary"
                            
                        )}  
                    >{hero.info}
                    </button>
                </motion.div>

                {/* img-light */}
                {/* <motion.span
                    variants={light}
                    className="absolute bottom-0 left-[2%] hidden lg:inline w-48 h-48"
                >
                    <Image 
                        alt="Illustration Light SVG"
                        src={'/images/light.svg'}
                        fill
                        sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
                    />
                </motion.span> */}
                
                {/* img-ketupat */}
                {/* <motion.span
                    variants={ketupat}
                    className="absolute top-0 right-[2%] w-14 h-14 lg:w-48 lg:h-48"
                >
                    <Image 
                        alt="Illustration Ketupat SVG"
                        src={'/images/ketupat.svg'}
                        fill
                        sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
                    />
                </motion.span> */}

            </div>{/* END: hero-wrap-grid */}

            <div className={classNames(
                // "border border-clr-green-primary",
                "py-4 px-7",
                "relative z-0 flex",
                "flex-row justify-between",
                "text-clr-light-primary text-xs font-light",
                "bg-black/10 backdrop-blur-xl"
            )}>

                <p className="">Lemang Aisnor</p>

                <ul className=" flex gap-x-7">
                    {["Facebook", "Instragram", "WhatsApp"].map((i,index) =>
                        <li
                            key={index}
                        >{i}</li>
                    )}
                </ul>

                <p className="">Sejak 2020</p>

            </div>

        </motion.section>
    )
}
export default SHero;
//* END: section-hero