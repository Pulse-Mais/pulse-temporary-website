import Image from "next/image"
import { Suspense } from "react";
import { Skeleton } from "@/components/suspense/Skeleton";
import { Button } from "@/components/UI/Button";
import Link from "next/link";
import { Timeline } from "@/app/(public)/eventos/_components/Timeline";
import { PastEvents } from "@/app/(public)/eventos/_components/PastEvents";
import { InfiniteSlider } from "@/components/global-components/InfiniteSlider";
import { Depoiments } from "@/components/global-components/Depoiments";

export default async function Eventos() {

  return (
    <>
      <main className="min-h-[100dvh] flex items-center pb-10">
        <picture className="z-0 h-full w-full absolute bg-eventos bg-center bg-cover brightness-50" />
        <aside className="container text-white m-auto z-10 px-3 lg:px-8 flex flex-col gap-2 md:py-10 lg:pt-40">
          <h1 className="px-3 text-3xl font-bold md:text-5xl text-center max-w-4xl m-auto">Rumo a 1000: Jantar para transformação</h1>
          <h3 className="px-3 text-lg py-5 md:text-xl lg:text-2xl text-center">29 de Fevereiro, 2024 - El Tranvia</h3>
          <Link className="w-full flex items-center justify-center" href={"#video"}>
            <Button title={"Seja parte do impacto"} color="green" Custom="max-w-xs py-2" />
          </Link>
        </aside>
      </main>

      <section className='px-3 md:px-5 pb-8 pt-14 flex flex-col m-auto container'>
        <aside className='w-full flex flex-col xl:flex-row xl:justify-between xl:px-0 xl:items-center xl:gap-32' >
          <article className='flex flex-col max-w-2xl md:max-w-3xl lg:max-w-5xl'>
            <h2 className='px-3 text-3xl text-black-custom font-semibold lg:font-bold'>Sobre o evento</h2>
            <p className='text-lg px-3 pb-2 pt-5 text-black-custom'>
              Será um momento especial para reunir parceiros, apoiadores, mentores e convidados especiais para celebrar o <strong>lançamento da nova marca do DPFL</strong>, que irá traduzir com maior assertividade nosso propósito, e para apoiar a organização no atingimento de <strong>1000 jovens impactos até o final de 2024</strong>.
            </p>

            <p className='text-lg px-3 pb-8 pt-3 text-black-custom'>A noite do jantar contará com um excelente menu de <strong>comida uruguaia</strong>, que irá potencializar a experiência de conexão e aprofundamento com o impacto que geramos para nossos convidados. No decorrer do evento, entre apresentações e conversas, também teremos um painel com <strong>convidados renomados</strong>.</p>
          </article>
          <Suspense fallback={<Skeleton />}>
            <Image src={'/assents/rebrandevent/eltranvia.svg'} width={549} height={378} alt="Uma foto do restaurante eltravia" quality={100} loading="lazy" className='m-auto rounded-3xl' />
          </Suspense >
        </aside>
      </section>

      <section className="pt-14 m-auto container scroll-m-10" id="video">
        <h2 className='px-3 text-3xl lg:text-4xl text-black-custom font-semibold text-center'>Você é nosso convidado!</h2>
        <aside className="py-10 px-3">
          <Suspense fallback={<Skeleton type="video" />}>
            <video className="w-full max-w-5xl m-auto rounded-2xl border-[1px] border-solid border-green-700" controls >
              <source src="/assents/summit/jantar.mp4" type="video/mp4" />
            </video>
          </Suspense>
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
          <Image src={"/assents/rebrandevent/people.svg"} alt="pessoas em uma confraternização" width={549} height={378} className='px-3 m-auto rounded-3xl' />
        </Suspense>
        <aside className="max-md:max-w-2xl md:max-w-3xl st:m-auto st:max-w-5xl">
          <h2 className='px-3 text-3xl text-black-custom font-semibold lg:font-bold'>Para quem é esse evento?</h2>
          <p className='pb-8 pt-5 text-lg lg:text-left px-3 text-black-custom'>
            O evento é dedicado para pessoas  que acreditam na potências das juventudes para transformação do pais. Pessoas da nossa rede, como parceiros, apoiadores, mentores e alunos, convidados especiais e pessoas que queiram se aproximar e acreditam no nosso propósito serão muito bem-vindas.
          </p>
        </aside>
      </section>


      <section className="md:px-5 py-10 container m-auto flex flex-col justify-center gap-10 xl:gap-14 xl:flex-row xl:pt-20 xl:items-center">
        <aside className="max-st:max-w-2xl st:max-w-5xl st:m-auto xl:self-start">
          <h2 className='px-3 text-3xl text-black-custom font-semibold lg:font-bold'>Transforme vidas</h2>
          <p className='py-5 text-lg lg:text-left px-3 text-black-custom'>
            O DPFL tem o propósito de empoderar jovens em situação de vulnerabilidade econômica, proporcionando o desenvolvimento de habilidades técnicas e socioemocionais e elevando seu potencial para que possam ingressar no mercado de trabalho.


          </p>

          <p className='pb-5 pt-3 text-lg lg:text-left px-3 text-black-custom'>
            Foram mais de <strong>300 jovens impactados</strong>, com <strong>80% de empregabilidade</strong>, e temos hoje a meta de atingir <strong>1000 até o final de 2024</strong>. Tudo isso com apoio de mais de 10 parceiros, 200 mentores seniores e voluntários e muita garra.
          </p>
          <Link href={"/"}>
            <aside className="px-3 max-w-xs max-md:m-auto">
              <Button title="Saiba mais" color="green" NotFill />
            </aside>
          </Link>
        </aside>
        <figure className="py-5 w-full max-w-3xl m-auto">
          <Depoiments />
        </figure>
      </section>



      <section id="impacto" className="scroll-mt-20 md:px-5 container m-auto flex flex-col-reverse justify-center gap-10 xl:gap-32 xl:flex-row">
        <Suspense fallback={<Skeleton />}>
          <Image src={"/assents/rebrandevent/ingresso.svg"} alt="pessoas em uma confraternização" width={540} height={423} className='px-3 m-auto rounded-3xl' />
        </Suspense>
        <aside className="max-st:max-w-2xl max-xl:max-w-3xl st:m-auto scroll-mt-6">
          <h2 className='px-3 text-3xl text-black-custom font-semibold lg:font-bold'>Seja parte do impacto!</h2>
          <p className='py-5 text-lg lg:text-left px-3 text-black-custom'>
            Tenha um experiência incrível de jantar e apoie financeiramente o DPFL para atingir 1000 jovens impactados em 2024.
            <br />
            <br />
            <span className="text-black-custom"><strong>Valor:</strong> R$ 550,00</span>
          </p>
          <Link target="_blank" href={"https://www.sympla.com.br/rumo-a-1000-jantar-de-transformacao__2274133"}>
            <aside className="px-3 max-w-xs max-md:m-auto">
              <Button title="Seja parte do impacto" color="green" />
            </aside>
          </Link>
        </aside>
      </section>

      <section className='px-3 md:px-5 pt-24 pb-10 m-auto container'>
        <hr className="w-full bg-gray-500 h-[2px] px-5" />
        <h2 className="text-black-custom text-center font-semibold lg:font-bold text-3xl pt-10 px-3">Confira eventos passados</h2>
        <aside className="py-10 flex max-lg:overflow-x-scroll">
          <PastEvents href="/eventos/2023/summit" altImage="Summit 2023" description="Uma jornada de transformação pessoal e profissional de jovens da periferia" title="Summit 2023" srcImage="/assents/rebrandevent/summit2023.svg" />
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
