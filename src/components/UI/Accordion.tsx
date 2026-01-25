'use client'
import { useState } from 'react'

interface AccordionProps {
  title: string
  children: React.ReactNode
}

export const Accordion = ({ title, children }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-center font-bold text-[#486284] flex items-center justify-center gap-2 py-2"
      >
        <span>{title}</span>
        <span className="text-[#486284]">{isOpen ? '−' : '+'}</span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="pt-2 text-[#486284] text-center">{children}</div>
      </div>
    </div>
  )
}


