import Image from 'next/image'
import Link from 'next/link'

export const FooterMobile = () => {
  return (
    <footer className="relative bg-white pb-40 overflow-hidden">
      {/* Conteúdo */}
      <div className="relative z-10">
        {/* Quadrante 1 - Logo e Redes Sociais */}
        <div className="pl-[30px] pt-[63px]">
          <Image
            src="/assents/logos/pulse-logo-header.svg.svg"
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
        <div className="pl-[30px] mt-[30px] relative z-10">
          <h3 className="text-[20px] font-bold text-[#003870]">
            Mande um email
          </h3>
          <form className="mt-4 flex flex-col items-start" id="footer-form">
            <input
              type="email"
              placeholder="Seu email"
              className="w-[300px] h-12 border border-gray-300 rounded-lg px-4 bg-white"
            />
            <button
              type="submit"
              className="px-8 h-10 bg-[#003870] text-white rounded-full font-bold mt-4 relative z-10"
              id="footer-enviar-btn"
            >
              Enviar
            </button>
          </form>
          <p className="text-[18px] font-normal text-[#6B6D6E] mt-[54px] text-center mx-auto relative z-10">
            CNPJ: 48.621.188/0001-11
          </p>
        </div>
      </div>

      {/* Onda Decorativa - Posicionada no final do footer */}
      <div className="absolute right-0 bottom-12 w-full max-w-[600px] z-0 pointer-events-none">
        <Image
          src="/assents/backgrounds/footer-wave.svg"
          alt="Footer Wave"
          width={600}
          height={355}
          className="w-full h-auto object-contain object-bottom-right"
        />
      </div>
    </footer>
  )
}





