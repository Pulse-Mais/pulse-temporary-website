'use client'
import { useState } from 'react'
import Image from 'next/image'

interface AccordionItemProps {
  title: string
  content: string
}

export const AccordionItem = ({ title, content }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="w-[305px]">
      {/* Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full h-[76px] bg-[#28A745] rounded-[15px] flex items-center justify-between px-4"
      >
        <span className="text-[18px] font-bold text-white text-left flex-1">
          {title}
        </span>
        <Image
          src="/assents/brand/drop-icon.svg"
          alt="Toggle"
          width={25}
          height={25}
          className={`transition-transform duration-300 ease-in-out ${
            isOpen ? 'rotate-90' : 'rotate-0'
          }`}
        />
      </button>

      {/* Content */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="w-[287px] mt-[9px] mb-[36px]">
          <div
            className="text-white text-[15px] font-normal text-left leading-relaxed"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </div>
    </div>
  )
}

