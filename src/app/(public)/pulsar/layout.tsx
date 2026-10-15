import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pulsar 2027 | Pulse Mais',
  // Se havia mais configurações no seu metadata anterior, pode colar aqui
}

export default function PulsarLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}