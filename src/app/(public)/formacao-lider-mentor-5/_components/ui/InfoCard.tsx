type InfoCardProps = {
  title: string
  text: string
  subtitle?: string
  theme?: 'dark' | 'light'
  className?: string
}

// Card com traço amarelo no topo. "dark" = seção "Por que se tornar", "light" = seção "Para quem"
export const InfoCard = ({ title, text, subtitle, theme = 'dark', className = '' }: InfoCardProps) => {
  const isDark = theme === 'dark'

  return (
    <div
      className={`rounded-[16px] p-[24px] lg:p-[29px] ${
        isDark ? 'bg-[#1E3B68] border border-white/25' : 'bg-white'
      } ${className}`}
    >
      <span className="block w-[36px] h-[4px] rounded-full bg-[#FFC20E]" />
      <h3 className={`mt-[14px] text-[18px] font-bold leading-[22px] ${isDark ? 'text-white' : 'text-[#0B2A5B]'}`}>
        {title}
      </h3>
      {subtitle && <p className="mt-[10px] text-[14px] font-bold text-[#1F9D42]">{subtitle}</p>}
      <p
        className={`text-[15px] leading-[23px] ${subtitle ? 'mt-[8px]' : 'mt-[12px]'} ${
          isDark ? 'text-white/90' : 'text-[#22304D]'
        }`}
      >
        {text}
      </p>
    </div>
  )
}
