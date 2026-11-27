import { ReactNode } from 'react'

// Trecho do título do hero com degradê azul (claro -> forte)
const Highlight = ({ children }: { children: ReactNode }) => (
  <span className="bg-gradient-to-r from-[#C2E7FF] to-[#3DB2FF] bg-clip-text text-transparent">{children}</span>
)

export const HeroHeadline = ({ className = '' }: { className?: string }) => (
  <h1 className={`font-bold text-white ${className}`}>
    Use sua <Highlight>experiência</Highlight> para <Highlight>impulsionar o</Highlight> futuro{' '}
    <Highlight>dos jovens.</Highlight>
  </h1>
)
