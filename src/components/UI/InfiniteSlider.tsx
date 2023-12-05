
'use client'
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

export const InfiniteSlider = () => {


    const images = [
        {
            image: "/assents/logos/crossfox.svg",
            alt: "logo da Crossfox",
        },
        {
            image: "/assents/logos/recode.svg",
            alt: "Logo da Recode",
        },
        {
            image: "/assents/logos/voitto.svg",
            alt: "Logo da Voitto",
        },
        {
            image: "/assents/logos/horizon.svg",
            alt: "logo da Horizon",
        },
        {
            image: "/assents/logos/soulcode.svg",
            alt: "logo da SoulCode",
        },
        {
            image: "/assents/logos/toro.svg",
            alt: "logo da Rafael Toro",
        },
        {
            image: "/assents/logos/livesports.svg",
            alt: "logo do Live Sports",
        },
        {
            image: "/assents/logos/italo.svg",
            alt: "logo da Itálo Brasileiro",
        }

    ]

    return (

        <aside>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                loop={true}
                autoplay={{
                    delay: 0,
                    pauseOnMouseEnter: true,
                    disableOnInteraction: false,
                    reverseDirection: true,
                }}

                speed={1400}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {images.map((logo, index) => {
                    return (
                        <figure className="px-10">
                            <SwiperSlide key={index} style={{ transitionTimingFunction: "linear" }} className="m-auto px-2">
                                <Image src={logo.image} alt={logo.alt} width={200} height={60} className="px-1 max-w-[200px] max-h-[80px]" />
                            </SwiperSlide>
                        </figure>
                    )
                })}
            </Swiper>
        </aside>
    );
}

