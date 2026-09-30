import type { Metadata } from 'next'
import {
  Image,
  CTAButton,
  AccordionItem,
  FooterMobile,
  FooterDesktop
} from '@/app/_local-components/index'
import { PlusGold } from './_components/PlusGold'
import { WhiteOval } from './_components/WhiteOval'
import { ImpactNote } from './_components/ImpactNote'
import { TicketOption } from './_components/TicketOption'
import { TicketsGridDesktop } from './_components/TicketsGridDesktop'

export const metadata: Metadata = {
  title: 'Pulsar 2027 | Pulse Mais',
  description:
    'Pulsar: o evento anual de relacionamento e celebração da Pulse Mais, conectando onde as conexões que transformam o futuro do trabalho acontecem.',
}

// ==========================================
// Configuração das Empresas Patrocinadoras
// ==========================================
const sponsors = [
  { name: 'sponsor 1', logo: '/assents/logos/ClearIt.svg' },
  { name: 'sponsor 2', logo: '/assents/logos/clm.svg' },
  { name: 'sponsor 4', logo: '/assents/logos/matza.svg'},
  { name: 'sponsor 6', logo: '/assents/logos/StIt.svg' },
  { name: 'sponsor 7', logo: '/assents/logos/pub-logo.svg' }
]

// ==========================================
// Configuração do WhatsApp Dinâmico
// ==========================================
const WHATSAPP_NUMBER = '5511917645950'

const getWaLink = (message: string) => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

// Âncora da seção "Quero participar do evento"

const TICKETS_SECTION_ANCHOR = '#quero-participar-mobile'
const TICKETS_ANCHOR_DESKTOP = '#quero-participar-desktop'


const experiences = [
  {
    title: 'Conexões',
    text: (
      <>
        Networking guiado entre<br />
        executivos CLevel, mentores<br />
        e jovens talentos.
      </>
    ),
    width: 'w-[225px]',
  },
  { title: 'Talk', text: 'Sobre futuro do trabalho e tecnologia com convidado especial.', width: 'w-[270px]' },
  { title: 'Histórias', text: 'Depoimentos e cases reais de transformação e empregabilidade.', width: 'w-[270px]' },
  {
    title: 'Liderança',
    text: 'Fortalece sua liderança, pratica o give back e contribui para aproximar sua marca do ecossistema de impacto.',
    width: 'w-[260px]',
  },
]

// ==========================================
// Configuração dos Ingressos com Links Específicos
// ==========================================
const tickets = [
  {
    name: 'individual',
    mobileTitle: 'Individual',
    desktopTitle: 'Individual',
    description: 'Convite válido para uma pessoa e é intransferível.',
    price: 'R$ 1.000,00',
    ctaText: 'Garantir meu ingresso',
    href: getWaLink('Olá, gostaria de comprar o meu ingresso individual no valor de R$1000 para o Pulsar'),
  },
  {
    name: 'mentor',
    mobileTitle: (
      <>
        Mentor <span className="font-normal">| Pulse Mais</span>
      </>
    ),
    desktopTitle: 'Mentor',
    subtitle: 'Pulse Mais',
    description: 'Ingresso exclusivo para mentor(a) Pulse Mais',
    ctaText: 'Garantir meu ingresso',
    price: 'R$ 900,00',
    href: getWaLink('Olá, gostaria de comprar o meu ingresso de mentor no valor de R$900 para o Pulsar'),
  },
  {
    name: 'doador',
    mobileTitle: (
      <>
        Doador <span className="font-normal">| Pulse Mais</span>
      </>
    ),
    desktopTitle: 'Doador',
    subtitle: 'Pulse Mais',
    description: 'Ingresso exclusivo para doador(a) Pulse Mais',
    ctaText: 'Garantir meu ingresso',
    price: 'R$ 800,00',
    href: getWaLink('Olá, gostaria de comprar o meu ingresso de doador no valor de R$800 para o Pulsar'),
  },
  {
    name: 'duplo',
    mobileTitle: 'Duplo',
    desktopTitle: 'Duplo',
    subtitle: '2 pessoas',
    description: 'Ingresso casal (2 pessoas)',
    ctaText: 'Garantir meu ingresso',
    price: 'R$ 1.900,00',
    href: getWaLink('Olá, gostaria de comprar dois ingressos no valor de R$1900 para o Pulsar'),
  },
  {
    name: 'grupo',
    mobileTitle: 'Grupo',
    desktopTitle: 'Grupo',
    subtitle: '4 pessoas',
    description: 'Ingresso grupo (4 pessoas)',
    ctaText: 'Garantir meu ingresso',
    price: 'R$ 3.600',
    href: getWaLink('Olá, gostaria de comprar 4 ingressos para o Pulsar'),
  },
]



