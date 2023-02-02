//* IMPORT: nextjs-features-types
import Image from 'next/image';

//* IMPORT: types
import { iSAbout } from '../../config/data-type';

//* IMPORT: framer-motion
import { motion } from 'framer-motion';
import { staggerContainer, fadeInDown, fadeInUpwards, fadeLTR, fadeRTL } from '../../config/framer-variants';

//* IMPORT: components

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
                "py-16 lg:pt-20 lg:pb-12 c-container",
                "grid grid-cols-1 gap-y-5",
                "md:grid-cols-[35%_1fr] md:gap-x-5"
            )}
        >

            {/* START: col-title */}
            <motion.div
                variants={fadeInDown}
                className="self-center flex flex-col gap-y-10"
            >
                
                <h1
                    className={classNames(
                        "main-title"
                    )}
                >{about.title}
                </h1>

                <p className="text-clr-light-tertiary md:w-[85%] leading-relaxed">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>

                <p
                    className="text-clr-light-tertiary md:w-[85%] tracking-wide"
                >Lorem ipsum dolor
                </p>

            </motion.div>{/* END: col-title */}
            
            {/* START: col-image */}
            <motion.div
                variants={fadeInDown}
                className={classNames(
                    ""
                )}
            >

                <Image 
                    alt="An Image Of Lemang"      
                    src={about.img}   
                    width={1920}
                    height={1080}
                    className="object-cover h-[520px] w-full"       
                />

            </motion.div>{/* END: col-image */}

        </motion.section>
    )
}
export default SAbout;
//* END: section-about