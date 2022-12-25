
import { Link, animateScroll as scroll, scrollSpy } from 'react-scroll';

//* IMPORT: components
import { Logo } from '../components';

//* IMPORT: classNames
import classNames from 'classnames';

//* START: header
const Header = () => {
    return (
        <header
            className={classNames(
                "bg-clr-light-primary",
                "fixed bottom-0 w-full z-50",
                "lg:top-0 lg:bottom-auto",
                "py-2 lg:py-2"
            )}
        >
            <nav
                className={classNames(
                    "c-container lg:flex justify-between lg:items-center text-clr-dark-primary",
                )}
            >
                <Logo 
                    logo_wrap="hidden lg:inline-flex h-11 w-20"
                />

                <ul
                    className={classNames(
                        "flex justify-between lg:gap-x-8",
                    )}
                >
                    <li>Utama</li>
                    <li>Tentang</li>
                    <li>Produk</li>
                    <li
                        className="relative"
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
                </ul>

                {/* <ul
                    className={classNames(
                        "hidden",
                        "lg:flex gap-x-8"
                    )}
                >
                    <li>Link 1</li>
                    <li>Link 1</li>
                </ul> */}
            </nav>
        </header>
    )
}
export default Header;
//* END: header