import Link from 'next/link'
import { ReactNode } from 'react'

type ActionButtonProps = {
  href: string
  children: ReactNode
  variant?: 'green' | 'blue'
  size?: 'md' | 'sm'
  className?: string
}

const variants = {
  green: 'bg-[#1F9D42] hover:bg-[#1A8638]',
  blue: 'bg-[#28AAFF] hover:bg-[#1196EC]',
}

const sizes = {
  md: 'w-[272px] max-w-full shrink-0 h-[43px] text-[15px]',
  sm: 'px-[20px] h-[36px] text-[14px]',
}

export const ActionButton = ({ href, children, variant = 'green', size = 'md', className = '' }: ActionButtonProps) => {
  const isExternal = href.startsWith('http')

  return (
    <Link
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className={`inline-flex items-center justify-center rounded-[8px] font-bold text-white transition-colors ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </Link>
  )
}
