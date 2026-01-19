'use client'

import { HeaderMobile, FooterMobile, Image, Link, CTAButton } from "@/app/_local-components/index"

export default function Apoie() {
  // Função para scroll suave
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
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
                href="https://app.cobrefacil.com.br/link-de-pagamento/8PVXZG3JPRRGNW16REOD"
                target="_blank"
                
                className="w-[300px] h-[65px] bg-[#FCC41F] text-white text-[24px] font-normal rounded-full flex items-center justify-center gap-2"
              >
                Doe <strong className="font-bold">R$50,00</strong>
              </Link>

              {/* Botões Padrão (Azul) */}
              <Link
                href="https://app.cobrefacil.com.br/link-de-pagamento/0PXYQ45N6QQKN2DELO8K"
                target="_blank"
                // Mesmas mudanças aqui: font-normal e gap-2
                className="w-[300px] h-[59px] bg-[#003870] text-white text-[16px] font-normal rounded-full flex items-center justify-center gap-2"
              >
                Doe <strong className="font-bold">R$100,00</strong>
              </Link>
              
              <Link
                href="#"
                className="w-[300px] h-[59px] bg-[#003870] text-white text-[16px] font-normal rounded-full flex items-center justify-center gap-2"
              >
                Doe <strong className="font-bold">R$200,00</strong>
              </Link>
              
              <Link
                href="#"
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
                className="w-[300px] h-[90px] bg-[#25B957] text-white text-[16px] font-normal rounded-full flex flex-col items-center justify-center leading-tight"
              >
                <strong className="font-bold text-[18px]">Pulse +1</strong>
                <span className="text-[14px] font-normal">(R$ 200/mês)</span>
              </Link>

              {/* Botão Azul 1 - Texto Empilhado */}
              <Link
                href="https://app.cobrefacil.com.br/link-de-pagamento/PQRME31J3GG5NV20Z564"
                target="_blank"
                className="w-[300px] h-[83px] bg-[#003870] text-white text-[16px] font-normal rounded-full flex flex-col items-center justify-center leading-tight"
              >
                <strong className="font-bold text-[18px]">Pulse +3</strong>
                <span className="text-[14px] font-normal">(R$ 600/mês)</span>
              </Link>

              {/* Botão Azul 2 - Texto Empilhado */}
              <Link
                href="https://app.cobrefacil.com.br/link-de-pagamento/V4X2W70N51EED9MLDORG"
                target="_blank"
                className="w-[300px] h-[83px] bg-[#003870] text-white text-[16px] font-normal rounded-full flex flex-col items-center justify-center leading-tight"
              >
                <strong className="font-bold text-[18px]">Pulse +5</strong>
                <span className="text-[14px] font-normal">(R$ 1000/mês)</span>
              </Link>

              {/* Botão Azul 3 - Texto Empilhado */}
              <Link
                href="https://app.cobrefacil.com.br/link-de-pagamento/YL6ZOVXN47E3ENGP4KR0"
                target="_blank"
                className="w-[300px] h-[83px] bg-[#003870] text-white text-[16px] font-normal rounded-full flex flex-col items-center justify-center leading-tight"
              >
                <strong className="font-bold text-[18px]">Pulse +10</strong>
                <span className="text-[14px] font-normal">(R$ 2000/mês)</span>
              </Link>

              <Link
                href="#"
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
                href="#"
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

      {/* ========== VERSÃO DESKTOP ========== */}
      <div className="hidden md:block w-full">
        {/* Manter estrutura desktop existente aqui se necessário */}
        <div className="p-8 text-center">
          <p className="text-[#6B6D6E]">Versão desktop em desenvolvimento</p>
        </div>
      </div>
    </>
  )
}
