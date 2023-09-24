"use client"
import 'swiper/css';
import 'swiper/css/pagination';
import { UsersThree, CalendarBlank, PresentationChart, ChalkboardTeacher, FlagPennant, GraduationCap } from "@/components/UI/icons/icons";
import { CardRoot } from '../home/Card/CardRoot';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

interface CarouselProps {
    CA1?: boolean;
    CA2?: boolean;
}

const C2 = [
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
        image: "/assents/logos/horizon.png",
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


]

export default function Carousel({ CA1 = false, CA2 = false }: CarouselProps) {



    return (
        <div className="relative">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {CA1 &&
                    (<>
                        <SwiperSlide>
                            <div className='flex justify-center py-12 px-3'>
                                <CardRoot HasFill='max-sm:max-w-[320px] max-w-[405px] flex flex-col justify-between' HasCape='yellow' icon={UsersThree}>
                                    <div className='py-7 px-3 text-center'>
                                        <h4 className={`px-3 font-bold text-2xl max-w-xl text-yellow-custom`}>
                                            Jovens periféricos
                                        </h4>
                                        <p className="py-5 px-3 text-base max-w-4xl">
                                            Queremos oferecer a você oportunidades únicas de crescimento e desenvolvimento. Junte-se a nós e descubra como você pode conquistar seus objetivos e superar as barreiras que encontrou no caminho.
                                        </p>
                                    </div>
                                </CardRoot>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='flex justify-center py-12 px-3'>
                                <CardRoot HasFill='max-sm:max-w-[320px] max-w-[405px] flex flex-col justify-between' HasCape='green' icon={UsersThree}>
                                    <div className='py-7 px-3 text-center'>
                                        <h4 className={`px-3 font-bold text-2xl max-w-xl text-green-custom`}>
                                            Mentores
                                        </h4>
                                        <p className="py-5 px-3 text-base  max-w-4xl">
                                            Você é um mentor de negócios em busca de oportunidades para compartilhar seu conhecimento e experiência? Compartilhe suas histórias, forneça conselhos e ajude a moldar a próxima geração de líderes de negócios
                                        </p>
                                    </div>
                                </CardRoot>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='flex justify-center py-12 px-3'>
                                <CardRoot HasFill='max-sm:max-w-[320px] max-w-[405px] flex flex-col justify-between' HasCape='blue' icon={UsersThree}>
                                    <div className='py-7 px-3 text-center'>
                                        <h4 className={`px-3 font-bold text-2xl max-w-xl text-blue-custom`}>
                                            Empresários
                                        </h4>
                                        <p className="py-5 px-3 text-base max-w-4xl">
                                            Você terá a oportunidade de conhecer nosso projeto impactante e que precisa de apoio e se conecte diretamente com representantes. Venha descobrir como seu investimento pode transformar vidas e comunidades inteiras.
                                        </p>
                                    </div>
                                </CardRoot>
                            </div>
                        </SwiperSlide>
                    </>)}

                {CA2 && C2.map((pessoaAtual, id) => (
                    <SwiperSlide key={id}>
                        <figure className='flex justify-center py-10'>
                            <div className='max-w-[15.625rem]'>
                                <Image src={pessoaAtual.image} alt={pessoaAtual.alt} width={200} height={90} className='m-auto' />
                            </div>
                        </figure>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

