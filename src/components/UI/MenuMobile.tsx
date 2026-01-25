'use client'
import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface MenuMobileProps {
  isOpen: boolean
  onClose: () => void
}

export const MenuMobile = ({ isOpen, onClose }: MenuMobileProps) => {
  const pathname = usePathname()

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const routes = [
    { name: 'Início', href: '/' },
    { name: 'Sobre', href: '/sobre' },
    { name: 'Apoie', href: '/apoie' },
    { name: 'Transparência', href: '/transparencia' },
    { name: 'Contato', href: '/contato' },
  ]

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/70 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 w-full h-full bg-white z-50 transition-transform duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="h-full flex flex-col px-[30px] pt-5">
          {/* Header do Drawer */}
          <div className="flex justify-between items-center mb-8">
            <Image
              src="/assents/logos/pulse-logo-header.svg"
              alt="Pulse Mais"
              width={159}
              height={50}
              className="w-[159px] h-[50px]"
            />
            {/* Botão X */}
            <button
              onClick={onClose}
              className="w-[50px] h-[10px] relative"
              aria-label="Fechar menu"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50px] h-[10px] bg-[#003870] rounded-[10px] rotate-45"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50px] h-[10px] bg-[#003870] rounded-[10px] -rotate-45"></div>
            </button>
          </div>

          {/* Links de Navegação */}
          <ul className="flex flex-col gap-4">
            {routes.map((route) => (
              <li key={route.href}>
                <Link
                  href={route.href}
                  onClick={onClose}
                  className={`text-[18px] font-semibold ${
                    pathname === route.href
                      ? 'text-[#003870] font-bold'
                      : 'text-[#6B6D6E]'
                  }`}
                >
                  {route.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  )
}

