'use client'

import { useState } from 'react'
import { 
  HeaderMobile, 
  FooterMobile, 
  HeaderDesktop, 
  FooterDesktop, 
  CTAButton, 
  Image, 
  Link 
} from "@/app/_local-components/index"

// =====================================================================
// DADOS (CONFIGURAÇÃO)
// =====================================================================

const partners = [
 { name: 'Partner 3', logo: '/assents/logos/magrini-logo.svg' },
 { name: 'Partner 4', logo: '/assents/logos/fiap-logo.svg' },
 { name: 'Partner 5', logo: '/assents/logos/adega-logo.svg',},
 // { name: 'Partner 6', logo: '/assents/logos/sap-logo.svg' },
 { name: 'Partner 7', logo: '/assents/logos/pub-logo.svg' },
 { name: 'Partner 8', logo: '/assents/logos/alura-logo.svg' },
 { name: 'Partner 9', logo: '/assents/logos/logo-italo.svg' },
 { name: 'Partner 10', logo: '/assents/logos/c-levels-logo.svg' },
 { name: 'Partner 11', logo: '/assents/logos/fellipelli.svg' },
 { name: 'Partner 12', logo: '/assents/logos/italo-para.svg' }
]

// Dados dos Patrocinadores (Section 2.5)
const sponsors = [
  { name: 'sponsor 1', logo: '/assents/logos/ClearIt.svg' },
  { name: 'sponsor 2', logo: '/assents/logos/clm.svg' },
  { name: 'sponsor 3', logo: '/assents/logos/simpress.svg' },
  { name: 'sponsor 4', logo: '/assents/logos/matza.svg'},
  { name: 'sponsor 5', logo: '/assents/logos/fellipelli.svg' },
  { name: 'sponsor 6', logo: '/assents/logos/StIt.svg' },
  { name: 'sponsor 7', logo: '/assents/logos/reclame-aqui.svg' }
]

