//* IMPORT: types
import { iFooterObj } from '../../config/data-type';

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
                "pt-16 pb-14 lg:pt-20 lg:pb-5",
            )}
        >
            {/* START: footer-container */}
            <div
                
                className={classNames(
                    "c-container grid ",
                    "grid-cols-1", "lg:grid-cols-12", 
                    "lg:gap-x-0", 
                    "gap-10", "lg:gap-y-20"
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
                            "max-w-[70%] lg:max-w-[40%]"
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
                <motion.p
                    variants={fadeInDown}
                    className={classNames(
                        "text-clr-light-tertiary text-xs",
                        "lg:col-span-12", "lg:justify-self-center"
                    )}
                >
                    {footer.made.title} <a href={footer.made.link.url} target="_blank" rel="noreferrer" className="font-medium hover:text-clr-green-primary">{footer.made.link.name}</a>
                </motion.p>
                {/* END: footer-col-5 */}
                
            </div>
            {/* END: container */}
        </motion.footer>
    )
}
export default Footer;
//* END: footer-component

// {/* START: footer-col-4 */}
// <motion.div 
// variants={fadeInDown}
// className="lg:col-span-12"
// >
// <iframe 
//     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1355.2182240909908!2d101.53913196965362!3d3.1936670410632653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc455e927ebb7b%3A0x89a6ac8aa7c06653!2sAir%20Tebu%20Paya%20Jaras!5e0!3m2!1sen!2smy!4v1671650129393!5m2!1sen!2smy" 
//     allowFullScreen={true} 
//     loading="lazy" 
//     referrerPolicy="no-referrer-when-downgrade"
//     className="w-full h-96 border outline-none"
// />
// </motion.div>
// {/* END: footer-col-4 */}

// {/* START: footer-col-5 */}
// <motion.div
// variants={fadeInDown}
// className={classNames(
//     "lg:col-start-10 lg:col-span-3"
// )}
// >

// <h1
//     className="font-medium"
// >
//     {footer.lokasi.title}
// </h1>

// <ul
//     className="mt-5 text-clr-light-tertiary text-sm"
// >
//     {footer.lokasi.full_address.map(i =>
//         <li
//             className=""
//             key={i.id}
//         >
//             {i.address}
//         </li>
//     )}
    
// </ul>

// </motion.div>
// {/* END: footer-col-5 */}

// {/* START: footer-col-6 */}
// <motion.div
// variants={fadeInDown}
// className={classNames(
//     "lg:col-start-10 lg:col-span-3"
// )}
// >

// <h1
//     className="font-medium"
// >
//     {footer.schedules.title}
// </h1>

// <ul
//     className="mt-5 text-clr-light-tertiary text-sm"
//     role="list"
// >
//     {footer.schedules.schedule.map(i =>
//         <li 
//             key={i.id}
//             className={classNames(
//                 "flex justify-between mb-2 last:mb-0"
//             )}
//         >
//             <span>{i.day}</span>
//             <span>{i.time}</span>
//         </li>
//     )}
    
// </ul>

// </motion.div>
// {/* END: footer-col-6 */}