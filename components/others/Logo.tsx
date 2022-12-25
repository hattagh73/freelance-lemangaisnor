//* IMPORT: nextjs-features-types
import Image from 'next/image';

//* IMPORT: data-types
import { iLogo } from '../../config/data-type';

//* IMPORT: classnames-package
import classNames from 'classnames';

const Logo = ({logo_wrap, logo_img}: iLogo ) => {
    return  (
        <span
            className={classNames(
                "relative",
                logo_wrap
            )}
        >
            <Image 
                alt="Image Of A SVG Logo"
                src="/images/logo.svg"
                fill
                className={`absolute ${logo_img}`}
            />
        </span>
    )
}
export default Logo;