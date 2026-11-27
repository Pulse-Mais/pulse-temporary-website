import Image from 'next/image'

type TestimonialCardProps = {
  quote: string
  name: string
  role: string
  photo: string
  className?: string
}

export const TestimonialCard = ({ quote, name, role, photo, className = '' }: TestimonialCardProps) => (
  <div className={`bg-white border border-[#E3E9F3] rounded-[16px] p-[24px] lg:p-[31px] flex flex-col ${className}`}>
    <p className="flex-1 text-[15px] leading-[23px] text-[#22304D]">“{quote}”</p>

    <div className="mt-[26px] pt-[26px] border-t border-[#E3E9F3] flex items-center gap-[12px]">
      <Image src={photo} alt={name} width={44} height={44} className="w-[44px] h-[44px] rounded-full object-cover shrink-0" />
      <div>
        <p className="text-[15px] font-bold text-[#0B2A5B]">{name}</p>
        <p className="text-[13px] leading-[15px] text-[#22304D]">{role}</p>
      </div>
    </div>
  </div>
)
