import { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

// A LP usa Montserrat, diferente do restante do site (Poppins)
const montserrat = Montserrat({ weight: ['400', '500', '600', '700', '800'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Formação Líder Mentor - Turma 5 | Pulse Mais',
  description:
    'Use sua experiência para impulsionar o futuro dos jovens. Formação Líder Mentor da Pulse Mais em parceria com a Fellipelli.',
}

export default function FormacaoLiderMentorLayout({ children }: { children: React.ReactNode }) {
  return <div className={`${montserrat.className} tracking-[-0.02em]`}>{children}</div>
}
