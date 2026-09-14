import Image from 'next/image'
import Link from 'next/link'

interface QueroApoiarDesktopProps {
  className?: string
}

// Seção "Quero apoiar" reutilizada nas páginas Home, Sobre, Apoie e Transparência (desktop)
export const QueroApoiarDesktop = ({ className = '' }: QueroApoiarDesktopProps) => (
  <section className={`w-full py-16 flex justify-center ${className}`}>
    <div
      className="relative w-[1205px] max-w-full h-[292px] rounded-[15px] overflow-hidden flex flex-col items-center justify-center"
      style={{
        backgroundImage: "url('/assents/images/queroapoiar-img.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h2 className="text-[65px] font-bold text-white text-center">Quero apoiar</h2>
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
)
