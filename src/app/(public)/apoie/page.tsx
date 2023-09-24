import { Image, Button, BookOpenText, Carrousel, CardRoot, ChalkboardTeacher, Donate, CopySimple, Info, Parceiros, Student, UsersFour, Target, CaretRight, MapPin, BagSimple, GraduationCap } from '@/components/home/utils/Utils'
import Link from 'next/link';
import { CopyText } from '@/components/home/CopyText';
import { Dialog } from '@/components/UI/Dialog';
import { Questions } from '@/components/apoie/Questions';
import { DonateSection } from '@/components/apoie/DonateSection';
import TestCa from '@/components/UI/TestCa';

export default function Apoie() {

  return (

    <>
      <div className="text-[#1B2E3A]">

        <main className="max-lg:h-screen flex items-center justify-center lg:bg-about bg-cover bg-center max-lg:bg-aboutsmall max-lg:bg-right text-white">
          <aside className='text-center px-4 flex flex-col sl:items-center py-60'>
            <div className="flex flex-col">
              <h1 className='font-extrabold text-4xl lg:text-6xl'>Transforme a vida de um jovem</h1>
              <p className='text-lg py-6 lg:text-3xl max-w-[1040px]'>A sua doação pode mudar a vida de um jovem através da educação, tecnologia e empregabilidade</p>
              <div className='flex flex-col md:flex-row gap-5 md:m-auto md:gap-3'>
                <Link href={"#pontual"} className='max-md:w-full'>
                  <Button title='Doação Pontual' color='blue' Custom='text-base lg:text-lg' />
                </Link>
                <Link href={"#mensal"} className='max-md:w-full'>
                  <Button title='Doação Mensal' color='green' Custom='text-base lg:text-lg' />
                </Link>
              </div>
            </div>
          </aside>
        </main>

        <section className='text-black-custom scroll-mt-20'>


          <aside className='m-auto w-full min-[660px]:max-w-[575px] md:max-w-2xl min-[992px]:max-w-[940px] lg:justify-between xg:max-w-[1050px] min-[1200px]:max-w-6xl min-[1380px]:max-w-7xl  flex flex-col st:flex-row st:justify-between'>

            <div className='max-st:px-5 py-10 st:max-w-lg'>
              <h2 className='text-3xl font-semibold'>Por que investir no nosso projeto?</h2>
              <p className='text-lg py-10'>Diante de um sistema educacional público defasado e de uma baixa adesão das demandas do setor privado, <strong> 52% dos jovens entre 15 e 29 anos</strong>, perdem o interesse pelos estudos e correm o risco de não conseguir se inserir no mercado de trabalho. Sabemos que, quando olhamos para jovens de grupos subrepresentados, esses desafios são ainda maiores. <br /> <br /> Fonte:
                - O Globo: metade dos jovens corre o risco de não se inserir no mercado de trabalho (2020). </p>
              <Link href={"#apoie"}>
                <Button title='Quero doar' color='green' />
              </Link>
            </div>

            <div className='px-3 py-10 flex flex-col gap-10 self-center'>
              <Info textSize='max-w-[500px]' text='Apoie pessoas jovens a desenvolverem seu potencial e serem protagonistas de suas trajetórias.' size='70' icon={GraduationCap} color='text-black-custom' />
              <Info textSize='max-w-[500px]' text='Promova oportunidades de emprego formal para jovens de grupos subrepresentados.' size='70' icon={BagSimple} color='text-black-custom' />
              <Info textSize='max-w-[500px]' text='Faça parte de uma rede de impacto nacional e inspire-se com as histórias de transformação dos nossos jovens.' size='70' icon={MapPin} color='text-black-custom' />
            </div>

          </aside>


        </section>

        <section className='pt-12'>
          <h2 className='text-center font-semibold text-3xl lg:text-5xl text-black-custom w-full pt-10 px-3'>Depoimentos de jovens transformados</h2>
          <TestCa CA1 />
        </section>

        <section>
          <section id='apoie' className="bg-[#27C86F] bg-bigwavegreen bg-cover bg-right w-full scroll-mt-20">
            <aside className='text-white py-16 flex flex-col justify-center items-center px-3 sl:max-w-md sl:m-auto min-[660px]:max-w-[575px] md:max-w-2xl min-[992px]:max-w-[940px] xg:max-w-[1050px] min-[1200px]:max-w-6xl min-[1380px]:max-w-7xl'>
              <h2 className="text-center font-semibold text-3xl lg:text-5xl leading-10">
                Você também pode mudar o futuro dos jovens!
              </h2>
              <h2 className="text-center font-semibold text-3xl pt-20 scroll-mt-20" id='pontual'>
                Doação Pontual
              </h2>
              <p className="text-lg max-w-4xl py-6 text-center">
                Dentro do seu aplicativo bancário, escaneie o QRCODE abaixo para realizar sua doação, qualquer valor é bem-vindo. Venha conosco e ajude a construir um futuro promissor para jovens de periferia!
              </p>

              <CopyText />
              <h2 className="font-semibold text-3xl m-auto text-white text-center scroll-mt-20" id='mensal'>Doação Mensal</h2>
              <p className="pb-10 py-5 text-lg text-center max-w-4xl">
                Você também pode doar mensalmente através de uma assinatura via PIX, cartão de crédito ou boleto, clicando nos valores abaixo:
              </p>
              <div className='flex flex-col justify-evenly w-full px-3 sl:flex-row'>
                <div className='px-3 py-3 flex items-center max-xl:flex-col gap-8'>
                  <Donate value='50' color='yellow' href='https://app.cobrefacil.com.br/link-de-pagamento/8PVXZG3JPRRGNW16REOD' />
                  <Donate value='100' color='green' href='https://app.cobrefacil.com.br/link-de-pagamento/0PXYQ45N6QQKN2DELO8K' />
                </div>
                <div className='flex px-3 py-3 items-center max-xl:flex-col gap-8'>
                  <Donate value='300' color='blue' href='https://app.cobrefacil.com.br/link-de-pagamento/PQRME31J3GG5NV20Z564' />
                  <Donate value='500' href='https://app.cobrefacil.com.br/link-de-pagamento/X2OYRL8N0V769MQEK6W3' />
                </div>
              </div>
            </aside>
          </section>
        </section>

        <section className='max-lg:px-3 flex flex-col sl:max-w-md sl:m-auto min-[660px]:max-w-[575px] md:max-w-2xl min-[992px]:max-w-[940px] xg:max-w-[1050px] min-[1200px]:max-w-6xl min-[1380px]:max-w-7xl'>
          <aside className='flex flex-col py-20 max-w-[65rem] m-auto w-full gap-3'>
            <Dialog Question="Como posso doar?" Text="Você pode optar por dois métodos de doação, doação pontual (uma única doação) ou doação recorrente. Caso opte pela doação pontual, você pode optar por realizá-la diretamente em nossa chave PIX - 48.621.188/0001-11 (CPNJ) ou escanear o QRCode acima. Agora, caso deseje apoiar o DPFL mensalmente, basta selecionar o valor dentre os disponíveis acima e realizar a aquisição da assinatura. Caso opte por apoiar mensalmente sob um valor personalizado, não hesite e entrar em contato conosco. " />

            <Dialog Question="Onde o valor da minha doação será usado?" Text="A sua doação será usada na manutenção e desenvolvimento do projeto DPFL, impactando a vida de jovens em diversas regiões do Brasil através da educação de qualidade." />

            <Dialog Question="Onde posso acompanhar o projeto?" Text="Você pode acompanhar o nosso projeto através das nossas redes sociais e do nosso podcast  Quebrando a Regra." />
          </aside>
        </section>

      </div >
    </>
  )
}


