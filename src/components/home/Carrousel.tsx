'use client'
import { CardRoot } from '@/components/home/Card/CardRoot'
import Image from 'next/image'
import { Button } from "../UI/Button"
import { ProfileIcon } from '@/components/UI/ProfileIcon'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

interface CarrouselProps {
    CA1?: boolean
    CA2?: boolean
    CA3?: boolean
    CA4?: boolean
    Custom?: string
}


export default function Carrousel({ CA1 = false, CA2 = false, CA3 = false, CA4 = false, Custom = "bg-green-custom bg-wavegreen bg-contain" }: CarrouselProps) {

    const C1 = [
        {
            name: "Francis",
            image: "/assents/youngers/francis.svg",
            text: "Nada disso seria possível sem a mentoria que eu tive e faço parte, só tenho a agradecer a todo mundo que colaborou. Só tenho a agradecer o DPFL porque se não fosse por ele, com certeza não teria a oportunidade de estar aqui, assistir uma palestra do Google e fazer parte do time da Sauter Brasil, empresa em que fui contratado.",
        },
        {
            name: "Camila",
            image: "/assents/youngers/camila.svg",
            text: "Eu sempre quis muito estudar e ter uma carreira, e esses sonhos foram ficando pra trás porque eu tive filhos muito cedo. Não sabia por onde começar, não sabia nem criar um Linkedin, me inscrevi no DPFL e consegui mentoria com a mentora mais fantástica que existe, iniciei cursos, organizei minha vida financeira e comecei a fazer brigadeiros como renda extra. Como o Thiago fala levam 9 gerações para mudar o padrão de uma família. E a gente vai quebrar essa regra.",
        },
        {
            name: "Rennan",
            image: "/assents/youngers/rennan.svg",
            text: "O DPFL está sendo uma benção como sempre foi na minha vida, recebi o retorno da faculdade que o DPFL me conectou e a melhor notícia foi ter 100% de bolsa, portanto não vou pagar nada. Estou muito feliz, só quem sabe da realidade de quem vive na periferia sabe que as condições não são as melhores. Desde já agradeço o Projeto Da Periferia para Faria Lima, no qual foi e está sendo uma ponte para o meu futuro ser melhor.",
        },
        {
            name: "Débora",
            image: "/assents/youngers/debora.svg",
            text: "Graças às orientações do meu mentor e ao DPFL consegui emprego na Cataventos - Distribuidoras de Livros. Tudo o que eu falei na entrevista, as pesquisas que fiz da empresa, como que comportei foi graças ao meu mentor, e só tive acesso porque a DPFL deu esse acesso pra mim. Eu só tenho a agradecer, porque Graças a Deus eu tive acesso a esses anjos.",
        },


    ]

    const C2 = [
        {
            name: "Francis",
            image: "/assents/youngers/francis.svg",
            text: "Nada disso seria possível sem a mentoria que eu tive e faço parte, só tenho a agradecer a todo mundo que colaborou. Só tenho a agradecer o DPFL porque se não fosse por ele, com certeza não teria a oportunidade de estar aqui, assistir uma palestra do Google e fazer parte do time da Sauter Brasil, empresa em que fui contratado.",
        },
        {
            name: "Camila",
            image: "/assents/youngers/camila.svg",
            text: "Eu sempre quis muito estudar e ter uma carreira, e esses sonhos foram ficando pra trás porque eu tive filhos muito cedo. Não sabia por onde começar, não sabia nem criar um Linkedin, me inscrevi no DPFL e consegui mentoria com a mentora mais fantástica que existe, iniciei cursos, organizei minha vida financeira e comecei a fazer brigadeiros como renda extra. Como o Thiago fala levam 9 gerações para mudar o padrão de uma família. E a gente vai quebrar essa regra.",
        },
        {
            name: "Rennan",
            image: "/assents/youngers/rennan.svg",
            text: "O DPFL está sendo uma benção como sempre foi na minha vida, recebi o retorno da faculdade que o DPFL me conectou e a melhor notícia foi ter 100% de bolsa, portanto não vou pagar nada. Estou muito feliz, só quem sabe da realidade de quem vive na periferia sabe que as condições não são as melhores. Desde já agradeço o Projeto Da Periferia para Faria Lima, no qual foi e está sendo uma ponte para o meu futuro ser melhor.",
        },
        {
            name: "Débora",
            image: "/assents/youngers/debora.svg",
            text: "Graças às orientações do meu mentor e ao DPFL consegui emprego na Cataventos - Distribuidoras de Livros. Tudo o que eu falei na entrevista, as pesquisas que fiz da empresa, como que comportei foi graças ao meu mentor, e só tive acesso porque a DPFL deu esse acesso pra mim. Eu só tenho a agradecer, porque Graças a Deus eu tive acesso a esses anjos.",
        },


    ]

    const C3 = [

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


    ]

    return (
        <>
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

                {/* bg-green-custom bg-wavegreen */}
                {CA1 && C1.map((pessoaAtual, id) => (
                    <SwiperSlide key={id}>
                        <div className='flex flex-col items-center w-full py-20'>
                            <picture>
                                <Image src={pessoaAtual.image} width={110} height={110} quality={100} alt={`Depoimento da ${pessoaAtual.name}`} style={{ borderRadius: 100 }} />
                            </picture>
                            <aside>
                                <p className='justify-self-center'>{pessoaAtual.text}</p>
                            </aside>
                            <h3>{pessoaAtual.name}</h3>
                        </div>
                    </SwiperSlide>
                ))}

                {CA2 && C2.map((pessoaAtual, id) => (
                    <SwiperSlide key={id}>
                        <div className='py-10 flex justify-center gap-8 md:flex-col'>
                            <div className={`text-justify shadow-lg ${Custom} bg-no-repeat bg-bottom px-3 py-5 rounded-3xl max-[375px]:w-[320px] max-[425px]:w-[375px] max-[500px]:w-[425px] max-[520px]:w-[500px] sl:w-full`}>
                                <div className='flex px-5 py-6 items-center justify-between'>
                                    <h1 className='text-white font-bold'>{pessoaAtual.name}</h1>
                                    <Image src={pessoaAtual.image} width={110} height={110} quality={100} alt={`Depoimento da ${pessoaAtual.name}`} style={{ borderRadius: 100 }} />
                                </div>
                                <p className='text-white'>{pessoaAtual.text}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                {CA3 && C3.map((pessoaAtual, id) => (
                    <SwiperSlide key={id}>
                        <figure className='flex items-center justify-center py-10'>
                            <div className='max-w-[15.625rem] h-full flex items-center justify-center'>
                                <Image src={pessoaAtual.image} alt={pessoaAtual.alt} width={250} height={140} />
                            </div>
                        </figure>
                    </SwiperSlide>
                ))}

                {CA4 &&
                    <>
                        <SwiperSlide>
                            <div className='flex justify-center py-12 px-3'>
                                <CardRoot HasFill='max-sm:max-w-[320px] max-w-[405px] max-md:h-[36.4375rem] flex flex-col justify-between' HasCape='green' Default>
                                    <div className='py-7 px-3 text-center'>
                                        <h1 className={`px-3 font-bold text-2xl max-w-xl text-green-custom`}>
                                            Mentor
                                        </h1>
                                        <p className="py-5 px-3 text-base max-w-4xl">
                                            Contribua com seu conhecimento e sua trajetória para o direcionamento e inspiração para os jovens. Seja parte da transformação.
                                        </p>
                                    </div>
                                    <div className='px-3 py-5'>
                                        <Link href={"https://daperiferiaparafarialima.org/?pagina=mentor"} target="_blink" className='font-bold'>
                                            <Button title='Quero ajudar' color="green" />
                                        </Link>
                                    </div>
                                </CardRoot>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='flex justify-center py-12 px-3'>
                                <CardRoot HasFill='max-sm:max-w-[320px] max-w-[405px] flex flex-col justify-between max-md:h-[36.4375rem]' HasCape='yellow' Default>
                                    <div className='py-7 px-3 text-center'>
                                        <h1 className={`px-3 font-bold text-2xl max-w-xl text-yellow-custom`}>
                                            Aluno
                                        </h1>
                                        <p className="py-5 px-3 ttext-base max-w-4xl">
                                            Construa uma carreira promissora! Aprenda com mentes brilhantes e pessoas incríveis, evolua suas habilidades. Venha crescer conosco!
                                        </p>
                                    </div>
                                    <div className='px-3 py-5'>
                                        <Link href={"https://daperiferiaparafarialima.org/?pagina=mentee"} target="_blink" className='font-bold'>
                                            <Button title='Quero ser aluno' color="yellow" />
                                        </Link>
                                    </div>
                                </CardRoot>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='flex justify-center py-12 px-3'>
                                <CardRoot HasFill='max-sm:max-w-[320px] max-w-[405px] flex flex-col justify-between max-md:h-[36.4375rem]' HasCape='blue' Default>
                                    <div className='py-7 px-3 text-center'>
                                        <h1 className={`px-3 font-bold text-2xl max-w-xl text-blue-custom`}>
                                            Parceiro
                                        </h1>
                                        <p className="py-5 px-3 text-base max-w-4xl">
                                            Apoie o DPFL financeira ou contribua na contratação dos nossos jovens. Possibilite novos futuro e faça parte dessa história!
                                        </p>
                                    </div>
                                    <div className='px-3 py-5'>
                                        <Link href={"https://daperiferiaparafarialima.org/?pagina=parceiro"} target="_blink" className='font-bold'>
                                            <Button title='Quero ser parceiro' color="blue" />
                                        </Link>
                                    </div>
                                </CardRoot>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='flex justify-center py-12 px-3'>
                                <CardRoot HasFill='max-sm:max-w-[320px] max-w-[405px] flex flex-col justify-between' HasCape='blue' Default>
                                    <div className='py-7 px-3 text-center'>
                                        <h1 className={`px-3 font-bold text-2xl max-w-xl text-blue-custom`}>
                                            Doador
                                        </h1>
                                        <p className="py-5 px-3 text-lg max-w-4xl">
                                            Contribua financeiramente para nossa missão através de doações pontuais e recorrentes. Venha fazer parte da nossa rede!
                                        </p>
                                    </div>
                                    <div className='px-3 py-5'>
                                        <Link href={"https://daperiferiaparafarialima.org/?pagina=parceiro"} target="_blink" className='font-bold'>
                                            <Button title='Quero doar' />
                                        </Link>
                                    </div>
                                </CardRoot>
                            </div>
                        </SwiperSlide>
                    </>}
            </Swiper>
        </>
    );
}