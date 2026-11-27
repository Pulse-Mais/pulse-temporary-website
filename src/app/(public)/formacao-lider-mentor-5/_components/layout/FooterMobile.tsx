import Image from 'next/image'
import { LOGO_FML } from '../data'
import { FooterDecoration, FooterSiteMap, FooterSocial } from './FooterLinks'

export const FooterMobile = () => (
  <footer className="relative w-full bg-[#0B2A5B] overflow-hidden">
    <div className="absolute inset-x-0 bottom-0 h-[136px]">
      <FooterDecoration />
    </div>
    <div className="relative px-4 pt-[40px] pb-[120px] flex flex-col gap-[28px]">
      <Image src={LOGO_FML} alt="Formação Líder Mentor - Apoio Fellipelli" width={260} height={66} className="w-[260px] h-auto" />
      <FooterSiteMap mobile />
      <FooterSocial />
    </div>
  </footer>
)
