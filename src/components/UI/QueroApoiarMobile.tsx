import Image from 'next/image'
import Link from 'next/link'

const actions = [
  { label: 'Seja Mentor Voluntário', href: 'https://mailchi.mp/5f880019d8a5/uuvkdx4axd', external: true },
  { label: 'Torne-se nosso parceiro', href: '/apoie', external: false },
]

interface QueroApoiarMobileProps {
  className?: string
}

export const QueroApoiarMobile = ({ className = '' }: QueroApoiarMobileProps) => (
  <section className={`w-full flex justify-center ${className}`}>
    <div className="w-[305px] p-[12px] rounded-[30px] border-pulsar-gold">
      <div className="relative h-[251px] rounded-[18px] overflow-hidden flex flex-col items-center">
        <Image src="/assents/images/queroapoiar-img.png" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-[#003870]/60" />

        <h2 className="relative mt-[32px] text-[37px] font-bold leading-[45px] text-white">
          Quero apoiar
        </h2>
        <div className="relative mt-[31px] flex flex-col gap-[12px]">
          {actions.map((action) => (
            <Link
              key={action.label}
              href={action.href}
              target={action.external ? '_blank' : undefined}
              className="w-[249px] h-[44px] rounded-full border border-white flex items-center justify-center text-[14px] font-bold text-white hover:bg-white hover:text-[#003870] transition-all duration-300"
            >
              {action.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  </section>
)
