import Image from "next/image"
import { Cardsummit } from "@/components/events/summit2023/Cardsummit";
import { CalendarBlank } from "@/components/UI/icons/icons"
import Carrousel from "@/components/events/summit2023/Carrousel";
import { Partness } from "@/components/events/partness";
import { Suspense } from "react";
import { Skeleton } from "@/components/UI/suspense/Skeleton";
import { Button } from "@/components/UI/Button";
import Link from "next/link";
import { Timeline } from "@/components/events/main-page/Timeline";
import { PastEvents } from "@/components/events/main-page/PastEvents";
import { InfiniteSlider } from "@/components/UI/InfiniteSlider";

export default async function Eventos() {

  return (
    <>
      <main className="min-h-[100dvh] flex items-center lg:py-40 pb-10">
        <picture className="z-0 h-full w-full absolute bg-eventos bg-center bg-cover brightness-50" />
        <aside className="container text-white max-lg:m-auto w-full z-10 px-3 lg:px-8 max-w-2xl min-[992px]:max-w-3xl flex flex-col gap-2 md:py-10 xl:self-start lg:pt-40">
          <h1 className="px-3 text-2xl font-bold md:text-5xl">Jantar de lançamento da Nova Marca DPFL</h1>
          <h3 className="px-3 text-lg py-5 md:text-xl lg:text-2xl">29 de Fevereiro, 2024 - El Tranvia</h3>
          <Link className="w-full" href={"#calculo"}>
            <Button title={"Garanta seu ingresso"} color="green" Custom="max-w-xs py-2" />
          </Link>
        </aside>
      </main>


      <section className='max-lg:px-3 lg:py-40 py-14 flex flex-col m-auto container'>
        <aside className='w-full flex flex-col xl:flex-row lg:justify-between lg:px-0 lg:gap-8 lg:items-center' >
          <article className='flex flex-col max-w-2xl'>
            <h2 className='px-3 text-3xl text-black-custom font-bold'>Sobre o evento</h2>
            <p className='pt-5 text-lg px-3'>
              O Jantar DPFL1000 será um momento especial para reunir parceiros, apoiadores, mentores e convidados especiais para celebrar o lançamento da nova marca do DPFL, que irá traduzir com maior assertividade nosso propósito, e para apoiar a organização no atingimento de 1000 jovens impactos até o final de 2024.
            </p>
          </article>
          <Suspense fallback={<Skeleton />}>
            <Image src={'https://content-dpfl.s3.amazonaws.com/eltranvia.svg'} width={649} height={478} alt="Uma foto do restaurante eltravia" quality={100} loading="lazy" className='m-auto rounded-3xl' />
          </Suspense >
        </aside>
      </section>


      <section className="pt-14 m-auto container scroll-m-10" id="video">
        <h2 className='px-3 text-3xl lg:text-4xl text-black-custom font-bold text-center'>Agenda</h2>
        <aside className="pt-10 lg:pb-40 px-3">
          <Timeline />
        </aside>
      </section>

      <section className="container m-auto flex flex-col-reverse justify-center gap-10 xl:gap-32 max-lg:py-20 xl:flex-row xl:pt-20">
        <Suspense fallback={<Skeleton />}>
          <Image src={"https://content-dpfl.s3.amazonaws.com/people.svg"} alt="pessoas em uma confraternização" width={540} height={423} className='px-3 m-auto rounded-3xl' />
        </Suspense>
        <aside className="max-st:max-w-2xl max-xl:max-w-3xl st:m-auto">
          <h2 className='px-3 text-3xl text-black-custom font-bold'>Para quem é esse evento?</h2>
          <p className='py-5 text-lg lg:text-left px-3'>
            O evento é dedicado para pessoas  que acreditam na potências das juventudes para transformação do pais. Pessoas da nossa rede, como parceiros, apoiadores, mentores e alunos, convidados especiais e pessoas que queiram se aproximar e acreditam no nosso propósito serão muito bem-vindas.
          </p>
        </aside>
      </section>


      <section className="py-20 container m-auto flex flex-col justify-center gap-10 xl:gap-32 max-lg:pt-10 xl:flex-row xl:pt-20">
        <aside className="max-st:max-w-2xl max-xl:max-w-3xl st:m-auto">
          <h2 className='px-3 text-3xl text-black-custom font-bold'>Transforme vidas</h2>
          <p className='py-5 text-lg lg:text-left px-3'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <aside className="max-w-xs px-3">
            <Button title="Saiba mais" color="green" NotFill />
          </aside>
        </aside>
        <Suspense fallback={<Skeleton />}>
          <Image src={"https://content-dpfl.s3.amazonaws.com/people.svg"} alt="pessoas em uma confraternização" width={540} height={423} className='px-3 m-auto rounded-3xl' />
        </Suspense>
      </section>



      <section className="container m-auto flex flex-col-reverse justify-center gap-10 xl:gap-32 max-lg:pt-10 xl:flex-row xl:pt-20">
        <Suspense fallback={<Skeleton />}>
          <Image src={"https://content-dpfl.s3.amazonaws.com/ingresso.svg"} alt="pessoas em uma confraternização" width={540} height={423} className='px-3 m-auto rounded-3xl' />
        </Suspense>
        <aside className="max-st:max-w-2xl max-xl:max-w-3xl st:m-auto">
          <h2 className='px-3 text-3xl text-black-custom font-bold'>Garanta o seu ingresso</h2>
          <p className='py-5 text-lg lg:text-left px-3'>
            Tenha um experiência incrível de jantar e apoie financeiramente o DPFL para atingir 1000 jovens impactados em 2024.
            <br />
            <br />
            <span><strong>Valor:</strong> R$ 550,00</span>
          </p>
          <aside className="max-w-xs px-3">
            <Button title="Adquira o seu ingresso" color="green" />
          </aside>
        </aside>
      </section>

      <section className='py-28 m-auto sl:max-w-md sl:m-auto min-[660px]:max-w-[575px] md:max-w-2xl min-[992px]:max-w-[940px] xg:max-w-[1050px] min-[1200px]:max-w-6xl min-[1380px]:max-w-7xl'>
        <hr className="w-full bg-gray-500 h-[2px] px-5" />
        <h2 className="text-black-custom text-center font-bold text-3xl pt-10 px-3">Confira eventos passados</h2>

        <aside className="py-10 flex max-lg:overflow-x-scroll">
          <PastEvents altImage="Summit 2023" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do" title="Summit 2023" srcImage="https://content-dpfl.s3.amazonaws.com/summit2023.svg" />
        </aside>
      </section>


      <section className='py-20 container m-auto'>
        <h2 className='font-semibold text-3xl text-center text-green-custom pb-20'>Apoiadores e patrocinadores do DPFL Summit</h2>
      
      </section>
      <aside className="border-t-green-custom border-b-green-custom border-t-[1px] border-b-[1px] w-full px-3 py-10">
          <InfiniteSlider />
        </aside>
    </>
  )
}