export default function Transparencia() {
  // Estados para controlar o botão "Veja Mais" na versão Desktop
  const [isPartnersExpanded, setIsPartnersExpanded] = useState(false)
  const [isSponsorsExpanded, setIsSponsorsExpanded] = useState(false)

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
              target="_blank"
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
              <span className="text-[28px] font-bold">2025</span>
              <span className="text-[14px] font-normal mt-1">(em breve)</span>
            </Link>
          </div>
        </section>

        {/* 2.4 Seção "Empresas Parceiras" */}
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

      {/* ==================================================================
          VERSÃO DESKTOP (hidden md:block)
          Baseado na documentação: transparencia.desktop.md
      ================================================================== */}
      <div className="hidden md:block w-full">
        <HeaderDesktop />

        {/* 2.2 Hero Desktop */}
        <section className="w-full max-w-[1440px] mx-auto mt-[55px] px-6">
          <Image
            src="/assents/images/transparencia-hero-desktop.png"
            alt="Hero Transparência Desktop"
            width={1200}
            height={465}
            className="w-full max-w-[1200px] h-[465px] object-cover rounded-[24px] mx-auto"
          />
        </section>

        {/* 2.3 Relatórios Desktop */}
        <section className="w-full mt-[90px] px-6">
          <div className="max-w-[1216px] mx-auto flex flex-col items-center">
            <h2 className="text-[60px] font-bold text-[#003870] text-center">Relatórios de Atividades</h2>
            <p className="text-[32px] font-normal text-[#6B6D6E] text-center mt-[30px]">
              Acompanhe nossos resultados e prestação de contas
            </p>

            <div className="flex flex-row justify-center gap-[40px] mt-[60px] w-full flex-wrap">
               {/* Card 1 - 2022-23 */}
               <div className="flex flex-col items-center gap-[16px]">
                  <Link href="https://heyzine.com/flip-book/32d3cb5076.html" target="_blank" className="relative w-[373px] h-[259px] rounded-[24px] overflow-hidden group">
                    <Image src="/assents/images/pilar-img.png" alt="BG Card" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <span className="text-white text-[62px] font-bold">2022-23</span>
                    </div>
                  </Link>
                  <Link href="https://heyzine.com/flip-book/32d3cb5076.html" target="_blank" className="text-[20px] text-[#6B6D6E] underline hover:text-[#003870]">Acesse</Link>
               </div>

               {/* Card 2 - 2024 */}
               <div className="flex flex-col items-center gap-[16px]">
                  <Link href="https://heyzine.com/flip-book/26394a3fa9.html" target="_blank" className="relative w-[373px] h-[259px] rounded-[24px] overflow-hidden group">
                    <Image src="/assents/images/pilar-img.png" alt="BG Card" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <span className="text-white text-[62px] font-bold">2024</span>
                    </div>
                  </Link>
                  <Link href="https://heyzine.com/flip-book/26394a3fa9.html" target="_blank" className="text-[20px] text-[#6B6D6E] underline hover:text-[#003870]">Acesse</Link>
               </div>

               {/* Card 3 - 2025 (Em breve) */}
               <div className="flex flex-col items-center gap-[16px]">
                  <div className="relative w-[373px] h-[259px] rounded-[24px] overflow-hidden cursor-default">
                    <Image src="/assents/images/pilar-img.png" alt="BG Card" fill className="object-cover" />
                    <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center">
                      <span className="text-white text-[62px] font-bold leading-none">2025</span>
                      <span className="text-white text-[32px] font-normal mt-2">(em breve)</span>
                    </div>
                  </div>
                  <span className="text-[20px] text-[#6B6D6E] underline opacity-50 cursor-not-allowed">Acesse</span>
               </div>
            </div>
          </div>
        </section>

        {/* 2.4 Parceiros Desktop */}
        <section className="w-full mt-[74px] px-6">
          <div className="max-w-[1216px] mx-auto flex flex-col items-center">
             <h2 className="text-[48px] font-bold text-[#003870] text-center">Empresas Parceiras</h2>
             
             {/* Grid */}
             <div className="mt-[50px] grid grid-cols-3 gap-[84px]">
                {partners.slice(0, isPartnersExpanded ? partners.length : 6).map((partner, index) => (
                   <div key={index} className="w-[343px] h-[232px] rounded-[25px] flex items-center justify-center relative">
                      {/* Logo contida (Estilo Clean conforme Mobile) */}
                      <div className="relative w-full h-full p-4">
                        <Image src={partner.logo} alt={partner.name} fill className="object-contain" />
                      </div>
                   </div>
                ))}
             </div>

             {/* Botão Veja Mais */}
             {partners.length > 6 && !isPartnersExpanded && (
               <button 
                  onClick={() => setIsPartnersExpanded(true)}
                  className="mt-[60px] w-[184px] h-[66px] rounded-[50px] border border-[#003870] text-[#003870] text-[18px] font-bold hover:bg-[#33B458] hover:text-white hover:border-[#33B458] transition-all"
               >
                 Veja mais
               </button>
             )}
          </div>
        </section>

        {/* 2.5 Patrocinadores Desktop */}
        <section className="w-full mt-[74px] px-6">
          <div className="max-w-[1216px] mx-auto flex flex-col items-center">
             <h2 className="text-[48px] font-bold text-[#003870] text-center">Empresas Patrocinadoras</h2>
             
             {/* Grid */}
             <div className="mt-[50px] grid grid-cols-3 gap-[84px]">
                {sponsors.slice(0, isSponsorsExpanded ? sponsors.length : 6).map((sponsor, index) => (
                   <div key={index} className="w-[343px] h-[232px] rounded-[25px] flex items-center justify-center relative">
                      <div className="relative w-full h-full p-4">
                        <Image src={sponsor.logo} alt={sponsor.name} fill className="object-contain" />
                      </div>
                   </div>
                ))}
             </div>

             {/* Botão Veja Mais */}
             {sponsors.length > 6 && !isSponsorsExpanded && (
               <button 
                  onClick={() => setIsSponsorsExpanded(true)}
                  className="mt-[60px] w-[184px] h-[66px] rounded-[50px] border border-[#003870] text-[#003870] text-[18px] font-bold hover:bg-[#33B458] hover:text-white hover:border-[#33B458] transition-all"
               >
                 Veja mais
               </button>
             )}
          </div>
        </section>

        {/* 2.6 Seção Apoio ("Quero apoiar") */}
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
              <Link href="https://mailchi.mp/pulsemais/mentores-turma3">
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

        <FooterDesktop />
      </div>
    </>
  )
}