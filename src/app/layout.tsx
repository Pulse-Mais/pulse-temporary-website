import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Header } from '@/components/UI/Header'
import { Footer } from '@/components/UI/Footer'

const PoppinsFont = Poppins({
  weight: ['700', '400', '500', '600'],
  subsets: ['latin'],
  variable: '--poppins-default'
});

export const metadata: Metadata = {
  title: 'DPFL',
  description: 'Potencializando a jornada de jovens brasileiros através da educação, tecnologia e empregabilidade.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className='!scroll-smooth'>
      <body className={PoppinsFont.className}>
        <Header />
         {children}
        <Footer />
      </body>
    </html>
  )
}
