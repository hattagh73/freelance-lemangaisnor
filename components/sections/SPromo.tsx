// IMPORT: nextjs-features
import Image from 'next/image';

const SPromo = () => {

    return (
        <section
            className="pt-12"
        >

            <div
                className="relative bg-black h-28"
            >

                {/* layer-1-image */}
                <Image 
                    alt="Lemang promo"
                    src="https://res.cloudinary.com/dltslq5fh/image/upload/v1671904279/aisnor/dnlb43kumipkhdz4bbb5.jpg"
                    width={1920}
                    height={1080}
                    className="absolute z-[1] w-full h-full object-cover object-[80%_25%]"
                />

                {/* layer-2-overlay */}
                <div className="absolute z-[2] inset-0 bg-black/70" />

                {/* layer-3-promo-content */}
                <div 
                    className="absolute z-[3] inset-0 c-container flex justify-center place-items-center"
                >
                    <h1 className="font-heyaug text-7xl text-clr-green-primary">Lemang Panas !</h1>
                </div>

            </div>

        </section>
    )

}
export default SPromo;