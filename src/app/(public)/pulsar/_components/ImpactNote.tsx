interface ImpactNoteProps {
  className?: string
  // Tamanho/altura de linha do texto (varia por seção)
  textSizeClassName?: string
}

export const ImpactNote = ({ className = '', textSizeClassName = 'text-[9px] leading-[11px]' }: ImpactNoteProps) => (
  <p className={`relative max-w-[300px] text-center tracking-[0.065em] ${textSizeClassName} ${className}`}>
    A compra do ingresso contribui diretamente para a formação e o desenvolvimento profissional de jovens de baixa
    renda em carreiras de tecnologia.
  </p>
)
