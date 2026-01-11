'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface ProgramCard {
  title: string
  content: {
    formato?: string
    dedicacao?: string
    beneficios: string[]
  }
}

const programs: ProgramCard[] = [
  {
    title: 'Experiências de Mentorias de Curta Duração',
    content: {
      formato: 'Online ou Presencial em São Paulo',
      beneficios: [
        'Clareza sobre temas de carreira',
        'Rede profissional ampliada',
        'Aumento de repertório'
      ]
    }
  },
  {
    title: 'Eventos em Empresas de Tecnologia',
    content: {
      formato: 'Presencial em São Paulo',
      beneficios: [
        'Palestras inspiradoras',
        'Conheça profissionais do mercado',
        'Novos horizontes de carreira'
      ]
    }
  },
  {
    title: 'Programa Pulse Mais',
    content: {
      formato: 'Online ou Híbrido (Presencial/Online)',
      dedicacao: '6 meses',
      beneficios: [
        'Formação técnica e comportamental completa',
        'Computador/Notebook gratuito',
        'Vagas de emprego e bolsas de estudos para faculdade'
      ]
    }
  },
  {
    title: 'Programa de Mentoria',
    content: {
      formato: '(online/híbrido/presencial)',
      dedicacao: '4 meses',
      beneficios: [
        'Direcionamento de carreira individualizado',
        'Preparação para o mercado de trabalho',
        'Vagas de emprego e bolsas de estudos para faculdade'
      ]
    }
  }
]

export const GridPrograms = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section
      className="relative w-full bg-[#0F2849] py-[100px] overflow-hidden"
      style={{
        clipPath: 'polygon(0 50px, 100% 0, 100% 100%, 0 calc(100% - 50px))'
      }}
    >
      {/* Elementos Decorativos */}
      <div className="absolute top-0 left-0 z-0">
        <Image
          src="/assents/backgrounds/shape-amarelo.svg"
          alt="Shape Amarelo"
          width={200}
          height={200}
          className="w-auto h-auto"
        />
      </div>
      <div className="absolute bottom-0 right-0 z-0 translate-x-[10px] translate-y-[20px]">
        <Image
          src="/assents/backgrounds/shape-verde.svg"
          alt="Shape Verde"
          width={200}
          height={200}
          className="w-auto h-auto"
        />
      </div>

      {/* Conteúdo Principal */}
      <div className="relative z-10 max-w-[1440px] mx-auto">
        {/* Cabeçalho */}
        <div className="text-center mt-[100px]">
          <h2 className="text-[60px] font-bold text-white">É jovem?</h2>
          <h3 className="text-[35px] font-bold text-white mt-[10px]">
            Saiba como participar
          </h3>
        </div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-4 gap-8 mt-16 px-8 items-start">
          {programs.map((program, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* MOLDURA EXTERNA (Amarela) */}
              <div
                className={`border-2 rounded-[24px] transition-all duration-300 p-3 ${
                  hoveredCard === index
                    ? 'border-[#FCC41F]'
                    : 'border-transparent'
                }`}
                style={{
                  minHeight: '150px'
                }}
              >
                {/* CARD INTERNO (Container Geral) */}
                <div className="w-full h-full rounded-[15px] flex flex-col bg-transparent">
                  
                  {/* CABEÇALHO VERDE */}
                  {/* CORREÇÃO AQUI: Lógica de bordas arredondadas */}
                  <div
                    className={`bg-[#25B957] w-full flex items-center justify-center transition-all duration-300 ${
                      hoveredCard === index 
                        ? 'p-4 rounded-t-[15px] rounded-b-none' // Hover: Redondo em cima, Reto embaixo
                        : 'flex-1 p-[21px] rounded-[15px]'      // Normal: Todo Redondo
                    }`}
                    style={{ minHeight: hoveredCard === index ? 'auto' : '100%' }}
                  >
                    <h3 className="text-[24px] font-bold text-white text-center">
                      {program.title}
                    </h3>
                  </div>

                  {/* CONTEÚDO EXPANSÍVEL (Azul) */}
                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden bg-[#0F2849] rounded-b-[15px] ${
                      hoveredCard === index
                        ? 'max-h-[500px] opacity-100'
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="text-white text-left space-y-2 p-6">
                      {program.content.formato && (
                        <p>
                          <strong>Formato:</strong> {program.content.formato}
                        </p>
                      )}
                      {program.content.dedicacao && (
                        <p>
                          <strong>Dedicação:</strong> {program.content.dedicacao}
                        </p>
                      )}
                      {program.content.beneficios.length > 0 && (
                        <div>
                          <strong>Benefícios:</strong>
                          <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                            {program.content.beneficios.map((beneficio, i) => (
                              <li key={i} className="text-left">
                                {beneficio}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botões de Ação */}
        <div className="flex flex-row justify-center gap-[59px] mt-16">
          <Link href="https://preinscricao.pulsemais.org.br/2025">
            <button
              className="bg-[#FCC41F] text-white text-[16px] font-bold rounded-[50px] hover:opacity-90 transition-all"
              style={{ width: '340px', height: '50px' }}
            >
              Cadastre-se
            </button>
          </Link>
          <Link href="/apoie">
            <button
              className="bg-[#FCC41F] text-white text-[16px] font-bold rounded-[50px] hover:opacity-90 transition-all"
              style={{ width: '340px', height: '50px' }}
            >
              Torne nosso Parceiro
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}