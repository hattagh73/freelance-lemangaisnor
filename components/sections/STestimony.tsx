//* IMPORT: types
import { iSTestimony } from '../../config/data-type';

//* IMPORT: nextjs-features
import Image from 'next/image';

//* IMPORT: swiper-react-components-modules-styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

//* IMPORT: classnames
import classNames from 'classnames';

//* START: section-testimony
const STestimony = ({testimony}: iSTestimony ) => {

    const bulletActiveClass = "bg-clr-green-primary opacity-100";

    return (

        <section
            id="s_testimony"
            className={classNames(
                "pt-32 pb-72",
            )}
        >
            {/* START: container */}
            <div
                className={classNames(
                    "c-container grid",
                    "grid-cols-12 gap-x-5",
                    ""
                )}
            >
                {/* START: col-1 */}
                <div
                    className="col-span-12 text-center"
                >

                    <h4 
                        className="mini-title text-[#45ab41]"
                    >{testimony.mini_title}
                    </h4>

                    <h1
                        className={classNames(
                            "main-title text-[#052d1b]"
                        )}
                    >{testimony.title}
                    </h1>

                </div>{/* END: col-1 */}
                
                {/* START: col-2 */}
                {/* <div
                    className={classNames(
                        "mt-28 col-span-12 flex flex-col items-center text-center"
                    )}
                > */}
                    <Swiper
                        pagination={{
                            enabled: true,
                            clickable: true,
                            bulletActiveClass: `${bulletActiveClass}`,
                        }}
                        modules={[Pagination, Navigation]}
                        className="mt-28 col-span-12 max-w-full pb-10 px-3"
                    >
                        {testimony.testimonials.map(i =>
                            <SwiperSlide 
                                key={i.id}
                                className="flex flex-col items-center text-center"
                            >
                                <p
                                    className="my-10 max-w-[45%] text-clr-light-tertiary order-3"
                                >
                                    {i.desc}
                                </p>

                                <span className="w-28 h-28 inline-block rounded-full order-1 relative">
                                    <Image 
                                        alt="User Profile Picture Illustration"
                                        src={i.img}
                                        fill
                                    />
                                </span>

                                <h1 className="mt-4 order-2">{i.name}</h1>
                            </SwiperSlide>
                        )}
                    </Swiper>

                {/* </div> */}
                {/* END: col-2 */}

            </div>{/* END: container */}

        </section>

    )
}
export default STestimony;
//* END: section-testimony