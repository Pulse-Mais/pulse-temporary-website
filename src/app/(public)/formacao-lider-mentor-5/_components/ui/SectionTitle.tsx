import { ReactNode } from 'react'

type SectionTitleProps = {
  children: ReactNode
  theme?: 'light' | 'dark'
  align?: 'center' | 'left'
  className?: string
}

// Título de seção com o traço amarelo abaixo
export const SectionTitle = ({ children, theme = 'light', align = 'center', className = '' }: SectionTitleProps) => {
  const color = theme === 'dark' ? 'text-white' : 'text-[#0B2A5B]'
  const alignment = align === 'center' ? 'items-center text-center' : 'items-start text-left'

  return (
    <div className={`flex flex-col ${alignment}`}>
      <h2 className={`font-bold ${color} ${className}`}>{children}</h2>
      <span className="mt-[14px] block w-[56px] h-[4px] rounded-full bg-[#FFC20E]" />
    </div>
  )
}
