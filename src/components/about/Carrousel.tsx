'use client'
import 'swiper/css';
import 'swiper/css/pagination';

import { Button } from '../UI/Button';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CaretRight, CaretLeft } from '@/components/UI/icons/icons'
import { Swiper as SwiperClass } from 'swiper';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Link from 'next/link';

// interface CarrouselProps {
//     CA1?: boolean
// }

interface CarouselProps {
    CA1?: boolean;
}

export default function Carousel({ CA1 = false }: CarouselProps) {


    const C1 = [
        {
            name: "Francis",
            image: "/assents/youngers/francis.svg",
            text: " ",
        },
        {
            name: "Camila",
            image: "/assents/youngers/camila.svg",
            text: " a",
        },
        {
            name: "Rennan",
            image: "/assents/youngers/rennan.svg",
            text: " ",
        },
        {
            name: "Débora",
            image: "/assents/youngers/debora.svg",
            text: " ",
        },

    ]

    const swiperRef = useRef<SwiperClass | null>(null);

    const nextSlide = () => {
        swiperRef.current?.slideNext();
    };

    const prevSlide = () => {
        try {
            swiperRef.current?.slidePrev();
        } catch (error) {
            console.log('Error:', error);
        }
    };

    return (
        <div className="relative">
            <div className='flex flex-col text-center'>
                <h1 className='font-semibold mt-0 px-3 text-[1.925rem] md:text-[2.75rem] text-blue-custom'>Quebrando <br/> a Regra</h1>
                <aside className='w-full pb-20 pt-1 px-3 flex justify-between max-w-sm m-auto'>
                    <button onClick={prevSlide}>
                        <CaretLeft size={36} color="#1B2E3A" weight="bold" />
                    </button>

                    <button onClick={nextSlide}>
                        <CaretRight size={36} color="#1B2E3A" weight="bold" />
                    </button>
                </aside>
            </div>
            <Swiper
                spaceBetween={5}
                slidesPerView={1}
                allowTouchMove={false}
                onSwiper={(swi) => (swiperRef.current = swi)}
            >
                {CA1 &&
                    C1.map((pessoaAtual, id) => (
                        <SwiperSlide key={id}>
                            <article className='w-full flex flex-col gap-10'>
                                <h1 className='font-semibold text-[1.825rem] md:text-[2.12rem] text-[#1B2E3A] text-left px-3'>{pessoaAtual.name}</h1>

                                <div className="relative w-full flex max-xg:justify-center" style={{ paddingBottom: "56.45%" }}>
                                    <iframe className="absolute w-full h-full max-w-4xl max-h-[495px]"
                                        src="https://www.youtube.com/embed/gDuDfB2ir0M"
                                        title="Gustavo Cerbasi - Quebrando a Regra - Ep. 2"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen>
                                    </iframe>
                                </div>
                               

                                <h1 className='px-3 text-left font-semibold text-[1.525rem] md:text-[1.775rem] text-blue-custom'>Artigo</h1>
                                <aside className='overflow-y-auto max-h-52 px-3'>
                                    <p className='text-left'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint  ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint  ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint  ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint  ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </aside>
                            </article>
                        </SwiperSlide>
                    ))}
            </Swiper>


        </div>
    );
}

