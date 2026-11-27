// =====================================================================
// CONTEÚDO DA LP "FORMAÇÃO LÍDER MENTOR 5"
// =====================================================================

export const MENTOR_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLScMaWILx5YYEDEQO8_Emb5lFYu9c7mWJ_3GU54O2BnWnaWHSQ/viewform?usp=sharing&ouid=106365533564038717584'
export const EXECUTIVE_SUMMARY_URL = 'https://drive.google.com/file/d/1a0izwlK2RW-ms6Gv9l1-poQpjFULfC8B/view?usp=sharing'

const WHATSAPP_NUMBER = '5511961870227'

export const LOGO_FML = '/assents/logos/logo-fml5.svg'

// Âncoras das seções. Na versão mobile os ids recebem o sufixo "-mobile".
export const SECTION_IDS = {
  formacao: 'formacao',
  paraQuem: 'para-quem',
  cronograma: 'cronograma',
  depoimentos: 'depoimentos',
  duvidas: 'duvidas',
} as const

export type SectionId = (typeof SECTION_IDS)[keyof typeof SECTION_IDS]

export const anchorId = (id: SectionId, mobile = false) => (mobile ? `${id}-mobile` : id)

export const NAV_ITEMS: { label: string; id: SectionId }[] = [
  { label: 'A formação', id: SECTION_IDS.formacao },
  { label: 'Para quem', id: SECTION_IDS.paraQuem },
  { label: 'Cronograma', id: SECTION_IDS.cronograma },
  { label: 'Depoimentos', id: SECTION_IDS.depoimentos },
  { label: 'Dúvidas', id: SECTION_IDS.duvidas },
]

export const FOOTER_NAV_ITEMS: { label: string; id: SectionId }[] = [
  { label: 'A formação', id: SECTION_IDS.formacao },
  { label: 'Para quem', id: SECTION_IDS.paraQuem },
  { label: 'Cronograma', id: SECTION_IDS.cronograma },
  { label: 'Dúvidas', id: SECTION_IDS.duvidas },
]

