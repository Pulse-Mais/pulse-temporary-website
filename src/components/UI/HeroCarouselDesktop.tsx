'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// 1. Interface Atualizada
interface Slide {
  category: string
  title?: string | string[] // Aceita string única ou array para quebras de linha
  subtitle: string[]
  buttonText: string
  buttonHref: string
  image: string
  alignment: 'left' | 'right'
  buttonWidth: number
  buttonHeight: number
}

// 2. Dados Atualizados com a quebra de linha no título
const slides: Slide[] = [
  {
    category: 'Jovens',
    title: 'Venha ser Pulser',
    subtitle: [
      'Tem entre 17 à 26 anos? Este pode ser o começo',
      'da sua jornada no mundo da tecnologia'
    ],
    buttonText: 'Saiba Mais',
    buttonHref: 'https://mailchi.mp/pulsemais/inscricoes2026',
    image: '/assents/desktop/hero-jovens.jpg',
    alignment: 'left',
    buttonWidth: 132,
    buttonHeight: 50
  },
  {
    category: 'Parceiros',
    title: 'Torne-se nosso parceiro',
    subtitle: [
      'Entenda como empresas, organizações e pessoas',
      'físicas estão impulsionando o futuro dos jovens',
      'em tecnologia com a Pulse Mais'
    ],
    buttonText: 'Torne-se nosso parceiro',
    buttonHref: '/apoie',
    image: '/assents/desktop/hero-parceiros.jpg',
    alignment: 'left',
    buttonWidth: 247,
    buttonHeight: 48
  },
  {
    category: 'Mentores',
    // Título em duas linhas recuperado
    title: ['Faça parte',
            'dessa mudança'],
    subtitle: [
      'Venha transformar desafios em',
      'oportunidades para jovens.'
    ],
    buttonText: 'Seja um mentor',
    buttonHref: 'https://mailchi.mp/pulsemais/mentores-turma3',
    image: '/assents/desktop/hero-mentores.jpg',
    alignment: 'right',
    buttonWidth: 175,
    buttonHeight: 50
  }
]

export const HeroCarouselDesktop = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  const current = slides[currentSlide]

  return (
    <section className="relative w-full h-[600px] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={current.image}
          alt={current.category}
          fill
          className="object-cover"
          priority
        />
      </div>

      <div
        className={`relative h-full flex flex-col items-start pt-[155px] ${
          current.alignment === 'left' 
            ? 'ml-[120px]' 
            : 'ml-auto mr-[80px] w-fit'
        }`}
      >
        <p className="text-[21px] font-medium text-white mb-[3px]">
          {current.category}
        </p>

        {/* 3. Renderização do Título Atualizada */}
        {current.title && (
          <h1 className="text-[60px] font-bold text-white mb-[15px]">
            {Array.isArray(current.title) ? (
              // Se for array, cria blocos para cada linha
              current.title.map((line, index) => (
                <span key={index} className="block">
                  {line}
                </span>
              ))
            ) : (
              // Se for string normal, exibe direto
              current.title
            )}
          </h1>
        )}

        <div
          className={`text-[20px] font-normal text-white ${
            current.alignment === 'left'
              ? 'w-[522px]'
              : current.subtitle.length === 2
              ? 'w-[445px]'
              : 'w-[532px]'
          }`}
        >
          {current.subtitle.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>

        <Link href={current.buttonHref} className="mt-[24px]">
          <button
            className="border border-white text-white rounded-[50px] font-bold hover:bg-[#33B458] hover:text-white hover:border-[#33B458] transition-all duration-300"
            style={{
              width: `${current.buttonWidth}px`,
              height: `${current.buttonHeight}px`
            }}
          >
            {current.buttonText}
          </button>
        </Link>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-white'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}