'use client'
import { useState } from "react"
import { CaretRight } from "@phosphor-icons/react";

interface DialogProps {
    Question: string;
    Text: string;
}


export const Dialog = ({ Question, Text }: DialogProps) => {

    const [display, setDisplay] = useState(false)


    return (
            <section className="group">
                <div className='cursor-pointer transition-all w-full px-3 flex items-center gap-2'>
                    <button onClick={() => setDisplay(!display)} className={`transition-all ${display ? "rotate-90 text-green-custom" : "rotate-0 hover:pt-2 group-hover:text-green-custom"}`}>
                        <CaretRight size={26} weight="bold" />
                    </button>
                    <h2 className={`text-xl font-semibold py-3 ${display ? "text-custom-green" : "text-inherit"}`} onClick={() => setDisplay(!display)}>{Question}</h2>
                </div>
                <aside className={`transition-all ${display ? "h-auto py-5" : "h-0"} px-3 w-full `}>
                    <p className={`text-lg ${display ? "block" : "hidden"}`}>{Text}</p>
                </aside>
                <div className={`transition-all w-full h-[1px] bg-gray-400 group-hover:bg-green-custom`}></div>
            </section>
    )
}