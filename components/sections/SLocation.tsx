//* IMPORT: types
import { iSLocation } from '../../config/data-type';

//* IMPORT: nextjs-features
import Image from 'next/image';

//* IMPORT: framer-motion
import { motion } from 'framer-motion';
import { staggerContainer, fadeInDown, fadeInUpwards } from '../../config/framer-variants';

//* IMPORT: components

//* IMPORT: classnames
import classNames from 'classnames';

const SLocation = ({location}: iSLocation) => {

    return (

        <motion.section
            variants={staggerContainer}
            initial="initial"
            whileInView={"animate"}
            viewport={{once:true, amount: 0.6}}
            className={classNames(
                "pt-20 pb-48 c-container",
            )}
        >

            {/* START: location-col-1 */}
            <motion.div
                variants={fadeInDown}
                className={classNames(
                    "",
                )}
            >

                <h1
                    className={classNames(
                        "main-title"
                    )}
                >{location.title}
                </h1>

                <p className="text-clr-light-tertiary">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>

            </motion.div>{/* END: location-col-1 */}

            <motion.div
                variants={fadeInDown}
                className={classNames(
                    "mt-20 grid grid-cols-1 lg:grid-cols-12 lg:grid-rows-2 gap-5"
                )}
            >

                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248.97624342183488!2d101.53867420285273!3d3.1941698612212854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc455e927ebb7b%3A0x89a6ac8aa7c06653!2sAir%20Tebu%20Paya%20Jaras!5e0!3m2!1sen!2smy!4v1673857390573!5m2!1sen!2smy" 
                    allowFullScreen={true}
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full lg:row-span-full lg:col-span-8 border border-clr-dark-primary/5 rounded-md outline-none"
                />

                

                <div className={classNames(
                    "lg:col-start-9 lg:col-span-full",
                    "bg-clr-light-secondary px-6 py-6 rounded-md"
                )}>

                    <h1 className="font-medium text-lg">Lokasi Gerai</h1>

                    <ul className="mt-3 text-clr-light-tertiary text-sm">

                        <li>Jalan Tempayan Emas 1</li>
                        <li>Kampung Paya Jaras Hilir</li>
                        <li>40160 Shah Alam</li>
                        <li>Selangor</li>

                    </ul>

                </div>

                <div className={classNames(
                    "lg:col-start-9 lg:col-span-full",
                    "bg-clr-light-secondary px-6 py-6 rounded-md"
                )}>

                    <h1 className="font-medium text-lg">Waktu Beroperasi</h1>

                    <ul className="mt-3 text-clr-light-tertiary flex flex-col gap-y-1 text-sm">

                        <li className="flex justify-between">
                            <span>Isnin - Jumaat</span>
                            <span>4.00 PM - 7.00 PM</span>
                        </li>

                        <li className="flex justify-between">
                            <span>Sabtu - Ahad</span>
                            <span>3.00 PM - 7.30 PM</span>
                        </li>
                        
                    </ul>

                </div>

            </motion.div>
            
        </motion.section>
    )
}

export default SLocation;