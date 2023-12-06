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
import { Depoiments } from "@/components/UI/Depoiments";

export default async function Eventos() {

  return (
    <>
      <main className="min-h-[100dvh] flex items-center lg:py-40 pb-10">
        <picture className="z-0 h-full w-full absolute bg-eventos bg-center bg-cover brightness-50" />
        <aside className="container text-white m-auto z-10 px-3 lg:px-8 flex flex-col gap-2 md:py-10 xl:self-start lg:pt-40">
          <h1 className="px-3 text-2xl font-bold md:text-5xl text-center max-w-4xl m-auto">Jantar de lançamento da Nova Marca DPFL</h1>
          <h3 className="px-3 text-lg py-5 md:text-xl lg:text-2xl text-center">29 de Fevereiro, 2024 - El Tranvia</h3>
          <Link className="w-full flex items-center justify-center" href={"#calculo"}>
            <Button title={"Garanta seu ingresso"} color="green" Custom="max-w-xs py-2" />
          </Link>
        </aside>
      </main>


      <section className='px-3 md:px-5 pb-8 pt-14 flex flex-col m-auto container'>
        <aside className='w-full flex flex-col xl:flex-row xl:justify-between xl:px-0 xl:items-center xl:gap-32' >
          <article className='flex flex-col max-w-2xl md:max-w-3xl lg:max-w-5xl'>
            <h2 className='px-3 text-3xl text-black-custom font-semibold lg:font-bold'>Sobre o evento</h2>
            <p className='text-lg px-3 pb-8 pt-5 text-black-custom'>
              O Jantar DPFL1000 será um momento especial para reunir parceiros, apoiadores, mentores e convidados especiais para celebrar o lançamento da nova marca do DPFL, que irá traduzir com maior assertividade nosso propósito, e para apoiar a organização no atingimento de 1000 jovens impactos até o final de 2024.
            </p>
          </article>
          <Suspense fallback={<Skeleton />}>
            <Image src={'https://content-dpfl.s3.amazonaws.com/eltranvia.svg'} width={549} height={378} alt="Uma foto do restaurante eltravia" quality={100} loading="lazy" className='m-auto rounded-3xl' />
          </Suspense >
        </aside>
      </section>


      {/* <section className="md:px-5 pt-10 m-auto container scroll-m-10" id="video">
        <h2 className='px-3 text-3xl lg:text-4xl text-black-custom font-bold text-center'>Agenda</h2>
        <aside className="pt-10 lg:pb-20 px-3">
          <Timeline />
        </aside>
      </section> */}

      <section className="md:px-5 py-10 container m-auto flex flex-col-reverse justify-center xl:gap-32 xl:flex-row">
        <Suspense fallback={<Skeleton />}>
          <Image src={"https://content-dpfl.s3.amazonaws.com/people.svg"} alt="pessoas em uma confraternização"  width={549} height={378} className='px-3 m-auto rounded-3xl' />
        </Suspense>
        <aside className="max-md:max-w-2xl md:max-w-3xl st:m-auto st:max-w-5xl">
          <h2 className='px-3 text-3xl text-black-custom font-semibold lg:font-bold'>Para quem é esse evento?</h2>
          <p className='pb-8 pt-5 text-lg lg:text-left px-3 text-black-custom'>
            O evento é dedicado para pessoas  que acreditam na potências das juventudes para transformação do pais. Pessoas da nossa rede, como parceiros, apoiadores, mentores e alunos, convidados especiais e pessoas que queiram se aproximar e acreditam no nosso propósito serão muito bem-vindas.
          </p>
        </aside>
      </section>


      <section className="md:px-5 py-10 container m-auto flex flex-col justify-center gap-10 xl:gap-14 xl:flex-row xl:pt-20 xl:items-center">
        <aside className="max-st:max-w-2xl st:max-w-5xl st:m-auto">
          <h2 className='px-3 text-3xl text-black-custom font-semibold lg:font-bold'>Transforme vidas</h2>
          <p className='py-5 text-lg lg:text-left px-3 text-black-custom'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <aside className="max-w-xs px-3 max-lg:m-auto">
            <Button title="Saiba mais" color="green" NotFill />
          </aside>
        </aside>
        <figure className="py-5 w-full max-w-3xl max-xl:m-auto">
          <Depoiments />
        </figure>
      </section>



      <section className="md:px-5 container m-auto flex flex-col-reverse justify-center gap-10 xl:gap-32 xl:flex-row">
        <Suspense fallback={<Skeleton />}>
          <Image src={"https://content-dpfl.s3.amazonaws.com/ingresso.svg"} alt="pessoas em uma confraternização" width={540} height={423} className='px-3 m-auto rounded-3xl' />
        </Suspense>
        <aside className="max-st:max-w-2xl max-xl:max-w-3xl st:m-auto">
          <h2 className='px-3 text-3xl text-black-custom font-semibold lg:font-bold'>Seja parte do impacto!</h2>
          <p className='py-5 text-lg lg:text-left px-3 text-black-custom'>
            Tenha um experiência incrível de jantar e apoie financeiramente o DPFL para atingir 1000 jovens impactados em 2024.
            <br />
            <br />
            <span className="text-black-custom"><strong>Valor:</strong> R$ 550,00</span>
          </p>
          <aside className="max-w-xs px-3 max-lg:m-auto">
            <Button title="Adquira o seu ingresso" color="green" />
          </aside>
        </aside>
      </section>

      <section className='px-3 md:px-5 pt-24 pb-10 m-auto container'>
        <hr className="w-full bg-gray-500 h-[2px] px-5" />
        <h2 className="text-black-custom text-center font-semibold lg:font-bold text-3xl pt-10 px-3">Confira eventos passados</h2>
        <aside className="py-10 flex max-lg:overflow-x-scroll">
          <PastEvents altImage="Summit 2023" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do" title="Summit 2023" srcImage="https://content-dpfl.s3.amazonaws.com/summit2023.svg" />
        </aside>
      </section>


      <section className='pb-10 container m-auto'>
        <h2 className='text-black-custom font-semibold lg:font-bold text-2xl md:text-3xl pt-10 px-3 text-center'>Apoiadores e patrocinadores</h2>
        <aside className="w-full px-3 py-10 lg:pb-5">
          <InfiniteSlider />
        </aside>
      </section>

    </>
  )
}
