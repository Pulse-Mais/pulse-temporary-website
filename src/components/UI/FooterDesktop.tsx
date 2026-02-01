'use client'
import Image from 'next/image'
import Link from 'next/link'

export const FooterDesktop = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Redirecionar para página de contato
    window.location.href = '/contato'
  }

  return (
    <footer className="relative w-full bg-white mt-[70px] overflow-hidden pb-[100px]">
      
      {/* Shape de Fundo (Esquerda) */}
      <div className="absolute top-0 left-0 z-0">
        <Image
          src="/assents/backgrounds/footer-shape-blue.svg"
          alt="Footer Shape"
          width={460}
          height={400}
          className="w-[450px] h-auto"
        />
      </div>

      {/* CONTAINER PRINCIPAL 
         1. justify-between: Joga a Logo pra esquerda e o bloco de textos pra direita.
         2. px-8: Garante que não cole na borda da tela se o monitor for menor que 1440px.
         3. max-w-[1440px]: Segura o conteúdo no centro em monitores gigantes.
      */}
      <div className="relative max-w-[1440px] mx-auto flex flex-row justify-between items-start z-10 px-8 pt-[70px]">
        
        {/* Coluna 1 - Logo */}
        {/* Removi o pt-[70px] daqui e coloquei no pai para alinhar tudo junto, ou você pode manter individual se preferir desnivelado */}
        <div className="flex-shrink-0"> 
          <Image
            src="/assents/logos/pulse-logo-footer.svg"
            alt="Pulse Mais"
            width={294}
            height={92}
            className="w-[294px] h-[92px]"
          />
        </div>

        {/* 2. GRUPO DE TEXTOS */}
        {/* REMOVIDO: ml-[320px] (Isso era o vilão)
           ADICIONADO: gap-[60px] (Mantém o espaço entre as colunas de texto)
        */}
        <div className="flex flex-row gap-[60px]">
          
          {/* Coluna Mapa do Site */}
          <div>
            <h3 className="text-[20px] font-bold text-[#003870] mb-4">
              Mapa do site
            </h3>
            <ul className="flex flex-col gap-[10px]">
              <li>
                <Link href="/sobre" className="text-[16px] font-normal text-[#6B6D6E] hover:text-[#003870] transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/apoie" className="text-[16px] font-normal text-[#6B6D6E] hover:text-[#003870] transition-colors">
                  Apoie
                </Link>
              </li>
              <li>
                <Link href="/transparencia" className="text-[16px] font-normal text-[#6B6D6E] hover:text-[#003870] transition-colors">
                  Transparência
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-[16px] font-normal text-[#6B6D6E] hover:text-[#003870] transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna Redes Sociais */}
          <div>
            <h3 className="text-[20px] font-bold text-[#003870] mb-4">
              Redes sociais
            </h3>
            <ul className="flex flex-col gap-[10px]">
              <li>
                <Link href="https://www.instagram.com/pulsemaisong/" target="_blank" className="flex items-center gap-2">
                  <Image src="/assents/brand/social-instagram.svg" alt="Instagram" width={31} height={31} className="w-[31px] h-[31px]" />
                  <span className="text-[16px] font-normal text-[#6B6D6E] hover:text-[#003870] transition-colors">Instagram</span>
                </Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/company/pulsemaisong/" target="_blank" className="flex items-center gap-2">
                  <Image src="/assents/brand/social-linkedin.svg" alt="LinkedIn" width={31} height={31} className="w-[31px] h-[31px]" />
                  <span className="text-[16px] font-normal text-[#6B6D6E] hover:text-[#003870] transition-colors">LinkedIn</span>
                </Link>
              </li>
              <li>
                <Link href="https://www.youtube.com/@pulsemais/videos" target="_blank" className="flex items-center gap-2">
                  <Image src="/assents/brand/social-youtube.svg" alt="LinkedIn" width={31} height={31} className="w-[31px] h-[31px]" />
                  <span className="text-[16px] font-normal text-[#6B6D6E] hover:text-[#003870] transition-colors">Youtube</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna Formulário */}
          <div>
            <h3 className="text-[20px] font-bold text-[#003870] mb-4">
              Mande um email
            </h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <textarea
                placeholder="Seu email"
                className="w-[270px] h-[123px] border border-[#D9D7D8] rounded-lg px-4 py-2 bg-white text-[#003870] resize-none focus:outline-none focus:border-[#003870]"
              />
              <button
                type="submit"
                className="w-[126px] h-[33px] bg-[#003870] text-white text-[16px] font-bold rounded-lg hover:opacity-90 transition-all"
              >
                Enviar
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Onda Decorativa (Direita) */}
      <div className="absolute bottom-0 right-0 z-0 pointer-events-none translate-y-[100px]">
        <Image
          src="/assents/backgrounds/wave-footer-desk.svg"
          alt="Footer Wave"
          width={300}
          height={400}
          className="w-[300px] h-[400px] object-contain object-bottom-right"
        />
      </div>
    </footer>
  )
}