import { CTAButton } from '@/components/UI/CTAButton'

interface TicketOptionProps {
  description: string
  price: string
  href: string
  ctaText?: string
  // Se vier onClick (abrir o modal), o clique é capturado aqui no wrapper
  onClick?: () => void
}

export const TicketOption = ({
  description,
  price,
  href,
  ctaText = 'Garantir meu ingresso',
  onClick,
}: TicketOptionProps) => (
  <div className="w-[235px] mb-[22px] pt-[63px] pb-[13px] border border-t-0 border-white rounded-b-[12px] flex flex-col items-center text-center text-white">
    <p className="w-[180px] text-[13px] leading-[15px]">{description}</p>
    <p className="mt-[10px] text-[30px] font-bold leading-none">{price}</p>

    {/*
      O onClick fica no wrapper, e não no CTAButton: o clique no botão "sobe"
      até aqui (bubbling), então funciona mesmo que o CTAButton não repasse
      o onClick para o elemento interno.
      Sem onClick, o botão se comporta como link normal para o WhatsApp.
    */}
    <div onClick={onClick} className="mt-[30px] cursor-pointer">
      <CTAButton
        variant="white"
        href={onClick ? undefined : href}
        target={onClick ? undefined : '_blank'}
      >
        {ctaText}
      </CTAButton>
    </div>
  </div>
)