'use client'

import { 
  HeaderMobile, 
  FooterMobile, 
  HeaderDesktop, 
  FooterDesktop, 
  PartnersCarousel, 
  Image, 
  Link, 
  CTAButton 
} from "@/app/_local-components/index"

export default function Apoie() {
  // Função para scroll suave
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    <>
      {/* ========== VERSÃO MOBILE ========== */}
      <div className="block md:hidden w-full overflow-x-hidden" style={{ scrollBehavior: 'smooth' }}>
        {/* 2.1 Header Mobile */}
        <HeaderMobile />

        {/* 2.2 Hero Section (Imagem Simples) */}
        <section className="w-full flex justify-center mt-[124px] px-4">
          <Image
            src="/assents/images/apoie-hero.png"
            alt="Hero Apoie"
            width={300}
            height={256}
            className="w-full max-w-[300px] h-auto"
          />
        </section>

        {/* 2.3 Seção de Navegação ("Você já é parte do futuro...") */}
        <section className="w-full bg-white px-4 py-8">
          <h2 className="text-[36px] font-bold text-[#003870] text-center">
            Você já é parte <br />
            do futuro dos <br />
            jovens
          </h2>
          <p className="text-[16px] font-normal text-[#6B6D6E] text-center mt-2">
            Escolha como quer impulsionar <br />
            essa transformação
          </p>

          {/* Botões de Navegação */}
          <div className="flex flex-col items-center gap-[24px] mt-8">
            <button
              onClick={() => handleScrollTo('transforme')}
              className="w-[300px] h-[54px] bg-[#25B957] text-white text-[15px] font-extrabold rounded-full"
            >
              Quero ser doador(a)
            </button>
            <button
              onClick={() => handleScrollTo('mentor')}
              className="w-[300px] h-[54px] bg-[#25B957] text-white text-[15px] font-extrabold rounded-full"
            >
              Quero ser mentor(a)
            </button>
            <button
              onClick={() => handleScrollTo('invista')}
              className="w-[300px] h-[54px] bg-[#25B957] text-white text-[15px] font-extrabold rounded-full"
            >
              Quero ser empregar jovens
            </button>
            <button
              onClick={() => handleScrollTo('parceiro')}
              className="w-[300px] h-[54px] bg-[#25B957] text-white text-[15px] font-extrabold rounded-full"
            >
              Quero ser empresa patrocinadora
            </button>
          </div>
        </section>

        {/* 2.4 Seção "Transforme a vida de um jovem" */}
        <section
          id="transforme"
          // MUDANÇA: Troquei min-h-[450px] por h-[450px] fixo.
          // Isso força a sessão a ter a altura exata do design (360x450), 
          // garantindo que a imagem de fundo não estique demais verticalmente.
          className="relative w-full h-[450px] flex flex-col justify-center items-center text-center overflow-hidden"
        >
          {/* Imagem de Fundo */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/assents/images/apoie-transforme-bg.png"
              alt="Background Transforme"
              fill
              
              className="object-cover"
              // DICA: Se a cabeça das pessoas estiver cortando, você pode usar object-top
              // className="object-cover object-top" 
            />
            {/* Overlay escuro */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          {/* Conteúdo */}
          {/* MUDANÇA: Adicionei max-w-[300px] para garantir que o texto não fique muito largo em celulares maiores */}
          <div className="relative z-10 px-4 w-full max-w-[320px]">
            <h2 className="text-[32px] font-bold text-white leading-tight">
              Transforme a <br />
              vida de um <br />
              jovem
            </h2>
            <p className="text-[15px] font-normal text-white mt-[20px] leading-relaxed">
              A sua doação impulsiona a <br />
              carreira de um jovem através <br />
              do acesso à educação e <br />
              empregabilidade
            </p>

            {/* Botões de Ação */}
            <div className="flex flex-col items-center gap-[32px] mt-8">
              <button
                onClick={() => handleScrollTo('doacao-pontual')}
                className="w-[250px] h-[48px] bg-transparent border border-white rounded-[50px] text-[16px] font-bold text-white hover:bg-white hover:text-[#003870] transition-colors"
              >
                Doação Pontual
              </button>
              <button
                onClick={() => handleScrollTo('doacao-recorrente')}
                className="w-[250px] h-[48px] bg-transparent border border-white rounded-[50px] text-[16px] font-bold text-white hover:bg-white hover:text-[#003870] transition-colors"
              >
                Doação Recorrente
              </button>
            </div>
          </div>
        </section>

        {/* 2.5 Seção "Doação Pontual" */}
        <section id="doacao-pontual" className="w-full bg-white py-12 px-4">
        <div className="flex flex-col items-center">
              
              {/* Título com Efeito Grifado (Amarelo) */}
              <h2 className="text-[48px] font-bold text-[#003870] text-center flex flex-col items-center leading-none">
                <span className="bg-[#FCC41F] px-2 mb-2"> {/* mb-2 cria o respiro branco entre as linhas */}
                  Doação
                </span>
                <span className="bg-[#FCC41F] px-2">
                  Pontual
                </span>
              </h2>

              <p className="text-[15px] text-[#6B6D6E] text-center mt-2">
                (sem benefícios de pessoas físicas)
              </p>

            {/* Grade de Botões */}
            <div className="flex flex-col items-center gap-[20px] mt-8">
              {/* Botão Destaque (Amarelo) */}
              <Link
                href="https://app.cobrefacil.com.br/link-de-pagamento/R0DPK75NZ371NEY8OQ41"
                target="_blank"
                
                className="w-[300px] h-[65px] bg-[#003870] text-white text-[24px] font-normal rounded-full flex items-center justify-center gap-2"
              >
                Doe <strong className="font-bold">R$50,00</strong>
              </Link>

              {/* Botões Padrão (Azul) */}
              <Link
                href="https://app.cobrefacil.com.br/link-de-pagamento/625ZDMXJD6689K7E140Y"
                target="_blank"
  
                className="w-[300px] h-[59px] bg-[#003870] text-white text-[16px] font-normal rounded-full flex items-center justify-center gap-2"
              >
                Doe <strong className="font-bold">R$100,00</strong>
              </Link>
              
              <Link
                href="https://app.cobrefacil.com.br/link-de-pagamento/X2OYRL8N0LLPJMQEK6W3"
                className="w-[300px] h-[59px] bg-[#003870] text-white text-[16px] font-normal rounded-full flex items-center justify-center gap-2"
              >
                Doe <strong className="font-bold">R$200,00</strong>
              </Link>
              
              <Link
                href="https://app.cobrefacil.com.br/link-de-pagamento/5YXZ6QMJV885J0P4W2V1"
                className="w-[300px] h-[59px] bg-[#003870] text-white text-[16px] font-normal rounded-full flex items-center justify-center gap-2"
              >
                Doe <strong className="font-bold">R$500,00</strong>
              </Link>
            </div>
          </div>
        </section>

        {/* 2.6 Seção "Doação Recorrente" */}
        <section id="doacao-recorrente" className="w-full bg-white py-12 px-4">
          <div className="flex flex-col items-center">
            
            {/* Título com Efeito Grifado (Verde) */}
            <h2 className="text-[48px] font-bold text-[#003870] text-center flex flex-col items-center leading-none">
              <span className="bg-[#25B957] px-2 mb-2">
                Doação
              </span>
              <span className="bg-[#25B957] px-2">
                Recorrente
              </span>
            </h2>

            <p className="text-[15px] text-[#6B6D6E] text-center mt-2">
              (doações anuais, de pessoas <br />
              físicas, com benefícios)
            </p>

            {/* Grade de Botões */}
            <div className="flex flex-col items-center gap-[20px] mt-8">
              
              {/* Botão Destaque (Verde) - Texto Empilhado */}
              <Link
                href="https://app.cobrefacil.com.br/link-de-pagamento/PQRME31J3GG5NV20Z564"
                target="_blank"
                // ALTERAÇÃO: flex-col para quebrar a linha + leading-tight para aproximar os textos
                className="w-[300px] h-[90px] bg-[#003870] text-white text-[16px] font-normal rounded-full flex flex-col items-center justify-center leading-tight"
              >
                <strong className="font-bold text-[18px]">Pulse +1</strong>
                <span className="text-[14px] font-normal">(R$ 200/mês)</span>
              </Link>

              {/* Botão Azul 1 - Texto Empilhado */}
              <Link
                href="https://app.cobrefacil.com.br/link-de-pagamento/V4X2W70N51EED9MLDORG"
                target="_blank"
                className="w-[300px] h-[83px] bg-[#003870] text-white text-[16px] font-normal rounded-full flex flex-col items-center justify-center leading-tight"
              >
                <strong className="font-bold text-[18px]">Pulse +3</strong>
                <span className="text-[14px] font-normal">(R$ 600/mês)</span>
              </Link>

              {/* Botão Azul 2 - Texto Empilhado */}
              <Link
                href="https://app.cobrefacil.com.br/link-de-pagamento/YL6ZOVXN47E3ENGP4KR0"
                target="_blank"
                className="w-[300px] h-[83px] bg-[#003870] text-white text-[16px] font-normal rounded-full flex flex-col items-center justify-center leading-tight"
              >
                <strong className="font-bold text-[18px]">Pulse +5</strong>
                <span className="text-[14px] font-normal">(R$ 1000/mês)</span>
              </Link>

              {/* Botão Azul 3 - Texto Empilhado */}
              <Link
                href="https://app.cobrefacil.com.br/link-de-pagamento/R0DPK75NZXYMZJEY8OQ4"
                target="_blank"
                className="w-[300px] h-[83px] bg-[#003870] text-white text-[16px] font-normal rounded-full flex flex-col items-center justify-center leading-tight"
              >
                <strong className="font-bold text-[18px]">Pulse +10</strong>
                <span className="text-[14px] font-normal">(R$ 2000/mês)</span>
              </Link>

              <Link
                href="https://api.whatsapp.com/send?phone=5511988213886&text=Ol%C3%A1%2C%20gostaria%20de%20doar%20outro%20valor"
                className="w-[300px] h-[83px] bg-[#003870] text-white text-[18px] font-bold rounded-full flex flex-col items-center justify-center leading-tight"
              >
                <span>Outro</span>
                <span>Valor</span>
              </Link>
            </div>
          </div>
        </section>

        {/* 2.7 Seção "Mentor Voluntário" */}
        <section id="mentor" className="w-full bg-white py-12 px-4 mt-[30px]">
          {/* Adicionado 'items-center' para centralizar tudo horizontalmente */}
          <div className="flex flex-col items-center">
            
            
            <h2 className="text-[45px] font-bold text-[#003870] text-left w-full max-w-[320px] leading-tight">
              Impulsione a <br />
              carreira de <br />
              um jovem <br />
              como mentor <br />
              voluntário
            </h2>

    
            <Link
              href="https://mailchi.mp/pulsemais/mentores-turma3"
              target="_blank"
              className="w-[245px] h-[48px] bg-transparent border border-[#003870] rounded-[50px] text-[16px] font-bold text-[#003870] flex items-center justify-center mt-[40px]"
            >
              Faça sua pré-inscrição
            </Link>
          </div>
        </section>

        {/* 2.8 Seção "Invista no futuro de jovens" */}
        <section
          id="invista"
          className="relative w-full min-h-[530px] flex flex-col justify-center items-center text-center overflow-hidden mt-[70px]"
        >
          {/* Imagem de Fundo */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/assents/images/apoie-transforme-bg.png"
              alt="Background Invista"
              fill
              className="object-cover"
            />
            {/* Overlay escuro para garantir leitura */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          {/* Conteúdo */}
          <div className="relative z-10 px-4">
            <h2 className="text-[36px] font-bold text-white text-center">
              Invista no <br />
              futuro de <br />
              jovens
            </h2>
            <p className="text-[15px] font-normal text-white mt-[20px]">
              Impulsione jovens e fortaleça <br />
              sua cultura, responsabilidade <br />
              social, lideranças e <br />
              capacidade de atrair talentos <br />
              que impulsionam resultados.
            </p>

            {/* Botões de Ação */}
            <div className="flex flex-col items-center gap-[30px] mt-8">
              <Link
                href="http://wa.me/5511996250844"
                target="_blank"
                className="w-[245px] h-[48px] bg-transparent border border-white rounded-[50px] text-[15px] font-bold text-white flex items-center justify-center"
              >
                Empregue jovens talentos
              </Link>
              <Link
                href="https://api.whatsapp.com/send?phone=5511988213886&text=Ol%C3%A1%2C%20gostaria%20de%20investir%20na%20Pulse"
                className="w-[245px] h-[48px] bg-transparent border border-white rounded-[50px] text-[15px] font-bold text-white flex items-center justify-center"
              >
                Invista na Pulse Mais
              </Link>
            </div>
          </div>
        </section>

        {/* 2.9 Seção "Torne-se nosso parceiro" */}
        <section id="parceiro" className="relative bg-white pt-[57px] pb-[48px] overflow-hidden">
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

        {/* 2.10 Footer Mobile */}
        <FooterMobile />
      </div>

      {/* ==================================================================
          VERSÃO DESKTOP (hidden md:block)
      ================================================================== */}
      <div className="hidden md:block w-full">
        <HeaderDesktop />

        {/* 3.2 Hero Section */}
        {/* CORREÇÃO: Adicionado 'mx-auto' na imagem para garantir centralização absoluta */}
        <section className="w-full max-w-[1440px] mx-auto mt-[55px] px-6">
          <Image
            src="/assents/images/hero-apoie-desktop.png" // Caminho atualizado
            alt="Hero Apoie Desktop"
            width={1200}
            height={460}
            className="w-full max-w-[1200px] h-[460px] object-cover rounded-[24px] mx-auto"
          />
        </section>

        {/* 3.3 Seção de Navegação ("Você já é parte...") */}
        <section className="relative w-full max-w-[1440px] mx-auto bg-white py-20 px-6 overflow-hidden">

          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-[60px] font-bold text-[#003870] text-center leading-tight">
              Você já é parte do futuro dos jovens
            </h2>
            <p className="text-[32px] font-normal text-[#6B6D6E] text-center mt-[30px]">
              Escolha como quer impulsionar essa transformação
            </p>

            {/* Cards de Navegação */}
            <div className="flex flex-row justify-center gap-[24px] mt-[60px]">
              {[
                { title: "Quero ser doador(a)", id: "transforme-desktop" },
                { title: "Quero ser mentor(a)", id: "mentor-desktop" },
                { title: "Quero empregar jovens", id: "invista-desktop" },
                { title: "Quero ser empresa patrocinadora", id: "parceiro-desktop" },
              ].map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleScrollTo(item.id)}
                  className="w-[280px] h-[180px] bg-[#25B957] text-white text-[24px] font-extrabold rounded-[20px] flex items-center justify-center text-center p-4 hover:bg-[#33B458] transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-300"
                >
                  {item.title}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* 3.4 Transforme Desktop */}
        {/* CORREÇÃO: Container com 'mx-auto' para corrigir o desalinhamento da imagem */}
        <section id="transforme-desktop" className="w-full my-12 px-6">
          <div className="relative w-full max-w-[1200px] h-[354px] mx-auto rounded-[24px] overflow-hidden flex flex-col items-center justify-center text-center">
            <div className="absolute inset-0 z-0">
              <Image src="/assents/images/queroapoiar-img.png" alt="BG Transforme" fill className="object-cover" />
              {/* Overlay leve se necessário para contraste */}
              {/* <div className="absolute inset-0 bg-black/10"></div> */}
            </div>
            <div className="relative z-10 px-6">
              <h2 className="text-[48px] font-bold text-white">Transforme a vida de um jovem</h2>
              <p className="text-[24px] font-normal text-white mt-4">A sua doação impulsiona a carreira de um jovem através <br/> do acesso à educação e empregabilidade</p>
              <div className="flex flex-row justify-center gap-[54px] mt-8">
                <button onClick={() => handleScrollTo('doacao-pontual-desktop')} className="w-[342px] h-[48px] border border-white rounded-[50px] text-white text-[16px] font-bold hover:bg-white hover:text-[#003870] transition-colors">Doação Pontual</button>
                <button onClick={() => handleScrollTo('doacao-recorrente-desktop')} className="w-[342px] h-[48px] border border-white rounded-[50px] text-white text-[16px] font-bold hover:bg-white hover:text-[#003870] transition-colors">Doação Recorrente</button>
              </div>
            </div>
          </div>
        </section>

        {/* 3.5 Doação Pontual Desktop */}
        <section id="doacao-pontual-desktop" className="w-full flex justify-center py-12 px-6">
          <div className="w-full max-w-[1208px] min-h-[384px] border border-[#FCC41F] rounded-[24px] p-[20px] flex justify-center mx-auto">
            <div className="w-full border border-[#FCC41F] rounded-[24px] p-8 flex flex-col items-center">
              
              <h2 className="text-[48px] font-bold text-[#003870] mt-[18px]">
                <span className="bg-[#FCC41F] px-4">Doação Pontual</span>
              </h2>
              <p className="text-[20px] text-[#6B6D6E] mt-2">(sem benefícios de pessoas físicas)</p>

              <div className="flex flex-row items-center justify-center gap-[24px] mt-12 w-full">
                {/* Card 1: R$50,00 (Link real mantido) */}
                <Link 
                  href="https://app.cobrefacil.com.br/link-de-pagamento/R0DPK75NZ371NEY8OQ41" 
                  target="_blank" 
                  className="w-[241px] h-[106px] bg-[#003870] rounded-[24px] flex flex-col justify-center items-center hover:bg-[#FCC41F] group transition-colors leading-tight shadow-md hover:-translate-y-1 transform duration-300"
                >
                  <span className="text-white text-[24px] group-hover:text-[#003870]">Doe</span>
                  <strong className="text-white text-[24px] group-hover:text-[#003870] font-bold">R$50,00</strong>
                </Link>
                
                {/* Cards: 100, 200, 500 (Links placeholder #) */}
                {[
                  { value: "100,00", link: "https://app.cobrefacil.com.br/link-de-pagamento/625ZDMXJD6689K7E140Y" },
                  { value: "200,00", link: "https://app.cobrefacil.com.br/link-de-pagamento/X2OYRL8N0LLPJMQEK6W3" },
                  { value: "500,00", link: "https://app.cobrefacil.com.br/link-de-pagamento/5YXZ6QMJV885J0P4W2V1" }
                ].map((item, idx) => (
                  <Link 
                    key={idx} 
                    href={item.link} 
                    target="_blank" 
                    className="w-[241px] h-[106px] bg-[#003870] rounded-[24px] flex flex-col justify-center items-center hover:bg-[#FCC41F] group transition-colors leading-tight shadow-md hover:-translate-y-1 transform duration-300"
                  >
                    <span className="text-white text-[24px] group-hover:text-[#003870]">Doe</span>
                    <strong className="text-white text-[24px] group-hover:text-[#003870] font-bold">R${item.value}</strong>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 3.6 Doação Recorrente Desktop */}
        <section id="doacao-recorrente-desktop" className="w-full flex justify-center py-12 px-6">
          <div className="w-full max-w-[1208px] min-h-[384px] border border-[#25B957] rounded-[24px] p-[20px] flex justify-center mx-auto">
            <div className="w-full border border-[#25B957] rounded-[24px] p-8 flex flex-col items-center">
              <h2 className="text-[60px] font-bold text-[#003870]">
                <span className="bg-[#25B957] px-4">Doação Recorrente</span>
              </h2>
              <p className="text-[20px] text-[#6B6D6E] mt-2">(doações anuais, de pessoas físicas, com benefícios)</p>

              <div className="w-full grid grid-cols-5 gap-4 mt-12">
                
                {/* Card 1: Pulse +1 (Agora Azul com Hover Verde, igual aos outros) */}
                <Link 
                  href="https://app.cobrefacil.com.br/link-de-pagamento/PQRME31J3GG5NV20Z564" 
                  // ALTERAÇÃO: Mudei bg-[#25B957] para bg-[#003870] e adicionei hover:bg-[#25B957]
                  className="w-full h-[90px] bg-[#003870] rounded-[24px] flex flex-col justify-center items-center text-white hover:bg-[#25B957] transition-colors leading-tight px-2"
                >
                   <strong className="text-[22px] lg:text-[24px] font-bold whitespace-nowrap">Pulse +1</strong>
                   <span className="text-[14px] lg:text-[16px] whitespace-nowrap">(R$ 200/mês)</span>
                </Link>
                
                {/* Cards 2, 3, 4 (Padrão) */}
                {[
                  { t: "Pulse +3", v: "600", l: "https://app.cobrefacil.com.br/link-de-pagamento/V4X2W70N51EED9MLDORG" },
                  { t: "Pulse +5", v: "1000", l: "https://app.cobrefacil.com.br/link-de-pagamento/YL6ZOVXN47E3ENGP4KR0" },
                  { t: "Pulse +10", v: "2000", l: "https://app.cobrefacil.com.br/link-de-pagamento/R0DPK75NZXYMZJEY8OQ4" }
                ].map((item, idx) => (
                  <Link 
                    key={idx} 
                    href={item.l} 
                    target="_blank" 
                    className="w-full h-[90px] bg-[#003870] rounded-[24px] flex flex-col justify-center items-center text-white hover:bg-[#25B957] transition-colors leading-tight px-2"
                  >
                    <strong className="text-[22px] lg:text-[24px] font-bold whitespace-nowrap">{item.t}</strong>
                    <span className="text-[14px] lg:text-[16px] whitespace-nowrap">(R$ {item.v}/mês)</span>
                  </Link>
                ))}

                 {/* Card 5: Outro Valor */}
                 <Link 
                   href="https://api.whatsapp.com/send?phone=5511988213886&text=Ol%C3%A1%2C%20gostaria%20de%20doar%20outro%20valor" 
                   className="w-full h-[90px] bg-[#003870] rounded-[24px] flex flex-col justify-center items-center text-white hover:bg-[#25B957] transition-colors leading-tight px-2"
                 >
                    <strong className="text-[22px] lg:text-[24px] font-bold leading-none">Outro <br/> Valor</strong>
                  </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 3.7 Mentor Desktop */}
        <section id="mentor-desktop" className="relative w-full bg-[#F8F8F8] py-[100px]" style={{ clipPath: 'polygon(0 50px, 100% 0, 100% 100%, 0 calc(100% - 50px))' }}>
          <div className="max-w-[1216px] mx-auto grid grid-cols-2 gap-[87px] items-center px-6">
            <div className="flex flex-col items-start">
              <h2 className="text-[48px] font-bold text-[#003870] leading-tight">Impulsione a carreira <br/> de um jovem como <br/> mentor voluntário</h2>
              <p className="text-[20px] text-[#6B6D6E] mt-[40px] max-w-[500px]">
                Fazendo a Formação Líder Mentor, você integra à Rede de Mentores(as) da Pulse Mais, conecta-se ao nosso propósito e desenvolve sua liderança ao mentorar o jovem.
              </p>
              <Link href="https://mailchi.mp/pulsemais/mentores-turma3" target="_blank" className="mt-[40px] px-8 py-3 rounded-[50px] border border-[#003870] text-[#003870] font-bold text-[16px] hover:bg-[#33B458] hover:text-white hover:border-[#33B458] transition-colors">
                Faça sua pré-inscrição
              </Link>
            </div>
            <div className="flex justify-end">
               <div className="w-full h-auto rounded-[24px] relative overflow-hidden">
                  <Image 
                    src="/assents/images/impulsione-apoie-desktop.png"
                    alt="Mentor Desktop" 
                    width={804} 
                    height={900} 
                    className="object-cover w-full h-[450px]"
                  />
               </div>
            </div>
          </div>
        </section>

        {/* 3.8 Invista Desktop */}
        <section id="invista-desktop" className="w-full flex justify-center py-12 px-6">
          <div className="relative w-full max-w-[1200px] h-[354px] mx-auto rounded-[24px] overflow-hidden flex flex-col justify-center items-center text-center">
             <div className="absolute inset-0 z-0">
               <Image src="/assents/images/queroapoiar-img.png" alt="BG Invista" fill className="object-cover" />
               <div className="absolute inset-0 bg-black/40"></div>
             </div>
             <div className="relative z-10">
               <h2 className="text-[48px] font-bold text-white">Invista no futuro de jovens</h2>
               <p className="text-[24px] text-white mt-4 max-w-[900px]">Impulsione jovens e fortaleça sua cultura, responsabilidade social, lideranças e capacidade de atrair talentos que impulsionam resultados.</p>
               <div className="flex flex-row justify-center gap-[30px] mt-8">
                  <Link href="http://wa.me/5511996250844" target="_blank" className="w-[342px] h-[48px] flex items-center justify-center border border-white rounded-[50px] text-white font-bold hover:bg-[#33B458] hover:border-[#33B458] transition-colors">Empregue jovens talentos</Link>
                  <Link href="https://api.whatsapp.com/send?phone=5511988213886&text=Ol%C3%A1%2C%20gostaria%20de%20investir%20na%20Pulse" className="w-[342px] h-[48px] flex items-center justify-center border border-white rounded-[50px] text-white font-bold hover:bg-[#33B458] hover:border-[#33B458] transition-colors">Invista na Pulse Mais</Link>
               </div>
             </div>
          </div>
        </section>

        {/* 3.9 Parceiros Desktop */}
        <section id="parceiro-desktop" className="w-full py-12">
           <PartnersCarousel />
        </section>

        <FooterDesktop />
      </div>
    </>
  )
}
