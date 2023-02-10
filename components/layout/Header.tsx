//* IMPORT: react-hooks
import { useState, useEffect } from 'react';

// IMPORT: react-scroll
import { Link, animateScroll as scroll, scrollSpy } from 'react-scroll';

//* IMPORT: components
import { Logo } from '../components';

//* IMPORT: classNames
import classNames from 'classnames';

//* START: header
const Header = () => {

    const [header, setHeader] = useState<boolean>(false);

    const headerScrollEvent = () => {
        window.scrollY > 80 ? setHeader(true) : setHeader(false)
        return
    }

    useEffect(() => {
        window.addEventListener('scroll', headerScrollEvent);

        return () => window.removeEventListener('scroll', headerScrollEvent);
    }, [])

    return (
        <header
            className={classNames(
                "fixed bottom-0 w-full z-50",
                "lg:top-0 lg:bottom-auto",
                "py-3 bg-clr-dark-primary",
                {"lg:bg-clr-light-primary":header},
                {"lg:bg-transparent":!header},
                "text-clr-light-primary",
                {"lg:text-clr-dark-primary":header},
                {"lg:shadow lg:shadow-clr-dark-primary/10":header}
            )}
        >

            <nav
                className={classNames(
                    "c-container",
                    "lg:flex justify-between lg:items-center",
                    // "lg:flex justify-center",
                )}
            >
                {/* START: nav-logo */}
                {/* <Logo 
                    logo_wrap="hidden lg:inline-flex h-11 w-20"
                /> */}
                <h1 className="font-heyaug text-4xl">Lemang Panas</h1>
                

                {/* START: nav-anchor-links */}
                <ul
                    className={classNames(
                        "flex justify-between lg:gap-x-10",
                    )}
                >

                    {/* <li>Utama</li> */}
                    <li className="self-center">Tentang</li>
                    <li className="self-center">Produk</li>
                    <li
                        className="relative self-center"
                    >
                        <Link
                            className="s_contact" to="s_contact" spy={true} smooth={true} duration={500}
                        >
                            Testimoni
                            {/* <span
                                className="absolute left-1/2 -bottom-1 w-[0.4rem] h-[0.4rem] bg-clr-green-primary rounded-full"
                            /> */}
                        </Link> 
                    </li>
                    <li className="self-center">Lokasi</li>

                </ul>{/* END: nav-anchor-links */}

            </nav>

        </header>
    )
}
export default Header;
//* END: header