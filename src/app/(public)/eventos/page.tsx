

import Image from "next/image"
import { CardRoot } from "@/components/home/Card/CardRoot";
import { Cardsummit } from "@/components/events/Cardsummit";
import { UsersThree, CalendarBlank, PresentationChart, ChalkboardTeacher, FlagPennant, GraduationCap } from "@/components/UI/icons/icons"
import { Button } from "@/components/UI/Button";
import Carrousel from "@/components/events/Carrousel";
import { Partness } from "@/components/events/partness";


export default function Eventos() {

  return (
    <>
      <main className="relative max-lg:h-screen flex items-center justify-center text-white">
       <picture className="z-0 h-full w-full absolute bg-eventos bg-center bg-cover brightness-50"/>
        <aside className='z-10 text-center px-3 flex flex-col sl:items-center py-60'>
          <div className="flex flex-col items-center gap-3">
            <Image src="/assents/logos/summit.svg" alt="Logo do DPFL Summit" width={156} height={161} />
            <p className='text-xl py-2 lg:py-6 lg:text-4xl max-w-[864px]'>Uma jornada de transformação acadêmica e profissional de jovens da periferia</p>
            <button className="rounded-full flex flex-col items-center bg-blue-custom md:py-5 md:px-8 py-4 px-4">
              <CalendarBlank size={26} color="#fcfcfc" weight="fill" />
              <p className="font-semibold text-center py-1">27 de setembro de 2023</p>
              <p className="font-semibold text-center py-1 px-1">EVENTO GRATUITO | VAGAS LIMITADAS</p>
            </button>
          </div>
        </aside>
      </main>


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
          <Image src="/assents/images/graybanner.svg" alt="DPFL Summit" width={466} height={506} quality={100} className='max-lg:pt-20 px-3 m-auto' />
        </aside>
      </section>


      <section className="pt-14 m-auto sl:max-w-md min-[660px]:max-w-[575px] md:max-w-2xl min-[992px]:max-w-[940px] xg:max-w-[1050px] min-[1200px]:max-w-6xl min-[1380px]:max-w-7xl">
        <h2 className='px-3 text-3xl lg:text-4xl text-green-custom font-semibold text-center'>Confira como foi o evento</h2>
        

        
        <aside className="flex py-10 gap-10 max-lg:hidden px-3">

          {/* <CardRoot HasFill='max-sm:max-w-[320px] max-w-[405px] flex flex-col justify-between' HasCape='yellow' icon={UsersThree}>
            <div className='py-7 px-3 text-center'>
              <h4 className={`px-3 font-bold text-2xl max-w-xl text-yellow-custom`}>
                Jovens periféricos
              </h4>
              <p className="py-5 px-3 text-lg   max-w-4xl">
                Queremos oferecer a você oportunidades únicas de crescimento e desenvolvimento. Junte-se a nós e descubra como você pode conquistar seus objetivos e superar as barreiras que encontrou no caminho.
              </p>
            </div>
          </CardRoot>

          <CardRoot HasFill='max-sm:max-w-[320px] max-w-[405px] flex flex-col justify-between' HasCape='green' icon={UsersThree}>
            <div className='py-7 px-3 text-center'>
              <h4 className={`px-3 font-bold text-2xl max-w-xl text-green-custom`}>
                Mentores
              </h4>
              <p className="py-5 px-3 text-lg  max-w-4xl">
                Você é um mentor de negócios em busca de oportunidades para compartilhar seu conhecimento e experiência? Compartilhe suas histórias, forneça conselhos e ajude a moldar a próxima geração de líderes de negócios
              </p>
            </div>
          </CardRoot> */}

{/* 
          <CardRoot HasFill='max-sm:max-w-[320px] max-w-[405px] flex flex-col justify-between' HasCape='blue' icon={UsersThree}>
            <div className='py-7 px-3 text-center'>
              <h4 className={`px-3 font-bold text-2xl max-w-xl text-blue-custom`}>
                Empresários
              </h4>
              <p className="py-5 px-3 text-lg  max-w-4xl">
                Você terá a oportunidade de conhecer nosso projeto impactante e que precisa de apoio e se conecte diretamente com representantes. Venha descobrir como seu investimento pode transformar vidas e comunidades inteiras.
              </p>
            </div>
          </CardRoot> */}



        </aside>
        <aside className="m-auto w-[410px] max-[375px]:max-w-[320px] max-[425px]:w-[375px] lg:hidden">
          <Carrousel CA1 />
        </aside>
      </section>

      <section className='py-28 m-auto sl:max-w-md sl:m-auto min-[660px]:max-w-[575px] md:max-w-2xl min-[992px]:max-w-[940px] xg:max-w-[1050px] min-[1200px]:max-w-6xl min-[1380px]:max-w-7xl'>
        <h2 className="text-green-custom text-center font-bold text-3xl">LINEUP DPFL <br/>SUMMIT 2023</h2>
        <p className="text-black-custom text-center py-3 text-lg px-3">Palestrantes renomados, artistas e líderes comunitários</p>

        <aside className="py-10 gap-10 flex justify-between flex-wrap w-full">
          <Cardsummit />
        </aside>
      </section>

      <section className="py-10 w-full bg-blue-custom bg-smallwaveblue bg-no-repeat bg-cover bg-bottom">

        <aside className=" m-auto sl:max-w-md min-[660px]:max-w-[575px] md:max-w-2xl min-[992px]:max-w-[940px] xg:max-w-[1050px] min-[1200px]:max-w-6xl min-[1380px]:max-w-7xl">

          <h2 className="text-white font-semibold text-3xl pb-14 text-center">Veja tudo que você terá acesso</h2>
          <ul className="px-3 flex flex-col lg:flex-row gap-8 text-white">
            <div className="flex flex-col gap-8">
              <li className="flex gap-1 items-center">
                <PresentationChart size={100} weight="fill" />
                <div>
                  <h3 className="font-bold text-xl px-3">Painéis de discussão</h3>
                  <p className="text-base px-3 max-w-[570px]">Debates envolventes liderados por especialistas nas áreas de finanças, RH e Tecnologia.</p>
                </div>
              </li>

              <li className="flex gap-1 items-center">
                <ChalkboardTeacher size={100} weight="fill" />
                <div>
                  <h3 className="font-bold text-xl px-3">Palestras inspiradoras</h3>
                  <p className="text-base px-3 max-w-[570px]">Personalidades que fizeram contribuições significativas para a sociedade.</p>
                </div>
              </li>

              <li className="flex gap-1 items-center">
                <FlagPennant size={100} weight="fill" />
                <div>
                  <h3 className="font-bold text-xl px-3">Workshops</h3>
                  <p className="text-base px-3 max-w-[570px]">Sessões interativas projetadas para impulsionar seu crescimento pessoal e profissional.</p>
                </div>
              </li>
            </div>

            <div className="flex flex-col gap-8">
              <li className="flex gap-1 items-center">
                <UsersThree size={135} weight="fill" className="self-start" />
                <div>
                  <h3 className="font-bold text-xl px-3">Lançamento do Educação Skills</h3>
                  <p className="text-base px-3 max-w-[570px]">Amplas chances para os participantes se conectarem com indivíduos com ideias semelhantes, potenciais colaboradores e representantes de organizações que compartilham objetivos similares.</p>
                </div>
              </li>


              <li className="flex gap-1 items-center">
                <GraduationCap size={100} weight="fill" />
                <div>
                  <h3 className="font-bold text-xl px-3">Lançamento do Educação Skills</h3>
                  <p className="text-base  max-w-[570px] px-3">Programa de aceleração de desenvolvimento.</p>
                </div>
              </li>
            </div>
          </ul>

        </aside>
      </section>

      <section className='py-20'>
        <h2 className='font-semibold text-3xl text-center text-green-custom'>Apoiadores e patrocinadores do DPFL Summit</h2>
        <div className='flex flex-wrap gap-10 items-center justify-center max-lg:hidden min-[992px]:max-w-[940px] xg:max-w-[1050px] lg:flex-row min-[1200px]:max-w-6xl min-[1380px]:max-w-7xl m-auto'>
          <Partness  />
        </div>
        <div className='flex max-w-[15.625rem] w-full lg:hidden m-auto' >
          <Carrousel CA2 />
        </div>
      </section>
    </>
  )
}






















