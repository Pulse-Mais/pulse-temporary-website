import { CTAButton } from '@/components/UI/CTAButton'

interface TicketOptionProps {
  description: string
  price: string
  href: string
  ctaText?: string
}

export const TicketOption = ({ description, price, href, ctaText = 'Garantir meu ingresso' }: TicketOptionProps) => (
  <div className="w-[235px] mb-[22px] pt-[63px] pb-[13px] border border-t-0 border-white rounded-b-[12px] flex flex-col items-center text-center text-white">
    <p className="w-[180px] text-[13px] leading-[15px]">{description}</p>
    <p className="mt-[10px] text-[30px] font-bold leading-none">{price}</p>
    <CTAButton variant="white" href={href} target="_blank" className="mt-[30px]">
      {ctaText} 
    </CTAButton>
  </div>
)