import Image from 'next/image'
import { HeaderMobile } from './layout/HeaderMobile'
import { FooterMobile } from './layout/FooterMobile'
import { SectionTitle } from './ui/SectionTitle'
import { ActionButton } from './ui/ActionButton'
import { InfoCard } from './ui/InfoCard'
import { StatCard } from './ui/StatCard'
import { StepCard } from './ui/StepCard'
import { TestimonialCard } from './ui/TestimonialCard'
import { FaqList } from './ui/FaqList'
import { HeroHeadline } from './ui/HeroHeadline'
import { ClassTag } from './ui/ClassTag'
import {
  ABOUT,
  AUDIENCE_TEXT,
  CLASS_LABEL,
  EXECUTIVE_SUMMARY_URL,
  FAQS,
  FINAL_CTA,
  HERO,
  LOGO_FML,
  MENTOR_FORM_URL,
  PARTNERSHIP,
  PROFILES,
  REASONS,
  SECTION_IDS,
  STATS,
  STEPS,
  TESTIMONIALS,
  anchorId,
} from './data'

// Até 1023px. Em tablets o conteúdo é limitado a 720px e alguns grids abrem em 2 colunas.
const container = 'w-full max-w-[720px] mx-auto px-4'
const sectionTitleClass = 'text-[28px] leading-[34px]'

