import { ActionButton } from '../ui/ActionButton'
import { AnchorLink } from '../ui/AnchorLink'
import { MENTOR_FORM_URL, NAV_ITEMS, anchorId } from '../data'

export const HeaderDesktop = () => (
  <>
  {/* Espaçador do header fixo */}
  <div className="h-[72px]" />
  <header className="fixed top-0 left-0 z-50 w-full h-[72px] bg-white">
    <nav className="h-full max-w-[1440px] mx-auto px-[24px] flex items-center justify-end gap-[28px]">
      {NAV_ITEMS.map((item) => (
        <AnchorLink
          key={item.id}
          targetId={anchorId(item.id)}
          className="text-[14px] font-semibold text-[#0B2A5B] hover:text-[#1F9D42] transition-colors"
        >
          {item.label}
        </AnchorLink>
      ))}
      <ActionButton href={MENTOR_FORM_URL} size="sm">
        Quero ser mentor
      </ActionButton>
    </nav>
  </header>
  </>
)
