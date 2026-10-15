'use client'
import { useState, type ReactNode } from 'react'
import { CTAButton } from '@/components/UI/CTAButton'

export interface TicketCardData {
  name: string
  title: ReactNode
  subtitle?: string
  description: string
  price: string
  href: string
  ctaText?: string
}

interface TicketsGridDesktopProps {
  tickets: TicketCardData[]
  pinned: string
  className?: string
  // Se vier, o clique no botão chama essa função (abrir o modal) em vez de ir direto pro link
  onTicketClick?: (href: string) => void
}

export const TicketsGridDesktop = ({
  tickets,
  pinned,
  className = '',
  onTicketClick,
}: TicketsGridDesktopProps) => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  const openCard = hoveredCard ?? pinned

  return (
    <div className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-[16px] w-full max-w-[1210px] mx-auto ${className}`}>
      {tickets.map((ticket) => {
        const isOpen = openCard === ticket.name
        return (
          <div
            key={ticket.name}
            className="relative"
            onMouseEnter={() => setHoveredCard(ticket.name)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className={`rounded-[20px] transition-all duration-500 h-full flex flex-col ${isOpen ? 'border-pulsar-gold' : 'border border-white/40'}`}>

              {/* Título */}
              <div className={`px-[24px] flex flex-col transition-all duration-500 ${isOpen ? 'pt-[28px]' : 'flex-1 justify-center py-[28px]'}`}>
                <h3 className="text-[24px] font-extrabold text-white leading-tight">{ticket.title}</h3>
                {!isOpen && ticket.subtitle && (
                  <p className="mt-1 text-[13px] font-semibold uppercase tracking-wide text-white/80">{ticket.subtitle}</p>
                )}
              </div>

              {/* Conteúdo expansível */}
              <div className={`overflow-hidden transition-all duration-500 ease-out px-[24px] ${isOpen ? 'max-h-[400px] opacity-100 pb-[24px]' : 'max-h-0 opacity-0'}`}>
                <p className="text-[14px] leading-snug text-white/90">{ticket.description}</p>
                <p className="mt-[12px] text-[26px] font-bold text-white">{ticket.price}</p>

                {/*
                  O onClick fica no wrapper (e não no CTAButton), igual ao TicketOption do mobile:
                  o clique no botão sobe até aqui, então funciona mesmo que o CTAButton
                  não repasse o onClick. Sem onTicketClick, vira link normal pro WhatsApp.
                */}
                <div
                  onClick={onTicketClick ? () => onTicketClick(ticket.href) : undefined}
                  className="mt-[20px] w-full cursor-pointer"
                >
                  <CTAButton
                    variant="white"
                    href={onTicketClick ? undefined : ticket.href}
                    target={onTicketClick ? undefined : '_blank'}
                    className="w-full !h-auto !min-h-[44px] !py-[10px] !px-[8px] !text-[13px] lg:!text-[14px] !leading-[1.2] !whitespace-normal flex items-center justify-center text-center"
                  >
                    {ticket.ctaText || 'Garantir meu ingresso'}
                  </CTAButton>
                </div>
              </div>

            </div>
          </div>
        )
      })}
    </div>
  )
}