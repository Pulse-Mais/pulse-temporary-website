'use client'
import { useState } from "react"

// interface DialogProps {
//     display: boolean
// }

import { CaretRight, CaretDown } from '@/components/home/utils/Utils'

interface DialogProps {
Question: string;
Text: string;
}


export const Dialog = ({Question, Text}: DialogProps) => {

    const [display, setDisplay] = useState(false)


    return (
        <>
            <div className='w-full px-3 flex items-center gap-2'>
                {display
                    ?
                    (<button onClick={() => setDisplay(!display)}>
                        <CaretDown size={32} weight="bold" />
                    </button>)
                    :
                    (<button onClick={() => setDisplay(!display)}>
                        <CaretRight size={32} weight="bold" />
                    </button>)
                }
                <h2 className='text-xl font-semibold py-3' onClick={() => setDisplay(!display)}>{Question}</h2>
            </div>
            <div className={`w-full h-[1px] bg-[#1B2E3A]`}></div>
            <aside className={`${display ? "" : "hidden"} px-3 w-full  py-5`}>
                <p className='text-lg'>{Text}</p>
            </aside>
        </>
    )
}