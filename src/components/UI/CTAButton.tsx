import Link from 'next/link'

interface CTAButtonProps {
  href?: string
  onClick?: () => void
  children: React.ReactNode
  className?: string
}

export const CTAButton = ({ href, onClick, children, className = '' }: CTAButtonProps) => {
  const baseClasses = 'w-[300px] h-12 bg-[#486284] text-white text-[15px] font-medium rounded-[50px] flex items-center justify-center transition-opacity hover:opacity-90'
  
  if (href) {
    return (
      <Link href={href} className={`${baseClasses} ${className}`}>
        {children}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={`${baseClasses} ${className}`}>
      {children}
    </button>
  )
}


