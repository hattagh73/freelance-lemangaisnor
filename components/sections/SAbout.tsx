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

            {/* START: parent-selling */}           
            <div className="pt-14 bg-clr-light-primary">

                <div className="c-container grid grid-cols-4 gap-x-24">

                    {/* START: small-card */}
                    {about.sells.map(i =>
                        <div 
                            key={i.id}
                            className={classNames(
                                "border border-clr-dark-primary/10",
                                "rounded relative",
                                "text-center pt-8 pb-4"
                            )}
                        >

                            <div
                                className={classNames(
                                    "absolute -top-[20%] left-[40%]",
                                    "bg-clr-green-primary text-clr-light-primary rounded-full",
                                    "w-9 h-9 inline-flex justify-center items-center",
                                    "outline outline-1 outline-offset-2 outline-clr-dark-primary/10"
                                )}
                            >{i.id}
                            </div>
                            
                            <h4
                                className="font-medium"
                            >{i.title}
                            </h4>

                            <p 
                                className="text-clr-light-tertiary text-sm mt-2"
                            >{i.desc}
                            </p>
                            
                            

                        </div>
                    )}{/* END: small-card */}
                    
                </div>

            </div>{/* START: parent-selling */}  

        </section>
    )
}
export default SAbout;
//* END: section-about