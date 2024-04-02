
import Image from "next/image"
import { Cardsummit } from "@/app/(public)/eventos/2023/summit/_components/Cardsummit";
import { Suspense } from "react";
import { Skeleton } from "@/components/suspense/Skeleton";
import { Button } from "@/components/UI/Button";
import { InfiniteSlider } from "@/components/global-components/InfiniteSlider";
import Link from "next/link";


export default function Summit() {
    return (

        <>
            <main className="relative max-lg:h-screen flex items-center justify-center text-white">
                <picture className="z-0 h-full w-full absolute bg-eventos bg-center bg-cover brightness-50" />
                <aside className='z-10 text-center px-3 flex flex-col sl:items-center py-60'>
                    <div className="flex flex-col items-center gap-3">
                        <Image src="/assents/logos/summit.svg" alt="Logo do DPFL Summit" width={156} height={161} priority />
                        <p className='text-xl py-2 lg:py-6 lg:text-4xl max-w-[864px]'>Uma jornada de transformação pessoal e profissional de jovens da periferia</p>
                        <Link href={"#video"} className="max-w-xl">
                            <Button title="Confira como foi o evento!" Custom="font-bold" color="blue" />
                        </Link>
                    </div>
                </aside>
            </main >



            <section className='max-lg:px-3 lg:py-40 py-14 flex flex-col m-auto sl:max-w-md min-[660px]:max-w-[575px] md:max-w-2xl min-[992px]:max-w-[940px] xg:max-w-[1050px] min-[1200px]:max-w-6xl min-[1380px]:max-w-7xl'>
                <aside className='w-full flex flex-col lg:flex-row lg:justify-between lg:px-0 lg:gap-8 lg:items-center' >
                    <div className='flex flex-col max-w-2xl m-auto'>
                        <h2 className='px-3 text-3xl text-green-custom font-semibold'>Sobre o evento</h2>
                        <p className='py-5 text-lg lg:text-left px-3'>
                            Muito mais do que um evento, DPFL Summit será uma oportunidade para se conectar com profissionais experientes e adquirir conhecimento. <span className="text-green-custom font-semibold"> Um dia repleto de palestras inspiradoras, conexões valiosas e oportunidades únicas.</span> Você jovem, prepare-se para impulsionar sua carreira, conectar-se com mentores incríveis e mergulhar na cultura da inovação.
                        </p>
                        <p className='text-lg px-3 text-left'>
                            O evento contará com uma variedade de atividades, incluindo painéis de discussão esclarecedores, palestras inspiradoras, workshops interativos e oportunidades de networking. Palestrantes renomados, artistas, líderes comunitários distinguidos e especialistas reconhecidos compartilharão suas experiências e conhecimentos, iluminando tópicos críticos de como Quebrar a Regra da Pobreza.</p>
                    </div>
                    <Suspense fallback={<Skeleton />}>
                        <Image src="/assents/images/graybanner.svg" alt="DPFL Summit" width={466} height={506} quality={100} className='max-lg:pt-20 px-3 m-auto h-full' loading="lazy" />
                    </Suspense >
                </aside>
            </section>


            <section className="pt-14 m-auto sl:max-w-md min-[660px]:max-w-[575px] md:max-w-2xl min-[992px]:max-w-[940px] xg:max-w-[1050px] min-[1200px]:max-w-6xl min-[1380px]:max-w-7xl scroll-m-10" id="video">
                <h2 className='px-3 text-3xl lg:text-4xl text-green-custom font-semibold text-center'>Confira como foi o evento</h2>
                <aside className="pt-10 pb-40 px-3">
                    <Suspense fallback={<Skeleton type="video" />}>
                        <video className="w-full max-w-5xl m-auto rounded-2xl border-[1px] border-solid border-green-700" controls >
                            <source src="/assents/summit/2023.mp4" type="video/mp4" />
                        </video>
                    </Suspense>
                </aside>
            </section>


            <section className="md:max-w-2xl min-[992px]:max-w-[940px] xg:max-w-[1050px] min-[1200px]:max-w-6xl min-[1380px]:max-w-7xl m-auto flex flex-col justify-center gap-10 xl:gap-32 lg:flex-row">
                <aside className="max-st:max-w-2xl st:m-auto ">
                    <h2 className='px-3 text-3xl text-green-custom font-semibold'>Palestrantes inspiradores</h2>
                    <p className='py-5 text-lg lg:text-left px-3'>
                        Palestras inesquecíveis, inspiradoras, cantivantes! Foi esse o sentimento que os participantes do DPFL Summit 2023 tiveram ao fim do evento. Mais de 15 palestras em diversas áreas como carreira tech, educação, diversidade, trajetória e inspiração! A cada palestra, um novo aprendizado, uma maior motivação e inúmeros caminhos que se formam pelos jovens que se inspiram em nossos palestrantes, motivados ao mudar a realidade do jovens periférico brasileiro, alinhados com o propósito do DPFL.
                    </p>
                </aside>

                <Suspense fallback={<Skeleton />}>
                    <Image src={"/assents/images/crowd.svg"} alt="" width={540} height={423} className="max-lg:py-5 px-3 max-lg:m-auto" />
                </Suspense>

            </section>

            <section className="md:max-w-2xl min-[992px]:max-w-[940px] xg:max-w-[1050px] min-[1200px]:max-w-6xl min-[1380px]:max-w-7xl m-auto flex flex-col-reverse justify-center gap-10 xl:gap-32 max-lg:pt-10 lg:flex-row lg:pt-20">
                <Suspense fallback={<Skeleton />}>
                    <Image src={"/assents/images/onugirls.svg"} alt="" width={540} height={423} className="max-lg:py-5 px-3 max-lg:m-auto" />
                </Suspense>
                <aside className="max-st:max-w-2xl st:m-auto">
                    <h2 className='px-3 text-3xl text-green-custom font-semibold'>Jovens impactados</h2>
                    <p className='py-5 text-lg lg:text-left px-3'>
                        Foram mais de 80 jovens participantes no Summit que tiveram uma experiência verdadeiramente única. Ao terem a oportunidade de ouvir trajetórias inspiradoras, desde campeões olímpicos até mestres em finanças, os jovens foram impactados e envolvidos por cada palestra. Essas experiências não apenas expandiram seus horizontes, mas também os motivaram profundamente.
                    </p>
                </aside>
            </section>

            <section className='py-28 m-auto sl:max-w-md sl:m-auto min-[660px]:max-w-[575px] md:max-w-2xl min-[992px]:max-w-[940px] xg:max-w-[1050px] min-[1200px]:max-w-6xl min-[1380px]:max-w-7xl'>
                <h2 className="text-green-custom text-center font-bold text-3xl pt-10 px-3">LINEUP DPFL SUMMIT 2023</h2>
                <p className="text-black-custom text-center py-3 text-lg px-3">Palestrantes renomados, artistas e líderes comunitários</p>
                <aside className="py-10 flex max-lg:overflow-x-scroll">
                    <picture className="flex max-lg:gap-10 lg:justify-evenly lg:w-full px-3 lg:flex-wrap lg:gap-8">
                        <Cardsummit />
                    </picture>
                </aside>
            </section>


            <section className='py-20'>
                <h2 className='font-semibold text-3xl text-center text-green-custom'>Apoiadores e patrocinadores do DPFL Summit</h2>
                <aside className="w-full px-3 py-10 lg:pb-5">
                    <InfiniteSlider />
                </aside>
            </section>
        </>

    )
}