export const SOCIAL_LINKS: { label: string; href?: string }[] = [
  { label: 'Instagram', href: 'https://www.instagram.com/pulsemaisong/' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/pulsemaisong/' },
  { label: '+55 11 96187-0227', href: `https://wa.me/${WHATSAPP_NUMBER}` },
]

// Sessão 1 - Hero
export const HERO = {
  image: '/assents/images/foto-hero-fml5.png',
  description: 'Ajude jovens talentos de baixa renda a conquistar espaço no mercado de tecnologia.',
  badge: 'Inscrições Abertas!',
}

// Sessão 2 - Por que se tornar um Líder Mentor
export const REASONS = [
  {
    title: 'Experiência e propósito',
    text: 'Transforme sua vivência no mundo corporativo em propósito, conectando-se à missão de impulsionar carreiras e ampliar oportunidades para jovens talentos.',
  },
  {
    title: 'Habilidades de liderança',
    text: 'Fortaleça habilidades essenciais como comunicação eficaz e inteligência emocional, enquanto guia jovens talentos a enfrentarem os desafios do mercado.',
  },
  {
    title: 'Pontes para o futuro',
    text: 'Seja um catalisador de conexões valiosas e inovação, aprimorando sua experiência e integrando uma rede de profissionais com propósito de transformar carreiras.',
  },
]

// Sessão 3 - O que é a Formação
export const ABOUT = {
  image: '/assents/images/foto-sessao3-fml5.png',
  title: 'O que é a Formação Líder Mentor da Pulse Mais?',
  text: 'Desenvolvida pela Pulse Mais em parceria com a Fellipelli, a formação oferece as ferramentas para você se tornar um mentor preparado para apoiar jovens talentos em sua jornada profissional, com habilidades técnicas e comportamentais essenciais para impulsionar carreiras.',
  note: 'Vagas limitadas! Garanta sua vaga agora.',
}

export const STATS = [
  { value: '12h00', title: 'Carga horária total', text: '8 semanas de duração.\nEm média, 01h30 por semana.' },
  { value: '04h30', title: 'Workshops ao vivo', text: 'Obrigatórios.\n+ 07h30 de conteúdos na plataforma (obrigatórios).' },
  { value: '8 Módulos', title: 'Estrutura do curso', text: '8 módulos: um novo tema por semana, explorado em 3 vídeo-aulas curtas e práticas.' },
  { value: '+', title: 'Diferenciais', text: 'Workshops ao vivo, desafios práticos e conteúdo exclusivo.' },
]

// Sessão 4 - Para quem é esta formação
export const AUDIENCE_TEXT =
  'Se você trabalha em uma grande empresa ou empresa de tecnologia, atua em uma área de tecnologia (mesmo em uma empresa não tech) ou em áreas correlatas, e tem perfil sênior com anos de experiência no mundo corporativo, esta formação é para você. Conheça os perfis que buscamos:'

export const PROFILES = [
  {
    title: 'Profissionais em transição para liderança',
    subtitle: 'Executivos sênior',
    text: 'Prepare-se para liderar com confiança e mentorar jovens talentos em sua primeira ou futura posição de liderança.',
  },
  {
    title: 'Líderes que desejam se aperfeiçoar',
    subtitle: 'Gerentes',
    text: 'Uma oportunidade de aperfeiçoar suas habilidades de liderança, compartilhar experiência e se desenvolver como mentor de impacto.',
  },
  {
    title: 'Líderes experientes em busca de novos desafios',
    subtitle: 'Diretores, C-levels e conselheiros',
    text: 'Transforme sua experiência em ferramentas práticas para ser um mentor inspirador.',
  },
]

// Sessão 5 - Cronograma
export const CLASS_LABEL = 'Turma 5'

export const STEPS = [
  'Inscrições oficiais',
  'Entrevistas e seleção',
  'Início da formação (8 semanas)',
  'Mentoria com o jovem (12 encontros semanais)',
]

// Sessão 6 - Parceria
export const PARTNERSHIP = {
  title: 'Sobre a parceria Pulse Mais e Fellipelli',
  text: 'Duas instituições com propósitos transformadores se unem para preparar líderes mentores. A Pulse Mais é uma ONG que prepara jovens talentos de baixa renda para o mercado de tecnologia. Já a Fellipelli é a maior empresa em soluções de diagnósticos corporativos do Brasil focada em Relacionamento Humano, especializada em Neurociência e Coaching. Juntas, criaram um curso que alia impacto social e excelência na formação de mentores.',
}

// Sessão 7 - Depoimentos
export const TESTIMONIALS = [
  {
    name: 'Roberto Portella',
    role: 'Managing Partner – CIONET Brasil',
    photo: '/assents/images/foto-roberto-flm5.png',
    quote:
      'Mentorar é muito mais do que compartilhar experiências. Em um país como o nosso, onde o talento é abundante, a troca entre gerações e a construção conjunta de oportunidades podem ampliar horizontes e transformar trajetórias. Apoiar jovens que enxergam na tecnologia um caminho para o futuro é, para mim, uma forma concreta de contribuir para o desenvolvimento de pessoas e para a transformação positiva do Brasil.',
  },
  {
    name: 'Maira Ventura',
    role: 'Sr Solution Customer Success Manager',
    photo: '/assents/images/foto-maira-flm5.png',
    quote:
      'Ser mentora na Pulse Mais traduz uma troca super enriquecedora. Acompanhar de perto a evolução de quem está construindo a carreira com tanta vontade de crescer é muito gratificante, e a gente acaba aprendendo tanto quanto ensina. Sem dúvida, uma experiência que transforma a vida de quem participa!',
  },
  {
    name: 'Enzo de Almeida Rozo',
    role: 'Superintendente de Infraestrutura, Operações e Segurança de TI no Sicredi',
    photo: '/assents/images/foto-enzo-flm5.png',
    quote:
      'Ser mentor da Pulse Mais foi uma das experiências mais gratificantes da minha trajetória. Saí de uma realidade simples e humilde, e sei o quanto o apoio certo pode fazer diferença na vida de alguém. Por isso, poder retribuir hoje, ajudando no desenvolvimento de jovens, tem um valor imensurável para mim.',
  },
]

// Sessão 8 - Perguntas frequentes
// TODO: o design só traz a resposta da 1ª pergunta. As demais são rascunhos
// baseados no conteúdo da página e precisam ser validadas.
export const FAQS = [
  {
    question: 'O que é a Formação Líder Mentor Pulse Mais & Fellipelli?',
    answer:
      'Uma jornada de aprendizado estruturada para capacitar mentores voluntários. Combina teoria e prática, é 100% online e tem 12h00 de formação, divididas em 8 módulos ao longo de 8 semanas. Em média, 01h30 por semana.',
  },
  {
    question: 'Quais são os principais benefícios de se tornar um Líder Mentor?',
    answer:
      'Você transforma sua experiência em propósito, fortalece habilidades de liderança como comunicação eficaz e inteligência emocional e passa a integrar uma rede de profissionais comprometidos em transformar carreiras.',
  },
  {
    question: 'Quem pode se inscrever na Formação Líder Mentor?',
    answer:
      'Profissionais com perfil sênior que atuam em grandes empresas, empresas de tecnologia, áreas de tecnologia ou áreas correlatas: executivos sênior, gerentes, diretores, C-levels e conselheiros.',
  },
  {
    question: 'Quais são os benefícios de certificar-se como Líder Mentor?',
    answer:
      'Ao concluir a formação você passa a integrar a Rede de Mentores(as) da Pulse Mais e fica preparado para acompanhar um jovem talento em 12 encontros semanais de mentoria.',
  },
  {
    question: 'Como é estruturada a formação?',
    answer:
      'São 8 módulos, um novo tema por semana, explorado em 3 vídeo-aulas curtas e práticas, além de workshops ao vivo e desafios práticos.',
  },
  {
    question: 'Quais são os temas abordados nos módulos iniciais?',
    answer:
      'Os primeiros módulos trabalham os fundamentos da mentoria e habilidades como comunicação eficaz e inteligência emocional.',
  },
  {
    question: 'Quais são os materiais de apoio disponíveis?',
    answer: 'Vídeo-aulas na plataforma, workshops ao vivo, desafios práticos e conteúdo exclusivo.',
  },
  {
    question: 'Como é o processo de certificação?',
    answer:
      'A certificação considera a conclusão dos conteúdos obrigatórios da plataforma e a participação nos workshops ao vivo.',
  },
  {
    question: 'A formação é totalmente online?',
    answer: 'Sim. A formação é 100% online, com conteúdos na plataforma e workshops ao vivo.',
  },
  {
    question: 'Qual é a carga horária total da formação?',
    answer:
      '12h00 ao longo de 8 semanas: 04h30 de workshops ao vivo e 07h30 de conteúdos na plataforma, ambos obrigatórios. Em média, 01h30 por semana.',
  },
  {
    question: 'Quais são as vantagens de ser um mentor voluntário na Pulse Mais?',
    answer:
      'Você contribui diretamente para que jovens talentos de baixa renda conquistem espaço no mercado de tecnologia, enquanto desenvolve sua liderança e amplia sua rede de conexões.',
  },
]

// Sessão 9 - CTA final
export const FINAL_CTA = {
  title: 'Pronto para ser mentor?',
  text: 'Use sua experiência para transformar a carreira de um jovem.',
}