{/* <div className="hover:skew-y-[8deg]">
          <div className="relative skew-y-[-10deg] w-[300px] bg-black  px-3 text-white before:absolute before:w-full before:bg-blue-custom before:h-4 before:z-20 before:left-[-7px] before:top-[-0.90rem] before:skew-x-[45deg] after:absolute after:w-[15px] after:h-full after:bg-blue-custom after:left-[-15px] after:top-[-7px] after:skew-y-[45deg] hover:translate-y-[-40px] transition-all">
            <Image src={"/assents/youngers/chefe.jpg"} alt="teste" fill quality={100} className="hover:opacity-0 transition-all" />
            <p className='text-[1.25rem]'>
              O evento contará com uma variedade de atividades, incluindo painéis de discussão esclarecedores, palestras inspiradoras, workshops interativos e oportunidades de networking. Palestrantes renomados, artistas, líderes comunitários distinguidos e especialistas reconhecidos compartilharão suas experiências e conhecimentos, iluminando tópicos críticos de como Quebra a Regra da Pobreza.</p>
          </div>
        </div> */}

// CARDS EM 3D:

// <CardRoot HasFill='max-sm:max-w-[320px] max-w-[405px] flex flex-col justify-between rounded-none skew-y-[-5deg] relative
// before:w-full before:h-[15px] before:bg-green-600 before:bg-greencape before:bg-cover before:skew-x-[45deg] before:absolute before:top-[-15px] before:left-[-8px]
// after:h-full after:w-[15px] after:bg-black after:absolute after:left-[-15px] after:skew-y-[45deg] after:top-[-7px] after:bg-green-600
// '


