'use client'
import { Suspense } from "react"
 
 
import 'swiper/css';
import 'swiper/css/pagination';
 
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

export const Depoiments = () => {

    const depoiments = [
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
                pagination={{
                    clickable: true,
                }}
                autoplay={true}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper">
                

                {depoiments.map((depoiment, index) => (
                    <SwiperSlide key={index}>
                        <article className="flex flex-col items-center justify-center px-3 pb-8 m-auto">
                            <figure className="py-6 px-5  bg-slate-200 max-w-3xl rounded-xl ">
                                <p className="text-lg">{depoiment.text}</p>
                            </figure>
                            <article className="flex gap-2 items-center self-start pl-5 st:pl-36 lg:pl-40 xl:pl-20">
                                <aside className="flex flex-col items-center gap-3 ">
                                    <figure className="relative w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[25px] border-t-slate-200" />
                                    <picture className="self-start w-[80px] h-[80px] rounded-full bg-slate-200">
                                        <Suspense fallback={<picture className="w-full h-full animate-pulse bg-slate-200" />}>
                                            <Image src={depoiment.image} alt={"Foto de um aluno(a) do DPFL"} width={80} height={80} className="rounded-full" />
                                        </Suspense>
                                    </picture>
                                </aside>
                                <div className="flex flex-col self-end pb-4">
                                    <h5 className="font-bold">{depoiment.name}</h5>
                                    <p>Aluno(a) do DPFL</p>
                                </div>
                            </article>
                        </article>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}

{/* <SwiperSlide key={index}>
                        <article className="flex flex-col items-center justify-center px-3">
                            <figure className="py-6 px-5 max-xl:w-full bg-slate-200 max-xl:max-w-3xl xl:max-w-[150rem] rounded-xl ">
                                <p className="text-lg">Eu sempre quis muito estudar e ter uma carreira, e esses sonhos foram ficando pra trás porque eu tive filhos muito cedo. Não sabia por onde começar, não sabia nem criar um Linkedin, me inscrevi no DPFL e consegui mentoria com a mentora mais fantástica que existe, iniciei cursos, organizei minha vida financeira e comecei a fazer brigadeiros como renda extra. Como o Thiago fala levam 9 gerações para mudar o padrão de uma família. E a gente vai quebrar essa regra.</p>
                            </figure>
                            <article className="flex gap-2 items-center self-start pl-5 st:pl-36 lg:pl-40 xl:pl-20">
                                <aside className="flex flex-col items-center gap-3 ">
                                    <figure className="relative w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[25px] border-t-slate-200" />
                                    <picture className="self-start min-w-[80px] min-h-[80px] rounded-full bg-slate-200">
                                        <Suspense fallback={<picture className="w-full h-full animate-pulse bg-slate-200" />}>
                                            <Image src={"/assents/youngers/camila.svg"} alt={"Foto da aluna Camila"} width={80} height={80} className="rounded-full" />
                                        </Suspense>
                                    </picture>
                                </aside>
                                <div className="flex flex-col self-end pb-4">
                                    <h5 className="font-bold">Camilla Silva</h5>
                                    <p>Aluno(a) do DPFL</p>
                                </div>
                            </article>
                        </article>
                    </SwiperSlide> */}