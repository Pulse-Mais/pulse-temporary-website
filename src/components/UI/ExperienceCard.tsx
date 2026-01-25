import { Accordion } from './Accordion'
import { CTAButton } from './CTAButton'

interface ExperienceCardProps {
  title: string
  description: string
  accordionTitle?: string
  accordionContent?: string
  showCTA?: boolean
  ctaHref?: string
  isLast?: boolean
}

export const ExperienceCard = ({
  title,
  description,
  accordionTitle = 'Saiba Mais',
  accordionContent = 'Aqui vão mais informações',
  showCTA = false,
  ctaHref,
  isLast = false
}: ExperienceCardProps) => {
  return (
    <div className="w-full flex flex-col items-center">
      <h3 className="text-[30px] font-bold text-[#486284] mt-[26px] text-center">{title}</h3>
      <p className="text-[20px] font-normal text-[#486284] mt-8 text-center">{description}</p>
      <div className="mt-8 w-full">
        <Accordion title={accordionTitle}>{accordionContent}</Accordion>
      </div>
      {isLast && showCTA && (
        <div className="mt-6 flex justify-center">
          <CTAButton href={ctaHref}>Cadastre-se</CTAButton>
        </div>
      )}
    </div>
  )
}

