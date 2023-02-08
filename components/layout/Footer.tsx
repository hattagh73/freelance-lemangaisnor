//* IMPORT: types
import { iFooterObj } from '../../config/data-type';

//* IMPORT: nextjs-features
import Image from 'next/image';

//* IMPORT: components
import { Logo } from '../components';

//* IMPORT: framer-motion
import { motion } from 'framer-motion';
import { staggerContainer, fadeInDown, fadeInUpwards, ketupat, light } from '../../config/framer-variants';

//* IMPORT: classNames
import classNames from 'classnames';

//* START: footer-component
const Footer = ({footer}: iFooterObj ) => {
    
    return (
        <motion.footer
            variants={staggerContainer}
            initial="initial"
            whileInView={"animate"}
            viewport={{once:true, amount: 0.6}}
            className={classNames(
                "bg-clr-light-secondary",
                "pt-16 pb-14 lg:pt-10 lg:pb-10",
            )}
        >
            {/* START: footer-container */}
            <div
                
                className={classNames(
                    "c-container grid ",
                    "grid-cols-1", "lg:grid-cols-12", 
                    "lg:gap-x-0", 
                    "gap-10", "lg:gap-y-32"
                )}
            >
                {/* START: footer-col-1 */}
                <motion.div
                    variants={fadeInDown}
                    className={classNames(
                        "lg:col-start-1 lg:col-span-9"
                    )}
                >

                    <Logo 
                        logo_wrap="inline-flex h-10 w-20"
                    />

                    <p
                        className={classNames(
                            "text-clr-light-tertiary",
                            "max-w-[70%] lg:max-w-[30%]"
                        )}
                    >{footer.co_desc}
                    </p>
                </motion.div>{/* END: footer-col-1 */}
                
                {/* START: footer-col-2 */}
                <motion.div
                    variants={fadeInDown}
                    className="lg:col-start-11 lg:justify-self-start"
                >
                    <h1
                        className="font-semibold"
                    >{footer.pg_links.title}
                    </h1>

                    <ul
                        className="mt-5"
                    >
                        {   footer.pg_links.links.map(i =>
                            <li
                                key={i.id}
                                className="mb-2 text-clr-light-tertiary hover:text-clr-green-primary"
                            >
                                {i.name}
                            </li>
                        )}
                    </ul>
                </motion.div>{/* END: footer-col-2 */}

                {/* START: footer-col-3 */}
                <motion.div
                    variants={fadeInDown}
                    className={classNames(
                        "lg:col-start-12 lg:justify-self-end"
                    )}
                >
                    <h1
                        className="font-semibold"
                    >{footer.service.title}
                    </h1>

                    <ul
                        className="mt-5"
                    >
                        {   footer.service.services.map(i =>
                            <li
                                key={i.id}
                                className="text-clr-light-tertiary mb-2"
                            >
                                {i.name}
                            </li>
                        )}
                    </ul>
                </motion.div>{/* END: footer-col-3 */}

                {/* START: footer-col-4 */}
                <motion.div
                    variants={fadeInDown}
                    className={classNames(
                        "border-t border-t-[#DDDDDD] pt-4 text-sm text-clr-light-tertiary",
                        "lg:col-span-12",
                        "flex", "flex-col", "lg:flex-row", "lg:justify-between"
                    )}
                >
                    <p
                    >{footer.footnote.copyright}
                    </p>

                    <ul className="flex">
                        {footer.footnote.sos_med.links.map(i =>
                            <li
                                key={i.id}
                                className=""
                            >
                                {i.title}{i.id !== 3 ? <span className="mx-1">·</span> : null}
                            </li>
                        )}
                    </ul>
                    
                </motion.div>{/* END: footer-col-4 */}

                {/* START: footer-col-5 */}
                <motion.div
                    className={classNames(
                        "lg:col-span-12", 
                        "lg:justify-self-center flex flex-col items-center"
                    )}
                >
                    <Image
                        alt="Signature Icon SVG"
                        src="/images/quill.svg"    
                        width={20}                   
                        height={20}                   
                    />
                    <motion.p
                        variants={fadeInDown}
                        className={classNames(
                            "text-clr-light-tertiary text-xs",
                        )}
                    >
                        {footer.made.title} <a href={footer.made.link.url} target="_blank" rel="noreferrer" className="font-medium hover:text-clr-green-primary">{footer.made.link.name}</a>
                    </motion.p>
                </motion.div>
                {/* END: footer-col-5 */}
                
            </div>
            {/* END: container */}
        </motion.footer>
    )
}
export default Footer;
//* END: footer-component