import Image from 'next/image'
import Link from 'next/link'

export const FooterMobile = () => {
  return (
    <footer className="relative bg-white pb-0 overflow-hidden">
      {/* Conteúdo */}
      <div className="relative z-10">
        {/* Quadrante 1 - Logo e Redes Sociais */}
        <div className="pl-[30px] pt-[63px]">
          <Image
            src="/assents/logos/pulse-logo-header.svg"
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
            <Link href="https://www.youtube.com/@pulsemais/videos" target="_blank">
              <Image
                src="/assents/brand/social-youtube.svg"
                alt="Youtube"
                width={50}
                height={50}
                className="w-[50px] h-[50px]"
              />
            </Link>
          </div>
        </div>

        {/* Quadrante 2 - Contato e CNPJ */}
        {/* --- MUDANÇA AQUI --- */}
        {/* Alterado de pb-[30px] para pb-[180px] */}
        {/* Isso cria um espaço branco grande abaixo do CNPJ para a onda ficar */}
        <div className="pl-[30px] mt-[30px] pb-[130px] relative z-10">
          <h3 className="text-[20px] font-bold text-[#003870]">
            Mande um email
          </h3>
          {/* ALTERAÇÃO 1: Troquei <form> por <div> */}
          <div className="mt-4 flex flex-col items-start">
            <input
              type="email"
              placeholder="Seu email"
              className="w-[300px] h-12 border border-gray-300 rounded-lg px-4 bg-white"
            />
            
            {/* ALTERAÇÃO 2: Botão transformado em Link */}
            <Link
              href="/contato"
              className="px-8 h-10 bg-[#003870] text-white rounded-full font-bold mt-4 relative z-10 flex items-center justify-center"
            >
              Enviar
            </Link>
          </div>
          {/* O CNPJ agora ficará na parte branca superior do padding criado acima */}
          <p className="text-[18px] font-normal text-[#6B6D6E] mt-[54px] text-center relative z-10 w-screen ml-[-30px]">
            CNPJ: 48.621.188/0001-11
          </p>
        </div>
      </div>

      {/* Onda Decorativa */}
      {/* Mantemos bottom-0, ela vai ficar no final do espaço criado pelo pb-[180px] */}
      <div className="absolute right-0 bottom-0 w-full max-w-[600px] z-0 pointer-events-none">
        <Image
          src="/assents/backgrounds/footer-wave.svg"
          alt="Footer Wave"
          width={600}
          height={355}
          className="w-full h-auto object-cover object-bottom"
        />
      </div>
    </footer>
  )
}