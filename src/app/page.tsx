import {BookOpenText, ChalkboardTeacher, Student, UsersFour, LinkedinLogo, Button, Image, Link, ProfileIcon, DepoimentCarrousel, InfiniteSlider, Info} from "@/app/_local-components/index"

export default function Home() {

  return (

    <>
      {/* Seja a mudança que a sua carreira precisa */}
      <main className='md:m-auto lg:pb-32 md:pt-20 pt-20 bg-[#FEFEFE] flex flex-col sl:items-center md:max-w-2xl min-[992px]:max-w-[940px] lg:flex-row lg:justify-between xg:max-w-[1050px] min-[1200px]:max-w-6xl min-[1380px]:max-w-7xl'>
        <aside className='px-4 flex flex-col sl:items-center max-w-3xl'>
          <div className="flex flex-col">
            <h1 className='text-black-custom font-extrabold text-2xl sm:text-3xl md:text-[1.75rem] lg:text-6xl'>Seja a mudança que a sua carreira precisa!</h1>
            <p className='py-6 text-base sm:text-lg md:text-xl lg:text-2xl text-black-custom text-justify'>
              Impulsione sua capacitação profissional para carreiras em empresas tecnologia com a Pulse Mais e tenha acesso a cursos, mentorias, oportunidades de emprego e bolsa de estudos para a universidade!
            </p>
          </div>
          <div className='lg:self-start py-1 sl:w-full lg:max-w-[600px]'>
              <a
              href="https://preinscricao.pulsemais.org.br/2025"
              className='inline-block'
              target="_blank"  // Opens the link in a new tab
              rel="noopener noreferrer"  // Security best practice
              >
              <Button title={'Inscreva-se no Programa Pulse Mais\nTurmas 1º sem. 2025'} color='blue' Custom='text-[15px] sm:text-lg md:text-xl lg:text-2xl whitespace-pre-wrap' />
            </a>
          </div>
        </aside>
        <picture className='max-w-[450px] max-sm:m-auto max-lg:py-10'>
          <Image src="/assents/images/artblue.svg" alt="DPFL Summit" width={672} height={449} quality={100} className='py-1 px-3' priority />
        </picture >
      </main>

      {/* Inscrições Abertas */}
      <section
        className='lg:pb-32 md:pt-20 pt-20 bg-cover bg-center bg-no-repeat py-20 text-center text-white    
        '
        style={{ backgroundImage: "url('/assents/backgrounds/fundo-inscricao-abertas.svg')" }}
      >
        <aside className='md:max-w-2xl min-[992px]:max-w-[940px] xg:max-w-[1050px] min-[1200px]:max-w-6xl min-[1380px]:max-w-6xl m-auto'>
        <h2 className='font-bold text-3xl lg:text-5xl mb-4'>Inscrições abertas!</h2>
        <p className='text-2xl'>Não perca essa oportunidade e inscreva-se para o Programa Pulse Mais - Turmas 1º semestre de 2025. Venha impulsionar o seu futuro conosco.</p>
        <div className='py-1 sl:w-full flex justify-center'>
        <a
          href="https://preinscricao.pulsemais.org.br/2025"
          className='inline-block'
          target="_blank"  // Opens the link in a new tab
          rel="noopener noreferrer"  // Security best practice
        >
          <Button title='Clique aqui e se inscreva' color='yellow' Custom='text-[24px]' />
        </a>
        </div>

        
        {/* <Link href="#" className='bg-yellow-500 text-white px-6 py-3 rounded-md font-bold text-lg hover:bg-yellow-600'>
          Clique aqui e se inscreva
        </Link> */}
        </aside>
      </section>

      {/* nosso proprósito  */}
      <section id='comofunciona' className='relative flex justify-center bg-[#27C86F] bg-wavegreen bg-contain bg-bottom bg-no-repeat'>
        <aside className='pt-10 w-full flex md:max-w-2xl min-[992px]:max-w-[940px] min-[1200px]:flex-row-reverse lg:justify-between xg:max-w-[1050px] min-[1200px]:gap-12 min-[1200px]:max-w-6xl min-[1380px]:max-w-7xl'>
          <div className='text-white px-4'>
            <h2 className='font-semibold text-3xl lg:text-5xl'>Nosso propósito</h2>
            <p className='text-lg py-6 max-w-5xl'>Possibilitar que todos os jovens brasileiros de baixa renda possam sonhar com um futuro como líderes.</p>
            <p className='text-lg'>Fazemos isso através de:</p>
            <aside className='flex gap-10 flex-col py-6'>
              <div className='flex flex-col gap-8 font-normal'>
              <Info icon={ChalkboardTeacher} text={<span className="font-normal">Programas de formação que desenvolvem habilidades essenciais para carreiras em tecnologia e utilizam um <strong>método exclusivo</strong> que integra aulas e mentorias.</span>} />
              <Info icon={Student} text={<span className="font-normal">Conexão com os executivos de <strong>grandes empresas</strong> na América Latina.</span>} />
              {/* <Info icon={BookOpenText} text='Plataforma gamificada que gera protagonismo às pessoas jovens, levando-as para ação' /> */}
              <Info icon={UsersFour} text={<span className="font-normal">Uma <strong>rede de oportunidades</strong> para conquistar o primeiro emprego e acessar o ensino superior com bolsa gratuita.</span>} />
              </div>
            </aside>
          </div>
          <Image src={'/assents/images/whitebanner.svg'} width={520} height={520} alt="Uma moça segurando um notbook sobre um fundo branco, simbolizando o funcionamento do projeto" quality={100} className='max-[1199px]:hidden' />
        </aside>
      </section>

      {/* Resultados até 2023 */}
      <section className='lg:pt-12 md:max-w-2xl min-[992px]:max-w-[940px] xg:max-w-[1050px] min-[1200px]:max-w-6xl min-[1380px]:max-w-7xl m-auto'>
        <aside className='flex flex-col gap-32 m-auto'>
          <h2 className='text-black-custom font-semibold text-3xl px-3 st:m-auto lg:m-0 lg:text-5xl sl:text-center'>Resultados até 2023</h2>
          {/* <h2 className='text-black-custom font-semibold text-3xl px-3 st:m-auto lg:m-0 lg:text-5xl sl:text-center'>Trabalhamos para alcançar <br className='max-[624px]:hidden st:hidden lg:block' /> resultados <br className='max-[375px]:hidden min-[455px]:hidden' /> de alto impacto</h2> */}
          <ul className='flex flex-col items-center md:flex-row md:flex-wrap md:justify-evenly' >
            <li className=''>
              <ProfileIcon color='yellow'>
                <p className='px-2 text-2xl font-semibold max-w-sm text-black '>350 jovens impactados com formação e mentoria</p>
              </ProfileIcon>
              <p className='px-2 py-11 text-center text-lg max-w-sm text-black-custom'>50% de empregabilidade após o Programa Pulse Mais.</p>
            </li>
            <li>
              <ProfileIcon color='blue'>
                <p className='px-2 text-2xl font-semibold max-w-sm text-black '>+3600
                  horas de mentorias </p>
              </ProfileIcon>
              <p className='px-2 py-11 text-center text-lg max-w-sm text-black-custom'>Rede com mais de 250 mentores cadastrados, mais de 100 finalizadas.</p>
            </li>
            <li>
              <ProfileIcon color='green'>
                <p className='px-2 text-3xl font-semibold max-w-sm text-black '>+10 empresas parceiras</p>
              </ProfileIcon>
              <p className='px-2 py-11 text-center text-lg max-w-sm text-black-custom'>Parceiros e investidores que potencializam nosso impacto.</p>
            </li>
          </ul>
        </aside>
      </section>

      <section className='bg-[#009EE6] bg-smallwaveblue bg-contain lg:bg-cover bg-center lg:bg-bottom bg-no-repeat w-full max-xg:pb-10'>
        <aside className='xg:py-20 xg:flex xg:flex-row xg:items-center sl:m-auto sl:max-w-md md:max-w-2xl min-[992px]:max-w-[940px] xg:max-w-[1050px] lg:flex-row min-[1200px]:max-w-6xl min-[1380px]:max-w-7xl'>
          <div className='text-white flex flex-col px-5 py-6 '>
            <h2 className='font-semibold text-3xl lg:text-5xl'>
              Ouça o podcast <br /> Quebrando a Regra</h2>
            <p className='py-8 text-lg xg:max-w-3xl'>
              Histórias inspiradoras e disruptivas de pessoas que evoluíram em suas carreiras, superando as adversidades. Insights e conteúdos fundamentais para você colocar em prática!
            </p>
            <Link href={"https://www.youtube.com/@quebrandoaregra"} target='_blank' className='max-w-[16rem] lg:m-auto w-full xg:m-0 xg:w-auto'>
              <Button title='Ouça agora' color='yellow' />
            </Link>
          </div>
          <div className='flex max-xg:justify-center'>
            <Image src="/assents/images/quebrandoregra.svg" alt="Quebrando a regra podcast" width={538} height={312} style={{ borderRadius: 45 }} className='lg:w-full py-10 px-3' />
          </div>
        </aside>
      </section>

      <section>
        <h2 className='text-center font-semibold text-3xl lg:text-5xl text-black-custom w-full pt-10 px-3'>Depoimentos de jovens transformados</h2>
        <DepoimentCarrousel CA1 />
      </section>

      <section className='bg-[#009EE6] bg-smallwaveblue bg-cover bg-bottom w-full'>
        <h2 className='font-semibold text-white text-3xl text-center pt-10 pb-3 px-3 lg:text-5xl'>Conheça o Time Pulse</h2>
        <p className='text-lg text-center text-white px-3'>Conheça quem trabalha para transformar a vida de jovens através do nosso projeto.</p>
        <aside className='flex flex-col gap-10 py-10 lg:20 md:flex-row md:flex-wrap md:justify-evenly m-auto sl:max-w-md md:max-w-3xl xg:max-w-[1050px] xg:gap-20'>
          <picture className='relative flex flex-col gap-3 items-center text-white'>
            <Image alt='Foto do Diretor da DPFL' src={"/assents/youngers/dudu2.svg"} width={165} height={165} className='rounded-full py-3 lg:hidden' />
            <Image alt='Foto do Diretor da DPFL' src={"/assents/youngers/dudu2.svg"} width={200} height={200} className='rounded-full py-3 hidden lg:block' />
            <h4 className='font-bold  text-lg'>Eduardo Moura</h4>
            <span>Diretor Executivo</span>
            <Link href={"https://www.linkedin.com/in/eduardocmoura/"} target='_blank' >
              <LinkedinLogo size={32} weight='fill' />
            </Link>
          </picture>
          <picture className='relative flex flex-col gap-3 items-center text-white'>
            <Image alt='Foto da Diretora Financeira da DPFL' src={"/assents/youngers/cida.svg"} width={165} height={165} className='rounded-full py-3 lg:hidden' />
            <Image alt='Foto da Diretora Financeira da DPFL' src={"/assents/youngers/cida.svg"} width={200} height={200} className='rounded-full py-3 hidden lg:block' />
            <h4 className='font-bold  text-lg '>Cida Oliveira</h4>
            <span>Diretora Financeira</span>
            <Link href={"https://www.linkedin.com/in/maria-aparecida-de-oliveira-59085731/"} target='_blank'  >
              <LinkedinLogo size={32} weight='fill' />
            </Link>
          </picture>
          <picture className='relative flex flex-col gap-3 items-center text-white'>
            <Image alt='Foto da UI, UX Designer da DPFL' src={"/assents/youngers/gabs.svg"} width={165} height={165} className='rounded-full py-3 lg:hidden' />
            <Image alt='Foto da UI, UX Designer da DPFL' src={"/assents/youngers/gabs.svg"} width={200} height={200} className='rounded-full py-3 hidden lg:block' />
            <h4 className='font-bold text-lg'>Gabriela Souza</h4>
            <span>Designer e Scrum</span>
            <Link href={"https://www.linkedin.com/in/gabrielaasouza/"} target='_blank' >
              <LinkedinLogo size={32} weight='fill' />
            </Link>
          </picture>
          <picture className='relative flex flex-col gap-3 items-center text-white'>
            <Image alt='Foto da UI, UX Designer da DPFL' src={"/assents/youngers/LaraArruda.svg"} width={165} height={165} className='rounded-full py-3 lg:hidden' />
            <Image alt='Foto da UI, UX Designer da DPFL' src={"/assents/youngers/LaraArruda.svg"} width={200} height={200} className='rounded-full py-3 hidden lg:block' />
            <h4 className='font-bold text-lg'>Lara Arruda</h4>
            <span>Analista de operações</span>
            <Link href={"https://www.linkedin.com/in/laraa-arruda/"} target='_blank' >
              <LinkedinLogo size={32} weight='fill' />
            </Link>
          </picture>
          <picture className='relative flex flex-col gap-3 items-center text-white'>
            <Image alt='Foto do Desenvolvedor Full Stack da DPFL' src={"/assents/youngers/matheus.svg"} width={165} height={165} className='rounded-full py-3 lg:hidden' />
            <Image alt='Foto do Desenvolvedor Full Stack da DPFL' src={"/assents/youngers/matheus.svg"} width={200} height={200} className='rounded-full py-3 hidden lg:block' />
            <h4 className='font-bold text-lg'>Matheus Passos</h4>
            <span>Desenvolvedor Full Stack</span>
            <Link href={"https://www.linkedin.com/in/passosmatheus/"} target='_blank' >
              <LinkedinLogo size={32} weight='fill' />
            </Link>
          </picture>
          <picture className='relative flex flex-col gap-3 items-center text-white'>
            <Image alt='Foto do Desenvolvedor Full Stack da DPFL' src={"/assents/youngers/vini.svg"} width={165} height={165} className='rounded-full py-3 lg:hidden' />
            <Image alt='Foto do Desenvolvedor Full Stack da DPFL' src={"/assents/youngers/vini.svg"} width={200} height={200} className='rounded-full py-3 hidden lg:block' />
            <h4 className='font-bold text-lg'>Vinicius Costa</h4>
            <span>Desenvolvedor Full Stack</span>
            <Link href={"https://www.linkedin.com/in/vinicius-scosta/"} target='_blank' >
              <LinkedinLogo size={32} weight='fill' />
            </Link>
          </picture>
          <picture className='relative flex flex-col gap-3 items-center text-white'>
            <Image alt='Foto do Fundador da DPFL' src={"/assents/youngers/thiago2.svg"} width={165} height={165} className='rounded-full py-3 lg:hidden' />
            <Image alt='Foto do Fundador da DPFL' src={"/assents/youngers/thiago2.svg"} width={200} height={200} className='rounded-full py-3 hidden lg:block' />
            <h4 className='font-bold text-lg'>Thiago Lima</h4>
            <span>Fundador e conselheiro</span>
            <Link href={"https://www.linkedin.com/in/thiagolimap/"} target='_blank' >
              <LinkedinLogo size={32} weight='fill' />
            </Link>
          </picture>
        </aside>
      </section>

      <section className='py-10'>
        <aside className='pb-20'>
          <h3 className='font-semibold text-3xl text-center text-green-custom lg:text-4xl'>Apoiadores Institucionais</h3>
          <aside className="w-full px-3 py-10 lg:pb-5">
            <InfiniteSlider />
          </aside>
        </aside>
      </section >
    </>
  )
}


