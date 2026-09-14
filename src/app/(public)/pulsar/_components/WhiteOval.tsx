import type { ReactNode } from 'react'

interface WhiteOvalProps {
  children: ReactNode
  className?: string
  // Raio vertical (px) das curvas de cima e de baixo; o horizontal é sempre 50%
  radiusTop: number
  radiusBottom: number
}

// Seção com fundo oval branco (610px de largura no mobile) que vaza nas laterais da tela
export const WhiteOval = ({ children, className = '', radiusTop, radiusBottom }: WhiteOvalProps) => (
  <section className={`relative w-full ${className}`}>
    <div
      aria-hidden
      className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[max(610px,170vw)] bg-white"
      style={{ borderRadius: `50% 50% 50% 50% / ${radiusTop}px ${radiusTop}px ${radiusBottom}px ${radiusBottom}px` }}
    />
    {children}
  </section>
)