export const MobileView = () => (
  <div className="block lg:hidden w-full">
    <HeaderMobile />

    {/* 1. Hero */}
    <section className="w-full bg-[#0B2A5B]">
      <div className={`${container} pt-[32px] pb-[40px]`}>
        <Image src={LOGO_FML} alt="Formação Líder Mentor - Apoio Fellipelli" width={280} height={72} priority className="w-[280px] h-auto" />
        <HeroHeadline className="mt-[28px] text-[34px] leading-[40px] sm:text-[44px] sm:leading-[50px]" />
        <p className="mt-[16px] text-[16px] leading-[25px] text-white">{HERO.description}</p>
        <p className="mt-[20px] text-[16px] font-bold text-[#FFC20E]">{HERO.badge}</p>
        <ActionButton href={MENTOR_FORM_URL} className="mt-[14px]">
          Quero ser mentor Pulse Mais
        </ActionButton>
      </div>
      <div className="relative w-full aspect-[600/560] max-h-[560px]">
        <Image src={HERO.image} alt="Mentores e jovens da Pulse Mais em roda de conversa" fill priority className="object-cover" />
      </div>
    </section>

    {/* 2. Por que se tornar um Líder Mentor */}
    <section className="w-full bg-[#0B2A5B] py-[56px]">
      <div className={`${container} flex flex-col items-center`}>
        <SectionTitle theme="dark" className={sectionTitleClass}>
          Por que se tornar um Líder Mentor Pulse Mais?
        </SectionTitle>
        <div className="mt-[32px] w-full grid grid-cols-1 gap-[16px]">
          {REASONS.map((reason) => (
            <InfoCard key={reason.title} {...reason} theme="dark" />
          ))}
        </div>
        <ActionButton href={MENTOR_FORM_URL} className="mt-[32px]">
          Quero ser mentor Pulse Mais
        </ActionButton>
      </div>
    </section>

    {/* 3. O que é a Formação */}
    <section id={anchorId(SECTION_IDS.formacao, true)} className="w-full bg-white py-[56px] scroll-mt-[64px]">
      <div className={container}>
        <SectionTitle align="left" className={sectionTitleClass}>
          {ABOUT.title}
        </SectionTitle>
        <Image
          src={ABOUT.image}
          alt="Turma da Formação Líder Mentor"
          width={500}
          height={340}
          className="mt-[28px] w-full h-auto rounded-[16px] border-2 border-[#FFC20E]"
        />
        <p className="mt-[24px] text-[16px] leading-[26px] text-[#22304D]">{ABOUT.text}</p>
        <p className="mt-[20px] inline-block rounded-[10px] border-l-[6px] border-[#1F9D42] bg-[#F4F7FB] px-[18px] py-[10px] text-[14px] font-bold text-[#0B2A5B]">
          {ABOUT.note}
        </p>

        <div className="mt-[40px] grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
          {STATS.map((stat) => (
            <StatCard key={stat.title} {...stat} />
          ))}
        </div>
      </div>
    </section>

    {/* 4. Para quem é esta formação */}
    <section id={anchorId(SECTION_IDS.paraQuem, true)} className="w-full bg-[#0B2A5B] py-[56px] scroll-mt-[64px]">
      <div className={`${container} flex flex-col items-center`}>
        <SectionTitle theme="dark" className={sectionTitleClass}>
          Para quem é esta formação?
        </SectionTitle>
        <p className="mt-[28px] text-center text-[15px] leading-[24px] text-white">{AUDIENCE_TEXT}</p>
        <div className="mt-[32px] w-full grid grid-cols-1 gap-[16px]">
          {PROFILES.map((profile) => (
            <InfoCard key={profile.title} {...profile} theme="light" />
          ))}
        </div>
        <ActionButton href={MENTOR_FORM_URL} className="mt-[32px]">
          Quero ser mentor Pulse Mais
        </ActionButton>
      </div>
    </section>

    {/* 5. Cronograma */}
    <section id={anchorId(SECTION_IDS.cronograma, true)} className="w-full bg-[#F4F7FB] py-[56px] scroll-mt-[64px]">
      <div className={`${container} flex flex-col items-center`}>
        <SectionTitle className={sectionTitleClass}>
          Cronograma da <ClassTag>{CLASS_LABEL}</ClassTag>
        </SectionTitle>
        <div className="mt-[32px] w-full grid grid-cols-1 gap-[12px]">
          {STEPS.map((step, index) => (
            <StepCard key={step} number={index + 1} label={step} layout="horizontal" />
          ))}
        </div>
        <div className="mt-[32px] w-full flex flex-col sm:flex-row items-center justify-center gap-[16px]">
          <ActionButton href={MENTOR_FORM_URL}>Quero ser mentor Pulse Mais</ActionButton>
          <ActionButton href={EXECUTIVE_SUMMARY_URL} variant="blue">
            Sumário Executivo
          </ActionButton>
        </div>
      </div>
    </section>

    {/* 6. Sobre a parceria */}
    <section className="w-full bg-white py-[56px]">
      <div className={container}>
        <SectionTitle align="left" className={sectionTitleClass}>
          {PARTNERSHIP.title}
        </SectionTitle>
        <p className="mt-[24px] text-[16px] leading-[26px] text-[#22304D]">{PARTNERSHIP.text}</p>
      </div>
    </section>

    {/* 7. Depoimentos */}
    <section id={anchorId(SECTION_IDS.depoimentos, true)} className="w-full bg-[#F4F7FB] py-[56px] scroll-mt-[64px]">
      <div className={`${container} flex flex-col items-center`}>
        <SectionTitle className={sectionTitleClass}>Depoimentos de quem viveu a transformação</SectionTitle>
        <div className="mt-[32px] w-full grid grid-cols-1 gap-[16px]">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </div>
    </section>

    {/* 8. Perguntas frequentes */}
    <section id={anchorId(SECTION_IDS.duvidas, true)} className="w-full bg-white pt-[56px] scroll-mt-[64px]">
      <div className={`${container} flex flex-col items-center`}>
        <SectionTitle className={sectionTitleClass}>Perguntas frequentes</SectionTitle>
        <FaqList items={FAQS} className="mt-[24px] w-full" />
      </div>
    </section>

    {/* 9. CTA final */}
    <section className="w-full bg-white pt-[56px] pb-[56px]">
      <div className={container}>
        <div className="rounded-[20px] bg-[#0B2A5B] shadow-[0_6px_0_#FFC20E] px-[20px] py-[44px] flex flex-col items-center">
          <SectionTitle theme="dark" className={sectionTitleClass}>
            {FINAL_CTA.title}
          </SectionTitle>
          <p className="mt-[18px] text-[16px] leading-[24px] text-white text-center">{FINAL_CTA.text}</p>
          <ActionButton href={MENTOR_FORM_URL} className="mt-[20px]">
            Quero ser mentor Pulse Mais
          </ActionButton>
        </div>
      </div>
    </section>

    <FooterMobile />
  </div>
)
