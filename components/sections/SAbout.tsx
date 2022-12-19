//* IMPORT: nextjs-features-types
import Image from 'next/image';

//* IMPORT: types
import { iSAbout } from '../../config/data-type';

//* IMPORT: framer-motion
import { motion } from 'framer-motion';
import { staggerContainer, fadeInDown, ketupat, light } from '../../config/framer-variants';

import classNames from 'classnames';

//* START: section-about
const SAbout = ({about}: iSAbout) => {
    return (
        <section
            id="s_contact"
            className={classNames(
                "py-52 relative",
                "",
            )}
        >
            <span className="absolute top-0 -left-[28%] block w-[1000px] h-full">
                <Image 
                    alt="Large Blob SVG"
                    src="/images/lg-blob-2.svg"
                    fill
                    className=""
                />
            </span>

            <div
                className={classNames(
                    "c-container grid grid-cols-2",
                )} 
            >
                
                <div className="self-center">
                    <h4 className="text-sm font-medium text-clr-green-primary">Tentang</h4>
                    <h1
                        className={classNames(
                            "text-3xl font-semibold"
                        )}
                    >{about.title}
                    </h1>

                    <p
                        className={classNames(
                            "mt-10 text-clr-light-tertiary"
                        )}
                    >{about.desc}
                    </p>

                </div>

                <span
                    className="relative overflow-hidden rounded-2xl block w-[40%] h-80 justify-self-end drop-shadow-md"
                >
                    <Image 
                        alt="An Image Of Lemang"      
                        src={about.img}   
                        fill
                        className="object-cover"       
                    />
                </span>

            </div>

        </section>
    )
}
export default SAbout;
//* END: section-about