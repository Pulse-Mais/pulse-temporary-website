import Link from 'next/link'

interface CTAButtonProps {
  href?: string
  onClick?: () => void
  children: React.ReactNode
  variant?: 'hero' | 'outline' | 'yellow' | 'green' | 'gray' | 'gold' | 'gold-outline' | 'white' | 'gold-lg'
  className?: string
  target?: string
}

export const CTAButton = ({
  href,
  onClick,
  children,
  variant = 'hero',
  className = '',
  target,
}: CTAButtonProps) => {
  const baseClasses = 'rounded-[50px] font-bold transition-all duration-300 flex items-center justify-center'
  
  const variantClasses = {
    hero: 'w-[300px] h-[48px] bg-transparent border border-white/50 text-[#FCC41F] text-[15px] hover:bg-[#33B458]',
    outline: 'w-[300px] h-[48px] bg-transparent border border-[#003870] text-[#003870] text-[16px] hover:bg-[#33B458] hover:text-white hover:border-[#33B458]',
    yellow: 'w-[258px] h-[48px] bg-[#FCC41F] text-white text-[16px]',
    green: 'w-[258px] h-[48px] bg-[#25B957] text-white text-[16px]',
    gray: 'w-[300px] h-[48px] bg-[#F5F5F5] border border-[#003870] text-[#003870] text-[16px] hover:bg-[#33B458] hover:text-white hover:border-[#33B458]',
    // Variantes da página Pulsar (gradiente dourado definido em globals.css)
    gold: 'w-[214px] h-[35px] bg-pulsar-gold text-[#003870] text-[12px] hover:brightness-110',
    'gold-outline': 'w-[214px] h-[35px] border-pulsar-gold [--pulsar-fill:#FFFFFF] text-[#003870] text-[12px] hover:[--pulsar-fill:#FCF3D6]',
    white: 'w-[214px] h-[35px] bg-white text-[#003870] text-[12px] hover:bg-[#FCF3D6]',
    // Desktop: botão grande com preenchimento dourado (542x75, texto 24px)
    'gold-lg': 'w-[542px] max-w-full h-[75px] bg-pulsar-gold text-[#003870] text-[24px] hover:brightness-110',
  }

  const finalClasses = `${baseClasses} ${variantClasses[variant]} ${className}`

  if (href) {
    return (
      <Link
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        className={finalClasses}
      >
        {children}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={finalClasses}>
      {children}
    </button>
  )
}
