'use client'

import { Suspense, useRef } from 'react';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import Image from 'next/image'
import { Swiper, SwiperClass, SwiperProps, SwiperRef, SwiperSlide, SwiperSlideProps } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';




interface CarrouselProps {
    CA1?: boolean
    Custom?: string
}


export const DepoimentCarrousel = ({ CA1 = false, Custom = "bg-green-custom bg-wavegreen bg-contain" }: CarrouselProps) => {



    const swiperRef = useRef<SwiperRef>(null);

    function nextSlide() {
        swiperRef.current?.swiper.slideNext();
    }

    function prevSlide() {
        swiperRef.current?.swiper.slidePrev();
    }


    const C1 = [
        {
            name: "Camila",
            image: "/assents/youngers/camila.svg",
            text: "Eu sempre quis muito estudar e ter uma carreira, e esses sonhos foram ficando pra trás porque eu tive filhos muito cedo. Não sabia por onde começar, não sabia nem criar um Linkedin, me inscrevi no DPFL e consegui mentoria com a mentora mais fantástica que existe, iniciei cursos, organizei minha vida financeira e comecei a fazer brigadeiros como renda extra. Como o Thiago fala levam 9 gerações para mudar o padrão de uma família. E a gente vai quebrar essa regra.",
        },
        {
            name: "Débora",
            image: "/assents/youngers/debora.svg",
            text: "Graças às orientações do meu mentor e ao DPFL consegui emprego na Cataventos - Distribuidoras de Livros. Tudo o que eu falei na entrevista, as pesquisas que fiz da empresa, como que comportei foi graças ao meu mentor, e só tive acesso porque a DPFL deu esse acesso pra mim. Eu só tenho a agradecer, porque Graças a Deus eu tive acesso a esses anjos.",
        },
        {
            name: "Francis",
            image: "/assents/youngers/francis.svg",
            text: "Nada disso seria possível sem a mentoria que eu tive e faço parte, só tenho a agradecer a todo mundo que colaborou. Só tenho a agradecer o DPFL porque se não fosse por ele, com certeza não teria a oportunidade de estar aqui, assistir uma palestra do Google e fazer parte do time da Sauter Brasil, empresa em que fui contratado.",
        },
        {
            name: "Rennan",
            image: "/assents/youngers/rennan.svg",
            text: "O DPFL está sendo uma benção como sempre foi na minha vida, recebi o retorno da faculdade que o DPFL me conectou e a melhor notícia foi ter 100% de bolsa, portanto não vou pagar nada. Estou muito feliz, só quem sabe da realidade de quem vive na periferia sabe que as condições não são as melhores. Desde já agradeço o Projeto Da Periferia para Faria Lima, no qual foi e está sendo uma ponte para o meu futuro ser melhor.",
        },

    ]



    return (
        <section className='pb-10 px-5'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev', }}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper" ref={swiperRef}>

                {CA1 && C1.map((pessoaAtual, id) => (
                    <SwiperSlide key={id}>
                        <article className='flex flex-col items-center w-full py-10'>
                            <div className='flex flex-col items-center w-full py-10 lg:flex-row lg:justify-center lg:gap-10'>
                                <aside className='flex justify-between sl:justify-evenly items-center lg:gap-5 max-lg:w-full'>
                                    <button className='flex items-center max-lg:hidden' onClick={prevSlide} >
                                        <CaretLeft size={32} />
                                    </button>
                                    <picture className='bg-gray-300 bg-animate-pulse rounded-full w-[200px] h-[200px] max-lg:m-auto'>
                                        <Suspense fallback={<figure className='w-full h-full rounded-full bg-gray-300 animate-pulse'/>}>
                                            <Image src={pessoaAtual.image} width={200} height={200} quality={100} alt={`Depoimento da ${pessoaAtual.name}`} className='rounded-full' />
                                        </Suspense>
                                    </picture>
                                </aside>
                                <aside className='flex flex-col items-start'>
                                    <div className='m-auto max-lg:flex justify-center gap-5'>
                                        <button className='flex items-center lg:hidden' onClick={prevSlide} >
                                            <CaretLeft size={32} />
                                        </button>
                                        <h3 className='max-lg:self-center px-5 font-semibold text-green-custom text-xl py-10'>{pessoaAtual.name}</h3>
                                        <button className='flex items-center lg:hidden' onClick={nextSlide}>
                                            <CaretRight size={32} />
                                        </button>
                                    </div>
                                    <p className='px-5 pb-10 justify-self-center text-left max-w-xs sl:max-w-lg md:max-w-2xl lg:max-w-3xl'>{pessoaAtual.text}</p>
                                </aside>
                                <button className='flex items-center max-lg:hidden' onClick={nextSlide}>
                                    <CaretRight size={32} />
                                </button>
                            </div>
                            <hr className='w-full px-5 max-w-4xl h-2' />
                        </article>
                    </SwiperSlide>
                ))}

            </Swiper>
        </section>
    );
}