import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Header } from '@/components/UI/Header'
import { Footer } from '@/components/UI/Footer'

const PoppinsFont = Poppins({ weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Seja a mudança que a sua carreira precisa!',
  description: 'Impulsione sua qualificação profissional para tecnologia com a Pulse Mais e tenha acesso a mentorias, oportunidades de vagas e bolsas de estudos gratuitas para a universidade!',
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
