
import { Link, animateScroll as scroll, scrollSpy } from 'react-scroll';

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
                "py-2 lg:py-4"
            )}
        >
            <nav
                className={classNames(
                    "c-container lg:flex justify-between text-clr-dark-primary",
                )}
            >
                <h1
                    className={classNames(
                        "hidden text-clr-dark-primary",
                        "lg:inline"
                    )}
                >Logo
                </h1>

                <ul
                    className={classNames(
                        "flex justify-between lg:gap-x-8",
                    )}
                >
                    <li>Home</li>
                    <li>About</li>
                    <li>Product</li>
                    <li
                        className="relative"
                    >
                        <Link
                            className="s_contact" to="s_contact" spy={true} smooth={true} duration={500}
                        >
                            Testimony
                            <span
                                className="absolute left-1/2 -bottom-1 w-[0.4rem] h-[0.4rem] bg-clr-green-primary rounded-full"
                            />
                        </Link> 
                        
                    </li>
                </ul>

                <ul
                    className={classNames(
                        "hidden",
                        "lg:flex gap-x-8"
                    )}
                >
                    <li>Link 1</li>
                    <li>Link 1</li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;
//* END: header