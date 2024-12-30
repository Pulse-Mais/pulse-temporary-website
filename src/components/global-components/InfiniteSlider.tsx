
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
            image: "/assents/logos/voitto.svg",
            alt: "Logo da Voitto",
        },
        {
            image: "/assents/logos/horizon.svg",
            alt: "logo da Horizon",
        },
        {
            image: "/assents/logos/italo.svg",
            alt: "logo da Itálo Brasileiro",
        },





        {
            image: "/assents/logos/dreamidea.svg",
            alt: "logo da Dreamidea",
        },
        {
            image: "/assents/logos/matzaacademy.svg",
            alt: "logo da Matza Academy",
        },
        {
            image: "/assents/logos/institutomarte.svg",
            alt: "logo do Instituto Marte",
        },
        {
            image: "/assents/logos/reclameaqui.svg",
            alt: "logo do Reclame Aqui",
        },
        {
            image: "/assents/logos/mvpbuilders.svg",
            alt: "logo da MVP Builders",
        },
        {
            image: "/assents/logos/jallaspremium.svg",
            alt: "logo da Jallas Premium",
        },
        {
            image: "/assents/logos/institutoestreladoamanha.svg",
            alt: "logo do Instituto Estrela do Amanhã",
        },
        {
            image: "/assents/logos/pub.svg",
            alt: "logo da PUB",
        },
        {
            image: "/assents/logos/fellipelli.svg",
            alt: "logo da Fellipelli",
        },
        {
            image: "/assents/logos/sala37.svg",
            alt: "logo da Sala 37",
        },
        {
            image: "/assents/logos/ecossistemacleveltics.svg",
            alt: "logo do Ecossistema C Level Tics",
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
                    reverseDirection: false,
                }}

                speed={1400}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {images.map((logo, index) => {
                    return (
                        <figure className="max-lg:px-10 bg-partness" key={index}>
                            <SwiperSlide key={index} style={{ transitionTimingFunction: "linear" }} className="m-auto px-2">
                                <Image src={logo.image} alt={logo.alt} width={200} height={60} className="px-1 max-w-[200px] max-h-[80px] lg:max-h-[120px]" />
                            </SwiperSlide>
                        </figure>
                    )
                })}
            </Swiper>
        </aside>
    );
}

