//* IMPORT: types
import { iFooterObj } from '../../config/data-type';

//* IMPORT: components
import { Logo } from '../components';

//* IMPORT: classNames
import classNames from 'classnames';

//* START: footer-component
const Footer = ({footer}: iFooterObj ) => {
    console.log(footer)
    return (
        <footer
            className={classNames(
                "pt-32 pb-1 bg-clr-light-secondary"
            )}
        >
            {/* START: footer-container */}
            <div
                className={classNames(
                    "c-container grid",
                    "grid-cols-7", "gap-x-12", "gap-y-20"
                )}
            >
                {/* START: footer-col-1 */}
                <div
                    className={classNames(
                        "col-span-5"
                    )}
                >

                    <Logo 
                        logo_wrap="inline-flex h-10 w-20"
                    />

                    <p
                        className={classNames(
                            "max-w-[40%]"
                        )}
                    >
                        {footer.co_desc}
                    </p>
                </div>{/* END: footer-col-1 */}
                
                {/* START: footer-col-2 */}
                <div>
                    <h1
                        className="font-semibold"
                    >
                        {footer.pg_links.title}
                    </h1>
                    <ul
                        className="mt-5"
                    >
                        {   footer.pg_links.links.map(i =>
                            <li
                                key={i.id}
                                className="mb-2 hover:text-clr-green-primary"
                            >
                                {i.name}
                            </li>
                        )}
                    </ul>
                </div>{/* END: footer-col-2 */}

                {/* START: footer-col-3 */}
                <div>
                    <h1
                        className="font-semibold"
                    >
                        {footer.service.title}
                    </h1>
                    <ul
                        className="mt-5"
                    >
                        {   footer.service.services.map(i =>
                            <li
                                key={i.id}
                                className="mb-2"
                            >
                                {i.name}
                            </li>
                        )}
                    </ul>
                </div>{/* END: footer-col-3 */}

                {/* START: footer-col-4 */}
                <div className="col-span-7">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1355.2182240909908!2d101.53913196965362!3d3.1936670410632653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc455e927ebb7b%3A0x89a6ac8aa7c06653!2sAir%20Tebu%20Paya%20Jaras!5e0!3m2!1sen!2smy!4v1671650129393!5m2!1sen!2smy" 
                        allowFullScreen={true} 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-96 border outline-none"
                    />
                </div>
                {/* END: footer-col-4 */}

                {/* START: footer-col-5 */}
                <div
                    className={classNames(
                        "col-start-6 col-span-2"
                    )}
                >
                    <h1
                        className="font-semibold"
                    >
                        {footer.lokasi.title}
                    </h1>
                    <ul
                        className="mt-5"
                    >
                        {footer.lokasi.full_address.map(i =>
                            <li
                                key={i.id}
                            >
                                {i.address}
                            </li>
                        )}
                        
                    </ul>
                </div>
                {/* END: footer-col-5 */}

                {/* START: footer-col-6 */}
                <div
                    className={classNames(
                        "col-start-6 col-span-2"
                    )}
                >

                    <h1
                        className="font-semibold"
                    >
                        {footer.schedules.title}
                    </h1>

                    <ul
                        className="mt-5"
                        role="list"
                    >
                        {footer.schedules.schedule.map(i =>
                            <li 
                                key={i.id}
                                className={classNames(
                                    "flex justify-between mb-2 last:mb-0"
                                )}
                            >
                                <span>{i.day}</span>
                                <span>{i.time}</span>
                            </li>
                        )}
                        
                    </ul>

                </div>
                {/* END: footer-col-6 */}

                {/* START: footer-col-7 */}
                <div
                    className={classNames(
                        "border-t border-t-[#DDDDDD] pt-2 text-sm",
                        "col-span-7",
                        "flex justify-between"
                    )}
                >
                    <p className="">{footer.footnote.copyright}</p>
                    <ul className="flex">
                        {footer.footnote.sos_med.links.map(i =>
                            <li
                                key={i.id}
                                className="first:ml-0 ml-3"
                            >
                                {i.title}
                            </li>
                        )}
                    </ul>
                </div>{/* END: footer-col-7 */}

                {/* START: footer-col-8 */}
                <p
                    className="col-span-7 justify-self-end text-xs"
                >
                    {footer.made.title} <a href={footer.made.link.url} target="_blank" rel="noreferrer" className="font-semibold">{footer.made.link.name}</a>
                </p>
                {/* END: footer-col-8 */}
                
            </div>
            {/* END: container */}
        </footer>
    )
}
export default Footer;
//* END: footer-component