// HasCape='green'>
// <div className='py-7 px-3 text-center'>
// <h1 className={`px-3 font-bold text-2xl max-w-xl text-green-custom`}>
// Mentor
// </h1>
// <p className="py-5 px-3 text-lg px-3 max-w-4xl">
// Contribua com seu conhecimento e sua trajetória para o direcionamento e inspiração para os jovens. Seja parte da transformação.
// </p>
// </div>
// <div className='px-3 py-5'>
// <Link href={"https://daperiferiaparafarialima.org/?pagina=mentor"} target="_blink" className='font-bold'>
// <Button title='Quero ajudar' color="green" />
// </Link>
// </div>
// </CardRoot>


// <CardRoot HasFill='max-sm:max-w-[320px] max-w-[405px] flex flex-col justify-between rounded-none relative -translate-y-10

// '


// HasCape='yellow'>
// <div className='py-7 px-3 text-center'>
// <h1 className={`px-3 font-bold text-2xl max-w-xl text-yellow-custom`}>
// Mentor
// </h1>
// <p className="py-5 px-3 text-lg px-3 max-w-4xl">
// Contribua com seu conhecimento e sua trajetória para o direcionamento e inspiração para os jovens. Seja parte da transformação.
// </p>
// </div>
// <div className='px-3 py-5'>
// <Link href={"https://daperiferiaparafarialima.org/?pagina=mentor"} target="_blink" className='font-bold'>
// <Button title='Quero ajudar' color="yellow" />
// </Link>
// </div>
// </CardRoot>

// <CardRoot HasFill='max-sm:max-w-[320px] max-w-[405px] flex flex-col justify-between rounded-none skew-y-[5deg] relative
// before:w-full before:h-[15px] before:bg-[#004DBC] before:bg-bluecape before:bg-cover before:skew-x-[-45deg] before:absolute before:top-[-15px] before:right-[-8px]
// after:h-full after:w-[15px] after:absolute after:right-[-15px] after:skew-y-[-45deg] after:top-[-7px] after:bg-[#004DBC]
// '


// HasCape='blue'>
// <div className='py-7 px-3 text-center'>
// <h1 className={`px-3 font-bold text-2xl max-w-xl text-blue-custom`}>
// Mentor
// </h1>
// <p className="py-5 px-3 text-lg px-3 max-w-4xl">
// Contribua com seu conhecimento e sua trajetória para o direcionamento e inspiração para os jovens. Seja parte da transformação.
// </p>
// </div>
// <div className='px-3 py-5'>
// <Link href={"https://daperiferiaparafarialima.org/?pagina=mentor"} target="_blink" className='font-bold'>
// <Button title='Quero ajudar' color="blue" />
// </Link>
// </div>
// </CardRoot>