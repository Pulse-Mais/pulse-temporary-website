import Image from 'next/image'

interface PlusGoldProps {
  size: number
  className?: string
}

// Ícone "+" dourado decorativo. Posicionar via className (top/left/right).
export const PlusGold = ({ size, className = '' }: PlusGoldProps) => (
  <Image
    src="/assents/backgrounds/plus-gold.svg"
    alt=""
    aria-hidden
    width={size}
    height={size}
    className={`absolute pointer-events-none select-none ${className}`}
    style={{ width: size, height: size }}
  />
)
