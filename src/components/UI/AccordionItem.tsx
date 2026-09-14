'use client'
import { useState, type ReactNode } from 'react'
import Image from 'next/image'

interface AccordionItemProps {
  title: ReactNode
  // HTML do conteúdo (variante green)
  content?: string
  // Conteúdo livre (variante gold)
  children?: ReactNode
  variant?: 'green' | 'gold'
  defaultOpen?: boolean
  // Variante gold: o conteúdo começa atrás da metade inferior do botão aberto
  overlapContent?: boolean
  // Variante gold: tamanho do título com o item fechado
  closedTextSize?: string
}

export const AccordionItem = ({
  title,
  content = '',
  children,
  variant = 'green',
  defaultOpen = false,
  overlapContent = false,
  closedTextSize = 'text-[18px]',
}: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  const contentClasses = `overflow-hidden transition-all duration-300 ${
    isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
  }`

  if (variant === 'gold') {
    return (
      <div className="flex flex-col items-center">
        {/* Header: fechado = borda dourada / aberto = preenchimento dourado */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          className={`relative z-10 flex items-center justify-center rounded-full text-center font-bold transition-all duration-300 ${
            isOpen
              ? 'w-[250px] h-[66px] border-2 border-white bg-pulsar-gold-texture text-[25px] text-[#003870]'
              : `w-[242px] h-[48px] border-pulsar-gold ${closedTextSize} text-white`
          }`}
        >
          <span>{title}</span>
        </button>

        {/* Content */}
        <div className={`${contentClasses} ${overlapContent && isOpen ? '-mt-[33px]' : ''}`}>
          {children}
        </div>
      </div>
    )
  }

  return (
    <div className="w-[305px]">
      {/* Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="w-full h-[76px] bg-[#28A745] rounded-[15px] flex items-center justify-between px-4"
      >
        <span className="text-[18px] font-bold text-white text-left flex-1">
          {title}
        </span>
        <Image
          src="/assents/brand/drop-icon.svg"
          alt="Toggle"
          width={25}
          height={25}
          className={`transition-transform duration-300 ease-in-out ${
            isOpen ? 'rotate-90' : 'rotate-0'
          }`}
        />
      </button>

      {/* Content */}
      <div className={contentClasses}>
        <div className="w-[287px] mt-[9px] mb-[36px]">
          <div
            className="text-white text-[15px] font-normal text-left leading-relaxed"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </div>
    </div>
  )
}
