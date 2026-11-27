import Image from 'next/image'
import Link from 'next/link'

export type Member = {
  name: string
  role: string
  quote: string
  photo?: string
  linkedin?: string
}

type MemberCardProps = Member & {
  className?: string
}

const LinkedinIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.7855 0H23.6774C10.6007 0 0 10.6038 0 23.6844V23.7925C0 36.873 10.6007 47.4768 23.6774 47.4768H23.7855C36.8621 47.4768 47.4629 36.873 47.4629 23.7925V23.6844C47.4629 10.6038 36.8621 0 23.7855 0Z" fill="#28AAFF" />
    <path d="M11.319 15.7803C10.6937 15.1998 10.3828 14.4812 10.3828 13.6263C10.3828 12.7713 10.6954 12.0211 11.319 11.439C11.9442 10.8585 12.749 10.5674 13.7351 10.5674C14.7212 10.5674 15.4944 10.8585 16.118 11.439C16.7432 12.0195 17.0542 12.7497 17.0542 13.6263C17.0542 14.5029 16.7416 15.1998 16.118 15.7803C15.4928 16.3608 14.6996 16.6519 13.7351 16.6519C12.7707 16.6519 11.9442 16.3608 11.319 15.7803ZM16.5287 19.1103V36.9081H10.9066V19.1103H16.5287Z" fill="white" />
    <path d="M35.2436 20.8683C36.4691 22.199 37.0811 24.0254 37.0811 26.3507V36.5936H31.7417V27.0726C31.7417 25.8999 31.4374 24.9884 30.8304 24.3397C30.2235 23.691 29.4054 23.365 28.3811 23.365C27.3567 23.365 26.5386 23.6894 25.9316 24.3397C25.3247 24.9884 25.0204 25.8999 25.0204 27.0726V36.5936H19.6494V19.0603H25.0204V21.3856C25.5642 20.6105 26.2975 19.9984 27.2187 19.5476C28.1399 19.0969 29.1759 18.8723 30.3283 18.8723C32.3802 18.8723 34.0198 19.5377 35.2436 20.8667V20.8683Z" fill="white" />
  </svg>
)

export const MemberCard = ({ name, role, quote, photo, linkedin, className = '' }: MemberCardProps) => {
  return (
    <div
      className={`w-full max-w-[358px] h-[401px] bg-white border border-[#D9D7D8] rounded-[20px] flex flex-col items-center pt-[35px] pb-[20px] px-[34px] ${className}`}
    >
      {/* Foto */}
      <div className="relative w-[140px] h-[140px] rounded-full border-[3px] border-[#FCC41F] overflow-hidden bg-[#E5E7EB] shrink-0">
        {photo && <Image src={photo} alt={name} fill className="object-cover" />}
      </div>

      {/* Nome */}
      <h4 className="mt-[14px] text-[22px] font-bold text-[#003870] text-center leading-tight">
        {name}
      </h4>

      {/* Cargo */}
      <span className="mt-[4px] px-[18px] py-[5px] rounded-full bg-[#E3F5E9] text-[12px] font-semibold text-[#003870] uppercase tracking-wide text-center">
        {role}
      </span>

      {/* Depoimento */}
      <p className="mt-[14px] w-full text-[15px] font-normal text-[#003870] leading-[18px] text-left">
        “ {quote}”
      </p>

      {/* LinkedIn */}
      {linkedin && (
        <Link
          href={linkedin}
          target="_blank"
          aria-label={`LinkedIn de ${name}`}
          className="mt-auto hover:opacity-80 transition-opacity"
        >
          <LinkedinIcon />
        </Link>
      )}
    </div>
  )
}
