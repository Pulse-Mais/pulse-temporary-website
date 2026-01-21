'use client'

import { 
  HeaderMobile, 
  FooterMobile, 
  CTAButton, 
  Image, 
  Link 
} from "@/app/_local-components/index"

// Dados dos Parceiros (Section 2.4)
const partners = [
 { name: 'Partner 3', logo: '/assents/logos/magrini-logo.svg' },
 { name: 'Partner 4', logo: '/assents/logos/fiap-logo.svg' },
 { name: 'Partner 5', logo: '/assents/logos/adega-logo.svg' },
// { name: 'Partner 6', logo: '/assents/logos/sap-logo.svg' },
 { name: 'Partner 7', logo: '/assents/logos/pub-logo.svg' },
 { name: 'Partner 8', logo: '/assents/logos/alura-logo.svg' },
 { name: 'Partner 9', logo: '/assents/logos/logo-italo.svg' },
 { name: 'Partner 10', logo: '/assents/logos/c-levels-logo.svg' },
 { name: 'Partner 11', logo: '/assents/logos/fellipelli.svg' },
 { name: 'Partner 11', logo: '/assents/logos/italo-para.svg' }

 
]

// Dados dos Patrocinadores (Section 2.5)
const sponsors = [
  { name: 'sponsor 1', logo: '/assents/logos/ClearIt.svg' },
  { name: 'sponsor 2', logo: '/assents/logos/clm.svg' },
  { name: 'sponsor 3', logo: '/assents/logos/simpress.svg' },
  { name: 'sponsor 4', logo: '/assents/logos/matza.svg' },
  { name: 'sponsor 5', logo: '/assents/logos/fellipelli.svg' },
  { name: 'sponsor 6', logo: '/assents/logos/StIt.svg' },
  { name: 'sponsor 7', logo: '/assents/logos/reclame-aqui.svg' }
]

export default function Transparencia() {
  return (
    <>
      {/* ==================================================================
          VERSÃO MOBILE (block md:hidden)
          Baseado na documentação: transparencia.mobile.md
      ================================================================== */}
      <div className="block md:hidden w-full overflow-x-hidden bg-white">
        
        {/* 2.1 Header Mobile */}
        <HeaderMobile />

        {/* 2.2 Hero Section */}
        {/* Margem superior para compensar header fixo (ajuste conforme altura do seu header) */}
        <section className="w-full flex justify-center mt-[124px] px-4">
          <div className="relative w-[300px] h-[256px]">
            <Image
              src="/assents/images/transparencia-hero-mobile.png"
              alt="Transparência Hero"
              fill
              className="object-contain"
            />
          </div>
        </section>

        {/* 2.3 Seção "Relatórios de Atividades" */}
        <section className="w-full flex flex-col items-center mt-[43px] px-4">
          <h1 className="text-[40px] font-bold text-[#003870] text-center leading-tight">
            Relatórios de <br /> Atividades
          </h1>
          <p className="text-[16px] font-normal text-[#6B6D6E] text-center mt-[8px]">
            Acompanhe nossos resultados e <br /> prestação de contas
          </p>

          {/* Botões de Relatório */}
          <div className="flex flex-col gap-[24px] mt-[30px]">
            {/* Botão 1 */}
            <Link
              href="https://heyzine.com/flip-book/32d3cb5076.html"
              className="w-[300px] h-[64px] rounded-full flex items-center justify-center bg-gradient-to-r from-[#003870] to-[#25B957] text-white text-[32px] font-bold shadow-md hover:brightness-110 transition-all"
            >
              2022-23
            </Link>

            {/* Botão 2 */}
            <Link
              href="https://heyzine.com/flip-book/26394a3fa9.html"
              target="_blank"
              className="w-[300px] h-[64px] rounded-full flex items-center justify-center bg-gradient-to-r from-[#003870] to-[#25B957] text-white text-[32px] font-bold shadow-md hover:brightness-110 transition-all"
            >
              2024
            </Link>

            {/* Botão 3 - 2025 (Ajustado com duas linhas) */}
            <Link
              href="#"
              className="w-[300px] h-[64px] rounded-full flex flex-col items-center justify-center bg-gradient-to-r from-[#003870] to-[#25B957] text-white shadow-md hover:brightness-110 transition-all cursor-default opacity-90 leading-none"
            >
              {/* Ano em Negrito (Tamanho ajustado para caber) */}
              <span className="text-[28px] font-bold">2025</span>
              
              {/* "(em breve)" Normal e menor */}
              <span className="text-[14px] font-normal mt-1">(em breve)</span>
            </Link>
          </div>
        </section>

      

        {/* 2.4 Seção "Empresas Parceiras"  */}
        <section className="w-full flex flex-col items-center mt-[74px] px-4">
          <h2 className="text-[40px] font-bold text-[#003870] text-center leading-tight">
            Empresas <br /> Parceiras
          </h2>

          {/* Grid de Logos - Sem o card branco atrás */}
          <div className="flex flex-wrap justify-center gap-[20px] mt-[40px] max-w-[350px]">
            {partners.map((partner, index) => (
              <div 
                key={index} 

                className="w-[100px] h-[100px] flex items-center justify-center"
              >
                <div className="relative w-full h-full">
                  <Image 
                    src={partner.logo} 
                    alt={partner.name} 
                    fill 
                    className="object-contain" 
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 2.5 Seção "Empresas Patrocinadoras" */}
        <section className="w-full flex flex-col items-center mt-[74px] px-4">
          <h2 className="text-[40px] font-bold text-[#003870] text-center leading-tight">
            Empresas <br /> Patrocinadoras
          </h2>

          {/* Grid de Logos - Estilo Limpo (Sem Cards) */}
          <div className="flex flex-wrap justify-center gap-[20px] mt-[40px] max-w-[350px]">
            {sponsors.map((sponsor, index) => (
              <div 
                key={index} 
                
                className="w-[100px] h-[100px] flex items-center justify-center"
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

        {/* 2.6 Seção "Torne-se nosso parceiro" */}
        <section className="relative bg-white pt-[57px] pb-[48px] mt-[40px] overflow-hidden w-full">
          {/* Decoração: Plus Amarelo (Topo Direito) */}
          <div className="absolute right-0 top-0 translate-x-[30%] z-0 pointer-events-none">
            <Image 
              src="/assents/brand/plus-amarelo.svg" 
              alt="Decoration" 
              width={91} 
              height={127} 
              className="w-[91px] h-[127px]" 
            />
          </div>
          
          {/* Decoração: Plus Verde (Esquerda Baixo) */}
          <div className="absolute left-0 top-[60%] -translate-x-[30%] z-0 pointer-events-none">
            <Image 
              src="/assents/brand/plus-verde.svg" 
              alt="Decoration" 
              width={46} 
              height={64} 
              className="w-[46px] h-[64px]" 
            />
          </div>

          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-[48px] font-bold text-[#486284] text-center mx-auto w-[300px] leading-tight">
              Torne-se<br />nosso<br />parceiro.
            </h2>
            <div className="mt-[80px] flex justify-center">
              <CTAButton variant="gray" href="/apoie">Saiba Mais</CTAButton>
            </div>
          </div>
        </section>

        {/* 2.7 Footer Mobile */}
        <FooterMobile />
      </div>

      {/* VERSÃO DESKTOP (Placeholder) */}
      <div className="hidden md:block">
        {/* Implementação futura Desktop */}
        <p className="text-center py-20">Versão Desktop em desenvolvimento...</p>
      </div>
    </>
  )
}