import Image from 'next/image'
import { HeaderDesktop } from './layout/HeaderDesktop'
import { FooterDesktop } from './layout/FooterDesktop'
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
} from './data'

// Largura útil do conteúdo: 1120px
const container = 'max-w-[1168px] mx-auto px-6'
const sectionTitleClass = 'text-[36px] leading-[44px]'

export const DesktopView = () => (
  <div className="hidden lg:block w-full">
    <HeaderDesktop />

    {/* 1. Hero */}
    <section className="w-full bg-[#0B2A5B]">
      <div className="max-w-[1440px] mx-auto flex min-h-[560px]">
        <div className="flex-1 pl-[max(24px,calc((100%_-_1120px)/2))] pr-[40px] pt-[28px] pb-[55px]">
          <Image src={LOGO_FML} alt="Formação Líder Mentor - Apoio Fellipelli" width={383} height={98} priority className="w-[383px] h-auto" />
          <HeroHeadline className="mt-[34px] max-w-[600px] text-[44px] leading-[50px] xl:text-[56px] xl:leading-[62px]" />
          <p className="mt-[20px] max-w-[530px] text-[18px] leading-[28px] text-white">{HERO.description}</p>
          <p className="mt-[26px] text-[16px] font-bold text-[#FFC20E]">{HERO.badge}</p>
          <ActionButton href={MENTOR_FORM_URL} className="mt-[18px]">
            Quero ser mentor Pulse Mais
          </ActionButton>
        </div>
        <div className="relative w-[41.67%] max-w-[600px] shrink-0">
          <Image src={HERO.image} alt="Mentores e jovens da Pulse Mais em roda de conversa" fill priority className="object-cover" />
        </div>
      </div>
    </section>

    {/* 2. Por que se tornar um Líder Mentor */}
    <section className="w-full bg-[#0B2A5B] pt-[80px] pb-[87px]">
      <div className={`${container} flex flex-col items-center`}>
        <SectionTitle theme="dark" className={sectionTitleClass}>
          Por que se tornar um Líder Mentor Pulse Mais?
        </SectionTitle>
        <div className="mt-[44px] w-full grid grid-cols-3 gap-[23px]">
          {REASONS.map((reason) => (
            <InfoCard key={reason.title} {...reason} theme="dark" />
          ))}
        </div>
        <ActionButton href={MENTOR_FORM_URL} className="mt-[45px]">
          Quero ser mentor Pulse Mais
        </ActionButton>
      </div>
    </section>

    {/* 3. O que é a Formação */}
    <section id={SECTION_IDS.formacao} className="w-full bg-white pt-[81px] pb-[89px] scroll-mt-[72px]">
      <div className={container}>
        <div className="grid grid-cols-[minmax(0,500px)_1fr] gap-[56px] items-center">
          <Image
            src={ABOUT.image}
            alt="Turma da Formação Líder Mentor"
            width={500}
            height={340}
            className="w-full h-auto rounded-[16px] border-2 border-[#FFC20E]"
          />
          <div>
            <SectionTitle align="left" className="text-[32px] leading-[40px] max-w-[480px]">
              {ABOUT.title}
            </SectionTitle>
            <p className="mt-[22px] text-[16px] leading-[26px] text-[#22304D]">{ABOUT.text}</p>
            <p className="mt-[22px] inline-block rounded-[10px] border-l-[6px] border-[#1F9D42] bg-[#F4F7FB] px-[22px] py-[10px] text-[14px] font-bold text-[#0B2A5B]">
              {ABOUT.note}
            </p>
          </div>
        </div>

        <div className="mt-[64px] grid grid-cols-4 gap-[23px]">
          {STATS.map((stat) => (
            <StatCard key={stat.title} {...stat} className="min-h-[255px]" />
          ))}
        </div>
      </div>
    </section>

    {/* 4. Para quem é esta formação */}
    <section id={SECTION_IDS.paraQuem} className="w-full bg-[#0B2A5B] pt-[88px] pb-[88px] scroll-mt-[72px]">
      <div className={`${container} flex flex-col items-center`}>
        <SectionTitle theme="dark" className={sectionTitleClass}>
          Para quem é esta formação?
        </SectionTitle>
        <p className="mt-[42px] max-w-[870px] text-center text-[16px] leading-[26px] text-white">{AUDIENCE_TEXT}</p>
        <div className="mt-[44px] w-full grid grid-cols-3 gap-[23px]">
          {PROFILES.map((profile) => (
            <InfoCard key={profile.title} {...profile} theme="light" className="min-h-[244px]" />
          ))}
        </div>
        <ActionButton href={MENTOR_FORM_URL} className="mt-[45px]">
          Quero ser mentor Pulse Mais
        </ActionButton>
      </div>
    </section>

    {/* 5. Cronograma */}
    <section id={SECTION_IDS.cronograma} className="w-full bg-[#F4F7FB] pt-[88px] pb-[66px] scroll-mt-[72px]">
      <div className={`${container} flex flex-col items-center`}>
        <SectionTitle className={sectionTitleClass}>
          Cronograma da <ClassTag>{CLASS_LABEL}</ClassTag>
        </SectionTitle>
        <div className="mt-[44px] w-full grid grid-cols-4 gap-[23px]">
          {STEPS.map((step, index) => (
            <StepCard key={step} number={index + 1} label={step} />
          ))}
        </div>
        <div className="mt-[56px] flex gap-[45px]">
          <ActionButton href={MENTOR_FORM_URL}>
            Quero ser mentor Pulse Mais
          </ActionButton>
          <ActionButton href={EXECUTIVE_SUMMARY_URL} variant="blue">
            Sumário Executivo
          </ActionButton>
        </div>
      </div>
    </section>

    {/* 6. Sobre a parceria */}
    <section className="w-full bg-white pt-[80px] pb-[160px]">
      <div className="max-w-[1206px] mx-auto px-6">
        <SectionTitle align="left" className="text-[32px] leading-[40px] max-w-[560px]">
          {PARTNERSHIP.title}
        </SectionTitle>
        <p className="mt-[24px] text-[16px] leading-[26px] text-[#22304D]">{PARTNERSHIP.text}</p>
      </div>
    </section>

    {/* 7. Depoimentos */}
    <section id={SECTION_IDS.depoimentos} className="w-full bg-[#F4F7FB] pt-[88px] pb-[89px] scroll-mt-[72px]">
      <div className={`${container} flex flex-col items-center`}>
        <SectionTitle className={sectionTitleClass}>Depoimentos de quem viveu a transformação</SectionTitle>
        <div className="mt-[44px] w-full grid grid-cols-3 gap-[23px]">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </div>
    </section>

    {/* 8. Perguntas frequentes */}
    <section id={SECTION_IDS.duvidas} className="w-full bg-white pt-[88px] scroll-mt-[72px]">
      <div className="max-w-[908px] mx-auto px-6 flex flex-col items-center">
        <SectionTitle className={sectionTitleClass}>Perguntas frequentes</SectionTitle>
        <FaqList items={FAQS} className="mt-[13px] w-full" />
      </div>
    </section>

    {/* 9. CTA final */}
    <section className="w-full bg-white pt-[88px] pb-[94px] px-6">
      <div className="max-w-[1064px] mx-auto rounded-[24px] bg-[#0B2A5B] shadow-[0_6px_0_#FFC20E] pt-[64px] pb-[60px] px-6 flex flex-col items-center">
        <SectionTitle theme="dark" className={sectionTitleClass}>
          {FINAL_CTA.title}
        </SectionTitle>
        <p className="mt-[18px] text-[16px] text-white text-center">{FINAL_CTA.text}</p>
        <ActionButton href={MENTOR_FORM_URL} className="mt-[16px]">
          Quero ser mentor Pulse Mais
        </ActionButton>
      </div>
    </section>

    <FooterDesktop />
  </div>
)
