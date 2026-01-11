'use client'
import { useState } from 'react'
import Image from 'next/image'

interface Partner {
  name: string
  logo: string
}

const partners: Partner[] = [
  { name: 'Partner 1', logo: '/assents/logos/italo.svg' },
  { name: 'Partner 2', logo: '/assents/logos/italo.svg' },
  { name: 'Partner 3', logo: '/assents/logos/italo.svg' },
  { name: 'Partner 4', logo: '/assents/logos/italo.svg' },
  { name: 'Partner 5', logo: '/assents/logos/italo.svg' },
  { name: 'Partner 6', logo: '/assents/logos/italo.svg' }
]

export const PartnersCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  // Configurações para o cálculo da animação
  const itemsPerView = 3
  const cardWidth = 300
  const gap = 60
  
  // Calcula o índice máximo para não deixar passar para o vazio
  const maxIndex = partners.length - itemsPerView

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      // Se estiver no final, volta pro início (loop), senão avança 1
      prev >= maxIndex ? 0 : prev + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      // Se estiver no início, vai pro final, senão volta 1
      prev === 0 ? maxIndex : prev - 1
    )
  }

  return (
    <section className="w-full max-w-[1440px] mx-auto mt-[80px]">
      <h2 className="text-[48px] font-bold text-[#003870] text-center">
        Empresas Parceiras e Patrocinadoras
      </h2>

      <div className="relative mt-[50px] px-8">
        <div className="flex items-center justify-center gap-4">
          
          {/* Botão Anterior */}
          <button
            onClick={prevSlide}
            className="flex-shrink-0 z-10 w-12 h-12 flex items-center justify-center bg-white rounded-full hover:bg-gray-100 transition-all"
            aria-label="Slide anterior"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="#003870" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* JANELA DE MÁSCARA (Overflow Hidden) */}
          {/* A largura deve ser exata: (3 cards * 300px) + (2 gaps * 60px) = 1020px */}
          <div 
            className="overflow-hidden"
            style={{ width: `${(itemsPerView * cardWidth) + ((itemsPerView - 1) * gap)}px` }}
          >
            {/* TRILHA DESLIZANTE (Track) */}
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ 
                gap: `${gap}px`,
                // Movemos a trilha para a esquerda baseado no índice atual
                transform: `translateX(-${currentIndex * (cardWidth + gap)}px)` 
              }}
            >
              {/* Renderizamos TODOS os parceiros aqui */}
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="flex-shrink-0"
                  style={{ width: `${cardWidth}px`, height: '300px' }}
                >
                  <div className="w-full h-full rounded-[24px] overflow-hidden bg-white border border-gray-200 flex items-center justify-center p-4">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={300}
                      height={300}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Botão Próximo */}
          <button
            onClick={nextSlide}
            className="flex-shrink-0 z-10 w-12 h-12 flex items-center justify-center bg-white rounded-full hover:bg-gray-100 transition-all"
            aria-label="Próximo slide"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="#003870" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}