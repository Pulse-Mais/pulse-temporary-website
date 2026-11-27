import Image from 'next/image'
import { LOGO_FML } from '../data'
import { FooterDecoration, FooterSiteMap, FooterSocial } from './FooterLinks'

export const FooterDesktop = () => (
  <footer className="relative w-full h-[136px] bg-[#0B2A5B] overflow-hidden">
    <FooterDecoration />
    <div className="relative h-full max-w-[1440px] mx-auto px-[77px] grid grid-cols-[1fr_1fr_auto] xl:grid-cols-[547px_438px_auto] items-center gap-[24px] xl:gap-0">
      <Image src={LOGO_FML} alt="Formação Líder Mentor - Apoio Fellipelli" width={306} height={78} className="w-[306px] h-auto" />
      <FooterSiteMap />
      <FooterSocial />
    </div>
  </footer>
)
