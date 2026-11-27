type StepCardProps = {
  number: number
  label: string
  layout?: 'vertical' | 'horizontal'
  className?: string
}

// Etapa do cronograma. "vertical" no desktop, "horizontal" no mobile
export const StepCard = ({ number, label, layout = 'vertical', className = '' }: StepCardProps) => {
  const isVertical = layout === 'vertical'

  return (
    <div
      className={`bg-white border border-[#E3E9F3] rounded-[16px] flex ${
        isVertical ? 'flex-col items-center text-center px-[16px] pt-[28px] pb-[24px] h-[160px]' : 'flex-row items-center gap-[16px] px-[20px] py-[16px]'
      } ${className}`}
    >
      <span className="w-[42px] h-[42px] shrink-0 rounded-full bg-[#0B2A5B] text-white text-[16px] font-bold flex items-center justify-center">
        {number}
      </span>
      <p className={`text-[15px] font-bold leading-[18px] text-[#0B2A5B] ${isVertical ? 'mt-[16px]' : ''}`}>{label}</p>
    </div>
  )
}
