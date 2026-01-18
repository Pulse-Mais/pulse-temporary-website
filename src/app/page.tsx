import { Image, Link, CTAButton, HeaderMobile, AccordionItem, HeaderDesktop, HeroCarouselDesktop, GridPrograms, PartnersCarousel, FooterDesktop, FooterMobile } from "@/app/_local-components/index"
import {BookOpenText, ChalkboardTeacher, Student, UsersFour, LinkedinLogo, Button, ProfileIcon, DepoimentCarrousel, InfiniteSlider, Info} from "@/app/_local-components/index"

export default function Home() {
  // Dados dos cards de acordeão
  const accordionData = [
    {
      title: "Experiências de Mentorias de Curta Duração",
      content: `<strong>Formato:</strong> Online ou Presencial em São Paulo<br/><strong>Benefícios:</strong><br/>- Clareza sobre temas de carreira<br/>- Rede profissional ampliada<br/>- Aumento de repertório`
    },
    {
      title: "Eventos em Empresas de Tecnologia",
      content: `<strong>Formato:</strong> Presencial em São Paulo<br/><strong>Benefícios:</strong><br/>- Palestras inspiradoras<br/>- Conheça profissionais do mercado<br/>- Novos horizontes de carreira`
    },
    {
      title: "Programa Pulse Mais",
      content: `<strong>Formato:</strong> Online ou Híbrido (Presencial/Online)<br/><strong>Dedicação:</strong> 6 meses<br/><strong>Benefícios:</strong><br/>- Formação técnica e comportamental completa<br/>- Computador/Notebook gratuito<br/>- Vagas de emprego e bolsas de estudos para faculdade`
    },
    {
      title: "Programa de Mentoria",
      content: `<strong>Formato:</strong> (online/híbrido/presencial)<br/><strong>Dedicação:</strong> 4 meses<br/><strong>Benefícios:</strong><br/>- Direcionamento de carreira individualizado<br/>- Preparação para o mercado de trabalho<br/>- Vagas de emprego e bolsas de estudos para faculdade`
    }
  ]

  return (
    <>
      {/* ========== VERSÃO MOBILE (vfinal) - Visível apenas em mobile ========== */}
      <div className="md:hidden w-full overflow-x-hidden">
        {/* 2.1 Header */}
        <HeaderMobile />

        {/* 2.2 Hero Section */}
        <section className="relative w-full h-[482px] mt-[124px] overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/assents/youngers/hero-young-man.png"
              alt="Jovem Pulsante"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content Overlay */}
          <div className="relative h-full flex flex-col items-center pt-[122px] px-4">
            <h1 className="text-[32px] font-extrabold text-[#FCC41F] text-center">
              Venha ser um jovem Pulsante
            </h1>
            <p className="text-[16px] font-normal text-white mt-[8px] text-center max-w-[300px]">
              Tem entre 17 à 26 anos? Este pode ser o começo da sua jornada no mundo da tecnologia.
            </p>
            <div className="mt-[24px]">
              <CTAButton variant="hero" href="https://preinscricao.pulsemais.org.br/2025">
                Cadastre-se
              </CTAButton>
            </div>
          </div>
        </section>

        {/* 2.3 Seção "Quem Somos" */}
        <section className="relative bg-white pt-[48px] pb-[48px] overflow-hidden">
          {/* Elementos Decorativos */}
          <div className="absolute right-0 top-[26px] w-[91px] h-[127px] z-0">
            <Image
              src="/assents/brand/plus-amarelo.svg"
              alt="Decoration"
              width={91}
              height={127}
              className="w-full h-full"
            />
          </div>
          <div className="absolute right-0 top-[160px] w-[46px] h-[64px] z-0">
            <Image
              src="/assents/brand/plus-verde.svg"
              alt="Decoration"
              width={46}
              height={64}
              className="w-full h-full"
            />
          </div>

          {/* Conteúdo */}
          <div className="relative z-10">
            <h2 className="text-[16px] font-bold text-[#003870] text-left ml-[30px]">
              Quem somos
            </h2>
            <p className="text-[20px] font-light text-[#6B6D6E] mt-[32px] ml-[30px] max-w-[268px]">
              A Pulse Mais é uma organização sem fins lucrativos, fundada em 2022, que tem o propósito de impulsionar a carreira de jovens talentos de baixa renda no mundo profissional e em tecnologia.
            </p>
            <div className="mt-[48px] flex justify-center">
              <CTAButton variant="outline" href="/sobre">
                Saiba mais
              </CTAButton>
            </div>
          </div>
        </section>

        {/* 2.4 e 2.5 Seção "É jovem? Saiba como participar" com Cards */}
        <section 
          className="relative w-full min-h-[1000px] bg-[#0F2849] pt-[100px] pb-[100px] overflow-hidden"
          style={{
            clipPath: 'polygon(0 50px, 100% 0, 100% 100%, 0 calc(100% - 50px))'
          }}
        >
          {/* Título */}
          <div className="ml-[30px] mt-[89px]">
            <h2 className="text-[40px] font-bold text-white">
              É jovem?
            </h2>
            <h3 className="text-[24px] font-medium text-white mt-2">
              Saiba como participar
            </h3>
          </div>

          {/* Cards de Acordeão */}
          <div className="flex flex-col items-center gap-[25px] mt-10">
            {accordionData.map((item, index) => (
              <AccordionItem
                key={index}
                title={item.title}
                content={item.content}
              />
            ))}
          </div>

          {/* Botões Finais */}
          <div className="flex flex-col items-center mt-[62px] gap-[13px]">
            <CTAButton variant="yellow" href="https://preinscricao.pulsemais.org.br/2025">
              Cadastre-se
            </CTAButton>
            <CTAButton variant="green" href="/apoie">
              Torne nosso Parceiro
            </CTAButton>
          </div>
        </section>

        {/* 2.6 Torne-se nosso parceiro */}
        <section className="relative bg-white pt-[57px] pb-[48px] overflow-hidden">
          {/* Elementos Decorativos */}
          <div className="absolute right-0 top-0 translate-x-[30%] z-0 pointer-events-none">
            <Image
              src="/assents/brand/plus-amarelo.svg"
              alt="Decoration"
              width={91}
              height={127}
              className="w-full h-full"
            />
          </div>
          <div className="absolute left-0 top-[60%] -translate-x-[30%] z-0 pointer-events-none">
            <Image
              src="/assents/brand/plus-verde.svg"
              alt="Decoration"
              width={46}
              height={64}
              className="w-full h-full"
            />
          </div>

          {/* Conteúdo */}
          <div className="relative z-10">
            <h2 className="text-[48px] font-bold text-[#486284] text-center mx-auto w-[300px] h-[156px]">
              Torne-se<br />nosso<br />parceiro.
            </h2>
            <div className="mt-[80px] flex justify-center">
              <CTAButton variant="gray" href="/apoie">
                Saiba Mais
              </CTAButton>
            </div>
          </div>
        </section>

        {/* 2.7 Footer Mobile */}
        <FooterMobile />
      </div>

      {/* ========== VERSÃO DESKTOP - Visível apenas em desktop ========== */}
      <div className="hidden md:block w-full">
        {/* 3.1 Header Desktop */}
        <HeaderDesktop />

        {/* 3.2 Hero Section (Carousel) */}
        <HeroCarouselDesktop />

        {/* 3.3 Seção "Quem Somos" */}
        <section className="w-full bg-white pt-[110px] pb-[110px]">
          <div className="max-w-[1440px] mx-auto px-[121px]">
            <div className="grid grid-cols-2 gap-[87px] items-center">
              {/* Coluna Esquerda (Visual) */}
              <div>
                <Image
                  src="/assents/images/quemsomos-image.png"
                  alt="Quem Somos"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>

              {/* Coluna Direita (Texto) */}
              <div className="flex flex-col">
                <h2 className="text-[60px] font-bold text-[#003870] mb-6">
                  Quem somos
                </h2>
                <p className="text-[20px] font-normal text-[#6B6D6E] w-[445px] h-[160px] mb-8">
                  A Pulse Mais é uma organização sem fins lucrativos, fundada em 2022, que tem o propósito de impulsionar a carreira de jovens talentos de baixa renda no mundo profissional e em tecnologia.
                </p>
                <Link href="/sobre">
                  <button
                    className="border border-[#003870] text-[#003870] rounded-[50px] font-bold hover:bg-[#33B458] hover:text-white hover:border-[#33B458] transition-all duration-300"
                    style={{ width: '132px', height: '50px' }}
                  >
                    Saiba mais
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 3.4 Seção Programas ("É jovem?") */}
        <GridPrograms />

        {/* 3.5 Seção Parceiros */}
        <PartnersCarousel />

        {/* 3.6 Seção Apoio ("Quero apoiar") */}
        <section className="w-full py-16 flex justify-center">
          <div
            className="relative w-[1205px] h-[292px] rounded-[15px] overflow-hidden flex flex-col items-center justify-center"
            style={{
              backgroundImage: "url('/assents/images/queroapoiar-img.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <h2 className="text-[65px] font-bold text-white text-center">
              Quero apoiar
            </h2>
            <div className="flex flex-row gap-[105px] mt-[30px]">
              <Link href="/apoie">
                <button
                  className="bg-transparent border border-white text-white text-[16px] font-bold rounded-[50px] hover:bg-white hover:text-[#003870] transition-all duration-300"
                  style={{ width: '313px', height: '51px' }}
                >
                  Seja Mentor Voluntário
                </button>
              </Link>
              <Link href="/apoie">
                <button
                  className="bg-transparent border border-white text-white text-[16px] font-bold rounded-[50px] hover:bg-white hover:text-[#003870] transition-all duration-300"
                  style={{ width: '313px', height: '51px' }}
                >
                  Torne-se nosso parceiro
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* 3.7 Footer Desktop */}
        <FooterDesktop />
      </div>
    </>
  )
}
