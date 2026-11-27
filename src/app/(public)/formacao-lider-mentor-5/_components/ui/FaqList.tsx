'use client'

import { useState } from 'react'

type FaqListProps = {
  items: { question: string; answer: string }[]
  className?: string
}

// Acordeão de perguntas frequentes. A primeira pergunta começa aberta.
export const FaqList = ({ items, className = '' }: FaqListProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className={`flex flex-col gap-[13px] ${className}`}>
      {items.map((item, index) => {
        const isOpen = openIndex === index

        return (
          <div
            key={item.question}
            className={`bg-white rounded-[12px] border transition-colors ${isOpen ? 'border-[#1F9D42]' : 'border-[#E3E9F3]'}`}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="w-full min-h-[66px] flex items-center justify-between gap-[16px] px-[20px] lg:px-[25px] py-[16px] text-left"
            >
              <span className="text-[15px] lg:text-[16px] font-bold text-[#0B2A5B]">{item.question}</span>
              <span className="relative w-[14px] h-[14px] shrink-0" aria-hidden>
                <span className="absolute top-1/2 left-0 w-full h-[3px] -translate-y-1/2 rounded-full bg-[#1F9D42]" />
                <span
                  className={`absolute left-1/2 top-0 h-full w-[3px] -translate-x-1/2 rounded-full bg-[#1F9D42] transition-transform ${
                    isOpen ? 'scale-y-0' : 'scale-y-100'
                  }`}
                />
              </span>
            </button>

            {isOpen && (
              <p className="px-[20px] lg:px-[25px] pb-[18px] -mt-[4px] text-[15px] leading-[23px] text-[#22304D]">
                {item.answer}
              </p>
            )}
          </div>
        )
      })}
    </div>
  )
}
