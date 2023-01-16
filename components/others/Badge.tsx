//* IMPORT: nextjs-features
import Image from 'next/image';

//* IMPORT: data-types
import { iBadge } from '../../config/data-type';

const Badge = ({alt, src, mini_title}: iBadge) => {

    return (

        <div className="inline-flex gap-x-1 mini-title">
                        
            <Image 
                alt={alt}
                src={src}
                width={16}
                height={16}
            />

            <span 
                // className="mini-title"
            >{mini_title}
            </span>

        </div>
    )
}
export default Badge;