const eventPhotos = [
  '/assents/backgrounds/evento-pulsar-d2.png',
  '/assents/backgrounds/evento-pulsar-d3.png',
  '/assents/backgrounds/evento-pulsar-d4.png',
  '/assents/backgrounds/evento-pulsar-d5.png',
]

export default function Pulsar() {
  return (
    <>
      {/* ========================================================
          VERSÃO MOBILE (md:hidden)
      ========================================================= */}
      <main className="md:hidden w-full overflow-x-hidden bg-[#003870]">
        {/* Sessão 1 - Hero */}
        <section className="relative w-full h-[578px] flex flex-col items-center">
          <div aria-hidden className="absolute inset-x-0 top-0 h-[500px] overflow-hidden">
            <Image
              src="/assents/backgrounds/evento-pulsar-m1.png"
              alt=""
              fill
              priority
              className="object-cover object-top opacity-20 grayscale scale-125 origin-[27%_70%]"
            />
            <div className="absolute inset-x-0 bottom-0 h-[130px] bg-gradient-to-b from-transparent to-[#003870]" />
          </div>

          <h1 className="relative mt-[159px]">
            <span className="sr-only">Pulsar - Edição 2027</span>
            <Image
              src="/assents/brand/pulsar-logo.svg"
              alt=""
              width={280}
              height={173}
              priority
              className="w-[280px] h-[173px]"
            />
          </h1>
          <p className="relative mt-[35px] text-center text-[18px] leading-[20px] text-white">
            Onde as conexões que transformam  <br />
            o futuro do trabalho acontecem<br />
            
          </p>
          <CTAButton variant="gold" href={TICKETS_SECTION_ANCHOR} className="relative mt-[59px]">
            Quero estar no Pulsar
          </CTAButton>

          <PlusGold size={103} className="top-[10px] right-[55px]" />
          <PlusGold size={60} className="top-[82px] right-[4px]" />
          <PlusGold size={100} className="top-[411px] -left-[26px]" />
          <PlusGold size={59} className="top-[521px] -right-[4px]" />
        </section>

        {/* Sessão 2 - Sobre o evento */}
        <WhiteOval radiusTop={222.5} radiusBottom={222.5}>
          <div className="relative flex flex-col items-center pt-[67px] pb-[68px] text-center text-[15px] leading-[17px] tracking-[0.04em] text-[#6B6D6E]">
            <p className="w-[250px]">
              No Pulsar, diferentes trajetórias se encontram à mesma mesa<br />
              jovens talentos, mentores, líderes e empresas que estão construindo,<br />
              abrindo caminhos e transformando o mercado de trabalho.<br />
              
            </p>
            <p className="w-[250px] mt-[23px]">
              Entre conversas, experiências e novas conexões, surgem<br />
              oportunidades que podem ampliarm<br />
              horizontes e transformar trajetórias.<br />
              
            </p>
            <p className="w-[250px] mt-[23px]">
              Mais do que um jantar, o Pulsar é um encontro com propósito,<br />
              uma celebração das pessoas e das possibilidades que <br />
              nascem quando talentos e oportunidades se encontram.
            </p>
            <p className="w-[250px] mt-[23px]">
              Faça parte dessa mesa.
            </p>
            <CTAButton variant="gold-outline" href={TICKETS_SECTION_ANCHOR} className="mt-[35px]">
              Quero viver essa experiência
            </CTAButton>
          </div>
        </WhiteOval>

        {/* Sessão 3 - Experiências */}
        <section className="relative flex flex-col items-center pt-[15px] pb-[47px]">
          <Image
            src="/assents/backgrounds/evento-pulsar-m1.png"
            alt="Convidados em networking durante o Pulsar"
            width={310}
            height={207}
            className="relative w-[310px] h-[207px] rounded-[22px] object-cover"
          />

          <div className="relative mt-[45px] flex flex-col items-center gap-[20px]">
            {experiences.map((item) => (
              <AccordionItem
                key={item.title}
                variant="gold"
                defaultOpen={item.title === 'Conexões'}
                closedTextSize="text-[21px]"
                title={<span className="uppercase font-extrabold">{item.title}</span>}
              >
                <p
                  className={`${item.width} mx-auto pt-[21px] pb-[9px] text-center text-[14px] font-light leading-[21px] tracking-[0.05em] text-white`}
                >
                  {item.text}
                </p>
              </AccordionItem>
            ))}
          </div>

          <CTAButton variant="gold" href={TICKETS_SECTION_ANCHOR} className="relative mt-[33px]">
            Escolher meu ingresso
          </CTAButton>

          {/* ✨ NOVO: Programação da noite (Mobile) */}
          <div className="relative mt-[48px] w-[calc(100%-32px)] max-w-[330px] min-h-[330px] mx-auto border-[5px] border-[#FDE08B] rounded-[24px] px-[20px] py-[32px] z-10 bg-[#003870] flex flex-col justify-center">
            <h3 className="text-center text-[26px] font-bold leading-[28px] text-white mb-[24px]">
              Programação da<br />noite
            </h3>
            <ul className="flex flex-col gap-[16px] text-white text-[15px] leading-[22px]">
              <li>18h30 | Welcome Cocktail & Conexões Estratégicas</li>
              <li>19h15 | Abertura</li>
              <li>19h35 | Talk Exclusivo & Histórias de Impacto</li>
              <li>21h00 | Mobilização, Encerramento & Networking</li>
            </ul>
          </div>

          <PlusGold size={110} className="top-[361px] -right-[42px]" />
          <PlusGold size={98} className="top-[585px] -left-[24px]" />
        </section>

        {/* Sessão 4 - Data e local */}
        <WhiteOval radiusTop={160} radiusBottom={175}>
          <div className="relative flex flex-col items-center pt-[66px] pb-[55px]">
            <ul className="flex items-start justify-center gap-[34px] text-center text-[14px] font-semibold leading-[17px] tracking-[0.05em] text-[#003870]">
              <li className="flex flex-col items-center">
                <Image
                  src="/assents/backgrounds/calendar-gold.svg"
                  alt=""
                  width={67}
                  height={63}
                  className="w-[67px] h-[63px]"
                />
                <p className="mt-[8px]">
                  01.03.2027<br />
                  18h30 às 22h
                </p>
              </li>
              <li className="flex flex-col items-center">
                <Image
                  src="/assents/backgrounds/location-gold.svg"
                  alt=""
                  width={56}
                  height={63}
                  className="w-[56px] h-[63px]"
                />
                <p className="mt-[8px]">
                  Pobre Juan <br />
                  Rua Itaguaba, 38 <br />
                  Higienópolis
                </p>
              </li>
            </ul>

            <ImpactNote className="mt-[34px] text-[#6B6D6E]" textSizeClassName="text-[14px] leading-[18px]" />

            <Image
              src="/assents/backgrounds/evento-pulsar-m2.jpg"
              alt="Jantar do Pulsar com convidados à mesa"
              width={290}
              height={210}
              className="mt-[30px] w-[290px] h-[210px] rounded-[25px] object-cover"
            />

            <CTAButton variant="gold" href={TICKETS_SECTION_ANCHOR} className="mt-[47px]">
              Garantir meu ingresso
            </CTAButton>
          </div>

          <PlusGold size={118} className="top-[231px] -right-[43px]" />
          <PlusGold size={110} className="top-[542px] -left-[16px]" />
        </WhiteOval>

        {/* Sessão 5 - Ingressos */}
        <section id="quero-participar" className="relative flex flex-col items-center pt-[58px] pb-[84px]">
          <h2 className="text-center text-[31px] font-bold leading-[35px] text-white">
            Quero participar<br />
            do evento
          </h2>

          <div className="mt-[30px] flex flex-col items-center gap-[8px]">
            {tickets.map((ticket) => (
              <AccordionItem
                key={ticket.name}
                variant="gold"
                overlapContent
                defaultOpen={ticket.name === 'individual'}
                title={ticket.mobileTitle}
              >
                <TicketOption description={ticket.description} price={ticket.price} href={ticket.href} ctaText={ticket.ctaText} />
              </AccordionItem>
            ))}
          </div>

          <ImpactNote className="mt-[30px] text-white" textSizeClassName="text-[12px] leading-[16px]" />

          <div className="relative mt-[29px] flex w-full justify-center">
            <CTAButton variant="gold" href={TICKETS_SECTION_ANCHOR}>
              Garantir meu ingresso
            </CTAButton>
            <PlusGold size={66} className="top-[27px] -right-[12px]" />
          </div>
        </section>

        {/* Sessão 6 - Depoimentos */}
        <section className="relative flex flex-col items-center mt-[5px] pb-[89px]">
          <h2 className="text-center text-[31px] font-bold leading-[35px] text-white">
            Quem participou<br />
            recomenda
          </h2>

          <div className="mt-[44px] flex flex-col items-center gap-[18px]">
            {/* DEPOIMENTO 1 */}
            <div className="w-[270px] min-h-[215px] border-[2px] border-[#FDE08B] rounded-[20px] p-[20px] flex flex-col justify-between bg-[#003870]">
              <p className="text-[11px] font-normal leading-[16px] text-white">
                “A Pulse Mais foi meu ponto de virada quando eu não sabia para onde ir. Conectar com histórias semelhantes me fez ver que eu não estava desamparado, e a mentoria foi o suporte essencial para me manter firme. Definir essa vivência em uma única palavra é falar de esperança: a certeza renovada no potencial dos jovens.”
              </p>
              <div className="mt-[15px] flex items-center gap-[12px]">
                {/* Imagem com wrapper para ficar perfeitamente redonda */}
                <div className="relative w-[50px] h-[50px] rounded-full overflow-hidden shrink-0">
                  <Image src="/assents/images/foto-luiz.jpeg" alt="Luiz Felipe" fill className="object-cover" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[12px] font-bold text-white">Luiz Felipe Gonçalves</span>
                  <span className="text-[10px] font-light text-white leading-[12px] mt-1">Aluno formado pela<br />Pulse Mais</span>
                </div>
              </div>
            </div>

            {/* DEPOIMENTO 2 */}
            <div className="w-[270px] min-h-[215px] border-[2px] border-[#FDE08B] rounded-[20px] p-[20px] flex flex-col justify-between bg-[#003870]">
              <p className="text-[11px] font-normal leading-[16px] text-white">
                “O que mais me marcou foi a energia das conexões no ambiente. Foi incrível reencontrar amigos da comunidade de tecnologia e, ao mesmo tempo, conhecer muita gente nova e engajada.”
              </p>
              <div className="mt-[15px] flex items-center gap-[12px]">
                {/* Imagem com wrapper para ficar perfeitamente redonda */}
                <div className="relative w-[50px] h-[50px] rounded-full overflow-hidden shrink-0">
                  <Image src="/assents/images/foto-domingos.jpeg" alt="Domingos Bruno" fill className="object-cover" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[12px] font-bold text-white">Domingos Bruno</span>
                  <span className="text-[10px] font-light text-white leading-[12px] mt-1">Mentor formado pela<br />Pulse Mais</span>
                </div>
              </div>
            </div>

            {/* DEPOIMENTO 3 */}
            <div className="w-[270px] min-h-[215px] border-[2px] border-[#FDE08B] rounded-[20px] p-[20px] flex flex-col justify-between bg-[#003870]">
              <p className="text-[11px] font-normal leading-[16px] text-white">
                “O que mais me marcou foram as histórias compartilhadas ao longo do evento. Para mim, o Pulsar não é apenas um evento qualquer, mas sim um espaço para mostrar o real impacto que a Pulse Mais vem causando nas vidas de jovens ao longo dos anos, inclusive na minha história.”
              </p>
              <div className="mt-[15px] flex items-center gap-[12px]">
                {/* Imagem com wrapper para ficar perfeitamente redonda */}
                <div className="relative w-[50px] h-[50px] rounded-full overflow-hidden shrink-0">
                  <Image src="/assents/images/foto-eyshilla.jpeg" alt="Eyshilla Lima" fill className="object-cover" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[12px] font-bold text-white">Eyshilla Lima</span>
                  <span className="text-[10px] font-light text-white leading-[12px] mt-1">Aluna formada pela<br />Pulse Mais</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sessão 7 - Empresas Patrocinadoras */}
  
        <section className="w-full flex flex-col items-center mt-[5px] pb-[89px] px-4">
          <h2 className="text-[31px] font-bold text-white text-center leading-tight">
            Empresas <br /> Patrocinadoras
          </h2>

          <div className="flex flex-wrap justify-center gap-[20px] mt-[40px] max-w-[350px]">
            {sponsors.map((sponsor, index) => (
              <div 
                key={index} 
                className="w-[100px] h-[100px] bg-white rounded-[10px] flex items-center justify-center relative p-[10px]"
              >
                <div className="relative w-full h-full">
                  <Image 
                    src={sponsor.logo} 
                    alt={sponsor.name} 
                    fill 
                    className="object-contain" 
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sessão 8 - Footer */}
        <FooterMobile variant="blue" />
      </main>

      {/* ========================================================
          VERSÃO DESKTOP (hidden md:block)
      ========================================================= */}
      <main className="hidden md:block w-full overflow-hidden bg-[#003870]">      

        <section className="relative w-full flex flex-col items-center pt-[100px] pb-[80px] px-6">
          <div aria-hidden className="absolute inset-0 overflow-hidden">
            <Image
              src="/assents/backgrounds/evento-pulsar-m1.png"
              alt=""
              fill
              priority
              className="object-cover opacity-10 grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#003870] z-10"></div>
          </div>

          <h1 className="relative w-[700px] max-w-full h-[280px] z-20">
            <span className="sr-only">Pulsar - Edição 2027</span>
            <Image src="/assents/brand/pulsar-logo.svg" alt="" fill priority className="object-contain" />
          </h1>
          
          <p className="relative z-20 text-center text-[24px] leading-[34px] text-white mt-8">
            Onde as conexões que transformam  <br />
            o futuro do trabalho acontecem<br />
          </p>
          
          {/* ✨ AJUSTE: href atualizado para a âncora do desktop */}
          <CTAButton variant="gold-lg" href={TICKETS_ANCHOR_DESKTOP} className="relative z-20 mt-[50px]">
            Quero estar no Pulsar
          </CTAButton>

          <PlusGold size={150} className="top-[60px] right-[10%] opacity-80 z-20" />
          <PlusGold size={100} className="top-[250px] right-[40px] opacity-60 z-20" />
          <PlusGold size={120} className="bottom-[40px] left-[10%] opacity-80 z-20" />
        </section>

        <section className="relative w-full max-w-[1440px] mx-auto px-6 py-[80px]">
          <div className="flex flex-row justify-center items-start gap-[80px]">
            <Image
              src="/assents/backgrounds/evento-pulsar-d1.png"
              alt="Convidados em networking"
              width={441}
              height={580}
              className="w-[441px] h-[580px] rounded-[24px] object-cover shadow-2xl"
            />
            <div className="flex flex-col w-[590px]">
              <p className="text-[20px] font-normal leading-[34px] text-white">
                No Pulsar, diferentes trajetórias se encontram à mesma mesa: jovens talentos, mentores, líderes e empresas que estão construindo, abrindo caminhos e transformando o mercado de trabalho.
              </p>
              <p className="mt-10 text-[20px] font-normal leading-[34px] text-white">
               Entre conversas, experiências e novas conexões, surgem oportunidades que podem ampliar horizontes e transformar trajetórias.
              </p>
              <p className="mt-10 text-[20px] font-normal leading-[34px] text-white">
               Mais do que um jantar, o Pulsar é um encontro com propósito, uma celebração das pessoas e das possibilidades que nascem quando talentos e oportunidades se encontram.
              </p>
              <p className="mt-10 text-[20px] font-normal leading-[34px] text-white">
                Faça parte dessa mesa.
              </p>
              
              <div className="mt-[80px]">
               
                <CTAButton variant="gold-lg" href={TICKETS_ANCHOR_DESKTOP}>
                  Quero viver essa experiência
                </CTAButton>
              </div>
            </div>
          </div>
        </section>

        {/* sessao 3  */}
        <section className="relative w-full max-w-[1440px] mx-auto px-6 pb-[100px]">
          <div className="flex flex-row flex-wrap justify-center gap-[30px]">
            {experiences.map((item) => (
              <div
                key={item.title}
                className="w-[280px] h-[300px] p-[3px] rounded-[24px] bg-gradient-to-br from-[#FDE08B] via-[#D4AF37] to-[#B38D1E]"
              >
                <div className="w-full h-full rounded-[21px] bg-[#003870] flex flex-col items-center justify-center text-center px-6">
                  <h3 className="text-[28px] font-bold uppercase text-white tracking-wide">{item.title}</h3>
                  <p className="mt-[16px] text-[18px] leading-[24px] text-white/80">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

            {/* ✨ NOVO: Programação da noite (Desktop) - Ajustado */}
         <div className="relative mt-[40px] w-full max-w-[1085px] mx-auto p-[3px] rounded-[24px] bg-gradient-to-br from-[#FDE08B] via-[#D4AF37] to-[#B38D1E] z-10">
            <div className="w-full h-full min-h-[344px] rounded-[21px] bg-[#003870] flex flex-col items-center justify-center px-[80px] py-[50px]">
              <h3 className="text-[48px] font-bold leading-[1.2] text-white mb-[35px] text-center">
                Programação da noite
              </h3>
              <ul className="flex flex-col gap-[16px] text-white text-[24px] font-normal leading-[1.5] w-fit mx-auto text-left">
                <li>18h30 | Welcome Cocktail & Conexões Estratégicas</li>
                <li>19h15 | Abertura</li>
                <li>19h35 | Talk Exclusivo & Histórias de Impacto</li>
                <li>21h00 | Mobilização, Encerramento & Networking</li>
              </ul>
            </div>
          </div>

        </section>

        <section className="relative w-full">
          <div className="absolute inset-0 top-[250px] bg-white z-0"></div>

          <div className="relative z-10 flex flex-row justify-center gap-[20px] max-w-[1440px] mx-auto px-6">
            {eventPhotos.map((src) => (
              <Image key={src} src={src} alt="Momento do Pulsar" width={280} height={500} className="w-[280px] h-[500px] object-cover rounded-[24px] shadow-2xl" />
            ))}
          </div>

          <div className="relative z-10 flex flex-col items-center pt-[80px] pb-[80px] px-6">
            <div className="flex flex-row items-center justify-center">
              <div className="flex items-center">
                <Image src="/assents/backgrounds/calendar-gold.svg" alt="" width={40} height={40} />
                <p className="ml-[15px] text-[20px] font-bold leading-[26px] text-[#003870]">
                  01 de março de 2027<br />18h30 às 22h
                </p>
              </div>

              <div className="w-px h-[60px] bg-[#003870]/30 mx-[80px]" />

              <div className="flex items-center">
                <Image src="/assents/backgrounds/location-gold.svg" alt="" width={35} height={40} />
                <p className="ml-[18px] text-[20px] font-bold leading-[26px] text-[#003870]">
                  Pobre Juan<br />Rua Itaguaba, 38 <br /> Unidade Higienópolis
                </p>
              </div>
            </div>

            <ImpactNote className="mt-[50px] max-w-[800px] text-[#003870] text-center" textSizeClassName="text-[18px] leading-[26px] font-medium" />

            {/* ✨ AJUSTE: href atualizado para a âncora do desktop */}
            <CTAButton variant="gold-lg" href={TICKETS_ANCHOR_DESKTOP} className="mt-[40px]">
              Escolher meu ingresso
            </CTAButton>
          </div>
        </section>

        {/* ✨ AJUSTE: ID Exclusivo para Desktop para evitar o bug do clique */}
        <section id="quero-participar-desktop" className="relative w-full max-w-[1440px] mx-auto px-6 pt-[80px] pb-[90px]">
          <h2 className="text-center text-[48px] font-extrabold text-white">Quero participar do evento</h2>

          <TicketsGridDesktop
            className="mt-[60px]"
            pinned="individual"
            tickets={tickets.map((t) => ({
              name: t.name,
              title: t.desktopTitle,
              subtitle: t.subtitle,
              description: t.description,
              price: t.price,
              href: t.href,
              ctaText: t.ctaText,
            }))}
          />

          <ImpactNote className="mt-[80px] max-w-[800px] mx-auto text-white text-center" textSizeClassName="text-[18px] leading-[26px] font-medium" />

          <div className="flex justify-center mt-[50px]">
      
            <CTAButton variant="gold-lg" href={TICKETS_ANCHOR_DESKTOP}>
              Garantir meu ingresso
            </CTAButton>
          </div>
        </section>

        {/* Sessão 6 - Depoimentos (Desktop) */}
        <section className="relative w-full max-w-[1440px] mx-auto px-6 pt-[60px] pb-[100px]">
          <h2 className="text-center text-[48px] font-extrabold text-white mb-[80px]">
            Quem participou recomenda
          </h2>

          {/* Container dos Cards com gap de 44px */}
          <div className="flex flex-row flex-wrap justify-center gap-[44px]">
            
            {/* DEPOIMENTO 1 */}
            <div className="w-[414px] h-[536px] p-[5px] rounded-[30px] bg-gradient-to-br from-[#FDE08B] via-[#D4AF37] to-[#B38D1E]">
              {/* flex-col com h-full garante que o card use todo o espaço */}
              <div className="w-full h-full rounded-[25px] bg-[#003870] flex flex-col px-[40px] pt-[50px] pb-[40px]">
                {/* ✨ AJUSTE: flex-1 empurra a foto lá para baixo; texto reduzido para 14px */}
                <div className="flex-1">
                  <p className="text-[14px] font-normal leading-[1.6] text-white text-left">
                    “A Pulse Mais foi meu ponto de virada quando eu não sabia para onde ir. Conectar com histórias semelhantes me fez ver que eu não estava desamparado, e a mentoria foi o suporte essencial para me manter firme. Definir essa vivência em uma única palavra é falar de esperança: a certeza renovada no potencial dos jovens.”
                  </p>
                </div>
                {/* shrink-0 garante que este bloco de baixo nunca seja esmagado */}
                <div className="flex flex-col items-center shrink-0">
                  <div className="relative w-[120px] h-[120px] rounded-full overflow-hidden shrink-0 mb-[16px]">
                    <Image src="/assents/images/foto-luiz.jpeg" alt="Luiz Felipe" fill className="object-cover" />
                  </div>
                  <span className="text-[20px] font-bold text-white text-center">Luiz Felipe Gonçalves</span>
                  <span className="text-[15px] font-light text-white text-center leading-[1.3] mt-[4px]">Aluno formado pela<br />Pulse Mais</span>
                </div>
              </div>
            </div>

            {/* DEPOIMENTO 2 */}
            <div className="w-[414px] h-[536px] p-[5px] rounded-[30px] bg-gradient-to-br from-[#FDE08B] via-[#D4AF37] to-[#B38D1E]">
              <div className="w-full h-full rounded-[25px] bg-[#003870] flex flex-col px-[40px] pt-[50px] pb-[40px]">
                <div className="flex-1">
                  <p className="text-[15px] font-normal leading-[1.6] text-white text-left">
                    “O que mais me marcou foi a energia das conexões no ambiente. Foi incrível reencontrar amigos da comunidade de tecnologia e, ao mesmo tempo, conhecer muita gente nova e engajada.”
                  </p>
                </div>
                <div className="flex flex-col items-center shrink-0">
                  <div className="relative w-[120px] h-[120px] rounded-full overflow-hidden shrink-0 mb-[16px]">
                    <Image src="/assents/images/foto-domingos.jpeg" alt="Domingos Bruno" fill className="object-cover" />
                  </div>
                  <span className="text-[20px] font-bold text-white text-center">Domingos Bruno</span>
                  <span className="text-[15px] font-light text-white text-center leading-[1.3] mt-[4px]">Mentor formado pela<br />Pulse Mais</span>
                </div>
              </div>
            </div>

            {/* DEPOIMENTO 3 */}
            <div className="w-[414px] h-[536px] p-[5px] rounded-[30px] bg-gradient-to-br from-[#FDE08B] via-[#D4AF37] to-[#B38D1E]">
              <div className="w-full h-full rounded-[25px] bg-[#003870] flex flex-col px-[40px] pt-[50px] pb-[40px]">
                <div className="flex-1">
                  <p className="text-[15px] font-normal leading-[1.6] text-white text-left">
                    “O que mais me marcou foram as histórias compartilhadas ao longo do evento. Para mim, o Pulsar não é apenas um evento qualquer, mas sim um espaço para mostrar o real impacto que a Pulse Mais vem causando nas vidas de jovens ao longo dos anos, inclusive na minha história.”
                  </p>
                </div>
                <div className="flex flex-col items-center shrink-0">
                  <div className="relative w-[120px] h-[120px] rounded-full overflow-hidden shrink-0 mb-[16px]">
                    <Image src="/assents/images/foto-eyshilla.jpeg" alt="Eyshilla Lima" fill className="object-cover" />
                  </div>
                  <span className="text-[20px] font-bold text-white text-center">Eyshilla Lima</span>
                  <span className="text-[15px] font-light text-white text-center leading-[1.3] mt-[4px]">Aluna formada pela<br />Pulse Mais</span>
                </div>
              </div>
            </div>

          </div>
        </section>

      {/* Sessão 7 - Empresas Patrocinadoras (Desktop) */}
        <section className="relative w-full mt-[74px] px-6 pb-[100px]">
          <div className="max-w-[1216px] mx-auto flex flex-col items-center">
             <h2 className="text-[48px] font-bold text-white text-center">Empresas Patrocinadoras</h2>
             
             <div className="mt-[50px] flex flex-wrap justify-center gap-[40px] w-full">
                {sponsors.map((sponsor, index) => (
                   <div 
                     key={index} 
                     className="w-[380px] h-[200px] bg-white rounded-[15px] flex items-center justify-center relative p-[30px]"
                   >
                      <div className="relative w-full h-full">
                        <Image 
                          src={sponsor.logo} 
                          alt={sponsor.name} 
                          fill 
                          className="object-contain" 
                        />
                      </div>
                   </div>
                ))}
             </div>
          </div>
        </section>

        <FooterDesktop variant="blue" />
      </main>
    </>
  )
}