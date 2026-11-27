'use client'

import { MouseEvent, ReactNode } from 'react'

type AnchorLinkProps = {
  targetId: string
  children: ReactNode
  className?: string
  onNavigate?: () => void
}

// Link de âncora para seções da própria página, com rolagem suave.
// O desconto do header fixo vem do scroll-mt de cada seção.
export const AnchorLink = ({ targetId, children, className = '', onNavigate }: AnchorLinkProps) => {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    const target = document.getElementById(targetId)
    if (!target) return

    event.preventDefault()
    onNavigate?.()
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    window.history.replaceState(null, '', `#${targetId}`)
  }

  return (
    <a href={`#${targetId}`} onClick={handleClick} className={`cursor-pointer ${className}`}>
      {children}
    </a>
  )
}
