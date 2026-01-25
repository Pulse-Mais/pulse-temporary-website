'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const HeaderDesktop = () => {
  const pathname = usePathname()

  const routes = [
    { name: 'Sobre', href: '/sobre' },
    { name: 'Apoie', href: '/apoie' },
    { name: 'Transparência', href: '/transparencia' },
    { name: 'Contato', href: '/contato' },
  ]

  return (
    <header className="relative w-full bg-white hidden md:flex">
      {/* Onda Decorativa Esquerda Superior */}
      <div className="absolute top-0 left-0 z-0">
        <Image
          src="/assents/backgrounds/menu-wave-desktop.svg"
          alt="Menu Wave"
          width={250}
          height={190}
          className="w-[250px] h-auto"
        />
      </div>

      {/* Container Principal */}
      <div className="relative w-full max-w-[1440px] mx-auto flex flex-row justify-between items-center h-[130px] z-10">
        {/* Logo com Link para Home */}
        <div className="ml-[120px]">
          <Link href="/">
            <Image
              src="/assents/logos/pulse-logo-header.svg"
              alt="Pulse Mais"
              width={250}
              height={50}
              className="w-[230px] h-[90px] cursor-pointer hover:opacity-90 transition-opacity"
              priority
            />
          </Link>
        </div>

        {/* Menu de Navegação */}
        <nav className="flex items-center gap-[66px] mr-[130px]">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={`text-[20px] font-medium transition-colors ${
                pathname === route.href
                  ? 'text-[#003870] font-bold'
                  : 'text-[#003870] hover:opacity-70'
              }`}
            >
              {route.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}