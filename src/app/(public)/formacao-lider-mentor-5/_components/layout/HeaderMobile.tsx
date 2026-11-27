'use client'

import { useState } from 'react'
import { List, X } from '@phosphor-icons/react'
import { ActionButton } from '../ui/ActionButton'
import { AnchorLink } from '../ui/AnchorLink'
import { MENTOR_FORM_URL, NAV_ITEMS, anchorId } from '../data'

export const HeaderMobile = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
    {/* Espaçador do header fixo */}
    <div className="h-[64px]" />
    <header className="fixed top-0 left-0 z-50 w-full bg-white shadow-sm">
      <div className="h-[64px] px-4 flex items-center justify-end gap-[16px]">
        <ActionButton href={MENTOR_FORM_URL} size="sm">
          Quero ser mentor
        </ActionButton>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isOpen}
          className="text-[#0B2A5B]"
        >
          {isOpen ? <X size={28} weight="bold" /> : <List size={28} weight="bold" />}
        </button>
      </div>

      {isOpen && (
        <nav className="absolute top-full left-0 w-full bg-white border-t border-[#E3E9F3] shadow-md flex flex-col py-[8px]">
          {NAV_ITEMS.map((item) => (
            <AnchorLink
              key={item.id}
              targetId={anchorId(item.id, true)}
              onNavigate={() => setIsOpen(false)}
              className="px-4 py-[14px] text-[16px] font-semibold text-[#0B2A5B] active:bg-[#F4F7FB]"
            >
              {item.label}
            </AnchorLink>
          ))}
        </nav>
      )}
    </header>
    </>
  )
}
