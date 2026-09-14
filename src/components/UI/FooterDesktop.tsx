"use client";
import Image from "next/image";
import Link from "next/link";

interface FooterDesktopProps {
  // 'blue': fundo azul da marca (usado na página Pulsar)
  variant?: 'light' | 'blue';
}

export const FooterDesktop = ({ variant = 'light' }: FooterDesktopProps) => {
  const isBlue = variant === 'blue';

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.location.href = "/contato";
  };

  const headingClass = `text-[20px] font-bold mb-4 ${isBlue ? 'text-white' : 'text-[#003870]'}`;
  const linkClass = `text-[16px] font-normal transition-colors ${
    isBlue ? 'text-white/70 hover:text-white' : 'text-[#6B6D6E] hover:text-[#003870]'
  }`;

  return (
    <footer
      className={`relative w-full mt-[70px] overflow-hidden pb-[100px] ${isBlue ? 'bg-[#003870]' : 'bg-white'}`}
    >
      {/* --- GRUPO DA LOGO (Lado Esquerdo) --- */}
      <div className="absolute top-0 left-0 z-10 w-[450px]">
        {/* O Shape de Fundo (apenas na variante clara, para contrastar com o fundo branco) */}
        {!isBlue && (
          <Image
            src="/assents/backgrounds/footer-shape-blue.svg"
            alt="Footer Shape"
            width={460}
            height={400}
            className="w-full h-auto"
          />
        )}

        {/* A Logo posicionada SOBRE o shape acima */}
        <div className={isBlue ? 'pt-[70px] pl-[40px]' : 'absolute top-[70px] left-[40px]'}>
          <Image
            src="/assents/logos/pulse-logo-footer.svg"
            alt="Pulse Mais"
            width={294}
            height={92}
            className="w-[200px] xl:w-[250px] 2xl:w-[294px] h-auto"
          />
        </div>
      </div>

      {/* CONTAINER PRINCIPAL (Conteúdo de texto) */}
      <div className="relative max-w-[1440px] mx-auto flex flex-row justify-end items-start z-20 px-8 pt-[70px]">
        {/* 2. GRUPO DE TEXTOS (Empurrado para a direita com ml-auto ou justify-end no pai) */}
        <div className="flex flex-row gap-[60px]">
          {/* Coluna Mapa do Site */}
          <div>
            <h3 className={headingClass}>Mapa do site</h3>
            <ul className="flex flex-col gap-[10px]">
              <li><Link href="/sobre" className={linkClass}>Sobre</Link></li>
              <li><Link href="/apoie" className={linkClass}>Apoie</Link></li>
              <li><Link href="/transparencia" className={linkClass}>Transparência</Link></li>
              <li><Link href="/contato" className={linkClass}>Contato</Link></li>
            </ul>
          </div>

          {/* Coluna Redes Sociais */}
          <div>
            <h3 className={headingClass}>Redes sociais</h3>
            <ul className="flex flex-col gap-[10px]">

              <li>
                <Link href="https://www.instagram.com/pulsemaisong/" target="_blank" className="flex items-center gap-2">
                  <Image src="/assents/brand/social-instagram.svg" alt="Instagram" width={31} height={31} className="w-[31px] h-[31px]" />
                  <span className={linkClass}>Instagram</span>
                </Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/company/pulsemaisong/" target="_blank" className="flex items-center gap-2">
                  <Image src="/assents/brand/social-linkedin.svg" alt="LinkedIn" width={31} height={31} className="w-[31px] h-[31px]" />
                  <span className={linkClass}>LinkedIn</span>
                </Link>
              </li>
              <li>
                <Link href="https://www.youtube.com/@pulsemais/videos" target="_blank" className="flex items-center gap-2">
                  <Image src="/assents/brand/social-youtube.svg" alt="LinkedIn" width={31} height={31} className="w-[31px] h-[31px]" />
                  <span className={linkClass}>Youtube</span>
                </Link>
              </li>

            </ul>
          </div>

          {/* Coluna Formulário */}
          <div>
            <h3 className={headingClass}>Mande um email</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <textarea
                placeholder="Seu email"
                className="w-[270px] h-[123px] border border-[#D9D7D8] rounded-lg px-4 py-2 bg-white text-[#003870] resize-none focus:outline-none focus:border-[#003870]"
              />
              <button
                type="submit"
                className={`w-[126px] h-[33px] text-[16px] font-bold rounded-lg hover:opacity-90 transition-all ${
                  isBlue ? 'bg-white text-[#003870]' : 'bg-[#003870] text-white'
                }`}
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
  );
};
