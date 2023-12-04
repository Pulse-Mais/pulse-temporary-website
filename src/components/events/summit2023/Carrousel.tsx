"use client"
import 'swiper/css';
import 'swiper/css/pagination';
import { UsersThree, CalendarBlank, PresentationChart, ChalkboardTeacher, FlagPennant, GraduationCap } from "@/components/UI/icons/icons";
import { CardRoot } from '../../home/Card/CardRoot';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

interface CarouselProps {
    CA1?: boolean;
    CA2?: boolean;
}

const C2 = [
    {
        image: "/assents/logos/google.svg",
        alt: "logo da Google",
    },
    {
        image: "/assents/logos/googlecloud.svg",
        alt: "Logo da Google Cloud",
    },
    {
        image: "/assents/logos/cerc.svg",
        alt: "Logo da cerc",
    },
    {
        image: "/assents/logos/crossfox.svg",
        alt: "logo da CrossFox",
    },
    {
        image: "/assents/logos/foxbit.svg",
        alt: "logo da FoxBit",
    },
    {
        image: "/assents/logos/vor.svg",
        alt: "logo da Vor",
    },
    {
        image: "/assents/logos/livesports.svg",
        alt: "logo do Live Sports",
    },
    {
        image: "/assents/logos/italo.svg",
        alt: "logo da Itálo Brasileiro",
    },
    // {
    //     image: "/assents/logos/tria.svg",
    //     alt: "logo da Tria",
    // },
    // {
    //     image: "/assents/logos/lit.svg",
    //     alt: "logo da lit",
    // },
    // {
    //     image: "/assents/logos/sala37.svg",
    //     alt: "logo da Sala 37",
    // },
    // {
    //     image: "/assents/logos/mvp.svg",
    //     alt: "logo da Mvp Builders",
    // },



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
                        <figure className='flex items-center justify-center py-10'>
                            <div className='max-w-[15.625rem] h-full flex items-center justify-center'>
                                <Image src={pessoaAtual.image} alt={pessoaAtual.alt} width={250} height={140} />
                            </div>
                        </figure>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

