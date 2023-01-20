//* IMPORT: nextjs-features-types
import Image from 'next/image';

//* IMPORT: types
import { iSAbout } from '../../config/data-type';

//* IMPORT: framer-motion
import { motion } from 'framer-motion';
import { staggerContainer, fadeInDown, fadeInUpwards, fadeLTR, fadeRTL } from '../../config/framer-variants';

//* IMPORT: components
import { Badge } from '../components';

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
                "py-16 lg:pt-24 lg:pb-12 c-container"
            )}
        >
            <motion.div
                variants={fadeInDown}
            >
                
                <div className="flex justify-between items-center">

                    <h1
                        className={classNames(
                            "main-title"
                        )}
                    >{about.title}
                    </h1>

                    <Badge
                        alt="SVG icon image about"
                        src={about.badge_img}
                        mini_title={about.mini_title}
                    />

                </div>

                <p className="text-clr-light-tertiary">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>

            </motion.div>

            <motion.div
                variants={fadeInDown}
                className={classNames(
                    "mt-10"
                )}
            >

                <Image 
                    alt="An Image Of Lemang"      
                    src={about.img}   
                    width={1920}
                    height={1080}
                    quality={100}
                    className="object-cover col-span-full h-80 w-full rounded"       
                />

            </motion.div>

        </motion.section>
    )
}
export default SAbout;
//* END: section-about