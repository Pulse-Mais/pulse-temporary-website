type StatCardProps = {
  value: string
  title: string
  text: string
  className?: string
}

export const StatCard = ({ value, title, text, className = '' }: StatCardProps) => (
  <div className={`bg-white border border-[#E3E9F3] rounded-[16px] p-[24px] lg:p-[29px] ${className}`}>
    <p className="text-[28px] lg:text-[32px] font-bold leading-tight text-[#0B2A5B]">{value}</p>
    <h3 className="mt-[8px] text-[18px] font-bold text-[#0B2A5B]">{title}</h3>
    <p className="mt-[10px] text-[14px] leading-[23px] text-[#22304D] whitespace-pre-line">{text}</p>
  </div>
)
