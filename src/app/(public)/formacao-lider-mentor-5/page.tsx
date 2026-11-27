import { DesktopView } from './_components/DesktopView'
import { MobileView } from './_components/MobileView'

export default function FormacaoLiderMentor5() {
  return (
    <>
      {/* Até 1023px */}
      <MobileView />
      {/* A partir de 1024px */}
      <DesktopView />
    </>
  )
}
