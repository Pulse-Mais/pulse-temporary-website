import { Fragment } from 'react'
import Link from 'next/link'
import { AnchorLink } from '../ui/AnchorLink'
import { FOOTER_NAV_ITEMS, SOCIAL_LINKS, anchorId } from '../data'

const linkClass = 'hover:text-[#FFC20E] transition-colors'

const Separator = () => <span aria-hidden> · </span>

// Colunas "Mapa do site" e "Redes sociais", compartilhadas entre footer desktop e mobile
export const FooterSiteMap = ({ mobile = false }: { mobile?: boolean }) => (
  <div>
    <p className="text-[14px] font-bold text-white">Mapa do site</p>
    <p className="mt-[6px] text-[14px] text-white/90">
      {FOOTER_NAV_ITEMS.map((item, index) => (
        <Fragment key={item.id}>
          {index > 0 && <Separator />}
          <AnchorLink targetId={anchorId(item.id, mobile)} className={linkClass}>
            {item.label}
          </AnchorLink>
        </Fragment>
      ))}
    </p>
  </div>
)

export const FooterSocial = () => (
  <div>
    <p className="text-[14px] font-bold text-white">Redes sociais</p>
    <p className="mt-[6px] text-[14px] text-white/90">
      {SOCIAL_LINKS.map((item, index) => (
        <Fragment key={item.label}>
          {index > 0 && <Separator />}
          {item.href ? (
            <Link href={item.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
              {item.label}
            </Link>
          ) : (
            <span>{item.label}</span>
          )}
        </Fragment>
      ))}
    </p>
  </div>
)

// Curvas amarela e azul no canto inferior direito
export const FooterDecoration = () => (
  <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
    <span className="absolute right-[-220px] top-[36px] w-[360px] h-[200px] rounded-[50%] bg-[#FFC20E]" />
    <span className="absolute right-[-210px] top-[106px] w-[420px] h-[160px] rounded-[50%] bg-[#1F6FD6]" />
  </div>
)
