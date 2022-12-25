//* IMPORT: nextjs-features-types
import Image from 'next/image';

//* IMPORT: types
import { iSAbout } from '../../config/data-type';

//* IMPORT: framer-motion
import { motion } from 'framer-motion';
import { staggerContainer, fadeInDown, ketupat, light } from '../../config/framer-variants';

// IMPORT: classnames-package
import classNames from 'classnames';

//* START: section-about
const SAbout = ({about}: iSAbout) => {
    return (
        <section
            id="s_contact"
            className={classNames(
                "relative",
                "pt-32 pb-28"
                // "pt-32 pb-72",
            )}
        >
            
            <div
                className={classNames(
                    "c-container grid grid-cols-12 gap-x-5 relative z-10",
                )} 
            >
                
                <div className="self-center col-span-5">
                    <h4 className="mini-title">{about.mini_title}</h4>
                    <h1
                        className={classNames(
                            "main-title"
                        )}
                    >{about.title}
                    </h1>

                    <p
                        className={classNames(
                            "mt-10 text-clr-light-tertiary max-w-[90%]"
                        )}
                    >{about.desc}
                    </p>

                </div>

                <span
                    className={classNames(
                        "relative overflow-hidden rounded-xl col-start-9 col-span-4 w-[70%] h-72 justify-self-end",
                        // "justify-self-center"
                    )}
                >
                    <Image 
                        alt="An Image Of Lemang"      
                        src={about.img}   
                        fill
                        className="object-cover"       
                    />
                </span>

            </div>

            <div className="pt-10 bg-clr-light-primary">

                <div className="c-container grid grid-cols-4 gap-x-10 ">

                    {about.sells.map(i =>
                        <div 
                            key={i.id}
                            className={classNames(
                                "rounded-md py-4 px-5 text-center",
                                "border border-clr-dark-primary/5"
                            )}
                        >
                            <span 
                                className={classNames(
                                    "w-8 h-8 rounded-full text-sm",
                                    // "text-clr-green-primary bg-clr-green-primary/10",  
                                    "bg-clr-green-primary text-clr-light-primary",
                                    "inline-flex justify-center items-center"
                                )}
                            >{i.id}
                            </span>

                            <h1 
                                className="mt-5"
                            >{i.title}
                            </h1>

                        </div>
                    )}
                    
                </div>

            </div>

        </section>
    )
}
export default SAbout;
//* END: section-about