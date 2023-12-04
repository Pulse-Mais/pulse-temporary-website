import { Image, Button, BookOpenText, Carrousel, CardRoot, ChalkboardTeacher, Donate, CopySimple, Info, Parceiros, Student, UsersFour, Target, GraduationCap, Handshake, Buildings, LinkedinLogo } from '@/components/home/utils/Utils'
import Link from 'next/link';
import { ProfileIcon } from '@/components/home/ProfileIcon';
import { Card2 } from '@/components/home/Card2';
import TestCa from '@/components/UI/TestCa';
import { Modal } from '@/components/UI/Modal';


export default function Home() {

  return (

    <>


      <section className='md:m-auto lg:pb-24 md:pt-40 pt-20 bg-[#FEFEFE] flex flex-col sl:items-center md:max-w-2xl min-[992px]:max-w-[940px] lg:flex-row lg:justify-between xg:max-w-[1050px] min-[1200px]:max-w-6xl min-[1380px]:max-w-7xl'>
        <aside className='px-4 flex flex-col sl:items-center max-w-3xl'>
          <div className="flex flex-col">
            <h1 className='text-black-custom font-extrabold text-4xl md:text-[2.75rem] lg:text-6xl'>Da Perifa para <br className='md:hidden' /> Faria Lima</h1>
            <p className='py-6 text-lg md:text-xl lg:text-2xl text-black-custom'>Potencializando a jornada de jovens brasileiros em situação de vulnerabilidade econômica através da educação, tecnologia e empregabilidade.</p>
          </div>
          <div className='lg:self-start py-1 sl:w-full lg:max-w-[280px]'>
            <Link href={"#cards"} className='w-full'>
              <Button title='Comece agora' color='blue' Custom='text-[24px]' />
            </Link>
          </div>
        </aside>
        <div className='max-w-[450px] max-sm:m-auto max-lg:py-10'>
          <Image src="/assents/images/artblue.svg" alt="DPFL Summit" width={672} height={449} quality={100} className='py-1 px-3' priority />
        </div>
      </section>

      
      <section id='comofunciona' className='relative flex justify-center bg-[#27C86F] bg-wavegreen bg-contain bg-bottom bg-no-repeat'>
        <aside className='pt-10 w-full flex md:max-w-2xl min-[992px]:max-w-[940px] min-[1200px]:flex-row-reverse lg:justify-between xg:max-w-[1050px] min-[1200px]:gap-12 min-[1200px]:max-w-6xl min-[1380px]:max-w-7xl'>
          <div className='text-white px-4'>
            <h2 className='font-semibold text-3xl lg:text-5xl'>Sobre nós</h2>
            <p className='text-lg py-6 max-w-5xl'>A <strong>DPFL</strong> é uma organização sem fins lucrativos que surgiu para desenvolver habilidades socioemocionais e técnicas da área de tecnologia em pessoas jovens, entre 16 e 24 anos, com objetivo de empregá-las no trabalho formal através de empresas parceiras.</p>
            <p className='text-lg'>Para isso contamos com:</p>
            <aside className='flex gap-10 flex-col py-6'>
              <div className='flex flex-col gap-8'>
                <Info icon={ChalkboardTeacher} text='Cursos de alta qualidade, principalmente na área de tecnologia, fornecidos por parceiros' />
                <Info icon={Student} text='Pessoas mentoras com experiência de mercado que encorajam os alunos' />
                <Info icon={BookOpenText} text='Plataforma gamificada que gera protagonismo às pessoas jovens, levando-as para ação' />
                <Info icon={UsersFour} text='Oportunidades de trabalho dignas e alinhadas a cada perfil' />
              </div>
            </aside>
          </div>
          <Image src={'/assents/images/whitebanner.svg'} width={520} height={520} alt="Uma moça segurando um notbook sobre um fundo branco, simbolizando o funcionamento do projeto" quality={100} className='max-[1199px]:hidden' />
        </aside>
      </section>


      <section className='lg:pt-28 py-16 md:max-w-2xl min-[992px]:max-w-[940px] xg:max-w-[1050px] min-[1200px]:max-w-6xl min-[1380px]:max-w-7xl m-auto'>
        <aside className='flex flex-col gap-32 m-auto'>
          <h2 className='text-black-custom font-semibold text-3xl px-3 st:m-auto lg:m-0 lg:text-5xl sl:text-center'>Trabalhamos para alcançar <br className='max-[624px]:hidden st:hidden lg:block' /> resultados <br className='max-[375px]:hidden min-[455px]:hidden' /> de alto impacto</h2>
          <ul className='flex flex-col items-center md:flex-row md:flex-wrap md:justify-evenly' >
            <li className=''>
              <ProfileIcon color='yellow'>
                <p className='px-3 text-3xl font-semibold max-w-sm text-white '>300 jovens impactados</p>
              </ProfileIcon>
              <p className='px-3 text-center text-lg py-11 max-w-sm text-black-custom'>Destes jovens, <strong> 90% estão estudando</strong> e <strong>50% estão empregados</strong> através do DPFL.</p>
            </li>
            <li>
              <ProfileIcon color='blue'>
                <p className='px-3 text-3xl font-semibold max-w-sm text-white '>+3600
                  horas de mentorias </p>
              </ProfileIcon>
              <p className='px-3 py-11 text-center text-lg max-w-sm text-black-custom'>Feitas por mais de 200 mentores, sendo que
                <strong> 100 estão ativos</strong> no projeto.</p>
            </li>
            <li>
              <ProfileIcon color='green'>
                <p className='px-3 text-3xl font-semibold max-w-sm text-white '>+10 empresas parceiras</p>
              </ProfileIcon>
              <p className='px-3 py-11 text-center text-lg max-w-sm text-black-custom'>Permitindo que o projeto realize uma formação
                de <strong>alta qualidade.</strong></p>
            </li>
          </ul>
        </aside>
      </section>

      <section id='cards' className='lg:py-20 pb-10 sl:m-auto md:max-w-2xl  min-[992px]:max-w-[940px] xg:max-w-[1050px] lg:flex-row min-[1200px]:max-w-6xl min-[1380px]:max-w-7xl'>
        <section className='px-3 flex flex-col gap-10 justify-center'>
          <h2 className='font-semibold text-3xl lg:text-5xl text-black-custom lg:pb-10 text-center'>Escolha seu perfil</h2>
          <aside className='flex flex-col max-md:items-center gap-10 st:flex-row st:gap-8 lg:w-full lg:justify-evenly'>
            <Card2 Theme='yellow' Title='Aluno(a)' Text='Aprenda com pessoas incríveis, evolua suas habilidades e torne-se protagonista da sua trajetória. Venha crescer conosco!' />
            <Card2 Theme='green' Title='Mentor(a)' Text='Contribua com seu conhecimento e sua trajetória para o direcionamento e inspiração para os jovens. Seja parte da transformação.' />
          </aside>
          <aside className='flex flex-col max-md:items-center gap-10 st:flex-row st:gap-8 lg:w-full lg:justify-evenly'>
            <Card2 Theme='blue' Title='Empresa Parceira' Text='Acesse nossa plataforma e torne-se um parceiro para a contratação dos jovens altamente qualificados. Possibilite novos futuros!' />
            <Card2 Title='Doador(a)' Text='Contribua financeiramente para nossa missão através de doações pontuais e recorrentes. Venha fazer parte da nossa rede!' />
          </aside>
        </section>
      </section >

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
        <TestCa CA1 />
      </section>
       
      <section className='bg-[#009EE6] bg-smallwaveblue bg-cover bg-bottom w-full'>
        <h2 className='font-semibold text-white text-3xl text-center pt-10 pb-3 px-3 lg:text-5xl'>Conheça o Time DPFL</h2>
        <p className='text-lg text-center text-white px-3'>Conheça quem trabalha para transformar a vida de jovens através do nosso projeto.</p>
        <aside className='flex flex-col gap-10 py-10 lg:20 md:flex-row md:flex-wrap md:justify-evenly m-auto sl:max-w-md md:max-w-3xl xg:max-w-[1050px] xg:gap-20'>
            <picture className='relative flex flex-col gap-3 items-center text-white'>
              <Image alt='Foto do Diretor da DPFL' src={"/assents/youngers/dudu2.svg"} width={165} height={165} className='rounded-full py-3 lg:hidden' />
              <Image alt='Foto do Diretor da DPFL' src={"/assents/youngers/dudu2.svg"} width={200} height={200} className='rounded-full py-3 hidden lg:block' />
              <h4 className='font-bold  text-lg'>Eduardo Moura</h4>
              <span>Diretor Executivo</span>
              <Link href={"https://www.linkedin.com/in/eduardocmoura/"} target='_blank' >
                <LinkedinLogo size={32} />
              </Link>
            </picture>
            <picture className='relative flex flex-col gap-3 items-center text-white'>
              <Image alt='Foto da Diretora Financeira da DPFL' src={"/assents/youngers/cida.svg"} width={165} height={165} className='rounded-full py-3 lg:hidden' />
              <Image alt='Foto da Diretora Financeira da DPFL' src={"/assents/youngers/cida.svg"} width={200} height={200} className='rounded-full py-3 hidden lg:block' />
              <h4 className='font-bold  text-lg '>Cida Oliveira</h4>
              <span>Diretora Financeira</span>
              <Link href={"https://www.linkedin.com/in/maria-aparecida-de-oliveira-59085731/"} target='_blank'  >
                <LinkedinLogo size={32} />
              </Link>
            </picture>
            <picture className='relative flex flex-col gap-3 items-center text-white'>
              <Image alt='Foto da UI, UX Designer da DPFL' src={"/assents/youngers/gabs.svg"} width={165} height={165} className='rounded-full py-3 lg:hidden' />
              <Image alt='Foto da UI, UX Designer da DPFL' src={"/assents/youngers/gabs.svg"} width={200} height={200} className='rounded-full py-3 hidden lg:block' />
              <h4 className='font-bold text-lg'>Gabriela Souza</h4>
              <span>Designer e Scrum</span>
              <Link href={"https://www.linkedin.com/in/gabrielaasouza/"} target='_blank' >
                <LinkedinLogo size={32} />
              </Link>
            </picture>
            <picture className='relative flex flex-col gap-3 items-center text-white'>
              <Image alt='Foto de líder de tecnologia e desenvolvimento da nova plataforma do DPFL e também um dos nossos melhores Mentores' src={"/assents/youngers/calabro.svg"} width={165} height={165} className='rounded-full py-3 lg:hidden' />
              <Image alt='Foto de líder de tecnologia e desenvolvimento da nova plataforma do DPFL e também um dos nossos melhores Mentores' src={"/assents/youngers/calabro.svg"} width={200} height={200} className='rounded-full py-3 hidden lg:block' />
              <h4 className='font-bold text-lg'>Renato Calabro</h4>
              <span>Mentor e Líder de Tecnologia</span>
              <Link href={"https://www.linkedin.com/in/renatocalabro/"} target='_blank'>
                <LinkedinLogo size={32} />
              </Link>
            </picture>
            <picture className='relative flex flex-col gap-3 items-center text-white'>
              <Image alt='Foto do Desenvolvedor Full Stack da DPFL' src={"/assents/youngers/matheus.svg"} width={165} height={165} className='rounded-full py-3 lg:hidden' />
              <Image alt='Foto do Desenvolvedor Full Stack da DPFL' src={"/assents/youngers/matheus.svg"} width={200} height={200} className='rounded-full py-3 hidden lg:block' />
              <h4 className='font-bold text-lg'>Matheus Passos</h4>
              <span>Desenvolvedor Full Stack</span>
              <Link href={"https://www.linkedin.com/in/passosmatheus/"} target='_blank' >
                <LinkedinLogo size={32} />
              </Link>
            </picture>
            <picture className='relative flex flex-col gap-3 items-center text-white'>
              <Image alt='Foto do Fundador da DPFL' src={"/assents/youngers/thiago2.svg"} width={165} height={165} className='rounded-full py-3 lg:hidden' />
              <Image alt='Foto do Fundador da DPFL' src={"/assents/youngers/thiago2.svg"} width={200} height={200} className='rounded-full py-3 hidden lg:block' />
              <h4 className='font-bold text-lg'>Thiago Lima</h4>
              <span>Fundador e conselheiro</span>
              <Link href={"https://www.linkedin.com/in/thiagolimap/"} target='_blank' >
                <LinkedinLogo size={32} />
              </Link>
            </picture>
          </aside>
      </section>



      <section className='py-10'>
          <aside className='pb-20'>
            <h3 className='font-semibold text-3xl text-center text-green-custom lg:text-4xl'>Patrocinadores do DPFL</h3>
            <div className='flex flex-col md:flex-row flex-wrap items-center justify-center'>
              <Parceiros id={0} />
            </div>
          </aside>
          <aside className='pb-20'>
            <h3 className='font-semibold text-3xl text-center text-green-custom lg:text-4xl'>Apoiadores Institucionais</h3>
            <div className='flex flex-wrap items-center justify-center'>
              <div className='flex flex-wrap gap-10 items-center justify-center max-lg:hidden'>
                <Parceiros id={1} />
                <Parceiros id={2} />
                <Parceiros id={3} />
                <Parceiros id={4} />
                <Parceiros id={5} />
                <Parceiros id={6} />
                <Parceiros id={7} />
              </div>
              <div className='flex max-w-[18.75rem] lg:hidden m-auto' >
                <Carrousel CA3 />
              </div>
            </div>
          </aside>
        </section >  

        <Modal content='testando' title='testando2'/>
    </>
  )
}


