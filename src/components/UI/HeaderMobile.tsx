'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MenuMobile } from './MenuMobile'

export const HeaderMobile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 w-full h-[124px] bg-white z-50 flex justify-between items-start md:hidden">
        {/* Logo */}
        <div className="ml-[30px] mt-[42px]">
          <Image
            src="/assents/logos/pulse-logo-header.svg"
            alt="Pulse Mais"
            width={159}
            height={50}
            className="w-[159px] h-[50px]"
            priority
          />
        </div>

        {/* Menu Hambúrguer */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="mr-[34px] mt-[42px] flex flex-col gap-[10px]"
          aria-label="Abrir menu"
        >
          <div className="w-[50px] h-[10px] bg-[#003870] rounded-[10px]"></div>
          <div className="w-[50px] h-[10px] bg-[#003870] rounded-[10px]"></div>
          <div className="w-[50px] h-[10px] bg-[#003870] rounded-[10px]"></div>
        </button>

        {/* Menu Drawer */}
        <MenuMobile isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </header>
    </>
  )
}

