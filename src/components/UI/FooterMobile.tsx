import Image from 'next/image'
import Link from 'next/link'

export const FooterMobile = () => {
  return (
    // 1. Removi 'pb-40'. O controle de espaço será feito no conteúdo interno ou na própria onda.
    <footer className="relative bg-white overflow-hidden w-full">
      
      {/* Conteúdo (z-10 para ficar acima do fundo) */}
      {/* Adicionei 'pb-[100px]' aqui para dar espaço para a onda não cobrir o texto do CNPJ */}
      <div className="relative z-10 pb-[120px]">
        
        {/* Quadrante 1 - Logo e Redes Sociais */}
        <div className="pl-[30px] pt-[63px]">
          <Image
            src="/assents/logos/pulse-logo-header.svg" // Corrigido: estava .svg.svg
            alt="Pulse Mais"
            width={195}
            height={62}
            className="w-[195px] h-[62px]"
          />
          <div className="flex gap-[15px] mt-[30px]">
            <Link href="https://www.instagram.com/pulsemaisong/" target="_blank">
              <Image
                src="/assents/brand/social-instagram.svg"
                alt="Instagram"
                width={50}
                height={50}
                className="w-[50px] h-[50px]"
              />
            </Link>
            <Link href="https://www.linkedin.com/company/pulsemaisong/" target="_blank">
              <Image
                src="/assents/brand/social-linkedin.svg"
                alt="LinkedIn"
                width={50}
                height={50}
                className="w-[50px] h-[50px]"
              />
            </Link>
          </div>
        </div>

        {/* Quadrante 2 - Contato */}
        <div className="pl-[30px] mt-[30px] relative z-10 pr-[30px]">
          <h3 className="text-[20px] font-bold text-[#003870]">
            Mande um email
          </h3>
          <form className="mt-4 flex flex-col items-start w-full" id="footer-form">
            <input
              type="email"
              placeholder="Seu email"
              // Mudei para w-full para se adaptar a qualquer celular
              className="w-full h-12 border border-gray-300 rounded-lg px-4 bg-white"
            />
            <button
              type="submit"
              className="px-8 h-10 bg-[#003870] text-white rounded-full font-bold mt-4 relative z-10"
              id="footer-enviar-btn"
            >
              Enviar
            </button>
          </form>
          
          {/* CNPJ */}
          <p className="text-[18px] font-normal text-[#6B6D6E] mt-[40px] text-center relative z-10">
            CNPJ: 48.621.188/0001-11
          </p>
        </div>
      </div>

      {/* Onda Decorativa - FIXADA NO FUNDO */}
      {/* bottom-0: Cola no fundo */}
      {/* w-full: Ocupa toda a largura */}
      {/* z-0: Fica atrás do conteúdo se necessário, mas visível */}
      <div className="absolute bottom-0 left-0 w-full z-0 pointer-events-none">
        <Image
          src="/assents/backgrounds/footer-wave.svg"
          alt="Footer Wave"
          width={600}
          height={355}
          // w-full: Força a imagem a esticar na largura
          // object-cover: Garante que cubra a área sem distorcer demais
          className="w-full h-auto object-cover object-bottom"
        />
      </div>
    </footer>
  )
}